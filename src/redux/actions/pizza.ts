import axios from 'axios'
import { Dispatch } from 'redux'

import Pizza from '../../models/Pizza'
import { availableActions, CATEGORIES, SortParameter } from '../../utils/constants'
import {  } from '../../components/SortPopup'

export const fetchPizza = (category: string, sortBy: SortParameter) => (dispatch: Dispatch) => {
  let url = `/pizzas${
    category !== CATEGORIES[0] ? '?category=' + category + '&' : '?'
  }_sort=${sortBy}&_order=${sortBy === SortParameter.NAME ? 'asc' : 'desc'}`

  axios.get(url).then(({ data }) => {
    dispatch(setPizza(data))
  })
}

export const setPizza = (payload: Array<Pizza>) => {
  return {
    type: availableActions.SET_PIZZA,
    payload,
  }
}

export const setIsLoaded = (payload: boolean) => {
  return {
    type: availableActions.SET_IS_LOADED,
    payload,
  }
}
