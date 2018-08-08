import React from 'react';
import { reduxForm } from 'redux-form';
import { storiesOf } from '@storybook/react';

import Root from './../__mocks__/Root';
import Form from './../__mocks__/Form';
import configureStore from './../__mocks__/store';
import validateTextField from './__mocks__/validateTextField';
import { FormTextField, FormButton } from '../../index';

const mapPropsToForm = {
  form: 'testForm',
  validate: validateTextField
};
const initialState = {};
const store = configureStore(initialState);
const MountForm = reduxForm(mapPropsToForm)(Form);

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
