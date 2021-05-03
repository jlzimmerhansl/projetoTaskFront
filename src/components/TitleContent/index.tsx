import React from 'react'
import { IconBaseProps } from 'react-icons'

import { Container, Title, SubTitle } from './styles'

interface IProps {
  icon?: React.ComponentType<IconBaseProps>
  title: string
  subtitle?: string
}

const TitleContent: React.FC<IProps> = ({ icon: Icon, title, subtitle }) => {
  return (
    <Container>
      {Icon && <Icon />}
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </Container>
  )
}

export default TitleContent
