import { ReactNode } from 'react'

type HeadingProps = {
  children?: ReactNode
}

export function H1 ({ children }: HeadingProps) {
  return <h1>{children}</h1>
}
export function H2 ({ children }: HeadingProps) {
  return <h2>{children}</h2>
}
export function H3 ({ children }: HeadingProps) {
  return <h3>{children}</h3>
}
export function H4 ({ children }: HeadingProps) {
  return <h4>{children}</h4>
}
export function H5 ({ children }: HeadingProps) {
  return <h5>{children}</h5>
}
export function H6 ({ children }: HeadingProps) {
  return <h6>{children}</h6>
}
