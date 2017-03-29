import * as types from '../actions/actionTypes';

import {browserHistory} from 'react-router';
import initialState from './initialState';

export default function catReducer(state = initialState.companies, action) {
  // state variable here reps just an array of courses
  switch(action.type) {
    case types.LOAD_COMPANIES_SUCCESS:
      return Object.assign([], state, action.companies);
    case types.CREATE_COMPANY_SUCCESS:    
      const newState = Object.assign([], state);
      newState.push(action.company);
      browserHistory.push(`/companies`);
      return newState;
     
    case types.UPDATE_COMPANY_SUCCESS:
      return [
        ...state.filter(company => company._id !== action.company._id),
        Object.assign({}, action.company)
      ];
    case types.DELETE_COMPANY_SUCCESS: {
      const newState = Object.assign([], state);
      const indexOfCatToDelete = state.findIndex(company => {return company._id == action.company._id;});
      newState.splice(indexOfCatToDelete, 1);
      browserHistory.push('/companies');
      return newState;
    }
    default: 
      return state;
  }
}
