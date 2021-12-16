interface ButtonPropTypes {
  href?: string
  className: string
  onClick?: () => void
  children?: React.ReactNode
  outline?: boolean
  disabled?: boolean
}

const Button: React.FC<ButtonPropTypes> = (props): JSX.Element => {
  const { href, onClick, children, outline, className, disabled } = props

  const classNames = ['button', className]
  outline && classNames.push('button--outline')
  disabled && classNames.push('button--disabled')

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
}

export default Button
