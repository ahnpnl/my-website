import axios from 'axios'

// Action
export const LOGIN = 'my-first-app/LOGIN'
export const LOGIN_PENDING = `${LOGIN}_PENDING`
export const LOGIN_FULFILLED = `${LOGIN}_FULFILLED`
export const LOGIN_REJECTED = `${LOGIN}_REJECTED`

// Reducer
export default function reducer (state = { success: false }, action = {}) {
    switch (action.type) {
        case LOGIN_PENDING:
            return state
        case LOGIN_FULFILLED:
            return {
                success: action.payload
            }
        case LOGIN_REJECTED:
            return {
                success: action.payload
            }
        default: return state
    }
}

// Action Creators
export function handleSubmit(username, password) {
    return {
        type: LOGIN,
        payload: getPayload()
    }

    async function getPayload() {
        const response = await axios.post('/login', {username: username, password: password})
        console.log(response)

        if (response.status === 200) {
            return {
                success: true
            }
        } else {
            return {
                success: false
            }
        }
    }
}