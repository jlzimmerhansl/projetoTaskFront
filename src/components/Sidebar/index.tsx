import React from 'react'

import { Container, MenuBlock, MenuItem } from './styles'
import Logo from '../../assets/images/logo-itau-varejo-desktop.png'
import Menu from '../Menu'

const Sidebar: React.FC = () => {
  return (
    <Container>
      <img src={Logo} alt="Itau" />
      <Menu />
    </Container>
  )
}

export default Sidebar
