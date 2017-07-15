// @flow

import React from 'react'
import './Row.scss'

type RowArguments = {
  children?: React.Element<any>[],
}

const Row = ({ className, children }: RowArguments) => (
  <section className={className}>
    {children}
  </section>
)

export default Row
