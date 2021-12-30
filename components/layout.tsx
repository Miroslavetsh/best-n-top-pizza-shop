import { Header } from '.'

type LayoutPropTypes = {
  children: React.ReactNode
}

const Layout: React.FC<LayoutPropTypes> = ({ children }) => {
  return (
    <div className='page'>
      <Header />
      {children}
    </div>
  )
}

export default Layout
