import { SortParameter } from './components/SortPopup'

export enum availableAction {
  SET_SORT_BY = 'SET_SORT_BY',
  SET_CATEGORY = 'SET_CATEGORY',
  SET_PIZZA = 'SET_PIZZA',
  SET_IS_LOADED = 'SET_IS_LOADED',
}

export const PIZZA_TO_SHOW = 12

export const CATEGORIES: Array<string> = ['All', 'Meat', 'Vegan', 'Grill', 'Spicy', 'Closed']

export const SORT_PARAMETER: Array<SortParameter> = [
  SortParameter.POPULARITY,
  SortParameter.PRICE,
  SortParameter.NAME,
]
