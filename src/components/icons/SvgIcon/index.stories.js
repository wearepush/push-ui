import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import SvgIcon from './SvgIcon';

storiesOf('icons/SvgIcon', module)
  .addDecorator(withKnobs)
  .add('profile', () => (
    <SvgIcon
      name="profile"
      viewBox="0 0 18 21"
      width={select('width', ['15', '18', '36'], '18')}
      height={select('height', ['18', '21', '42'], '21')}
      fill={select('fill', ['#2D2D3C', '#C13A23'], '#2D2D3C')}
    />
  ));
