import React from "react";

import { Img, Input, Text } from "components";

const DesktopHomepageOneRowa1645d122624009 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="md:h-[298px] h-[315px] mb-2.5 md:mt-0 mt-14 relative w-[43%] md:w-full">
          <div className="absolute bg-gray-100 flex flex-col items-center justify-start right-[0] rounded-[144px] top-[0] w-[95%]">
            <Img
              className="h-72 md:h-auto object-cover rounded-[144px] w-full"
              src="images/img_a1645d122624009.png"
              alt="a1645d122624009"
            />
          </div>
          <div className="absolute bg-pink-900 border-[7px] border-solid border-white-A700 bottom-[0] flex flex-col h-[113px] items-center justify-end left-[0] p-6 sm:px-5 rounded-[56px] w-[113px]">
            <Img
              className="h-[62px]"
              src="images/img_favicon_pink_400.svg"
              alt="favicon_Four"
            />
          </div>
        </div>
        <div className="flex flex-col gap-[18px] items-start justify-start ml-10 md:ml-[0] md:mt-0 mt-[65px] w-auto sm:w-full">
          <div className="flex flex-col gap-[18px] items-start justify-start w-auto sm:w-full">
            <div className="flex flex-col gap-1 items-start justify-start w-auto sm:w-full">
              <Text
                className="text-lg text-pink-900 w-auto"
                size="txtSourceSans3Bold18"
              >
                {props?.newsletter}
              </Text>
              <Text
                className="sm:text-4xl md:text-[42px] text-[46px] text-pink-900 w-auto"
                size="txtPoppinsBold46"
              >
                {props?.subcribeournewsOne}
              </Text>
            </div>
            {props?.byclickingthe}
          </div>
          <Input
            name="input"
            placeholder="Enter you mail .."
            className="font-sourcesans p-0 placeholder:text-gray-500 text-base text-gray-500 text-left w-full"
            wrapClassName="bg-white-A700 flex px-3 py-[11px] rounded-lg w-full"
            suffix={
              <Img
                className="ml-3"
                src="images/img_arrowright_pink_900_55x56.svg"
                alt="arrow_right"
              />
            }
          ></Input>
        </div>
        <Img
          className="h-32 md:ml-[0] ml-[46px]"
          src="images/img_favicon_white_a700_128x143.svg"
          alt="favicon_Five"
        />
      </div>
    </>
  );
};

DesktopHomepageOneRowa1645d122624009.defaultProps = {
  newsletter: "Newsletter",
  subcribeournewsOne: "Subcribe our newsletter",
  byclickingthe: (
    <Text
      className="text-base text-gray-700 w-[462px]"
      size="txtSourceSans3Regular16"
    >
      <span className="text-gray-700 font-sourcesans text-left font-normal">
        By clicking the button, you are agreeing with our{" "}
      </span>
      <a
        href="javascript:"
        className="text-pink-900 font-manrope text-left font-medium underline"
      >
        Term & Conditions
      </a>
    </Text>
  ),
};

export default DesktopHomepageOneRowa1645d122624009;
