import { ReactNode } from 'react'

type SidebarProps = {
  children?: ReactNode
}

export default function Sidebar ({ children }: SidebarProps) {
  return <aside className='sidebar'>{children}</aside>
}
