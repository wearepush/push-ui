import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import Dropdown from './Dropdown';

storiesOf('lists/Dropdown', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .add('default', () =>
    <Dropdown
      button="My Settings"
      dropPosition={select('dropPosition', ['bl', 'br', 'tl', 'tr'], 'bl')}
      size={select('size', ['small', 'medium', 'large'], 'medium')}
    >
      <span>1</span>
    </Dropdown>
  ).add('trigger', () =>
    <Dropdown
      button="My Settings"
      isSelfClosed
      trigger="hover"
    >
      <span>1</span>
    </Dropdown>
  )
  .add('controlled', () =>
    <Dropdown
      button="My Settings"
      isOpen
    >
      <span>1</span>
    </Dropdown>
  );
