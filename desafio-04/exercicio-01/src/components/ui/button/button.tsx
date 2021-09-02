import { ReactNode } from 'react'

import * as S from './styles'

export type Kind = 'primary' | 'secondary'

type ButtonProps = {
  children: ReactNode
  kind: Kind
}

export default function Button ({ children, kind }: ButtonProps) {
  return (
    <S.Button type='button' kind={kind}>
      {children}
    </S.Button>
  )
}
