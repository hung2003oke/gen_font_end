import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Line, Text } from "components";

const DoitackhachhangPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter mx-auto relative w-full">
        <div className="md:h-[2886px] h-[3701px] m-auto md:px-5 w-full">
          <div className="md:h-[2886px] h-[3701px] m-auto w-full">
            <div className="md:h-[2886px] h-[3701px] m-auto w-full">
              <div className="absolute h-[1080px] inset-x-[0] mx-auto top-[0] w-full">
                <div className="h-[1080px] m-auto w-full">
                  <Img
                    className="absolute h-[1080px] inset-[0] justify-center m-auto object-cover w-full"
                    src="images/img_anh011.png"
                    alt="anh011"
                  />
                  <div className="absolute bg-gradient  flex flex-row gap-6 inset-x-[0] items-start justify-end mx-auto p-[70px] md:px-10 sm:px-5 top-[0] w-full">
                    <Img
                      className="h-[46px] mb-[140px] mt-[649px]"
                      src="images/img_group19822_white_a700.svg"
                      alt="group19822"
                    />
                    <Img
                      className="h-[46px] mb-[140px] mt-[649px]"
                      src="images/img_arrowup.svg"
                      alt="arrowup"
                    />
                  </div>
                </div>
                <div className="absolute bg-gradient1  flex md:flex-col flex-row md:gap-5 inset-x-[0] items-center justify-start mx-auto pb-[88px] md:pr-10 sm:pr-5 pr-[88px] top-[0] w-full">
                  <div
                    className="common-pointer flex flex-col items-start justify-start mb-[166px] md:px-10 sm:px-5 px-[72px] py-8 w-auto"
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
                      <div
                        className="common-pointer flex md:flex-col flex-row gap-14 items-center justify-center mt-auto mx-auto py-2.5 w-auto"
                        onClick={() => navigate("/vechungtoi")}
                      >
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
                    <Line className="absolute bg-red-A400 h-[3px] left-[34%] top-[0] w-[12%]" />
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
                className="absolute capitalize inset-x-[0] mx-auto sm:text-[34px] md:text-[40px] text-[44px] text-white-A700 top-[9%] w-[69%] sm:w-full"
                size="txtInterBold44WhiteA700"
              >
                “Viettel Software always focuses on customers, acts to commit to
                support, shares ideas, knowledge and experiences for mutual
                development”.
              </Text>
              <div className="absolute bg-white-A700 h-[407px] inset-x-[0] mx-auto top-[22%] w-full"></div>
              <div className="absolute bg-gray-100_01 bottom-[0] h-[2886px] inset-x-[0] mx-auto w-full"></div>
              <div className="absolute h-[917px] inset-x-[0] mx-auto top-[34%] w-full">
                <Img
                  className="h-[917px] m-auto object-cover w-full"
                  src="images/img_maskgroup1093_917x1918.png"
                  alt="maskgroup1093"
                />
                <div className="absolute flex flex-col gap-[34px] items-start justify-start left-[16%] top-[11%]">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                    size="txtInterBold32"
                  >
                    Partners customers
                  </Text>
                  <Text
                    className="sm:text-[34px] md:text-[40px] text-[44px] text-white-A700"
                    size="txtInterBold44WhiteA700"
                  >
                    <>
                      VTIT cooperates strategically and provides <br />
                      products and services to 23 customers <br />
                      and 15 partners
                    </>
                  </Text>
                </div>
              </div>
            </div>
            <div className="absolute md:gap-10 gap-[78px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 inset-x-[0] items-center justify-center mx-auto top-[19%] w-[67%]">
              <div className="bg-white-A700 flex flex-col justify-center p-[42px] md:px-10 sm:px-5 rounded-lg w-full">
                <Img
                  className="h-[94px] md:h-auto mt-2 object-cover w-[94px]"
                  src="images/img_frame_94x94.png"
                  alt="frame_One"
                />
                <Text
                  className="md:ml-[0] ml-[86px] mr-[108px] mt-[45px] text-4xl sm:text-[32px] md:text-[34px] text-red-A400"
                  size="txtInterBold36RedA400"
                >
                  Trust
                </Text>
                <Text
                  className="mb-[9px] mt-[23px] text-black-900 text-center text-xl"
                  size="txtInterRegular20"
                >
                  <>
                    Providing innovative and <br />
                    reliable solutions to meet the
                    <br />
                    needs of customers with the <br />
                    best quality, ensuring <br />
                    commitment on time and cost.
                  </>
                </Text>
              </div>
              <div className="bg-white-A700 flex flex-col items-center justify-end p-[27px] sm:px-5 rounded-lg w-full">
                <Img
                  className="h-[104px] md:h-auto mt-[17px] object-cover w-[104px]"
                  src="images/img_frame_104x104.png"
                  alt="frame_Two"
                />
                <Text
                  className="mt-[39px] text-4xl sm:text-[32px] md:text-[34px] text-red-A400"
                  size="txtInterBold36RedA400"
                >
                  Creative
                </Text>
                <Text
                  className="mt-6 text-black-900 text-center text-xl"
                  size="txtInterRegular20"
                >
                  <>
                    Constantly innovating, <br />
                    constantly looking for the <br />
                    most advanced technology and <br />
                    process solutions, helping <br />
                    customers reap surplus values <br />
                    in business.
                  </>
                </Text>
              </div>
              <div className="bg-white-A700 flex flex-col items-center justify-center p-2.5 rounded-lg w-full">
                <Img
                  className="h-[81px] md:h-auto mt-[46px] object-cover w-[81px]"
                  src="images/img_frame_81x81.png"
                  alt="frame_Three"
                />
                <Text
                  className="mt-[55px] text-4xl sm:text-[32px] md:text-[34px] text-red-A400"
                  size="txtInterBold36RedA400"
                >
                  Cooperate
                </Text>
                <Text
                  className="mb-[41px] mt-5 text-black-900 text-center text-xl"
                  size="txtInterRegular20"
                >
                  <>
                    Customer-centric, act <br />
                    committed, supportive, share <br />
                    ideas, knowledge and <br />
                    experiences to achieve common <br />
                    goals
                  </>
                </Text>
              </div>
            </div>
            <div className="absolute bg-gray-100_01 bottom-[42%] h-[476px] inset-x-[0] mx-auto w-full"></div>
          </div>
          <Img
            className="absolute bottom-[0] h-[313px] inset-x-[0] mx-auto object-cover w-full"
            src="images/img_rectangle11125_313x1919.png"
            alt="rectangle11125"
          />
        </div>
        <div className="flex flex-col items-center justify-start ml-auto mt-[-321px] pb-[433px] md:px-5 w-[90%] z-[1]">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
            <div className="flex md:flex-1 flex-col items-start justify-start w-[64%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                <Img
                  className="h-[59px] md:h-auto object-cover"
                  src="images/img_asset21.png"
                  alt="assetTwentyThree"
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
              className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[318px] items-end justify-end md:pl-10 sm:pl-5 pl-[59px] pt-[59px] w-[28%] md:w-full"
              style={{ backgroundImage: "url('images/img_group19659.png')" }}
            >
              <Img
                className="h-[258px] md:h-auto object-cover"
                src="images/img_group19660.png"
                alt="group19660"
              />
            </div>
          </div>
        </div>
        <div className="bg-white-A700 flex flex-col items-end justify-end mb-[1260px] ml-[3px] mt-[-NaNpx] p-[30px] md:px-5 rounded-br-[250px] rounded-tl-[250px] w-[83%] z-[1]">
          <div className="flex flex-col md:gap-10 gap-[91px] justify-start mr-11 mt-[71px] w-[84%] md:w-full">
            <Text
              className="bg-clip-text bg-gradient2  capitalize md:ml-[0] ml-[49px] md:text-5xl sm:text-[42px] text-[56px] text-center text-transparent"
              size="txtInterBold56"
            >
              <span className="md:text-5xl text-red-A400 font-inter text-[100px] font-bold">
                23
              </span>
              <span className="text-red-A400 font-inter font-bold"> </span>
              <span className="md:text-[40px] sm:text-[34px] text-red-A400 font-inter text-[44px] font-bold">
                Customers
              </span>
            </Text>
            <div className="flex flex-col gap-1.5 items-start justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                <Img
                  className="md:flex-1 h-[103px] sm:h-auto md:mt-0 mt-[5px] object-cover w-[21%] md:w-full"
                  src="images/img_image22.png"
                  alt="imageTwentyTwo"
                />
                <Img
                  className="md:flex-1 h-[113px] sm:h-auto md:ml-[0] ml-[75px] object-cover w-[15%] md:w-full"
                  src="images/img_image23.png"
                  alt="imageTwentyThree"
                />
                <Img
                  className="md:flex-1 h-[59px] sm:h-auto md:ml-[0] ml-[84px] md:mt-0 mt-[29px] object-cover w-[13%] md:w-full"
                  src="images/img_image24.png"
                  alt="imageTwentyFour"
                />
                <Img
                  className="md:flex-1 h-[103px] sm:h-auto md:ml-[0] ml-[102px] object-cover w-[17%] md:w-full"
                  src="images/img_image25.png"
                  alt="imageTwentyFive"
                />
                <div className="flex flex-col h-[98px] items-center justify-start md:ml-[0] ml-[107px] w-[98px]">
                  <Img
                    className="h-[98px] md:h-auto object-cover w-[98px]"
                    src="images/img_congtycophan.png"
                    alt="congtycophan"
                  />
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[3px] w-[84%] md:w-full">
                <Img
                  className="h-[146px] sm:h-auto md:mt-0 mt-[19px] object-cover w-1/4 md:w-full"
                  src="images/img_image26.png"
                  alt="imageTwentySix"
                />
                <Img
                  className="h-[132px] md:h-auto md:ml-[0] ml-[114px] md:mt-0 mt-[19px] object-cover w-[132px]"
                  src="images/img_image28.png"
                  alt="imageTwentyEight"
                />
                <Img
                  className="h-[89px] md:h-auto md:ml-[0] ml-[150px] md:mt-0 mt-[47px] object-cover w-[90px] sm:w-full"
                  src="images/img_image27.png"
                  alt="imageTwentySeven"
                />
                <Img
                  className="h-[200px] md:h-auto md:ml-[0] ml-[121px] object-cover w-[200px]"
                  src="images/img_image29.png"
                  alt="imageTwentyNine"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white-A700 flex flex-col items-start justify-start mb-[472px] ml-auto mt-[-NaNpx] p-[62px] md:px-5 rounded-br-[250px] rounded-tl-[250px] w-[83%] z-[1]">
          <div className="flex flex-col items-end justify-start my-8 w-[85%] md:w-full">
            <Text
              className="bg-clip-text bg-gradient2  capitalize md:text-5xl sm:text-[42px] text-[56px] text-center text-transparent"
              size="txtInterBold56"
            >
              <span className="md:text-5xl text-red-A400 font-inter text-[100px] font-bold">
                15
              </span>
              <span className="text-red-A400 font-inter font-bold"> </span>
              <span className="md:text-[40px] sm:text-[34px] text-red-A400 font-inter text-[44px] font-bold">
                Partners
              </span>
            </Text>
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[66px] w-[97%] md:w-full">
              <Img
                className="h-[114px] sm:h-auto md:mt-0 mt-[31px] object-cover w-[18%] md:w-full"
                src="images/img_image33.png"
                alt="imageThirtyThree"
              />
              <Img
                className="h-[132px] sm:h-auto md:ml-[0] ml-[85px] md:mt-0 mt-4 object-cover w-[13%] md:w-full"
                src="images/img_image32.png"
                alt="imageThirtyTwo"
              />
              <Img
                className="h-[159px] sm:h-auto md:ml-[0] ml-[76px] object-cover w-[18%] md:w-full"
                src="images/img_image31.png"
                alt="imageThirtyOne"
              />
              <Img
                className="h-[101px] sm:h-auto md:ml-[0] ml-[73px] md:mt-0 mt-[29px] object-cover w-[17%] md:w-full"
                src="images/img_image30.png"
                alt="imageThirty"
              />
              <div className="flex flex-col items-center justify-start md:ml-[0] ml-[117px] md:mt-0 mt-[29px] w-[6%] md:w-full">
                <div className="md:h-[92px] h-[93px] relative w-[98%]">
                  <div className="absolute flex md:h-[92px] h-[93px] inset-y-[0] justify-end left-[0] my-auto w-[96%]">
                    <Img
                      className="absolute bottom-[0] h-3 left-[0]"
                      src="images/img_arrowdown.svg"
                      alt="arrowdown"
                    />
                    <Img
                      className="absolute h-9 inset-y-[0] my-auto right-[3%]"
                      src="images/img_signal.svg"
                      alt="signal"
                    />
                    <Img
                      className="h-3 ml-[19px] mt-auto w-[13px]"
                      src="images/img_volume_blue_800.svg"
                      alt="volume_Two"
                    />
                    <div
                      className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-end justify-center m-auto pt-[13px] px-[13px] w-full"
                      style={{
                        backgroundImage: "url('images/img_group42.svg')",
                      }}
                    >
                      <Img
                        className="h-3 mt-[67px] w-3"
                        src="images/img_link.svg"
                        alt="link"
                      />
                    </div>
                  </div>
                  <Img
                    className="absolute bottom-[0] h-3 right-[0] w-[13px]"
                    src="images/img_trash.svg"
                    alt="trash"
                  />
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-1.5 w-full">
              <Img
                className="md:flex-1 h-[62px] sm:h-auto md:mt-0 mt-[73px] object-cover w-[17%] md:w-full"
                src="images/img_image34.png"
                alt="imageThirtyFour"
              />
              <Img
                className="md:flex-1 h-[89px] sm:h-auto md:ml-[0] ml-[59px] md:mt-0 mt-[57px] object-cover w-[16%] md:w-full"
                src="images/img_image35.png"
                alt="imageThirtyFive"
              />
              <Img
                className="md:flex-1 h-14 sm:h-auto ml-24 md:ml-[0] md:mt-0 mt-[66px] object-cover w-[12%] md:w-full"
                src="images/img_image36.png"
                alt="imageThirtySix"
              />
              <Img
                className="md:flex-1 h-[62px] sm:h-auto md:ml-[0] ml-[145px] md:mt-0 mt-[57px] object-cover w-[14%] md:w-full"
                src="images/img_image37.png"
                alt="imageThirtySeven"
              />
              <Img
                className="h-[155px] md:h-auto md:ml-[0] ml-[82px] object-cover w-[155px]"
                src="images/img_image38.png"
                alt="imageThirtyEight"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoitackhachhangPage;
