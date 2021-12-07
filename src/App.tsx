import { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import axios from 'axios'

import { Header } from './components'
import { Home, Cart } from './pages'
import Pizza from './models/Pizza'

const App: React.FC = (): JSX.Element => {
  const [pizzas, setPizzas] = useState<Array<Pizza>>([])

  useEffect(() => {
    const getPizzas = async () => {
      const response = await axios.get('/db.json')
      const { pizzas } = response.data

      setPizzas(pizzas)
    }

    getPizzas()
  }, [])

  return (
    <div className='wrapper'>
      <Header />

      <div className='content'>
        <Route exact path='/' component={() => <Home pizzas={pizzas} />} />
        <Route exact path='/cart' component={Cart} />
      </div>
    </div>
  )
}

export default App
