import React from 'react';

import { storiesOf } from '@storybook/react';

import Button from './Button';

storiesOf('buttons/Button', module)
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
  .add('float', () =>
    <div>
      <Button
        float
        variant="contained"
      >
        Hello Button
      </Button>
      <Button
        float
        variant="contained"
        color="warning"
      >
        Hello Button
      </Button>
      <Button
        float
        variant="contained"
        color="success"
      >
        Hello Button
      </Button>
      <Button
        float
        variant="contained"
        color="alert"
      >
        Hello Button
      </Button>
      <Button
        float
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
        fullWidth
      >
        Hello Button
      </Button>
    </div>
  ).add('link', () =>
    <div>
      <Button
        href="http://google.com/"
        target="_blank"
      >
        Hello Button
      </Button>
    </div>
  );
