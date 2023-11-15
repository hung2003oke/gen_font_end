import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[34px]", circle: "rounded-[50%]" };
const variants = {
  fill: {
    red_A400_14: "bg-red-A400_14",
    green_500_14: "bg-green-500_14",
    indigo_A200_14: "bg-indigo-A200_14",
    white_A700: "bg-white-A700 text-red-A400",
    red_A400_3d: "bg-red-A400_3d",
    red_A400: "bg-red-A400 text-white-A700",
  },
};
const sizes = { xs: "p-3.5", sm: "p-[17px]", md: "p-[21px] sm:px-5" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round", "circle"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf([
    "red_A400_14",
    "green_500_14",
    "indigo_A200_14",
    "white_A700",
    "red_A400_3d",
    "red_A400",
  ]),
};

export { Button };
