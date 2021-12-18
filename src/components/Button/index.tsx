import styles from './Styles.module.scss'

interface ButtonPropTypes {
  className?: string
  href?: string
  onClick?: () => void
  children?: React.ReactNode
  outline?: boolean
  disabled?: boolean
  circle?: boolean
}

const Button: React.FC<ButtonPropTypes> = (props): JSX.Element => {
  const { href, onClick, children, outline, className, disabled, circle } = props

  const classNames = [styles.button, className]
  outline && classNames.push(styles.outline)
  disabled && classNames.push(styles.disabled)
  circle && classNames.push(styles.circle)

  if (href === '') {
    return (
      <span onClick={onClick} className={classNames.join(' ')}>
        {children}
      </span>
    )
  }
  return (
    <a href={href} onClick={onClick} className={classNames.join(' ')}>
      {children}
    </a>
  )
}

Button.defaultProps = {
  href: '',
  className: '',
  onClick: () => {},
  outline: false,
  disabled: false,
  circle: false,
}

export default Button
