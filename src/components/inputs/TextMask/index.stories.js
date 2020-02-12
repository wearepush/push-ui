import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';

import TextMask from './TextMask';

storiesOf('inputs/TextMask', module)
  .addDecorator(withKnobs)
  .add('default', () =>
    <TextMask
      disabled={boolean('disabled', false)}
      guide
      invalid={boolean('invalid', false)}
      mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      name="TextMask-0"
      onFocus={action('focus')}
      onChange={action('change')}
      onBlur={action('blur')}
      placeholder="Enter a phone number"
      size={select("size", ["xs", "sm", "md", "lg", "xl"], "sm")}
      valid={boolean('valid', false)}
    />
  )
  .add('controlled', () =>
    <TextMask
      guide
      mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      name="TextMask-0"
      onChange={action('change')}
      placeholder="Enter a phone number"
      value="(234) 324-2342"
    />
  );
