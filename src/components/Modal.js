import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const ModalModalExample = ({name,events,thumbnail,description}) => (
  <Modal trigger={<Button>Show Hero</Button>}>
    <Modal.Header>{name}</Modal.Header>
    <Modal.Content image>
      <Image   src={thumbnail} />
      <Modal.Description>
        <Header>{events}</Header>
        <p>
         {description}
        </p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default ModalModalExample
