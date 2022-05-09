import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
<<<<<<< HEAD

ReactDOM.render(
  <React.StrictMode>
   <App/>
  </React.StrictMode>,
  document.getElementById('root')
);
=======
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';






ReactDOM.render(
  <React.StrictMode>
    <App />
    <ToastContainer />
  </React.StrictMode>,
  document.getElementById('root')
);



>>>>>>> fb42b91f8f3ea3694fd0fa59f63a37d1ab23cabf
