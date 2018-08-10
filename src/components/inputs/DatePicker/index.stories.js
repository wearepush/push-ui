import React from 'react';
import { storiesOf } from '@storybook/react';
import DatePicker from './DatePicker';

storiesOf('inputs/DatePicker', module)
  .add('default', () =>
    <DatePicker
      className='d_picker'
      value={new Date()}
      onChange={(_, str) => console.info(str)} // eslint-disable-line
    />

  )