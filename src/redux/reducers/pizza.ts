import { AnyAction } from 'redux'

import { availableActions } from '../../utils/constants'

const initialState = {
  items: [],
  isLoaded: false,
}

const pizza = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case availableActions.SET_PIZZA:
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
      }
    case availableActions.SET_IS_LOADED:
      return {
        ...state,
        isLoaded: action.payload,
      }
    default:
      return state
  }
}

export default pizza
