import React from 'react';
import { storiesOf } from '@storybook/react';

import withForm from '../__mocks__/FormDecorator';
import validate from './__mocks__/validateTextArea';
import { FormTextArea } from '../../index';

const form = {
  name: 'testForm',
  validate,
};

storiesOf('forms/FormTextArea', module)
  .addDecorator(withForm({ form }))
  .add('default', () => <FormTextArea label="Description" name="description" />);
