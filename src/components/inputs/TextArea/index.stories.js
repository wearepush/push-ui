import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';

import TextArea from './TextArea';

storiesOf('inputs/TextArea', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <TextArea
      disabled={boolean('disabled', false)}
      invalid={boolean('invalid', false)}
      onFocus={action('focus')}
      onChange={action('change')}
      onBlur={action('blur')}
      name="textArea-0"
      placeholder="TextArea placeholder"
      size={select('size', ['xs', 'sm', 'md', 'lg', 'xl'], 'sm')}
      valid={boolean('valid', false)}
    />
  ))
  .add('controlled', () => (
    <TextArea
      name="textArea-0"
      onFocus={action('focus')}
      onChange={action('change')}
      onBlur={action('blur')}
      placeholder="TextArea placeholder"
      value="test"
    />
  ));
