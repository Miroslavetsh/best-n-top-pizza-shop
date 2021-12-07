import { render, screen } from '@testing-library/react'

import { SortPopup } from '../components'
import { ISortParameter } from '../components/SortPopup'

describe('SortPopup component', () => {
  const phraseIfNoParameters = 'Нет параметров сортировки'

  const itemsEmpty: Array<ISortParameter> = []
  const itemsFulfilled: Array<ISortParameter> = [
    ISortParameter.popularity,
    ISortParameter.price,
    ISortParameter.alphabet,
  ]

  test(`should render phrase '${phraseIfNoParameters}'`, async () => {
    render(<SortPopup items={itemsEmpty} />)

    await screen.findAllByText(phraseIfNoParameters)
  })

  test(`should render list of items with '${itemsFulfilled[0]}' text`, async () => {
    render(<SortPopup items={itemsFulfilled} />)

    await screen.findAllByText(itemsFulfilled[0])
  })
})
