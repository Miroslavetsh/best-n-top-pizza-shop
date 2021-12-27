import styles from './Styles.module.scss'

interface ContainerPropTypes {
  children?: React.ReactNode
  className?: string
  isSmall?: boolean
}

const Container: React.FC<ContainerPropTypes> = (props): JSX.Element => {
  const { children, className, isSmall } = props

  const classNames = [styles.container, className]
  isSmall && classNames.push(styles.small)

  return <div className={classNames.join(' ')}>{children}</div>
}

Container.defaultProps = {
  className: '',
  children: <></>,
  isSmall: false,
}

export default Container
