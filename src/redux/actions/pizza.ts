import Pizza from '../../models/Pizza'
import { availableAction } from '../constants'

export const setPizza = (payload: Array<Pizza>) => {
  return {
    type: availableAction.SET_PIZZA,
    payload,
  }
}
