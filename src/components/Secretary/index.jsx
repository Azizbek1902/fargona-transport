import React from "react";
import SecretaryCard from "./Card";
import { useTranslation } from "react-i18next";

const Resourses = () => {
  const { t } = useTranslation();

  const data = [
    {
      img: "https://www.transportation.gov/sites/dot.gov/files/2020-01/dot_p_safety.jpg",
      title: `${t("kotib-card1-title")}`,
      desc: `${t("kotib-card1-desc")}`,
    },
    {
      img: "https://www.transportation.gov/sites/dot.gov/files/2020-01/Innovation%402x_0.jpg",
      title: `${t("kotib-card2-title")}`,
      desc: `${t("kotib-card2-desc")}`,
    },
    {
      img: "https://www.transportation.gov/sites/dot.gov/files/2022-05/Equity_Image.jpeg",
      title: `${t("kotib-card3-title")}`,
      desc: `${t("kotib-card3-desc")}`,
    },
  ];
  return (
    <div className="flex justify-center ">
      <div className="xl:w-[80%] w-[95%] py-5">
        <div className="flex gap-10 items-center">
          <h1 className="font-bold text-[18px] md:text-[23px] lg:text-[28px] h-1  md:h-3 xl:h-5 text-[#133466] lg:w-[500px] xl:w-[500px] uppercase">
            {t("kotib-title")}
          </h1>
          <p className="h-1 w-[90%] bg-[#FFC503] mt-6"></p>
        </div>
        <p className="text-[#133466] mt-[60px] xl:mt-[60px]">
          {t("kotib-desc")}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {data.map((item, ind) => (
            <SecretaryCard
              key={ind + 1}
              bgImg={item.img}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resourses;
