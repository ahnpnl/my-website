import { mapDispatchToProps, mapStateToProps } from './Header'

describe('Header', () => {
  describe('mapStateToProps', () => {
    it('maps the proper fields from the state to the props', () => {
      const state = {
        deviceInfo: {},
        header: {
          isOpen: {}
        }
      }

      const props = mapStateToProps(state)

      expect(props.deviceInfo).toBe(state.deviceInfo)
      expect(props.isOpen).toBe(state.header.isOpen)
    })
  })

  describe('mapDispatchToProps', () => {
    let dispatchWasCalledWith = undefined
    const dispatch = (arg) => dispatchWasCalledWith = arg
    const props = mapDispatchToProps(dispatch)
    it('dispatches an open action', () => {
      props.setOpenState(true)

      expect(dispatchWasCalledWith).toMatchSnapshot()
    })

    it('dispatches a close action', () => {
      props.setOpenState(false)

      expect(dispatchWasCalledWith).toMatchSnapshot()
    })
  })
})
