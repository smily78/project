import React from "react";

import { Text } from "components";

const DesktopHomepageOneFooterlinks = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text className="text-pink-900 text-xl" size="txtPoppinsSemiBold20">
          {props?.titleFour}
        </Text>
        <ul className="flex flex-col gap-3 items-start justify-start w-[107px]">
          <li>
            <Text
              className="text-base text-gray-600"
              size="txtSourceSans3Regular16Gray600"
            >
              {props?.missionvision}
            </Text>
          </li>
          <li>
            <Text
              className="text-base text-gray-600"
              size="txtSourceSans3Regular16Gray600"
            >
              {props?.ourteam}
            </Text>
          </li>
          <li>
            <Text
              className="text-base text-gray-600"
              size="txtSourceSans3Regular16Gray600"
            >
              {props?.careers}
            </Text>
          </li>
          <li>
            <Text
              className="text-base text-gray-600"
              size="txtSourceSans3Regular16Gray600"
            >
              {props?.pressmedia}
            </Text>
          </li>
          <li>
            <Text
              className="text-base text-gray-600"
              size="txtSourceSans3Regular16Gray600"
            >
              {props?.advertising}
            </Text>
          </li>
          <li>
            <Text
              className="text-base text-gray-600"
              size="txtSourceSans3Regular16Gray600"
            >
              {props?.testimonials}
            </Text>
          </li>
        </ul>
      </div>
    </>
  );
};

DesktopHomepageOneFooterlinks.defaultProps = {
  titleFour: "About Us",
  missionvision: "Mission & Vision",
  ourteam: "Our Team",
  careers: "Careers",
  pressmedia: "Press & Media",
  advertising: "Advertising",
  testimonials: "Testimonials",
};

export default DesktopHomepageOneFooterlinks;
