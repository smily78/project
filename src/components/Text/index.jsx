import React from "react";

const sizeClasses = {
  txtPoppinsBold38: "font-bold font-poppins",
  txtSourceSans3Regular16Gray600: "font-normal font-sourcesans",
  txtSourceSans3Regular18Gray900: "font-normal font-sourcesans",
  txtPoppinsBold56: "font-bold font-poppins",
  txtSourceSans3SemiBold14Gray600: "font-semibold font-sourcesans",
  txtManropeBold12: "font-bold font-manrope",
  txtSourceSans3Bold14: "font-bold font-sourcesans",
  txtPoppinsMedium18: "font-medium font-poppins",
  txtSourceSans3Bold16: "font-bold font-sourcesans",
  txtManropeExtraBold32: "font-extrabold font-manrope",
  txtSourceSans3Bold18: "font-bold font-sourcesans",
  txtSourceSans3Regular16WhiteA700: "font-normal font-sourcesans",
  txtSourceSans3Regular16Bluegray400: "font-normal font-sourcesans",
  txtSourceSans3Regular18: "font-normal font-sourcesans",
  txtSourceSans3Regular16: "font-normal font-sourcesans",
  txtSourceSans3SemiBold14: "font-semibold font-sourcesans",
  txtPoppinsBold46: "font-bold font-poppins",
  txtSourceSans3Regular12: "font-normal font-sourcesans",
  txtPoppinsMedium18Gray600: "font-medium font-poppins",
  txtSourceSans3Regular12Gray700: "font-normal font-sourcesans",
  txtPoppinsBold38Pink900: "font-bold font-poppins",
  txtPoppinsSemiBold20: "font-poppins font-semibold",
  txtManropeMedium14: "font-manrope font-medium",
  txtSourceSans3Bold14Pink900: "font-bold font-sourcesans",
  txtSourceSans3Bold16Pink900: "font-bold font-sourcesans",
  txtShipporiMinchoExtraBold40: "font-extrabold font-shipporimincho",
  txtSourceSans3Regular16Pink900: "font-normal font-sourcesans",
  txtSourceSans3Bold14Gray900: "font-bold font-sourcesans",
  txtPoppinsSemiBold28: "font-poppins font-semibold",
  txtPoppinsMedium18Pink900: "font-medium font-poppins",
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
