import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import conductorApp from './reducers'
import App from './components/App.jsx';
import {receiveRegistrations} from './actions'
import data from './data/testdata'
import 'bootstrap/dist/css/bootstrap.css'

let store = createStore(conductorApp)
store.dispatch(receiveRegistrations(data))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('container')
)
