import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import Icon from './Icon';

storiesOf('icons/Icon', module)
  .addDecorator(withKnobs)
  .add('icon', () => (
    <Icon
      className="test"
      size={select('size', ['xs', 'sm', 'md', 'lg', 'xl'], 'sm')}
      fill={select('fill', ['black', 'dark-orange'], 'black')}
      name={select('name', [], 'person')}
    />
  ));
