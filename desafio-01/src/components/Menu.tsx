import { ReactElement } from 'react'

type MenuProps = {
  children?: ReactElement[]
}

export default function Menu ({ children }: MenuProps) {
  return <nav className='menu'>{children}</nav>
}
