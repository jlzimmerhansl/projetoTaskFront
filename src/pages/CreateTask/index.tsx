/* eslint-disable camelcase */
import React, { useCallback, useRef, useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'
import * as Yup from 'yup'
import { FiArrowLeft, FiCopy } from 'react-icons/fi'

import getValidationErrors from '../../utils/getValidationErrors'
import { useToast } from '../../hooks/toast'

import Input from '../../components/Input'
import Button from '../../components/Button'
import Sidebar from '../../components/Sidebar'
import InputSelectSimple from '../../components/InputSelectSimple'
import ListItemTask from '../../components/ListItemTask'
import ModalEditTask from '../../components/ModalEditTask'

import api from '../../services/api'

import {
  Container,
  Title,
  MainContent,
  RightContent,
  TitleContent,
  RightContentInside,
  Label,
  Block,
  InputBlock
} from './styles'

interface TaskFormData {
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

interface IStory {
  id: string
  storyNumber: string
  title: string
}

interface StoryParams {
  id: string
}

const CreateTask: React.FC = () => {
  const params = useParams<StoryParams>()
  const [story, setStory] = useState<IStory>()
  const [loading, setLoading] = useState(false)
  const formRef = useRef<FormHandles>(null)
  const { addToast } = useToast()
  const history = useHistory()
  const { goBack } = useHistory()
  const [tasks, setTasks] = useState<TaskFormData[]>([])
  const [editingTask, setEditingTask] = useState<TaskFormData>(
    {} as TaskFormData
  )
  const [editModalOpen, setEditModalOpen] = useState(false)

  const optionsSelect = [
    { value: 'Sub-Task', label: 'Sub-Task' },
    { value: 'Sub-Development', label: 'Sub-Development' },
    { value: 'Sub-Test', label: 'Sub-Test' }
  ]

  useEffect(() => {
    api.get('task').then(response => {
      setTasks(response.data)
    })
  }, [tasks])

  useEffect(() => {
    api.get(`story/${params.id}`).then(response => {
      setStory(response.data)
    })
  }, [params.id])

  const handleCreateTask = useCallback(
    async (data: TaskFormData) => {
      try {
        await api.post('/task', {
          ...data,
          jiraKey: story?.storyNumber
        })
        addToast({
          type: 'success',
          title: 'Cadastro Realizado',
          description: 'Cadastro realizado com sucesso'
        })
      } catch (err) {
        const errors = getValidationErrors(err)

        formRef.current?.setErrors(errors)

        addToast({
          type: 'error',
          title: 'Erro no cadastro',
          description: 'Ocorreu um erro ao fazer o cadastro, tente novamente'
        })
      }
    },
    [addToast, history]
  )

  async function handleDeleteTask(id: string): Promise<void> {
    const result = window.confirm('Deseja deletar essa task?')

    if (result) {
      try {
        await api.delete(`/task/${id}`)

        const allTasks = tasks.filter(task => task.id !== id)

        setTasks(allTasks)

        addToast({
          type: 'success',
          title: 'Task Deletado',
          description: 'A task foi deletado com sucesso.'
        })
      } catch (error) {
        console.log(error)
        addToast({
          type: 'error',
          title: 'Erro',
          description: 'Não foi possível deletar a task.'
        })
      }
    }
  }

  async function handleUpdateTask(
    task: Omit<TaskFormData, 'id'>
  ): Promise<void> {
    try {
      const { id } = editingTask

      const { data } = await api.put<TaskFormData>(`/task/${id}`, {
        ...task
      })

      const updatedTasks = tasks.map(task => (task.id === id ? data : task))

      setTasks(updatedTasks)

      addToast({
        type: 'success',
        title: 'Hitória alterado',
        description: 'A task foi alterada com sucesso.'
      })
    } catch (err) {
      addToast({
        type: 'error',
        title: 'Task não foi alterada',
        description: 'Ocorreu um erro e não foi possível alterar a Task.'
      })
    }
  }

  function toggleEditModal(): void {
    setEditModalOpen(!editModalOpen)
  }

  function handleEditTask(task: TaskFormData): void {
    toggleEditModal()
    setEditingTask(task)
  }

  return (
    <>
      <ModalEditTask
        isOpen={editModalOpen}
        setIsOpen={toggleEditModal}
        editingTask={editingTask}
        handleUpdateTask={handleUpdateTask}
      />
      <div>
        <main>
          <Container>
            <Sidebar />
            <MainContent>
              <RightContent>
                <RightContentInside>
                  <button type="button" onClick={goBack}>
                    <FiArrowLeft size={24} />
                  </button>
                  <TitleContent>
                    <FiCopy />
                    <Title>Faça o Cadastro da task</Title>
                  </TitleContent>
                  <Form ref={formRef} onSubmit={handleCreateTask}>
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

                    <Button loading={loading} type="submit">
                      Cadastrar
                    </Button>
                  </Form>

                  <h1>Lista de Taks</h1>
                  {tasks &&
                    tasks.map(task => {
                      return (
                        <ListItemTask
                          key={task.id}
                          icon={FiCopy}
                          task={task}
                          handleDelete={handleDeleteTask}
                          handleEdit={handleEditTask}
                        />
                      )
                    })}
                </RightContentInside>
              </RightContent>
            </MainContent>
          </Container>
        </main>
      </div>
    </>
  )
}

export default CreateTask
