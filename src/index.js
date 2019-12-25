import React from 'react';
import { HashRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './container/app';

ReactDOM.render((
  <HashRouter>
    <div className='main'>
      <App />
    </div>
  </HashRouter>
), document.getElementById('root'))
