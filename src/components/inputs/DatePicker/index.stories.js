import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';

import DatePicker from './DatePicker';

storiesOf('inputs/DatePicker', module)
  .addDecorator(withKnobs)
  .add('default', () =>
    <DatePicker
      disabled={boolean('disabled', false)}
      invalid={boolean('invalid', false)}
      defaultValue="18-08-15"
      mode={select('mode', ['single', 'multiple', 'range'], 'single')}
      onBlur={action('onBlur')}
      onChange={action('onChange')}
      onFocus={action('onFocus')}
      valid={boolean('valid', false)}
    />
  )
  .add('controlled', () =>
    <DatePicker
      value="18-08-15"
    />
  );
