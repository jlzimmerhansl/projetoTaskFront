import React, { useCallback, useState, useRef, useEffect } from 'react'
import { useField } from '@unform/core'
import { FiAlertCircle } from 'react-icons/fi'
import ReactInputMask from 'react-input-mask'
import { Container, Error } from './styles'
import { Props } from './types'

const InputMask: React.FC<Props> = ({ name, ...rest }: Props) => {
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)

  const inputRef = useRef(null)
  const { registerField, defaultValue, fieldName, error } = useField(name)
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      setValue(ref: any, value: string) {
        ref.setInputValue(value)
      },
      clearValue(ref: any) {
        ref.setInputValue('')
      }
    })
  }, [fieldName, registerField])

  const handleInputFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleInputBlur = useCallback(() => {
    setIsFocused(false)

    setIsFilled(!!inputRef?.current)
  }, [])

  const handleInputChange = useCallback(() => {
    setIsFilled(!!inputRef?.current)
  }, [])

  return (
    <Container
      isFilled={isFilled}
      isFocused={isFocused}
      hasError={!!error}
      aria-label={`${name}-container`}
    >
      <ReactInputMask
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

export default InputMask
