// @flow

import React from 'react'
import PropTypes from 'prop-types'
import Button from '../../elements/Button/Button'

type ModalHeaderArguments = {
  children?: React.Element<any>[],
  onRequestClose: () => mixed,
  closeButtonTitle: string,
}

/**
 * The header for the modal, containing a title and a close button.
 */
const ModalHeader = ({ children, onRequestClose, closeButtonTitle }: ModalHeaderArguments) => (
  <div className="modal__header">
    <h2>{children}</h2>
    <Button onClick={onRequestClose} appearance="close" icon="close" />
  </div>
)

ModalHeader.propTypes = {

  /**
   * The title that should be shown when hovering over the "close" button.
   */
  closeButtonTitle: PropTypes.string,

  /**
   * The method that is called when the "close" button is clicked.
   */
  onRequestClose: PropTypes.func.isRequired,
}

export default ModalHeader
