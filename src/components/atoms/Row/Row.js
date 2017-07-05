// @flow

import React from 'react'

type RowArguments = {
  children?: React.Element<any>[],
}

const Row = ({ children }: RowArguments) => (
  <div className="row">
    {children}
  </div>
)

export default Row
