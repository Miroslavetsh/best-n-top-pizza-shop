import { render, screen } from '@testing-library/react'

import { Categories } from '../components'
import { ICategory } from '../components/Category'

describe('Categories component', () => {
  const phraseIfNoCategories = 'Нет категорий для отображения'

  const itemsEmpty: Array<ICategory> = [
    /** @param {name: '', text: ''} */
  ]
  const itemsFulfilled: Array<ICategory> = [{ name: 'test unique name', text: 'test unique text' }]

  test(`should render phrase '${phraseIfNoCategories}'`, async () => {
    render(<Categories items={itemsEmpty} />)

    await screen.findAllByText(phraseIfNoCategories)
  })

  test(`should render list of items with '${itemsFulfilled[0].text}' text`, async () => {
    render(<Categories items={itemsFulfilled} />)

    await screen.findAllByText(itemsFulfilled[0].text)
  })
})
