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
