import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import TextField from './TextField';

storiesOf('TextField', module)
  .add('default', () =>
    <TextField
      onClick={action('clicked')}
      name="TextField-0"
      placeholder="TextField placeholder"
    />
  )
  .add('valid', () =>
    <TextField
      onClick={action('clicked')}
      name="TextField-0"
      placeholder="TextField placeholder"
      valid
    />
  )
  .add('invalid', () =>
    <TextField
      onClick={action('clicked')}
      name="TextField-0"
      placeholder="TextField placeholder"
      invalid
    />
  )
  .add('disabled', () =>
    <TextField
      onClick={action('clicked')}
      name="TextField-0"
      placeholder="TextField placeholder"
      disabled
    />
  );
