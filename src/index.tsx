import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter, Route } from 'react-router-dom'

import App from './App'

import './index.scss'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route path='/' exact component={App} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)
