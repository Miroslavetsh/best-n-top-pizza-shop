import axios from 'axios'
import { Dispatch } from 'redux'

import Pizza from '../../models/Pizza'
import { availableActions, CATEGORIES, SortParameter } from '../../utils/constants'

export const fetchPizza = (category: string, sortBy: SortParameter) => (dispatch: Dispatch) => {
  const getHostname = () => (process.env.NODE_ENV === 'development' ? 'http://localhost:3001' : '')
  const getCategories = () => (category !== CATEGORIES[0] ? '?category=' + category + '&' : '?')
  const getOrder = () => (sortBy === SortParameter.NAME ? 'asc' : 'desc')

  const url = `${getHostname()}/pizzas${getCategories()}_sort=${sortBy}&_order=${getOrder()}`

  axios.get(url).then(({ data }) => {
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
