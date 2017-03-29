import React, {PropTypes} from 'react';

import CompanyListRow from './CompanyListRow';

const CompanyList = ({companies}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {companies.map(company => 
          <CompanyListRow key={company.id} company={company} />
        )}
      </tbody>
    </table>
  );
};

CompanyList.propTypes = {
  companies: PropTypes.array.isRequired
};

export default CompanyList;