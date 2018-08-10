/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import Accordion from './Accordion';
import AccordionItem from './AccordionItem/AccordionItem';

const props = {
  onHeadingClick: ({ isOpen }) => {
    console.log(`Is open: ${isOpen}`);
  }, // eslint-disable-line no-console
};

storiesOf('lists/Accordion', module)
      .add('default', () =>
      <Accordion>
        <AccordionItem title="Section 1 title" {...props}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </AccordionItem>
        <AccordionItem title="Section 2 title" open {...props}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </AccordionItem>
        <AccordionItem
          title='Section 3 title'
          {...props}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </AccordionItem>
      </Accordion>
    );
