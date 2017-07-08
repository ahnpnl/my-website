const _ACTION_PREFIX = 'my-website/header'

export const SET_OPEN_STATE = `${_ACTION_PREFIX}/SET_OPEN_STATE`

export default function reducer(state = { isOpen: false }, action) {
  switch (action.type) {
    case SET_OPEN_STATE:
      return {
        ...state,
        isOpen: action.payload
      }
    default:
      return state
  }
}

export const setOpenState = (isOpen) => ({
  type: SET_OPEN_STATE,
  payload: isOpen,
  meta: {},
  error: undefined,
})
