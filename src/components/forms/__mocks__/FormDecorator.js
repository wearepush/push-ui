import React from 'react';
import Form from './Form';
import { FormButton } from '../../../index';

const withForm = ({ form = {} }) => {
  const Decorator = (storyFn) => (
    <Form {...form}>
      {storyFn()}
      <FormButton type="submit" form={form.name}>
        Submit
      </FormButton>
    </Form>
  );
  return Decorator;
};

export default withForm;
