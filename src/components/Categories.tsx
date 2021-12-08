import { useState } from 'react'
import Category, { ICategory } from './Category'

interface CategoriesPropsTypes {
  items: Array<ICategory>
}

const Categories: React.FC<CategoriesPropsTypes> = (props): JSX.Element => {
  const { items } = props
  const [activeCategory, setActiveCategory] = useState<string>(items[0].name)

  return (
    <div className='categories'>
      <ul>
        {(items.length &&
          items.map((item) => (
            <Category
              key={item.name}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              item={item}
            />
          ))) ||
          'Нет категорий для отображения'}
      </ul>
    </div>
  )
}

export default Categories
