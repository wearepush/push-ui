import React from 'react';
import { reduxForm } from 'redux-form';
import { storiesOf } from '@storybook/react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Root from './../__mocks__/Root';
import Form from './../__mocks__/Form';
import configureStore from './../__mocks__/store';
import validateTags from './__mocks__/validateTags';
import { FormTags,  FormButton } from '../../index';

const WithOutContext = DragDropContext(HTML5Backend)(FormTags);

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
          isContext
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
  .add('without context', () =>
    <Root
      store={store}
    >
      <MountForm>
        <WithOutContext
          withoutContext
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
