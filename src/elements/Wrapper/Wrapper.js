// @flow

import React from 'react'
import './Wrapper.scss'

type WrapperArguments = {
  className?: string,
  children?: React.Element<any>[],
}

const Wrapper = ({ className, children }: WrapperArguments) => (
  <div className="wrapper">
    {children}
  </div>
)

export default Wrapper
