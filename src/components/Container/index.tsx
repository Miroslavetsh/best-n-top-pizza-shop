import styles from './Styles.module.scss'

interface ContainerPropTypes {
  children?: React.ReactNode
  className?: string
}

const Container: React.FC<ContainerPropTypes> = (props): JSX.Element => {
  const { children, className } = props
  const classNames = [styles.container, className]

  return <div className={classNames.join(' ')}>{children}</div>
}

Container.defaultProps = {
  className: '',
  children: <></>,
}

export default Container
