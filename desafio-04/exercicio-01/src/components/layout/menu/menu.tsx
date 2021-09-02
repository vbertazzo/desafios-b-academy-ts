import { ReactNode } from 'react'

import * as S from './styles'

type MenuProps = {
  children?: ReactNode
}

export default function Menu ({ children }: MenuProps) {
  return (
    <S.Wrapper>
      <S.Links>{children}</S.Links>
    </S.Wrapper>
  )
}
