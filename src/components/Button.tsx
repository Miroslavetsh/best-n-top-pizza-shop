interface ButtonPropsTypes {
  href?: string
  className: string
  onClick?: () => void
  children?: React.ReactNode
  outline?: boolean
}

const Button: React.FC<ButtonPropsTypes> = (props): JSX.Element => {
  const { href, onClick, children, outline, className } = props

  const classNames = ['button', className]
  outline && classNames.push('button--outline')
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
  outline: false,
  className: '',
  onClick: () => {},
}

export default Button
