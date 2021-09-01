import { ReactNode, useState } from 'react'
import { Article } from '../types'
import { H2 } from './ui/Headings'

type ContentProps = {
  children?: ReactNode
  article: Article
}

export default function Content ({ article }: ContentProps) {
  const [title] = useState(article.title)
  const [content] = useState(article.content)

  return (
    <main className='content'>
      <H2>{title}</H2>
      {content}
    </main>
  )
}
