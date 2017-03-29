import { IndexRoute, Route } from 'react-router';

import App from './components/App';
import CompaniesPage from './components/Companies/CompaniesPage';
import CompanyPage from './components/Companies/CompanyPage';
import NewCompanyPage from './components/Companies/NewCompanyPage';
import React from 'react';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={CompaniesPage} />
    <Route path="/companies" component={CompaniesPage} >
      <Route path="/companies/new" component={NewCompanyPage} />
      <Route path="/companies/:id" component={CompanyPage} />
    </Route>
  </Route>
);