import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from "react-redux";
import { store , persist }  from "./Redux/store";

import {BrowserRouter} from 'react-router-dom'
import axios from 'axios';

//Local
//axios.defaults.baseURL = `http://localhost:3001`

//Deploy
axios.defaults.baseURL = 'https://frontpf-production-eafa.up.railway.app/'

// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persist}>
//         <App />
//       </PersistGate>
//     </Provider>
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 
  <React.StrictMode>
  <BrowserRouter>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persist}>
      <App />
    </PersistGate>
  </Provider>
  </BrowserRouter>
</React.StrictMode>

);


