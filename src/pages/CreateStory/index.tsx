import React, { useCallback, useRef, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { FiBookmark, FiSend } from 'react-icons/fi'
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'
import * as Yup from 'yup'

import { Container, Wrapper, Block, Label, InputBlock } from './styles'
import getValidationErrors from '../../utils/getValidationErrors'
import { useToast } from '../../hooks/toast'

import GoBackArrow from '../../assets/images/goback-arrow.svg'

import Input from '../../components/Input'
import Button from '../../components/Button'
import ListItem from '../../components/ListItem'
import ModalEditStory from '../../components/ModalEditStory'
import Sidebar from '../../components/Sidebar'

import api from '../../services/api'

interface StoryFormData {
  id: string
  storyNumber: string
  title: string
}
const CreateTask: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const formRef = useRef<FormHandles>(null)
  const { addToast } = useToast()
  const history = useHistory()
  const [stories, setStories] = useState<StoryFormData[]>([])
  const [editingStory, setEditingStory] = useState<StoryFormData>(
    {} as StoryFormData
  )
  const [editModalOpen, setEditModalOpen] = useState(false)

  const handleCreateStory = useCallback(
    async (data: StoryFormData) => {
      try {
        formRef.current?.setErrors({})
        const schema = Yup.object().shape({
          storyNumber: Yup.string().required(
            'Número da História é obrigatório'
          ),
          title: Yup.string().required('Título da história é obrigatório')
        })

        await schema.validate(data, {
          abortEarly: false
        })

        await api.post('/story', data)

        alert('Cadastro efetuado com sucesso')
      } catch (err) {
        const errors = getValidationErrors(err)

        formRef.current?.setErrors(errors)

        addToast({
          type: 'error',
          title: 'Erro no cadastro',
          description: 'Ocorreu um erro ao fazer o cadastro, tente novamente'
        })

        console.log(errors)
      }
    },
    [addToast, history]
  )

  const handleJiraImporter = useCallback(async () => {
    try {
      await api.post('/exportJiraImporter')

      alert('Cadastro efetuado com sucesso')
    } catch (err) {
      const errors = getValidationErrors(err)

      formRef.current?.setErrors(errors)

      addToast({
        type: 'error',
        title: 'Erro no cadastro',
        description: 'Ocorreu um erro ao fazer o cadastro, tente novamente'
      })
    }
  }, [addToast, history])

  useEffect(() => {
    api.get('story').then(response => {
      setStories(response.data)
    })
  }, [stories])

  async function handleUpdateStory(
    story: Omit<StoryFormData, 'id'>
  ): Promise<void> {
    try {
      const { id } = editingStory

      console.log(editingStory)

      const { data } = await api.put<StoryFormData>(`/story/${id}`, {
        ...story
      })

      const updatedStories = stories.map(story =>
        story.id === id ? data : story
      )

      setStories(updatedStories)

      addToast({
        type: 'success',
        title: 'Hitória alterado',
        description: 'O história foi alterado com sucesso.'
      })
    } catch (err) {
      addToast({
        type: 'error',
        title: 'Hitória não foi alterado',
        description: 'Ocorreu um erro e não foi possível alterar a Hitória.'
      })

      console.log(err)
    }
  }

  async function handleDeleteStory(id: string): Promise<void> {
    const result = window.confirm('Deseja deletar essa hsitória?')

    if (result) {
      try {
        await api.delete(`/story/${id}`)

        const allStories = stories.filter(story => story.id !== id)

        setStories(allStories)

        addToast({
          type: 'success',
          title: 'História Deletado',
          description: 'A história foi deletado com sucesso.'
        })
      } catch (error) {
        console.log(error)
        addToast({
          type: 'error',
          title: 'Erro',
          description: 'Não foi possível deletar a história.'
        })
      }
    }
  }

  function toggleEditModal(): void {
    setEditModalOpen(!editModalOpen)
  }

  function handleStoryBatch(story: StoryFormData): void {
    toggleEditModal()
    setEditingStory(story)
  }

  return (
    <>
      <ModalEditStory
        isOpen={editModalOpen}
        setIsOpen={toggleEditModal}
        editingStory={editingStory}
        handleUpdateStory={handleUpdateStory}
      />

      <div>
        <main>
          <Container>
            <Sidebar />
            <Wrapper>
              <a href="/users">
                <img src={GoBackArrow} alt="Go Back" />
              </a>
              <Form ref={formRef} onSubmit={handleJiraImporter}>
                <Button loading={loading} type="submit">
                  <FiSend />
                  Gerar JiraImporter
                </Button>
              </Form>
              <h1>Faça o cadastro das Histórias</h1>
              <Form ref={formRef} onSubmit={handleCreateStory}>
                <InputBlock>
                  <Block>
                    <Label>Número da História</Label>
                    <Input name="storyNumber" type="text" />
                  </Block>
                  <Block>
                    <Label>Título</Label>
                    <Input name="title" type="text" />
                  </Block>
                </InputBlock>

                <Button loading={loading} type="submit">
                  Cadastrar
                </Button>
              </Form>

              <h1>Lista de Histórias</h1>
              {stories &&
                stories.map(story => {
                  return (
                    <ListItem
                      key={story.id}
                      icon={FiBookmark}
                      story={story}
                      handleDelete={handleDeleteStory}
                      handleEdit={handleStoryBatch}
                    />
                  )
                })}
            </Wrapper>
          </Container>
        </main>
      </div>
    </>
  )
}

export default CreateTask
