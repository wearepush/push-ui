import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Radio from './Radio';

storiesOf('inputs/Radio', module)
  .add('with default icon', () =>
    <Radio
      onFocus={action('focus')}
      onChange={action('change')}
      onBlur={action('blur')}
      name="Radio-0"
      placeholder="Radio placeholder"
      value="0"
    />
  )
  .add('with custom icon', () => (
    <Radio
      onFocus={action('focus')}
      onChange={action('change')}
      onBlur={action('blur')}
      name="Radio-1"
      placeholder="Radio placeholder"
      custom
      value="0"
    />
  ))
  .add('disabled', () => (
    <Radio
      name="Radio-1"
      placeholder="Radio placeholder"
      disabled
      custom
      value="0"
    />
  ))
  .add('controlled', () => (
    <div>
      <Radio
        name="Radio-1"
        placeholder="Radio placeholder"
        custom
        checked={false}
        value="0"
      />
      <Radio
        name="Radio-1"
        placeholder="Radio placeholder"
        custom
        checked
        value="1"
      />
    </div>
  ));
