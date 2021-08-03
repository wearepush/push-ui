import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import Icon from './Icon';

storiesOf('icons/Icon', module)
  .addDecorator(withKnobs)
  .add('icon', () => (
    <Icon
      className="test"
      size={select('size', ['xsmall', 'small', 'medium', 'large', 'xlarge'], 'medium')}
      fill={select('fill', ['black', 'red'], 'black')}
      name={select(
        'name',
        ['checkbox_checked', 'checkbox_unchecked', 'radio_checked', 'radio_unchecked'],
        'checkbox_checked'
      )}
    />
  ));
