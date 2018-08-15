import React from 'react';
import { reduxForm } from 'redux-form';

import Form from './Form';
import Root from './Root';
import { FormButton } from '../../../index';
import configureStore from './store';

const withForm = ({ form = {}, state = {} }) => {
  const store = configureStore(state);
  const MountForm = reduxForm(form)(Form);
  const Decorator = (storyFn) => (
    <Root
      store={store}
    >
      <MountForm>
        { storyFn() }
        <FormButton
          float
          form={form.form}
        >
          {'Submit'}
        </FormButton>
      </MountForm>
    </Root>
  );
  return Decorator;
};

export default withForm;
