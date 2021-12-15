import { AnyAction } from 'redux'

import { availableActions } from '../../constants'
import { ChosenPizza } from '../../models/Pizza'

export interface CartItems {
  [key: number]: Array<ChosenPizza>
}
interface CartState {
  items: CartItems
  totalPrice: number
  totalCount: number
}

const initialState: CartState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
}

const cart = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case availableActions.ADD_PIZZA_TO_CART:
      const id = action.payload.id
      const items = { ...state.items, [id]: [action.payload] }
      if (state.items.hasOwnProperty(id)) items[id].push(...state.items[id])

      const totalPizzas: Array<ChosenPizza> = Object.values(items).flat(Infinity)
      const totalPrice = totalPizzas.reduce((sum, pizza) => pizza.price + sum, 0)
      const totalCount = totalPizzas.length

      return {
        ...state,
        items,
        totalPrice,
        totalCount,
      }
    default:
      return state
  }
}

export default cart
