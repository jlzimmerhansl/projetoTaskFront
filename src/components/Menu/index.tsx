import React, { useState } from 'react'
import MenuItem from '../MenuItem'
import { IconBaseProps } from 'react-icons'
import { Container } from './styles'
import { useLocation } from 'react-router-dom'

import { FiBookmark } from 'react-icons/fi'
import { RiUserHeartLine } from 'react-icons/ri'

const Menu: React.FC = props => {
  const location = useLocation()

  const itemsData = [
    {
      name: 'História',
      icon: FiBookmark,
      path: '/create-story',
      key: 1
    }
  ]

  return (
    <Container>
      {itemsData.map((item, idx: number) => {
        return (
          <MenuItem
            key={idx}
            name={item.name}
            icon={item.icon}
            link={item.path}
          />
        )
      })}
    </Container>
  )
}

export default Menu
