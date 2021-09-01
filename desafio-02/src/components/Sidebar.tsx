import { Link } from '../types'

type SidebarProps = {
  links: Link[]
}

export default function Sidebar ({ links }: SidebarProps) {
  return (
    <aside className='sidebar'>
      <ul>
        {links.map(link => (
          <li key={link.id}>{link.title}</li>
        ))}
      </ul>
    </aside>
  )
}
