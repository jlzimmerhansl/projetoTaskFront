import styled from 'styled-components'
import { shade, lighten } from 'polished'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`

export const Title = styled.h1`
  font: 700 1rem Nunito, sans-serif;
  color: ${({ theme }) => theme.colors.blue};
  font-size: 2rem;
  margin-right: 1rem;
`
export const MainContent = styled.main`
  width: 100vw;
  min-height: 100vh;
`

export const RightContent = styled.div`
  width: 100%;

  img {
    width: 70%;
    align-items: center;
    margin: auto;
  }

  h1 {
    margin-top: 2rem;
    color: ${({ theme }) => theme.colors.blue};
  }
`

export const RightContentInside = styled.div`
  width: 70vw;
  margin: auto;
  button {
    border: none;
    margin-top: 2rem;

    svg {
      color: ${({ theme }) => theme.colors.blue};

      &:hover {
        color: ${({ theme }) => lighten(0.5, theme.colors.blue)};
      }
    }
  }
`

export const TitleContent = styled.div`
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
export const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font: 400 1rem Nunito, sans-serif;
  margin-bottom: 2rem;

  svg {
    margin-right: 1rem;
    color: ${({ theme }) => theme.colors.blue};
  }
`

export const TitleParagraph = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font: 400 1rem Nunito, sans-serif;
  font-size: 2rem;
  margin-bottom: 2rem;
`
export const Label = styled.label`
  color: ${props => props.theme.colors.text};
  margin-bottom: 1rem;
`

export const InputBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 4fr;
  grid-gap: 2rem;
  margin-bottom: 1rem;
`

export const Block = styled.div`
  width: 100%;
`
