import cx from "classnames";

export const createInputClassName = ({
  componentClassName = "",
  className = "",
  invalid = false,
  valid = false,
}) => {
  return cx(componentClassName, {
    "is-invalid": invalid,
    "is-valid": valid,
  }, className);
};
