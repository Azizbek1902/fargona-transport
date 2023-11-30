import React, { useState } from "react";
import ExploreCard from "./Card";
import { IoClose } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import { ImFileText2 } from "react-icons/im";
import { FaFileCircleQuestion } from "react-icons/fa6";
import { ImRoad } from "react-icons/im";
import { GrMapLocation } from "react-icons/gr";
import { RiUserLocationFill } from "react-icons/ri";
import { BiBarChartAlt } from "react-icons/bi";
import { PiPresentationChart } from "react-icons/pi";
import { BsCalculatorFill } from "react-icons/bs";

const ExpoloreDot = () => {
  const { t } = useTranslation();

  const data = [
    {
      img: <ImFileText2 />,
      title: `${t("bosqich-1-title")}`,
      desc: `${t("bosqich-1-desc")}`,
    },
    {
      img: <BsCalculatorFill />,
      title: `${t("bosqich-2-title")}`,
      desc: `${t("bosqich-2-desc")}`,
    },
    {
      img: <FaFileCircleQuestion />,
      title: `${t("bosqich-3-title")}`,
      desc: `${t("bosqich-3-desc")}`,
    },
    {
      img: <ImRoad />,
      title: `${t("bosqich-4-title")}`,
      desc: `${t("bosqich-4-desc")}`,
    },
    {
      img: <RiUserLocationFill />,
      title: `${t("bosqich-5-title")}`,
      desc: `${t("bosqich-5-desc")}`,
    },
    {
      img: <GrMapLocation />,
      title: `${t("bosqich-6-title")}`,
      desc: `${t("bosqich-6-desc")}`,
    },
    {
      img: <PiPresentationChart />,
      title: `${t("bosqich-7-title")}`,
      desc: `${t("bosqich-7-desc")}`,
    },
    {
      img: <BiBarChartAlt />,
      title: `${t("bosqich-8-title")}`,
      desc: `${t("bosqich-8-desc")}`,
    },
  ];

  const [modal, setModal] = useState({ data: null, type: false });

  const handleChanf = (data) => {
    setModal({ data: data, type: true });
  };

  return (
    <div>
      <div className="flex justify-center explore-dot mt-[80px]">
        <div className="xl:w-[80%] w-[95%] py-14">
          <div className="flex gap-10 items-start">
            <h1 className="font-bold text-[14px]  mt-0 md:-mt-5 md:text-[22px] lg:text-[24px] h-1  md:h-3 xl:h-5 text-[#fff] w-[540px] uppercase">
              {t("bosqich-main-title")}
            </h1>
            <p className="h-1 w-[90%] bg-[#FFC503] mt-6"></p>
          </div>
          <div className="grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-14">
            {data.map((item, idx) => (
              <div key={idx + 10} onClick={() => handleChanf(item)}>
                <ExploreCard img={item.img} title={item.title} />
              </div>
            ))}
          </div>
          {modal.type ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl px-[20px]">
                  <div className=" rounded-lg shadow-lg relative flex flex-col w-full md:w-[500px] max-h-[80vh] overflow-y-auto bg-[#5278e9] outline-none focus:outline-none">
                    <div className="flex border-b border-[#98a2e8] items-start justify-between p-5 pt-4 pb-3 rounded-t">
                      <h3 className="text-2xl text-center text-white font-semibold">
                        {modal.data.title}
                      </h3>
                      <button
                        className="absolute  top-5 right-3 text-white  "
                        onClick={() => setModal({ data: null, type: false })}
                      >
                        <IoClose size={25} />
                      </button>
                    </div>
                    <div className="p-5 text-lg text-white  text-start font-semibold">
                      {modal.data.desc}
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-40 fixed inset-0 z-40 bg-[#000]"></div>
            </>
          ) : null}
        </div>
      </div>
      <div id="third"></div>
    </div>
  );
};
export default ExpoloreDot;
