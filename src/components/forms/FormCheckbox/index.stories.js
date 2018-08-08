import React, { Component } from 'react';
import { reduxForm, Form } from 'redux-form';
import { func, node } from 'prop-types';
import { storiesOf } from '@storybook/react';

import Root from './../__mocks__/Root';
import configureStore from './../__mocks__/store';
import validateCheckbox from './__mocks__/validateCheckbox';
import { FormCheckbox, FormButton } from '../../index';

const mapPropsToForm = {
  form: 'testForm',
  validate: validateCheckbox
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

storiesOf('forms/FormCheckbox', module)
  .add('default', () =>
    <Root
      store={store}
    >
      <MountForm>
        <FormCheckbox
          placeholder="Remember me"
          name="remember"
        />
        <FormButton
          float
          form={mapPropsToForm.form}
        >
          {'Submit'}
        </FormButton>
      </MountForm>
    </Root>
  );
