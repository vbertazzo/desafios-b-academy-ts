import { ReactNode } from 'react'
import { Article } from '../types'
import { H2 } from './ui/Headings'

type ContentProps = {
  children?: ReactNode
  article: Article
}

export default function Content ({ article }: ContentProps) {
  return (
    <main className='content'>
      <H2>{article.title}</H2>
      {article.content}
    </main>
  )
}
