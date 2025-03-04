import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Notifications from './Notifications';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// const notifications = ReactDOM.createRoot(document.getElementById('root-notifications'));
// notifications.render(
//   <React.StrictMode>
//     <Notifications />
//   </React.StrictMode>
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='root-notification'>
    < Notifications />
    <App />
  </div>
);