import { availableActions } from '../../utils/constants'
import { ChosenPizza } from '../../models/Pizza'

export const addPizzaToCart = (payload: ChosenPizza) => ({
  type: availableActions.ADD_PIZZA_TO_CART,
  payload,
})

export const removePizzaFromCart = (payload: number) => ({
  type: availableActions.REMOVE_PIZZA_FROM_CART,
  payload,
})

export const plusPizzaItem = (payload: number) => ({
  type: availableActions.PLUS_PIZZA_ITEM,
  payload,
})

export const minusPizzaItem = (payload: number) => ({
  type: availableActions.MINUS_PIZZA_ITEM,
  payload,
})

export const clearCart = () => ({
  type: availableActions.CLEAR_CART,
})
