import { render, screen } from '@testing-library/react'
import { Categories } from '../components'
import { ICategory } from '../components/Category'

describe('Categories component', () => {
  const phraseIfNoCategories = 'No categories here'
  const itemsEmpty: Array<ICategory> = [
    /** @param {name: '', text: ''} */
  ]
  const itemsFulfilled: Array<ICategory> = [{ name: 'test unique name', text: 'test unique text' }]

  test(`should render phrase '${phraseIfNoCategories}'`, () => {
    render(<Categories items={itemsEmpty} />)

    screen.findAllByText(phraseIfNoCategories)
  })

  test(`should render list of items with '${itemsFulfilled[0].text}' text`, () => {
    render(<Categories items={itemsFulfilled} />)

    screen.findAllByText('No categories here')
  })
})
