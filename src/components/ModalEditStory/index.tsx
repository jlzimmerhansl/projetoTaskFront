/* eslint-disable camelcase */
import React, { useRef, useCallback } from 'react'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import Modal from '../Modal'
import Input from '../Input'
import Button from '../Button'
import { FiCheckSquare } from 'react-icons/fi'

import { Container, Block, InputBlock, Label } from './styles'

interface IStory {
  // id: string
  storyNumber: string
  title: string
}

interface IModalProps {
  isOpen: boolean
  setIsOpen: () => void
  handleUpdateStory: (story: Omit<IStory, 'id'>) => void
  editingStory: IStory
}

interface IEditStoryData {
  // id: string
  storyNumber: string
  title: string
}

const ModalEditStory: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
  editingStory,
  handleUpdateStory
}) => {
  const formRef = useRef<FormHandles>(null)

  const handleSubmit = useCallback(
    async (data: IEditStoryData) => {
      handleUpdateStory(data)
      console.log(data)
    },
    [handleUpdateStory, setIsOpen]
  )

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingStory}>
        <h1>Editar História</h1>
        <Container>
          <Label>Número da História</Label>
          <Input name="story_number" type="text" />

          <Label>Título</Label>
          <Input name="story_title" type="email" />

          <Button type="submit">
            Cadastrar
            <FiCheckSquare size={24} />
          </Button>
        </Container>
      </Form>
    </Modal>
  )
}

export default ModalEditStory
