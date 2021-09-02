import { ReactNode } from 'react'

import * as S from './styles'

type MessageProps = {
  children: ReactNode
}

const Message = ({ children }: MessageProps) => {
  return (
    <S.Wrapper>
      <S.Message>{children}</S.Message>
    </S.Wrapper>
  )
}

export default Message
