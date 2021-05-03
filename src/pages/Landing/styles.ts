import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.colors.background};

  justify-content: center;
`

export const InsideContainer = styled.div`
  width: 80vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: auto;
  text-align: center;

  img {
    width: 30%;
    margin-bottom: 2rem;
  }

  a,
  button {
    background: ${({ theme }) => theme.colors.orange};
    border-radius: 0.3rem;
    width: 3rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem auto;
    border: none;

    svg {
      color: ${({ theme }) => theme.colors.white};
    }

    &:hover {
      background: ${({ theme }) => theme.colors.lightOrange};
    }
  }
`

export const Title = styled.h1`
  font: 700 2rem 'Nunito', sans-serif;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1rem;
  margin-top: 1rem;
`

export const Subtitle = styled.h6`
  font: 300 1rem 'Nunito', sans-serif;
  color: ${({ theme }) => theme.colors.text};
`

export const InputBlock = styled.div`
  margin-top: 2rem;
  & + div {
    margin-top: 24px;
  }
  label {
    display: flex;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 8px;
    line-height: 24px;
    justify-content: center;
    span {
      font-size: 14px;
      color: #8fa7b3;
      margin-left: 24px;
      line-height: 24px;
    }
  }
  input,
  textarea {
    width: 100%;
    background: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.borderLine};
    border-radius: 0.5rem;
    outline: none;
    color: ${({ theme }) => theme.colors.text};
  }
  input {
    height: 64px;
    padding: 0 16px;
  }
  input[type='file'] {
    display: none;
  }
  textarea {
    min-height: 120px;
    max-height: 240px;
    resize: vertical;
    padding: 16px;
    line-height: 28px;
  }
`
