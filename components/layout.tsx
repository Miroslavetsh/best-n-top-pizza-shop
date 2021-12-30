import { Header } from '.'

type LayoutPropTypes = {
  children: React.ReactNode
}

const Layout: React.FC<LayoutPropTypes> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default Layout
