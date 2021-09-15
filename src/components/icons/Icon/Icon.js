import React from 'react';
import { oneOfType, oneOf, object, string } from 'prop-types';
import cx from 'classnames';
import { StyledIcon } from './Icon.style';
import icons from './svgs/index';

const Icon = ({ className: classNameProp, name, preserveAspectRatio, viewBox, ...other }) => {
  if (!name || !icons[name]) {
    console.info('Missing name file'); // eslint-disable-line
    return null;
  }
  const IconComponent = StyledIcon(icons[name]);
  const className = cx('Icon', classNameProp, {
    [`Icon-${name}`]: !!name,
  });
  return <IconComponent className={className} preserveAspectRatio={preserveAspectRatio} viewBox={viewBox} {...other} />;
};

Icon.defaultProps = {
  className: '',
  fill: 'black',
  size: 'medium',
  name: '',
  preserveAspectRatio: 'xMidYMid meet',
  viewBox: '0 0 48 48',
};

Icon.propTypes = {
  /**
   * @ignore
   */
  className: oneOfType([object, string]),
  /**
   * Fill (color) of the SVG icon.
   */
  fill: string,
  /**
   * Size of the SVG icon.
   */
  size: oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']),
  /**
   * Name of the SVG icon.
   */
  name: string,
  /**
   * Align of the SVG icon.
   */
  preserveAspectRatio: string,
  /**
   * ViewBox of the SVG icon.
   */
  viewBox: string,
};

export default Icon;
