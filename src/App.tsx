import { Route } from 'react-router-dom'

import { Home, Cart } from './pages'
import { Header } from './components'

const App: React.FC = () => {
  return (
    <div className='page'>
      <Header />

      <div className='content'>
        <Route exact path='/' component={Home} />
        <Route exact path='/cart' component={Cart} />
      </div>
    </div>
  )
}

export default App
