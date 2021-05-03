/* eslint-disable multiline-ternary */
import React, { ButtonHTMLAttributes } from 'react'
import { PulseLoader } from 'react-spinners'

import { Container } from './styles'
import colors from '../../styles/theme'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean
}

const Button: React.FC<ButtonProps> = ({ loading, children, ...rest }) => {
  return (
    <Container id="riple-button" {...rest}>
      {loading ? (
        <PulseLoader color={colors.colors.white} size={10} />
      ) : (
        children
      )}
    </Container>
  )
}

export default Button
