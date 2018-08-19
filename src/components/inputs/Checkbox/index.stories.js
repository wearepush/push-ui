import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import Checkbox from './Checkbox';

storiesOf('inputs/Checkbox', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .add('default', () =>
    <Checkbox
      disabled={boolean('disabled', false)}
      invalid={boolean('invalid', false)}
      onFocus={action('focus')}
      onChange={action('change')}
      onBlur={action('blur')}
      name="checkbox-0"
      placeholder="Checkbox placeholder"
      valid={boolean('valid', false)}
      viewType={select('viewType', ['default', 'custom', 'toggle'], 'custom')}
    />
  )
  .add('controlled', () => (
    <Checkbox
      checked={false}
      name="checkbox-0"
      placeholder="Checkbox placeholder"
      viewType="custom"
    />
  ));
