import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import TextArea from './TextArea';

storiesOf('TextArea', module)
  .add('default', () =>
    <TextArea
      onClick={action('clicked')}
      name="textArea-0"
      placeholder="TextArea placeholder"
    />
  )
  .add('valid', () =>
    <TextArea
      onClick={action('clicked')}
      name="textArea-0"
      placeholder="TextArea placeholder"
      valid
    />
  )
  .add('invalid', () =>
    <TextArea
      onClick={action('clicked')}
      name="textArea-0"
      placeholder="TextArea placeholder"
      invalid
    />
  )
  .add('disabled', () =>
    <TextArea
      onClick={action('clicked')}
      name="textArea-0"
      placeholder="TextArea placeholder"
      disabled
    />
  );
