import { SyntheticEvent } from 'react'
import { Car } from '../types'

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
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='image'>Imagem (URL)</label>
        <input type='text' id='image' name='image'></input>
      </div>

      <div>
        <label htmlFor='brand-model'>Marca / Modelo</label>
        <input type='text' id='brand-model' name='brand-model'></input>
      </div>

      <div>
        <label htmlFor='year'>Ano</label>
        <input type='number' id='year' name='year'></input>
      </div>

      <div>
        <label htmlFor='plate'>Placa</label>
        <input type='text' id='plate' name='plate'></input>
      </div>

      <div>
        <label htmlFor='color'>Cor</label>
        <input type='text' id='color' name='color'></input>
      </div>

      <button type='submit'>Cadastrar carro</button>
    </form>
  )
}

export default CarsForm
