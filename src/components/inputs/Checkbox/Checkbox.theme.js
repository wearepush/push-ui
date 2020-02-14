import inputTheme from '../TextField/Input.theme';

export default {
  checkbox: {
    backgroundCheckedColor: '#026dd6',
    borderColor: '#c9ced6',
    borderRadius: '3px',
    iconColor: '#fff',
    transition:
      'color 0.25s ease-in-out, border-color 0.25s ease-in-out, background-color 0.25s ease-in-out',
  },
  checkboxSizes: {
    xs: {
      width: '1.4rem',
      height: '1.4rem',
    },
    sm: {
      width: '1.6rem',
      height: '1.6rem',
    },
    md: {
      width: '1.8rem',
      height: '1.8rem',
    },
    lg: {
      width: '2rem',
      height: '2rem',
    },
    xl: {
      width: '2.2rem',
      height: '2.2rem',
    },
  },
  checkboxLabelSizes: {
    xs: {
      fontSize: inputTheme.inputSizes.xs.fontSize,
    },
    sm: {
      fontSize: inputTheme.inputSizes.sm.fontSize,
    },
    md: {
      fontSize: inputTheme.inputSizes.md.fontSize,
    },
    lg: {
      fontSize: inputTheme.inputSizes.lg.fontSize,
    },
    xl: {
      fontSize: inputTheme.inputSizes.xl.fontSize,
    },
  },
};
