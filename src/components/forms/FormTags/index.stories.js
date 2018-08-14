import React from 'react';
import { reduxForm } from 'redux-form';
import { storiesOf } from '@storybook/react';
import Root from './../__mocks__/Root';
import Form from './../__mocks__/Form';
import configureStore from './../__mocks__/store';
import validateTags from './__mocks__/validateTags';
import { FormTags, FormTagsWithOutContext, FormButton } from '../../index';

const mapPropsToForm = {
  form: 'testForm',
  initialValues: {
    tags: [
      { number: '1', label: 'Tag 1' },
      { number: '2', label: 'Tag 2' },
      { number: '3', label: 'Tag 3' },
    ]
  },
  validate: validateTags
};
const initialState = {};
const store = configureStore(initialState);
const MountForm = reduxForm(mapPropsToForm)(Form);

storiesOf('forms/FormTags', module)
  .add('default', () =>
    <Root
      store={store}
    >
      <MountForm>
        <FormTags
          accessor={{
            id: 'number',
            value: 'label',
          }}
          label="sadsa"
          placeholder="Add tags..."
          name="tags"
        />
        <FormButton
          float
          form={mapPropsToForm.form}
        >
          {'Submit'}
        </FormButton>
      </MountForm>
    </Root>
  )
  .add('with out context', () =>
    <Root
      store={store}
    >
      <MountForm>
        <FormTagsWithOutContext
          accessor={{
            id: 'number',
            value: 'label',
          }}
          label="sadsa"
          placeholder="Add tags..."
          name="tags"
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
