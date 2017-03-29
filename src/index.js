/*eslint-disable import/default */

import 'babel-polyfill';
import '../node_modules/toastr/build/toastr.min.css';

import { Router, browserHistory } from 'react-router';

import { Provider } from 'react-redux';
import React from 'react';
import configureStore from './store/configureStore';
import {loadCompanies} from './actions/companyActions';
import { render } from 'react-dom';
import routes from './routes';

const store = configureStore();

// 1. Call dispatch on the store with an argument of this action that makes an API request
// 2. The loadCourses() action is invoked, which makes an API call, and dispatches the loadCoursesSuccess action
// 3. that action: store -> root reducer -> courses reducer
// 4. courses reducer handles that action, recieves course payload and return new state that has courses: courses payload
// 5. the CoursesPage component is connected to the store, so store's new state triggers the mapStateToProps function, which triggers the render function on that component
store.dispatch(loadCompanies());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);