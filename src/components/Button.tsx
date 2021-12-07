interface ButtonProps {
  href: string
  className: string
  onClick?: () => void
  children?: React.ReactNode
  outline?: boolean
}

const Button: React.FC<ButtonProps> = (props): JSX.Element => {
  const { href, onClick, children, outline, className } = props

  const classNames = ['button', className]
  outline && classNames.push('button--outline')

  return (
    <a href={href} onClick={onClick} className={classNames.join(' ')}>
      {children}
    </a>
  )
}

Button.defaultProps = {
  outline: false,
  className: '',
  onClick: () => {},
}

export default Button
