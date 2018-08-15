import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import withForm from './../__mocks__/FormDecorator';
import validate from './__mocks__/validateCheckbox';
import { FormCheckbox } from '../../index';

const form = {
  form: 'testForm',
  validate,
};

storiesOf('forms/FormCheckbox', module)
  .addDecorator(withInfo)
  .addDecorator(withForm({ form }))
  .add('default', () =>
    <FormCheckbox
      placeholder="Remember me"
      name="remember"
    />
  )
  .add('toggle', () =>
    <FormCheckbox
      viewType="toggle"
      placeholder="Remember me"
      name="remember"
    />
  );
