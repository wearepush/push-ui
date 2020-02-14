import React from 'react';
import { object, node } from 'prop-types';
import { Provider } from 'react-redux';

const Root = ({ children, store }) => <Provider store={store}>{children}</Provider>;

Root.propTypes = {
  store: object.isRequired,
  children: node.isRequired,
};

export default Root;
