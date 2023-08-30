import React from "react";

import {
  Button,
  CheckBox,
  Img,
  Input,
  Line,
  List,
  PagerIndicator,
  SelectBox,
  Slider,
  Text,
} from "components";
import DesktopHomepageOneAppgoogleplay from "components/DesktopHomepageOneAppgoogleplay";
import DesktopHomepageOneCardpricing from "components/DesktopHomepageOneCardpricing";
import DesktopHomepageOneCardservice from "components/DesktopHomepageOneCardservice";
import DesktopHomepageOneColumnTwelve from "components/DesktopHomepageOneColumnTwelve";
import DesktopHomepageOneColumnviewallOne from "components/DesktopHomepageOneColumnviewallOne";
import DesktopHomepageOneFooterlinks from "components/DesktopHomepageOneFooterlinks";
import DesktopHomepageOneHeader2 from "components/DesktopHomepageOneHeader2";
import DesktopHomepageOneRowa1645d122624009 from "components/DesktopHomepageOneRowa1645d122624009";
import DesktopHomepageOneServicecard from "components/DesktopHomepageOneServicecard";
import DesktopHomepageOneSubmenu from "components/DesktopHomepageOneSubmenu";
import DesktopHomepageOneTopbar2 from "components/DesktopHomepageOneTopbar2";

const menuitemOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const menuitemOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const menuitemTwoOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const menuitemThreeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const menuitemFourOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const menuitemFiveOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const languageOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const questionOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const faqsquestionOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const faqsquestionOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const faqsquestionTwoOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const faqsquestionThreeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const faqsquestionFourOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const faqsquestionFiveOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const DesktopHomepageOnePage = () => {
  const desktopHomepageOneCardpricingPropList = [
    {
      p15creditspermonthree: "Facebook Advertising",
      p15creditspermonfour: "Facebook Advertising",
      p15creditspermonfive: "Facebook Advertising",
      p15creditspermonsix: "Facebook Advertising",
      p15creditspermonseven: "Facebook Advertising",
      arrowrightOne: "images/img_arrowright_gray_800.svg",
      arrowrightThree: "images/img_arrowright_gray_800.svg",
      arrowright: "images/img_arrowright_gray_800.svg",
      arrowrightFour: "images/img_arrowright_gray_800.svg",
      arrowrightTwo: "images/img_arrowright_gray_800.svg",
    },
    {
      trialplan: "Standard",
      free: "$29",
      nocreditcardrequired: "Billed annually",
      p15creditspermonthree: "Snapchat Advertising",
      p15creditspermonfour: "Snapchat Advertising",
      p15creditspermonfive: "Snapchat Advertising",
      p15creditspermonsix: "Snapchat Advertising",
      p15creditspermonseven: "Snapchat Advertising",
      protectfortesting: "Advanced project",
      arrowright: "images/img_arrowright_gray_800.svg",
      arrowrightTwo: "images/img_arrowright_gray_800.svg",
      arrowrightFour: "images/img_arrowright_gray_800.svg",
      duration: "- user / month",
      arrowrightThree: "images/img_arrowright_gray_800.svg",
      arrowrightOne: "images/img_arrowright_gray_800.svg",
      mainicons: "images/img_mainicons.svg",
    },
    {
      trialplan: "Business",
      duration: "- user / month",
      arrowright: "images/img_arrowright_gray_800.svg",
      arrowrightOne: "images/img_arrowright_gray_800.svg",
      arrowrightTwo: "images/img_arrowright_gray_800.svg",
      arrowrightThree: "images/img_arrowright_gray_800.svg",
      arrowrightFour: "images/img_arrowright_gray_800.svg",
      mainicons: "images/img_calculator.svg",
      nocreditcardrequired: "Billed annually",
      p15creditspermonfour: "TikTok Advertising",
      p15creditspermonsix: "TikTok Advertising",
      free: "$99",
      p15creditspermonfive: "TikTok Advertising",
      p15creditspermonthree: "TikTok Advertising",
      p15creditspermonseven: "TikTok Advertising",
    },
    {
      trialplan: "Enterprise",
      duration: "- user",
      mainicons: "images/img_mainicons.svg",
      nocreditcardrequired: "One-time pay",
      free: "$299",
    },
  ];
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-manrope items-center justify-start mx-auto w-full">
        <DesktopHomepageOneTopbar2 className="bg-pink-900 flex md:flex-col flex-row md:gap-10 items-center justify-between p-[9px] w-full" />
        <div className="font-shipporimincho md:h-[1660px] sm:h-[794px] h-[796px] md:px-5 relative w-full">
          <div className="flex flex-col h-full items-center justify-start m-auto w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <DesktopHomepageOneHeader2 className="bg-white-A700 border-b border-blue_gray-100 border-solid flex flex-col items-center justify-start p-3.5 w-full" />
              <div className="bg-white-A700 flex md:flex-col flex-row font-sourcesans gap-[21px] items-center justify-start p-[71px] md:px-10 sm:px-5 w-full">
                <div className="flex md:flex-1 flex-col gap-10 items-start justify-start md:ml-[0] ml-[185px] w-auto md:w-full">
                  <div className="flex flex-col gap-[30px] items-start justify-start w-auto md:w-full">
                    <div className="flex flex-col font-poppins gap-1.5 justify-start pb-[75px] w-full">
                      <Text
                        className="leading-[60.00px] md:text-5xl sm:text-[42px] text-[56px] text-pink-900 w-full"
                        size="txtPoppinsBold56"
                      >
                        The data layer between your business and its potential.
                      </Text>
                      <div className="bg-pink-400 h-[15px] md:ml-[0] ml-[154px] mr-[401px] w-[34%]"></div>
                    </div>
                    <Text
                      className="leading-[24.00px] max-w-[601px] md:max-w-full text-base text-gray-700"
                      size="txtSourceSans3Regular16"
                    >
                      Optimize write performance with a document data model that
                      maps to your application’s access patterns. Meet a wide
                      range of query requirements via a single query API that
                      supports everything from simple lookups to complex
                      processing pipelines for data analytics and
                      transformations.
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-start w-auto">
                    <Button className="bg-pink-900 cursor-pointer font-bold min-w-[151px] py-[13px] rounded text-base text-center text-pink-400">
                      Download App
                    </Button>
                    <div className="flex flex-row gap-2.5 items-center justify-center sm:px-5 px-6 py-3 rounded w-auto">
                      <a
                        href="javascript:"
                        className="text-base text-gray-600 w-auto"
                      >
                        <Text size="txtSourceSans3Bold16">Learn More</Text>
                      </a>
                      <Img
                        className="h-4 w-4"
                        src="images/img_arrowright_gray_600.svg"
                        alt="arrowright_One"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-[18px] w-[31%] md:w-full">
                  <div className="md:h-[348px] h-[539px] relative w-full">
                    <div className="md:h-[348px] h-[539px] m-auto w-full">
                      <div className="absolute md:h-[178px] h-[508px] inset-x-[0] mx-auto top-[1%] w-full">
                        <div className="absolute md:h-[178px] h-[508px] inset-[0] justify-center m-auto w-[99%] sm:w-full">
                          <div
                            className="absolute bg-cover bg-no-repeat md:h-[143px] h-[464px] inset-x-[0] mx-auto p-2.5 top-[0] w-[99%] sm:w-full"
                            style={{
                              backgroundImage: "url('images/img_group2.svg')",
                            }}
                          >
                            <Img
                              className="absolute h-[143px] inset-[0] justify-center m-auto w-[143px]"
                              src="images/img_world.svg"
                              alt="world"
                            />
                            <Img
                              className="absolute bottom-[8%] h-[130px] right-[19%]"
                              src="images/img_server.svg"
                              alt="server"
                            />
                            <div className="absolute flex flex-col items-center justify-start right-[2%] top-[34%] w-[35%]">
                              <div className="flex flex-row items-start justify-between w-full">
                                <div className="bg-orange-A100 h-px mb-9 mt-[85px] w-0.5"></div>
                                <Img
                                  className="h-px mt-[85px]"
                                  src="images/img_vector_orange_a100_1x39.svg"
                                  alt="vector_One"
                                />
                                <div className="flex flex-col items-start justify-start mt-[50px]">
                                  <Img
                                    className="h-0.5 ml-0.5 md:ml-[0] w-0.5"
                                    src="images/img_vector_orange_a100_2x2.svg"
                                    alt="vector_Two"
                                  />
                                  <Line className="bg-orange-A100 h-5 ml-0.5 md:ml-[0] mt-0.5 w-px" />
                                  <Img
                                    className="h-0.5 mt-[5px] w-0.5"
                                    src="images/img_vector_orange_a100_2x2.svg"
                                    alt="vector_Four"
                                  />
                                </div>
                                <div className="h-[123px] md:h-[58px] sm:h-[99px] relative w-[68%]">
                                  <div className="absolute flex flex-col items-center justify-start left-[0] top-[41%] w-1/4">
                                    <div className="flex flex-row items-center justify-evenly w-full">
                                      <Img
                                        className="h-px"
                                        src="images/img_vector_orange_a100_1x25.svg"
                                        alt="vector_Five"
                                      />
                                      <div className="bg-orange-A100 h-px w-0.5"></div>
                                    </div>
                                  </div>
                                  <Img
                                    className="absolute h-1 left-[22%] top-[39%] w-1"
                                    src="images/img_vector_orange_a100_4x4.svg"
                                    alt="vector_Seven"
                                  />
                                  <div
                                    className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-y-[0] items-center justify-start my-auto p-1 right-[0] w-[81%]"
                                    style={{
                                      backgroundImage:
                                        "url('images/img_group3.svg')",
                                    }}
                                  >
                                    <div
                                      className="bg-cover bg-no-repeat h-[107px] md:h-[50px] sm:h-[91px] my-0.5 p-0.5 relative w-[98%]"
                                      style={{
                                        backgroundImage:
                                          "url('images/img_group4.svg')",
                                      }}
                                    >
                                      <div className="h-[101px] md:h-[31px] m-auto w-[91%]">
                                        <div className="h-[101px] md:h-[31px] m-auto w-full">
                                          <div className="h-[101px] md:h-[27px] m-auto w-full">
                                            <div className="h-[101px] md:h-[21px] m-auto w-full">
                                              <div className="flex flex-col m-auto w-full">
                                                <div className="flex flex-col mb-auto mt-[-NaNpx] mx-auto w-full z-[1]">
                                                  <div className="flex flex-col items-center justify-start m-auto w-full">
                                                    <div className="h-[17px] relative w-[70%]">
                                                      <div className="absolute flex flex-col gap-[13px] h-full inset-[0] justify-center m-auto w-full">
                                                        <div className="flex flex-row items-start justify-start mr-12 w-[13%] md:w-full">
                                                          <Img
                                                            className="h-px mb-0.5 w-px"
                                                            src="images/img_vector_blue_gray_100.svg"
                                                            alt="vector_Eight"
                                                          />
                                                          <Img
                                                            className="h-px w-px"
                                                            src="images/img_vector_blue_gray_100.svg"
                                                            alt="vector_Nine"
                                                          />
                                                          <Img
                                                            className="h-px w-px"
                                                            src="images/img_vector_blue_gray_100.svg"
                                                            alt="vector_Ten"
                                                          />
                                                          <Img
                                                            className="h-px w-px"
                                                            src="images/img_vector_blue_gray_100_1x1.svg"
                                                            alt="vector_Eleven"
                                                          />
                                                          <Img
                                                            className="h-px w-px"
                                                            src="images/img_vector_blue_gray_100_1x1.svg"
                                                            alt="vector_Twelve"
                                                          />
                                                          <Img
                                                            className="h-px w-px"
                                                            src="images/img_u5zjqx.svg"
                                                            alt="u5zjqx"
                                                          />
                                                        </div>
                                                        <div
                                                          className="bg-cover bg-no-repeat flex flex-row h-0.5 items-center justify-end md:ml-[0] ml-[53px] w-[3px] md:w-full"
                                                          style={{
                                                            backgroundImage:
                                                              "url('images/img_group10.svg')",
                                                          }}
                                                        >
                                                          <Img
                                                            className="h-px w-px"
                                                            src="images/img_vector_1x1.svg"
                                                            alt="vector_Thirteen"
                                                          />
                                                        </div>
                                                      </div>
                                                      <Img
                                                        className="absolute bottom-[0] h-px right-[0] w-px"
                                                        src="images/img_vector_1x1.svg"
                                                        alt="vector_Fourteen"
                                                      />
                                                    </div>
                                                    <Img
                                                      className="h-0.5 mt-[66px] w-0.5"
                                                      src="images/img_vector_gray_200.svg"
                                                      alt="vector_Fifteen"
                                                    />
                                                    <Img
                                                      className="h-px mt-3 w-0.5"
                                                      src="images/img_vector_gray_200_1x2.svg"
                                                      alt="vector_Sixteen"
                                                    />
                                                  </div>
                                                  <Img
                                                    className="h-px ml-auto mr-6 mt-[-0.16px] w-0.5 z-[1]"
                                                    src="images/img_vector_gray_200_1x2.svg"
                                                    alt="vector_Seventeen"
                                                  />
                                                </div>
                                                <Img
                                                  className="h-px ml-auto mr-6 mt-[-0.17px] w-0.5 z-[1]"
                                                  src="images/img_vector_gray_200_1x2.svg"
                                                  alt="vector_Eighteen"
                                                />
                                                <Img
                                                  className="h-px mb-2 ml-[27px] mt-[-NaNpx] w-px z-[1]"
                                                  src="images/img_vector_gray_200_1x1.svg"
                                                  alt="vector_Nineteen"
                                                />
                                                <Img
                                                  className="h-0.5 mb-[7px] ml-[26px] mt-[-NaNpx] w-0.5 z-[1]"
                                                  src="images/img_vector_gray_200_2x2.svg"
                                                  alt="vector_Twenty"
                                                />
                                                <div
                                                  className="bg-cover bg-no-repeat flex ml-[11px] mt-[-NaNpx] p-1.5 w-[42px] z-[1]"
                                                  style={{
                                                    backgroundImage:
                                                      "url('images/img_group5.svg')",
                                                  }}
                                                >
                                                  <div className="md:h-5 h-6 mt-auto w-1/2">
                                                    <div className="absolute md:h-5 h-[23px] left-[0] top-[0] w-[86%]">
                                                      <div className="absolute md:h-5 h-[22px] left-[0] top-[0] w-[67%]">
                                                        <div className="absolute md:h-5 h-[21px] left-[0] top-[0] w-[84%]">
                                                          <Img
                                                            className="absolute h-5 left-[0] top-[0]"
                                                            src="images/img_checkmark.svg"
                                                            alt="checkmark"
                                                          />
                                                          <Img
                                                            className="absolute bottom-[0] h-[17px] right-[0]"
                                                            src="images/img_checkmark.svg"
                                                            alt="checkmark_One"
                                                          />
                                                        </div>
                                                        <Img
                                                          className="absolute bottom-[0] h-[11px] right-[0]"
                                                          src="images/img_vector_white_a700.svg"
                                                          alt="vector_TwentyOne"
                                                        />
                                                      </div>
                                                      <Img
                                                        className="absolute bottom-[0] h-[17px] right-[0]"
                                                        src="images/img_checkmark.svg"
                                                        alt="checkmark_Two"
                                                      />
                                                    </div>
                                                    <Img
                                                      className="absolute bottom-[0] h-3.5 right-[0]"
                                                      src="images/img_checkmark.svg"
                                                      alt="checkmark_Three"
                                                    />
                                                  </div>
                                                  <Img
                                                    className="h-[23px] ml-[-2.55px] mt-auto z-[1]"
                                                    src="images/img_checkmark.svg"
                                                    alt="checkmark_Four"
                                                  />
                                                </div>
                                              </div>
                                              <div
                                                className="absolute bg-cover bg-no-repeat h-10 md:h-[21px] p-1 right-[3%] top-[17%] w-[39%]"
                                                style={{
                                                  backgroundImage:
                                                    "url('images/img_group5.svg')",
                                                }}
                                              >
                                                <div className="absolute flex flex-col h-max inset-y-[0] items-start justify-start my-auto right-[10%] w-[55%]">
                                                  <div className="md:h-[15px] h-[17px] relative w-[17px]">
                                                    <div className="absolute bottom-[0] h-4 md:h-[15px] left-[0] w-[15px]">
                                                      <div className="absolute h-4 md:h-[15px] inset-y-[0] left-[0] my-auto w-4/5">
                                                        <Img
                                                          className="absolute h-[15px] inset-[0] justify-center m-auto"
                                                          src="images/img_eye.svg"
                                                          alt="eye"
                                                        />
                                                        <Img
                                                          className="absolute bottom-[0] h-2 right-[0]"
                                                          src="images/img_vector_white_a700_8x5.svg"
                                                          alt="vector_TwentyTwo"
                                                        />
                                                      </div>
                                                      <Img
                                                        className="absolute bottom-[0] h-2.5 right-[0]"
                                                        src="images/img_vector.svg"
                                                        alt="vector_TwentyThree"
                                                      />
                                                    </div>
                                                    <Img
                                                      className="absolute h-1.5 right-[0] top-[0] w-[7px]"
                                                      src="images/img_play.svg"
                                                      alt="play"
                                                    />
                                                  </div>
                                                  <Img
                                                    className="h-[3px] mt-[3px]"
                                                    src="images/img_vector_blue_gray_400_3x9.svg"
                                                    alt="vector_TwentyFour"
                                                  />
                                                </div>
                                                <Img
                                                  className="absolute bottom-[15%] h-0.5 left-[29%]"
                                                  src="images/img_vector_blue_gray_400_3x9.svg"
                                                  alt="vector_TwentyFive"
                                                />
                                                <Img
                                                  className="absolute bottom-[20%] h-[3px] left-[10%] w-[3px]"
                                                  src="images/img_vector_gray_500.svg"
                                                  alt="vector_TwentySix"
                                                />
                                              </div>
                                            </div>
                                            <div
                                              className="absolute bg-cover bg-no-repeat bottom-[6%] md:h-[27px] h-[43px] p-[5px] right-[15%] w-[42px]"
                                              style={{
                                                backgroundImage:
                                                  "url('images/img_group6.svg')",
                                              }}
                                            >
                                              <div className="absolute h-7 md:h-[27px] inset-[0] justify-center m-auto w-[29px]">
                                                <div className="h-7 md:h-[27px] m-auto w-[29px]">
                                                  <div className="absolute h-7 md:h-[27px] inset-[0] justify-center m-auto w-[29px]">
                                                    <div className="h-7 md:h-[27px] m-auto w-[29px]">
                                                      <div className="h-7 md:h-[27px] m-auto w-[29px]">
                                                        <div className="h-7 md:h-[27px] m-auto w-[29px]">
                                                          <div className="h-7 md:h-[27px] m-auto w-[29px]">
                                                            <div className="absolute h-7 md:h-[27px] inset-[0] justify-center m-auto w-[29px]">
                                                              <div className="absolute h-7 md:h-[27px] inset-[0] justify-center m-auto w-7">
                                                                <div className="h-7 md:h-[27px] m-auto w-7">
                                                                  <div className="h-7 md:h-[27px] m-auto w-7">
                                                                    <div className="flex flex-col gap-[15px] h-full items-start justify-start m-auto w-7">
                                                                      <Img
                                                                        className="h-[7px] md:ml-[0] ml-[3px]"
                                                                        src="images/img_signal.svg"
                                                                        alt="signal"
                                                                      />
                                                                      <div className="h-[5px] relative w-[68%]">
                                                                        <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                                                                          <div className="flex flex-row items-start justify-evenly w-full">
                                                                            <Img
                                                                              className="h-px w-px"
                                                                              src="images/img_vector_orange_a100_1x1.svg"
                                                                              alt="vector_TwentySeven"
                                                                            />
                                                                            <Img
                                                                              className="h-[5px]"
                                                                              src="images/img_vector_blue_gray_400_3x9.svg"
                                                                              alt="vector_TwentyEight"
                                                                            />
                                                                          </div>
                                                                        </div>
                                                                        <Img
                                                                          className="absolute bottom-[0] h-[3px] left-[11%]"
                                                                          src="images/img_vector_blue_gray_400_3x9.svg"
                                                                          alt="vector_TwentyNine"
                                                                        />
                                                                      </div>
                                                                    </div>
                                                                    <Img
                                                                      className="absolute h-[7px] inset-x-[0] mx-auto top-[11%]"
                                                                      src="images/img_signal.svg"
                                                                      alt="signal_One"
                                                                    />
                                                                  </div>
                                                                  <Img
                                                                    className="absolute h-[7px] inset-x-[0] mx-auto top-1/4"
                                                                    src="images/img_signal.svg"
                                                                    alt="signal_Two"
                                                                  />
                                                                </div>
                                                                <Img
                                                                  className="absolute h-[7px] inset-y-[0] left-[0] my-auto"
                                                                  src="images/img_signal.svg"
                                                                  alt="signal_Three"
                                                                />
                                                              </div>
                                                              <Img
                                                                className="absolute bottom-[21%] h-[7px] left-[0]"
                                                                src="images/img_signal.svg"
                                                                alt="signal_Four"
                                                              />
                                                            </div>
                                                            <Line className="absolute bg-blue_gray-400 h-5 left-[14%] top-[0] w-[5px]" />
                                                          </div>
                                                          <Line className="absolute bg-blue_gray-400 h-5 left-[28%] top-[0] w-[5px]" />
                                                        </div>
                                                        <Line className="absolute bg-blue_gray-400 h-5 right-[34%] top-[7%] w-[5px]" />
                                                      </div>
                                                      <Line className="absolute bg-blue_gray-400 h-5 right-[21%] top-[11%] w-[5px]" />
                                                    </div>
                                                    <Line className="absolute bg-blue_gray-400 h-5 inset-y-[0] my-auto right-[7%] w-[5px]" />
                                                  </div>
                                                  <Img
                                                    className="absolute bottom-[11%] h-[18px] inset-x-[0] mx-auto"
                                                    src="images/img_ticket.svg"
                                                    alt="ticket"
                                                  />
                                                </div>
                                                <Img
                                                  className="absolute h-[7px] inset-x-[0] mx-auto top-1/4"
                                                  src="images/img_vector_orange_a100.svg"
                                                  alt="vector_ThirtyFive"
                                                />
                                              </div>
                                              <Img
                                                className="absolute h-[26px] left-[12%] top-[12%]"
                                                src="images/img_bookmark.svg"
                                                alt="bookmark"
                                              />
                                            </div>
                                          </div>
                                          <div
                                            className="absolute bg-cover bg-no-repeat bottom-[16%] h-10 md:h-[31px] left-[0] p-0.5 w-[39%]"
                                            style={{
                                              backgroundImage:
                                                "url('images/img_group6.svg')",
                                            }}
                                          >
                                            <div className="absolute h-8 md:h-[31px] left-[5%] top-[5%] w-[78%]">
                                              <div className="absolute h-[31px] inset-[0] justify-center m-auto w-full">
                                                <div className="h-[31px] m-auto w-full">
                                                  <div className="h-[31px] m-auto w-full">
                                                    <div className="h-[31px] m-auto w-full">
                                                      <div className="h-[31px] m-auto w-full">
                                                        <div className="h-[31px] m-auto w-full">
                                                          <div className="flex flex-row h-full items-start justify-evenly m-auto w-full">
                                                            <div className="md:h-[21px] h-[31px] relative w-[55%]">
                                                              <div className="flex flex-col h-full items-start justify-start m-auto w-full">
                                                                <div className="md:h-[15px] h-[23px] ml-0.5 md:ml-[0] relative w-[85%]">
                                                                  <div className="md:h-[15px] h-[23px] m-auto w-full">
                                                                    <div className="md:h-[15px] h-[23px] m-auto w-full">
                                                                      <div className="flex flex-col h-full items-start justify-start m-auto w-full">
                                                                        <div className="h-3.5 md:h-[9px] ml-0.5 md:ml-[0] relative w-[73%]">
                                                                          <div className="h-3.5 md:h-[9px] m-auto w-full">
                                                                            <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                                                                              <div className="flex flex-col items-start justify-start w-full">
                                                                                <div
                                                                                  className="bg-cover bg-no-repeat h-1.5 md:h-[3px] ml-0.5 md:ml-[0] relative w-1.5"
                                                                                  style={{
                                                                                    backgroundImage:
                                                                                      "url('images/img_group11.svg')",
                                                                                  }}
                                                                                >
                                                                                  <Img
                                                                                    className="absolute h-[3px] right-[0] top-[0] w-[3px]"
                                                                                    src="images/img_vector_orange_a100_3x3.svg"
                                                                                    alt="vector_ThirtySix"
                                                                                  />
                                                                                  <div
                                                                                    className="absolute bg-cover bg-no-repeat h-1 md:h-px inset-[0] justify-center m-auto w-1"
                                                                                    style={{
                                                                                      backgroundImage:
                                                                                        "url('images/img_group15.svg')",
                                                                                    }}
                                                                                  >
                                                                                    <Img
                                                                                      className="absolute h-px right-[0] top-[0] w-px"
                                                                                      src="images/img_vector_gray_700.svg"
                                                                                      alt="vector_ThirtySeven"
                                                                                    />
                                                                                    <Img
                                                                                      className="absolute bottom-[0] h-px left-[0] w-0.5"
                                                                                      src="images/img_vector_gray_500.svg"
                                                                                      alt="vector_ThirtyEight"
                                                                                    />
                                                                                  </div>
                                                                                </div>
                                                                                <Img
                                                                                  className="h-1.5 w-1.5"
                                                                                  src="images/img_vector_blue_gray_400.svg"
                                                                                  alt="vector_ThirtyNine"
                                                                                />
                                                                              </div>
                                                                            </div>
                                                                            <Img
                                                                              className="absolute bottom-[0] h-1 right-1/4 w-[3px]"
                                                                              src="images/img_vector_orange_a100_4x3.svg"
                                                                              alt="vector_Forty"
                                                                            />
                                                                          </div>
                                                                          <div
                                                                            className="absolute bg-cover bg-no-repeat bottom-[0] h-1 md:h-px left-[0] w-1"
                                                                            style={{
                                                                              backgroundImage:
                                                                                "url('images/img_group15.svg')",
                                                                            }}
                                                                          >
                                                                            <Img
                                                                              className="absolute h-px right-[0] top-[0] w-px"
                                                                              src="images/img_vector_gray_700.svg"
                                                                              alt="vector_FortyOne"
                                                                            />
                                                                            <Img
                                                                              className="absolute bottom-[0] h-px left-[0] w-0.5"
                                                                              src="images/img_vector_gray_500.svg"
                                                                              alt="vector_FortyTwo"
                                                                            />
                                                                          </div>
                                                                        </div>
                                                                        <Img
                                                                          className="h-1.5 w-1.5"
                                                                          src="images/img_vector_blue_gray_400_6x6.svg"
                                                                          alt="vector_FortyThree"
                                                                        />
                                                                      </div>
                                                                      <Img
                                                                        className="absolute bottom-[0] h-1.5 left-[27%]"
                                                                        src="images/img_vector_orange_a100_6x3.svg"
                                                                        alt="vector_FortyFour"
                                                                      />
                                                                    </div>
                                                                    <div
                                                                      className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-1 items-start justify-end left-[0] w-1"
                                                                      style={{
                                                                        backgroundImage:
                                                                          "url('images/img_group14.svg')",
                                                                      }}
                                                                    >
                                                                      <Img
                                                                        className="h-px w-0.5"
                                                                        src="images/img_vector_gray_500.svg"
                                                                        alt="vector_FortyFive"
                                                                      />
                                                                    </div>
                                                                  </div>
                                                                  <Img
                                                                    className="absolute bottom-[22%] h-px left-[18%] w-px"
                                                                    src="images/img_vector_gray_700.svg"
                                                                    alt="vector_FortySix"
                                                                  />
                                                                </div>
                                                                <Img
                                                                  className="h-1.5 w-1.5"
                                                                  src="images/img_vector_blue_gray_400.svg"
                                                                  alt="vector_FortySeven"
                                                                />
                                                              </div>
                                                              <div
                                                                className="absolute bg-cover bg-no-repeat bottom-[0] h-1.5 left-[0] w-1.5"
                                                                style={{
                                                                  backgroundImage:
                                                                    "url('images/img_group12.svg')",
                                                                }}
                                                              >
                                                                <Img
                                                                  className="h-px mb-[-0.38px] w-px z-[1]"
                                                                  src="images/img_vector_gray_700.svg"
                                                                  alt="vector_FortyNine"
                                                                />
                                                                <div
                                                                  className="bg-cover bg-no-repeat flex flex-col h-1 items-start justify-end my-auto w-1"
                                                                  style={{
                                                                    backgroundImage:
                                                                      "url('images/img_group16.svg')",
                                                                  }}
                                                                >
                                                                  <Img
                                                                    className="h-px w-0.5"
                                                                    src="images/img_vector_gray_500.svg"
                                                                    alt="vector_FortyEight"
                                                                  />
                                                                </div>
                                                              </div>
                                                            </div>
                                                            <Img
                                                              className="h-0.5 mt-[3px]"
                                                              src="images/img_vector_blue_gray_400_3x9.svg"
                                                              alt="vector_Fifty"
                                                            />
                                                          </div>
                                                          <Img
                                                            className="absolute h-0.5 right-[0] top-[13%]"
                                                            src="images/img_vector_blue_gray_400_3x9.svg"
                                                            alt="vector_FiftyOne"
                                                          />
                                                        </div>
                                                        <div className="absolute flex flex-col items-start justify-start right-[0] top-[16%] w-2.5">
                                                          <Img
                                                            className="h-0.5"
                                                            src="images/img_vector_blue_gray_400_3x9.svg"
                                                            alt="vector_FiftyTwo"
                                                          />
                                                          <Img
                                                            className="h-0.5 mt-[3px]"
                                                            src="images/img_vector_blue_gray_400_3x9.svg"
                                                            alt="vector_FiftyThree"
                                                          />
                                                        </div>
                                                      </div>
                                                      <Img
                                                        className="absolute h-0.5 right-[8%] top-[39%]"
                                                        src="images/img_vector_blue_gray_400_3x9.svg"
                                                        alt="vector_FiftyFour"
                                                      />
                                                    </div>
                                                    <div className="absolute bottom-[26%] flex flex-col items-start justify-start right-[8%] w-2.5">
                                                      <Img
                                                        className="h-0.5"
                                                        src="images/img_vector_blue_gray_400_3x9.svg"
                                                        alt="vector_FiftyFive"
                                                      />
                                                      <Img
                                                        className="h-0.5 mt-[3px]"
                                                        src="images/img_vector_blue_gray_400_3x9.svg"
                                                        alt="vector_FiftySix"
                                                      />
                                                    </div>
                                                  </div>
                                                  <Img
                                                    className="absolute bottom-[23%] h-0.5 right-[17%]"
                                                    src="images/img_vector_blue_gray_400_3x9.svg"
                                                    alt="vector_FiftySeven"
                                                  />
                                                </div>
                                                <div className="absolute bottom-[0] flex flex-col items-start justify-start right-[21%] w-2.5">
                                                  <Img
                                                    className="h-0.5"
                                                    src="images/img_vector_blue_gray_400_3x9.svg"
                                                    alt="vector_FiftyEight"
                                                  />
                                                  <Img
                                                    className="h-0.5 mt-[3px]"
                                                    src="images/img_vector_blue_gray_400_3x9.svg"
                                                    alt="vector_FiftyNine"
                                                  />
                                                </div>
                                              </div>
                                              <Img
                                                className="absolute bottom-[0] h-0.5 right-[29%]"
                                                src="images/img_vector_blue_gray_400_3x9.svg"
                                                alt="vector_Sixty"
                                              />
                                            </div>
                                            <Img
                                              className="absolute bottom-[10%] h-0.5 inset-x-[0] mx-auto"
                                              src="images/img_vector_blue_gray_400_3x9.svg"
                                              alt="vector_SixtyOne"
                                            />
                                          </div>
                                        </div>
                                        <div
                                          className="absolute bg-cover bg-no-repeat flex flex-col h-[31px] items-start justify-start left-[20%] pr-[3px] py-[3px] top-[14%] w-[32%]"
                                          style={{
                                            backgroundImage:
                                              "url('images/img_group9.svg')",
                                          }}
                                        >
                                          <Img
                                            className="h-px md:ml-[0] ml-[5px] w-px"
                                            src="images/img_vector_gray_700_1x1.svg"
                                            alt="vector_SixtyTwo"
                                          />
                                          <div className="flex flex-col items-start justify-start mt-0.5 w-[14%] md:w-full">
                                            <Img
                                              className="h-px ml-0.5 md:ml-[0] w-px"
                                              src="images/img_vector_1.svg"
                                              alt="vector_SixtyThree"
                                            />
                                            <Img
                                              className="h-px ml-0.5 md:ml-[0] w-px"
                                              src="images/img_vector_2.svg"
                                              alt="vector_SixtyFour"
                                            />
                                            <Img
                                              className="h-px w-px"
                                              src="images/img_vector_gray_700_1x1.svg"
                                              alt="vector_SixtyFive"
                                            />
                                            <Img
                                              className="h-px mt-0.5 w-px"
                                              src="images/img_vector_3.svg"
                                              alt="vector_SixtySix"
                                            />
                                            <Img
                                              className="h-px mt-0.5 w-px"
                                              src="images/img_vector_gray_700_1x1.svg"
                                              alt="vector_SixtySeven"
                                            />
                                          </div>
                                          <div className="flex flex-col items-start justify-start mb-1.5 mt-0.5 md:w-full w-px">
                                            <Img
                                              className="h-px w-px"
                                              src="images/img_vector_1.svg"
                                              alt="vector_SixtyEight"
                                            />
                                            <Img
                                              className="h-px mt-0.5 w-px"
                                              src="images/img_vector_gray_700_1x1.svg"
                                              alt="vector_SixtyNine"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="absolute bottom-[2%] flex flex-col md:gap-10 gap-[81px] items-start justify-start left-[30%] w-[6%]">
                                        <Img
                                          className="h-0.5 w-0.5"
                                          src="images/img_vector_1.svg"
                                          alt="vector_Seventy"
                                        />
                                        <Img
                                          className="h-1 w-1"
                                          src="images/img_vector_gray_700_4x4.svg"
                                          alt="vector_SeventyOne"
                                        />
                                      </div>
                                      <Img
                                        className="absolute h-[5px] right-1/4 top-[2%]"
                                        src="images/img_vector_gray_700_5x15.svg"
                                        alt="vector_SeventyTwo"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <Img
                              className="absolute h-[119px] right-[12%] top-[8%]"
                              src="images/img_folder.svg"
                              alt="folder"
                            />
                          </div>
                          <Img
                            className="absolute bottom-[0] h-[178px] right-[0]"
                            src="images/img_plant.svg"
                            alt="plant"
                          />
                        </div>
                        <Img
                          className="absolute bottom-[0] h-px inset-x-[0] mx-auto"
                          src="images/img_table.svg"
                          alt="table"
                        />
                      </div>
                      <Img
                        className="absolute bottom-[0] h-[348px] left-[0]"
                        src="images/img_character.svg"
                        alt="character"
                      />
                      <Img
                        className="absolute h-[158px] left-[23%] top-[0]"
                        src="images/img_data.svg"
                        alt="data"
                      />
                    </div>
                    <Img
                      className="absolute h-[69px] left-[4%] top-[22%]"
                      src="images/img_cloud.svg"
                      alt="cloud"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex sm:flex-col flex-row font-sourcesans md:gap-10 inset-x-[0] items-start justify-between mx-auto top-[10%] w-[58%]">
            <DesktopHomepageOneSubmenu className="bg-white-A700 border border-gray-300_01 border-solid flex flex-col items-center justify-end pt-[27px] rounded-lg shadow-bs w-[38%] sm:w-full" />
            <div className="bg-white-A700 border border-gray-300_01 border-solid flex flex-col items-center justify-end mb-[106px] p-5 rounded-lg shadow-bs w-[13%] sm:w-full">
              <div className="flex flex-col gap-3.5 items-start justify-start mt-1 w-auto">
                <div className="flex flex-row gap-2 items-center justify-start w-auto">
                  <Img
                    className="h-4 rounded-sm w-[22px]"
                    src="images/img_artwork.svg"
                    alt="artwork"
                  />
                  <Text
                    className="text-base text-pink-900 w-auto"
                    size="txtSourceSans3Regular16Pink900"
                  >
                    English
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-center justify-start w-auto">
                  <Img
                    className="h-4 rounded-sm w-[22px]"
                    src="images/img_computer.svg"
                    alt="computer"
                  />
                  <Text
                    className="text-base text-pink-900 w-auto"
                    size="txtSourceSans3Regular16Pink900"
                  >
                    French
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-center justify-start w-auto">
                  <div className="bg-red-500 flex flex-col items-start justify-start p-[3px] rounded-sm w-[27%]">
                    <Img
                      className="h-[7px] mb-0.5 w-2"
                      src="images/img_vector_yellow_600.svg"
                      alt="vector_SeventyThree"
                    />
                  </div>
                  <Text
                    className="text-base text-pink-900 w-auto"
                    size="txtSourceSans3Regular16Pink900"
                  >
                    Chiness
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-300_01 flex flex-col items-center justify-start p-[61px] md:px-10 sm:px-5 rounded-bl-[120px] rounded-br-[120px] w-full">
          <div className="flex flex-col items-center justify-start max-w-[1400px] mb-[11px] mx-auto w-full">
            <div className="flex flex-col gap-[17px] items-center justify-start w-auto md:w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-center text-pink-900 w-auto"
                size="txtManropeExtraBold32"
              >
                Loved By Developers, Trusted By Enterprises
              </Text>
              <Text
                className="leading-[24.00px] max-w-[605px] md:max-w-full text-center text-gray-700 text-lg"
                size="txtSourceSans3Regular18"
              >
                We helped these brands turn online assessments into success
                stories. Join them. Elevate your testing.
              </Text>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 gap-[63px] items-center justify-center mt-[61px] w-auto md:w-full">
              <Img
                className="h-10 w-[106px]"
                src="images/img_logobrands_pink_900.svg"
                alt="logobrands"
              />
              <Img
                className="h-10 w-[106px]"
                src="images/img_logobrands_pink_900_40x106.svg"
                alt="logobrands_One"
              />
              <Img
                className="h-10 w-[106px]"
                src="images/img_logobrands_40x106.svg"
                alt="logobrands_Two"
              />
              <Img
                className="h-10 w-[106px]"
                src="images/img_logobrands_1.svg"
                alt="logobrands_Three"
              />
              <Img
                className="h-10 w-40"
                src="images/img_logobrands_pink_900_40x160.svg"
                alt="logobrands_Four"
              />
              <Img
                className="h-10 w-[182px]"
                src="images/img_logobrands_pink_900_40x182.svg"
                alt="logobrands_Five"
              />
              <Img
                className="h-[30px] w-[86px]"
                src="images/img_logobrands.svg"
                alt="logobrands_Six"
              />
              <Img
                className="h-[22px] w-[103px]"
                src="images/img_logobrands_pink_900_22x103.svg"
                alt="logobrands_Seven"
              />
            </div>
            <PagerIndicator
              className="flex h-2 justify-center mt-[39px] w-10"
              count={3}
              activeCss="inline-block cursor-pointer h-2 bg-pink-900 w-4 rounded"
              activeIndex={1}
              inactiveCss="inline-block cursor-pointer rounded-[50%] h-2 bg-white-A700 w-2"
              selectedWrapperCss="inline-block md:ml-[0] mx-[2.00px] sm:ml-[0]"
              unselectedWrapperCss="inline-block md:ml-[0] mx-[2.00px] sm:ml-[0]"
            />
          </div>
        </div>
        <div className="bg-white-A700 flex flex-col font-sourcesans md:gap-10 gap-[62px] items-center justify-start mt-[41px] p-[88px] md:px-10 sm:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1437px] mx-auto w-full">
            <div className="flex md:flex-1 flex-col gap-[25px] items-start justify-start mb-2 w-auto md:w-full">
              <Text
                className="sm:text-4xl md:text-[42px] text-[46px] text-pink-900 w-[344px]"
                size="txtPoppinsBold46"
              >
                What We Offer
              </Text>
              <Text
                className="leading-[24.00px] max-w-[550px] md:max-w-full text-gray-700 text-lg"
                size="txtSourceSans3Regular18"
              >
                What makes us different from others? We give holistic solutions
                with strategy, design & technology.
              </Text>
            </div>
            <div className="flex flex-row gap-2.5 items-center justify-center md:mt-0 mt-[81px] sm:px-5 px-6 py-3 rounded w-auto">
              <a href="javascript:" className="text-base text-gray-600 w-auto">
                <Text size="txtSourceSans3Bold16">Learn More</Text>
              </a>
              <Img
                className="h-4 w-4"
                src="images/img_arrowright_gray_600.svg"
                alt="arrowright_Two"
              />
            </div>
          </div>
          <div className="flex flex-col items-start justify-start max-w-[1410px] mb-[53px] mx-auto w-full">
            <div className="md:gap-5 gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
              <DesktopHomepageOneCardservice className="border hover:border-0 border-gray-300_01 border-solid hover:cursor-pointer flex flex-1 flex-col gap-5 justify-center p-[22px] sm:px-5 rounded-lg hover:shadow-bs1 hover:w-full w-full" />
              <DesktopHomepageOneServicecard className="bg-white-A700 border hover:border-0 border-gray-300_01 border-solid hover:cursor-pointer flex flex-1 flex-col gap-5 justify-center p-[22px] sm:px-5 rounded-lg hover:shadow-bs1 shadow-bs1 hover:w-full w-full" />
              <DesktopHomepageOneCardservice
                className="border hover:border-0 border-gray-300_01 border-solid hover:cursor-pointer flex flex-1 flex-col gap-5 justify-center p-[22px] sm:px-5 rounded-lg hover:shadow-bs1 hover:w-full w-full"
                userplatform="Local Marketing"
              />
              <DesktopHomepageOneCardservice
                className="border hover:border-0 border-gray-300_01 border-solid hover:cursor-pointer flex flex-1 flex-col gap-5 justify-center p-[22px] sm:px-5 rounded-lg hover:shadow-bs1 hover:w-full w-full"
                userplatform="Social Media"
              />
              <DesktopHomepageOneCardservice
                className="border hover:border-0 border-gray-300_01 border-solid hover:cursor-pointer flex flex-1 flex-col gap-5 justify-center p-[22px] sm:px-5 rounded-lg hover:shadow-bs1 hover:w-full w-full"
                userplatform="Brand Identity"
              />
              <DesktopHomepageOneCardservice
                className="border hover:border-0 border-gray-300_01 border-solid hover:cursor-pointer flex flex-1 flex-col gap-5 justify-center p-[22px] sm:px-5 rounded-lg hover:shadow-bs1 hover:w-full w-full"
                userplatform="Digital Marketing"
              />
            </div>
          </div>
        </div>
        <div className="bg-pink-900 flex md:flex-col flex-row font-manrope md:gap-10 gap-[74px] items-end justify-start max-w-[1410px] mt-[3px] mx-auto md:px-5 rounded-lg w-full">
          <div className="flex md:flex-1 flex-col items-center justify-start w-[49%] md:w-full">
            <Img
              className="h-[513px] md:h-auto object-cover w-full"
              src="images/img_img.png"
              alt="img"
            />
          </div>
          <div className="flex sm:flex-1 flex-col md:gap-10 gap-[68px] items-start justify-start mb-16 md:mt-0 mt-20 w-auto sm:w-full">
            <div className="flex flex-col gap-2 items-start justify-start w-auto sm:w-full">
              <Button className="bg-pink-400 cursor-pointer font-bold min-w-[74px] py-1 rounded text-center text-white-A700 text-xs">
                Business
              </Button>
              <div className="flex flex-col gap-[11px] items-start justify-start w-auto sm:w-full">
                <Text
                  className="leading-[52.00px] max-w-[531px] md:max-w-full md:text-4xl sm:text-[34px] text-[38px] text-pink-400"
                  size="txtPoppinsBold38"
                >
                  Integrate with over 1,000 project management apps
                </Text>
                <Text
                  className="leading-[24.00px] max-w-[529px] md:max-w-full text-base text-white-A700"
                  size="txtSourceSans3Regular16WhiteA700"
                >
                  <>
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit laborum — semper quis
                    lectus nulla. Interactively transform magnetic growth
                    strategies whereas prospective &quot;outside the box&quot;
                    thinking.
                  </>
                </Text>
              </div>
            </div>
            <div className="flex flex-row font-sourcesans gap-[11px] items-center justify-start pr-[5px] w-[24%] md:w-full">
              <Button className="bg-pink-900 flex h-11 items-center justify-center p-2 rounded-[50%] w-11">
                <Img
                  className="h-[25px]"
                  src="images/img_play_red_50.svg"
                  alt="play_One"
                />
              </Button>
              <Text
                className="text-pink-400 text-sm"
                size="txtSourceSans3Bold14"
              >
                Play Video
              </Text>
            </div>
          </div>
          <Img
            className="h-[97px] md:mt-0 mt-[416px]"
            src="images/img_favicon_white_a700.svg"
            alt="favicon_One"
          />
        </div>
        <div className="bg-gray-300_01 flex md:flex-col flex-row font-sourcesans gap-[30px] items-start justify-start mt-[172px] pb-[143px] md:pr-10 sm:pr-5 pr-[143px] w-full">
          <Img
            className="h-[209px] md:h-auto object-cover"
            src="images/img_favicon_white_a700_209x225.png"
            alt="favicon_Two"
          />
          <div className="flex md:flex-1 flex-col gap-[30px] items-start justify-start md:mt-0 mt-[130px] w-auto md:w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
              <div className="flex md:flex-1 flex-col gap-[19px] items-start justify-start mb-3 w-auto md:w-full">
                <Text
                  className="sm:text-4xl md:text-[42px] text-[46px] text-pink-900 w-[502px]"
                  size="txtPoppinsBold46"
                >
                  Choose The Best Plan
                </Text>
                <Text
                  className="leading-[24.00px] text-gray-700 text-lg"
                  size="txtSourceSans3Regular18"
                >
                  <>
                    Pick your plan. Change whenever you want.
                    <br />
                    No switching fees between packages
                  </>
                </Text>
              </div>
              <div className="flex flex-row gap-2.5 items-center justify-center md:mt-0 mt-[78px] sm:px-5 px-6 py-3 rounded w-auto">
                <Text
                  className="text-base text-gray-600 w-auto"
                  size="txtSourceSans3Bold16"
                >
                  Compare plans
                </Text>
                <Img
                  className="h-4 w-4"
                  src="images/img_arrowright_gray_600.svg"
                  alt="arrowright_Three"
                />
              </div>
            </div>
            <List
              className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-start w-auto md:w-full"
              orientation="horizontal"
            >
              {desktopHomepageOneCardpricingPropList.map((props, index) => (
                <React.Fragment key={`DesktopHomepageOneCardpricing${index}`}>
                  <DesktopHomepageOneCardpricing
                    className="bg-white-A700 border border-gray-300_01 border-solid flex flex-col items-start justify-center p-7 sm:px-5 rounded-lg w-full"
                    {...props}
                  />
                </React.Fragment>
              ))}
            </List>
          </div>
        </div>
        <div className="bg-white-A700 flex flex-col font-sourcesans md:gap-10 gap-24 items-end justify-start w-full">
          <div className="md:h-[1361px] sm:h-[739px] h-[870px] md:px-5 relative w-[87%] md:w-full">
            <div className="absolute bottom-[0] flex flex-col items-center justify-start left-[0] w-[87%]">
              <div className="flex flex-col gap-[45px] items-center justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                  <div className="flex md:flex-1 flex-col gap-[25px] items-start justify-start mb-[11px] w-auto md:w-full">
                    <Text
                      className="max-w-[655px] md:max-w-full sm:text-4xl md:text-[42px] text-[46px] text-pink-900 w-full"
                      size="txtPoppinsBold46"
                    >
                      Frequently asked questions
                    </Text>
                    <Text
                      className="leading-[24.00px] max-w-[550px] md:max-w-full text-gray-700 text-lg"
                      size="txtSourceSans3Regular18"
                    >
                      Feeling inquisitive? Have a read through some of our FAQs
                      or contact our supporters for help
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2.5 items-center justify-center md:mt-0 mt-[83px] sm:px-5 px-6 py-3 rounded w-auto">
                    <a
                      href="javascript:"
                      className="text-base text-gray-600 w-auto"
                    >
                      <Text size="txtSourceSans3Bold16">Contact Us</Text>
                    </a>
                    <Img
                      className="h-4 w-4"
                      src="images/img_arrowright_gray_600.svg"
                      alt="arrowright_Four"
                    />
                  </div>
                </div>
                <div className="flex md:flex-col flex-row font-poppins gap-[31px] items-start justify-start w-auto md:w-full">
                  <div className="flex flex-col gap-[15px] items-start justify-start w-auto">
                    <div className="bg-pink-900 flex flex-row gap-2.5 items-center justify-between sm:px-5 px-[26px] py-[15px] rounded w-[330px]">
                      <Text
                        className="text-lg text-white-A700 w-auto"
                        size="txtPoppinsMedium18"
                      >
                        General Support
                      </Text>
                      <Img
                        className="h-4 w-4"
                        src="images/img_arrowright_white_a700.svg"
                        alt="arrowright_Five"
                      />
                    </div>
                    <div className="bg-white-A700 border-2 border-blue_gray-100 border-solid flex flex-row gap-2.5 items-center justify-between sm:px-5 px-[26px] py-[15px] rounded w-[330px]">
                      <Text
                        className="text-gray-600 text-lg w-auto"
                        size="txtPoppinsMedium18Gray600"
                      >
                        Order / Purchase
                      </Text>
                      <Img
                        className="h-4 w-4"
                        src="images/img_arrowright_gray_600.svg"
                        alt="arrowright_Six"
                      />
                    </div>
                    <div className="bg-white-A700 border-2 border-blue_gray-100 border-solid flex flex-row gap-2.5 items-center justify-between sm:px-5 px-[26px] py-[15px] rounded w-[330px]">
                      <Text
                        className="text-gray-600 text-lg w-auto"
                        size="txtPoppinsMedium18Gray600"
                      >
                        Download / Install
                      </Text>
                      <Img
                        className="h-4 w-4"
                        src="images/img_arrowright_gray_600.svg"
                        alt="arrowright_Seven"
                      />
                    </div>
                    <div className="bg-white-A700 border-2 border-blue_gray-100 border-solid flex flex-row gap-2.5 items-center justify-between sm:px-5 px-[26px] py-[15px] rounded w-[330px]">
                      <Text
                        className="text-gray-600 text-lg w-auto"
                        size="txtPoppinsMedium18Gray600"
                      >
                        Technology
                      </Text>
                      <Img
                        className="h-4 w-4"
                        src="images/img_arrowright_gray_600.svg"
                        alt="arrowright_Eight"
                      />
                    </div>
                    <div className="bg-white-A700 border-2 border-blue_gray-100 border-solid flex flex-row gap-2.5 items-center justify-between sm:px-5 px-[26px] py-[15px] rounded w-[330px]">
                      <Text
                        className="text-gray-600 text-lg w-auto"
                        size="txtPoppinsMedium18Gray600"
                      >
                        Your Account
                      </Text>
                      <Img
                        className="h-4 w-4"
                        src="images/img_arrowright_gray_600.svg"
                        alt="arrowright_Nine"
                      />
                    </div>
                    <div className="flex flex-col font-sourcesans items-center justify-end pt-[77px] w-[94%] md:w-full">
                      <div className="flex flex-row items-start justify-start w-auto">
                        <Button className="bg-pink-900 cursor-pointer font-bold min-w-[124px] py-[13px] rounded text-base text-center text-pink-400">
                          Contact Us
                        </Button>
                        <div className="flex flex-row gap-2.5 items-center justify-center sm:px-5 px-6 py-3 rounded w-auto">
                          <Text
                            className="text-base text-gray-600 w-auto"
                            size="txtSourceSans3Bold16"
                          >
                            Support Center
                          </Text>
                          <Img
                            className="h-4 w-4"
                            src="images/img_arrowright_gray_600.svg"
                            alt="arrowright_Ten"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-11 items-center justify-start w-auto md:w-full">
                    <div className="bg-gray-100 flex flex-col items-center justify-end p-[29px] sm:px-5 rounded-lg w-full">
                      <div className="flex flex-col gap-6 items-start justify-start mt-[7px] w-auto md:w-full">
                        <SelectBox
                          className="font-semibold text-left text-pink-900 text-xl w-full"
                          placeholderClassName="text-pink-900"
                          indicator={
                            <Img
                              className="h-6 w-6"
                              src="images/img_arrowdown_pink_900.svg"
                              alt="arrow_down"
                            />
                          }
                          isMulti={false}
                          name="question"
                          options={questionOptionsList}
                          isSearchable={false}
                          placeholder="Where is my order? Quisque molestie"
                        />
                        <div className="flex flex-col font-sourcesans items-center justify-start w-[99%] md:w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <Text
                              className="leading-[24.00px] text-base text-gray-600 w-full"
                              size="txtSourceSans3Regular16Gray600"
                            >
                              Contrary to popular belief, Lorem Ipsum is not
                              simply random text. It has roots in a piece of
                              classical Latin literature Id pro doctus mediocrem
                              erroribus, diam nostro sed cu. Ea pri graeco
                              tritani partiendo. Omittantur No tale choro
                              fastidii his, pri cu epicuri perpetua. Enim dictas
                              omittantur et duo, vocent lucilius quaestio mea
                              ex. Ex illum officiis id.
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[30px] items-start justify-start w-auto md:w-full">
                      <SelectBox
                        className="font-semibold text-left text-pink-900 text-xl w-full"
                        placeholderClassName="text-pink-900"
                        indicator={
                          <Img
                            className="h-6 mr-[0] w-6"
                            src="images/img_arrowdown_pink_900.svg"
                            alt="arrow_down"
                          />
                        }
                        isMulti={false}
                        name="faqsquestion"
                        options={faqsquestionOptionsList}
                        isSearchable={false}
                        placeholder="How can I return an item purchased online?"
                      />
                      <SelectBox
                        className="font-semibold text-left text-pink-900 text-xl w-full"
                        placeholderClassName="text-pink-900"
                        indicator={
                          <Img
                            className="h-6 mr-[0] w-6"
                            src="images/img_arrowdown_pink_900.svg"
                            alt="arrow_down"
                          />
                        }
                        isMulti={false}
                        name="faqsquestion_One"
                        options={faqsquestionOneOptionsList}
                        isSearchable={false}
                        placeholder="Can I cancel or change my order?"
                      />
                      <SelectBox
                        className="font-semibold text-left text-pink-900 text-xl w-full"
                        placeholderClassName="text-pink-900"
                        indicator={
                          <Img
                            className="h-6 mr-[0] w-6"
                            src="images/img_arrowdown_pink_900.svg"
                            alt="arrow_down"
                          />
                        }
                        isMulti={false}
                        name="faqsquestion_Two"
                        options={faqsquestionTwoOptionsList}
                        isSearchable={false}
                        placeholder="I have promotional or discount code?"
                      />
                      <SelectBox
                        className="font-semibold text-left text-pink-900 text-xl w-full"
                        placeholderClassName="text-pink-900"
                        indicator={
                          <Img
                            className="h-6 mr-[0] w-6"
                            src="images/img_arrowdown_pink_900.svg"
                            alt="arrow_down"
                          />
                        }
                        isMulti={false}
                        name="faqsquestion_Three"
                        options={faqsquestionThreeOptionsList}
                        isSearchable={false}
                        placeholder="What are the delivery types you use?"
                      />
                      <SelectBox
                        className="font-semibold text-left text-pink-900 text-xl w-full"
                        placeholderClassName="text-pink-900"
                        indicator={
                          <Img
                            className="h-6 mr-[0] w-6"
                            src="images/img_arrowdown_pink_900.svg"
                            alt="arrow_down"
                          />
                        }
                        isMulti={false}
                        name="faqsquestion_Four"
                        options={faqsquestionFourOptionsList}
                        isSearchable={false}
                        placeholder="How can I pay for my purchases?"
                      />
                      <SelectBox
                        className="font-semibold text-left text-pink-900 text-xl w-full"
                        placeholderClassName="text-pink-900"
                        indicator={
                          <Img
                            className="h-6 mr-[0] w-6"
                            src="images/img_arrowdown_pink_900.svg"
                            alt="arrow_down"
                          />
                        }
                        isMulti={false}
                        name="faqsquestion_Five"
                        options={faqsquestionFiveOptionsList}
                        isSearchable={false}
                        placeholder="Can I cancel my order?"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Img
              className="absolute h-[322px] object-cover right-[0] top-[0] w-[19%]"
              src="images/img_img151.png"
              alt="img151"
            />
          </div>
          <Line className="bg-pink-200 h-px w-full" />
        </div>
        <div className="font-sourcesans h-[3287px] md:px-5 relative w-full">
          <div className="bg-white-A700 flex flex-col font-manrope items-center justify-start mb-[-3px] mx-auto pt-32 w-full z-[1]">
            <div className="h-[696px] relative w-[67%] md:w-full">
              <Text
                className="leading-[70.00px] mb-[-67px] mx-auto sm:text-4xl md:text-[42px] text-[46px] text-center text-pink-900 w-[79%] sm:w-full z-[1]"
                size="txtPoppinsBold46"
              >
                High quality projects finished and awarded on conferences around
                the globe.
              </Text>
              <div className="flex md:flex-col flex-row font-manrope md:gap-10 gap-[69px] items-center justify-between mt-auto mx-auto w-auto">
                <div className="md:h-[345px] h-[483px] py-1.5 relative w-[54%] md:w-full">
                  <div className="absolute md:h-[345px] h-[355px] inset-[0] justify-center m-auto w-[97%] md:w-full">
                    <div className="absolute bg-pink-200 h-[345px] inset-[0] justify-center m-auto rounded-[172px] w-[99%]"></div>
                    <div className="absolute bg-teal-50 flex flex-col h-max inset-[0] items-center justify-center m-auto rounded-[172px] w-[99%]">
                      <Img
                        className="h-[345px] md:h-auto object-cover rounded-[172px] w-full"
                        src="images/img_img_345x661.png"
                        alt="img_Two"
                      />
                    </div>
                  </div>
                  <div className="absolute bottom-[5%] flex flex-col h-[174px] items-center justify-start left-[0] w-[174px]">
                    <Img
                      className="h-[173px] md:h-auto rounded-[50%] w-[173px]"
                      src="images/img_ellipse5.png"
                      alt="ellipseFive"
                    />
                  </div>
                  <div className="absolute bg-pink-900 border-[7px] border-solid border-white-A700 flex flex-col h-[113px] items-center justify-end p-6 sm:px-5 right-[5%] rounded-[56px] top-[1%] w-[113px]">
                    <Img
                      className="h-[62px]"
                      src="images/img_favicon_pink_400.svg"
                      alt="favicon_Three"
                    />
                  </div>
                </div>
                <div className="flex flex-col md:gap-10 gap-[68px] items-start justify-start w-auto sm:w-full">
                  <div className="flex flex-col gap-2 items-start justify-start w-auto sm:w-full">
                    <div className="bg-pink-400 flex flex-col items-center justify-start p-[3px] rounded">
                      <Text
                        className="text-white-A700 text-xs"
                        size="txtManropeBold12"
                      >
                        Business
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[11px] items-start justify-start w-auto sm:w-full">
                      <Text
                        className="leading-[52.00px] max-w-[531px] md:max-w-full md:text-4xl sm:text-[34px] text-[38px] text-pink-900"
                        size="txtPoppinsBold38Pink900"
                      >
                        Integrate with over 1,000 project management apps
                      </Text>
                      <Text
                        className="leading-[24.00px] max-w-[529px] md:max-w-full text-base text-gray-600"
                        size="txtSourceSans3Regular16Gray600"
                      >
                        <>
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qui officia deserunt mollit laborum — semper
                          quis lectus nulla. Interactively transform magnetic
                          growth strategies whereas prospective &quot;outside
                          the box&quot; thinking.
                        </>
                      </Text>
                      <List
                        className="sm:flex-col flex-row font-sourcesans md:gap-10 gap-[74px] grid sm:grid-cols-1 grid-cols-2 justify-start w-auto sm:w-full"
                        orientation="horizontal"
                      >
                        <div className="flex flex-col gap-[18px] items-start justify-start w-auto">
                          <div className="flex flex-row gap-3 items-center justify-start w-auto">
                            <Img
                              className="h-3 w-4"
                              src="images/img_checkmark_pink_900.svg"
                              alt="checkmark"
                            />
                            <Text
                              className="text-gray-700 text-sm w-auto"
                              size="txtSourceSans3SemiBold14"
                            >
                              Task tracking
                            </Text>
                          </div>
                          <div className="flex flex-row gap-3 items-center justify-start w-auto">
                            <Img
                              className="h-3 w-4"
                              src="images/img_checkmark_pink_900.svg"
                              alt="checkmark_One"
                            />
                            <Text
                              className="text-gray-700 text-sm w-auto"
                              size="txtSourceSans3SemiBold14"
                            >
                              Task visualization
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
                              Meet deadlines faster
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[18px] items-start justify-start w-auto">
                          <div className="flex flex-row gap-3 items-center justify-start w-auto">
                            <Img
                              className="h-3 w-4"
                              src="images/img_checkmark_pink_900.svg"
                              alt="checkmark"
                            />
                            <Text
                              className="text-gray-700 text-sm w-auto"
                              size="txtSourceSans3SemiBold14"
                            >
                              Create task dependencies
                            </Text>
                          </div>
                          <div className="flex flex-row gap-3 items-center justify-start w-auto">
                            <Img
                              className="h-3 w-4"
                              src="images/img_checkmark_pink_900.svg"
                              alt="checkmark_One"
                            />
                            <Text
                              className="text-gray-700 text-sm w-auto"
                              size="txtSourceSans3SemiBold14"
                            >
                              hare files, discuss
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
                              Track time spent on each project
                            </Text>
                          </div>
                        </div>
                      </List>
                    </div>
                  </div>
                  <div className="flex flex-row font-sourcesans items-start justify-start w-auto">
                    <Button className="bg-pink-900 cursor-pointer font-bold min-w-[151px] py-[13px] rounded text-base text-center text-white-A700">
                      Download App
                    </Button>
                    <div className="flex flex-row gap-2.5 items-center justify-center sm:px-5 px-6 py-3 rounded w-auto">
                      <a
                        href="javascript:"
                        className="text-base text-gray-600 w-auto"
                      >
                        <Text size="txtSourceSans3Bold16">Learn More</Text>
                      </a>
                      <Img
                        className="h-4 w-4"
                        src="images/img_arrowright_gray_600.svg"
                        alt="arrowright_Thirteen"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 gap-[90px] items-end justify-start max-w-[1368px] mt-[109px] w-full">
              <div className="flex sm:flex-1 flex-col md:gap-10 gap-[68px] items-start justify-start w-auto sm:w-full">
                <div className="flex flex-col gap-2 items-start justify-start w-auto sm:w-full">
                  <Button className="bg-pink-200 cursor-pointer font-bold min-w-[74px] py-1 rounded text-center text-white-A700 text-xs">
                    Branding
                  </Button>
                  <div className="flex flex-col gap-[11px] items-start justify-start w-auto sm:w-full">
                    <Text
                      className="leading-[52.00px] max-w-[531px] md:max-w-full md:text-4xl sm:text-[34px] text-[38px] text-pink-900"
                      size="txtPoppinsBold38Pink900"
                    >
                      Build your brand and reach out to social followers
                    </Text>
                    <Text
                      className="leading-[24.00px] max-w-[570px] md:max-w-full text-base text-gray-600"
                      size="txtSourceSans3Regular16Gray600"
                    >
                      Sharing content online allows you to craft an online
                      persona that reflects your personal values and
                      professional skills. Even if you only use social media
                      occasionally, what you create, share or react to feeds
                      into this public narrative. How you conduct yourself
                      online is now just as important as your behavior offline
                      especially when it comes to your digital marketing career.
                    </Text>
                    <List
                      className="sm:flex-col flex-row font-sourcesans md:gap-10 gap-[74px] grid sm:grid-cols-1 grid-cols-2 justify-start w-auto sm:w-full"
                      orientation="horizontal"
                    >
                      <div className="flex flex-col gap-[18px] items-start justify-start w-auto">
                        <div className="flex flex-row gap-3 items-center justify-start w-auto">
                          <Img
                            className="h-3 w-4"
                            src="images/img_checkmark_pink_900.svg"
                            alt="checkmark"
                          />
                          <Text
                            className="text-gray-700 text-sm w-auto"
                            size="txtSourceSans3SemiBold14"
                          >
                            Send & Schedule Posts
                          </Text>
                        </div>
                        <div className="flex flex-row gap-3 items-center justify-start w-auto">
                          <Img
                            className="h-3 w-4"
                            src="images/img_checkmark_pink_900.svg"
                            alt="checkmark_One"
                          />
                          <Text
                            className="text-gray-700 text-sm w-auto"
                            size="txtSourceSans3SemiBold14"
                          >
                            Push Notification
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
                            Online Visitors
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[18px] items-start justify-start w-auto">
                        <div className="flex flex-row gap-3 items-center justify-start w-auto">
                          <Img
                            className="h-3 w-4"
                            src="images/img_checkmark_pink_900.svg"
                            alt="checkmark"
                          />
                          <Text
                            className="text-gray-700 text-sm w-auto"
                            size="txtSourceSans3SemiBold14"
                          >
                            Live Chat Request
                          </Text>
                        </div>
                        <div className="flex flex-row gap-3 items-center justify-start w-auto">
                          <Img
                            className="h-3 w-4"
                            src="images/img_checkmark_pink_900.svg"
                            alt="checkmark_One"
                          />
                          <Text
                            className="text-gray-700 text-sm w-auto"
                            size="txtSourceSans3SemiBold14"
                          >
                            Create fully integrated campaigns
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
                            Directly send or schedule posts
                          </Text>
                        </div>
                      </div>
                    </List>
                  </div>
                </div>
                <div className="flex flex-row font-sourcesans items-start justify-start w-auto">
                  <Button className="bg-pink-900 cursor-pointer font-bold min-w-[151px] py-[13px] rounded text-base text-center text-white-A700">
                    Download App
                  </Button>
                  <div className="flex flex-row gap-2.5 items-center justify-center sm:px-5 px-6 py-3 rounded w-auto">
                    <a
                      href="javascript:"
                      className="text-base text-gray-600 w-auto"
                    >
                      <Text size="txtSourceSans3Bold16">Learn More</Text>
                    </a>
                    <Img
                      className="h-4 w-4"
                      src="images/img_arrowright_gray_600.svg"
                      alt="arrowright_Fourteen"
                    />
                  </div>
                </div>
              </div>
              <div className="md:h-[390px] h-[474px] py-3.5 relative w-[52%] md:w-full">
                <div className="absolute md:h-[390px] h-[399px] inset-x-[0] mx-auto top-[3%] w-full">
                  <div className="absolute bg-pink-200 h-[390px] inset-[0] justify-center m-auto rounded-[195px] w-full"></div>
                  <div className="absolute h-[390px] inset-[0] justify-center m-auto rounded-[195px] w-full">
                    <Img
                      className="h-[390px] m-auto object-cover rounded-[195px] w-full"
                      src="images/img_img_390x702.png"
                      alt="img_Four"
                    />
                    <Img
                      className="absolute h-[49px] right-[5%] top-[2%]"
                      src="images/img_union.svg"
                      alt="union"
                    />
                  </div>
                </div>
                <div className="absolute bg-pink-900 border-[6px] border-solid border-white-A700 bottom-[3%] flex flex-col h-28 items-center justify-start left-[4%] p-[18px] rounded-[50%] w-28">
                  <Img
                    className="h-[33px] my-5"
                    src="images/img_eye_pink_400.svg"
                    alt="eye_One"
                  />
                </div>
              </div>
            </div>
            <Line className="bg-pink-200 h-px mt-6 w-full" />
          </div>
          <div className="h-[1748px] mt-auto mx-auto w-full">
            <DesktopHomepageOneColumnviewallOne className="bg-white-A700 flex flex-col gap-[55px] items-center justify-end mb-[-33px] mx-auto pt-[132px] w-full z-[1]" />
            <DesktopHomepageOneColumnTwelve className="bg-white-A700 flex flex-col items-center justify-end mt-auto mx-auto p-[55px] md:px-10 sm:px-5 w-full" />
          </div>
        </div>
        <DesktopHomepageOneRowa1645d122624009
          className="bg-gray-300_01 flex md:flex-col flex-row font-sourcesans md:gap-5 items-start justify-center max-w-[1410px] mx-auto pb-[19px] pl-[19px] md:px-5 rounded-lg w-full"
          byclickingthe={
            <Text className="text-base text-gray-700 w-[462px]">
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
          }
        />
        <footer className="bg-white-A700 flex font-poppins items-center justify-center md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mb-1 ml-[255px] mr-12 mt-[70px] w-[85%]">
            <div className="flex flex-col gap-[58px] items-center justify-start pb-6">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1410px] w-full">
                  <ul className="flex md:flex-1 flex-col items-start justify-start w-[18%] md:w-full common-column-list">
                    <li>
                      <a href="javascript:">
                        <div className="flex flex-row font-shipporimincho gap-[7px] items-center justify-start">
                          <Img
                            className="h-9"
                            src="images/img_favicon.svg"
                            alt="favicon_Six"
                          />
                          <Text
                            className="sm:text-4xl md:text-[38px] text-[40px] text-cyan-900_01"
                            size="txtShipporiMinchoExtraBold40"
                          >
                            iori
                          </Text>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:">
                        <div className="font-sourcesans h-[83px] md:h-[87px] mt-3 relative">
                          <Text
                            className="absolute inset-x-[0] leading-[24.00px] mx-auto text-base text-gray-600 top-[0] w-full"
                            size="txtSourceSans3Regular16Gray600"
                          >
                            4517 Washington Ave. Manchester, Kentucky 39495
                          </Text>
                          <Text
                            className="absolute bottom-[0] left-[0] text-base text-gray-600"
                            size="txtSourceSans3Regular16Gray600"
                          >
                            Hours: 8:00 - 17:00, Mon - Sat{" "}
                          </Text>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="mt-7 text-lg text-pink-900"
                      >
                        <Text size="txtPoppinsMedium18Pink900">Follow Us</Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:">
                        <div className="flex flex-row gap-2 items-end justify-start mt-2.5">
                          <Img
                            className="h-5 w-5"
                            src="images/img_facebook.svg"
                            alt="facebook"
                          />
                          <Img
                            className="h-5 w-5"
                            src="images/img_twitter.svg"
                            alt="twitter"
                          />
                          <Img
                            className="h-5 w-5"
                            src="images/img_003instagram.svg"
                            alt="003instagram"
                          />
                          <Img
                            className="h-5 w-5"
                            src="images/img_004linkedin.svg"
                            alt="004linkedin"
                          />
                          <Img
                            className="h-5 w-5"
                            src="images/img_play_pink_900.svg"
                            alt="play_Two"
                          />
                        </div>
                      </a>
                    </li>
                  </ul>
                  <DesktopHomepageOneFooterlinks className="flex md:flex-1 flex-col gap-[13px] items-start justify-start w-[15%] md:w-full" />
                  <DesktopHomepageOneFooterlinks
                    className="flex md:flex-1 flex-col gap-3 items-start justify-start w-[15%] md:w-full"
                    titleFour="Ressources"
                    missionvision="Project management"
                    ourteam="Solutions"
                    careers="Customers"
                    pressmedia="News & Events"
                    advertising="Careers"
                    testimonials="Support"
                  />
                  <DesktopHomepageOneFooterlinks
                    className="flex md:flex-1 flex-col gap-[13px] items-start justify-start w-[15%] md:w-full"
                    titleFour="We offer"
                    missionvision="Project  software"
                    ourteam="Resource  software"
                    careers="Workflow automation"
                    pressmedia="Gantt chart makers"
                    advertising="Project dashboards"
                    testimonials="Task  software"
                  />
                  <ul className="flex md:flex-1 flex-col items-start justify-start w-1/5 md:w-full common-column-list">
                    <li>
                      <a href="javascript:" className="text-pink-900 text-xl">
                        <Text size="txtPoppinsSemiBold20">App & Payment</Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:">
                        <div className="flex flex-col font-sourcesans mt-[18px] relative">
                          <Text
                            className="leading-[20.00px] mx-auto text-gray-600 text-sm"
                            size="txtSourceSans3SemiBold14Gray600"
                          >
                            <>
                              Download our Apps and get
                              <br />
                              extra 15% Discount on your first Order…!
                            </>
                          </Text>
                          <div className="flex flex-row gap-3 items-center justify-between mt-[-10.5px] mx-auto w-auto z-[1]">
                            <Img
                              className="h-[39px] w-[118px]"
                              src="images/img_mainicons.svg"
                              alt="appstore"
                            />
                            <DesktopHomepageOneAppgoogleplay className="flex flex-col items-center justify-start" />
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="mt-[35px] text-gray-600 text-sm"
                      >
                        <Text size="txtSourceSans3SemiBold14Gray600">
                          Secured Payment Gateways
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:">
                        <Img
                          className="h-8 md:h-auto mt-[11px] object-cover"
                          src="images/img_paymentmethod1.png"
                          alt="paymentmethodOne"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col font-sourcesans gap-[29px] items-center justify-start w-full">
                <Line className="bg-gray-300_01 h-px w-full" />
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1409px] w-full">
                  <div className="flex flex-row gap-[50px] items-start justify-start w-auto">
                    <a
                      href="javascript:"
                      className="text-base text-blue_gray-400 w-auto"
                    >
                      <Text size="txtSourceSans3Regular16Bluegray400">
                        Privacy policy
                      </Text>
                    </a>
                    <Text
                      className="text-base text-blue_gray-400 w-auto"
                      size="txtSourceSans3Regular16Bluegray400"
                    >
                      Cookies
                    </Text>
                    <a
                      href="javascript:"
                      className="text-base text-blue_gray-400 w-auto"
                    >
                      <Text size="txtSourceSans3Regular16Bluegray400">
                        Terms of service
                      </Text>
                    </a>
                  </div>
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="text-base text-blue_gray-400"
                      size="txtSourceSans3Regular16Bluegray400"
                    >
                      ©Iori Official 2022. All right reversed.
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <Img
              className="h-14 w-[55px]"
              src="images/img_gotop.svg"
              alt="gotop"
            />
          </div>
        </footer>
      </div>
    </>
  );
};

export default DesktopHomepageOnePage;
