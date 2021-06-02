import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import Button from './Button';

storiesOf('buttons/Button', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Button
      disabled={boolean('disabled', false)}
      rounded={select('rounded', ['0', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'circle'], 'medium')}
      shadow={select('shadow', ['0', '1', '2', '3', '4'], '4')}
      size={select('size', ['xsmall', 'small', 'medium', 'large', 'xlarge'], 'medium')}
      variant={select('variant', ['primary', 'warning', 'success', 'danger', 'brand', 'dark', 'light'], 'primary')}
    >
      Preview
    </Button>
  ))
  .add('link', () => (
    <Button href="http://google.com/" target="_blank">
      Open google
    </Button>
  ));
