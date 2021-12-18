import ContentLoader from 'react-content-loader'

import styles from './Styles.module.scss'

const Placeholder = () => {
  return (
    <ContentLoader
      className={styles.pizzaBlock}
      speed={1}
      width={280}
      height={526}
      viewBox='0 0 280 456'
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'>
      <circle cx='140' cy='125' r='122' />
      <rect x='1' y='256' rx='6' ry='6' width='280' height='20' />
      <rect x='1' y='296' rx='6' ry='6' width='280' height='84' />
      <rect x='1' y='390' rx='6' ry='6' width='92' height='40' />
      <rect x='126' y='391' rx='20' ry='20' width='155' height='40' />
    </ContentLoader>
  )
}

export default Placeholder
