import React from 'react'

import styles from './Styles.module.scss'

interface CategoriesPropTypes {
  items: Array<string>
  onCategoryClick: (item: string) => void
  activeCategory: string
}

const Categories: React.FC<CategoriesPropTypes> = React.memo((props): JSX.Element => {
  const { activeCategory, items, onCategoryClick } = props

  return (
    <ul className={styles.categories}>
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
              className={items.indexOf(activeCategory) === index ? styles.active : ''}>
              {item}
            </li>
          )
        })) ||
        'No categories here'}
    </ul>
  )
})

export default Categories
