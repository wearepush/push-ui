import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import withForm from './../__mocks__/FormDecorator';
import validate from './__mocks__/validateTags';
import { FormTags } from '../../index';

const WithOutContext = DragDropContext(HTML5Backend)(FormTags);

const form = {
  form: 'testForm',
  initialValues: {
    tags: [
      { number: '1', label: 'Tag 1' },
      { number: '2', label: 'Tag 2' },
      { number: '3', label: 'Tag 3' },
    ]
  },
  validate,
};

storiesOf('forms/FormTags', module)
  .addDecorator(withInfo)
  .addDecorator(withForm({ form }))
  .add('default', () =>
    <FormTags
      accessor={{
        id: 'number',
        value: 'label',
      }}
      label="sadsa"
      placeholder="Add tags..."
      name="tags"
    />
  )
  .add('without context', () =>
    <WithOutContext
      accessor={{
        id: 'number',
        value: 'label',
      }}
      label="sadsa"
      placeholder="Add tags..."
      name="tags"
      withoutContext
    />
  );
