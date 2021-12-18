import { render, screen } from '@testing-library/react'

import { Categories } from '../components'
import { ICategory } from '../components/Categories'

describe('Categories component', () => {
  const phraseIfNoCategories = 'Нет категорий для отображения'

  const itemsEmpty: Array<ICategory> = [
    /** @param {name: '', text: ''} */
  ]
  const itemsFulfilled: Array<ICategory> = [{ name: 'test unique name', text: 'test unique text' }]

  const handleCategoryClick = (item: ICategory) => {
    return () => {
      console.log(item)
    }
  }

  test(`should render phrase '${phraseIfNoCategories}'`, async () => {
    render(<Categories items={itemsEmpty} onCategoryClick={handleCategoryClick} />)

    await screen.findAllByText(phraseIfNoCategories)
  })

  test(`should render list of items with '${itemsFulfilled[0].text}' text`, async () => {
    render(<Categories items={itemsFulfilled} onCategoryClick={handleCategoryClick} />)

    await screen.findAllByText(itemsFulfilled[0].text)
  })
})
