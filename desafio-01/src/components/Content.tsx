import { ReactElement } from 'react'

type ContentProps = {
  children?: ReactElement[]
}

export default function Content ({ children }: ContentProps) {
  return <main className='content'>{children}</main>
}
