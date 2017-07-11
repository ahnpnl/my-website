import React from 'react'
import { mount, shallow } from 'enzyme'
import Header from './Header'

describe('Header components', () => {
  it('renders a logo and a navigation button on small screen', () => {
    const deviceInfo = {
      deviceType: {
        isSmall: true
      }
    }

    const result = shallow(
      <Header deviceInfo={deviceInfo} isOpen={false} setOpenState={() => {}} />
    )

    expect(result).toMatchSnapshot()
  })

  it('renders a logo and normal navigation on medium up screen', () => {
    const deviceInfo = {
      deviceType: {
        isSmall: false
      }
    }

    const result = shallow(
      <Header deviceInfo={deviceInfo} isOpen={false} setOpenState={() => {}} />
    )

    expect(result).toMatchSnapshot()
  })

  it('calls method event.preventDefault and setOpenState when clicking on the menu icon on small screen', () => {
    const setOpenState = jest.fn()
    let preventDefaultWasCalled = false
    const deviceInfo = {
      deviceType: {
        isSmall: true
      }
    }

    const res = mount(
      <Header deviceInfo={deviceInfo} isOpen={false} setOpenState={setOpenState} />
    )

    res.find('a.compactmenu__link').simulate('click', {
      preventDefault() {
        preventDefaultWasCalled = true
      }
    })

    expect(setOpenState).toBeCalled()
    expect(preventDefaultWasCalled).toBe(true)
  })
})
