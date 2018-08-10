import React from 'react';
import { reduxForm } from 'redux-form';
import { storiesOf } from '@storybook/react';

import Root from './../__mocks__/Root';
import Form from './../__mocks__/Form';
import configureStore from './../__mocks__/store';
import { FormDatePicker, FormButton } from '../../index';

const mapPropsToForm = {
  initialValues: {
    datepicker: '',
  },
  form: 'testForm',
};
const initialState = {};
const store = configureStore(initialState);
const MountForm = reduxForm(mapPropsToForm)(Form);

storiesOf('forms/FormDatePicker', module)
  .add('default', () =>
    <Root
      store={store}
    >
      <MountForm>
        <FormDatePicker
          label="date picker"
          name="datepicker"
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
