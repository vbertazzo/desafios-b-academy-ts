import { ReactNode } from 'react'

import * as S from './styles'

type FooterProps = {
  children?: ReactNode
}

export default function Footer ({ children }: FooterProps) {
  return <S.Wrapper>{children}</S.Wrapper>
}
