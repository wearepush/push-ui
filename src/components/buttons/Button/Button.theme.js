export default {
  button: {
    transition:
      "color 0.4s ease-in-out, background-color 0.4s ease-in-out, box-shadow 0.4s ease-in-out, border-color 0.4s ease-in-out"
  },
  buttonVariants: {
    primary: {
      color: "white",
      bg: "primary700",
      borderColor: "primary700",
      "&:hover": {
        bg: "primary600",
        borderColor: "primary600"
      },
      "&:disabled": {
        bg: "disabled",
        borderColor: "disabled"
      }
    },
    warning: {
      color: "white",
      bg: "warning700",
      borderColor: "warning700",
      "&:hover": {
        bg: "warning600",
        borderColor: "warning600"
      },
      "&:disabled": {
        bg: "disabled",
        borderColor: "disabled"
      }
    },
    success: {
      color: "white",
      bg: "success700",
      borderColor: "success700",
      "&:hover": {
        bg: "success600",
        borderColor: "success600"
      },
      "&:disabled": {
        bg: "disabled",
        borderColor: "disabled"
      }
    },
    danger: {
      color: "white",
      bg: "danger700",
      borderColor: "danger700",
      "&:hover": {
        bg: "danger600",
        borderColor: "danger600"
      },
      "&:disabled": {
        bg: "disabled",
        borderColor: "disabled"
      }
    },
    brand: {
      color: "white",
      bg: "brand700",
      borderColor: "brand700",
      "&:hover": {
        bg: "brand600",
        borderColor: "brand600"
      },
      "&:disabled": {
        bg: "disabled",
        borderColor: "disabled"
      }
    },
    dark: {
      color: "white",
      bg: "black700",
      borderColor: "black700",
      "&:hover": {
        bg: "black600",
        borderColor: "black600"
      },
      "&:disabled": {
        bg: "disabled",
        borderColor: "disabled"
      }
    },
    light: {
      color: "black",
      bg: "white",
      borderColor: "gray400",
      "&:hover": {
        bg: "white",
        borderColor: "gray500"
      },
      "&:disabled": {
        bg: "disabled",
        borderColor: "disabled"
      }
    }
  },
  buttonSizes: {
    xs: {
      fontSize: "1rem",
      padding: "0.5rem 1rem"
    },
    sm: {
      fontSize: "1.2rem",
      padding: "0.7rem 1.2rem"
    },
    md: {
      fontSize: "1.4rem",
      padding: "0.9rem 1.2rem"
    },
    lg: {
      fontSize: "1.6rem",
      padding: "1.1rem 1.5rem"
    },
    xl: {
      fontSize: "1.8rem",
      padding: "1.3rem 1.7rem"
    }
  }
};
