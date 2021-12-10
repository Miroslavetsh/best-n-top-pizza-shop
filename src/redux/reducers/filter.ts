import { AnyAction } from 'redux'
import { SortParameter } from '../../components/SortPopup'
import { availableAction } from '../../constants'

const initialState = {
  category: 'All',
  sortBy: SortParameter.POPULARITY,
}

const filter = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case availableAction.SET_SORT_BY:
      return {
        ...state,
        sortBy: action.payload,
      }
    case availableAction.SET_CATEGORY:
      return {
        ...state,
        category: action.payload,
      }
    default:
      return state
  }
}

export default filter
