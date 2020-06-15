import React from 'react'
import ReactDOM from 'react-dom'
import store from './store/index'
import App from './App'
/*
 */
import 'redux-devtools-extension'
import { Provider } from 'react-redux'

ReactDOM.render(
  <App />,

  document.getElementById('root')
)
