import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Radio from './Radio';

storiesOf('inputs/Radio', module)
  .add('with custom icon', () =>
    <Radio
      onFocus={action('focus')}
      onChange={action('change')}
      onBlur={action('blur')}
      name="Radio-0"
      placeholder="Radio placeholder"
      value="0"
    />
  )
  .add('disabled', () => (
    <Radio
      name="Radio-1"
      placeholder="Radio placeholder"
      disabled
      value="0"
    />
  ))
  .add('controlled', () => (
    <div>
      <Radio
        name="Radio-1"
        placeholder="Radio placeholder"
        checked={false}
        value="0"
      />
      <Radio
        name="Radio-1"
        placeholder="Radio placeholder"
        checked
        value="1"
      />
    </div>
  ))
  .add('with default icon', () => (
    <Radio
      custom={false}
      onFocus={action('focus')}
      onChange={action('change')}
      onBlur={action('blur')}
      name="Radio-1"
      placeholder="Radio placeholder"
      value="0"
    />
  ));
