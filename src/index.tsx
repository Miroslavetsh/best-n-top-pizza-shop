import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import App from './App'

import './index.scss'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route path='/' component={App} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
)
