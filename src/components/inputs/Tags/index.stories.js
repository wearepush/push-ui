import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Tags from './Tags';

const customData = [
  { id: 'USA', text: 'USA' },
  { id: 'Germany', text: 'Germany' },
  { id: 'Austria', text: 'Austria' },
  { id: 'Costa Rica', text: 'Costa Rica' },
  { id: 'Sri Lanka', text: 'Sri Lanka' },
  { id: 'Thailand', text: 'Thailand' }
];

const customTags = [
  { id: 'Sri Lanka', text: 'Sri Lanka' },
  { id: 'Thailand', text: 'Thailand' }
];

const isTrue = true;

storiesOf('inputs/Tags', module)
  .add('default', () =>
    <Tags
      defaultValue={customData}
      accessor={{
        id: 'id',
        value: 'text'
      }}
    />
  )
  .add('read only', () =>
    <Tags
      readOnly={isTrue}
      tags={customData}
      accessor={{
        id: 'id',
        value: 'text'
      }}
    />
  )
  .add('controled', () => 
    <Tags
      value={customData}
      tags={customTags}
      accessor={{
        id: 'id',
        value: 'text'
      }}
    />
  );
