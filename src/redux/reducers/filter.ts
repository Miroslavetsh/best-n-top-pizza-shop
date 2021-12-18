import { AnyAction } from 'redux'

import { availableActions, SortParameter } from '../../utils/constants'

const initialState = {
  category: 'All',
  sortBy: SortParameter.POPULARITY,
}

const filter = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case availableActions.SET_SORT_BY:
      return {
        ...state,
        sortBy: action.payload,
      }
    case availableActions.SET_CATEGORY:
      return {
        ...state,
        category: action.payload,
      }
    default:
      return state
  }
}

export default filter
