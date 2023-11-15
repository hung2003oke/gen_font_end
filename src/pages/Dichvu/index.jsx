import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Slider, Text } from "components";

const DichvuPage = () => {
  const navigate = useNavigate();

  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-end mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="h-[1396px] sm:h-[928px] md:h-[954px] md:px-5 relative w-full">
            <div className="absolute h-[1373px] sm:h-[928px] md:h-[954px] inset-[0] justify-center m-auto w-full">
              <div className="absolute h-[928px] md:h-[954px] inset-x-[0] mx-auto top-[0] w-full">
                <div className="h-[928px] md:h-[954px] m-auto w-full">
                  <div className="h-[928px] md:h-[954px] m-auto w-full">
                    <div className="h-[928px] m-auto w-full">
                      <Img
                        className="absolute h-[928px] inset-y-[0] my-auto object-cover right-[0] w-[73%]"
                        src="images/img_htmlcsscollag.png"
                        alt="htmlcsscollag"
                      />
                      <div className="absolute bg-red-A400_01 flex flex-col h-full inset-y-[0] items-start justify-start left-[0] my-auto pb-[253px] md:pr-10 sm:pr-5 pr-[253px] w-[28%]">
                        <div
                          className="common-pointer flex flex-col items-start justify-start mb-[565px] md:px-10 sm:px-5 px-[72px] py-8 w-auto"
                          onClick={() => navigate("/")}
                        >
                          <Img
                            className="h-[46px] md:h-auto object-cover w-[136px] sm:w-full"
                            src="images/img_asset31.png"
                            alt="assetThirtyOne"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="absolute bg-black-900_51 flex md:flex-col flex-row gap-2 h-full inset-y-[0] items-start justify-center my-auto p-[45px] md:px-10 sm:px-5 right-[0] w-[73%]">
                      <Text
                        className="mb-[817px] md:ml-[0] ml-[1152px] text-base text-white-A700"
                        size="txtInterMedium16"
                      >
                        Language
                      </Text>
                      <Img
                        className="h-[19px] mr-[41px] w-[19px]"
                        src="images/img_frame.svg"
                        alt="frame"
                      />
                    </div>
                  </div>
                  <div className="absolute flex flex-col md:gap-10 gap-[108px] justify-start left-[14%] top-[9%] w-[67%]">
                    <div className="flex md:flex-col flex-row gap-14 items-center justify-center md:ml-[0] ml-[226px] py-2.5 w-auto md:w-full">
                      <Text
                        className="text-base text-white-A700 w-auto"
                        size="txtInterMedium16"
                      >
                        About us
                      </Text>
                      <Text
                        className="text-base text-white-A700 w-auto"
                        size="txtInterMedium16"
                      >
                        Product & Service
                      </Text>
                      <Text
                        className="text-base text-white-A700 w-auto"
                        size="txtInterMedium16"
                      >
                        Client partner
                      </Text>
                      <Text
                        className="common-pointer text-base text-white-A700 w-auto"
                        size="txtInterMedium16"
                        onClick={() => navigate("/tinmoi")}
                      >
                        News & Event
                      </Text>
                      <Text
                        className="text-base text-white-A700 w-auto"
                        size="txtInterMedium16"
                      >
                        Career opportunities
                      </Text>
                      <Text
                        className="text-base text-white-A700 w-auto"
                        size="txtInterMedium16"
                      >
                        Contact
                      </Text>
                    </div>
                    <Text
                      className="text-4xl sm:text-[32px] md:text-[34px] text-white-A700 w-full"
                      size="txtInterBold36"
                    >
                      Inheriting the core values of Viettel, Viettel Software
                      aims to create new values for customers through its
                      efforts and dedication in providing products and services
                      on the basis of modern technology up to standards.
                      international.
                    </Text>
                  </div>
                </div>
                <Line className="absolute bg-white-A700 h-0.5 inset-x-[0] mx-auto top-[8%] w-[48%]" />
              </div>
              <Line className="absolute bg-red-A400 h-[3px] left-[32%] top-[6%] w-[8%]" />
              <Slider
                autoPlay
                autoPlayInterval={2000}
                activeIndex={sliderState}
                responsive={{
                  0: { items: 1 },
                  550: { items: 2 },
                  1050: { items: 4 },
                }}
                onSlideChanged={(e) => {
                  setsliderState(e?.item);
                }}
                activeSlideCSS="scale-[1.00] absolute"
                ref={sliderRef}
                className="absolute bottom-[0] inset-x-[0] mx-auto w-[97%]"
                items={[...Array(12)].map(() => (
                  <React.Fragment key={Math.random()}>
                    <div className="bg-blue_gray-100 flex flex-col items-center justify-start mx-2.5">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
                          <div className="h-[584px] relative w-3/4 md:w-full">
                            <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[0] w-[34%]">
                              <div className="flex flex-col items-center justify-start w-full">
                                <div className="bg-white-A700 flex flex-col items-start justify-start p-7 sm:px-5 w-full">
                                  <Text
                                    className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                                    size="txtInterSemiBold24Black900"
                                  >
                                    <>
                                      Outsourcing <br />
                                      services, software <br />
                                      development
                                    </>
                                  </Text>
                                  <Text
                                    className="mt-[7px] text-base text-black-900"
                                    size="txtInterRegular16"
                                  >
                                    <>
                                      - Software development <br />
                                      services
                                      <br />
                                      -...
                                    </>
                                  </Text>
                                  <Img
                                    className="h-8 mt-[50px] w-8"
                                    src="images/img_arrowright.svg"
                                    alt="arrowright"
                                  />
                                </div>
                                <div className="bg-black-900_01 flex flex-col items-start justify-start p-7 sm:px-5 w-full">
                                  <Text
                                    className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                                    size="txtInterSemiBold24WhiteA700"
                                  >
                                    <>
                                      New Technology <br />
                                      Application Service
                                    </>
                                  </Text>
                                  <Text
                                    className="mt-[7px] text-base text-white-A700"
                                    size="txtInterRegular16WhiteA700"
                                  >
                                    <>
                                      - Implement and put emerging <br />
                                      technologies into products <br />
                                      according to customers&#39; <br />
                                      requirements
                                    </>
                                  </Text>
                                  <Img
                                    className="h-8 mt-[60px] w-8"
                                    src="images/img_arrowright_white_a700.svg"
                                    alt="arrowright_One"
                                  />
                                </div>
                              </div>
                            </div>
                            <Img
                              className="absolute h-[584px] inset-y-[0] left-[0] my-auto object-cover w-[67%]"
                              src="images/img_50836491_584x594.png"
                              alt="50836491"
                            />
                          </div>
                          <List
                            className="flex flex-col gap-px w-[26%]"
                            orientation="vertical"
                          >
                            <div className="bg-red-A400 flex flex-col items-start justify-start my-0 p-7 sm:px-5 w-full">
                              <Text
                                className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                                size="txtInterSemiBold24WhiteA700"
                              >
                                <>
                                  Provide product <br />
                                  packages on cloud <br />
                                  computing <br />
                                  infrastructure <br />
                                  (Cloud)
                                </>
                              </Text>
                              <Text
                                className="mt-2 text-base text-white-A700"
                                size="txtInterRegular16WhiteA700"
                              >
                                - Conversion consulting...
                              </Text>
                              <Img
                                className="h-8 mt-[30px] w-8"
                                src="images/img_arrowright_white_a700.svg"
                                alt="arrowright"
                              />
                            </div>
                            <div className="bg-blue_gray-100 flex flex-col items-start justify-start my-0 p-[21px] sm:px-5 w-full">
                              <Text
                                className="md:ml-[0] ml-[7px] mt-[7px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                                size="txtInterSemiBold24Black900"
                              >
                                <>
                                  Supply of machinery <br />
                                  and equipment in <br />
                                  the field of IT, <br />
                                  Electronics - <br />
                                  Telecommunications
                                </>
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[7px] mt-2 text-base text-black-900"
                                size="txtInterRegular16"
                              >
                                - Buy, sell, agent in machinery, ...
                              </Text>
                              <Img
                                className="h-8 mb-[7px] md:ml-[0] ml-[7px] mt-[30px] w-8"
                                src="images/img_arrowright.svg"
                                alt="arrowright"
                              />
                            </div>
                          </List>
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                ))}
              />
            </div>
            <Text
              className="absolute bg-clip-text bg-gradient2  bottom-[0] capitalize inset-x-[0] mx-auto md:text-5xl sm:text-[42px] text-[56px] text-center text-transparent w-max"
              size="txtInterBold56"
            >
              OUTSOURCING
            </Text>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1368px] mt-[99px] mx-auto md:px-5 w-full">
            <div className="md:h-[390px] h-[527px] relative w-[41%] md:w-full">
              <Img
                className="absolute h-[390px] left-[0] object-cover rounded-[32px] top-[0] w-[391px]"
                src="images/img_hispanicwoman.png"
                alt="hispanicwoman"
              />
              <Img
                className="absolute bottom-[0] h-[390px] object-cover right-[0] rounded-[32px] w-[71%]"
                src="images/img_cloudcomputing.png"
                alt="cloudcomputing"
              />
            </div>
            <div className="flex flex-col gap-[52px] items-start justify-start mb-[3px]">
              <Text
                className="leading-[60.00px] sm:text-[34px] md:text-[40px] text-[44px] text-black-900"
                size="txtInterSemiBold44Black900"
              >
                <>
                  Software development <br />
                  services
                </>
              </Text>
              <Text
                className="leading-[36.00px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtInterRegular24Black900"
              >
                <>
                  We provide traditional software outsourcing services, <br />
                  taking advantage of a team of IT experts, in order to <br />
                  bring customers the best solutions for operation and <br />
                  management at the most optimal cost.
                  <br />
                  Services provided:
                  <br />– Provide complete software solution, including business{" "}
                  <br />
                  analysis, design, software development and <br />
                  implementation.
                  <br />– Provide services at each stage according to the <br />
                  specific requirements of customers.
                </>
              </Text>
            </div>
          </div>
          <div className="flex mt-[127px] md:px-5 relative w-full">
            <div className="bg-red-A400 h-[876px] ml-[undefinedpx] my-auto w-[33%] z-[1]"></div>
            <Img
              className="h-[876px] ml-[-17px] my-auto object-cover w-[69%] z-[1]"
              src="images/img_fullshotwoman_876x1312.png"
              alt="fullshotwoman"
            />
            <div className="bg-gradient3  flex flex-col items-center justify-end ml-[undefinedpx] mr-auto my-auto p-[94px] md:px-10 sm:px-5 w-full z-[1]">
              <div className="flex md:flex-col flex-row gap-[15px] items-start justify-center mt-[25px] w-[79%] md:w-full">
                <div className="flex flex-col items-start justify-start mb-[43px] w-[98%] md:w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-start w-full">
                    <Text
                      className="mb-1 md:text-5xl text-[100px] text-white-A700_7f tracking-[-5.00px]"
                      size="txtInterBold100"
                    >
                      01.
                    </Text>
                    <Text
                      className="mb-2 sm:ml-[0] ml-[899px] sm:mt-0 mt-[97px] text-base text-white-A700"
                      size="txtInterRegular16WhiteA700"
                    >
                      Software development services
                    </Text>
                    <Text
                      className="ml-3 sm:ml-[0] sm:mt-0 mt-[87px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                      size="txtInterBold32"
                    >
                      01
                    </Text>
                  </div>
                  <Text
                    className="mt-[7px] sm:text-[34px] md:text-[40px] text-[44px] text-white-A700"
                    size="txtInterBold44WhiteA700"
                  >
                    OUTSOURCING
                  </Text>
                  <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-2.5 w-full">
                    <Text
                      className="mb-[21px] sm:text-[34px] md:text-[40px] text-[44px] text-white-A700"
                      size="txtInterBold44WhiteA700"
                    >
                      Software development services
                    </Text>
                    <div className="flex md:flex-1 sm:flex-col flex-row gap-3 items-center justify-between md:mt-0 mt-9 w-[35%] md:w-full">
                      <Text
                        className="text-base text-right text-white-A700"
                        size="txtInterRegular16WhiteA700"
                      >
                        Technology transformation, product version upgrade
                      </Text>
                      <Text
                        className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                        size="txtInterBold32"
                      >
                        02
                      </Text>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[22px] w-full">
                    <Text
                      className="leading-[36.00px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                      size="txtInterRegular24WhiteA700"
                    >
                      <>
                        We provide traditional software outsourcing services,
                        taking <br />
                        advantage of a team of IT experts, in order to bring
                        customers <br />
                        the best solutions for operation and management at the
                        most <br />
                        optimal cost.
                        <br />
                        Services provided:
                        <br />– Provide complete software solution, including
                        business analysis, <br />
                        design, software development and implementation.
                        <br />– Provide services at each stage according to the
                        specific <br />
                        requirements of customers.
                      </>
                    </Text>
                    <div className="flex flex-col md:gap-10 gap-[108px] items-center justify-start md:mt-0 mt-[85px]">
                      <div className="flex flex-row gap-3 items-center justify-between w-full">
                        <Text
                          className="text-base text-right text-white-A700"
                          size="txtInterRegular16WhiteA700"
                        >
                          Product R&D on demand
                        </Text>
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                          size="txtInterBold32"
                        >
                          03
                        </Text>
                      </div>
                      <div className="flex flex-row gap-3 items-center justify-between w-full">
                        <Text
                          className="text-base text-right text-white-A700"
                          size="txtInterRegular16WhiteA700"
                        >
                          Software testing service
                        </Text>
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                          size="txtInterBold32"
                        >
                          04
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[23px] items-center justify-start md:mt-0 mt-[43px] w-[2%] md:w-full">
                  <div className="flex relative w-[17%]">
                    <Line className="bg-white-A700 h-[572px] my-auto w-px" />
                    <Line className="bg-white-A700 h-[138px] ml-[-1px] mr-auto w-1 z-[1]" />
                  </div>
                  <Img
                    className="h-6 w-6"
                    src="images/img_checkmark.svg"
                    alt="checkmark"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:h-[1627px] sm:h-[2395px] h-[2753px] md:px-5 relative w-full">
          <div className="flex flex-row md:gap-10 h-full items-center justify-between mt-[570px] mx-auto w-[86%]">
            <Button
              className="flex h-[52px] items-center justify-center w-[52px]"
              shape="circle"
              color="red_A400_3d"
              size="xs"
              variant="fill"
            >
              <Img
                className="h-6"
                src="images/img_arrowleft.svg"
                alt="arrowleft"
              />
            </Button>
            <Button
              className="flex h-[52px] items-center justify-center w-[52px]"
              shape="circle"
              color="red_A400_3d"
              size="xs"
              variant="fill"
            >
              <Img
                className="h-6"
                src="images/img_arrowright_red_a400.svg"
                alt="arrowright"
              />
            </Button>
          </div>
          <div className="absolute md:h-[1627px] sm:h-[2395px] h-[2753px] inset-[0] justify-center m-auto w-full">
            <div className="absolute md:h-[1627px] sm:h-[2395px] h-[2753px] inset-[0] justify-center m-auto w-full">
              <div className="md:h-[1627px] sm:h-[2395px] h-[2753px] m-auto w-full">
                <div className="md:h-[1627px] sm:h-[1970px] h-[2753px] m-auto w-full">
                  <div className="flex flex-col m-auto w-full">
                    <div className="flex flex-col md:gap-10 gap-[383px] items-center justify-start mx-auto w-full">
                      <div className="bg-black-900 flex flex-col items-start justify-start p-[78px] md:px-10 sm:px-5">
                        <Text
                          className="mb-[148px] md:ml-[0] ml-[178px] text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
                          size="txtInterBold36"
                        >
                          <>
                            SUPPY PACKAGES ON THE CLOUD <br />
                            COMPUTER SYSTEM (CLOUD)
                          </>
                        </Text>
                      </div>
                      <div className="h-[1195px] relative w-full">
                        <div className="absolute bg-black-900 h-[774px] inset-[0] justify-center m-auto w-full"></div>
                        <div className="absolute h-[1195px] inset-y-[0] left-[5%] my-auto w-[83%] md:w-full">
                          <Img
                            className="h-[1195px] m-auto object-cover w-full"
                            src="images/img_image21.png"
                            alt="imageTwentyOne"
                          />
                          <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start my-auto right-[8%] w-[76%]">
                            <Text
                              className="capitalize leading-[36.00px] text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                              size="txtInterRegular24WhiteA700"
                            >
                              <>
                                To improve performance, optimize operation and
                                respond <br />
                                to modern trends with new technologies, we
                                provide services on
                              </>
                            </Text>
                            <Text
                              className="capitalize leading-[60.00px] mt-[46px] md:text-5xl sm:text-[42px] text-[56px] text-center text-white-A700"
                              size="txtInterBold56WhiteA700"
                            >
                              <>
                                Implement and put emerging technologies <br />
                                into products according to customers&#39; <br />
                                requirements
                              </>
                            </Text>
                            <Button
                              className="capitalize cursor-pointer font-medium leading-[normal] min-w-[248px] mt-28 text-center text-xl"
                              shape="round"
                              color="white_A700"
                              size="md"
                              variant="fill"
                            >
                              Find out now
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-100_01 h-[981px] mt-[-198px] w-[29%] z-[1]"></div>
                    <div className="bg-white-A700 flex flex-col items-start justify-end ml-auto mt-[-198px] p-[151px] md:px-10 sm:px-5 w-[72%] z-[1]">
                      <Text
                        className="leading-[60.00px] md:ml-[0] ml-[252px] mt-[15px] sm:text-[34px] md:text-[40px] text-[44px] text-red-A400"
                        size="txtInterSemiBold44"
                      >
                        <>
                          We have a team of experienced <br />
                          professionals, to provide our <br />
                          customers with the following <br />
                          high quality services
                        </>
                      </Text>
                      <Text
                        className="leading-[36.00px] md:ml-[0] ml-[252px] mt-[62px] text-black-900 text-xl"
                        size="txtInterRegular20"
                      >
                        <>
                          - Buy, sell, agent in machinery, equipment and
                          software in <br />
                          the fields of IT, Electronics - Telecommunications,
                          automation; <br />
                          electrical equipment;
                          <br />- Trading in, importing and exporting machinery,
                          equipment <br />
                          and software in the fields of IT, <br />
                          Electronics - Telecommunications and automation
                        </>
                      </Text>
                      <Button
                        className="capitalize cursor-pointer font-medium leading-[normal] min-w-[248px] md:ml-[0] ml-[252px] mt-[78px] text-center text-xl"
                        shape="round"
                        color="red_A400"
                        size="md"
                        variant="fill"
                      >
                        see more
                      </Button>
                    </div>
                  </div>
                  <div className="absolute bg-gray-400 bottom-[9%] flex flex-col items-center justify-start left-[17%] w-1/4">
                    <Img
                      className="h-[590px] md:h-auto object-cover w-full"
                      src="images/img_171.png"
                      alt="OneHundredSeventyOne"
                    />
                  </div>
                  <div className="absolute bg-white-A700 h-[347px] inset-x-[0] mx-auto top-[24%] w-full"></div>
                </div>
                <div className="absolute bottom-[4%] flex flex-col md:gap-10 gap-[1475px] items-center justify-start left-[13%] w-[49%]">
                  <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                    <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col gap-4 items-start justify-center p-[52px] md:px-10 sm:px-5 shadow-bs1">
                      <Text
                        className="mt-[350px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                        size="txtInterSemiBold24Black900"
                      >
                        <>
                          ICLOUD conversion <br />
                          consulting service
                        </>
                      </Text>
                      <Text
                        className="leading-[30.00px] mb-[41px] text-gray-600 text-xl"
                        size="txtInterRegular20Gray600"
                      >
                        <>
                          Provide product packages of <br />
                          VTIT on Cloud infrastructure
                        </>
                      </Text>
                    </div>
                    <div className="bg-white-A700 border border-blue_gray-100 border-solid flex md:flex-1 flex-col md:gap-10 gap-[61px] items-center justify-end shadow-bs1 w-[46%] md:w-full">
                      <div className="flex flex-col gap-4 items-start justify-start mt-[401px]">
                        <a
                          href="https://img.freepik.com/free-photo/saas-concept-collage_23-2149399285.jpg?w=1380&t=st=1693902516~exp=1693903116~hmac=a78e263254e0f16d26fe26712bfcee34eb6134fd0056718626d506a875b3ac66"
                          className="font-semibold text-2xl md:text-[22px] text-black-900 sm:text-xl"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Text>
                            <>
                              ICLOUD conversion <br />
                              consulting service
                            </>
                          </Text>
                        </a>
                        <Text
                          className="leading-[30.00px] text-black-900 text-xl"
                          size="txtInterRegular20"
                        >
                          <>
                            Cross-sell products in the Viettel <br />
                            ecosystem (Cloud infrastructure, <br />
                            ATTT, Reputa, SMEs, DMS...).
                          </>
                        </Text>
                      </div>
                      <Line className="bg-red-A400 h-0.5 w-full" />
                    </div>
                  </div>
                  <div className="bg-black-900_01 flex flex-col items-center justify-start p-[22px] sm:px-5">
                    <Text
                      className="capitalize mb-[67px] mt-1.5 text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                      size="txtInterSemiBold24WhiteA700"
                    >
                      <>
                        Supply of machinery <br />
                        and medical <br />
                        equipment in the <br />
                        fields of IT, <br />
                        Electronics - <br />
                        Telecommunications
                      </>
                    </Text>
                  </div>
                </div>
              </div>
              <div className="absolute bg-white-A700 border border-blue_gray-100 border-solid flex flex-col gap-[52px] justify-start pb-[92px] right-[12%] shadow-bs1 top-[9%] w-[23%]">
                <div className="bg-red-100 flex h-[351px] justify-end relative w-full">
                  <Img
                    className="h-4 mb-[47px] ml-[75px] mt-auto"
                    src="images/img_arrowright_blue_gray_100.svg"
                    alt="arrowright_One"
                  />
                  <Img
                    className="absolute h-[351px] inset-[0] justify-center m-auto object-cover w-full"
                    src="images/img_image52.png"
                    alt="imageFiftyTwo"
                  />
                </div>
                <div className="flex flex-col gap-4 items-start justify-start md:ml-[0] ml-[53px]">
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                    size="txtInterSemiBold24Black900"
                  >
                    <>
                      ICLOUD conversion <br />
                      consulting service
                    </>
                  </Text>
                  <Text
                    className="leading-[30.00px] text-black-900 text-xl"
                    size="txtInterRegular20"
                  >
                    <>
                      Providing service software
                      <br />
                      managed service.
                    </>
                  </Text>
                </div>
              </div>
            </div>
            <div className="absolute bg-red-100 flex flex-col items-start justify-end left-[13%] p-[46px] md:px-10 sm:px-5 top-[9%] w-[23%]">
              <Img
                className="h-4 md:ml-[0] ml-[27px] mt-[242px]"
                src="images/img_arrowright_blue_gray_100.svg"
                alt="arrowright_Two"
              />
            </div>
            <div className="absolute bg-red-100 flex flex-col inset-x-[0] items-start justify-end mx-auto p-[46px] md:px-10 sm:px-5 top-[9%] w-[23%]">
              <Img
                className="h-4 md:ml-[0] ml-[27px] mt-60"
                src="images/img_arrowright_red_a400_16x24.svg"
                alt="arrowright_Three"
              />
            </div>
            <div className="absolute flex flex-row items-center justify-between left-[16%] top-[30%] w-[56%]">
              <Button
                className="border border-blue_gray-100 border-solid flex h-[68px] items-center justify-center rounded-[50%] w-[68px]"
                shape="circle"
                color="white_A700"
                size="sm"
                variant="fill"
              >
                <Img
                  className="h-8"
                  src="images/img_arrowright_blue_gray_100_68x68.svg"
                  alt="arrowright_Four"
                />
              </Button>
              <Button
                className="border border-red-A400 border-solid flex h-[68px] items-center justify-center rounded-[50%] w-[68px]"
                shape="circle"
                color="white_A700"
                size="sm"
                variant="fill"
              >
                <Img
                  className="h-8"
                  src="images/img_arrowright_red_a400_68x68.svg"
                  alt="arrowright_Five"
                />
              </Button>
              <Button
                className="border border-blue_gray-100 border-solid flex h-[68px] items-center justify-center rounded-[50%] w-[68px]"
                shape="circle"
                color="white_A700"
                size="sm"
                variant="fill"
              >
                <Img
                  className="h-8"
                  src="images/img_arrowright_blue_gray_100_68x68.svg"
                  alt="arrowright_Six"
                />
              </Button>
            </div>
            <Img
              className="absolute h-[352px] left-[13%] object-cover top-[9%] w-[23%]"
              src="images/img_image49.png"
              alt="imageFortyNine"
            />
            <Img
              className="absolute h-[352px] inset-x-[0] mx-auto object-cover top-[9%] w-[23%]"
              src="images/img_image51.png"
              alt="imageFiftyOne"
            />
          </div>
        </div>
        <div className="flex flex-col md:gap-10 gap-[95px] justify-end mt-[94px] w-full">
          <div className="md:h-[107px] h-[113px] md:ml-[0] ml-[324px] mr-[1256px] md:px-5 relative w-[18%]">
            <div className="absolute h-[107px] inset-x-[0] mx-auto top-[0] w-[97%]">
              <Text
                className="bg-clip-text bg-gradient4  capitalize m-auto md:text-5xl text-[88px] text-center text-transparent"
                size="txtInterBold88"
              >
                Domain
              </Text>
              <Img
                className="absolute h-8 right-[15%] top-[2%] w-8"
                src="images/img_arrowright_white_a700.svg"
                alt="arrowright_Seven"
              />
            </div>
            <Text
              className="absolute bottom-[0] capitalize left-[0] md:text-5xl sm:text-[42px] text-[56px] text-black-900 text-center"
              size="txtInterBold56Black900"
            >
              Domain
            </Text>
          </div>
          <div className="md:h-[1332px] h-[1475px] sm:h-[917px] md:px-5 relative w-full">
            <div className="absolute h-[1212px] inset-x-[0] mx-auto top-[0] w-full">
              <div className="bg-blue_gray-100 flex flex-col h-[411px] sm:h-auto items-center justify-start mb-[-116px] ml-8 w-[411px] z-[1]">
                <Img
                  className="h-[411px] md:h-auto object-cover w-[411px] sm:w-full"
                  src="images/img_image45.png"
                  alt="imageFortyFive"
                />
              </div>
              <div className="bg-blue_gray-100 flex flex-col h-[411px] sm:h-auto items-center justify-start mb-[-116px] ml-[467px] w-[411px] z-[1]">
                <Img
                  className="h-[411px] md:h-auto object-cover w-[411px] sm:w-full"
                  src="images/img_image46.png"
                  alt="imageFortySix"
                />
              </div>
              <div className="bg-blue_gray-100 flex flex-col h-[411px] sm:h-auto items-center justify-start mb-[-116px] ml-auto mr-[172px] w-[411px] z-[1]">
                <Img
                  className="h-[411px] md:h-auto object-cover w-full"
                  src="images/img_image47.png"
                  alt="imageFortySeven"
                />
              </div>
              <div className="md:h-[295px] h-[411px] mb-[-116px] ml-auto mr-[607px] w-[411px] sm:w-full z-[1]">
                <Img
                  className="h-[411px] m-auto object-cover w-[411px]"
                  src="images/img_28749266927527.png"
                  alt="28749266927527"
                />
                <div className="absolute h-[411px] inset-[0] justify-center m-auto overflow-x-auto w-[411px]">
                  <div className="bg-black-900_b2 flex md:flex-col flex-row md:gap-5 h-[411px] sm:h-auto items-start justify-end overflow-auto w-[411px]">
                    <Text
                      className="md:mt-0 mt-[311px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                      size="txtInterBold24"
                    >
                      <>
                        Telecom Domain <br />
                        Name – BCCS, OSS
                      </>
                    </Text>
                    <Button
                      className="flex h-[58px] items-center justify-center mb-80 md:ml-[0] ml-[58px] md:mt-0 mt-8 rounded-[50%] w-[58px]"
                      shape="circle"
                      color="white_A700"
                      size="sm"
                      variant="fill"
                    >
                      <Img
                        className="h-7"
                        src="images/img_link21.svg"
                        alt="linkTwentyOne"
                      />
                    </Button>
                    <div className="bg-blue_gray-100 h-[411px] md:ml-[0] ml-[491px] w-[411px]"></div>
                  </div>
                </div>
              </div>
              <Img
                className="h-[411px] mb-[-116px] ml-auto object-cover w-[8%] z-[1]"
                src="images/img_image48.png"
                alt="imageFortyEight"
              />
              <Img
                className="h-[313px] mb-[undefinedpx] mt-auto mx-auto object-cover w-full z-[1]"
                src="images/img_rectangle11125_2.png"
                alt="rectangle11125"
              />
              <div className="h-[917px] mt-auto mx-auto w-full">
                <Img
                  className="h-[917px] m-auto object-cover w-full"
                  src="images/img_maskgroup1093_917x1920.png"
                  alt="maskgroup1093"
                />
                <div className="absolute flex md:flex-col flex-row md:gap-10 inset-x-[0] items-start justify-between mx-auto top-[24%] w-[68%]">
                  <Text
                    className="sm:text-[34px] md:text-[40px] text-[44px] text-white-A700"
                    size="txtInterBold44WhiteA700"
                  >
                    <>
                      Let&#39;s experience more interesting <br />
                      things about VTIT
                    </>
                  </Text>
                  <Img
                    className="h-14 md:mt-0 mt-[43px] w-14"
                    src="images/img_arrowright115.svg"
                    alt="arrowright115"
                  />
                </div>
              </div>
            </div>
            <div className="absolute bottom-[0] flex flex-col items-center justify-start pb-[428px] right-[0] w-[90%]">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <div className="flex md:flex-1 flex-col items-start justify-start w-[65%] md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                    <Img
                      className="h-[59px] md:h-auto object-cover"
                      src="images/img_asset21.png"
                      alt="assetTwentyTwo"
                    />
                    <div className="flex flex-col items-start justify-start md:mt-0 mt-[9px]">
                      <div className="flex flex-row items-start justify-between w-3/4 md:w-full">
                        <Text
                          className="text-base text-black-900 uppercase"
                          size="txtInterRegular16"
                        >
                          Home
                        </Text>
                        <Text
                          className="text-2xl md:text-[22px] text-black-900 sm:text-xl uppercase"
                          size="txtInterRegular24Black900"
                        >
                          Contact
                        </Text>
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                        <div className="flex flex-col gap-[13px] items-start justify-start mb-[5px]">
                          <Text
                            className="text-base text-black-900 uppercase"
                            size="txtInterRegular16"
                          >
                            About us
                          </Text>
                          <Text
                            className="text-base text-black-900 uppercase"
                            size="txtInterRegular16"
                          >
                            Product & Service
                          </Text>
                        </div>
                        <div className="flex flex-col items-start justify-start sm:mt-0 mt-4">
                          <Text
                            className="text-base text-black-900"
                            size="txtInterRegular16"
                          >
                            4th-5th Floor, Thanh Cong Tower
                          </Text>
                          <Text
                            className="mt-0.5 text-base text-black-900"
                            size="txtInterRegular16"
                          >
                            80 Dich Vong Hau, Cau Giay, Ha Noi
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[7px] w-[57%] md:w-full">
                    <Img
                      className="h-[18px]"
                      src="images/img_facebook.svg"
                      alt="facebook"
                    />
                    <Img
                      className="h-[18px] ml-10 md:ml-[0] w-[19px]"
                      src="images/img_volume.svg"
                      alt="volume"
                    />
                    <Img
                      className="h-[18px] ml-10 md:ml-[0] w-[19px]"
                      src="images/img_volume_black_900.svg"
                      alt="volume_One"
                    />
                    <Img
                      className="h-3 ml-11 md:ml-[0] md:mt-0 mt-[3px]"
                      src="images/img_twitter.svg"
                      alt="twitter"
                    />
                    <Text
                      className="ml-72 md:ml-[0] text-base text-black-900 uppercase"
                      size="txtInterRegular16"
                    >
                      Client partner
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-end md:ml-[0] ml-[489px] mt-[11px] w-[48%] md:w-full">
                    <Text
                      className="sm:mt-0 mt-0.5 text-base text-black-900 uppercase"
                      size="txtInterRegular16"
                    >
                      News & Event
                    </Text>
                    <Img
                      className="h-3.5 sm:ml-[0] ml-[222px]"
                      src="images/img_mail.svg"
                      alt="mail"
                    />
                    <Text
                      className="ml-3.5 sm:ml-[0] text-base text-black-900"
                      size="txtInterRegular16"
                    >
                      Vss@viettel.com.vn
                    </Text>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-2 w-[90%] md:w-full">
                    <Text
                      className="mb-1.5 text-base text-black-900"
                      size="txtInterRegular16"
                    >
                      Copyright © 2023 Soft by Viettel Software
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[166px] md:mt-0 mt-1 text-base text-black-900 uppercase"
                      size="txtInterRegular16"
                    >
                      Career opportunities
                    </Text>
                    <Img
                      className="h-3.5 md:ml-[0] ml-[146px] md:mt-0 mt-[9px]"
                      src="images/img_call.svg"
                      alt="call"
                    />
                    <Text
                      className="ml-3.5 md:ml-[0] md:mt-0 mt-1.5 text-base text-black-900"
                      size="txtInterRegular16"
                    >
                      +84 999 887777
                    </Text>
                  </div>
                </div>
                <div
                  className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[323px] items-end justify-end md:pl-10 sm:pl-5 pl-[59px] pt-[59px] w-[28%] md:w-full"
                  style={{
                    backgroundImage: "url('images/img_group19659.png')",
                  }}
                >
                  <Img
                    className="h-[263px] md:h-auto object-cover"
                    src="images/img_group19660.png"
                    alt="group19660"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DichvuPage;
