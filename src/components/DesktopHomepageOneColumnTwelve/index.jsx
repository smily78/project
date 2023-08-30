import React from "react";

import { Img, Line, List, Text } from "components";

const DesktopHomepageOneColumnTwelve = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start mt-[13px] w-[78%] md:w-full">
          <div className="flex flex-col md:gap-10 gap-[68px] items-center justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between max-w-[1411px] w-full">
              <div className="flex md:flex-1 flex-col gap-[21px] items-start justify-start w-auto md:w-full">
                <Text
                  className="sm:text-4xl md:text-[42px] text-[46px] text-pink-900 w-[327px]"
                  size="txtPoppinsBold46"
                >
                  {props?.fromourblog}
                </Text>
                <Text
                  className="leading-[24.00px] max-w-[550px] md:max-w-full text-gray-700 text-lg"
                  size="txtSourceSans3Regular18"
                >
                  {props?.aeneanvelitnislOne}
                </Text>
              </div>
              <div className="flex flex-row gap-2.5 items-center justify-center w-auto">
                <Text
                  className="text-gray-900 text-sm w-auto"
                  size="txtSourceSans3Bold14Gray900"
                >
                  {props?.viewall}
                </Text>
                <Img
                  className="h-4 w-4"
                  src="images/img_arrowright_gray_900.svg"
                  alt="arrowright_Eleven"
                />
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-[31px] items-start justify-between w-full">
              <List
                className="md:flex-1 sm:flex-col flex-row gap-[30px] grid md:grid-cols-1 grid-cols-2 justify-start w-auto md:w-full"
                orientation="horizontal"
              >
                <div className="flex flex-col gap-[18px] items-center justify-start w-full">
                  <div className="bg-gray-100 flex flex-col items-center justify-start rounded w-full">
                    <Img
                      className="h-[304px] md:h-auto object-cover rounded w-full"
                      src="images/img_img_1.png"
                      alt="img"
                    />
                  </div>
                  <div className="flex flex-col gap-7 items-start justify-start w-auto sm:w-full">
                    <div className="flex flex-col gap-[18px] items-start justify-start w-auto sm:w-full">
                      <Text
                        className="leading-[40.00px] max-w-[450px] md:max-w-full sm:text-2xl md:text-[26px] text-[28px] text-pink-900 tracking-[-0.56px]"
                        size="txtPoppinsSemiBold28"
                      >
                        {props?.howtoblowthroug1}
                      </Text>
                      <div className="flex flex-row gap-[34px] items-center justify-start w-[354px]">
                        <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                          <Img
                            className="h-4 w-4"
                            src="images/img_frame.svg"
                            alt="frame"
                          />
                          <Text
                            className="text-blue_gray-400 text-xs w-auto"
                            size="txtSourceSans3Regular12"
                          >
                            {props?.date1}
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                          <Img
                            className="h-[18px] w-[18px]"
                            src="images/img_search_blue_gray_400.svg"
                            alt="search"
                          />
                          <Text
                            className="text-blue_gray-400 text-right text-xs w-auto"
                            size="txtSourceSans3Regular12"
                          >
                            {props?.time1}
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="leading-[20.00px] max-w-[450px] md:max-w-full text-gray-700 text-sm"
                        size="txtSourceSans3SemiBold14"
                      >
                        {props?.description1}
                      </Text>
                    </div>
                    <div className="flex flex-row items-end justify-between w-[450px] sm:w-full">
                      <div className="flex flex-row gap-3 items-center justify-start w-auto">
                        <Img
                          className="h-14 md:h-auto object-cover rounded-[27px] w-[55px]"
                          src="images/img_image.png"
                          alt="image_One"
                        />
                        <div className="flex flex-col items-start justify-start w-auto">
                          <Text
                            className="text-base text-pink-900 w-auto"
                            size="txtSourceSans3Bold16Pink900"
                          >
                            {props?.guyhawkins1}
                          </Text>
                          <Text
                            className="text-gray-700 text-xs w-auto"
                            size="txtSourceSans3Regular12Gray700"
                          >
                            {props?.bankofamerica1}
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row gap-2.5 items-center justify-center sm:px-5 px-6 py-3 rounded w-auto">
                        <Text
                          className="text-base text-gray-600 w-auto"
                          size="txtSourceSans3Bold16"
                        >
                          {props?.getstarted1}
                        </Text>
                        <Img
                          className="h-4 w-4"
                          src="images/img_arrowright_gray_600.svg"
                          alt="arrowright"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[18px] items-center justify-start w-full">
                  <div className="bg-gray-100 flex flex-col items-center justify-start rounded w-full">
                    <Img
                      className="h-[304px] md:h-auto object-cover rounded w-full"
                      src="images/img_img_1.png"
                      alt="img"
                    />
                  </div>
                  <div className="flex flex-col gap-7 items-start justify-start w-auto sm:w-full">
                    <div className="flex flex-col gap-[18px] items-start justify-start w-auto sm:w-full">
                      <Text
                        className="leading-[40.00px] max-w-[450px] md:max-w-full sm:text-2xl md:text-[26px] text-[28px] text-pink-900 tracking-[-0.56px]"
                        size="txtPoppinsSemiBold28"
                      >
                        {props?.howtoblowthroug1}
                      </Text>
                      <div className="flex flex-row gap-[34px] items-center justify-start w-[354px]">
                        <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                          <Img
                            className="h-4 w-4"
                            src="images/img_frame.svg"
                            alt="frame"
                          />
                          <Text
                            className="text-blue_gray-400 text-xs w-auto"
                            size="txtSourceSans3Regular12"
                          >
                            {props?.date1}
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                          <Img
                            className="h-[18px] w-[18px]"
                            src="images/img_search_blue_gray_400.svg"
                            alt="search"
                          />
                          <Text
                            className="text-blue_gray-400 text-right text-xs w-auto"
                            size="txtSourceSans3Regular12"
                          >
                            {props?.time1}
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="leading-[20.00px] max-w-[450px] md:max-w-full text-gray-700 text-sm"
                        size="txtSourceSans3SemiBold14"
                      >
                        {props?.description1}
                      </Text>
                    </div>
                    <div className="flex flex-row items-end justify-between w-[450px] sm:w-full">
                      <div className="flex flex-row gap-3 items-center justify-start w-auto">
                        <Img
                          className="h-14 md:h-auto object-cover rounded-[27px] w-[55px]"
                          src="images/img_image.png"
                          alt="image_One"
                        />
                        <div className="flex flex-col items-start justify-start w-auto">
                          <Text
                            className="text-base text-pink-900 w-auto"
                            size="txtSourceSans3Bold16Pink900"
                          >
                            {props?.guyhawkins1}
                          </Text>
                          <Text
                            className="text-gray-700 text-xs w-auto"
                            size="txtSourceSans3Regular12Gray700"
                          >
                            {props?.bankofamerica1}
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row gap-2.5 items-center justify-center sm:px-5 px-6 py-3 rounded w-auto">
                        <Text
                          className="text-base text-gray-600 w-auto"
                          size="txtSourceSans3Bold16"
                        >
                          {props?.getstarted1}
                        </Text>
                        <Img
                          className="h-4 w-4"
                          src="images/img_arrowright_gray_600.svg"
                          alt="arrowright"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </List>
              <List
                className="flex flex-col gap-[27px] items-start w-auto"
                orientation="vertical"
              >
                <div className="flex flex-col gap-[29px] items-center justify-start my-0 w-full">
                  <div className="flex sm:flex-col flex-row gap-[18px] items-start justify-start w-auto sm:w-full">
                    <div className="flex flex-col h-[120px] items-center justify-start rounded-lg w-[120px]">
                      <Img
                        className="h-[120px] md:h-auto object-cover rounded-lg w-[120px]"
                        src="images/img_img_4.png"
                        alt="img"
                      />
                    </div>
                    <div className="flex flex-col gap-3 items-start justify-start w-auto">
                      <Text
                        className="leading-[28.00px] max-w-[312px] md:max-w-full text-pink-900 text-xl"
                        size="txtPoppinsSemiBold20"
                      >
                        {props?.title3}
                      </Text>
                      <div className="flex flex-row gap-[34px] items-center justify-start w-[275px]">
                        <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                          <Img
                            className="h-4 w-4"
                            src="images/img_frame.svg"
                            alt="frame"
                          />
                          <Text
                            className="text-blue_gray-400 text-xs w-auto"
                            size="txtSourceSans3Regular12"
                          >
                            {props?.date5}
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                          <Img
                            className="h-[18px] w-[18px]"
                            src="images/img_search_blue_gray_400.svg"
                            alt="search"
                          />
                          <Text
                            className="text-blue_gray-400 text-right text-xs w-auto"
                            size="txtSourceSans3Regular12"
                          >
                            {props?.time5}
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Line className="bg-gray-100 h-px w-full" />
                </div>
                <div className="flex flex-col gap-[29px] items-center justify-start my-0 w-full">
                  <div className="flex sm:flex-col flex-row gap-[18px] items-start justify-start w-auto sm:w-full">
                    <div className="flex flex-col h-[120px] items-center justify-start rounded-lg w-[120px]">
                      <Img
                        className="h-[120px] md:h-auto object-cover rounded-lg w-[120px]"
                        src="images/img_img_4.png"
                        alt="img"
                      />
                    </div>
                    <div className="flex flex-col gap-3 items-start justify-start w-auto">
                      <Text
                        className="leading-[28.00px] max-w-[312px] md:max-w-full text-pink-900 text-xl"
                        size="txtPoppinsSemiBold20"
                      >
                        {props?.title3}
                      </Text>
                      <div className="flex flex-row gap-[34px] items-center justify-start w-[275px]">
                        <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                          <Img
                            className="h-4 w-4"
                            src="images/img_frame.svg"
                            alt="frame"
                          />
                          <Text
                            className="text-blue_gray-400 text-xs w-auto"
                            size="txtSourceSans3Regular12"
                          >
                            {props?.date5}
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                          <Img
                            className="h-[18px] w-[18px]"
                            src="images/img_search_blue_gray_400.svg"
                            alt="search"
                          />
                          <Text
                            className="text-blue_gray-400 text-right text-xs w-auto"
                            size="txtSourceSans3Regular12"
                          >
                            {props?.time5}
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Line className="bg-gray-100 h-px w-full" />
                </div>
                <div className="flex flex-col gap-[29px] items-center justify-start my-0 w-full">
                  <div className="flex sm:flex-col flex-row gap-[18px] items-start justify-start w-auto sm:w-full">
                    <div className="flex flex-col h-[120px] items-center justify-start rounded-lg w-[120px]">
                      <Img
                        className="h-[120px] md:h-auto object-cover rounded-lg w-[120px]"
                        src="images/img_img_4.png"
                        alt="img"
                      />
                    </div>
                    <div className="flex flex-col gap-3 items-start justify-start w-auto">
                      <Text
                        className="leading-[28.00px] max-w-[312px] md:max-w-full text-pink-900 text-xl"
                        size="txtPoppinsSemiBold20"
                      >
                        {props?.title3}
                      </Text>
                      <div className="flex flex-row gap-[34px] items-center justify-start w-[275px]">
                        <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                          <Img
                            className="h-4 w-4"
                            src="images/img_frame.svg"
                            alt="frame"
                          />
                          <Text
                            className="text-blue_gray-400 text-xs w-auto"
                            size="txtSourceSans3Regular12"
                          >
                            {props?.date5}
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                          <Img
                            className="h-[18px] w-[18px]"
                            src="images/img_search_blue_gray_400.svg"
                            alt="search"
                          />
                          <Text
                            className="text-blue_gray-400 text-right text-xs w-auto"
                            size="txtSourceSans3Regular12"
                          >
                            {props?.time5}
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Line className="bg-gray-100 h-px w-full" />
                </div>
                <div className="flex flex-col items-center justify-start my-0 pb-[29px] w-full">
                  <div className="flex sm:flex-col flex-row gap-[18px] items-start justify-start w-auto sm:w-full">
                    <div className="flex flex-col h-[120px] items-center justify-start rounded-lg w-[120px]">
                      <Img
                        className="h-[120px] md:h-auto object-cover rounded-lg w-[120px]"
                        src="images/img_img_4.png"
                        alt="img"
                      />
                    </div>
                    <div className="flex flex-col gap-3 items-start justify-start w-auto">
                      <Text
                        className="leading-[28.00px] max-w-[312px] md:max-w-full text-pink-900 text-xl"
                        size="txtPoppinsSemiBold20"
                      >
                        {props?.title3}
                      </Text>
                      <div className="flex flex-row gap-[34px] items-center justify-start w-[275px]">
                        <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                          <Img
                            className="h-4 w-4"
                            src="images/img_frame.svg"
                            alt="frame"
                          />
                          <Text
                            className="text-blue_gray-400 text-xs w-auto"
                            size="txtSourceSans3Regular12"
                          >
                            {props?.date5}
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                          <Img
                            className="h-[18px] w-[18px]"
                            src="images/img_search_blue_gray_400.svg"
                            alt="search"
                          />
                          <Text
                            className="text-blue_gray-400 text-right text-xs w-auto"
                            size="txtSourceSans3Regular12"
                          >
                            {props?.time5}
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </List>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DesktopHomepageOneColumnTwelve.defaultProps = {
  fromourblog: "From our blog",
  aeneanvelitnislOne:
    "Aenean velit nisl, aliquam eget diam eu, rhoncus tristique dolor. Aenean vulputate sodales urna ut vestibulum",
  viewall: "View All",
  howtoblowthroug: "Helpful Tips for Working from Home as a Freelancer",
  date: "29 May 2022",
  time: "3 mins read",
  description:
    "Duis sit amet luctus mi. Ut efficitur, nulla vel luctus elementum, lacus enim consectetur justo, ut sodales purus velit id eros. Nulla tristique ligula bibendum purus facilisis, quis ultrices leo vehicula. Curabitur rutrum massa ac velit pretium fermentum. Morbi nec porta nunc. Nullam fermentum molestie neque, a efficitur nisi ultricies id. Integer vel sem sit amet nisl dapibus sodales at in ipsum.",
  guyhawkins: "Guy Hawkins",
  bankofamerica: "Bank of America",
  getstarted: "Read More",
  howtoblowthroug1: "Helpful Tips for Working from Home as a Freelancer",
  date1: "29 May 2022",
  time1: "3 mins read",
  description1:
    "Duis sit amet luctus mi. Ut efficitur, nulla vel luctus elementum, lacus enim consectetur justo, ut sodales purus velit id eros. Nulla tristique ligula bibendum purus facilisis, quis ultrices leo vehicula. Curabitur rutrum massa ac velit pretium fermentum. Morbi nec porta nunc. Nullam fermentum molestie neque, a efficitur nisi ultricies id. Integer vel sem sit amet nisl dapibus sodales at in ipsum.",
  guyhawkins1: "Guy Hawkins",
  bankofamerica1: "Bank of America",
  getstarted1: "Read More",
  title: "Design Studios That Everyone Should Know About?",
  date2: "29 May 2022",
  time2: "3 mins read",
  title1: "Design Studios That Everyone Should Know About?",
  date3: "29 May 2022",
  time3: "3 mins read",
  title2: "Design Studios That Everyone Should Know About?",
  date4: "29 May 2022",
  time4: "3 mins read",
  title3: "Design Studios That Everyone Should Know About?",
  date5: "29 May 2022",
  time5: "3 mins read",
};

export default DesktopHomepageOneColumnTwelve;
