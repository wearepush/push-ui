import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import Button from './Button';

storiesOf('buttons/Button', module)
.addDecorator(withInfo)
.addDecorator(withKnobs)
.add('default', () =>
  <Button
    color={select('color', ['primary', 'warning', 'success', 'danger', 'default'], 'success900')}
    disabled={boolean('disabled', false)}
    float={boolean('float', false)}
    fullWidth={boolean('fullWidth', false)}
    size={select('size', ['small', 'medium', 'large'], 'medium')}
    variant={select('variant', ['contained', 'outlined'])}
    height="2.5rem"
    width="2.5rem"
  >
    Hello Button
  </Button>
)
.add('link', () =>
  <Button
    color={select('color', ['primary', 'warning', 'success', 'danger', 'default'], 'primary')}
    href="http://google.com/"
    float={boolean('float', false)}
    fullWidth={boolean('fullWidth', false)}
    size={select('size', ['small', 'medium', 'large'], 'medium')}
    target="_blank"
    variant={select('variant', ['contained', 'outlined'])}
  >
    Hello Button
  </Button>
);
