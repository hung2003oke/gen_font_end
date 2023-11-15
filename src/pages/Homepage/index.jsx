import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";

const HomepagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-end mx-auto w-full">
        <div className="flex flex-col items-center justify-end w-full">
          <div className="flex flex-col md:px-5 relative w-full">
            <div className="md:h-[1080px] h-[1220px] mx-auto w-full">
              <div className="absolute h-[1080px] inset-x-[0] mx-auto top-[0] w-full">
                <Img
                  className="h-[1080px] m-auto object-cover w-full"
                  src="images/img_anh011.png"
                  alt="anh011"
                />
                <div className="absolute bg-gradient  flex flex-row gap-6 inset-x-[0] items-start justify-end mx-auto p-[70px] md:px-10 sm:px-5 top-[0] w-full">
                  <Img
                    className="h-[52px] mb-[58px] mt-[738px] w-[52px]"
                    src="images/img_alarm.svg"
                    alt="alarm"
                  />
                  <Img
                    className="h-[52px] mb-[58px] mt-[738px] w-[52px]"
                    src="images/img_arrowup.svg"
                    alt="arrowup"
                  />
                </div>
              </div>
              <div className="absolute bg-gradient1  flex flex-col inset-x-[0] items-center justify-start mx-auto pb-[238px] top-[0] w-full">
                <header className="bg-black-900 flex md:flex-col md:gap-5 items-center justify-center w-full">
                  <Line className="bg-white-A700 h-0.5 mb-11 md:mt-0 mt-[78px] mx-auto w-[48%]" />
                  <div className="flex md:flex-1 md:flex-col flex-row md:gap-5 items-center justify-start mb-1.5 mr-[88px] w-[96%] md:w-full">
                    <div className="flex flex-col items-center justify-start mb-2.5 p-8 sm:px-5 w-[16%] md:w-full">
                      <Img
                        className="h-[46px] md:h-auto object-cover w-[63%]"
                        src="images/img_asset31.png"
                        alt="assetThirtyOne"
                      />
                    </div>
                    <ul className="flex md:flex-col flex-row gap-14 md:hidden items-center justify-center md:ml-[0] ml-[220px] py-2.5 w-auto md:w-full common-row-list">
                      <li>
                        <a className="text-base text-white-A700">
                          <Text
                            className="common-pointer"
                            size="txtInterMedium16"
                            onClick={() => navigate("/vechungtoi")}
                          >
                            About us
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a className="text-base text-white-A700">
                          <Text
                            className="common-pointer"
                            size="txtInterMedium16"
                            onClick={() => navigate("/dichvuone")}
                          >
                            Product & Service
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-base text-white-A700"
                        >
                          <Text size="txtInterMedium16">Client partner</Text>
                        </a>
                      </li>
                      <li>
                        <a className="text-base text-white-A700">
                          <Text
                            className="common-pointer"
                            size="txtInterMedium16"
                            onClick={() => navigate("/tinmoione")}
                          >
                            News & Event
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a className="text-base text-white-A700">
                          <Text
                            className="common-pointer"
                            size="txtInterMedium16"
                            onClick={() => navigate("/cohoinghenghiep")}
                          >
                            Career opportunities
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-base text-white-A700"
                        >
                          <Text size="txtInterMedium16">Contact</Text>
                        </a>
                      </li>
                    </ul>
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
                </header>
              </div>
              <div className="absolute bg-white-A700 bottom-[0] h-[321px] inset-x-[0] mx-auto w-full"></div>
            </div>
            <div className="flex flex-col items-center justify-start mt-[-99.72px] mx-auto w-[51%] z-[1]">
              <div className="flex flex-col items-center justify-start w-full">
                <Text
                  className="sm:text-[34px] md:text-[40px] text-[44px] text-red-A400"
                  size="txtInterSemiBold44"
                >
                  Why choose US ?{" "}
                </Text>
                <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start mt-[58px] w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-center text-gray-600 sm:text-xl"
                    size="txtInterRegular24"
                  >
                    <>
                      450+ <br />
                      IT Specialist
                    </>
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[182px] text-2xl md:text-[22px] text-center text-red-A400 sm:text-xl"
                    size="txtInterRegular24RedA400"
                  >
                    Multinational IT
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[221px] text-2xl md:text-[22px] text-center text-gray-600 sm:text-xl"
                    size="txtInterRegular24"
                  >
                    <>
                      Customers in
                      <br />
                      and abroad
                    </>
                  </Text>
                </div>
                <Img
                  className="h-11 mt-[19px]"
                  src="images/img_frame4.svg"
                  alt="frameFour"
                />
              </div>
            </div>
            <div className="bg-white-A700 flex md:flex-col flex-row gap-2.5 items-center justify-start mb-[357px] mt-[-NaNpx] mx-auto rounded-[104px] shadow-bs w-auto z-[1]">
              <Img
                className="h-[99px] w-[99px]"
                src="images/img_frame_gray_600.svg"
                alt="frame_One"
              />
              <div className="flex flex-col gap-[17px] items-start justify-start">
                <Text
                  className="capitalize text-4xl sm:text-[32px] md:text-[34px] text-black-900"
                  size="txtInterMedium36"
                >
                  Answers to Your eyee Questions!
                </Text>
                <Text
                  className="capitalize text-black-900 text-xl"
                  size="txtInterRegular20"
                >
                  If you have any questions, please email us for the best answer
                </Text>
              </div>
              <Button
                className="capitalize cursor-pointer font-medium leading-[normal] min-w-[248px] text-center text-xl"
                shape="round"
                color="red_A400"
                size="md"
                variant="fill"
              >
                Send Email
              </Button>
            </div>
          </div>
          <div className="md:h-[1005px] h-[877px] mt-32 md:px-5 relative w-full">
            <div className="bg-gray-100 h-[877px] m-auto w-full"></div>
            <div className="absolute h-[877px] inset-[0] justify-center m-auto w-full">
              <Img
                className="h-[877px] m-auto object-cover w-full"
                src="images/img_fullshotwoman.png"
                alt="fullshotwoman"
              />
              <div className="absolute bg-blue_gray-100_66 flex flex-col h-max inset-[0] items-center justify-center m-auto p-[31px] sm:px-5 rounded-[50%] w-[132px]">
                <Img
                  className="h-[70px] w-[70px]"
                  src="images/img_frame_gray_600_70x70.svg"
                  alt="frame_Two"
                />
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1594px] mt-[132px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col items-center justify-start w-1/2 md:w-full">
              <Text
                className="sm:text-[34px] md:text-[40px] text-[44px] text-black-900"
                size="txtInterBold44"
              >
                Project Product
              </Text>
              <Text
                className="mt-3 text-2xl md:text-[22px] text-gray-600 sm:text-xl"
                size="txtInterSemiBold24"
              >
                Ready to bring the best experience
              </Text>
              <div className="flex flex-col items-start justify-start mt-[125px] w-full">
                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-[83%] md:w-full">
                  <div className="flex flex-row gap-2 items-start justify-start w-[42%] sm:w-full">
                    <Text
                      className="text-4xl sm:text-[32px] md:text-[34px] text-red-A400"
                      size="txtInterSemiBold36"
                    >
                      01.
                    </Text>
                    <Text
                      className="mt-4 text-black-900 text-xl"
                      size="txtInterRegular20"
                    >
                      <>
                        Outsourcing services, <br />
                        software development
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[7px] items-start justify-start w-[38%] sm:w-full">
                    <Text
                      className="text-4xl sm:text-[32px] md:text-[34px] text-red-A400"
                      size="txtInterSemiBold36"
                    >
                      03.
                    </Text>
                    <Text
                      className="mt-4 text-black-900 text-xl"
                      size="txtInterRegular20"
                    >
                      <>
                        New Technology <br />
                        Application Service
                      </>
                    </Text>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[71px] w-full">
                  <div className="flex md:flex-1 flex-row gap-2 items-start justify-start w-2/5 md:w-full">
                    <Text
                      className="text-4xl sm:text-[32px] md:text-[34px] text-red-A400"
                      size="txtInterSemiBold36"
                    >
                      02.
                    </Text>
                    <Text
                      className="mt-4 text-black-900 text-xl"
                      size="txtInterRegular20"
                    >
                      <>
                        Provide product packages <br />
                        on cloud computing <br />
                        infrastructure (Cloud)
                      </>
                    </Text>
                  </div>
                  <div className="flex md:flex-1 sm:flex-col flex-row gap-[7px] items-start justify-start w-[49%] md:w-full">
                    <Text
                      className="text-4xl sm:text-[32px] md:text-[34px] text-red-A400"
                      size="txtInterSemiBold36"
                    >
                      04.
                    </Text>
                    <Text
                      className="sm:mt-0 mt-4 text-black-900 text-xl"
                      size="txtInterRegular20"
                    >
                      <>
                        Supply of machinery and <br />
                        equipment in the field of IT, <br />
                        Electronics - Telecommunications
                      </>
                    </Text>
                  </div>
                </div>
                <Button
                  className="cursor-pointer font-medium leading-[normal] min-w-[248px] md:ml-[0] ml-[228px] mt-[100px] text-center text-xl"
                  shape="round"
                  color="red_A400"
                  size="md"
                  variant="fill"
                >
                  Find out more
                </Button>
              </div>
            </div>
            <div className="md:h-[337px] h-[548px] relative w-[42%] md:w-full">
              <div className="absolute md:h-[331px] h-[514px] inset-x-[0] mx-auto top-[0] w-full">
                <div className="md:h-[331px] h-[514px] m-auto w-full">
                  <div className="md:h-[303px] h-[514px] m-auto w-full">
                    <div className="absolute md:h-[303px] h-[454px] left-[0] top-[0] w-[89%] sm:w-full">
                      <div className="absolute bg-blue_gray-100 bottom-[0] h-[303px] left-[0] w-[86%]"></div>
                      <div className="absolute bg-blue_gray-100 h-[303px] right-[0] top-[0] w-[86%]"></div>
                    </div>
                    <div className="absolute bg-blue_gray-100 bottom-[0] h-[303px] right-[0] w-[76%]"></div>
                  </div>
                  <Img
                    className="absolute h-[331px] inset-x-[0] mx-auto object-cover top-[0] w-[76%]"
                    src="images/img_50836491.png"
                    alt="50836491"
                  />
                </div>
                <Img
                  className="absolute bottom-[12%] h-[304px] left-[0] object-cover w-[70%]"
                  src="images/img_fullshotwoman_304x456.png"
                  alt="fullshotwoman_One"
                />
              </div>
              <Img
                className="absolute bottom-[0] h-[337px] object-cover right-[0] w-[78%]"
                src="images/img_businessconcep.png"
                alt="businessconcep"
              />
            </div>
          </div>
          <div className="md:h-[771px] h-[917px] mt-[110px] md:px-5 relative w-full">
            <div className="absolute md:h-[661px] h-[917px] inset-[0] justify-center m-auto w-full">
              <div className="absolute md:h-[661px] h-[917px] inset-[0] justify-center m-auto pb-64 w-full">
                <Img
                  className="h-[661px] mx-auto object-cover w-full"
                  src="images/img_maskgroup1093.png"
                  alt="maskgroup1093"
                />
                <div className="absolute flex md:flex-col flex-row md:gap-10 inset-x-[0] items-center justify-between mx-auto top-[13%] w-[67%]">
                  <Text
                    className="sm:text-[34px] md:text-[40px] text-[44px] text-white-A700"
                    size="txtInterBold44WhiteA700"
                  >
                    <>
                      Let&#39;s experience more interesting <br />
                      things about VTIT
                    </>
                  </Text>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] mb-[17px] min-w-[248px] md:mt-0 mt-[21px] text-center text-xl"
                    shape="round"
                    color="white_A700"
                    size="md"
                    variant="fill"
                  >
                    Experience Now
                  </Button>
                </div>
              </div>
              <div className="absolute bg-white-A700 bottom-[28%] flex flex-col inset-x-[0] items-start justify-start mx-auto p-[51px] md:px-10 sm:px-5 w-full">
                <div className="flex flex-col items-start justify-start mb-[13px] md:ml-[0] ml-[148px] w-[61%] md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                    <Img
                      className="h-[59px] md:h-auto object-cover"
                      src="images/img_asset21.png"
                      alt="assetTwentyOne"
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
              </div>
            </div>
            <Img
              className="absolute bottom-[28%] h-[322px] object-cover right-[0]"
              src="images/img_group19659.png"
              alt="group19659"
            />
            <Img
              className="absolute bottom-[28%] h-[262px] object-cover right-[0]"
              src="images/img_group19660.png"
              alt="group19660"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomepagePage;
