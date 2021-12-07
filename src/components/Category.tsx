export interface ICategory {
  name: string
  text: string
}

interface CategoryProps {
  item: ICategory
  activeCategory: string
  setActiveCategory: (category: string) => void
}

const Category: React.FC<CategoryProps> = (props): JSX.Element => {
  const { item, activeCategory, setActiveCategory } = props

  return (
    <li
      onClick={() => {
        setActiveCategory(item.name)
      }}
      className={activeCategory === item.name ? 'active' : ''}>
      {item.text}
    </li>
  )
}

export default Category