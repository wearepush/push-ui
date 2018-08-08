import React, { Component } from 'react';
import { Form as ReduxForm } from 'redux-form';
import { func, node } from 'prop-types';

export default class Form extends Component {
  static propTypes = {
    children: node.isRequired,
    handleSubmit: func.isRequired,
  };

  onSubmit = (values) => {
    console.log(values); // eslint-disable-line
  };

  render() {
    const { children, handleSubmit } = this.props;
    return (
      <ReduxForm
        onSubmit={handleSubmit(this.onSubmit)}
      >
        {children}
      </ReduxForm>
    );
  }
}
