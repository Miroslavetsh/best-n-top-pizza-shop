import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { SortParameter } from '../components/SortPopup'
import Pizza from '../models/Pizza'
import rootReducer from './reducers'
import { CartItems } from './reducers/cart'

export interface RootState {
  pizza: {
    items: Array<Pizza>
    isLoaded: boolean
  }
  filter: {
    category: string
    sortBy: SortParameter
  }
  cart: {
    items: CartItems
    totalCount: number
    totalPrice: number
  }
}

const composeEnhancers = compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export default store
