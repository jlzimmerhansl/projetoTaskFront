import styled from 'styled-components'

export const Container = styled.div`
  width: 75%;
  height: 4rem;
  background: ${({ theme }) => theme.colors.lighBlue};
  justify-content: space-between;
  border-radius: 0.5rem;
  flex-direction: row;
  display: grid;
  grid-template-columns: 1fr 4fr 3fr 2fr 1fr;
  align-items: center;
  margin-bottom: 2rem;

  svg {
    color: ${({ theme }) => theme.colors.blue};
    margin-left: 1rem;
  }

  p {
    color: ${({ theme }) => theme.colors.blue};
    font: 400 16px Roboto, sans-serif;
  }
`

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-right: 1rem;

  button,
  a {
    background: transparent;
    border: transparent;
    cursor: pointer;

    svg {
      color: ${({ theme }) => theme.colors.blue};
    }
  }
`
