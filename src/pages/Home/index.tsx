import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Dispatch } from 'redux'

import { CartItems } from '../../redux/reducers/cart'
import { setCategory, setSortBy } from '../../redux/actions/filter'
import { fetchPizza, setIsLoaded } from '../../redux/actions/pizza'
import { addPizzaToCart } from '../../redux/actions/cart'

import { Categories, SortPopup, PizzaBlock, PizzaBlockPlaceholder } from '../../components'
import { CATEGORIES, SORT_PARAMETER, PIZZA_TO_SHOW, SortParameter } from '../../utils/constants'

import Pizza, { ChosenPizza } from '../../models/Pizza'
import { RootState } from '../../models/Store'

import styles from './Styles.module.scss'

const categories = CATEGORIES
const sortParameters = SORT_PARAMETER

// React.memo is equal to ShouldComponentUpdate
const Home: React.FC = React.memo((): JSX.Element => {
  const dispatch = useDispatch<Dispatch>()
  const pizzas = useSelector<RootState, Array<Pizza>>(({ pizza }) => [...pizza.items])
  const isLoaded = useSelector<RootState, boolean>(({ pizza }) => pizza.isLoaded)
  const cartItems = useSelector<RootState, CartItems>(({ cart }) => cart.items)
  const { category, sortBy } = useSelector<RootState, { category: string; sortBy: SortParameter }>(
    ({ filter }) => filter,
  )

  useEffect(() => {
    dispatch(setIsLoaded(true))

    fetchPizza(category, sortBy)(dispatch)

    dispatch(setIsLoaded(false))
  }, [dispatch, category, sortBy])

  const handleCategoryClick = useCallback(
    (item: string) => {
      dispatch(setCategory(item))
    },
    [dispatch],
  )

  const handleSortClick = useCallback(
    (item: SortParameter) => {
      dispatch(setSortBy(item))
    },
    [dispatch],
  )

  const handlePizzaButtonClick = useCallback(
    (pizza: ChosenPizza) => dispatch(addPizzaToCart(pizza)),
    [dispatch],
  )

  return (
    <div className='container'>
      <div className={styles.top}>
        <Categories
          activeCategory={category}
          items={categories}
          onCategoryClick={handleCategoryClick}
        />

        <SortPopup activeSortBy={sortBy} items={sortParameters} onSortClick={handleSortClick} />
      </div>

      <h2 className={styles.title}>All pizza</h2>

      <div className={styles.items}>
        {isLoaded
          ? pizzas.map((pizza) => {
              return (
                <PizzaBlock
                  amountOfItemsInCart={cartItems[pizza.id]?.items?.length || 0}
                  onButtonClick={handlePizzaButtonClick}
                  key={pizza.id}
                  pizza={pizza}
                />
              )
            })
          : Array(PIZZA_TO_SHOW)
              .fill(0)
              .map((_, idx) => <PizzaBlockPlaceholder key={idx} />)}
      </div>
    </div>
  )
})

export default Home
