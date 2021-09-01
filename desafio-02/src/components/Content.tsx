import { ReactNode } from 'react'

type ContentProps = {
  children?: ReactNode
}

export default function Content ({ children }: ContentProps) {
  return <main className='content'>{children}</main>
}
