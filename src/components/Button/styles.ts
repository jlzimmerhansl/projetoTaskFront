import styled, { css } from 'styled-components'
import { shade } from 'polished'

export const Container = styled.button`
  background: ${({ theme }) => theme.colors.orange};
  border: 0;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.white};
  height: 56px;
  padding: 0 16px;
  font-weight: 400;
  margin-top: 16px;
  transition: background-color 200ms;
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `}
  svg {
    margin-right: 8px;
    color: ${({ theme }) => shade(0.1, theme.colors.white)};
  }
  &:hover {
    background: ${({ theme }) => shade(0.1, theme.colors.blue)};
  }
`
