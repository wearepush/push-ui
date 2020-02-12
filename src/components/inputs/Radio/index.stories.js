import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import Radio from './Radio';

storiesOf('inputs/Radio', module)
  .addDecorator(withKnobs)
  .add('default', () =>
    <Radio
      custom={boolean('custom', true)}
      disabled={boolean('disabled', false)}
      invalid={boolean('invalid', false)}
      onFocus={action('focus')}
      onChange={action('change')}
      onBlur={action('blur')}
      name="radio"
      placeholder="Radio placeholder"
      valid={boolean('valid', false)}
      value="0"
    />
  )
  .add('controlled', () => (
    <Radio
      name="radio"
      placeholder="Radio placeholder"
      checked={false}
      value="0"
    />
  ));
