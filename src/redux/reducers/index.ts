import { combineReducers } from 'redux'

import pizza from './pizza'
import filter from './filter'

const rootReducer = combineReducers({
  pizza,
  filter,
})

export default rootReducer
