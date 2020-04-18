import React from 'react';
import { string } from 'prop-types';
import icons from './svgs/index';

const Icon = ({ fill, height, name, preserveAspectRatio, viewBox, width, ...other }) => {
  if (!name || !icons[name]) {
    console.error('Missing name file'); // eslint-disable-line
    return null;
  }
  const IconComponent = icons[name];
  return (
    <IconComponent
      fill={fill}
      height={height}
      preserveAspectRatio={preserveAspectRatio}
      viewBox={viewBox}
      width={width}
      {...other}
    />
  );
};

Icon.defaultProps = {
  fill: '#000',
  height: undefined,
  name: '',
  preserveAspectRatio: 'xMidYMid meet',
  viewBox: '0 0 48 48',
  width: undefined,
};

Icon.propTypes = {
  /**
   * Fill (color) of the SVG icon.
   */
  fill: string,
  /**
   * Height of the SVG icon.
   */
  height: string,
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
  /**
   * Width of the SVG icon.
   */
  width: string,
};

export default Icon;
