import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";

const CohoinghenghiepPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-end mx-auto w-full">
        <div className="flex flex-col items-center justify-end w-full">
          <div className="flex flex-col md:px-5 relative w-full">
            <div className="h-[928px] md:h-[NaNpx] mt-[-NaNpx] mx-auto w-full z-[1]">
              <div className="md:h-[1430px] h-[928px] m-auto w-full">
                <div className="flex md:flex-col flex-row md:gap-5 h-full items-center justify-evenly m-auto w-full">
                  <div className="bg-red-A400_01 flex md:flex-1 flex-col md:gap-10 gap-[436px] justify-start pb-[11px] pr-[11px] w-[28%] md:w-full">
                    <div
                      className="common-pointer flex flex-col items-start justify-start mr-[242px] md:px-10 sm:px-5 px-[72px] py-8 w-auto"
                      onClick={() => navigate("/")}
                    >
                      <Img
                        className="h-[46px] md:h-auto object-cover w-[136px] sm:w-full"
                        src="images/img_asset31.png"
                        alt="assetThirtyOne"
                      />
                    </div>
                    <Button
                      className="capitalize cursor-pointer font-medium leading-[normal] mb-[303px] min-w-[248px] md:ml-[0] ml-[274px] text-center text-xl"
                      shape="round"
                      color="white_A700"
                      size="md"
                      variant="fill"
                    >
                      Find out now
                    </Button>
                  </div>
                  <div className="flex md:h-[878px] h-[928px] justify-end relative w-[73%] md:w-full">
                    <Img
                      className="h-[878px] mt-auto mx-auto object-cover w-full"
                      src="images/img_c38a62151.png"
                      alt="c38a62151"
                    />
                    <div className="absolute bg-black-900_51 flex flex-col h-full inset-[0] items-center justify-center m-auto pb-[68px] w-full">
                      <div className="flex flex-col md:gap-10 gap-[411px] justify-start w-full">
                        <div className="bg-gradient1  flex md:flex-col flex-row gap-2 items-start justify-center p-[45px] md:px-10 sm:px-5 w-full">
                          <Text
                            className="mb-[286px] md:ml-[0] ml-[1151px] text-base text-white-A700"
                            size="txtInterMedium16"
                          >
                            Language
                          </Text>
                          <Img
                            className="h-[19px] mr-[43px] w-[19px]"
                            src="images/img_frame.svg"
                            alt="frame"
                          />
                        </div>
                        <div className="flex flex-row gap-6 items-center justify-end md:ml-[0] ml-[1189px] w-[10%] md:w-full">
                          <Img
                            className="h-[52px] w-[52px]"
                            src="images/img_alarm_white_a700_52x52.svg"
                            alt="alarm"
                          />
                          <Img
                            className="h-[52px] w-[52px]"
                            src="images/img_arrowup.svg"
                            alt="arrowup"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute flex md:flex-col flex-row gap-14 inset-x-[0] items-center justify-center mx-auto py-2.5 top-[9%] w-auto">
                  <Text
                    className="common-pointer text-base text-white-A700 w-auto"
                    size="txtInterMedium16"
                    onClick={() => navigate("/vechungtoi")}
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
                    onClick={() => navigate("/tinmoione")}
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
              </div>
              <Line className="absolute bg-white-A700 h-0.5 inset-x-[0] mx-auto top-[8%] w-[48%]" />
            </div>
            <div className="flex flex-col md:gap-10 gap-[161px] justify-start ml-[274px] mt-[-NaNpx] w-3/5 z-[1]">
              <Line className="bg-red-A400 h-[3px] md:ml-[0] ml-[865px] mr-[116px] w-[15%]" />
              <Text
                className="sm:text-[34px] md:text-[40px] text-[44px] text-white-A700 w-full"
                size="txtInterBold44WhiteA700"
              >
                We accompany you in your career development, providing a
                friendly, high-tech working environment. Here, you not only
                develop yourself, but also contribute to changing and creating a
                digital society.
              </Text>
            </div>
            <Text
              className="mb-[86px] ml-[326px] mt-[-NaNpx] sm:text-[34px] md:text-[40px] text-[44px] text-black-900 z-[1]"
              size="txtInterBold44"
            >
              Why choose US ?{" "}
            </Text>
            <Img
              className="h-[400px] mt-[-145px] mx-auto object-cover rounded-lg w-1/5 z-[1]"
              src="images/img_image45_400x371.png"
              alt="imageFortyFive"
            />
            <div className="bg-red-A400_cc flex flex-col items-start justify-start mt-[-NaNpx] mx-auto p-[26px] sm:px-5 rounded-lg w-1/5 z-[1]">
              <div className="flex flex-col gap-[26px] items-start justify-start mb-[29px] md:ml-[0] ml-[25px] w-3/4 md:w-full">
                <div className="flex flex-row items-start justify-start w-[93%] md:w-full">
                  <Text
                    className="md:text-5xl text-[140px] text-black-900"
                    size="txtInterBold140"
                  >
                    01
                  </Text>
                  <Text
                    className="mt-[100px] text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
                    size="txtInterBold36"
                  >
                    Personnel
                  </Text>
                </div>
                <Text
                  className="text-white-A700 text-xl"
                  size="txtInterRegular20WhiteA700"
                >
                  <>
                    450+ IT experts in the <br />
                    fields: BFSI, Logistic, <br />
                    Telecom, Manufactoring, <br />
                    Healthcare, Wholesales <br />& Retail…
                  </>
                </Text>
              </div>
            </div>
            <Img
              className="h-[400px] ml-auto mr-[325px] mt-[-145px] object-cover rounded-lg w-1/5 z-[1]"
              src="images/img_image46_400x371.png"
              alt="imageFortySix"
            />
            <div className="bg-red-A400_cc flex flex-col items-start justify-start ml-auto mr-[324px] mt-[-NaNpx] p-[26px] sm:px-5 rounded-lg w-1/5 z-[1]">
              <div className="flex flex-col gap-[26px] items-start justify-start mb-[54px] md:ml-[0] ml-[25px] w-[70%] md:w-full">
                <div className="flex flex-row items-start justify-evenly w-full">
                  <Text
                    className="md:text-5xl text-[140px] text-black-900"
                    size="txtInterBold140"
                  >
                    02
                  </Text>
                  <Text
                    className="mt-[100px] text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
                    size="txtInterBold36"
                  >
                    Scale
                  </Text>
                </div>
                <Text
                  className="text-white-A700 text-xl"
                  size="txtInterRegular20WhiteA700"
                >
                  <>
                    Multinational IT and <br />
                    telecommunications <br />
                    infrastructure
                  </>
                </Text>
              </div>
            </div>
          </div>
          <div className="sm:h-[1013px] md:h-[1087px] h-[2172px] mt-[78px] md:px-5 relative w-full">
            <div className="absolute md:h-[1009px] h-[2172px] sm:h-[935px] inset-[0] justify-center m-auto w-full">
              <div className="absolute md:h-[1009px] h-[1696px] sm:h-[935px] inset-[0] justify-center m-auto w-full">
                <div className="md:h-[1009px] h-[1696px] sm:h-[935px] m-auto w-full">
                  <div className="absolute md:h-[1009px] h-[1679px] sm:h-[935px] inset-[0] justify-center m-auto w-full">
                    <div className="absolute md:h-[1009px] h-[1679px] sm:h-[925px] inset-[0] justify-center m-auto w-full">
                      <div className="absolute md:h-[1009px] h-[1625px] sm:h-[921px] inset-[0] justify-center m-auto w-full">
                        <div className="absolute h-[1216px] md:h-[921px] inset-[0] justify-center m-auto w-full">
                          <div className="absolute h-[1194px] md:h-[921px] inset-[0] justify-center m-auto w-full">
                            <div className="h-[1194px] md:h-[921px] m-auto w-full">
                              <div className="absolute h-[921px] inset-x-[0] mx-auto top-[0] w-full">
                                <Img
                                  className="h-[921px] m-auto object-cover w-full"
                                  src="images/img_maskgroup1093_921x1920.png"
                                  alt="maskgroup1093"
                                />
                                <div className="absolute flex flex-col gap-[38px] h-max inset-[0] items-center justify-center m-auto">
                                  <Text
                                    className="sm:text-[34px] md:text-[40px] text-[44px] text-red-A400"
                                    size="txtInterBold44RedA400"
                                  >
                                    Preface
                                  </Text>
                                  <Text
                                    className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 text-center"
                                    size="txtInterRegular36"
                                  >
                                    <>
                                      &quot;Training is the welfare of
                                      employees&quot;, therefore, <br />
                                      at VTIT, the development and employee
                                      experience <br />
                                      is always our top priority.
                                      <br />
                                      In 2022, VTIT has invested more than 1
                                      billion to <br />
                                      deploy nearly 100 training courses for
                                      personnel <br />
                                      from staff to management team in many
                                      forms: <br />
                                      Online and Offline.
                                    </>
                                  </Text>
                                </div>
                              </div>
                              <Img
                                className="absolute bottom-[0] h-[691px] object-cover right-[0]"
                                src="images/img_group19741.png"
                                alt="group19741"
                              />
                            </div>
                            <Img
                              className="absolute bottom-[0] h-[698px] object-cover right-[0]"
                              src="images/img_group19741.png"
                              alt="group19742"
                            />
                          </div>
                          <Img
                            className="absolute bottom-[0] h-[743px] object-cover right-[0]"
                            src="images/img_group19741.png"
                            alt="group19743"
                          />
                          <div
                            className="absolute bg-cover bg-no-repeat bottom-[1%] flex flex-col h-[691px] items-center justify-end py-1 right-[0] w-[19%]"
                            style={{
                              backgroundImage:
                                "url('images/img_group19660.png')",
                            }}
                          >
                            <Img
                              className="h-[682px] md:h-auto object-cover w-full"
                              src="images/img_maskgroup.png"
                              alt="maskgroup"
                            />
                          </div>
                        </div>
                        <div className="absolute bg-white-A700 bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto p-1.5 w-full">
                          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[127px] w-3/4 md:w-full">
                            <div className="bg-gray-400 flex flex-col items-center justify-start mb-[133px] md:mt-0 mt-3 rounded-br-[56px] rounded-tl-[56px] w-[34%] md:w-full">
                              <Img
                                className="h-[246px] md:h-auto object-cover rounded-br-[58px] rounded-tl-[56px] w-full"
                                src="images/img_19377468923646.png"
                                alt="19377468923646"
                              />
                            </div>
                            <div className="flex flex-col items-start justify-start w-[47%] md:w-full">
                              <Text
                                className="sm:text-[34px] md:text-[40px] text-[44px] text-black-900"
                                size="txtInterSemiBold44Black900"
                              >
                                Outstanding training program
                              </Text>
                              <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mt-[58px] w-full">
                                <Text
                                  className="text-2xl md:text-[22px] text-red-A400 sm:text-xl"
                                  size="txtInterBold24RedA400"
                                >
                                  Information Technology Intern Training Program
                                </Text>
                                <Img
                                  className="h-6 w-6"
                                  src="images/img_arrowup_black_900.svg"
                                  alt="arrowup_One"
                                />
                              </div>
                              <div className="flex flex-col items-center justify-start mt-[21px] w-[86%] md:w-full">
                                <div className="flex flex-col items-center justify-start w-full">
                                  <Text
                                    className="text-black-900 text-xl"
                                    size="txtInterRegular20"
                                  >
                                    <>
                                      Training courses for interns majoring in
                                      IT at major schools <br />
                                      such as: University of Science and
                                      Technology, University <br />
                                      of Posts and Telecommunications, National
                                      University of <br />
                                      Technology, University of Natural
                                      Sciences, University of <br />
                                      Natural Resources & Environment.
                                    </>
                                  </Text>
                                </div>
                              </div>
                              <Line className="bg-blue_gray-100 h-px mt-[34px] w-full" />
                              <div className="flex md:flex-col flex-row gap-[38px] items-start justify-between mt-10 w-full">
                                <Text
                                  className="text-2xl md:text-[22px] text-red-A400 sm:text-xl"
                                  size="txtInterBold24RedA400"
                                >
                                  Practical training program on Project
                                  Management
                                </Text>
                                <Img
                                  className="h-6 md:mt-0 mt-[3px] w-6"
                                  src="images/img_arrowup_black_900.svg"
                                  alt="arrowup_Two"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <Img
                          className="absolute h-[861px] left-[0] object-cover top-[0]"
                          src="images/img_group19659_red_a400.png"
                          alt="group19659"
                        />
                      </div>
                      <Img
                        className="absolute h-[870px] left-[0] object-cover top-[2%]"
                        src="images/img_group19659_red_a400.png"
                        alt="group19734"
                      />
                      <Img
                        className="absolute h-[925px] left-[0] object-cover top-[0]"
                        src="images/img_group19659_red_a400.png"
                        alt="group19735"
                      />
                    </div>
                    <Img
                      className="absolute h-[861px] left-[0] object-cover top-[4%]"
                      src="images/img_group19660_gray_900_01.png"
                      alt="group19660"
                    />
                    <Img
                      className="absolute h-[935px] left-[0] object-cover top-[1%] w-1/5"
                      src="images/img_maskgroup_935x379.png"
                      alt="maskgroup_One"
                    />
                  </div>
                  <Img
                    className="absolute h-[347px] inset-x-[0] mx-auto object-cover top-[0] w-full"
                    src="images/img_rectangle11126.png"
                    alt="rectangle11126"
                  />
                </div>
                <Img
                  className="absolute h-[861px] left-[0] object-cover top-[5%] w-[18%]"
                  src="images/img_maskgroup_861x344.png"
                  alt="maskgroup_Two"
                />
              </div>
              <div className="absolute bg-gray-400 bottom-[6%] flex flex-col items-center justify-start left-[14%] rounded-bl-[56px] rounded-tr-[56px] w-[13%]">
                <Img
                  className="h-[246px] md:h-auto object-cover rounded-bl-[56px] rounded-tr-[56px] w-full"
                  src="images/img_31098000655245.png"
                  alt="31098000655245"
                />
              </div>
              <div className="absolute bg-gray-400 bottom-[0] flex flex-col items-center justify-start left-[28%] rounded-br-[56px] rounded-tl-[56px] w-1/5">
                <Img
                  className="h-[387px] md:h-auto object-cover rounded-br-[58px] rounded-tl-[56px] w-full"
                  src="images/img_20124782723646.png"
                  alt="20124782723646"
                />
              </div>
              <div className="absolute bottom-[1%] flex flex-col items-start justify-start right-[13%] w-[35%]">
                <Line className="bg-blue_gray-100 h-px w-full" />
                <div className="flex md:flex-col flex-row md:gap-[47px] items-start justify-between mt-10 w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-red-A400 sm:text-xl"
                    size="txtInterBold24RedA400"
                  >
                    <>
                      Training program: &quot;VSS Leadership Development&quot;
                    </>
                  </Text>
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowup_black_900.svg"
                    alt="arrowup_Three"
                  />
                </div>
                <Line className="bg-blue_gray-100 h-px mt-[37px] w-full" />
                <Button
                  className="capitalize cursor-pointer font-medium leading-[normal] min-w-[248px] mt-[61px] text-center text-xl"
                  shape="round"
                  color="red_A400"
                  size="md"
                  variant="fill"
                >
                  see more
                </Button>
              </div>
              <div className="absolute h-[400px] left-[17%] top-[0] w-1/5 sm:w-full">
                <Img
                  className="h-[400px] m-auto object-cover rounded-lg w-full"
                  src="images/img_image47_400x372.png"
                  alt="imageFortySeven"
                />
                <div className="absolute bg-black-900_99 flex flex-col h-full inset-[0] items-start justify-center m-auto p-[26px] sm:px-5 rounded-lg w-full">
                  <div className="flex flex-col gap-[26px] items-start justify-start mb-[53px] md:ml-[0] ml-[25px] w-[79%] md:w-full">
                    <div className="flex flex-row items-start justify-evenly w-full">
                      <Text
                        className="md:text-5xl text-[140px] text-blue_gray-100"
                        size="txtInterBold140Bluegray100"
                      >
                        03
                      </Text>
                      <Text
                        className="mt-[104px] text-4xl sm:text-[32px] md:text-[34px] text-red-A400"
                        size="txtInterBold36RedA400"
                      >
                        Technology
                      </Text>
                    </div>
                    <Text
                      className="text-white-A700 text-xl"
                      size="txtInterRegular20WhiteA700"
                    >
                      <>
                        Modern management <br />
                        systems and tools: <br />
                        AI/Big Data, ML, <br />
                        Blockchain, IOT
                      </>
                    </Text>
                  </div>
                </div>
              </div>
              <Img
                className="absolute h-[400px] inset-x-[0] mx-auto object-cover rounded-lg top-[0] w-1/5"
                src="images/img_image48_400x372.png"
                alt="imageFortyEight"
              />
            </div>
            <div className="absolute bg-black-900_99 flex flex-col inset-x-[0] items-start justify-start mx-auto p-[26px] sm:px-5 rounded-lg top-[0] w-1/5">
              <div className="flex flex-col gap-[26px] items-start justify-start mb-[53px] md:ml-[0] ml-[25px] w-[70%] md:w-full">
                <div className="flex flex-row items-start justify-evenly w-full">
                  <Text
                    className="md:text-5xl text-[140px] text-blue_gray-100"
                    size="txtInterBold140Bluegray100"
                  >
                    04
                  </Text>
                  <Text
                    className="mt-[99px] text-4xl sm:text-[32px] md:text-[34px] text-red-A400"
                    size="txtInterBold36RedA400"
                  >
                    Time
                  </Text>
                </div>
                <Text
                  className="text-white-A700 text-xl"
                  size="txtInterRegular20WhiteA700"
                >
                  <>
                    Experience in quality <br />
                    management, <br />
                    professional customer <br />
                    care
                  </>
                </Text>
              </div>
            </div>
            <Img
              className="absolute h-[400px] object-cover right-[17%] rounded-lg top-[0] w-1/5"
              src="images/img_28749266927527_400x371.png"
              alt="28749266927527"
            />
            <div className="absolute bg-black-900_99 flex flex-col items-start justify-start p-[26px] sm:px-5 right-[17%] rounded-lg top-[0] w-1/5">
              <div className="flex flex-col gap-[26px] items-center justify-start mb-[53px] md:ml-[0] ml-[25px] w-[73%] md:w-full">
                <div className="flex flex-row items-start justify-evenly w-full">
                  <Text
                    className="md:text-5xl text-[140px] text-blue_gray-100"
                    size="txtInterBold140Bluegray100"
                  >
                    05
                  </Text>
                  <Text
                    className="mt-[99px] text-4xl sm:text-[32px] md:text-[34px] text-red-A400"
                    size="txtInterBold36RedA400"
                  >
                    Client
                  </Text>
                </div>
                <Text
                  className="text-white-A700 text-xl"
                  size="txtInterRegular20WhiteA700"
                >
                  <>
                    Wide network of <br />
                    customers and partners <br />
                    in the country and <br />
                    abroad
                  </>
                </Text>
              </div>
            </div>
          </div>
          <div className="bg-gray-100_02 flex flex-col items-center justify-start mt-[135px] p-[89px] md:px-10 sm:px-5 w-full">
            <div className="flex flex-col md:gap-10 gap-[94px] items-start justify-start max-w-[1383px] mb-9 mx-auto w-full">
              <div className="md:h-20 h-[84px] relative w-[47%] md:w-full">
                <Text
                  className="absolute bg-clip-text bg-gradient4  capitalize inset-x-[0] mx-auto md:text-5xl text-[66px] text-center text-transparent top-[0] w-max"
                  size="txtInterBold66"
                >
                  <span className="text-blue_gray-100 font-inter font-bold">
                    Remuneration{" "}
                  </span>
                  <span className="text-blue_gray-100 font-inter lowercase font-bold">
                    p
                  </span>
                  <span className="text-blue_gray-100 font-inter font-bold">
                    oliy
                  </span>
                </Text>
                <Text
                  className="absolute bottom-[0] left-[0] sm:text-[34px] md:text-[40px] text-[44px] text-black-900"
                  size="txtInterBold44"
                >
                  Remuneration policy
                </Text>
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <div className="h-[298px] relative w-[23%] md:w-full">
                  <Img
                    className="h-[298px] m-auto object-cover rounded-lg w-full"
                    src="images/img_c38a6276copy1.png"
                    alt="c38a6276copyOne"
                  />
                  <div className="absolute bg-gradient5  flex flex-col h-full inset-[0] items-center justify-center m-auto p-[52px] md:px-10 sm:px-5 rounded-lg w-full">
                    <div className="flex flex-col gap-[38px] items-start justify-start mb-12 mt-1">
                      <Text
                        className="sm:text-[34px] md:text-[40px] text-[44px] text-white-A700"
                        size="txtInterBlack44"
                      >
                        7 Days
                      </Text>
                      <Text
                        className="text-white-A700 text-xl"
                        size="txtInterSemiBold20"
                      >
                        <>
                          There are 7 days off <br />
                          with full pay
                        </>
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex md:flex-1 flex-col gap-14 items-start justify-start p-[42px] md:px-10 sm:px-5 rounded-lg shadow-bs2 w-[23%] md:w-full">
                  <Img
                    className="h-14 md:h-auto object-cover w-14"
                    src="images/img_frame_56x56.png"
                    alt="frame_One"
                  />
                  <div className="flex flex-col items-center justify-start mb-[29px]">
                    <Text
                      className="text-black-900 text-xl"
                      size="txtInterSemiBold20Black900"
                    >
                      <>
                        Enjoy basic benefits of <br />
                        Employees: Sick visit, <br />
                        Birthday fruit, ...
                      </>
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 flex md:flex-1 flex-col gap-14 justify-start p-8 sm:px-5 rounded-lg shadow-bs2 w-[23%] md:w-full">
                  <Img
                    className="h-14 md:h-auto ml-2.5 md:ml-[0] mt-2.5 object-cover w-14"
                    src="images/img_frame_1.png"
                    alt="frame_Two"
                  />
                  <Text
                    className="mb-[63px] mr-[3px] text-black-900 text-xl"
                    size="txtInterSemiBold20Black900"
                  >
                    <>
                      Enjoy Insurance benefits <br />
                      according to the Law
                    </>
                  </Text>
                </div>
                <div className="bg-white-A700 flex md:flex-1 flex-col gap-14 justify-start p-8 sm:px-5 rounded-lg shadow-bs2 w-[23%] md:w-full">
                  <Img
                    className="h-14 md:h-auto ml-2.5 md:ml-[0] mt-2.5 object-cover w-14"
                    src="images/img_frame_2.png"
                    alt="frame_Three"
                  />
                  <div className="flex flex-col items-center justify-start mb-[39px]">
                    <Text
                      className="text-black-900 text-xl"
                      size="txtInterSemiBold20Black900"
                    >
                      <>
                        Be rewarded according <br />
                        to: achievements, <br />
                        projects, competitions, ...
                      </>
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Text
            className="bg-clip-text bg-gradient6  capitalize mt-[127px] sm:text-[34px] md:text-[40px] text-[44px] text-transparent"
            size="txtInterBold44RedA400"
          >
            Recruitment process
          </Text>
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-center max-w-[1163px] mt-[108px] mx-auto md:px-5 w-full">
            <Text
              className="bg-red-A400 flex h-[90px] items-center justify-center sm:px-5 rounded-[50%] sm:text-[34px] md:text-[40px] text-[44px] text-center text-white-A700 w-[90px]"
              size="txtInterBold44WhiteA700"
            >
              1
            </Text>
            <Img
              className="h-[39px] md:ml-[0] ml-[31px] md:mt-0 mt-5"
              src="images/img_group19738.svg"
              alt="group19738"
            />
            <Text
              className="bg-red-A400 flex h-[90px] items-center justify-center ml-7 md:ml-[0] sm:px-5 rounded-[50%] sm:text-[34px] md:text-[40px] text-[44px] text-center text-white-A700 w-[90px]"
              size="txtInterBold44WhiteA700"
            >
              2
            </Text>
            <Img
              className="h-[39px] ml-7 md:ml-[0] md:mt-0 mt-[19px]"
              src="images/img_group19738.svg"
              alt="group19739"
            />
            <Text
              className="bg-red-A400 flex h-[90px] items-center justify-center md:ml-[0] ml-[31px] sm:px-5 rounded-[50%] sm:text-[34px] md:text-[40px] text-[44px] text-center text-white-A700 w-[90px]"
              size="txtInterBold44WhiteA700"
            >
              3
            </Text>
            <Img
              className="h-[39px] ml-7 md:ml-[0] md:mt-0 mt-[19px]"
              src="images/img_group19738.svg"
              alt="group19740"
            />
            <Text
              className="bg-red-A400 flex h-[90px] items-center justify-center md:ml-[0] ml-[30px] sm:px-5 rounded-[50%] sm:text-[34px] md:text-[40px] text-[44px] text-center text-white-A700 w-[90px]"
              size="txtInterBold44WhiteA700"
            >
              4
            </Text>
          </div>
          <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start max-w-[1212px] mt-[30px] mx-auto md:px-5 w-full">
            <Text
              className="mb-0.5 text-2xl md:text-[22px] text-black-900 sm:text-xl"
              size="txtInterBold24Black900"
            >
              Recruitment
            </Text>
            <Text
              className="mb-0.5 sm:ml-[0] ml-[212px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
              size="txtInterBold24Black900"
            >
              Interview
            </Text>
            <Text
              className="ml-48 sm:ml-[0] text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
              size="txtInterBold24Black900"
            >
              Result announcement
            </Text>
            <Text
              className="sm:ml-[0] ml-[155px] sm:mt-0 mt-0.5 text-2xl md:text-[22px] text-black-900 sm:text-xl"
              size="txtInterBold24Black900"
            >
              Onboarding
            </Text>
          </div>
          <div className="flex flex-col mt-[13px] md:px-5 relative w-full">
            <div className="md:h-[1195px] h-[1364px] mx-auto w-full">
              <div className="absolute md:h-[1195px] h-[1350px] inset-[0] justify-center m-auto w-full">
                <div className="absolute h-[1195px] inset-x-[0] mx-auto top-[2%] w-full">
                  <Img
                    className="absolute h-[831px] inset-[0] justify-center m-auto object-cover w-full"
                    src="images/img_rectangle11067.png"
                    alt="rectangle11067"
                  />
                  <div className="absolute h-[1195px] inset-[0] justify-center m-auto w-[83%] md:w-full">
                    <Img
                      className="h-[1195px] m-auto object-cover w-full"
                      src="images/img_image21.png"
                      alt="imageTwentyOne"
                    />
                    <Text
                      className="absolute bottom-[44%] capitalize right-[29%] md:text-5xl sm:text-[42px] text-[56px] text-center text-white-A700"
                      size="txtInterBold56WhiteA700"
                    >
                      Chưa có nội dung
                    </Text>
                  </div>
                </div>
                <div className="absolute bg-white-A700 flex md:flex-col flex-row md:gap-5 inset-x-[0] items-start justify-start mx-auto pb-[125px] md:px-10 sm:px-5 px-[125px] top-[0] w-[99%]">
                  <Text
                    className="leading-[24.00px] md:ml-[0] ml-[138px] text-base text-black-900 text-center"
                    size="txtInterRegular16"
                  >
                    <>
                      Send your CV and apply now, VTIT <br />
                      always offers career opportunities <br />
                      that match your orientation
                    </>
                  </Text>
                  <Text
                    className="leading-[24.00px] md:ml-[0] ml-[91px] text-base text-black-900 text-center w-[17%] sm:w-full"
                    size="txtInterRegular16"
                  >
                    An opportunity for us to get to know you better and for you
                    to get to know us better
                  </Text>
                  <Text
                    className="leading-[24.00px] md:ml-[0] ml-[91px] text-base text-black-900 text-center w-[17%] sm:w-full"
                    size="txtInterRegular16"
                  >
                    Receive notification of results from recruitment department
                    of VTIT
                  </Text>
                  <Text
                    className="leading-[24.00px] md:ml-[0] ml-[90px] text-base text-black-900 text-center"
                    size="txtInterRegular16"
                  >
                    <>
                      Welcome to the common house VTIT
                      <br />
                      Let&#39;s start the &quot;brilliant journey&quot; with us!
                    </>
                  </Text>
                </div>
                <Img
                  className="absolute bottom-[0] h-[322px] inset-x-[0] mx-auto object-cover w-full"
                  src="images/img_rectangle11128.png"
                  alt="rectangle11128"
                />
              </div>
              <Img
                className="absolute bottom-[0] h-[313px] inset-x-[0] mx-auto object-cover w-full"
                src="images/img_rectangle11125_1.png"
                alt="rectangle11125"
              />
            </div>
            <div className="flex flex-col items-center justify-start ml-auto mt-[-341px] pb-[425px] w-[90%] z-[1]">
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-[79px] w-[65%] md:w-full">
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
                  className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[326px] items-end justify-end md:pl-10 sm:pl-5 pl-[59px] pt-[59px] w-[28%] md:w-full"
                  style={{
                    backgroundImage: "url('images/img_group19659.png')",
                  }}
                >
                  <Img
                    className="h-[266px] md:h-auto object-cover"
                    src="images/img_group19660.png"
                    alt="group19660_One"
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

export default CohoinghenghiepPage;
