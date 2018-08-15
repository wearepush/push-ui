import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import TextArea from './TextArea';

storiesOf('inputs/TextArea', module)
  .addDecorator(withInfo)
  .add('default', () =>
    <TextArea
      onFocus={action('focus')}
      onChange={action('change')}
      onBlur={action('blur')}
      name="textArea-0"
      placeholder="TextArea placeholder"
    />
  )
  .add('valid', () =>
    <TextArea
      name="textArea-0"
      placeholder="TextArea placeholder"
      valid
    />
  )
  .add('invalid', () =>
    <TextArea
      name="textArea-0"
      placeholder="TextArea placeholder"
      invalid
    />
  )
  .add('disabled', () =>
    <TextArea
      name="textArea-0"
      placeholder="TextArea placeholder"
      disabled
    />
  )
  .add('controlled', () =>
    <TextArea
      name="textArea-0"
      placeholder="TextArea placeholder"
      value="test"
    />
  );
