import { OptionTypeBase } from 'react-select'
import { AsyncProps } from 'react-select/async'

export interface Props extends AsyncProps<OptionTypeBase> {
  name: string
}
