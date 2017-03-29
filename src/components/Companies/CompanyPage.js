import * as companyActions from '../../actions/companyActions';

import React, {PropTypes} from 'react';

import CompanyForm from './CompanyForm';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';

// import toastr from 'toastr'; 

class CompanyPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      company: Object.assign({}, this.props.company), 
      saving: false,
      isEditing: false
    };
    this.saveCompany = this.saveCompany.bind(this);
    this.updateCompanyState = this.updateCompanyState.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.deleteCompany = this.deleteCompany.bind(this);
    this.redirect = this.redirect.bind(this);
  }


  componentWillReceiveProps(nextProps) {
    if (this.props.company._id != nextProps.company._id) {
      this.setState({company: Object.assign({}, nextProps.company)});
    }    

    this.setState({saving: false, isEditing: false});
  }

  toggleEdit() {
    this.setState({isEditing: true});
  } 

  updateCompanyState(event) {
    const field = event.target.name;
    const company = this.state.company;
    company[field] = event.target.value;
    return this.setState({company: company});
  }

  saveCompany(event) {
    event.preventDefault();
    this.setState({saving: true});
    this.props.actions.updateCompany(this.state.company);

  } 

  deleteCompany(event) {
    this.props.actions.deleteCompany(this.state.company);
  }

  redirect() {
    browserHistory.push('/companies');
  }

  render() {
    if (this.state.isEditing) {
      return (
      <div>
        <h1>Edit company</h1>
        <CompanyForm 
          company={this.state.company} 
          onSave={this.saveCompany} 
          onChange={this.updateCompanyState} 
          saving={this.state.saving}/> 
      </div>
      );
    }
    return (
      <div className="col-md-8 col-md-offset-2">
        <h1>{this.state.company.name}</h1>
        <button onClick={this.toggleEdit} className="btn btn-default  ">Edit</button>
        <button onClick={this.deleteCompany} className="btn btn-default  ">Delete</button>
      </div>
    );
  }
}


CompanyPage.propTypes = {
  company: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function getCompanyById(companies, id) {
  let company = companies.find(company => company._id == id);
  return Object.assign({}, company);
}

function mapStateToProps(state, ownProps) {
  let company = {name: ''};
  const companyId = ownProps.params.id;
  if (companyId && state.companies.length > 0) {
    company = getCompanyById(state.companies, ownProps.params.id);    
  } 
    return {company: company};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(companyActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CompanyPage);







