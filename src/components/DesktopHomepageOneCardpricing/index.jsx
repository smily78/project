import React from "react";

import { Button, Img, Line, Text } from "components";

const DesktopHomepageOneCardpricing = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-[15px] items-center justify-start md:ml-[0] ml-[5px] mt-[9px] w-auto">
          <div className="bg-red-50 flex flex-col h-[82px] items-center justify-start p-5 rounded-lg w-[82px]">
            <Img
              className="h-[42px] w-[42px]"
              alt="mainicons"
              src="props?.mainicons"
            />
          </div>
          <div className="flex flex-col items-start justify-start w-auto">
            <Text
              className="sm:text-2xl md:text-[26px] text-[28px] text-pink-900 tracking-[-0.56px] w-auto"
              size="txtPoppinsSemiBold28"
            >
              {props?.trialplan}
            </Text>
            <Text
              className="text-base text-gray-700 w-auto"
              size="txtSourceSans3Regular16"
            >
              {props?.protectfortesting}
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start ml-1 md:ml-[0] mt-[19px] w-[269px]">
          <div className="flex flex-col items-start justify-start w-[55%]">
            <div className="flex flex-row gap-[3px] items-start justify-start w-auto">
              <Text
                className="text-lg text-pink-900 w-auto"
                size="txtSourceSans3Bold18"
              >
                {props?.free}
              </Text>
              <Text
                className="text-base text-gray-700 w-auto"
                size="txtSourceSans3Regular16"
              >
                {props?.duration}
              </Text>
            </div>
            <Text
              className="mt-[3px] text-gray-700 text-xs"
              size="txtSourceSans3Regular12Gray700"
            >
              {props?.nocreditcardrequired}
            </Text>
          </div>
        </div>
        <Line className="bg-gray-300_01 h-px md:ml-[0] ml-[5px] mt-[35px] w-[99%]" />
        <div className="flex flex-col gap-[18px] items-start justify-start md:ml-[0] ml-[5px] mt-[30px] w-auto">
          <div className="flex flex-row gap-3 items-center justify-start w-auto">
            <Img
              className="h-3 w-4"
              src="images/img_checkmark_pink_900.svg"
              alt="checkmark_Two"
            />
            <Text
              className="text-gray-700 text-sm w-auto"
              size="txtSourceSans3SemiBold14"
            >
              {props?.p15creditspermontwo}
            </Text>
          </div>
          <div className="flex flex-row gap-3 items-center justify-start w-auto">
            <Img
              className="h-3 w-4"
              src="images/img_checkmark_pink_900.svg"
              alt="checkmark_Two"
            />
            <Text
              className="text-gray-700 text-sm w-auto"
              size="txtSourceSans3SemiBold14"
            >
              {props?.p15creditspermontwo}
            </Text>
          </div>
          <div className="flex flex-row gap-3 items-center justify-start w-auto">
            <Img
              className="h-3 w-4"
              src="images/img_checkmark_pink_900.svg"
              alt="checkmark_Two"
            />
            <Text
              className="text-gray-700 text-sm w-auto"
              size="txtSourceSans3SemiBold14"
            >
              {props?.p15creditspermontwo}
            </Text>
          </div>
          <div className="flex flex-row gap-3 items-center justify-start w-auto">
            {!!props?.arrowrightFour ? (
              <Img
                className="h-3.5 w-3.5"
                alt="arrowright_Four"
                src="props?.arrowrightFour"
              />
            ) : null}
            {!!props?.p15creditspermonseven ? (
              <Text
                className="text-gray-700 text-sm w-auto"
                size="txtSourceSans3SemiBold14"
              >
                {props?.p15creditspermonseven}
              </Text>
            ) : null}
          </div>
          <div className="flex flex-row gap-3 items-center justify-start w-auto">
            {!!props?.arrowrightFour ? (
              <Img
                className="h-3.5 w-3.5"
                alt="arrowright_Four"
                src="props?.arrowrightFour"
              />
            ) : null}
            {!!props?.p15creditspermonseven ? (
              <Text
                className="text-gray-700 text-sm w-auto"
                size="txtSourceSans3SemiBold14"
              >
                {props?.p15creditspermonseven}
              </Text>
            ) : null}
          </div>
          <div className="flex flex-row gap-3 items-center justify-start w-auto">
            {!!props?.arrowrightFour ? (
              <Img
                className="h-3.5 w-3.5"
                alt="arrowright_Four"
                src="props?.arrowrightFour"
              />
            ) : null}
            {!!props?.p15creditspermonseven ? (
              <Text
                className="text-gray-700 text-sm w-auto"
                size="txtSourceSans3SemiBold14"
              >
                {props?.p15creditspermonseven}
              </Text>
            ) : null}
          </div>
          <div className="flex flex-row gap-3 items-center justify-start w-auto">
            {!!props?.arrowrightFour ? (
              <Img
                className="h-3.5 w-3.5"
                alt="arrowright_Four"
                src="props?.arrowrightFour"
              />
            ) : null}
            {!!props?.p15creditspermonseven ? (
              <Text
                className="text-gray-700 text-sm w-auto"
                size="txtSourceSans3SemiBold14"
              >
                {props?.p15creditspermonseven}
              </Text>
            ) : null}
          </div>
          <div className="flex flex-row gap-3 items-center justify-start w-auto">
            {!!props?.arrowrightFour ? (
              <Img
                className="h-3.5 w-3.5"
                alt="arrowright_Four"
                src="props?.arrowrightFour"
              />
            ) : null}
            {!!props?.p15creditspermonseven ? (
              <Text
                className="text-gray-700 text-sm w-auto"
                size="txtSourceSans3SemiBold14"
              >
                {props?.p15creditspermonseven}
              </Text>
            ) : null}
          </div>
        </div>
        <Button
          className="bg-pink-900 cursor-pointer flex items-center justify-center mb-[7px] ml-1 md:ml-[0] mt-4 px-[35px] py-[13px] rounded w-[264px]"
          rightIcon={
            <Img
              className="h-4 ml-2.5 my-[3px]"
              src="images/img_arrowright_white_a700.svg"
              alt="arrow_right"
            />
          }
        >
          <div className="font-bold font-sourcesans sm:px-5 text-base text-left text-white-A700">
            {props?.tryforfree}
          </div>
        </Button>
      </div>
    </>
  );
};

DesktopHomepageOneCardpricing.defaultProps = {
  mainicons: "images/img_mainicons_pink_900_42x42.svg",
  trialplan: "Trial Plan",
  protectfortesting: "Protect for testing",
  free: "FREE",
  duration: "- 30 days trial",
  nocreditcardrequired: "No Credit card required",
  p15creditspermon: "Contextual, Demographic",
  p15creditspermonone: "Contextual, Demographic",
  p15creditspermontwo: "Contextual, Demographic",
};

export default DesktopHomepageOneCardpricing;
