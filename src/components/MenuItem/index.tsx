import React, { useState } from 'react'
import { IconBaseProps } from 'react-icons'

import { Container, Item, NameLink, active } from './styles'

interface ItemProps {
  name: string
  icon: React.ComponentType<IconBaseProps>
  link: string
}

const MenuItem: React.FC<ItemProps> = ({ icon: Icon, name, link }) => {
  return (
    <Container>
      <Item exact activeClassName={active} to={link}>
        {Icon && <Icon />}
        <NameLink>{name}</NameLink>
      </Item>
    </Container>
  )
}

export default MenuItem
