import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import {store} from "./store"
import {ApiProvider} from "@reduxjs/toolkit/query/react"
import  {apiProduct}  from './features/api/Api';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApiProvider api={apiProduct}>
        <App />
      </ApiProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
