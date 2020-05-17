import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component {
  renderValidatError = ({ error, touched }) => {
    if (error && touched) {
      return (
        <div className='ui error message'>
          <div className='header'>{error}</div>
        </div>
      );
    } else {
      return null;
    }
  };

  renderInput = ({ input, label, meta }) => {
    const className = meta.error && meta.touched ? `field error` : `field`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} />
        {this.renderValidatError(meta)}
      </div>
    );
  };

  onFormSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onFormSubmit)}
        className='ui form error'
      >
        <Field name='title' component={this.renderInput} label='Enter Title' />
        <Field
          name='description'
          component={this.renderInput}
          label='Enter Description'
        />
        <button className='ui primary button'>Submit</button>
      </form>
    );
  }
}

const validate = ({ title, description }) => {
  const error = {};
  if (!title) {
    error.title = 'You must enter a title!';
  }
  if (!description) {
    error.description = 'You must enter description!';
  }
  return error;
};

export default reduxForm({ form: 'streamCreate', validate })(StreamForm);
