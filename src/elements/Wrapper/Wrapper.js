// @flow

import React from 'react'
import './Wrapper.scss'

type WrapperArguments = {
  name?: string,
  children?: React.Element<any>[],
}

const Wrapper = ({ name, children }: WrapperArguments) => {
  let className = 'wrapper'
  if (name !== undefined) {
    className = className + ' ' + className + '__' + name;
  }

  return (
    <div className={className}>
      {children}
    </div>
  )
}



export default Wrapper
