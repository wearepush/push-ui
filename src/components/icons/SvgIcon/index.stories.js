import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import SvgIcon from './SvgIcon';

storiesOf('icons/SvgIcon', module)
  .addDecorator(withKnobs)
  // .add('BAELogo', () => (
  //   <SvgIcon
  //     name="BAELogo"
  //     viewBox="0 0 34 34"
  //     width={select('width', ['12', '21', '22', '34', '42'], '34')}
  //     height={select('height', ['10', '20', '21', '34', '40'], '34')}
  //     fill={select('fill', ['#2D2D3C', '#EEEEEF'], '#2D2D3C')}
  //   />
  // ))
  // .add('messaging', () => (
  //   <SvgIcon
  //     name="messaging"
  //     viewBox="0 0 20 20"
  //     width={select('width', ['14', '18', '20'], '20')}
  //     height={select('height', ['14', '18', '20'], '20')}
  //     fill={select('fill', ['#2D2D3C', '#292D3B', '#7F7F88', '#FA6428'], '#2D2D3C')}
  //   />
  // ))
  .add('profile', () => (
    <SvgIcon
      name="profile"
      viewBox="0 0 18 21"
      width={select('width', ['15', '18', '36'], '18')}
      height={select('height', ['18', '21', '42'], '21')}
      fill={select('fill', ['#2D2D3C', '#C13A23'], '#2D2D3C')}
    />
  ));
