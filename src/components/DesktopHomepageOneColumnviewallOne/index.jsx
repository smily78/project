import React from "react";

import { Img, Line, List, PagerIndicator, Slider, Text } from "components";

const DesktopHomepageOneColumnviewallOne = (props) => {
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between max-w-[1411px] w-full">
          <div className="flex md:flex-1 flex-col gap-[21px] items-start justify-start w-auto md:w-full">
            <Text
              className="max-w-[792px] md:max-w-full sm:text-4xl md:text-[42px] text-[46px] text-pink-900 w-full"
              size="txtPoppinsBold46"
            >
              {props?.whatourcustommeOne}
            </Text>
            <Text
              className="leading-[24.00px] max-w-[550px] md:max-w-full text-gray-700 text-lg"
              size="txtSourceSans3Regular18"
            >
              {props?.hearfromouruserOne}
            </Text>
          </div>
          <div className="flex flex-row gap-2.5 items-center justify-center w-auto">
            <Text
              className="text-gray-900 text-sm w-auto"
              size="txtSourceSans3Bold14Gray900"
            >
              {props?.viewallOne}
            </Text>
            <Img
              className="h-4 w-4"
              src="images/img_arrowright_gray_900.svg"
              alt="arrowright_Twelve"
            />
          </div>
        </div>
        <div className="h-[492px] relative w-full">
          <Slider
            autoPlay
            autoPlayInterval={2000}
            activeIndex={sliderState}
            responsive={{
              0: { items: 1 },
              550: { items: 1 },
              1050: { items: 2 },
            }}
            onSlideChanged={(e) => {
              setsliderState(e?.item);
            }}
            activeSlideCSS="scale-[1.00] absolute"
            ref={sliderRef}
            className="m-auto w-full"
            items={[...Array(6)].map(() => (
              <React.Fragment key={Math.random()}>
                <div className="flex flex-col items-start justify-start mx-2.5 overflow-auto">
                  <List
                    className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 w-full"
                    orientation="horizontal"
                  >
                    <div className="bg-white-A700 border hover:border-0 border-gray-300_01 border-solid hover:cursor-pointer flex flex-1 flex-col items-center justify-start p-[23px] sm:px-5 rounded-lg hover:shadow-bs1 hover:w-full w-full">
                      <div className="flex flex-col items-center justify-start mb-1 w-[95%] md:w-full">
                        <div className="flex flex-row items-start justify-between w-full">
                          <div className="flex flex-row gap-3 items-center justify-start mt-[11px] w-auto">
                            <Img
                              className="h-14 md:h-auto object-cover rounded-[27px] w-[55px]"
                              src="images/img_image_2.png"
                              alt="image"
                            />
                            <div className="flex flex-col items-start justify-start w-auto">
                              <Text
                                className="text-base text-pink-900 w-auto"
                                size="txtSourceSans3Bold16Pink900"
                              >
                                {props?.albertflores3}
                              </Text>
                              <Text
                                className="text-gray-700 text-xs w-auto"
                                size="txtSourceSans3Regular12Gray700"
                              >
                                {props?.bankofamerica3}
                              </Text>
                            </div>
                          </div>
                          <Img
                            className="h-[30px] w-[30px]"
                            src="images/img_quote1.svg"
                            alt="quoteOne"
                          />
                        </div>
                        <Text
                          className="leading-[24.00px] mt-4 text-base text-gray-700 w-full"
                          size="txtSourceSans3Regular16"
                        >
                          {props?.accessthesame3}
                        </Text>
                        <Line className="bg-gray-100 h-px mt-11 w-full" />
                        <div className="flex flex-row items-start justify-between mt-3.5 w-full">
                          <Text
                            className="text-gray-700 text-xs"
                            size="txtSourceSans3Regular12Gray700"
                          >
                            {props?.p29november20223}
                          </Text>
                          <Img
                            className="h-3 mt-0.5"
                            src="images/img_ratingstars.svg"
                            alt="ratingstars"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 border hover:border-0 border-gray-300_01 border-solid hover:cursor-pointer flex flex-1 flex-col items-center justify-start p-[23px] sm:px-5 rounded-lg hover:shadow-bs1 shadow-bs1 hover:w-full w-full">
                      <div className="flex flex-col items-center justify-start mb-1 w-[95%] md:w-full">
                        <div className="flex flex-row items-start justify-between w-full">
                          <div className="flex flex-row gap-3 items-center justify-start mt-[11px] w-auto">
                            <Img
                              className="h-14 md:h-auto object-cover rounded-[27px] w-[55px]"
                              src="images/img_image_56x55.png"
                              alt="image"
                            />
                            <div className="flex flex-col items-start justify-start w-auto">
                              <Text
                                className="text-base text-pink-900 w-auto"
                                size="txtSourceSans3Bold16Pink900"
                              >
                                {props?.albertflores1}
                              </Text>
                              <Text
                                className="text-gray-700 text-xs w-auto"
                                size="txtSourceSans3Regular12Gray700"
                              >
                                {props?.bankofamerica1}
                              </Text>
                            </div>
                          </div>
                          <Img
                            className="h-[30px] w-[30px]"
                            src="images/img_quote1.svg"
                            alt="quoteOne"
                          />
                        </div>
                        <Text
                          className="leading-[24.00px] mt-4 text-base text-gray-700 w-full"
                          size="txtSourceSans3Regular16"
                        >
                          {props?.accessthesame1}
                        </Text>
                        <Line className="bg-gray-100 h-px mt-11 w-full" />
                        <div className="flex flex-row items-start justify-between mt-3.5 w-full">
                          <Text
                            className="text-gray-700 text-xs"
                            size="txtSourceSans3Regular12Gray700"
                          >
                            {props?.p29november20221}
                          </Text>
                          <Img
                            className="h-3 mt-0.5"
                            src="images/img_ratingstars.svg"
                            alt="ratingstars"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 border hover:border-0 border-gray-300_01 border-solid hover:cursor-pointer flex flex-1 flex-col items-center justify-start p-[23px] sm:px-5 rounded-lg hover:shadow-bs1 hover:w-full w-full">
                      <div className="flex flex-col items-center justify-start mb-1 w-[95%] md:w-full">
                        <div className="flex flex-row items-start justify-between w-full">
                          <div className="flex flex-row gap-3 items-center justify-start mt-[11px] w-auto">
                            <Img
                              className="h-14 md:h-auto object-cover rounded-[27px] w-[55px]"
                              src="images/img_image_2.png"
                              alt="image"
                            />
                            <div className="flex flex-col items-start justify-start w-auto">
                              <Text
                                className="text-base text-pink-900 w-auto"
                                size="txtSourceSans3Bold16Pink900"
                              >
                                {props?.albertflores3}
                              </Text>
                              <Text
                                className="text-gray-700 text-xs w-auto"
                                size="txtSourceSans3Regular12Gray700"
                              >
                                {props?.bankofamerica3}
                              </Text>
                            </div>
                          </div>
                          <Img
                            className="h-[30px] w-[30px]"
                            src="images/img_quote1.svg"
                            alt="quoteOne"
                          />
                        </div>
                        <Text
                          className="leading-[24.00px] mt-4 text-base text-gray-700 w-full"
                          size="txtSourceSans3Regular16"
                        >
                          {props?.accessthesame3}
                        </Text>
                        <Line className="bg-gray-100 h-px mt-11 w-full" />
                        <div className="flex flex-row items-start justify-between mt-3.5 w-full">
                          <Text
                            className="text-gray-700 text-xs"
                            size="txtSourceSans3Regular12Gray700"
                          >
                            {props?.p29november20223}
                          </Text>
                          <Img
                            className="h-3 mt-0.5"
                            src="images/img_ratingstars.svg"
                            alt="ratingstars"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 border hover:border-0 border-gray-300_01 border-solid hover:cursor-pointer flex flex-1 flex-col items-center justify-start p-[23px] sm:px-5 rounded-lg hover:shadow-bs1 hover:w-full w-full">
                      <div className="flex flex-col items-center justify-start mb-1 w-[95%] md:w-full">
                        <div className="flex flex-row items-start justify-between w-full">
                          <div className="flex flex-row gap-3 items-center justify-start mt-[11px] w-auto">
                            <Img
                              className="h-14 md:h-auto object-cover rounded-[27px] w-[55px]"
                              src="images/img_image_2.png"
                              alt="image"
                            />
                            <div className="flex flex-col items-start justify-start w-auto">
                              <Text
                                className="text-base text-pink-900 w-auto"
                                size="txtSourceSans3Bold16Pink900"
                              >
                                {props?.albertflores3}
                              </Text>
                              <Text
                                className="text-gray-700 text-xs w-auto"
                                size="txtSourceSans3Regular12Gray700"
                              >
                                {props?.bankofamerica3}
                              </Text>
                            </div>
                          </div>
                          <Img
                            className="h-[30px] w-[30px]"
                            src="images/img_quote1.svg"
                            alt="quoteOne"
                          />
                        </div>
                        <Text
                          className="leading-[24.00px] mt-4 text-base text-gray-700 w-full"
                          size="txtSourceSans3Regular16"
                        >
                          {props?.accessthesame3}
                        </Text>
                        <Line className="bg-gray-100 h-px mt-11 w-full" />
                        <div className="flex flex-row items-start justify-between mt-3.5 w-full">
                          <Text
                            className="text-gray-700 text-xs"
                            size="txtSourceSans3Regular12Gray700"
                          >
                            {props?.p29november20223}
                          </Text>
                          <Img
                            className="h-3 mt-0.5"
                            src="images/img_ratingstars.svg"
                            alt="ratingstars"
                          />
                        </div>
                      </div>
                    </div>
                  </List>
                </div>
              </React.Fragment>
            ))}
            renderDotsItem={({ isActive }) => {
              if (isActive) {
                return (
                  <div className="inline-block cursor-pointer h-2 bg-pink-900 w-4 relative rounded" />
                );
              }
              return (
                <div
                  className="inline-block cursor-pointer rounded-[50%] h-2 bg-blue_gray-100 w-2 relative"
                  role="button"
                  tabIndex={0}
                />
              );
            }}
          />
          <PagerIndicator
            className="absolute bottom-[22%] flex h-2 inset-x-[0] justify-center mx-auto w-10"
            count={3}
            activeCss="inline-block cursor-pointer h-2 bg-pink-900 w-4 relative rounded"
            activeIndex={sliderState}
            inactiveCss="inline-block cursor-pointer rounded-[50%] h-2 bg-blue_gray-100 w-2 relative"
            sliderRef={sliderRef}
            selectedWrapperCss="inline-block mx-[2.00px]"
            unselectedWrapperCss="inline-block mx-[2.00px]"
          />
        </div>
      </div>
    </>
  );
};

