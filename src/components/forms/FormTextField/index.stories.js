import React, { Component } from 'react';
import { reduxForm, Form } from 'redux-form';
import { func, node } from 'prop-types';
import { storiesOf } from '@storybook/react';

import Root from './../__mocks__/Root';
import configureStore from './../__mocks__/store';
import validateTextField from './__mocks__/validateTextField';
import { FormTextField, FormButton } from '../../index';

const mapPropsToForm = {
  form: 'testForm',
  validate: validateTextField
};
const initialState = {};
const store = configureStore(initialState);
class ComponentForm extends Component {
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
      <Form
        onSubmit={handleSubmit(this.onSubmit)}
      >
        {children}
      </Form>
    );
  }
}

const MountForm = reduxForm(mapPropsToForm)(ComponentForm);

storiesOf('forms/FormTextField', module)
  .add('default', () =>
    <Root
      store={store}
    >
      <MountForm>
        <FormTextField
          label="Email"
          name="email"
          type="email"
        />
        <FormTextField
          label="Password"
          name="password"
          type="password"
        />
        <FormButton
          float={true}
          form={mapPropsToForm.form}
        >
          {'Login'}
        </FormButton>
      </MountForm>
    </Root>
  );
