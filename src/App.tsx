import { useEffect } from 'react'
import { Route } from 'react-router-dom'
import axios from 'axios'

import { connect } from 'react-redux'

import { RootState } from './redux/store'
import { setPizza } from './redux/actions/pizza'

import { Header } from './components'
import { Home, Cart } from './pages'
import Pizza from './models/Pizza'

interface AppPropTypes {
  items: Array<Pizza>
  setPizza: (items: Array<Pizza>) => {}
}

const App: React.FC<AppPropTypes> = ({ items, setPizza }) => {
  useEffect(() => {
    const getPizzas = async () => {
      const response = await axios.get('/db.json')
      const { pizzas } = response.data

      setPizza(pizzas)
    }

    getPizzas()
  }, [setPizza])

  return (
    <div className='wrapper'>
      <Header />

      <div className='content'>
        <Route exact path='/' component={() => <Home pizzas={items} />} />
        <Route exact path='/cart' component={Cart} />
      </div>
    </div>
  )
}

const mapStateToProps = (state: RootState) => ({ items: state.pizza.items })
const mapDispatchToProps = {
  setPizza,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
