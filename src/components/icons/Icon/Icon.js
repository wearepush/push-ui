import React from 'react';
import { oneOfType, oneOf, object, string } from 'prop-types';
import cx from 'classnames';
import { withTheme } from '@emotion/react';
import { StyledIcon } from './Icon.style';
import icons from './svgs/index';
import { createComponentTheme } from '../../styles/_helpers/themeHelpers';

const Icon = ({ className: classNameProp, name, preserveAspectRatio, theme: themeProp, viewBox, ...other }) => {
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
      preserveAspectRatio={preserveAspectRatio}
      theme={theme}
      viewBox={viewBox}
      {...other}
    />
  );
};

Icon.defaultProps = {
  className: '',
  fill: 'black',
  size: 'sm',
  name: '',
  preserveAspectRatio: 'xMidYMid meet',
  theme: {},
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
  fill: oneOf(['black', 'dark-orange']),
  /**
   * Size of the SVG icon.
   */
  size: oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
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
};

export const IconComponent = Icon;
export default withTheme(Icon);
