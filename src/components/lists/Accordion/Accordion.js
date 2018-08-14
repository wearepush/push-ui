import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import {} from './Accordion.scss';

const Accordion = ({ children, className, ...other }) => {
  const classNames = classnames('Accordion', className);
  return (
    <div
      className={classNames}
      role="tablist"
      aria-multiselectable="true"
      {...other}>
      {children}
    </div>
  );
};

Accordion.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Accordion;
