import React, {PropTypes} from 'react';

import CompanyPage from './CompanyPage';
import {Link} from 'react-router';

const CompanyListRow = ({company}) => {
  return (
    <tr>
      <td><Link to={'/companies/' + company._id}>{company.name}</Link></td>
    </tr>
  );
};

CompanyListRow.propTypes = {
  company: PropTypes.object.isRequired
};

export default CompanyListRow;
