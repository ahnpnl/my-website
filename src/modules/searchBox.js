// Action
export const OPEN_DROPDOWN = 'my-first-app/OPEN_DROPDOWN'
export const CHANGE_CATEGORY = 'my-first-app/categoryModal/CHANGE_CATEGORY'

// Reducer
export default function reducer (state = {open: false, text: 'Alle', categoryId: null}, action = {}) {
    switch (action.type) {
        case OPEN_DROPDOWN:
            let isOpen = !state.open
            return {
                ...state,
                open: isOpen
            }
        case CHANGE_CATEGORY:
            return {
                text: action.payload.categoryName,
                categoryId: action.payload.categoryId
            }
        default: return state
    }
}

// Action Creators
export function openDropdown() {
    return {
        type: OPEN_DROPDOWN,
        payload: null
    }
}

// Action Creators
export function changeCategory(categoryId, categoryName) {
    return {
        type: CHANGE_CATEGORY,
        payload: {
            categoryId: categoryId,
            categoryName: categoryName
        }
    }
}