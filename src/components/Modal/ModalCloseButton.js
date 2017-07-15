// @flow

import { rem } from 'polished'
import React from 'react'
import styled from 'styled-components'
import Icon from '../Icon/Icon'

const ModalCloseButton = styled.span`
  cursor: pointer;
  font-weight: bold;
  padding: ${ rem('5px') };
  margin: ${ rem('10px') };
  font-size: ${ rem('30px') };
`

ModalCloseButton.defaultProps = {
  children: <Icon name="close" fixedSize="small" />,
}

export default ModalCloseButton
