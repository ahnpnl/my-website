import axios from 'axios'

// Action
export const LOAD_CATEGORIES = 'my-first-app/categoryModal/LOAD_CATEGORIES'
export const LOAD_CATEGORIES_PENDING = `${LOAD_CATEGORIES}_PENDING`
export const LOAD_CATEGORIES_FULFILLED = `${LOAD_CATEGORIES}_FULFILLED`
export const LOAD_CATEGORIES_REJECTED = `${LOAD_CATEGORIES}_REJECTED`
export const LOAD_SUBCATEGORIES = 'my-first-app/categoryModal/LOAD_SUBCATEGORIES'
export const LOAD_SUBCATEGORIES_PENDING = `${LOAD_SUBCATEGORIES}_PENDING`
export const LOAD_SUBCATEGORIES_FULFILLED = `${LOAD_SUBCATEGORIES}_FULFILLED`
export const LOAD_SUBCATEGORIES_REJECTED = `${LOAD_SUBCATEGORIES}_REJECTED`
export const CLOSE_SUBCATEGORY_MODAL = 'my-first-app/categoryModal/CLOSE_SUBCATEGORY_MODAL'

// Reducer
export default function reducer (state = [], action = {}) {
    switch (action.type) {
        case LOAD_CATEGORIES_PENDING:
            return {
                isLoading: true
            }
        case LOAD_CATEGORIES_FULFILLED:
            return {
                categories: action.payload
            }
        case LOAD_CATEGORIES_REJECTED:
            return {
                error: true
            }
        case LOAD_SUBCATEGORIES_FULFILLED:
            return {
                ...state,
                subCategories: action.payload
            }
        case LOAD_SUBCATEGORIES_REJECTED:
            return {
                ...state,
                error: true
            }
        case CLOSE_SUBCATEGORY_MODAL:
            return {
                ...state,
                subCategories: []
            }
        default: return state
    }
}

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

export function loadSubCategories(categoryId) {
    return {
        type: LOAD_SUBCATEGORIES,
        payload: getPayload()
    }
    
    async function getPayload() {
        const response = await axios.get('/categories?categoryId=' + categoryId)
        return Object.keys(response.data).map(key => response.data[key])
            .map(data => data.subCategories)
    }
}

export function closeSubCategoryModal() {
    return {
        type: CLOSE_SUBCATEGORY_MODAL,
        payload: null
    }
}



