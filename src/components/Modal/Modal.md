Modal example:

    // DO NOT COPY THESE IMPORTS TO YOUR CODE!!!!!
    const ModalHeader = require('../../molecules/Modal/ModalHeader').default;
    const ModalBody = require('../../atoms/Modal/ModalBody').default;
    
    <div>
      <button onClick={() => { setState({ isOpen: true }) }}>Click Me!</button>
      <Modal
          isOpen={state.isOpen}
          contentLabel="An Example Modal"
          onRequestClose={() => {
            setState({ isOpen: false })
          }}
      >
        <ModalHeader onRequestClose={() => { setState({ isOpen: false }) }} closeButtonTitle="Close Modal">Wow!</ModalHeader>
        <ModalBody>
          <p>It is a modal!</p>
        </ModalBody>
      </Modal>
    </div>
