import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Line, List, Text } from "components";

const TinmoiPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-end mx-auto w-full">
        <div className="flex flex-col justify-end w-full">
          <div className="flex flex-col md:px-5 relative w-full">
            <div className="h-[824px] md:h-[914px] mx-auto w-full">
              <div className="h-[824px] md:h-[914px] m-auto w-full">
                <Img
                  className="h-[824px] m-auto object-cover w-full"
                  src="images/img_z4646447358015.png"
                  alt="z4646447358015"
                />
                <div className="absolute bg-gradient1  flex md:flex-col flex-row md:gap-5 inset-x-[0] items-center justify-start mx-auto pb-[88px] md:pr-10 sm:pr-5 pr-[88px] top-[0] w-full">
                  <div
                    className="common-pointer flex flex-col items-start justify-start mb-[197px] md:px-10 sm:px-5 px-[72px] py-8 w-auto"
                    onClick={() => navigate("/")}
                  >
                    <Img
                      className="h-[46px] md:h-auto object-cover w-[136px] sm:w-full"
                      src="images/img_asset31.png"
                      alt="assetThirtyOne"
                    />
                  </div>
                  <div className="sm:h-[39px] h-[41px] md:h-[420px] md:ml-[0] ml-[220px] relative w-[51%] md:w-full">
                    <div className="h-[41px] m-auto w-full">
                      <Line className="bg-white-A700 h-0.5 mb-[-0.05px] mx-auto w-full z-[1]" />
                      <div className="flex md:flex-col flex-row gap-14 items-center justify-center mt-auto mx-auto py-2.5 w-auto">
                        <Text
                          className="text-base text-white-A700 w-auto"
                          size="txtInterMedium16"
                        >
                          About us
                        </Text>
                        <Text
                          className="common-pointer text-base text-white-A700 w-auto"
                          size="txtInterMedium16"
                          onClick={() => navigate("/dichvu")}
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
                          className="text-base text-white-A700 w-auto"
                          size="txtInterMedium16"
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
                    <Line className="absolute bg-red-A400 h-[3px] right-[36%] top-[0] w-[12%]" />
                  </div>
                  <Text
                    className="md:ml-[0] ml-[310px] text-base text-white-A700"
                    size="txtInterMedium16"
                  >
                    Language
                  </Text>
                  <Img
                    className="h-[19px] ml-2 md:ml-[0] w-[19px]"
                    src="images/img_frame.svg"
                    alt="frame"
                  />
                </div>
              </div>
              <Text
                className="absolute bottom-[35%] capitalize inset-x-[0] mx-auto sm:text-[34px] md:text-[40px] text-[44px] text-center text-red-A400 w-[64%] sm:w-full"
                size="txtInterBold44RedA400"
              >
                “We always put employee experience first with training courses
                and taking care of our spiritual life.”.
              </Text>
            </div>
            <Img
              className="h-[52px] ml-auto mr-[70px] mt-[-16px] w-[52px] z-[1]"
              src="images/img_arrowup.svg"
              alt="arrowup"
            />
            <Img
              className="h-[52px] ml-auto mr-[146px] mt-[-16px] w-[52px] z-[1]"
              src="images/img_alarm_1.svg"
              alt="alarm"
            />
          </div>
          <Text
            className="bg-clip-text bg-gradient2  capitalize md:ml-[0] ml-[684px] mr-[734px] mt-[104px] md:text-5xl sm:text-[42px] text-[56px] text-center text-transparent"
            size="txtInterBold56"
          >
            Chưa có nội dung
          </Text>
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1368px] mt-20 mx-auto md:px-5 w-full">
            <div className="md:h-[390px] h-[527px] relative w-[41%] md:w-full">
              <div className="absolute bg-gray-400_01 h-[390px] left-[0] rounded-[32px] top-[0] w-[391px]"></div>
              <div className="absolute bg-gray-500 bottom-[0] h-[390px] right-[0] rounded-[32px] w-[71%]"></div>
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
          <div className="md:h-[235px] h-[88px] md:ml-[0] ml-[340px] mr-[591px] mt-[155px] md:px-5 relative w-[52%] md:w-full">
            <Text
              className="absolute bg-clip-text bg-gradient4  capitalize inset-x-[0] mx-auto md:text-5xl text-[66px] text-center text-transparent top-[0] w-max"
              size="txtInterBold66"
            >
              VTIT is a happy shared house
            </Text>
            <Text
              className="absolute bottom-[0] capitalize left-[0] sm:text-[34px] md:text-[40px] text-[44px] text-black-900 text-center"
              size="txtInterBold44"
            >
              VTIT is a happy shared house
            </Text>
          </div>
          <div className="flex md:flex-col flex-row font-helveticaneue md:gap-5 items-center justify-center max-w-[1312px] mt-[69px] mx-auto md:px-5 w-full">
            <div className="md:h-[523px] h-[530px] relative w-[32%] md:w-full">
              <div
                className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-start justify-center m-auto p-6 sm:px-5 w-full"
                style={{ backgroundImage: "url('images/img_group57.svg')" }}
              >
                <div className="flex flex-col items-start justify-start mt-[278px] w-[72%] md:w-full">
                  <Text
                    className="text-base text-black-900"
                    size="txtHelveticaNeue16"
                  >
                    #VTIT I 24.01.2022
                  </Text>
                  <div className="flex flex-col items-center justify-start mt-[19px]">
                    <Text
                      className="text-base text-blue_gray-900"
                      size="txtHelveticaNeueBold16"
                    >
                      VIETTEL Creation Day
                    </Text>
                  </div>
                  <div className="flex flex-col font-inter items-center justify-start mt-5 w-full">
                    <Text
                      className="text-base text-gray-600"
                      size="txtInterRegular16Gray600"
                    >
                      Creativity is the key to our victory
                    </Text>
                  </div>
                  <div
                    className="bg-cover bg-no-repeat flex flex-col font-helvetica h-[33px] items-center justify-start mt-[67px] p-[7px] w-[46%] md:w-full"
                    style={{
                      backgroundImage: "url('images/img_component1308.svg')",
                    }}
                  >
                    <div className="flex flex-row gap-3.5 items-start justify-between mb-0.5 w-[81%] md:w-full">
                      <a
                        href="javascript:"
                        className="text-[13px] text-red-A400"
                      >
                        <Text size="txtHelvetica13">See more</Text>
                      </a>
                      <Img
                        className="h-[13px] mt-0.5"
                        src="images/img_arrowright_black_900.svg"
                        alt="arrowright"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <Img
                className="absolute h-[271px] inset-x-[0] mx-auto object-cover rounded-tl-[16px] rounded-tr-[16px] top-[0] w-full"
                src="images/img_anhmanhinh.png"
                alt="anhmanhinh"
              />
            </div>
            <div className="font-helvetica md:h-[525px] h-[530px] ml-11 md:ml-[0] relative w-[32%] md:w-full">
              <div className="absolute flex md:h-[525px] h-[530px] inset-[0] justify-end m-auto w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-full items-center justify-start mb-[25px] ml-[25px] mt-auto p-[7px] w-[29%]"
                  style={{
                    backgroundImage: "url('images/img_component1308.svg')",
                  }}
                >
                  <div className="flex flex-row gap-3.5 items-start justify-between mb-0.5 w-[81%] md:w-full">
                    <a href="javascript:" className="text-[13px] text-red-A400">
                      <Text size="txtHelvetica13">See more</Text>
                    </a>
                    <Img
                      className="h-[13px] mt-0.5"
                      src="images/img_arrowright_black_900.svg"
                      alt="arrowright_One"
                    />
                  </div>
                </div>
                <div className="absolute bg-white-A700 flex flex-col font-helveticaneue h-full inset-[0] items-start justify-center m-auto outline outline-[0.5px] outline-gray-600 p-6 sm:px-5 rounded-[15px] w-full">
                  <Text
                    className="mt-[278px] text-base text-black-900"
                    size="txtHelveticaNeue16"
                  >
                    #VTIT I 24.01.2022
                  </Text>
                  <div className="flex flex-col items-center justify-start mt-[19px]">
                    <Text
                      className="text-base text-blue_gray-900"
                      size="txtHelveticaNeueBold16"
                    >
                      Appreciation Night
                    </Text>
                  </div>
                  <div className="flex flex-col font-inter items-center justify-start mt-[19px]">
                    <Text
                      className="text-base text-gray-600"
                      size="txtInterRegular16Gray600"
                    >
                      <>
                        More than 400 business class <br />
                        passengers of VSS have experienced <br />
                        many different emotions and ...
                      </>
                    </Text>
                  </div>
                  <div
                    className="bg-cover bg-no-repeat flex flex-col font-helvetica h-[33px] items-center justify-start mb-0.5 mt-[30px] p-[7px] w-[33%] md:w-full"
                    style={{
                      backgroundImage: "url('images/img_component1308.svg')",
                    }}
                  >
                    <div className="flex flex-row gap-3.5 items-start justify-between mb-0.5 w-[81%] md:w-full">
                      <a
                        href="javascript:"
                        className="text-[13px] text-red-A400"
                      >
                        <Text size="txtHelvetica13">See more</Text>
                      </a>
                      <Img
                        className="h-[13px] mt-0.5"
                        src="images/img_arrowright_black_900.svg"
                        alt="arrowright_Two"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <Img
                className="absolute h-[271px] inset-x-[0] mx-auto object-cover rounded-tl-[16px] rounded-tr-[16px] top-[0] w-full"
                src="images/img_32388100313560.png"
                alt="32388100313560"
              />
            </div>
            <div className="font-helveticaneue md:h-[524px] h-[530px] md:ml-[0] ml-[43px] relative w-[32%] md:w-full">
              <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-start justify-center m-auto outline outline-[0.5px] outline-gray-600 p-6 sm:px-5 rounded-[15px] w-full">
                <Text
                  className="mt-[278px] text-base text-black-900"
                  size="txtHelveticaNeue16"
                >
                  #Work I 24.02.2022
                </Text>
                <Text
                  className="mt-[19px] text-base text-blue_gray-900"
                  size="txtHelveticaNeueBold16"
                >
                  Tech pink balloon
                </Text>
                <div className="flex flex-col items-center justify-start mt-[17px]">
                  <Text
                    className="text-base text-gray-600"
                    size="txtHelveticaNeue16Gray600"
                  >
                    <>
                      Gala night to honor the silhouettes
                      <br />
                      Technology pink has been real
                      <br />
                      meaning.
                    </>
                  </Text>
                </div>
                <div
                  className="bg-cover bg-no-repeat flex flex-col font-helvetica h-[33px] items-center justify-start mt-[34px] p-[7px] w-[33%] md:w-full"
                  style={{
                    backgroundImage: "url('images/img_component1308.svg')",
                  }}
                >
                  <div className="flex flex-row gap-3.5 items-start justify-between mb-0.5 w-[81%] md:w-full">
                    <a href="javascript:" className="text-[13px] text-red-A400">
                      <Text size="txtHelvetica13">See more</Text>
                    </a>
                    <Img
                      className="h-[13px] mt-0.5"
                      src="images/img_arrowright_black_900.svg"
                      alt="arrowright_Three"
                    />
                  </div>
                </div>
              </div>
              <Img
                className="absolute h-[271px] inset-x-[0] mx-auto object-cover rounded-tl-[16px] rounded-tr-[16px] top-[0] w-full"
                src="images/img_32336536070948.png"
                alt="32336536070948"
              />
            </div>
          </div>
          <List
            className="sm:flex-col flex-row font-helveticaneue gap-11 grid md:grid-cols-1 grid-cols-2 md:ml-[0] ml-[304px] mr-[756px] mt-[54px] md:px-5 w-[45%]"
            orientation="horizontal"
          >
            <div className="md:h-[523px] h-[531px] relative w-full">
              <div
                className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-[0] items-start justify-center m-auto p-6 sm:px-5 w-full"
                style={{ backgroundImage: "url('images/img_group57.svg')" }}
              >
                <div className="flex flex-col items-start justify-start mt-[278px] w-[81%] md:w-full">
                  <Text
                    className="text-base text-black-900"
                    size="txtHelveticaNeue16"
                  >
                    #Work I 24.01.2022
                  </Text>
                  <div className="flex flex-col items-center justify-start mt-[18px]">
                    <Text
                      className="text-base text-blue_gray-900"
                      size="txtHelveticaNeueBold16"
                    >
                      New season invincible
                    </Text>
                  </div>
                  <div className="flex flex-col font-inter items-center justify-start mt-5 w-full">
                    <Text
                      className="text-base text-gray-600"
                      size="txtInterRegular16Gray600"
                    >
                      <>
                        Overcoming the reigning champion of <br />
                        the 2022 season and a series of <br />
                        heavyweights, VTIT&#39;s strikers have...
                      </>
                    </Text>
                  </div>
                  <div
                    className="bg-cover bg-no-repeat flex flex-col font-helvetica h-[33px] items-center justify-start mt-[30px] p-[7px] w-[41%] md:w-full"
                    style={{
                      backgroundImage: "url('images/img_component1308.svg')",
                    }}
                  >
                    <div className="flex flex-row gap-3.5 items-start justify-between mb-0.5 w-[81%] md:w-full">
                      <Text
                        className="text-[13px] text-red-A400"
                        size="txtHelvetica13"
                      >
                        See more
                      </Text>
                      <Img
                        className="h-[13px] mt-0.5"
                        src="images/img_arrowright_black_900.svg"
                        alt="arrowright"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <Img
                className="absolute h-[271px] inset-x-[0] mx-auto object-cover rounded-tl-[16px] rounded-tr-[16px] top-[0] w-full"
                src="images/img_anhmanhinh.png"
                alt="anhmanhinh"
              />
              <Img
                className="absolute h-[273px] inset-x-[0] mx-auto object-cover rounded-tl-[14px] rounded-tr-[14px] top-[0] w-full"
                src="images/img_29783551822654.png"
                alt="29783551822654"
              />
            </div>
            <div className="md:h-[523px] h-[530px] relative w-full">
              <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-start justify-center m-auto outline outline-[0.5px] outline-gray-600 p-6 sm:px-5 rounded-[15px] w-full">
                <Text
                  className="mt-[278px] text-base text-black-900"
                  size="txtHelveticaNeue16"
                >
                  #Product I 24.01.2022
                </Text>
                <div className="flex flex-col items-center justify-start mt-[18px]">
                  <Text
                    className="text-base text-blue_gray-900"
                    size="txtHelveticaNeueBold16"
                  >
                    Team leader and activities
                  </Text>
                </div>
                <div className="flex flex-col font-inter items-center justify-start mt-[19px]">
                  <Text
                    className="text-base text-gray-600"
                    size="txtInterRegular16Gray600"
                  >
                    <>
                      VTIT&#39;s youth union is always the <br />
                      pioneering force in corporate culture <br />
                      activities organized by the Group and...
                    </>
                  </Text>
                </div>
                <div
                  className="bg-cover bg-no-repeat flex flex-col font-helvetica h-[33px] items-center justify-start mt-[31px] p-[7px] w-[33%] md:w-full"
                  style={{
                    backgroundImage: "url('images/img_component1308.svg')",
                  }}
                >
                  <div className="flex flex-row gap-3.5 items-start justify-between mb-0.5 w-[81%] md:w-full">
                    <Text
                      className="text-[13px] text-red-A400"
                      size="txtHelvetica13"
                    >
                      See more
                    </Text>
                    <Img
                      className="h-[13px] mt-0.5"
                      src="images/img_arrowright_black_900.svg"
                      alt="arrowright"
                    />
                  </div>
                </div>
              </div>
              <Img
                className="absolute h-[271px] inset-x-[0] mx-auto object-cover rounded-tl-[16px] rounded-tr-[16px] top-[0] w-full"
                src="images/img_32388100313560.png"
                alt="32388100313560"
              />
              <Img
                className="absolute h-[272px] inset-x-[0] mx-auto object-cover rounded-tl-[14px] rounded-tr-[14px] top-[0] w-full"
                src="images/img_31147938328711.png"
                alt="31147938328711"
              />
            </div>
          </List>
          <div className="font-inter sm:h-[1023px] h-[1185px] md:h-[1438px] mt-[106px] md:px-5 relative w-full">
            <div className="absolute h-[917px] inset-x-[0] mx-auto top-[0] w-full">
              <div className="h-[917px] m-auto w-full">
                <Img
                  className="h-[917px] m-auto object-cover w-full"
                  src="images/img_maskgroup1093_917x1920.png"
                  alt="maskgroup1093"
                />
                <div className="absolute flex md:flex-col flex-row md:gap-10 inset-x-[0] items-start justify-between mx-auto top-[17%] w-[68%]">
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
                    alt="arrowrightSixteen"
                  />
                </div>
              </div>
              <Img
                className="absolute bottom-[18%] h-[313px] inset-x-[0] mx-auto object-cover w-full"
                src="images/img_rectangle11125_3.png"
                alt="rectangle11125"
              />
            </div>
            <div className="absolute bottom-[0] flex flex-col items-center justify-start pb-[430px] right-[0] w-[90%]">
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
                  className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[321px] items-end justify-end md:pl-10 sm:pl-5 pl-[59px] pt-[59px] w-[28%] md:w-full"
                  style={{
                    backgroundImage: "url('images/img_group19659.png')",
                  }}
                >
                  <Img
                    className="h-[261px] md:h-auto object-cover"
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

export default TinmoiPage;
