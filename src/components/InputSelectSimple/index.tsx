import React, { useCallback, useState, useRef, useEffect } from 'react'
import { useField } from '@unform/core'
import { FiAlertCircle } from 'react-icons/fi'
import Select from 'react-select/async'
import { Container, Error } from './styles'
import { Props } from './types'

interface Option {
  value: string
  label: string
}

const InputSelectSimple: React.FC<Props> = ({ name, ...rest }: Props) => {
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)

  const selectRef = useRef(null)
  const { registerField, defaultValue, fieldName, error } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      getValue: (ref: any) => {
        if (rest.cacheOptions) {
          if (!ref.select.state.value) {
            return []
          }

          return ref.select.state.value.map((option: Option) => option.value)
        }
        if (!ref.select.state.value) {
          return ''
        }

        return ref.select.state.value.value
      },
      setValue: (ref: any, value: Option) => {
        ref.select.select.selectOption(value)
      },
      clearValue: (ref: any) => {
        ref.select.select.clearValue()
      }
    })
  }, [fieldName, registerField, rest.cacheOptions])

  const handleInputFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleInputBlur = useCallback(() => {
    setIsFocused(false)

    setIsFilled(!!selectRef?.current)
  }, [])

  const handleInputChange = useCallback(() => {
    setIsFilled(!!selectRef?.current)
  }, [])

  return (
    <Container
      isFilled={isFilled}
      isFocused={isFocused}
      hasError={!!error}
      aria-label={`${name}-container`}
    >
      <Select
        ref={selectRef}
        name={name}
        defaultValue={defaultValue}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onChange={handleInputChange}
        classNamePrefix="react-select"
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

export default InputSelectSimple
