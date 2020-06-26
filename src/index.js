import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import {OfficeProvider} from './context';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <OfficeProvider>
    <Router>
      <App />
    </Router>
  </OfficeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
