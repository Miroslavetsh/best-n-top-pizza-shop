import { Categories, SortPopup, PizzaBlock } from '../components'
import { ICategory } from '../components/Category'
import { SortParameter } from '../components/SortPopup'
import Pizza from '../models/Pizza'

interface HomePropsTypes {
  pizzas: Array<Pizza>
}

const Home: React.FC<HomePropsTypes> = (props): JSX.Element => {
  const { pizzas } = props

  const categories: Array<ICategory> = [
    { id: 0, name: 'all', text: 'Все' },
    { id: 1, name: 'meat', text: 'Мясные' },
    { id: 2, name: 'vegan', text: 'Вегетерианские' },
    { id: 3, name: 'grill', text: 'Гриль' },
    { id: 4, name: 'spice', text: 'Острые' },
    { id: 5, name: 'closed', text: 'Закрытые' },
  ]

  const sortParameters: Array<SortParameter> = [
    SortParameter.popularity,
    SortParameter.price,
    SortParameter.alphabet,
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
