import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';



import  rootReducer  from './Redux/Reducers/rootReducer'
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from "redux-thunk"


const middlware = applyMiddleware(thunk)
const enchancer = compose(middlware, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const store = createStore(rootReducer, enchancer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);


