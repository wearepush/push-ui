import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import Tags, { TagsWithOutContext } from './Tags';

const WithOutContext = DragDropContext(HTML5Backend)(TagsWithOutContext);

const customData = [
  { id: 'USA', value: 'USA' },
  { id: 'Germany', value: 'Germany' },
  { id: 'Austria', value: 'Austria' },
  { id: 'Costa Rica', value: 'Costa Rica' },
  { id: 'Sri Lanka', value: 'Sri Lanka' },
  { id: 'Thailand', value: 'Thailand' }
];

const customTags = [
  { id: 'Sri Lanka', value: 'Sri Lanka' },
  { id: 'Thailand', value: 'Thailand' },
  { id: 'USA', value: 'USA' },
  { id: 'Vietnam', value: 'Vietnam' },
  { id: 'Munich', value: 'Munich' },
  { id: 'Amsterdam', value: 'Amsterdam' },
  { id: 'Viena', value: 'Viena' },
  { id: 'Milan', value: 'Milan' },
  { id: 'Palermo', value: 'Palermo' },
  { id: 'Etna', value: 'Etna' },
];

const suggestions = [
  { id: 'Sri Lanka', value: 'Sri Lanka' },
  { id: 'Thailand', value: 'Thailand' },
  { id: 'USA', value: 'USA' },
  { id: 'Vietnam', value: 'Vietnam' },
  { id: 'Munich', value: 'Munich' },
  { id: 'Amsterdam', value: 'Amsterdam' },
  { id: 'Viena', value: 'Viena' },
  { id: 'Milan', value: 'Milan' },
  { id: 'Migan', value: 'Migan' },
  { id: 'Palermo', value: 'Palermo' },
  { id: 'Etna', value: 'Etna' },
];

storiesOf('inputs/Tags', module)
  .addDecorator(withInfo)
  .add('default', () =>
    <Tags
      defaultValue={customData}
      onAdd={action('onAdd')}
      onDelete={action('onDelete')}
      onDrag={action('onDrag')}
    />
  )
  .add('disabled', () =>
    <Tags
      defaultValue={customData}
      disabled
    />
  )
  .add('suggestions', () =>
    <Tags
      suggestions={suggestions}
    />
  )
  .add('float', () =>
    <Tags
      defaultValue={customData}
      float
    />
  )
  .add('controlled', () =>
    <Tags
      value={customData}
    />
  )
  .add('with out contxt', () =>
    <WithOutContext
      defaultValue={customTags}
    />
  );
