import { Article } from '../types'

type SidebarProps = {
  articles: Article[]
}

export default function Sidebar ({ articles }: SidebarProps) {
  return (
    <aside className='sidebar'>
      <ul>
        {articles.map(article => (
          <li key={article.id}>
            <button>{article.title}</button>
          </li>
        ))}
      </ul>
    </aside>
  )
}
