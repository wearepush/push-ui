import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import Select from './Select';

storiesOf('inputs/Select', module)
  .addDecorator(withKnobs)
  .add('default', () =>
    <Select
      defaultValue="2"
      disabled={boolean('disabled', false)}
      invalid={boolean('invalid', false)}
      onFocus={action('focus')}
      onChange={action('change')}
      onBlur={action('blur')}
      name="Select-0"
      placeholder="Select placeholder"
      valid={boolean('valid', false)}
    >
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </Select>
  )
  .add('controlled', () =>
    <Select
      name="Select-0"
      placeholder="Select placeholder"
      value="2"
    >
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </Select>
  );
