import { ReactNode } from 'react'

type MenuProps = {
  children?: ReactNode
}

export default function Menu ({ children }: MenuProps) {
  return <nav className='menu'>{children}</nav>
}
