import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";

const VechungtoiPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-end mx-auto w-full">
        <div className="flex flex-col items-end justify-end w-full">
          <div className="h-[1427px] md:h-[826px] md:px-5 relative w-full">
            <div className="h-[1427px] md:h-[826px] m-auto w-full">
              <div className="font-inter h-[1427px] md:h-[826px] m-auto w-full">
                <div className="flex flex-col m-auto w-full">
                  <div className="h-[1016px] md:h-[826px] mx-auto w-full">
                    <div className="absolute h-[826px] inset-x-[0] mx-auto top-[0] w-full">
                      <div className="h-[826px] m-auto w-full">
                        <div className="h-[826px] m-auto w-full">
                          <Img
                            className="h-[826px] m-auto object-cover w-full"
                            src="images/img_nasaq1p7bh3shj8unsplash.png"
                            alt="nasaq1p7bh3shjEight"
                          />
                          <div
                            className="common-pointer absolute flex flex-col items-center justify-start left-[0] md:px-10 sm:px-5 px-[72px] py-8 top-[0] w-auto"
                            onClick={() => navigate("/")}
                          >
                            <Img
                              className="h-[46px] md:h-auto object-cover w-[136px] sm:w-full"
                              src="images/img_asset31.png"
                              alt="assetThirtyOne"
                            />
                          </div>
                          <div className="absolute flex md:flex-col flex-row gap-14 inset-x-[0] items-center justify-center mx-auto py-2.5 top-[10%] w-auto">
                            <Text
                              className="text-base text-white-A700 w-auto"
                              size="txtInterMedium16"
                            >
                              About us
                            </Text>
                            <Text
                              className="common-pointer text-base text-white-A700 w-auto"
                              size="txtInterMedium16"
                              onClick={() => navigate("/dichvuone")}
                            >
                              Product & Service
                            </Text>
                            <Text
                              className="common-pointer text-base text-white-A700 w-auto"
                              size="txtInterMedium16"
                              onClick={() => navigate("/doitackhachhang")}
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
                              className="common-pointer text-base text-white-A700 w-auto"
                              size="txtInterMedium16"
                              onClick={() => navigate("/tinmoione")}
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
                        <Text
                          className="absolute right-[6%] text-base text-white-A700 top-[5%]"
                          size="txtInterMedium16"
                        >
                          Language
                        </Text>
                        <Line className="absolute bg-white-A700 h-0.5 inset-x-[0] mx-auto top-[9%] w-[48%]" />
                      </div>
                      <div className="absolute flex flex-col md:gap-10 gap-[220px] inset-x-[0] justify-start mx-auto top-[10%] w-3/5">
                        <Line className="bg-red-A400 h-[3px] md:ml-[0] ml-[101px] mr-[968px] w-[7%]" />
                        <Text
                          className="capitalize sm:text-[34px] md:text-[40px] text-[44px] text-center text-white-A700 w-full"
                          size="txtInterBold44WhiteA700"
                        >
                          <>
                            “With potential internal resources, we are proud to
                            be a new industry in Viettel Group&#39;s ecosystem,
                            changing the quality of other services and gradually
                            asserting our superiority in the industry”.
                          </>
                        </Text>
                      </div>
                      <Img
                        className="absolute h-[19px] right-[4%] top-[5%] w-[19px]"
                        src="images/img_frame.svg"
                        alt="frame"
                      />
                    </div>
                    <div className="absolute bg-white-A700 bottom-[0] flex md:flex-col flex-row font-fsmagistral md:gap-5 inset-x-[0] items-start justify-end mx-auto p-[38px] sm:px-5 w-full">
                      <Text
                        className="leading-[66.00px] md:mt-0 mt-[105px] sm:text-[34px] md:text-[40px] text-[44px] text-black-900 uppercase"
                        size="txtFSMagistralMedium44"
                      >
                        <>
                          Thư của <br />
                          Tổng Giám đốc
                        </>
                      </Text>
                      <Img
                        className="h-[52px] md:ml-[0] ml-[995px] md:mt-0 mt-20 w-[52px]"
                        src="images/img_alarm_52x52.svg"
                        alt="alarm"
                      />
                      <Img
                        className="h-[52px] ml-6 md:ml-[0] mr-[29px] md:mt-0 mt-20 w-[52px]"
                        src="images/img_arrowup.svg"
                        alt="arrowup"
                      />
                    </div>
                  </div>
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[688px] items-center justify-start ml-auto mr-[257px] mt-[-276.67px] p-[26px] sm:px-5 w-[37%] z-[1]"
                    style={{
                      backgroundImage: "url('images/img_group108.svg')",
                    }}
                  >
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[615px] items-center justify-start mb-5 p-[26px] sm:px-5 w-full"
                      style={{
                        backgroundImage: "url('images/img_group108.svg')",
                      }}
                    >
                      <Img
                        className="h-[543px] mb-[19px]"
                        src="images/img_path50762.svg"
                        alt="path50762"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-[3%] flex md:flex-col flex-row md:gap-10 items-start justify-between right-[13%] w-3/5">
                  <Text
                    className="capitalize md:mt-0 mt-[515px] text-center text-white-A700 text-xl"
                    size="txtInterBold20"
                  >
                    <span className="text-white-A700 font-inter font-normal">
                      <>
                        đ/c Bùi Trình
                        <br />
                      </>
                    </span>
                    <span className="text-white-A700 font-inter font-normal">
                      Chủ tịch kiêm Tổng Giám đốc
                    </span>
                    <span className="text-white-A700 font-inter font-bold">
                      {" "}
                    </span>
                  </Text>
                  <Img
                    className="h-[671px] md:h-auto object-cover"
                    src="images/img_maskgroup_671x709.png"
                    alt="maskgroup"
                  />
                </div>
              </div>
              <Text
                className="absolute bottom-[20%] capitalize left-[19%] md:text-5xl text-[140px] text-blue_gray-100"
                size="txtIrishGroverRegular140"
              >
                “
              </Text>
            </div>
            <div className="absolute bottom-[7%] flex flex-col items-start justify-start left-[19%] w-[29%]">
              <Text
                className="capitalize leading-[30.00px] ml-0.5 md:ml-[0] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtInterRegular24Black900"
              >
                <>
                  VTIT has a large staff system, experience <br />
                  and ability to provide services on a high-tech <br />
                  platform, operating on a large scale
                </>
              </Text>
              <div className="flex flex-row gap-[163px] items-start justify-start w-[88%] md:w-full">
                <Text
                  className="capitalize leading-[30.00px] mt-[62px] text-gray-600 text-xl"
                  size="txtInterBold20Gray600"
                >
                  <span className="text-gray-600 font-inter text-left font-semibold">
                    đồng{" "}
                  </span>
                  <span className="text-gray-600 font-inter lowercase text-left font-semibold">
                    chí
                  </span>
                  <span className="text-gray-600 font-inter text-left font-semibold">
                    {" "}
                    Bùi Trình
                  </span>
                  <span className="text-gray-600 font-inter text-left font-semibold">
                    <>
                      {" "}
                      <br />
                    </>
                  </span>
                  <span className="text-gray-600 font-inter text-left font-normal">
                    Chủ{" "}
                  </span>
                  <span className="text-gray-600 font-inter text-left font-normal">
                    tịch kiêm
                  </span>
                  <span className="text-gray-600 font-inter text-left font-normal">
                    {" "}
                    Tổng{" "}
                  </span>
                  <span className="text-gray-600 font-inter lowercase text-left font-normal">
                    Giám
                  </span>
                  <span className="text-gray-600 font-inter text-left font-normal">
                    {" "}
                    đốc
                  </span>
                  <span className="text-gray-600 font-inter text-left font-bold">
                    {" "}
                  </span>
                </Text>
                <Text
                  className="capitalize mb-[26px] rotate-[180deg] md:text-5xl text-[140px] text-blue_gray-100"
                  size="txtIrishGroverRegular140"
                >
                  “
                </Text>
              </div>
            </div>
          </div>
          <div className="sm:h-[1411px] h-[1549px] md:h-[1711px] mt-[47px] md:px-5 relative w-full">
            <div className="absolute h-[1364px] inset-x-[0] mx-auto top-[0] w-full">
              <Img
                className="h-[1364px] m-auto object-cover w-full"
                src="images/img_maskgroup1093_1364x1917.png"
                alt="maskgroup1093"
              />
              <div className="absolute flex flex-col gap-12 items-start justify-start right-[8%] top-[5%] w-[38%]">
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="sm:text-[34px] md:text-[40px] text-[44px] text-white-A700"
                    size="txtInterBold44WhiteA700"
                  >
                    Viettel Software{" "}
                  </Text>
                  <Text
                    className="mt-[37px] text-base text-white-A700"
                    size="txtInterRegular16WhiteA700"
                  >
                    <>
                      Viettel Technology Investment One Member Limited Liability
                      Company was established in 2020 <br />
                      to complete the Group&#39;s ecosystem of information
                      technology products and services, towards <br />
                      the pioneering mission of creating a digital society in
                      Vietnam.
                    </>
                  </Text>
                  <Text
                    className="mt-[22px] text-base text-white-A700"
                    size="txtInterRegular16WhiteA700"
                  >
                    <>
                      Company name: Viettel Technology Investment One Member
                      Co., Ltd
                      <br />
                      Short name: VTIT
                      <br />
                      Established year: 2020
                      <br />
                      Head office: 5th floor, Thanh Cong Building, 80 Dich Vong
                      Hau, Cau Giay, Hanoi
                    </>
                  </Text>
                  <div className="flex flex-row sm:gap-10 items-center justify-between mt-[66px] w-[74%] md:w-full">
                    <div className="flex flex-col gap-[7px] items-start justify-start">
                      <Text
                        className="sm:text-[34px] md:text-[40px] text-[44px] text-white-A700"
                        size="txtInterBold44WhiteA700"
                      >
                        400B
                      </Text>
                      <Text
                        className="text-base text-white-A700"
                        size="txtInterRegular16WhiteA700"
                      >
                        Authorized capital
                      </Text>
                    </div>
                    <div className="flex flex-col gap-1.5 items-start justify-start">
                      <Text
                        className="sm:text-[34px] md:text-[40px] text-[44px] text-white-A700"
                        size="txtInterBold44WhiteA700"
                      >
                        <>&gt;500B</>
                      </Text>
                      <Text
                        className="text-base text-white-A700"
                        size="txtInterRegular16WhiteA700"
                      >
                        Revenue
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start">
                  <Text
                    className="sm:text-[34px] md:text-[40px] text-[44px] text-white-A700"
                    size="txtInterBold44WhiteA700"
                  >
                    CMMI5, ISO 27001, ISO 9001
                  </Text>
                  <Text
                    className="mt-0.5 text-base text-white-A700"
                    size="txtInterRegular16WhiteA700"
                  >
                    International Standard
                  </Text>
                </div>
              </div>
              <Img
                className="absolute h-[655px] left-[0] object-cover top-[0] w-[52%]"
                src="images/img_businessconcep.png"
                alt="businessconcep"
              />
            </div>
            <div className="absolute bg-white-A700 bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto p-[68px] md:px-10 sm:px-5 w-full">
              <div className="flex md:flex-col flex-row gap-3.5 items-start justify-center mt-[33px] w-4/5 md:w-full">
                <div className="flex flex-col justify-start w-[66%] md:w-full">
                  <Text
                    className="bg-clip-text bg-gradient7  md:ml-[0] ml-[532px] sm:text-[34px] md:text-[40px] text-[44px] text-transparent"
                    size="txtInterBold44RedA400"
                  >
                    Vision & Mission
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[470px] mt-[15px] text-black-900 text-xl"
                    size="txtInterRegular20"
                  >
                    Transition from being hired to owning technology
                  </Text>
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[49px] items-center justify-end ml-12 md:ml-[0] mt-[91px] p-2.5 w-[71%] md:w-full"
                    style={{
                      backgroundImage: "url('images/img_group111.svg')",
                    }}
                  >
                    <div className="flex flex-row items-center justify-between mt-0.5 w-[61%] md:w-full">
                      <Text
                        className="text-center text-white-A700 text-xl"
                        size="txtInterRegular20WhiteA700"
                      >
                        2025
                      </Text>
                      <Text
                        className="text-black-900 text-center text-xl"
                        size="txtInterRegular20"
                      >
                        2030
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[47px] items-start justify-start mr-[163px] mt-[83px] w-[83%] md:w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-full"
                      size="txtInterSemiBold24Black900"
                    >
                      Become a reliable software development and outsourcing
                      partner of domestic and foreign large-scale technology
                      companies
                    </Text>
                    <div className="flex md:flex-col flex-row gap-7 items-center justify-start w-[91%] md:w-full">
                      <div className="flex flex-col md:gap-10 gap-[67px] items-center justify-start w-[8%] md:w-full">
                        <Button
                          className="flex h-14 items-center justify-center rounded-[50%] w-14"
                          shape="circle"
                          color="red_A400_14"
                          size="xs"
                          variant="fill"
                        >
                          <Img
                            className="h-[31px]"
                            src="images/img_frame_amber_a100.svg"
                            alt="frame_One"
                          />
                        </Button>
                        <Button
                          className="flex h-14 items-center justify-center rounded-[50%] w-14"
                          shape="circle"
                          color="green_500_14"
                          size="xs"
                          variant="fill"
                        >
                          <Img
                            className="h-8"
                            src="images/img_frame_green_500.svg"
                            alt="frame_Two"
                          />
                        </Button>
                        <Button
                          className="flex h-14 items-center justify-center rounded-[50%] w-14"
                          shape="circle"
                          color="indigo_A200_14"
                          size="xs"
                          variant="fill"
                        >
                          <Img
                            className="h-8"
                            src="images/img_twitter_cyan_100.svg"
                            alt="twitter"
                          />
                        </Button>
                      </div>
                      <Text
                        className="leading-[30.00px] text-black-900 text-xl"
                        size="txtInterRegular20"
                      >
                        <>
                          Top 5 in software services market in Vietnam.
                          <br />
                          <br />
                          <br />
                          <br />
                          Achieved an average revenue growth rate of 46%/year.
                          <br />
                          <br />
                          <br />
                          <br />
                          ApplicatioPioneering new technology in service
                          deliveryn Service
                        </>
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-400 h-[477px] mb-[37px] md:mt-0 mt-[210px] w-[34%]"></div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1417px] mt-[68px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col gap-[34px] items-start justify-start w-[47%] md:w-full">
              <div className="bg-gray-400 h-[246px] rounded-br-[56px] rounded-tl-[56px] w-[72%]"></div>
              <div className="flex sm:flex-col flex-row gap-[37px] items-start justify-between w-full">
                <div className="bg-gray-400 h-[246px] mb-[141px] rounded-bl-[56px] rounded-tr-[56px] w-[37%]"></div>
                <div className="bg-gray-400 h-[387px] rounded-br-[56px] rounded-tl-[56px] w-[58%]"></div>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col items-start justify-start w-[47%] md:w-full">
              <Text
                className="text-2xl md:text-[22px] text-red-A400 sm:text-xl"
                size="txtInterMedium24"
              >
                Foresight
              </Text>
              <Text
                className="mt-[22px] sm:text-[34px] md:text-[40px] text-[44px] text-black-900"
                size="txtInterSemiBold44Black900"
              >
                Next 5 years strategy
              </Text>
              <div className="flex flex-row sm:gap-10 items-start justify-between mt-[54px] w-full">
                <Text
                  className="text-2xl md:text-[22px] text-red-A400 sm:text-xl"
                  size="txtInterBold24RedA400"
                >
                  2025
                </Text>
                <Img
                  className="h-6 mt-[3px] w-6"
                  src="images/img_arrowup_black_900.svg"
                  alt="arrowup_One"
                />
              </div>
              <Text
                className="mt-10 text-black-900 text-xl"
                size="txtInterSemiBold20Black900"
              >
                Top 3 Viet Nam/ Top 10 Area
              </Text>
              <Text
                className="mt-[38px] text-black-900 text-xl"
                size="txtInterRegular20"
              >
                <>
                  Personnel: 3000+
                  <br />
                  Market: 7countries
                  <br />
                  CMMI3, ISO 27001, ISO 9001, ITIL
                </>
              </Text>
              <List
                className="flex flex-col gap-5 items-center mt-[78px] w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-[39px] items-center justify-start w-full">
                    <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-red-A400 sm:text-xl"
                        size="txtInterBold24RedA400"
                      >
                        2024
                      </Text>
                      <Img
                        className="h-6 mt-[3px] w-6"
                        src="images/img_arrowup_black_900.svg"
                        alt="arrowup"
                      />
                    </div>
                    <Line className="bg-blue_gray-100 h-px w-full" />
                  </div>
                </div>
                <Line className="self-center h-px bg-blue_gray-100 w-full" />
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-[39px] items-center justify-start w-full">
                    <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-red-A400 sm:text-xl"
                        size="txtInterBold24RedA400"
                      >
                        2023
                      </Text>
                      <Img
                        className="h-6 mt-[3px] w-6"
                        src="images/img_arrowup_black_900.svg"
                        alt="arrowup"
                      />
                    </div>
                    <Line className="bg-blue_gray-100 h-px w-full" />
                  </div>
                </div>
              </List>
              <Button
                className="capitalize cursor-pointer font-medium leading-[normal] min-w-[248px] mt-16 text-center text-xl"
                shape="round"
                color="red_A400"
                size="md"
                variant="fill"
              >
                see more
              </Button>
            </div>
          </div>
          <div className="bg-black-900_01 flex flex-col items-center justify-end mt-[107px] p-[134px] md:px-10 sm:px-5 w-full">
            <div className="flex flex-col items-center justify-start max-w-[1503px] mt-2 mx-auto w-full">
              <Text
                className="sm:text-[34px] md:text-[40px] text-[44px] text-red-A400"
                size="txtInterBold44RedA400"
              >
                History of Formation and Development
              </Text>
              <div className="flex flex-col items-center justify-start mt-[122px] w-[87%] md:w-full">
                <div className="flex flex-col gap-[30px] items-center justify-start w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-center text-red-A400 sm:text-xl"
                      size="txtInterRegular24RedA400"
                    >
                      13/08/2020
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[295px] text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                      size="txtInterRegular24WhiteA700"
                    >
                      2021
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[331px] text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                      size="txtInterRegular24WhiteA700"
                    >
                      2022
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[290px] text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                      size="txtInterRegular24WhiteA700"
                    >
                      01/09/2023
                    </Text>
                  </div>
                  <List
                    className="sm:flex-col flex-row md:gap-10 gap-[171px] grid sm:grid-cols-[repeat(0,_1fr_342px)_1fr] md:grid-cols-[repeat(1,_1fr_342px)_1fr] grid-cols-[repeat(3,_1fr_342px)_1fr] justify-center w-[93%]"
                    orientation="horizontal"
                  >
                    <div className="bg-red-A400_66 flex flex-col h-11 items-center justify-start p-2.5 rounded-[50%] w-full">
                      <div className="bg-red-A400 h-6 rounded-[50%] w-6"></div>
                    </div>
                    <Line className="self-center h-0.5 bg-blue_gray-100 w-[29%]" />
                    <div className="bg-white-A700_66 flex flex-col h-11 items-center justify-start p-2.5 rounded-[50%] w-full">
                      <div className="bg-white-A700 h-6 rounded-[50%] w-6"></div>
                    </div>
                    <Line className="self-center h-0.5 bg-blue_gray-100 w-[29%]" />
                    <div className="bg-white-A700_66 flex flex-col h-11 items-center justify-start p-2.5 rounded-[50%] w-full">
                      <div className="bg-white-A700 h-6 rounded-[50%] w-6"></div>
                    </div>
                    <Line className="self-center h-0.5 bg-blue_gray-100 w-[29%]" />
                    <div className="bg-white-A700_66 flex flex-col h-11 items-center justify-start p-2.5 rounded-[50%] w-full">
                      <div className="bg-white-A700 h-6 rounded-[50%] w-6"></div>
                    </div>
                  </List>
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[95px] w-full">
                <div className="flex h-[401px] justify-end relative w-[43%] md:w-full">
                  <div className="bg-gradient8  h-[247px] mt-auto mx-auto rotate-[-90deg] w-full"></div>
                  <div className="absolute h-[401px] inset-[0] justify-center m-auto w-full">
                    <Img
                      className="h-[401px] m-auto object-cover w-full"
                      src="images/img_20a1.png"
                      alt="20aOne"
                    />
                    <Text
                      className="absolute bottom-[7%] inset-x-[0] leading-[24.00px] mx-auto text-base text-white-A700"
                      size="txtInterRegular16WhiteA700"
                    >
                      <span className="text-white-A700 font-inter text-left font-bold">
                        <>
                          August 2020: <br />
                        </>
                      </span>
                      <span className="text-white-A700 font-inter text-left font-normal">
                        <>
                          Information Technology Service Center was born, which
                          is the 5th <br />
                          industry of Viettel Import & Export Company.
                        </>
                      </span>
                    </Text>
                  </div>
                </div>
                <div className="md:h-[274px] h-[280px] relative w-[28%] md:w-full">
                  <Img
                    className="h-[274px] m-auto object-cover w-full"
                    src="images/img_32296249423203.png"
                    alt="32296249423203"
                  />
                  <div className="absolute md:h-[274px] h-[280px] inset-[0] justify-center m-auto w-full">
                    <div className="absolute bg-black-900_5e flex flex-col h-max inset-[0] items-center justify-center m-auto pt-[115px] w-full">
                      <div className="bg-gradient8  h-[159px] rotate-[-90deg] w-full"></div>
                    </div>
                    <Text
                      className="absolute bottom-[0] inset-x-[0] leading-[18.00px] mx-auto text-white-A700 text-xs"
                      size="txtInterRegular12"
                    >
                      <span className="text-white-A700 font-inter text-left font-bold">
                        <>
                          August 2020: <br />
                        </>
                      </span>
                      <span className="text-white-A700 font-inter text-left font-normal">
                        Information Technology Service Center was born, which is
                        the 5th industry of Viettel Import & Export Company.
                      </span>
                    </Text>
                  </div>
                </div>
                <div className="h-[193px] relative w-[22%] md:w-full">
                  <Img
                    className="h-[193px] m-auto object-cover w-full"
                    src="images/img_33882208317511.png"
                    alt="33882208317511"
                  />
                  <div className="absolute bg-black-900_a5 flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                    <div className="bg-gradient8  flex flex-col items-center justify-end mt-[68px] p-[9px] w-full">
                      <Text
                        className="leading-[12.00px] mt-[63px] text-[8px] text-white-A700"
                        size="txtInterRegular8"
                      >
                        <span className="text-white-A700 font-inter text-left font-bold">
                          <>
                            August 2020: <br />
                          </>
                        </span>
                        <span className="text-white-A700 font-inter text-left font-normal">
                          Information Technology Service Center was born, which
                          is the 5th industry of Viettel Import & Export
                          Company.
                        </span>
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[1101px] md:h-[2852px] md:px-5 relative w-full">
            <Img
              className="h-[971px] mx-auto object-cover w-full"
              src="images/img_rectangle11083.png"
              alt="rectangle11083"
            />
            <div className="absolute h-[1101px] md:h-[2852px] inset-[0] justify-center m-auto w-full">
              <div className="h-[1101px] md:h-[2852px] m-auto w-full">
                <Img
                  className="h-[1101px] m-auto object-cover w-full"
                  src="images/img_maskgroup1093_1101x1920.png"
                  alt="maskgroup1093_One"
                />
                <List
                  className="absolute bottom-[12%] flex flex-col gap-9 inset-x-[0] items-center mx-auto w-[74%]"
                  orientation="vertical"
                >
                  <div className="flex md:flex-col flex-row gap-9 items-center justify-between w-full">
                    <div className="bg-gray-200 h-[325px] w-[325px]"></div>
                    <div className="bg-gray-200 h-[325px] w-[325px]"></div>
                    <div className="bg-gray-200 h-[325px] w-[324px]"></div>
                    <div className="bg-gray-200 h-[325px] w-[325px]"></div>
                  </div>
                  <div className="flex md:flex-col flex-row gap-9 items-center justify-between w-full">
                    <div className="bg-gray-200 h-[325px] w-[325px]"></div>
                    <div className="bg-gray-200 h-[325px] w-[325px]"></div>
                    <div className="bg-gray-200 h-[325px] w-[324px]"></div>
                    <div className="bg-gray-200 h-[325px] w-[325px]"></div>
                  </div>
                </List>
              </div>
              <div className="absolute flex flex-col md:gap-10 gap-[135px] inset-x-[0] items-center justify-start mx-auto top-[10%] w-[71%]">
                <Text
                  className="md:text-5xl sm:text-[42px] text-[56px] text-red-A400"
                  size="txtInterBold56"
                >
                  8 Core Values
                </Text>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[84%] md:w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-red-A400 sm:text-xl"
                        size="txtInterBold24RedA400"
                      >
                        01.
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[326px] text-2xl md:text-[22px] text-red-A400 sm:text-xl"
                        size="txtInterBold24RedA400"
                      >
                        02.
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[322px] text-2xl md:text-[22px] text-red-A400 sm:text-xl"
                        size="txtInterBold24RedA400"
                      >
                        03.
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[321px] text-2xl md:text-[22px] text-red-A400 sm:text-xl"
                        size="txtInterBold24RedA400"
                      >
                        04.
                      </Text>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[15px] w-full">
                      <div className="flex md:flex-1 flex-col gap-4 items-start justify-start w-[45%] md:w-full">
                        <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-[91%] md:w-full">
                          <Text
                            className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                            size="txtInterBold24Black900"
                          >
                            <>
                              Practice is the <br />
                              criterion for testing <br />
                              the truth
                            </>
                          </Text>
                          <Text
                            className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                            size="txtInterBold24Black900"
                          >
                            <>
                              Grow through <br />
                              challenges and <br />
                              failures
                            </>
                          </Text>
                        </div>
                        <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                          <Text
                            className="text-base text-black-900"
                            size="txtInterRegular16"
                          >
                            <>
                              Understand customers&#39; problems, <br />
                              thereby applying industry <br />
                              knowledge to Digitize operating <br />
                              processes for customers with the <br />
                              motto: Professionalism, efficiency
                            </>
                          </Text>
                          <Text
                            className="text-base text-black-900"
                            size="txtInterRegular16"
                          >
                            <>
                              Improvement, continuous <br />
                              improvement, next time better <br />
                              than last time. Optimize labor <br />
                              productivity, improve efficiency
                            </>
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-4 items-start justify-start md:ml-[0] ml-[123px]">
                        <Text
                          className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                          size="txtInterBold24Black900"
                        >
                          <>
                            Quick adaptation is a <br />
                            competitive strength
                          </>
                        </Text>
                        <Text
                          className="text-base text-black-900"
                          size="txtInterRegular16"
                        >
                          <>
                            Ready to Adapt and Go Globally to <br />
                            Meet International Technology <br />
                            Standards
                          </>
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[94px]">
                        <Text
                          className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                          size="txtInterBold24Black900"
                        >
                          Creativity is life
                        </Text>
                        <Text
                          className="text-base text-black-900"
                          size="txtInterRegular16"
                        >
                          <>
                            Continuously creating for <br />
                            customers, Continuously <br />
                            innovating technology, Creative <br />
                            thinking, innovative thinking and <br />
                            always Creating an environment, <br />
                            recognizing and honoring the <br />
                            smallest creative ideas
                          </>
                        </Text>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[115px] w-[84%] md:w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-red-A400 sm:text-xl"
                        size="txtInterBold24RedA400"
                      >
                        05.
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[322px] text-2xl md:text-[22px] text-red-A400 sm:text-xl"
                        size="txtInterBold24RedA400"
                      >
                        06.
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[322px] text-2xl md:text-[22px] text-red-A400 sm:text-xl"
                        size="txtInterBold24RedA400"
                      >
                        07.
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[325px] text-2xl md:text-[22px] text-red-A400 sm:text-xl"
                        size="txtInterBold24RedA400"
                      >
                        08.
                      </Text>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[15px] w-full">
                      <div className="flex md:flex-1 flex-col gap-[13px] items-center justify-start w-[47%] md:w-full">
                        <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                          <Text
                            className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                            size="txtInterBold24Black900"
                          >
                            Knowledge system
                          </Text>
                          <Text
                            className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                            size="txtInterBold24Black900"
                          >
                            Combining East - West
                          </Text>
                        </div>
                        <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-[99%] md:w-full">
                          <Text
                            className="text-base text-black-900"
                            size="txtInterRegular16"
                          >
                            <>
                              Governance Digitization and <br />
                              Data-Based Decision Making for <br />
                              Process Optimization and <br />
                              Synchronization
                            </>
                          </Text>
                          <Text
                            className="text-base text-black-900"
                            size="txtInterRegular16"
                          >
                            <>
                              Having a Multi-Dimensional View, <br />
                              Resonating the Power of <br />
                              Compliance and Creativity for <br />
                              Cross-Cultural Adaptation
                            </>
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-4 items-start justify-start">
                        <Text
                          className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                          size="txtInterBold24Black900"
                        >
                          <>
                            Practice is the <br />
                            criterion for testing <br />
                            the truth
                          </>
                        </Text>
                        <Text
                          className="text-base text-black-900"
                          size="txtInterRegular16"
                        >
                          <>
                            Understand customers&#39; problems, <br />
                            thereby applying industry <br />
                            knowledge to Digitize operating <br />
                            processes for customers with the <br />
                            motto: Professionalism, efficiency
                          </>
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[17px] items-start justify-start">
                        <Text
                          className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                          size="txtInterBold24Black900"
                        >
                          <>
                            VTIT is a common <br />
                            house
                          </>
                        </Text>
                        <Text
                          className="text-base text-black-900"
                          size="txtInterRegular16"
                        >
                          <>
                            Same purpose, same goal. Always <br />
                            Caring, Connecting, Resonating <br />
                            to work together towards success <br />
                            and happiness
                          </>
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 gap-[154px] items-start justify-center max-w-[1358px] mt-[110px] mx-auto md:px-5 w-full">
            <div className="flex flex-col relative w-[45%] md:w-full">
              <div className="md:h-[418px] h-[606px] mx-auto w-full">
                <div className="md:h-[418px] h-[606px] m-auto w-full">
                  <div className="absolute bottom-[0] h-[418px] left-[0] w-[418px] sm:w-full">
                    <div className="bg-blue_gray-700 h-[370px] m-auto rounded-[50%] w-[370px]"></div>
                    <div className="absolute border border-red-A400 border-solid flex flex-col sm:h-auto h-full inset-[0] items-center justify-center m-auto p-3 rounded-[50%] w-[418px]">
                      <div className="border border-red-A400_66 border-solid h-[390px] mb-1 rounded-[50%] w-[390px]"></div>
                    </div>
                  </div>
                  <div className="absolute flex flex-col h-[247px] items-center justify-start right-[0] top-[0] w-[247px]">
                    <Img
                      className="h-[247px] md:h-auto rounded-[50%] w-[247px]"
                      src="images/img_anhtuannguyan.png"
                      alt="anhtuannguyan"
                    />
                  </div>
                </div>
                <div className="absolute bottom-[4%] flex flex-col items-center justify-start left-[4%] w-[62%]">
                  <Img
                    className="h-[370px] md:h-auto object-cover rounded-bl-[185px] rounded-br-[185px] w-full"
                    src="images/img_anhtranh2.png"
                    alt="anhtranhTwo"
                  />
                </div>
              </div>
              <div className="flex flex-col h-[247px] items-center justify-start ml-auto mt-[-52px] w-[247px] z-[1]">
                <Img
                  className="h-[247px] md:h-auto rounded-[50%] w-[247px]"
                  src="images/img_z4648285741928.png"
                  alt="z4648285741928"
                />
              </div>
            </div>
            <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-[146px] w-[45%] md:w-full">
              <Text
                className="sm:text-[34px] md:text-[40px] text-[44px] text-red-A400"
                size="txtInterBold44RedA400"
              >
                Đ/c Bùi Trình
              </Text>
              <Text
                className="mt-4 text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtInterRegular24Black900"
              >
                President and CEO
              </Text>
              <Text
                className="leading-[36.00px] mt-[89px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtInterRegular24Black900"
              >
                <>
                  Joining Viettel since 2014, Mr. Trinh has participated <br />
                  in many positions from engineering, business to
                  <br />
                  foreign investment at many units in the Group. <br />
                  In particular, he is a pioneer in building new business <br />
                  fields with a strong entrepreneurial spirit, building <br />
                  strong companies from scratch and contributing <br />a lot of
                  value to the Group&#39;s ecosystem.
                </>
              </Text>
              <div className="flex flex-row gap-2 items-center justify-start md:ml-[0] ml-[3px] mt-[111px] w-[45%] md:w-full">
                <div className="bg-red-A400 h-2.5 w-[42%]"></div>
                <div className="bg-blue_gray-100 h-2.5 w-[27%]"></div>
                <div className="bg-blue_gray-100 h-2.5 w-[27%]"></div>
              </div>
            </div>
          </div>
          <Text
            className="mr-[473px] mt-[191px] sm:text-[34px] md:text-[40px] text-[44px] text-red-A400"
            size="txtInterBold44RedA400"
          >
            <span className="text-black-900 font-inter text-left font-bold">
              Proceess System
            </span>
            <span className="text-red-A400 font-inter text-left font-bold">
              {" "}
              International Certifications{" "}
            </span>
          </Text>
          <div
            className="bg-cover bg-no-repeat flex flex-col h-[49px] items-start justify-end mr-[627px] mt-[59px] p-2 md:px-5 w-[35%] md:w-full"
            style={{ backgroundImage: "url('images/img_group111.svg')" }}
          >
            <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between md:ml-[0] ml-[26px] mt-1 w-[85%] md:w-full">
              <Text
                className="mb-0.5 text-white-A700 text-xl"
                size="txtInterRegular20WhiteA700"
              >
                International Certifications
              </Text>
              <Text
                className="sm:mt-0 mt-0.5 text-black-900 text-xl"
                size="txtInterRegular20"
              >
                Proceess System
              </Text>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mr-[398px] mt-[107px] md:px-5 w-[59%] md:w-full">
            <Img
              className="h-[165px] sm:h-auto object-cover w-[30%] md:w-full"
              src="images/img_image40.png"
              alt="imageForty"
            />
            <Img
              className="h-[165px] sm:h-auto md:ml-[0] ml-[117px] object-cover w-1/4 md:w-full"
              src="images/img_image41.png"
              alt="imageFortyOne"
            />
            <Img
              className="h-[165px] sm:h-auto md:ml-[0] ml-[163px] object-cover w-[21%] md:w-full"
              src="images/img_image42.png"
              alt="imageFortyTwo"
            />
          </div>
          <footer className="flex items-center justify-center mt-[239px] md:px-5 w-full">
            <div className="flex flex-col items-center justify-center mb-[446px] w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <ul className="flex md:flex-1 flex-col gap-2.5 items-start justify-start w-[65%] md:w-full common-column-list">
                  <li>
                    <a href="javascript:">
                      <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between">
                        <Img
                          className="h-[59px] md:h-auto object-cover"
                          src="images/img_asset21.png"
                          alt="assetTwentyOne"
                        />
                        <div className="flex flex-col gap-[5px] items-start justify-start md:mt-0 mt-2">
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
                            <div className="flex flex-col gap-4 items-start justify-start mb-1.5">
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
                            <div className="flex flex-col items-start justify-start sm:mt-0 mt-[18px]">
                              <Text
                                className="text-base text-black-900"
                                size="txtInterRegular16"
                              >
                                4th-5th Floor, Thanh Cong Tower
                              </Text>
                              <Text
                                className="mt-1 text-base text-black-900"
                                size="txtInterRegular16"
                              >
                                80 Dich Vong Hau, Cau Giay, Ha Noi
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:">
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start">
                        <Img
                          className="h-5 w-5"
                          src="images/img_facebook.svg"
                          alt="facebook"
                        />
                        <Img
                          className="h-5 ml-10 md:ml-[0] w-[19px]"
                          src="images/img_volume.svg"
                          alt="volume"
                        />
                        <Img
                          className="h-5 ml-10 md:ml-[0] w-[19px]"
                          src="images/img_volume_black_900.svg"
                          alt="volume_One"
                        />
                        <Img
                          className="h-[13px] ml-11 md:ml-[0] md:mt-0 mt-1"
                          src="images/img_twitter.svg"
                          alt="twitter_One"
                        />
                        <Text
                          className="mb-0.5 ml-72 md:ml-[0] text-base text-black-900 uppercase"
                          size="txtInterRegular16"
                        >
                          Client partner
                        </Text>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:">
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-end md:ml-[0] ml-[489px]">
                        <Text
                          className="sm:mt-0 mt-0.5 text-base text-black-900 uppercase"
                          size="txtInterRegular16"
                        >
                          News & Event
                        </Text>
                        <Img
                          className="h-4 sm:ml-[0] ml-[222px] w-4"
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
                    </a>
                  </li>
                  <li>
                    <a href="javascript:">
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start">
                        <Text
                          className="mb-[7px] text-base text-black-900"
                          size="txtInterRegular16"
                        >
                          Copyright © 2023 Soft by Viettel Software
                        </Text>
                        <Text
                          className="mb-0.5 md:ml-[0] ml-[166px] md:mt-0 mt-[5px] text-base text-black-900 uppercase"
                          size="txtInterRegular16"
                        >
                          Career opportunities
                        </Text>
                        <Img
                          className="h-4 md:ml-[0] ml-[146px] md:mt-0 mt-2.5 w-4"
                          src="images/img_call.svg"
                          alt="call"
                        />
                        <Text
                          className="ml-3.5 md:ml-[0] md:mt-0 mt-[7px] text-base text-black-900"
                          size="txtInterRegular16"
                        >
                          +84 999 887777
                        </Text>
                      </div>
                    </a>
                  </li>
                </ul>
                <div
                  className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[370px] items-end justify-end md:pl-10 sm:pl-5 pl-[65px] pt-[65px] w-[28%] md:w-full"
                  style={{ backgroundImage: "url('images/img_group433.png')" }}
                >
                  <Img
                    className="h-[304px] md:h-auto object-cover"
                    src="images/img_group19660_gray_900_01_304x406.png"
                    alt="group19660"
                  />
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default VechungtoiPage;
