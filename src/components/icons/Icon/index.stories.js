import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import Icon from './Icon';

storiesOf('icons/Icon', module)
  .addDecorator(withKnobs)
  .add('person', () => (
    <Icon
      name="person"
      height={select('height', ['1rem', '2rem', '3rem', '4rem'], '4rem')}
      fill={select('fill', ['#2D2D3C', '#C13A23'], '#2D2D3C')}
      width={select('width', ['1rem', '2rem', '3rem', '4rem'], '4rem')}
    />
  ));
