/* eslint-disable @typescript-eslint/ban-types */
import React, { useCallback } from 'react'
import { FiCopy, FiEdit, FiTrash } from 'react-icons/fi'
import { IconBaseProps } from 'react-icons'
import { Link } from 'react-router-dom'

import { Container, ButtonBox } from './styles'

interface IStory {
  id: string
  storyNumber: string
  title: string
}

interface IProps {
  story: IStory
  icon?: React.ComponentType<IconBaseProps>
  handleDelete: (id: string) => {}
  handleEdit: (user: IStory) => void
}

const ListItem: React.FC<IProps> = ({
  icon: Icon,
  story,
  handleDelete,
  handleEdit
}: IProps) => {
  function setEditingUser(): void {
    handleEdit(story)
  }

  return (
    <Container>
      {Icon && <Icon />}
      <p>{story.storyNumber}</p>
      <p>{story.title}</p>
      <ButtonBox>
        <Link to={`/create-task/${story.id}`}>
          <FiCopy />
        </Link>
        <button onClick={() => setEditingUser()}>
          <FiEdit />
        </button>
        <button onClick={() => handleDelete(story.id)}>
          <FiTrash />
        </button>
      </ButtonBox>
    </Container>
  )
}

export default ListItem
