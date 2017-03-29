import React, {PropTypes} from 'react';

import TextInput from '../common/TextInput';

class CompanyForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form>
          <TextInput
            name="name"
            label="name"
            value={this.props.company.name}
            onChange={this.props.onChange}/>

          <input
            type="submit"
            disabled={this.props.saving}
            value={this.props.saving ? 'Saving...' : 'Save'}
            className="btn btn-primary"
            onClick={this.props.onSave}/>
        </form>
      </div>
  );
  }
}

CompanyForm.propTypes = {
  company: React.PropTypes.object.isRequired,  
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool
};

export default CompanyForm;
