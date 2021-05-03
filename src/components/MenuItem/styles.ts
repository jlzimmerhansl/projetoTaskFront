import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`

export const active = 'nav-item-active'

export const Item = styled(NavLink).attrs({
  active
})`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;
  letter-spacing: 0.1px;
  border-left: 3px solid #fff;
  height: 2rem;
  svg {
    fill: ${({ theme }) => theme.colors.white};
    margin: 0 0.5rem;
  }
  &.${active} {
    color: ${({ theme }) => theme.colors.white};
    border-left: 3px solid #fff;
    svg {
      fill: ${({ theme }) => theme.colors.blue};
    }
  }
`

export const Icon = styled.div`
  margin: 0 24px;
`
export const NameLink = styled.span`
  @media (max-width: 620px) {
    display: none;
  }
`
