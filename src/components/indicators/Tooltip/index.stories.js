import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Tooltip from './Tooltip';
import Button from '../../buttons/Button/Button';

storiesOf('Tooltips/Tooltip', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Tooltip placement="top" trigger="click" tooltip="Hi there!">
      <Button>Button with tooltip</Button>
    </Tooltip>
  ));
