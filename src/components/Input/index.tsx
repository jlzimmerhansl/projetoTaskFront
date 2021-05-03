import React, { useCallback, useState, useRef, useEffect } from 'react'
import { useField } from '@unform/core'
import { FiAlertCircle } from 'react-icons/fi'

import { Container, Error } from './styles'
import { InputProps } from './types'

const Input: React.FC<InputProps> = ({ icon: Icon, name, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)

  const inputRef = useRef<HTMLInputElement>(null)
  const { registerField, defaultValue, fieldName, error } = useField(name)
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  const handleInputFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleInputBlur = useCallback(() => {
    setIsFocused(false)

    setIsFilled(!!inputRef?.current?.value)
  }, [])

  const handleInputChange = useCallback(() => {
    setIsFilled(!!inputRef?.current?.value)
  }, [])

  return (
    <Container
      isFilled={isFilled}
      isFocused={isFocused}
      hasError={!!error}
      aria-label={`${name}-container`}
    >
      {Icon && <Icon />}
      <input
        ref={inputRef}
        name={name}
        defaultValue={defaultValue}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onChange={handleInputChange}
        {...rest}
      />
      {error && (
        <Error title={error}>
          <FiAlertCircle color="#c53030" size={20} />
        </Error>
      )}
    </Container>
  )
}

export default Input
