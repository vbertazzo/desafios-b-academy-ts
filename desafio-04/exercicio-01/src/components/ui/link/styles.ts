import styled from 'styled-components'

type LinkProps = {
  active?: boolean
}

export const Link = styled.a<LinkProps>`
  color: black;
  font-weight: 600;
  font-size: 1.1rem;
  text-decoration: none;
  border-bottom: ${({ active }) => active && 'solid 4px var(--primary)'};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
  }
`
