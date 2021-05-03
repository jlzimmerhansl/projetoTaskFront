import React, { useRef, useCallback } from 'react'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import Modal from '../Modal'
import Input from '../Input'
import Button from '../Button'
import { FiCheckSquare } from 'react-icons/fi'
import InputSelectSimple from '../../components/InputSelectSimple'

import { Container, Block, InputBlock, Label } from './styles'

interface ITask {
  // id: string
  issueType: string
  description: string
  summary: string
  hours: number
  issueId: number
  jiraKey: string
  epicLink: string
  complexityPoints: string
  priority: string
  components: string
  fixVersions: string
  labels: string
  dueDate: string
  team: string
  originalEstimate: number
}

interface IModalProps {
  isOpen: boolean
  setIsOpen: () => void
  handleUpdateTask: (task: Omit<ITask, 'id'>) => void
  editingTask: ITask
}

interface IEditTaskData {
  // id: string
  issueType: string
  description: string
  summary: string
  hours: number
  issueId: number
  jiraKey: string
  epicLink: string
  complexityPoints: string
  priority: string
  components: string
  fixVersions: string
  labels: string
  dueDate: string
  team: string
  originalEstimate: number
}

const ModalEditTask: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
  editingTask,
  handleUpdateTask
}) => {
  const formRef = useRef<FormHandles>(null)

  const handleSubmit = useCallback(
    async (data: IEditTaskData) => {
      handleUpdateTask(data)
    },
    [handleUpdateTask, setIsOpen]
  )

  const optionsSelect = [
    { value: 'Sub-Task', label: 'Sub-Task' },
    { value: 'Sub-Development', label: 'Sub-Development' },
    { value: 'Sub-Test', label: 'Sub-Test' }
  ]

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingTask}>
        <h1>Editar Task</h1>
        <Container>
          <InputBlock>
            <Block>
              <Label>IssueId</Label>
              <Input name="issueId" type="number" />
            </Block>
            <Block>
              <Label>Issue Type</Label>
              <InputSelectSimple
                name="issueType"
                loadOptions={optionsSelect}
                defaultOptions={optionsSelect}
              />
            </Block>
            <Block>
              <Label>Summary</Label>
              <Input name="title" type="text" />
            </Block>
          </InputBlock>
          <Label>Descrição</Label>
          <Input name="description" type="text" />
          <InputBlock>
            <Block>
              <Label>EpicLink</Label>
              <Input name="epicLink" type="text" />
            </Block>
            <Block>
              <Label>Complexity Points</Label>
              <Input name="complexityPoints" type="text" />
            </Block>
            <Block>
              <Label>Priority</Label>
              <Input name="priority" type="text" />
            </Block>
          </InputBlock>

          <InputBlock>
            <Block>
              <Label>Components</Label>
              <Input name="components" type="text" />
            </Block>
            <Block>
              <Label>FixVersions</Label>
              <Input name="fixVersions" type="text" />
            </Block>
            <Block>
              <Label>Labels</Label>
              <Input name="labels" type="text" />
            </Block>
          </InputBlock>
          <InputBlock>
            <Block>
              <Label>DueDate</Label>
              <Input name="dueDate" type="date" />
            </Block>
            <Block>
              <Label>Original Estimate</Label>
              <Input name="originalEstimate" type="number" />
            </Block>
          </InputBlock>

          <Button type="submit">
            Cadastrar
            <FiCheckSquare size={24} />
          </Button>
        </Container>
      </Form>
    </Modal>
  )
}

export default ModalEditTask
