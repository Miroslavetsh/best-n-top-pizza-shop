import { Categories, SortPopup, PizzaBlock } from '../components'
import { ICategory } from '../components/Category'
import { ISortParameter } from '../components/SortPopup'
import Pizza from '../models/Pizza'

interface HomePropsTypes {
  pizzas: Array<Pizza>
}

const Home: React.FC<HomePropsTypes> = (props): JSX.Element => {
  const { pizzas } = props

  const categories: Array<ICategory> = [
    { name: 'all', text: 'Все' },
    { name: 'meat', text: 'Мясные' },
    { name: 'vegan', text: 'Вегетерианские' },
    { name: 'grill', text: 'Гриль' },
    { name: 'spice', text: 'Острые' },
    { name: 'closed', text: 'Закрытые' },
  ]

  const sortParameters: Array<ISortParameter> = [
    ISortParameter.popularity,
    ISortParameter.price,
    ISortParameter.alphabet,
  ]
  return (
    <div className='container'>
      <div className='content__top'>
        <Categories items={categories} />

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
}

export default Home
