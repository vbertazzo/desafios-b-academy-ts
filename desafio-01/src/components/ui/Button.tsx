import { ReactNode } from 'react'

type Kind = 'primary' | 'secondary'

type ButtonProps = {
  children: ReactNode
  kind: Kind
}

export default function Button ({ children, kind }: ButtonProps) {
  return (
    <button type='button' className={`button ${kind}`}>
      {children}
    </button>
  )
}