DesktopHomepageOneColumnviewallOne.defaultProps = {
  whatourcustommeOne: "What our custommers are saying",
  hearfromouruserOne:
    "Hear from our users who have saved thousands on their Startup and SaaS solution spend",
  viewallOne: "View All",
  albertflores: "Albert Flores",
  bankofamerica: "Bank of America",
  accessthesame: (
    <>
      Vivamus hendrerit molestie mi, a volutpat ipsum volutpat sit amet. Aenean
      sed metus pulvinar, efficitur lectus sit amet, consectetur nisl.
      <br />
      Vivamus hendrerit moles Maecenas lobortis risus
      <br />
      Maecenas lobortis risus
    </>
  ),
  p29november2022: "29 November 2022",
  albertflores1: "Bessie Cooper",
  bankofamerica1: "Bank of America",
  accessthesame1:
    "Duis justo nulla, pulvinar at dolor dapibus, finibus cursus massa. Praesent quam diam, faucibus tristique enim in, rhoncus aliquam lorem. Vestibulum vestibulum pellentesque nunc sit amet ullamcorper. Praesent ligula felis",
  p29november20221: "29 November 2022",
  albertflores2: "Albert Flores",
  bankofamerica2: "Bank of America",
  accessthesame2: (
    <>
      Vivamus hendrerit molestie mi, a volutpat ipsum volutpat sit amet. Aenean
      sed metus pulvinar, efficitur lectus sit amet, consectetur nisl.
      <br />
      Vivamus hendrerit moles Maecenas lobortis risus
      <br />
      Maecenas lobortis risus
    </>
  ),
  p29november20222: "29 November 2022",
  albertflores3: "Albert Flores",
  bankofamerica3: "Bank of America",
  accessthesame3: (
    <>
      Vivamus hendrerit molestie mi, a volutpat ipsum volutpat sit amet. Aenean
      sed metus pulvinar, efficitur lectus sit amet, consectetur nisl.
      <br />
      Vivamus hendrerit moles Maecenas lobortis risus
      <br />
      Maecenas lobortis risus
    </>
  ),
  p29november20223: "29 November 2022",
};

export default DesktopHomepageOneColumnviewallOne;
