import { useEffect } from 'react'
import { Route } from 'react-router-dom'
import axios from 'axios'
import { Dispatch } from 'redux'
import { useDispatch } from 'react-redux'

import { setPizza } from './redux/actions/pizza'

import { Header } from './components'
import { Home, Cart } from './pages'

const App: React.FC = () => {
  const dispatch = useDispatch<Dispatch>()

  //@ts-ignore only for development, to make force request to the server
  window.test = async () => {
    const response = await axios.get('/db.json')
    const { pizzas } = response.data

    dispatch(setPizza(pizzas))
  }

  useEffect(() => {
    const getPizzas = async () => {
      const response = await axios.get('http://localhost:80/pizzas')
      const pizzas = response.data

      dispatch(setPizza(pizzas))
    }

    getPizzas()
  }, [dispatch])

  return (
    <div className='wrapper'>
      <Header />

      <div className='content'>
        <Route exact path='/' component={Home} />
        <Route exact path='/cart' component={Cart} />
      </div>
    </div>
  )
}

export default App
