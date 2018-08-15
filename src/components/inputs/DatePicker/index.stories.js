import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import DatePicker from './DatePicker';

storiesOf('inputs/DatePicker', module)
  .addDecorator(withInfo)
  .add('default', () =>
    <DatePicker
      defaultValue="18-08-15"
      onBlur={action('onBlur')}
      onChange={action('onChange')}
      onFocus={action('onFocus')}
      mode="single"
    />
  )
  .add('disabled', () =>
    <DatePicker
      disabled
      defaultValue="18-08-15"
      onBlur={action('onBlur')}
      onChange={action('onChange')}
      onFocus={action('onFocus')}
      mode="single"
    />
  )
  .add('multiple', () =>
    <DatePicker
      defaultValue="18-08-15"
      onBlur={action('onBlur')}
      onChange={action('onChange')}
      onFocus={action('onFocus')}
      mode="multiple"
    />
  )
  .add('range', () =>
    <DatePicker
      defaultValue="18-08-15"
      onBlur={action('onBlur')}
      onChange={action('onChange')}
      onFocus={action('onFocus')}
      mode="range"
    />
  );
