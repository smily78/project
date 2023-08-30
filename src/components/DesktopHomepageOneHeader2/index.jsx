import React from "react";

import { Button, Img, SelectBox, Text } from "components";

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

const DesktopHomepageOneHeader2 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start mb-2 w-3/4 md:w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1410px] w-full">
            <div className="flex md:flex-1 md:flex-col flex-row gap-12 items-center justify-start w-auto md:w-full">
              <div className="flex flex-row gap-[7px] items-center justify-start w-[12%] md:w-full">
                <Img
                  className="h-9"
                  src="images/img_favicon.svg"
                  alt="favicon"
                />
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-cyan-900_01"
                  size="txtShipporiMinchoExtraBold40"
                >
                  {props?.iori}
                </Text>
              </div>
              <div className="flex md:flex-col flex-row gap-[50px] items-center justify-start py-0.5 w-auto md:w-full">
                <SelectBox
                  className="font-sourcesans text-gray-900 text-left text-lg w-[9%] md:w-full"
                  placeholderClassName="text-gray-900"
                  indicator={
                    <Img
                      className="h-[18px] w-[18px]"
                      src="images/img_arrowdown.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="menuitem"
                  options={menuitemOptionsList}
                  isSearchable={false}
                  placeholder="Home"
                />
                <SelectBox
                  className="font-sourcesans text-gray-900 text-left text-lg w-[9%] md:w-full"
                  placeholderClassName="text-gray-900"
                  indicator={
                    <Img
                      className="h-[18px] w-[18px]"
                      src="images/img_arrowdown.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="menuitem_One"
                  options={menuitemOneOptionsList}
                  isSearchable={false}
                  placeholder="About"
                />
                <SelectBox
                  className="font-sourcesans text-gray-900 text-left text-lg w-[13%] md:w-full"
                  placeholderClassName="text-gray-900"
                  indicator={
                    <Img
                      className="h-[18px] w-[18px]"
                      src="images/img_arrowdown.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="menuitem_Two"
                  options={menuitemTwoOptionsList}
                  isSearchable={false}
                  placeholder="Company"
                />
                <SelectBox
                  className="font-sourcesans text-gray-900 text-left text-lg w-[9%] md:w-full"
                  placeholderClassName="text-gray-900"
                  indicator={
                    <Img
                      className="h-[18px] w-[18px]"
                      src="images/img_arrowdown.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="menuitem_Three"
                  options={menuitemThreeOptionsList}
                  isSearchable={false}
                  placeholder="Pages"
                />
                <SelectBox
                  className="font-sourcesans text-gray-900 text-left text-lg w-[8%] md:w-full"
                  placeholderClassName="text-gray-900"
                  indicator={
                    <Img
                      className="h-[18px] w-[18px]"
                      src="images/img_arrowdown.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="menuitem_Four"
                  options={menuitemFourOptionsList}
                  isSearchable={false}
                  placeholder="Blog"
                />
                <SelectBox
                  className="font-sourcesans text-gray-900 text-left text-lg w-[9%] md:w-full"
                  placeholderClassName="text-gray-900"
                  indicator={
                    <Img
                      className="h-[18px] w-[18px]"
                      src="images/img_arrowdown.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="menuitem_Five"
                  options={menuitemFiveOptionsList}
                  isSearchable={false}
                  placeholder="Shop"
                />
                <div className="flex flex-col items-center justify-start w-auto">
                  <Text
                    className="text-gray-900 text-lg w-auto"
                    size="txtSourceSans3Regular18Gray900"
                  >
                    {props?.contact}
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-center justify-end w-auto">
              <Img
                className="h-[18px] w-[18px]"
                src="images/img_search.svg"
                alt="search"
              />
              <SelectBox
                className="font-sourcesans text-gray-900 text-left text-lg w-1/5 sm:w-full"
                placeholderClassName="text-gray-900"
                indicator={
                  <Img
                    className="h-[18px] w-[18px]"
                    src="images/img_arrowdown.svg"
                    alt="arrow_down"
                  />
                }
                isMulti={false}
                name="language"
                options={languageOptionsList}
                isSearchable={false}
                placeholder="EN"
              />
              <Button className="bg-pink-900 cursor-pointer font-bold font-sourcesans min-w-[119px] py-[15px] rounded text-center text-pink-400 text-sm">
                {props?.getstartedbutton}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DesktopHomepageOneHeader2.defaultProps = {
  iori: "iori",
  contact: "Contact",
  getstartedbutton: "Get Started",
};

export default DesktopHomepageOneHeader2;
