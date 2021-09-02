import { useState } from 'react'
import { Article } from '../../../types'

import * as S from './styles'

type SidebarProps = {
  articles: Article[]
  onLinkClick: (id: number) => void
}

export default function Sidebar ({ articles, onLinkClick }: SidebarProps) {
  const [active, setActive] = useState(1)

  function handleLinkClick (id: number) {
    setActive(id)
    onLinkClick(id)
  }

  return (
    <S.Sidebar>
      <S.Title>Conteúdo do Bootcamp</S.Title>
      <S.List>
        {articles.map(article => (
          <S.ListItem key={article.id}>
            <S.Button
              onClick={() => handleLinkClick(article.id)}
              active={article.id === active}
            >
              {article.title}
            </S.Button>
          </S.ListItem>
        ))}
      </S.List>
    </S.Sidebar>
  )
}
