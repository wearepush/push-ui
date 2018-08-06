import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Button from './Button';

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('outlined', () =>
    <div>
      <Button
        variant="outlined"
      >
        Hello Button
      </Button>
      <Button
        variant="outlined"
        color="warning"
      >
        Hello Button
      </Button>
      <Button
        variant="outlined"
        color="success"
      >
        Hello Button
      </Button>
      <Button
        variant="outlined"
        color="alert"
      >
        Hello Button
      </Button>
      <Button
        variant="outlined"
        color="default"
      >
        Hello Button
      </Button>
    </div>
  )
  .add('contained', () =>
    <div>
      <Button
        variant="contained"
      >
        Hello Button
      </Button>
      <Button
        variant="contained"
        color="warning"
      >
        Hello Button
      </Button>
      <Button
        variant="contained"
        color="success"
      >
        Hello Button
      </Button>
      <Button
        variant="contained"
        color="alert"
      >
        Hello Button
      </Button>
      <Button
        variant="contained"
        color="default"
      >
        Hello Button
      </Button>
    </div>
  )
  .add('size', () =>
    <div>
      <Button
        size="small"
      >
        Hello Button
      </Button>
      <Button
        size="medium"
      >
        Hello Button
      </Button>
      <Button
        size="large"
      >
        Hello Button
      </Button>
      <Button
        size="full-width"
      >
        Hello Button
      </Button>
    </div>
  );
