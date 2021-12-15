import { SortParameter } from './components/SortPopup'

export enum availableActions {
  SET_SORT_BY = 'SET_SORT_BY',
  SET_CATEGORY = 'SET_CATEGORY',
  SET_PIZZA = 'SET_PIZZA',
  SET_IS_LOADED = 'SET_IS_LOADED',
  SET_TOTAL_PRICE = 'SET_TOTAL_PRICE',
  SET_TOTAL_COUNT = 'SET_TOTAL_COUNT',
  ADD_PIZZA_TO_CART = 'ADD_PIZZA_TO_CART',
  REMOVE_PIZZA_FROM_CART = 'REMOVE_PIZZA_FROM_CART',
}

export const PIZZA_TO_SHOW = 12

export const CATEGORIES: Array<string> = ['All', 'Meat', 'Vegan', 'Grill', 'Spicy', 'Closed']

export const SORT_PARAMETER: Array<SortParameter> = [
  SortParameter.POPULARITY,
  SortParameter.PRICE,
  SortParameter.NAME,
]
