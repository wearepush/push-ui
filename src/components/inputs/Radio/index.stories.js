import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Radio from './Radio';

storiesOf('Radio', module)
  .add('with default icon', () =>
    <Radio
      onClick={action('clicked')}
      name="Radio-0"
      placeholder="Radio placeholder"
    />
  )
  .add('with custom icon', () => (
    <Radio
      onClick={action('clicked')}
      name="Radio-1"
      placeholder="Radio placeholder"
      custom
    />
  ))
  .add('disabled', () => (
    <Radio
      onClick={action('clicked')}
      name="Radio-1"
      placeholder="Radio placeholder"
      disabled
      custom
    />
  ))
  .add('checked', () => (
    <Radio
      onClick={action('clicked')}
      name="Radio-1"
      placeholder="Radio placeholder"
      custom
      checked
    />
  ))
  .add('unchecked', () => (
    <Radio
      onClick={action('clicked')}
      name="Radio-1"
      placeholder="Radio placeholder"
      custom
      unchecked
    />
  ));
