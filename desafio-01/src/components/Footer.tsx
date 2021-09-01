import { ReactElement } from 'react'

type FooterProps = {
  children?: ReactElement[]
}

export default function Footer ({ children }: FooterProps) {
  return <footer className='footer'>{children}</footer>
}
