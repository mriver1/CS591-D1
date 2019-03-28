import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store/index';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App>
        <Route exact path='/HW3' component={HW3}/>
        <Route exact path='/weather' component={Weather}/>
        <Route exact path='/error' component={ErrorDisplay}/>
      </App>
    </Router>
  </Provider>
  , document.getElementById('root'));

// registerServiceWorker(); // eslint-disable-line no-undef
