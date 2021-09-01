import { ReactElement } from 'react'

type HeaderProps = {
  children?: ReactElement[]
}

export default function Header ({ children }: HeaderProps) {
  return <header className='header'>{children}</header>
}
