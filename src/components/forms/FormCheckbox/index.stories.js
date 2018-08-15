import React from 'react';
import { reduxForm } from 'redux-form';
import { storiesOf, addDecorator } from '@storybook/react';

import Root from './../__mocks__/Root';
import Form from './../__mocks__/Form';
import configureStore from './../__mocks__/store';
import validateCheckbox from './__mocks__/validateCheckbox';
import { FormCheckbox, FormButton } from '../../index';

const mapPropsToForm = {
  form: 'testForm',
  validate: validateCheckbox
};
const initialState = {};
const store = configureStore(initialState);
const MountForm = reduxForm(mapPropsToForm)(Form);

const Decorator = (storyFn) => (
  <Root
    store={store}
  >
    <MountForm>
      { storyFn() }
      <FormButton
        float
        form={mapPropsToForm.form}
      >
        {'Submit'}
      </FormButton>
    </MountForm>
  </Root>
);

addDecorator(Decorator);

storiesOf('forms/FormCheckbox', module)
  .add('default', () =>
    <FormCheckbox
      placeholder="Remember me"
      name="remember"
    />
  )
  .add('toggle', () =>
    <FormCheckbox
      viewType="toggle"
      placeholder="Remember me"
      name="remember"
    />
  );
