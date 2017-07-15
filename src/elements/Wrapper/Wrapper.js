// @flow

import React from 'react'
import './Wrapper.scss'

type WrapperArguments = {
  className?: string,
  children?: React.Element<any>[],
}

const Wrapper = ({ name, children }: WrapperArguments) => {
  let className = 'wrapper'
  if (name !== undefined) {
    className = className + '__' + name;
  }

  return (
    <div className={className}>
      {children}
    </div>
  )
}



export default Wrapper
