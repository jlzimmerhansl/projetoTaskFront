import React, { useCallback, useState, useRef, useEffect } from 'react'
import { useField } from '@unform/core'
import { FiAlertCircle } from 'react-icons/fi'
import ReactDatePicker from 'react-datepicker'
import { Container, Error } from './styles'
import { Props } from './types'
import 'react-datepicker/dist/react-datepicker.css'

const InputDatePicker: React.FC<Props> = ({
  name,
  placeholder,
  ...rest
}: Props) => {
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)

  const datepickerRef = useRef(null)

  const { registerField, defaultValue, fieldName, error } = useField(name)
  const [date, setDate] = useState(defaultValue || null)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: datepickerRef.current,
      path: 'props.selected',
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

    setIsFilled(!!datepickerRef?.current)
  }, [])

  const handleInputChange = useCallback(() => {
    setIsFilled(!!datepickerRef?.current)
  }, [])

  return (
    <Container
      isFilled={isFilled}
      isFocused={isFocused}
      hasError={!!error}
      aria-label={`${name}-container`}
    >
      <ReactDatePicker
        ref={datepickerRef}
        name={name}
        selected={date}
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

export default InputDatePicker
