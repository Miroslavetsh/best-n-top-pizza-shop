import axios from 'axios'
import { Dispatch } from 'redux'

import Pizza from '../../models/Pizza'
import {
  availableActions,
  CATEGORIES,
  SortParameter,
} from '../../utils/constants'

export const fetchPizza =
  (category: string, sortBy: SortParameter) => (dispatch: Dispatch) => {
    let url = process.env.NEXT_PUBLIC_PIZZA_API_URL || '/'
    url += 'pizzas'

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
