import React from 'react';
import { reduxForm } from 'redux-form';
import { storiesOf } from '@storybook/react';

import Root from './../__mocks__/Root';
import Form from './../__mocks__/Form';
import configureStore from './../__mocks__/store';
import validateRadio from './__mocks__/validateRadio';
import { FormRadio, FormButton } from '../../index';

const mapPropsToForm = {
  form: 'testForm',
  validate: validateRadio
};
const initialState = {};
const store = configureStore(initialState);
const MountForm = reduxForm(mapPropsToForm)(Form);

storiesOf('forms/FormRadio', module)
  .add('default', () =>
    <Root
      store={store}
    >
      <MountForm>
        <FormRadio
          className="test"
          placeholder="Female"
          name="gender"
          value="0"
        />
        <FormRadio
          placeholder="Male"
          name="gender"
          value="1"
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
