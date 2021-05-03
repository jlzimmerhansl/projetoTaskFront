import { OptionTypeBase, Props as SelectProps } from 'react-select'

export interface Props extends SelectProps<OptionTypeBase> {
  name: string
}
