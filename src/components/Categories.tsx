import React, { useState } from 'react'

export interface ICategory {
  name: string
  text: string
}

interface CategoriesPropsTypes {
  items: Array<ICategory>
  onCategoryClick: (item: ICategory) => () => void
}

const Categories: React.FC<CategoriesPropsTypes> = React.memo((props): JSX.Element => {
  const { items, onCategoryClick } = props
  const [activeCategory, setActiveCategory] = useState<string>(items[0]?.name || '')

  return (
    <div className='categories'>
      <ul>
        {(items.length &&
          items.map((item) => {
            const handleClick = (item: ICategory) => {
              return () => {
                onCategoryClick(item)
                setActiveCategory(item.name)
              }
            }

            return (
              <li
                key={item.name}
                onClick={handleClick(item)}
                className={activeCategory === item.name ? 'active' : ''}>
                {item.text}
              </li>
            )
          })) ||
          'Нет категорий для отображения'}
      </ul>
    </div>
  )
})

export default Categories
