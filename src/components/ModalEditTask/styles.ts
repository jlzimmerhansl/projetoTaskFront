import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
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
