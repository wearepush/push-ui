import React from 'react';
import { bool, number, oneOfType, oneOf, object, string, node } from 'prop-types';
import cx from 'classnames';
import { StyledCheckbox, CheckboxContainer, HiddenCheckbox, Icon, Label } from './Checkbox.style';
import { createInputClassName } from '../_helpers/inputHelpers';

const Checkbox = ({
  active,
  checkboxClassName: checkboxClassNameProp,
  checkboxProps,
  className: classNameProp,
  children,
  checked,
  containerProps,
  defaultChecked,
  disabled,
  iconClassName: iconClassNameProp,
  iconProps,
  id,
  inputClassName: inputClassNameProp,
  inputProps,
  invalid,
  labelClassName: labelClassNameProp,
  labelProps,
  name,
  size,
  tabIndex,
  valid,
  ...other
}) => {
  const className = createInputClassName({
    componentClassName: 'Checkbox',
    className: classNameProp,
    invalid,
    valid,
  });
  const inputClassName = cx('Checkbox__input', inputClassNameProp);
  const checkboxClassName = cx('Checkbox__checkbox', checkboxClassNameProp);
  const iconClassName = cx('Checkbox__icon', iconClassNameProp);
  const labelClassName = cx('Checkbox__label', labelClassNameProp);
  return (
    <CheckboxContainer {...containerProps} className={className}>
      <HiddenCheckbox
        {...inputProps}
        className={inputClassName}
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        id={id || name}
        name={name}
        tabIndex={active ? -1 : tabIndex || 0}
        {...other}
        type="checkbox"
      />
      <StyledCheckbox {...checkboxProps} className={checkboxClassName} checked={checked} size={size}>
        <Icon {...iconProps} className={iconClassName} viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
      {children && (
        <Label {...labelProps} className={labelClassName} size={size}>
          {children}
        </Label>
      )}
    </CheckboxContainer>
  );
};

Checkbox.defaultProps = {
  checkboxClassName: '',
  className: '',
  disabled: false,
  iconClassName: '',
  inputClassName: '',
  invalid: false,
  labelClassName: '',
  size: 'medium',
  tabIndex: null,
  valid: false,
};

Checkbox.propTypes = {
  /**
   * If `true`, the component is active.
   */
  active: bool,
  /**
   * @ignore
   */
  checkboxClassName: oneOfType([object, string]),
  /**
   * The value of the component.
   */
  checked: bool,
  /**
   * @ignore
   */
  checkboxProps: object,
  /**
   * @ignore
   */
  containerProps: object,
  /**
   * @ignore
   */
  children: node,
  /**
   * @ignore
   */
  className: oneOfType([object, string]),
  /**
   * If `true`, the switch will be disabled.
   */
  disabled: bool,
  /**
   * @ignore
   */
  defaultChecked: bool,
  /**
   * @ignore
   */
  iconClassName: oneOfType([object, string]),
  /**
   * @ignore
   */
  iconProps: object,
  /**
   * @ignore
   */
  inputClassName: oneOfType([object, string]),
  /**
   * @ignore
   */
  inputProps: object,
  /**
   * If `true`, the component is invalid.
   */
  invalid: bool,
  /**
   * The id of the `input` element.
   */
  id: string,
  /**
   * @ignore
   */
  labelClassName: oneOfType([object, string]),
  /**
   * @ignore
   */
  labelProps: object,
  /**
   * The name of the `input` element.
   */
  name: string.isRequired,
  /**
   * Size.
   */
  size: oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']),
  /**
   * @ignore
   */
  tabIndex: oneOfType([number, string]),
  /**
   * If `true`, the component is valid.
   */
  valid: bool,
};

export default Checkbox;
