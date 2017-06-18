// Action
export const ADD_TO_CART = 'my-first-app/shoppingCartButton/ADD_TO_CART'

// Reducer
export default function reducer (state = {itemIds: [], totalItems: 0}, action = {}) {
    switch (action.type) {
        case ADD_TO_CART:
            let itemIds = state.itemIds
            let totalItems = state.totalItems

            if (itemIds.length !== 0) {
                if (itemIds.indexOf(action.payload) === -1) {
                    itemIds.push(action.payload)
                    totalItems++
                }
            } else {
                itemIds.push(action.payload)
                totalItems++
            }

            return {
                itemIds: itemIds,
                totalItems: totalItems
            }
        default: return state
    }
}

export function addToCart(itemId) {
    return {
        type: ADD_TO_CART,
        payload: itemId
    }
}