import React from 'react';
import ReactDOM from 'react-dom/client';
import {render} from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store';
// // import '../node_modules/semantic-ui-css/semantic.min.css';
// import './styles/semantic.min.css';
import { Container } from 'semantic-ui-react';
import './index.css';



store.subscribe(() => {
  // alert('stora izmenilac');
  console.log(store.getState());

});

// setTimeout(()=>{
//   console.log(store.getState());
// }, 1000)



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
