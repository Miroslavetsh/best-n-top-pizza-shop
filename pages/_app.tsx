import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { createWrapper, MakeStore } from 'next-redux-wrapper'
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
const makeStore = () => store
const wrapper = createWrapper(makeStore, { debug: true })

export default wrapper.withRedux(App)
