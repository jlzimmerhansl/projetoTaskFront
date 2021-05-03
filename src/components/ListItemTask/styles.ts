import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 95%;
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

  #formHour {
    display: grid;
    grid-template-columns: 2fr 1fr;

    button {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      margin-top: 0;
      background: ${({ theme }) => theme.colors.orange};
      cursor: pointer;
      align-items: center;

      svg {
        color: ${({ theme }) => theme.colors.white};
      }
    }
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

  div.availability-container {
    p {
      display: none;
    }

    .switch {
      position: relative;
      display: inline-block;
      width: 56px;
      height: 16px;
      margin-left: 12px;
      & input {
        opacity: 0;
        width: 0;
        height: 0;
      }
      .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: ${({ theme }) => theme.colors.error};
        -webkit-transition: 0.4s;
        transition: 0.4s;
        border-radius: 16px;
        &:before {
          position: absolute;
          content: '';
          height: 11px;
          width: 20px;
          left: 1px;
          bottom: 3px;
          background-color: white;
          -webkit-transition: 0.4s;
          transition: 0.4s;
          border-radius: 10px;
        }
      }

      input:checked + .slider {
        background-color: ${({ theme }) => theme.colors.blue};
      }
      input:focus + .slider {
        box-shadow: 0 0 1px #2196f3;
      }
      input:checked + .slider:before {
        -webkit-transform: translateX(32px);
        -ms-transform: translateX(32px);
        transform: translateX(32px);
      }
    }
  }
`
