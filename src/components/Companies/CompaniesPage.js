import {Link, browserHistory} from 'react-router';
import React, {PropTypes} from 'react';

import CompanyList from './CompanyList';
import NewCompanyPage from './NewCompanyPage';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class CompaniesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const companies = this.props.companies;
    return (
      <div className="col-md-12">
        <h1>Companies</h1>
        <Link to={'/companies/new'} className="btn btn-primary">Add</Link>
        <div className="col-md-4">
          <CompanyList companies={companies} />
        </div>
        <div className="col-md-8">
          {this.props.children}
        </div>
      </div>
    );
  }
}

CompaniesPage.propTypes = {
  companies: PropTypes.array.isRequired,
  children: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  return {
    companies: state.companies
  };
}

export default connect(mapStateToProps)(CompaniesPage);





