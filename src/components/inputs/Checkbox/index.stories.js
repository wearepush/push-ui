import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Checkbox from './Checkbox';

storiesOf('Checkbox', module)
  .add('with default icon', () =>
    <Checkbox
      onClick={action('clicked')}
      name="checkbox-0"
      placeholder="Checkbox placeholder"
    />
  )
  .add('with custom icon', () => (
    <Checkbox
      onClick={action('clicked')}
      name="checkbox-1"
      placeholder="Checkbox placeholder"
      custom
    />
  ))
  .add('disabled', () => (
    <Checkbox
      onClick={action('clicked')}
      name="checkbox-1"
      placeholder="Checkbox placeholder"
      disabled
      custom
    />
  ))
  .add('checked', () => (
    <Checkbox
      onClick={action('clicked')}
      name="checkbox-1"
      placeholder="Checkbox placeholder"
      custom
      checked
    />
  ))
  .add('unchecked', () => (
    <Checkbox
      onClick={action('clicked')}
      name="checkbox-1"
      placeholder="Checkbox placeholder"
      custom
      unchecked
    />
  ));
