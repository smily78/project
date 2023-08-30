import React from "react";

import { Img, Text } from "components";

const DesktopHomepageOneCardservice = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start mt-[25px] w-[90%] md:w-full">
          <Img
            className="h-[75px] w-[75px]"
            src="images/img_mainicons.svg"
            alt="mainicons"
          />
          <Text
            className="mt-6 sm:text-2xl md:text-[26px] text-[28px] text-pink-900 tracking-[-0.56px]"
            size="txtPoppinsSemiBold28"
          >
            {props?.userplatform}
          </Text>
          <Text
            className="leading-[24.00px] mt-[3px] text-base text-gray-700 w-full"
            size="txtSourceSans3Regular16"
          >
            {props?.userdescription}
          </Text>
        </div>
        <div className="flex flex-row gap-2.5 items-center justify-center mb-[5px] mr-[253px] sm:px-5 px-6 py-3 rounded w-auto">
          <Text
            className="text-base text-pink-900 w-auto"
            size="txtSourceSans3Bold16Pink900"
          >
            {props?.learnmoretext}
          </Text>
          <Img
            className="h-4 w-4"
            src="images/img_arrowright_pink_900.svg"
            alt="arrowright"
          />
        </div>
      </div>
    </>
  );
};

DesktopHomepageOneCardservice.defaultProps = {
  userplatform: "Cross-Platform",
  userdescription:
    "Your site is not complete with only landings. Get essential inner pages using our ready demos.",
  learnmoretext: "Learn More",
};

export default DesktopHomepageOneCardservice;
