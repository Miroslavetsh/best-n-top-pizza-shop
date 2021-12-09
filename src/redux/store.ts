import { createStore } from 'redux'
import { SortParameter } from '../components/SortPopup'
import Pizza from '../models/Pizza'
import rootReducer from './reducers'

export interface RootState {
  pizza: {
    items: Array<Pizza>
    isLoaded: boolean
  }
  filter: {
    category: Number
    sortBy: SortParameter
  }
}

const store = createStore(
  rootReducer,
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

export default store
