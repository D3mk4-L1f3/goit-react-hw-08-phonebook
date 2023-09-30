import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from 'components/App';
import './index.css';

import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter basename="/goit-react-hw-08-phonebook">
        <App />
        <ToastContainer
        position="top-center"
        autoClose={2000}
        theme="dark"
        hideProgressBar={true}
        transition={Zoom}
        pauseOnHover
      />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  // </React.StrictMode> 
);