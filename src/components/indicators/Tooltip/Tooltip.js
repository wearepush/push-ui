/* eslint-disable */
import React from 'react';
// import { bool, func, node, number, oneOf, oneOfType, object, string } from 'prop-types';
import cx from 'classnames';
import TooltipTrigger from 'react-popper-tooltip';
import { withTheme } from '@emotion/react';
import { StyledTooltipContainer, StyledTooltipArrrow, StyledTooltipTrigger } from './Tooltip.style';
import { createComponentTheme } from '../../styles/_helpers/themeHelpers';

const Tooltip = ({
  children,
  className: classNameProp,
  theme: themeProp,
  tooltip,
  hideArrow,
  ...props
}) => {
  const className = cx('Tooltip', classNameProp);
  const theme = createComponentTheme({
    theme: themeProp,
  });
  return (
    <TooltipTrigger
      {...props}
      tooltip={({ arrowRef, tooltipRef, getArrowProps, getTooltipProps, placement }) => (
        <StyledTooltipContainer
          {...getTooltipProps({
            ref: tooltipRef,
            className: 'Tooltip',
          })}
        >
          {!hideArrow && (
            <StyledTooltipArrrow
              {...getArrowProps({
                ref: arrowRef,
                className: 'Tooltip__arrow',
                'data-placement': placement,
              })}
            />
          )}
          {tooltip}
        </StyledTooltipContainer>
      )}
    >
      {({ getTriggerProps, triggerRef }) => (
        <StyledTooltipTrigger
          {...getTriggerProps({
            ref: triggerRef,
            className: 'Tooltip__trigger',
          })}
        >
          {children}
        </StyledTooltipTrigger>
      )}
    </TooltipTrigger>
  );
};

Tooltip.defaultProps = {};

Tooltip.propTypes = {};

export const TooltipComponent = Tooltip;
export default withTheme(Tooltip);
