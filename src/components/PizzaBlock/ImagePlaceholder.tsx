import ContentLoader from 'react-content-loader'

import styles from './Styles.module.scss'

const ImagePlaceholder: React.FC = (): JSX.Element => {
  return (
    <ContentLoader
      className={styles.image}
      speed={1}
      width={200}
      height={200}
      viewBox='0 0 200 200'
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'>
      <circle cx='100' cy='100' r='100' />
    </ContentLoader>
  )
}

export default ImagePlaceholder
