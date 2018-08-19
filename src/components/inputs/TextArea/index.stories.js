import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import TextArea from './TextArea';

storiesOf('inputs/TextArea', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .add('default', () =>
    <TextArea
      disabled={boolean('disabled', false)}
      invalid={boolean('invalid', false)}
      onFocus={action('focus')}
      onChange={action('change')}
      onBlur={action('blur')}
      name="textArea-0"
      placeholder="TextArea placeholder"
      valid={boolean('valid', false)}
    />
  )
  .add('controlled', () =>
    <TextArea
      name="textArea-0"
      placeholder="TextArea placeholder"
      value="test"
    />
  );
