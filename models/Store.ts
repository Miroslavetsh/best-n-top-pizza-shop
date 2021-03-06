import { CartItems } from '../redux/reducers/cart'

import Pizza from './Pizza'
import { SortParameter } from '../utils/constants'

export interface PizzaState {
  items: Array<Pizza>
  isLoaded: boolean
}

export interface FilterState {
  category: string
  sortBy: SortParameter
}
export interface CartState {
  items: CartItems
  totalCount: number
  totalPrice: number
}

export interface RootState {
  pizza: PizzaState
  filter: FilterState
  cart: CartState
}
