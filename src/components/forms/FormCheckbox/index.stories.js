import React from 'react';
import { reduxForm } from 'redux-form';
import { storiesOf } from '@storybook/react';

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
