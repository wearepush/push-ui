import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Accordion from './Accordion';
import AccordionItem from './AccordionItem';

storiesOf('lists/Accordion', module)
  .add('default', () =>
    <Accordion>
      <AccordionItem title="Section 1 title" onHeadingClick={action('toggle')}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </AccordionItem>
      <AccordionItem title="Section 2 title" open>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </AccordionItem>
      <AccordionItem title="Section 3 title">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </AccordionItem>
    </Accordion>,
    {
      info: {
        propTables: [
          Accordion,
          AccordionItem,
        ]
      }
    }
  );
