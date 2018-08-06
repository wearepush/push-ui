import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Dropdown from './Dropdown';

storiesOf('Dropdown', module)
  .add('size', () =>
    <div>
      <Dropdown
        button="My Settings"
        size="small"
      >
        <span>1</span>
      </Dropdown>
      <Dropdown
        button="My Settings"
        size="medium"
      >
        <span>1</span>
      </Dropdown>
      <Dropdown
        button="My Settings"
        size="large"
      >
        <span>1</span>
      </Dropdown>
    </div>
  )
  .add('position', () =>
    <div>
      <Dropdown
        button="My Settings"
        dropPosition="bl"
      >
        <span>1</span>
      </Dropdown>
      <Dropdown
        button="My Settings"
        dropPosition="br"
      >
        <span>1</span>
      </Dropdown>
      <Dropdown
        button="My Settings"
        dropPosition="tl"
      >
        <span>1</span>
      </Dropdown>
      <Dropdown
        button="My Settings"
        dropPosition="tr"
      >
        <span>1</span>
      </Dropdown>
    </div>
  );
