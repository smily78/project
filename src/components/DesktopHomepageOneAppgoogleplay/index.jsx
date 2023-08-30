import React from "react";

import { Img } from "components";

const DesktopHomepageOneAppgoogleplay = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[39px] items-center justify-start w-full"
              style={{ backgroundImage: "url('images/img_badge.svg')" }}
            >
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[39px] items-center justify-end p-[5px] w-full"
                style={{ backgroundImage: "url('images/img_group1.svg')" }}
              >
                <div className="flex flex-row gap-2 items-center justify-between w-[93%] md:w-full">
                  <Img
                    className="h-[25px]"
                    src="images/img_logo.svg"
                    alt="logo"
                  />
                  <div className="flex flex-col items-start justify-start">
                    <Img className="h-1.5" src="images/img_car.svg" alt="car" />
                    <Img
                      className="h-4 mt-[3px]"
                      src="images/img_car_white_a700.svg"
                      alt="car_One"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DesktopHomepageOneAppgoogleplay.defaultProps = {};

export default DesktopHomepageOneAppgoogleplay;
