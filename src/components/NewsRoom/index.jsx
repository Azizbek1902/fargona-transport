import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Img from "../../assets/images/photo_cleanup.jpg";

import { useTranslation } from "react-i18next";
const NewsRoom = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className=" flex justify-center mt-[80px]">
        <div className="xl:w-[80%] w-[95%]">
          <div className="flex gap-10 items-center">
            <h1 className="font-bold text-[18px] md:text-[23px] lg:text-[30px] h-1  md:h-3 xl:h-5 text-[#133466] w-[300px] uppercase">
              {t("yangilik-title")}
            </h1>
            <p className="h-1 w-[90%] bg-[#FFC503] mt-6"></p>
          </div>
          <div className="w-full flex flex-col 2xl:justify-center lg:leading-8 xl:leading-10  md:flex-row  gap-5 mt-10 ">
            <div className="w-full lg:w-[600px]">
              <h4 className="pb-5 text-[#133466] font-bold  text-[16px] md:text-[18px] lg:text-[20px]">
                {t("yangilik-desc")}
              </h4>
              <div className="font-medium  xl:text-[18px]">
                <span>{t("yangilik-desc-1")}</span>
                <span>
                  <a
                    href="https://lex.uz/uz/docs/-6694131"
                    target="_blank"
                    className="font-medium text-[#6796E1] underline hover:no-underline"
                  >
                    {t("yangilik-qaror")}
                  </a>
                </span>
                <span>{t("yangilik-desc-2")}</span>
              </div>
            </div>
            <div>
              <img src={Img} alt="rasm" />
            </div>
          </div>
        </div>
      </div>
      <div id="second"></div>
    </div>
  );
};

export default NewsRoom;
