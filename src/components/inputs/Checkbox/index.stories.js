import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Checkbox from './Checkbox';

storiesOf('inputs/Checkbox', module)
  .add('with default icon', () =>
    <Checkbox
      onFocus={action('focus')}
      onChange={action('change')}
      onBlur={action('blur')}
      name="checkbox-0"
      placeholder="Checkbox placeholder"
    />
  )
  .add('with custom icon', () => (
    <Checkbox
      onFocus={action('focus')}
      onChange={action('change')}
      onBlur={action('blur')}
      name="checkbox-1"
      placeholder="Checkbox placeholder"
      viewType="custom"
    />
  ))
  .add('disabled', () => (
    <Checkbox
      name="checkbox-1"
      placeholder="Checkbox placeholder"
      disabled
      viewType="custom"
    />
  ))
  .add('toggle', () => (
    <Checkbox
      onFocus={action('focus')}
      onChange={action('change')}
      onBlur={action('blur')}
      name="checkbox-1"
      placeholder="Checkbox placeholder"
      viewType="toggle"
    />
  ))
  .add('controlled', () => (
    <div>
      <Checkbox
        name="checkbox-0"
        placeholder="Checkbox placeholder"
        viewType="custom"
        checked={false}
      />
      <Checkbox
        name="checkbox-1"
        placeholder="Checkbox placeholder"
        viewType="custom"
        checked
      />
    </div>
  ));
