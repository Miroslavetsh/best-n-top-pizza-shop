import React from 'react'
interface CategoriesPropTypes {
  items: Array<string>
  onCategoryClick: (item: string) => void
  activeCategory: string
}

const Categories: React.FC<CategoriesPropTypes> = React.memo((props): JSX.Element => {
  const { activeCategory, items, onCategoryClick } = props
  // const [activeCategory, setActiveCategory] = useState<string>(items[0])

  return (
    <div className='categories'>
      <ul>
        {(items.length &&
          items.map((item, index) => {
            const handleClick = (item: string) => {
              return () => {
                onCategoryClick(item)
              }
            }

            return (
              <li
                key={item}
                onClick={handleClick(item)}
                className={items.indexOf(activeCategory) === index ? 'active' : ''}>
                {item}
              </li>
            )
          })) ||
          'Нет категорий для отображения'}
      </ul>
    </div>
  )
})

export default Categories
