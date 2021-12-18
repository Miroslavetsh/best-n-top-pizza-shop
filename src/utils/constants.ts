export enum availableActions {
  SET_SORT_BY = 'SET_SORT_BY',
  SET_CATEGORY = 'SET_CATEGORY',
  SET_PIZZA = 'SET_PIZZA',
  SET_IS_LOADED = 'SET_IS_LOADED',
  SET_TOTAL_PRICE = 'SET_TOTAL_PRICE',
  SET_TOTAL_COUNT = 'SET_TOTAL_COUNT',
  // For cart and its actions
  ADD_PIZZA_TO_CART = 'ADD_PIZZA_TO_CART',
  REMOVE_PIZZA_FROM_CART = 'REMOVE_PIZZA_FROM_CART',
  CLEAR_CART = 'CLEAR_CART',
  MINUS_PIZZA_ITEM = 'MINUS_PIZZA_ITEM',
  PLUS_PIZZA_ITEM = 'PLUS_PIZZA_ITEM',
}

export const PIZZA_TO_SHOW = 12

export const CATEGORIES: Array<string> = ['All', 'Meat', 'Vegan', 'Grill', 'Spicy', 'Closed']

export enum SortParameter {
  POPULARITY = 'popularity',
  PRICE = 'price',
  NAME = 'name',
}

export const SORT_PARAMETER: Array<SortParameter> = [
  SortParameter.POPULARITY,
  SortParameter.PRICE,
  SortParameter.NAME,
]

export enum pizzaSizes {
  SMALL = 26,
  MEDIUM = 30,
  BIG = 40,
}

export enum pizzaDoughTypes {
  THIN = 'thin',
  TRADITIONAL = 'traditional',
}
