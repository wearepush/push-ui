import React from 'react';
import { object } from 'prop-types';
import { Provider } from 'react-redux';

const Root = ({
  children,
  store
}) => (
  <Provider store={store}>
    {children}
  </Provider>
);

Root.propTypes = {
  store: object.isRequired,
  children: object.isRequired
};

export default Root;
