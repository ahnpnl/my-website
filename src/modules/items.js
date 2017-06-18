import axios from 'axios'

// Action
export const FETCH_ALL = 'my-first-app/items/FETCH_ALL'
export const FETCH_ALL_PENDING = `${FETCH_ALL}_PENDING`
export const FETCH_ALL_FULFILLED = `${FETCH_ALL}_FULFILLED`
export const FETCH_ALL_REJECTED = `${FETCH_ALL}_REJECTED`
export const CLEAR_ALL = 'my-first-app/items/CLEAR_ALL'
export const ADD_TO_CART = 'my-first-app/items/ADD_TO_CART'

// Reducer
export default function reducer (state = [], action = {}) {
    switch (action.type) {
        case FETCH_ALL_PENDING:
            return {
                isLoading: true
            }
        case FETCH_ALL_FULFILLED:
            return action.payload
        case FETCH_ALL_REJECTED:
            return []
        case CLEAR_ALL:
            return []
        default: return state
    }
}

// Action Creators
export function fetchItems() {
    return {
        type: FETCH_ALL,
        payload: getPayload()
    }

    async function getPayload() {
        const response = await axios.get('/items')
        return Object.keys(response.data).map(key => response.data[key])
            .map(data => ({
                id: data.id,
                brand: data.brand,
                itemImg: data.itemImg,
                brandImg: data.brandImg,
                itemLink: data.itemLink,
                productLink: data.productLink,
                partNumber: data.partNumber,
                productDescription: data.productDescription,
                description: data.description,
                stockData: data.stockData
            }))
    }
}

export function clearItems() {
    return {
        type: CLEAR_ALL,
        payload: null,
    }
}