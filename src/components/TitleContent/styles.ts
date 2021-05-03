import styled from 'styled-components'
import { lighten } from 'polished'

export const Container = styled.div`
  width: 100%;
  flex-direction: row;
  display: flex;
  margin: 2rem 0;

  svg {
    background: ${({ theme }) => lighten(0.5, theme.colors.blue)};
    color: ${({ theme }) => theme.colors.blue};
    border-radius: 0.3rem;
    width: 2rem;
    height: 2rem;
    padding: 3px;
    margin-right: 1rem;
  }
`

export const Title = styled.h1`
  font: 700 1rem Nunito, sans-serif;
  color: ${({ theme }) => theme.colors.blue};
  font-size: 2rem;
  margin-right: 1rem;
`

export const SubTitle = styled.h3`
  font: 400 1rem Nunito, sans-serif;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  margin-top: 0.8rem;
`
