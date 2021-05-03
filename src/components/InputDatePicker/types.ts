import { ReactDatePickerProps } from 'react-datepicker'

export interface Props extends Omit<ReactDatePickerProps, 'onChange'> {
  name: string
  placeholder: string
}
