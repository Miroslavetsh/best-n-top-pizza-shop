import { AnyAction } from 'redux'
import { availableAction } from '../constants'

const initialState = {
  items: [],
  isLoaded: false,
}

const pizza = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case availableAction.SET_PIZZA:
      return {
        ...state,
        items: action.payload
      }
    default:
      return state
  }
}

export default pizza
