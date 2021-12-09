import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '../redux/store'

import { Categories, SortPopup, PizzaBlock } from '../components'
import { ICategory } from '../components/Categories'
import { SortParameter } from '../components/SortPopup'
import Pizza from '../models/Pizza'
import React, { useCallback } from 'react'
import { Dispatch } from 'redux'
import { setCategory } from '../redux/actions/filter'

const categories: Array<ICategory> = [
  { name: 'all', text: 'Все' },
  { name: 'meat', text: 'Мясные' },
  { name: 'vegan', text: 'Вегетерианские' },
  { name: 'grill', text: 'Гриль' },
  { name: 'spice', text: 'Острые' },
  { name: 'closed', text: 'Закрытые' },
]

const sortParameters: Array<SortParameter> = [
  SortParameter.popularity,
  SortParameter.price,
  SortParameter.alphabet,
]

// React.memo is equal to ShouldComponentUpdate
const Home: React.FC = React.memo((): JSX.Element => {
  const pizzas = useSelector<RootState, Array<Pizza>>(({ pizza }) => [...pizza.items])

  const dispatch = useDispatch<Dispatch>()

  const handleCategoryClick = useCallback(
    (item: ICategory) => {
      return () => {
        dispatch(setCategory(categories.indexOf(item)))
      }
    },
    [dispatch],
  )

  return (
    <div className='container'>
      <div className='content__top'>
        <Categories items={categories} onCategoryClick={handleCategoryClick} />

        <SortPopup items={sortParameters} />
      </div>

      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>
        {pizzas.map.length &&
          pizzas.map((pizza) => {
            return <PizzaBlock key={pizza.id} pizza={pizza} />
          })}
      </div>
    </div>
  )
})

export default Home
