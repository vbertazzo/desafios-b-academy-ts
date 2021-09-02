import { ReactNode } from 'react'
import { Article } from '../../../types'

import * as S from './styles'

type ContentProps = {
  children?: ReactNode
  article: Article
}

export default function Content ({ article }: ContentProps) {
  return (
    <S.Wrapper className='content'>
      <S.Content>
        <S.Title>{article.title}</S.Title>
        {article.content}
      </S.Content>
    </S.Wrapper>
  )
}
