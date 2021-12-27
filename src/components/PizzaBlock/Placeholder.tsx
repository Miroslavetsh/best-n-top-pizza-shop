import ContentLoader from 'react-content-loader'

import styles from './Styles.module.scss'

const Placeholder: React.FC = (): JSX.Element => {
  return (
    <ContentLoader
      className={styles.pizzaBlock}
      speed={1}
      width={286}
      height={434}
      viewBox='0 0 286 434'
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'>
      <circle cx='137' cy='113' r='100' />
      <rect x='1' y='225' rx='3' ry='3' width='280' height='20' />
      <rect x='1' y='296' rx='3' ry='3' width='280' height='84' />
      <rect x='1' y='390' rx='3' ry='3' width='92' height='40' />
      <rect x='126' y='391' rx='4' ry='4' width='155' height='40' />
      <rect x='0' y='256' rx='3' ry='3' width='280' height='31' />
    </ContentLoader>
  )
}

export default Placeholder
