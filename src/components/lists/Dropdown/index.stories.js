import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Dropdown from './Dropdown';

storiesOf('lists/Dropdown', module)
  .addDecorator(withInfo)
  .add('size', () =>
    <Dropdown
      button="My Settings"
    >
      <span>1</span>
    </Dropdown>
  );
