import styled, { css } from 'styled-components'
import Tooltip from '../Tooltip'

interface ContainerProps {
  isFilled: boolean
  isFocused: boolean
  hasError: boolean
}

export const Container = styled.div<ContainerProps>`
  border-radius: 0.5rem;
  background: ${props => props.theme.colors.inputBackground};
  color: ${props => props.theme.colors.inputText};
  border: 2px solid ${({ theme }) => theme.colors.inputBackground};
  height: 4rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 2rem;
  transition: all 200ms;
  outline: none;
  svg {
    font-size: 20px;
    margin-right: 10px;
    color: ${({ theme }) => theme.colors.text};
  }
  & + div {
    margin-top: 1rem;
  }
  ${({ isFocused, theme }) =>
    isFocused &&
    css`
      border: 2px solid ${theme.colors.blue};
    `}
  ${({ isFilled, theme }) =>
    isFilled &&
    css`
      svg {
        color: ${theme.colors.blue};
      }
    `}
  ${({ hasError, theme }) =>
    hasError &&
    css`
      border: 2px solid ${theme.colors.orange};
      svg {
        color: ${theme.colors.blue};
      }
    `}
    input {
    flex: 1;
    background: transparent;
    border: none;
    height: 100%;
    width: 100%;
    padding: 16px 0;
    &::placeholder {
      color: ${({ theme }) => theme.colors.text};
    }
    &,
    &:-internal-autofill-selected {
      background-color: transparent !important;
      color: ${({ theme }) => theme.colors.blue};
    }
    &:-webkit-autofill,
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus {
      ${({ theme }) => css`
        -webkit-box-shadow: 0 0 0px 1000px ${theme.colors.inputBackground} inset;
        -webkit-text-fill-color: ${theme.colors.text};
        transition: background-color 5000s ease-in-out 0s;
      `}
    }
  }
`

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }
  span {
    background: #c53030;
    color: #fff;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`
