import React from 'react';
import { string } from 'prop-types';
import icons from './svgs/index';

const SvgIcon = ({ name, width, height, viewBox, fill, ...other }) => {
  if (!name || !icons[name]) {
    console.error('Missing name file'); // eslint-disable-line
    return null;
  }
  const IconComponent = icons[name];
  return <IconComponent width={width} height={height} viewBox={viewBox} fill={fill} {...other} />;
};

SvgIcon.defaultProps = {
  name: '',
  width: '',
  height: '',
  viewBox: '',
  fill: '#000',
};

SvgIcon.propTypes = {
  /**
   * Name of the SVG icon.
   */
  name: string,
  /**
   * Width of the SVG icon.
   */
  width: string,
  /**
   * Height of the SVG icon.
   */
  height: string,
  /**
   * ViewBox of the SVG icon.
   */
  viewBox: string,
  /**
   * Fill (color) of the SVG icon.
   */
  fill: string,
};

export default SvgIcon;
