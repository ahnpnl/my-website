// @flow

import PropTypes from 'prop-types'
import React from 'react'
import ReactModal from 'react-modal'

export type ModalDisplayMode = 'smallScreen' | 'default'

type ModalArguments = {
  isOpen?: boolean,
  contentLabel: string,
  onRequestClose: () => mixed,
  shouldCloseOnOverlayClick?: boolean,
  children?: React.Element<any>[],
  overlayStyleOverrules?: {},
  bodyStyleOverrules?: {},
  displayMode?: ModalDisplayMode,
}

/**
 * Creates a Modal Component.
 *
 * The ReactModal component creates some new elements on the page.
 * These have to be styled by providing inline styles, as they cannot be replaced with styled components.
 *
 * @see https://reactcommunity.org/react-modal/
 */
const Modal = ({
                 isOpen = false, contentLabel, onRequestClose, shouldCloseOnOverlayClick = true,
                 children, displayMode = 'default'
               }: ModalArguments) => {

  let style
  if (displayMode === 'smallScreen') {
    const overlayStyleOverrules = {
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      zIndex: 5,
    }

    const bodyStyleOverrules = {
      top: `${'10px'}`,
      left: `${'10px'}`,
      right: `${'10px'}`,
      bottom: `${'10px'}`,
    }

    style = {
      overlay: Object.assign({}, {
        backgroundColor: 'rgba(0, 0, 0, 0.0)',
        cursor: 'pointer',
      }, overlayStyleOverrules),
      content: Object.assign({}, {
        cursor: 'auto',
        border: 'none',
        borderRadius: 0,
        padding: 0,
      }, bodyStyleOverrules),
    }
  } else {
    style = {
      overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.0)',
        cursor: 'pointer',
      },
      content: {
        cursor: 'auto',
        border: 'none',
        borderRadius: 0,
        padding: 0,
      },
    }
  }

  return (
    <ReactModal
      isOpen={isOpen}
      contentLabel={contentLabel}
      onRequestClose={onRequestClose}
      shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
      style={style}
    >
      {children}
    </ReactModal>
  )
}

Modal.propTypes = {

  /**
   * Boolean describing if the modal should be shown or not.
   */
  isOpen: PropTypes.bool,

  /**
   * String indicating how the content container should be announced to screenreaders.
   */
  contentLabel: PropTypes.string.isRequired,

  /**
   * Function that handles closing of the modal.
   */
  onRequestClose: PropTypes.func.isRequired,

  /**
   * Boolean indicating if the overlay should close the modal.
   */
  shouldCloseOnOverlayClick: PropTypes.bool,

  /**
   * String indicating the display mode of modal. There is default display mode with default css
   * An extra option is smallScreen to show proper style for modal on small screen
   */
  displayMode: PropTypes.string,
}

export default Modal
