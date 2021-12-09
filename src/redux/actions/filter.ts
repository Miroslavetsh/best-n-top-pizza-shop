import { availableAction } from '../constants'
import { ICategory } from '../../components/Category'
import { SortParameter } from '../../components/SortPopup'

export const setSortBy = (payload: SortParameter) => ({
  type: availableAction.SET_SORT_BY,
  payload,
})

export const setCategory = (payload: ICategory) => ({
  type: availableAction.SET_CATEGORY,
  payload,
})
