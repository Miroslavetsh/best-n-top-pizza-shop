import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import App from './App'
import store from './redux/store'

import './index.scss'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <Route path='/' component={App} />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
)
