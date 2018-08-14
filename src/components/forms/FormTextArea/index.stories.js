import React from 'react';
import { reduxForm } from 'redux-form';
import { storiesOf } from '@storybook/react';

import Root from './../__mocks__/Root';
import Form from './../__mocks__/Form';
import configureStore from './../__mocks__/store';
import validateTextArea from './__mocks__/validateTextArea';
import { FormTextArea, FormButton } from '../../index';

const mapPropsToForm = {
  form: 'testForm',
  validate: validateTextArea
};
const initialState = {};
const store = configureStore(initialState);
const MountForm = reduxForm(mapPropsToForm)(Form);

storiesOf('forms/FormTextArea', module)
  .add('default', () =>
    <Root
      store={store}
    >
      <MountForm>
        <FormTextArea
          label="Description"
          name="description"
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
