import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import TextField from './TextField';

storiesOf('inputs/TextField', module)
  .add('default', () =>
    <TextField
      onFocus={action('focus')}
      onChange={action('change')}
      onBlur={action('blur')}
      name="TextField-0"
      placeholder="TextField placeholder"
    />
  )
  .add('valid', () =>
    <TextField
      name="TextField-0"
      placeholder="TextField placeholder"
      valid
    />
  )
  .add('invalid', () =>
    <TextField
      name="TextField-0"
      placeholder="TextField placeholder"
      invalid
    />
  )
  .add('disabled', () =>
    <TextField
      name="TextField-0"
      placeholder="TextField placeholder"
      disabled
    />
  )
  .add('controlled', () =>
    <TextField
      name="TextField-0"
      placeholder="TextField placeholder"
      value="text"
    />
  );
