import React from 'react';
import { storiesOf } from '@storybook/react';

import withForm from '../__mocks__/FormDecorator';
import validate from './__mocks__/validateCheckbox';
import { FormCheckbox } from '../../index';

const form = {
  name: 'testForm',
  validate,
};

storiesOf('forms/FormCheckbox', module)
  .addDecorator(withForm({ form }))
  .add('default', () => <FormCheckbox placeholder="Remember me" name="remember" />);
