import { AnyAction } from 'redux'

import { availableActions } from '../../utils/constants'
import { ChosenPizza } from '../../models/Pizza'

export interface CartItems {
  [key: number]: { items: Array<ChosenPizza>; totalPrice: number }
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

const getTotalPrice = (pizza: Array<ChosenPizza>) =>
  pizza.reduce((sum, pizza) => sum + pizza.price, 0)

const cart = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case availableActions.ADD_PIZZA_TO_CART:
      const { id } = action.payload

      const currentPizzaItems = !state.items[id]
        ? [action.payload]
        : [...state.items[id].items, action.payload]

      const items = {
        ...state.items,
        [id]: {
          items: currentPizzaItems,
          totalPrice: getTotalPrice(currentPizzaItems),
        },
      }

      const totalPizzas: Array<ChosenPizza> = Object.values(items)
        .map(({ items }) => items)
        .flat(Infinity)
      const totalPrice = getTotalPrice(totalPizzas)
      const totalCount = totalPizzas.length

      return {
        ...state,
        items,
        totalPrice,
        totalCount,
      }

    case availableActions.REMOVE_PIZZA_FROM_CART:
      const newItems = {
        ...state.items,
      }

      const currentTotalPrice = newItems[action.payload].totalPrice
      const currentTotalCount = newItems[action.payload].items.length

      delete newItems[action.payload]

      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - currentTotalPrice,
        totalCount: state.totalCount - currentTotalCount,
      }

    case availableActions.PLUS_PIZZA_ITEM:
      const itemsWithAddedPizza = [
        ...state.items[action.payload].items,
        state.items[action.payload].items[0],
      ]

      return {
        ...state,
        items: {
          ...state.items,
          [action.payload]: {
            items: itemsWithAddedPizza,
            totalPrice: getTotalPrice(itemsWithAddedPizza),
            totalCount: itemsWithAddedPizza.length,
          },
        },
        totalPrice: state.totalPrice + state.items[action.payload].items[0].price,
        totalCount: state.totalCount + 1,
      }

    case availableActions.MINUS_PIZZA_ITEM:
      const itemsBeforeRemovingPizza = state.items[action.payload].items
      const itemsWithoutRemovedPizza =
        itemsBeforeRemovingPizza.length > 1
          ? itemsBeforeRemovingPizza.slice(1)
          : itemsBeforeRemovingPizza

      return {
        ...state,
        items: {
          ...state.items,
          [action.payload]: {
            items: itemsWithoutRemovedPizza,
            totalPrice: getTotalPrice(itemsWithoutRemovedPizza),
            totalCount: itemsWithoutRemovedPizza.length,
          },
        },
        totalPrice: state.totalPrice - state.items[action.payload].items[0].price,
        totalCount: state.totalCount - 1,
      }

    case availableActions.CLEAR_CART:
      return {
        ...state,
        items: {},
        totalPrice: 0,
        totalCount: 0,
      }
    default:
      return state
  }
}

export default cart
