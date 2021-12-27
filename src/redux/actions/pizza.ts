import axios from 'axios'
import { Dispatch } from 'redux'

import Pizza from '../../models/Pizza'
import { availableActions, CATEGORIES, SortParameter } from '../../utils/constants'

export const fetchPizza = (category: string, sortBy: SortParameter) => (dispatch: Dispatch) => {
  const url = process.env.NODE_ENV === 'development' ? 'http://localhost:3001/pizzas' : '/pizzas'

  axios
    .get(url, {
      params: {
        // If category is all -> make category equal null
        category: category !== CATEGORIES[0] ? category : null,
        _sort: sortBy,
        _order: sortBy === SortParameter.NAME ? 'asc' : 'desc',
      },
    })
    .then(({ data }) => {
      dispatch(setPizza(data))
    })
}

export const setPizza = (payload: Array<Pizza>) => ({
  type: availableActions.SET_PIZZA,
  payload,
})

export const setIsLoaded = (payload: boolean) => ({
  type: availableActions.SET_IS_LOADED,
  payload,
})
