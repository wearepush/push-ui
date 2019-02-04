import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Test from './Test';

storiesOf('buttons/Test', module)
.addDecorator(withInfo)
.add('default', () =>
  <Test />
);
