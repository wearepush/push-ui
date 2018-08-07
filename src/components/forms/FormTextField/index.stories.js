import React, { Component } from 'react';
import { reduxForm, Form } from 'redux-form';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Root from './../__mocks__/Root';
import configureStore from './../__mocks__/store';
import validate from './__mocks__/validate';
import { FormTextField, FormButton } from '../../index';

const mapPropsToForm = {
  form: 'testForm',
  validate
};
const initialState = {};
const store = configureStore(initialState);
class ComponentForm extends Component {
  onSubmit = (values) => {
    console.log(values);
  };

  render() {
    const { children, handleSubmit, error } = this.props;
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
