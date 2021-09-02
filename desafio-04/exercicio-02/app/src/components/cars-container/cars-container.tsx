import { ReactNode } from 'react'

import * as S from './styles'

type CarsContainerProps = {
  children: ReactNode
}

const CarsContainer = ({ children }: CarsContainerProps) => {
  return <S.Container>{children}</S.Container>
}

export default CarsContainer
