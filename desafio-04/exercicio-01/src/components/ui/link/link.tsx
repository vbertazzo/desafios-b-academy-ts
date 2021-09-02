import { ReactNode } from 'react'

import * as S from './styles'

type LinkProps = {
  children: ReactNode
  to: string
  active?: boolean
}

const Link = ({ to, active, children }: LinkProps) => {
  return (
    <S.Link href={to} active={active}>
      {children}
    </S.Link>
  )
}

export default Link
