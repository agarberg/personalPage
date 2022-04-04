import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import reportWebVitals from './reportWebVitals';

//reducer - a piece of data, returned by a function
const count = (state = 0, action) => {
  console.log('imma count reducer');

//switch example!!
// switch (action.type) {
//   case 'INCREASE':
//     return state +1;
//     case 'DECREASE';
//     return state -1;
//     default:
//       return state;
// }


  if (action.type === 'INCREASE') {
    console.log('you click increase');
    return state + 1;
    //returns state +1 if INCREASE
  }
  else if (action.type === 'DECREASE') {
    console.log('you click decrease');
    return state - 1;
}
return state 
}
//   else {
//       //if no increase, return last value of state
//     return state;
// }

const elementList = (state = [], action) => {
  if (action.type === 'ADD_ELEMENT') {
    console.log(`the element added was ${action.payload}`);
    // state.push(action.payload);
    //return a new array with the old contents plus NEW DATA
    return [...state, action.payload];
  }
  return state;
}
//end reducers


//store!! combining two reducers, needed when more than one
const storeInstance = createStore(
  combineReducers(
    {
      count, 
      elementList
    }
  ),
  applyMiddleware(
    logger //tell redux that we want to use our new logger
  )
);

//the provider lets redux and react talk to eachother 

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeInstance}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
