import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
`

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 4rem;
  text-align: left;
  margin-left: 9rem;
  h1 {
    font: 700 2.5rem 'Nunito', sans-serif;
    color: ${props => props.theme.colors.blue};
    margin-bottom: 1rem;
    margin-top: 2rem;
    text-align: center;
    width: 100%;
  }

  h5 {
    font: 400 1.5rem Roboto, sans-serif;
    color: ${({ theme }) => theme.colors.blue};
    margin-bottom: 3rem;
    text-align: left;
  }

  a {
    width: 100%;
    justify-content: flex-start;
  }

  form {
    width: 75%;
  }
`

export const InputBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  margin-bottom: 1rem;
`

export const Label = styled.label`
  color: ${props => props.theme.colors.text};
  margin-bottom: 1rem;
`

export const Block = styled.div`
  width: 100%;
`
