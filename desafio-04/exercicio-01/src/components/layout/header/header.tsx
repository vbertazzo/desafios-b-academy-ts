import { ReactNode } from 'react'

import * as S from './styles'

type HeaderProps = {
  children?: ReactNode
}

export default function Header ({ children }: HeaderProps) {
  return <S.Wrapper>{children}</S.Wrapper>
}
