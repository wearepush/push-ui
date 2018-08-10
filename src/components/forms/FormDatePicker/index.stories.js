import React from 'react';
import { reduxForm } from 'redux-form';
import { storiesOf } from '@storybook/react';

import Root from './../__mocks__/Root';
import Form from './../__mocks__/Form';
import configureStore from './../__mocks__/store';
import { FormDatePicker } from '../../index';

const mapPropsToForm = {
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
            name="datepicker"
         />
      </MountForm>
    </Root>
  );
