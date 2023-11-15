import React from "react";

const sizeClasses = {
  txtInterRegular16Gray600: "font-inter font-normal",
  txtHelveticaNeueBold16: "font-bold font-helveticaneue",
  txtInterRegular20: "font-inter font-normal",
  txtInterSemiBold24Black900: "font-inter font-semibold",
  txtInterBold36RedA400: "font-bold font-inter",
  txtInterMedium24: "font-inter font-medium",
  txtInterSemiBold24: "font-inter font-semibold",
  txtInterBold66: "font-bold font-inter",
  txtInterBold24: "font-bold font-inter",
  txtInterBold20: "font-bold font-inter",
  txtInterRegular24: "font-inter font-normal",
  txtInterSemiBold20Black900: "font-inter font-semibold",
  txtInterRegular8: "font-inter font-normal",
  txtInterSemiBold36: "font-inter font-semibold",
  txtInterSemiBold44Black900: "font-inter font-semibold",
  txtInterMedium16: "font-inter font-medium",
  txtInterBold56: "font-bold font-inter",
  txtInterRegular24WhiteA700: "font-inter font-normal",
  txtInterBlack44: "font-black font-inter",
  txtInterSemiBold44: "font-inter font-semibold",
  txtInterRegular24RedA400: "font-inter font-normal",
  txtInterBold140Bluegray100: "font-bold font-inter",
  txtInterRegular12: "font-inter font-normal",
  txtInterRegular24Black900: "font-inter font-normal",
  txtHelveticaNeue16: "font-helveticaneue font-normal",
  txtInterRegular16: "font-inter font-normal",
  txtInterBold100: "font-bold font-inter",
  txtHelveticaNeue16Gray600: "font-helveticaneue font-normal",
  txtInterBold24RedA400: "font-bold font-inter",
  txtInterSemiBold24WhiteA700: "font-inter font-semibold",
  txtFSMagistralMedium44: "font-fsmagistral font-medium",
  txtInterRegular20WhiteA700: "font-inter font-normal",
  txtInterBold44RedA400: "font-bold font-inter",
  txtIrishGroverRegular140: "font-irishgrover font-normal",
  txtInterBold44: "font-bold font-inter",
  txtInterBold88: "font-bold font-inter",
  txtInterBold24Black900: "font-bold font-inter",
  txtInterBold20Gray600: "font-bold font-inter",
  txtInterRegular16WhiteA700: "font-inter font-normal",
  txtInterBold36: "font-bold font-inter",
  txtInterBold32: "font-bold font-inter",
  txtInterMedium36: "font-inter font-medium",
  txtInterBold56Black900: "font-bold font-inter",
  txtInterBold44WhiteA700: "font-bold font-inter",
  txtInterSemiBold20: "font-inter font-semibold",
  txtInterRegular36: "font-inter font-normal",
  txtInterBold140: "font-bold font-inter",
  txtInterBold56WhiteA700: "font-bold font-inter",
  txtInterRegular20Gray600: "font-inter font-normal",
  txtHelvetica13: "font-helvetica font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
