import { ReactElement } from 'react'

type SidebarProps = {
  children?: ReactElement[]
}

export default function Sidebar ({ children }: SidebarProps) {
  return <aside className='sidebar'>{children}</aside>
}
