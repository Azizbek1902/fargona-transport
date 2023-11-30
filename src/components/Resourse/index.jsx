import React from "react";
import ResourseCard from "./Card";
import { useTranslation } from "react-i18next";

const Resourses = () => {
  const { t } = useTranslation();

  const data = [
    {
      img: "https://www.transportation.gov/sites/dot.gov/files/2021-12/BIL_Resource.jpeg",
      title: `${t("resurs-card1-title")}`,
    },
    {
      img: "https://www.transportation.gov/sites/dot.gov/files/2020-01/hp_block_aeroplane.jpg",
      title: `${t("resurs-card2-title")}`,
    },
    {
      img: "https://www.transportation.gov/sites/dot.gov/files/2020-01/hp_block_office_meeting%20copy.jpg",
      title: `${t("resurs-card3-title")}`,
    },
    {
      img: "https://www.transportation.gov/sites/dot.gov/files/2020-01/drug%20updated.jpg",
      title: `${t("resurs-card4-title")}`,
    },
  ];
  return (
    <div className="flex justify-center mt-[80px]">
      <div className="xl:w-[80%] w-[95%] py-5">
        <div className="flex gap-10 items-center">
          <h1 className="font-bold text-[18px] md:text-[23px] lg:text-[30px] h-1  md:h-3 xl:h-5 text-[#133466] w-[300px] uppercase">
            {t("resurs-title")}
          </h1>
          <p className="h-1 w-[90%] bg-[#FFC503] mt-6"></p>
        </div>
        <p className="text-[#133466] mt-5">{t("resurs-desc")}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {data.map((item, ind) => (
            <ResourseCard key={ind + 1} bgImg={item.img} title={item.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resourses;
