import React from 'react';
import { storiesOf } from '@storybook/react';

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
  .add('disabled', () =>
    <Tags
      disabled
      defaultValue={customData}
      accessor={{
        id: 'id',
        value: 'text'
      }}
    />
  )
  .add('read only', () =>
    <Tags
      readOnly
      tags={customData}
      accessor={{
        id: 'id',
        value: 'text'
      }}
    />
  )
  .add('controlled', () =>
    <Tags
      value={customData}
      tags={customTags}
      accessor={{
        id: 'id',
        value: 'text'
      }}
    />
  );
