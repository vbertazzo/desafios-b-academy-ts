import { SyntheticEvent } from 'react'
import { Car } from '../../types'

import * as S from './styles'

type CarsFormProps = {
  onSubmit: (car: Car) => void
}

interface FormElements extends HTMLFormControlsCollection {
  'brand-model': HTMLInputElement
  color: HTMLInputElement
  image: HTMLInputElement
  plate: HTMLInputElement
  year: HTMLInputElement
}

interface CarsFormElement extends HTMLFormElement {
  readonly elements: FormElements
}

const CarsForm = ({ onSubmit }: CarsFormProps) => {
  function handleSubmit (e: SyntheticEvent<CarsFormElement>) {
    e.preventDefault()
    const {
      'brand-model': brandModel,
      color,
      image,
      plate,
      year
    } = e.currentTarget.elements

    const newCar = {
      image: image.value,
      brandModel: brandModel.value,
      year: year.value,
      plate: plate.value,
      color: color.value
    }

    onSubmit(newCar)
    e.currentTarget.reset()
    image.focus()
  }

  return (
    <S.Wrapper>
      <S.Title>Cadastrar Carro</S.Title>
      <S.Form onSubmit={handleSubmit}>
        <S.Label htmlFor='image'>Imagem (URL):</S.Label>
        <S.Input type='text' id='image' name='image'></S.Input>

        <S.Label htmlFor='brand-model'>Marca / Modelo:</S.Label>
        <S.Input type='text' id='brand-model' name='brand-model'></S.Input>

        <S.Label htmlFor='year'>Ano:</S.Label>
        <S.Input type='number' id='year' name='year'></S.Input>

        <S.Label htmlFor='plate'>Placa:</S.Label>
        <S.Input type='text' id='plate' name='plate'></S.Input>

        <S.Label htmlFor='color'>Cor:</S.Label>
        <S.Input type='text' id='color' name='color'></S.Input>

        <S.Button type='submit'>Cadastrar</S.Button>
      </S.Form>
    </S.Wrapper>
  )
}

export default CarsForm
