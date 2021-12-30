import { combineReducers } from 'redux'

import pizza from './pizza'
import filter from './filter'
import cart from './cart'

const rootReducer = combineReducers({
  pizza,
  filter,
  cart,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
