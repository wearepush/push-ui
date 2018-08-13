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
  { id: 'Thailand', text: 'Thailand' },
  { id: 'USA', text: 'USA' },
  { id: 'Vietnam', text: 'Vietnam' },
  { id: 'Munich', text: 'Munich' },
  { id: 'Amsterdam', text: 'Amsterdam' },
  { id: 'Viena', text: 'Viena' },
  { id: 'Milan', text: 'Milan' },
  { id: 'Palermo', text: 'Palermo' },
  { id: 'Etna', text: 'Etna' },
];

const suggestions = [
  { id: 'Sri Lanka', text: 'Sri Lanka' },
  { id: 'Thailand', text: 'Thailand' },
  { id: 'USA', text: 'USA' },
  { id: 'Vietnam', text: 'Vietnam' },
  { id: 'Munich', text: 'Munich' },
  { id: 'Amsterdam', text: 'Amsterdam' },
  { id: 'Viena', text: 'Viena' },
  { id: 'Milan', text: 'Milan' },
  { id: 'Migan', text: 'Migan' },
  { id: 'Palermo', text: 'Palermo' },
  { id: 'Etna', text: 'Etna' },
];

storiesOf('inputs/Tags', module)
  .add('default', () =>
    <Tags
      onAdd={action('onAdd')}
      onDelete={action('onDelete')}
      onDrag={action('onDrag')}
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
  .add('suggestions', () =>
    <Tags
      suggestions={suggestions}
      accessor={{
        id: 'id',
        value: 'text'
      }}
    />
  )
  .add('float', () =>
    <Tags
      defaultValue={customData}
      float
      accessor={{
        id: 'id',
        value: 'text'
      }}
    />
  )
  .add('controlled', () =>
    <Tags
      defaultValue={customTags}
      value={customData}
      accessor={{
        id: 'id',
        value: 'text'
      }}
    />
  );
