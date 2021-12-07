export interface ICategory {
  name: string
  text: string
}

interface CategoryProps {
  category: ICategory
  activeCategory: string
  setActiveCategory: (category: string) => void
}

const Category: React.FC<CategoryProps> = (props): JSX.Element => {
  const { category, activeCategory, setActiveCategory } = props

  return (
    <li
      onClick={() => {
        setActiveCategory(category.name)
      }}
      className={activeCategory === category.name ? 'active' : ''}>
      {category.text}
    </li>
  )
}

export default Category