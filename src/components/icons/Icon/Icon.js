import React from 'react';
import { oneOfType, object, string } from 'prop-types';
import cx from 'classnames';
import { withTheme } from '@emotion/react';
import { StyledIcon } from './Icon.style';
import icons from './svgs/index';
import { createComponentTheme } from '../../styles/_helpers/themeHelpers';

const Icon = ({
  className: classNameProp,
  fill,
  height,
  name,
  preserveAspectRatio,
  theme: themeProp,
  viewBox,
  width,
  ...other
}) => {
  if (!name || !icons[name]) {
    console.error('Missing name file'); // eslint-disable-line
    return null;
  }
  const IconComponent = StyledIcon(icons[name]);
  const className = cx('Icon', classNameProp, {
    [`Icon-${name}`]: !!name,
  });
  const theme = createComponentTheme({
    theme: themeProp,
  });
  return (
    <IconComponent
      className={className}
      fill={fill}
      height={height}
      preserveAspectRatio={preserveAspectRatio}
      theme={theme}
      viewBox={viewBox}
      width={width}
      {...other}
    />
  );
};

Icon.defaultProps = {
  className: '',
  fill: '#000',
  height: undefined,
  name: '',
  preserveAspectRatio: 'xMidYMid meet',
  theme: {},
  viewBox: '0 0 48 48',
  width: undefined,
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
   * @ignore
   */
  theme: object,
  /**
   * ViewBox of the SVG icon.
   */
  viewBox: string,
  /**
   * Width of the SVG icon.
   */
  width: string,
};

export const IconComponent = Icon;
export default withTheme(Icon);
