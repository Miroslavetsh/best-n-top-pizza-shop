import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import Layout from '../components/layout'

import store from '../redux/store'

import '../styles/globals.scss'

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default App
