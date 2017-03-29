import * as courseActions from '../../actions/companyActions';

import React, {PropTypes} from 'react';

import CompanyForm from './CompanyForm';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';

class NewCompanyPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      company: {name: ''},
      saving: false
    };
    this.redirect = this.redirect.bind(this);
    this.saveCompany = this.saveCompany.bind(this);
    this.updateCompanyState = this.updateCompanyState.bind(this);
  }

  updateCompanyState(event) {
    const field = event.target.name;
    const company = this.state.company;
    company[field] = event.target.value;
    return this.setState({company: company});
  }

  redirect(company) {
    // browserHistory.push(`/cats/${cat.id}`);
    browserHistory.push(`/companies`);
  }

  saveCompany(event) {
    event.preventDefault();
    this.props.actions.createCompany(this.state.company);
  }

  render() {
    return (
      <div>
        <h1>New Company</h1>
        <CompanyForm 
          company={this.state.company}         
          onSave={this.saveCompany}
          onChange={this.updateCompanyState}/>          
      </div>
    );
  }
}

NewCompanyPage.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  company: state.company;
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}


// export default connect(mapStateToProps, mapDispatchToProps)(NewCatPage);
export default connect(mapStateToProps, mapDispatchToProps)(NewCompanyPage);




