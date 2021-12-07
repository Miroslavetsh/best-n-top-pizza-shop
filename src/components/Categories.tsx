import { useState } from 'react'
import Category, { ICategory } from './Category'

interface CategoriesProps {
  items: Array<ICategory>
}

const Categories: React.FC<CategoriesProps> = (props): JSX.Element => {
  const { items } = props
  const [activeCategory, setActiveCategory] = useState<string>('all')

  return (
    <div className='categories'>
      <ul>
        {items.map((category) => (
          <Category
            key={category.name}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            category={category}
          />
        ))}
      </ul>
    </div>
  )
}

export default Categories
