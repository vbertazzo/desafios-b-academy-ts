import { Article } from '../types'

type SidebarProps = {
  articles: Article[]
  onLinkClick: (id: number) => void
}

export default function Sidebar ({ articles, onLinkClick }: SidebarProps) {
  function handleLinkClick (id: number) {
    onLinkClick(id)
  }

  return (
    <aside className='sidebar'>
      <ul>
        {articles.map(article => (
          <li key={article.id}>
            <button
              className='nav-button'
              onClick={() => handleLinkClick(article.id)}
            >
              {article.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  )
}
