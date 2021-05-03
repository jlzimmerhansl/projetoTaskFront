import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
`
export const Block = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  margin-bottom: 1rem;
`

export const Label = styled.label`
  color: ${props => props.theme.colors.text};
  margin-bottom: 1rem;
`

export const InputBlock = styled.div`
  width: 100%;
`
