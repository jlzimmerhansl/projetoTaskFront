/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/ban-types */
import React, { useState, useRef, FormEvent } from 'react'
import { FiList, FiEdit, FiCheck, FiTrash } from 'react-icons/fi'
import { IconBaseProps } from 'react-icons'
import { Link } from 'react-router-dom'
import { useToast } from '../../hooks/toast'

import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'

import { Container, ButtonBox } from './styles'

import api from '../../services/api'
import Input from '../Input'
import Button from '../Button'

interface ITask {
  id: string
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

interface IProps {
  task: ITask
  icon?: React.ComponentType<IconBaseProps>
  handleDelete: (id: string) => {}
  handleEdit: (task: ITask) => void
}

const ListItemTask: React.FC<IProps> = ({
  icon: Icon,
  task,
  handleDelete,
  handleEdit
}: IProps) => {
  const { addToast } = useToast()
  const formRef = useRef<FormHandles>(null)
  const [hoursChange, setHoursChange] = useState('')
  const [loading, setLoading] = useState(false)

  function setEditingTask(): void {
    handleEdit(task)
  }

  function handleChange(data: ITask) {
    const {
      id,
      issueType,
      description,
      summary,
      hours,
      issueId,
      jiraKey,
      epicLink,
      complexityPoints,
      priority,
      components,
      fixVersions,
      labels,
      dueDate,
      team,
      originalEstimate
    } = task

    api.put(`/task/${id}`, {
      issueType,
      description,
      summary,
      hours: hoursChange,
      issueId,
      jiraKey,
      epicLink,
      complexityPoints,
      priority,
      components,
      fixVersions,
      labels,
      dueDate,
      team,
      originalEstimate
    })

    alert('alterado')
    console.log(hours)
  }

  return (
    <Container>
      {Icon && <Icon />}
      <p>{task.issueType}</p>
      <p>{task.description}</p>
      <Form ref={formRef} onSubmit={handleChange} id="formHour">
        <Input name="hours" type="number" />

        <button type="submit">
          <FiCheck />
        </button>
      </Form>
      <ButtonBox>
        <button onClick={() => setEditingTask()}>
          <FiEdit />
        </button>
        <button onClick={() => handleDelete(task.id)}>
          <FiTrash />
        </button>
      </ButtonBox>
    </Container>
  )
}

export default ListItemTask
