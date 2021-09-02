import { useEffect, useState } from 'react'
import CarsForm from './components/cars-form/cars-form'
import CarsTable from './components/cars-table/cars-table'
import Header from './components/header/header'
import Lines from './components/lines/lines'
import CarsContainer from './components/cars-container/cars-container'
import Main from './components/main/main'
import Message from './components/message/message'
import { Car } from './types'
import { get, post, del } from './utils/http'

function App () {
  const [cars, setCars] = useState<Car[]>([])
  const [error, setError] = useState({ active: false, message: '' })

  const url = 'http://localhost:3333/cars'

  useEffect(() => {
    async function getCars () {
      const result = await get(url)

      if (result.error) {
        setError({
          active: true,
          message:
            'Ocorreu um erro ao carregar os carros. Por favor, tente novamente em breve.'
        })
        return
      }

      setCars(result)
    }

    getCars()
  }, [])

  async function addCar (car: Car) {
    const result = await post(url, car)

    if (result.error) {
      setError({
        active: true,
        message:
          'Ocorreu um erro ao cadastrar. Por favor, tente novamente em breve.'
      })
      return
    }

    if (error.active) {
      setError({ active: false, message: '' })
    }
    setCars(prevState => prevState.concat(car))
  }

  async function removeCar (plate: string) {
    const result = await del(url, { plate })

    if (result.error) {
      setError({
        active: true,
        message:
          'Ocorreu um erro ao deletar. Por favor, tente novamente em breve.'
      })
      return
    }

    if (error.active) {
      setError({ active: false, message: '' })
    }
    setCars(cars.filter(car => car.plate !== plate))
  }

  return (
    <>
      <Main>
        <Header />
        {error.active && <Message>{error.message}</Message>}
        <Lines />
        <CarsContainer>
          <CarsForm onSubmit={addCar} />
          <CarsTable cars={cars} onRemove={removeCar} />
        </CarsContainer>
      </Main>
    </>
  )
}

export default App
