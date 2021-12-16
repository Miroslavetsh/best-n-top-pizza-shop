import { availableActions } from '../../utils/constants'
import { ChosenPizza } from '../../models/Pizza'

export const addPizzaToCart = (payload: ChosenPizza) => {
  return {
    type: availableActions.ADD_PIZZA_TO_CART,
    payload,
  }
}

export const removePizzaFromCart = (payload: number) => {
  return {
    type: availableActions.REMOVE_PIZZA_FROM_CART,
    payload,
  }
}

export const plusPizzaItem = (payload: number) => {
  return {
    type: availableActions.PLUS_PIZZA_ITEM,
    payload,
  }
}

export const minusPizzaItem = (payload: number) => {
  return {
    type: availableActions.MINUS_PIZZA_ITEM,
    payload,
  }
}

export const clearCart = () => {
  return {
    type: availableActions.CLEAR_CART,
  }
}
