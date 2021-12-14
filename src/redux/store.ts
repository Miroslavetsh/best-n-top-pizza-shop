import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { SortParameter } from '../components/SortPopup'
import Pizza from '../models/Pizza'
import rootReducer from './reducers'

export interface RootState {
  pizza: {
    items: Array<Pizza>
    isLoaded: boolean
  }
  filter: {
    category: string
    sortBy: SortParameter
  }
}

//@ts-ignore Only for development
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export default store
