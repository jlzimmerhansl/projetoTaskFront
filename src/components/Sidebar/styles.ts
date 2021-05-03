import styled from 'styled-components'

export const Container = styled.aside`
  position: fixed;
  height: 100vh;
  padding: 2rem 2rem;
  background: ${({ theme }) => theme.colors.orange};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
export const MenuBlock = styled.div`
  padding: 3rem 0;
`

export const MenuItem = styled.div`
  color: blue;
`
