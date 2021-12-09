import { availableAction } from '../../constants'
import { SortParameter } from '../../components/SortPopup'

export const setSortBy = (payload: SortParameter) => ({
  type: availableAction.SET_SORT_BY,
  payload,
})

export const setCategory = (payload: number) => ({
  type: availableAction.SET_CATEGORY,
  payload,
})
