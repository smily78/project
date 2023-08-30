import React from "react";

import { Button, CheckBox, Img, Text } from "components";

const DesktopHomepageOneSubmenu = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-[30px] items-center justify-start w-full">
          <div className="flex flex-col items-start justify-start w-[88%] md:w-full">
            <div className="flex flex-row gap-[9px] items-center justify-start md:ml-[0] ml-[3px] w-auto">
              <Button className="bg-pink-50 flex h-[30px] items-center justify-center p-[9px] rounded-[50%] w-[30px]">
                <Img className="h-3" src="images/img_home.svg" alt="home" />
              </Button>
              <Text
                className="text-pink-900 text-sm w-auto"
                size="txtSourceSans3Bold14Pink900"
              >
                {props?.homepage}
              </Text>
            </div>
            <Text
              className="leading-[18.00px] md:ml-[0] ml-[3px] mt-4 text-blue_gray-400 text-xs w-full"
              size="txtSourceSans3Regular12"
            >
              {props?.descriptionOne}
            </Text>
            <div className="flex flex-row gap-[63px] items-center justify-start mt-[26px] w-[82%] md:w-full">
              <div className="flex flex-col gap-[11px] items-start justify-start w-auto sm:w-full">
                <CheckBox
                  className="font-sourcesans text-base text-left text-pink-900"
                  inputClassName="mr-[5px]"
                  name="item"
                  id="item"
                  label="Home page 01"
                ></CheckBox>
                <CheckBox
                  className="font-sourcesans text-base text-left text-pink-900"
                  inputClassName="mr-[5px]"
                  name="item_One"
                  id="item_One"
                  label="Home page 03"
                ></CheckBox>
              </div>
              <div className="flex flex-col gap-[11px] items-start justify-start w-auto sm:w-full">
                <CheckBox
                  className="font-sourcesans text-base text-left text-pink-900"
                  inputClassName="mr-[5px]"
                  name="item_Two"
                  id="item_Two"
                  label="Home page 02"
                ></CheckBox>
                <CheckBox
                  className="font-sourcesans text-base text-left text-pink-900"
                  inputClassName="mr-[5px]"
                  name="item_Three"
                  id="item_Three"
                  label="Home page 04"
                ></CheckBox>
              </div>
            </div>
          </div>
          <div className="bg-pink-200 h-2 w-full"></div>
        </div>
      </div>
    </>
  );
};

DesktopHomepageOneSubmenu.defaultProps = {
  homepage: "Homepage",
  descriptionOne:
    "Beautiful and Truly Unique Pre-Built Frontend Homepages Easily complete website for your business. New designs will be continuously added. Click to view the demo.",
};

export default DesktopHomepageOneSubmenu;
