import * as types from './actionTypes';

import companyApi from '../api/CompaniesApi';

export function loadCompaniesSuccess(companies) {
  return {type: types.LOAD_COMPANIES_SUCCESS, companies};
}

export function updateCompanySuccess(company) {
  return {type: types.UPDATE_COMPANY_SUCCESS, company};
}

export function createCompanySuccess(company) {
  return {type: types.CREATE_COMPANY_SUCCESS, company};
}

export function deleteCompanySuccess(company) {
  return {type: types.DELETE_COMPANY_SUCCESS, company};
}

export function loadCompanies() {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function(dispatch) {
    return companyApi.getAllCompanies().then(companies => {
      dispatch(loadCompaniesSuccess(companies));
    }).catch(error => {
      throw(error);
    });
  };
}

export function updateCompany(company) {
  return function (dispatch) {
    return companyApi.updateCompany(company).then(responseCompany => {
      dispatch(updateCompanySuccess(responseCompany));
    }).catch(error => {
      throw(error);
    });
  };
}

export function createCompany(company) {
  return function (dispatch) {
    return companyApi.createCompany(company).then(responseCompany => {
      dispatch(createCompanySuccess(responseCompany));
      return responseCompany;
    }).catch(error => {
      throw(error);
    });
  };
}

export function deleteCompany(company) {
  return function(dispatch) {
    return companyApi.deleteCompany(company).then(() => {
      dispatch(deleteCompanySuccess(company));
      return;
    }).catch(error => {
      throw(error);
    });
  };
}







