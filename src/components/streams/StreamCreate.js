import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions/index';
import CreateForm from './StreamForm';

class StreamCreate extends React.Component {
  onFormSubmit = (formValues) => {
    this.props.createStream(formValues);
  };
  render() {
    return (
      <div>
        <h3>Create a Stream</h3>
        <CreateForm onSubmit={this.onFormSubmit} />
      </div>
    );
  }
}

export default connect(null, { createStream })(StreamCreate);
