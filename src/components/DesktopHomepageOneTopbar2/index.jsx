import React from "react";

import { Img, Text } from "components";

const DesktopHomepageOneTopbar2 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row gap-3 h-5 md:h-auto items-end justify-center md:ml-[0] ml-[550px] md:mt-0 mt-[3px] w-auto md:w-full">
          <Img
            className="h-3 w-7"
            src="images/img_airplane.svg"
            alt="airplane"
          />
          <Text
            className="text-center text-pink-400 text-sm w-auto"
            size="txtManropeMedium14"
          >
            {props?.promotiontext}
          </Text>
        </div>
        <Img
          className="h-4 mr-2 w-4"
          src="images/img_arrowright.svg"
          alt="arrowright"
        />
      </div>
    </>
  );
};

DesktopHomepageOneTopbar2.defaultProps = {
  promotiontext:
    "Cyber Monday: Save big on the Creative Cloud All Apps plan for individuals through 2 Dec.",
};

export default DesktopHomepageOneTopbar2;
