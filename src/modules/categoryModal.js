import axios from 'axios'

const _ACTION_PREFIX = 'my-first-app/categoryModal'

const OPEN_MODAL = `${_ACTION_PREFIX}/OPEN_MODAL`
const CLOSE_MODAL = `${_ACTION_PREFIX}/CLOSE_MODAL`
const LOAD_CATEGORIES = 'my-first-app/LOAD_CATEGORIES'
const LOAD_CATEGORIES_PENDING = `${LOAD_CATEGORIES}_PENDING`
const LOAD_CATEGORIES_FULFILLED = `${LOAD_CATEGORIES}_FULFILLED`
const LOAD_CATEGORIES_REJECTED = `${LOAD_CATEGORIES}_REJECTED`

// TODO: Connect the reducer.
export default function reducer(state = { showModal: false}, action) {
    switch (action.type) {
        case OPEN_MODAL:
        case CLOSE_MODAL:
            return {
                showModal: action.payload
            }
        case LOAD_CATEGORIES_PENDING:
            return {
                ...state,
                isLoading: true
            }
        case LOAD_CATEGORIES_FULFILLED:
            return {
                ...state,
                isLoading: false,
                categories: action.payload
            }
        case LOAD_CATEGORIES_REJECTED:
            return {
                ...state,
                isLoading: false,
                error: true
            }
        default:
            return state
    }
}

export const handleOpenModal = () => ({
    type: OPEN_MODAL,
    payload: true,
    meta: {},
    error: undefined,
})

export const handleCloseModal = () => ({
    type: CLOSE_MODAL,
    payload: false,
    meta: {},
    error: undefined,
})

export function loadCategories() {
    return {
        type: LOAD_CATEGORIES,
        payload: getPayload()
    }

    async function getPayload() {
        const response = await axios.get('/categories')
        return Object.keys(response.data).map(key => response.data[key])
            .map(data => ({
                categoryId: data.categoryId,
                categoryName: data.categoryName
            }))
    }
}
