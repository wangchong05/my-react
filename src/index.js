import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Life from './Life/Life';
import './style.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

// var ele = <span style={{color: 'red',fontWeight: 600,}}>直接写的标签</span>
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  // ele,
  document.getElementById('root')
);
// ReactDOM.render(
//   <React.StrictMode>
//     <Life />
//   </React.StrictMode>,
//   // ele,
//   document.getElementById('test')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
