import { availableActions, SortParameter } from '../../utils/constants'

export const setSortBy = (payload: SortParameter) => ({
  type: availableActions.SET_SORT_BY,
  payload,
})

export const setCategory = (payload: string) => ({
  type: availableActions.SET_CATEGORY,
  payload,
})
