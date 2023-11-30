import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
// import { Pagination } from "swiper/modules";
import { useTranslation } from "react-i18next";
const NewsRoom = () => {
  const { t } = useTranslation();

  // const data = [
  //   {
  //     id: 1,
  //     title: `${t("matbout-1-title")}`,
  //     decs: `${t("matbuot-1-desc")}`,
  //     day: `${t("matbuot-1-year")}`,
  //   },
  //   {
  //     id: 2,
  //     title: `${t("matbout-2-title")}`,
  //     decs: `${t("matbuot-2-desc")}`,
  //     day: `${t("matbuot-2-year")}`,
  //   },
  //   {
  //     id: 3,
  //     title: `${t("matbout-3-title")}`,
  //     decs: `${t("matbuot-3-desc")}`,
  //     day: `${t("matbuot-3-year")}`,
  //   },
  //   {
  //     id: 4,
  //     title: `${t("matbout-4-title")}`,
  //     decs: `${t("matbuot-4-desc")}`,
  //     day: `${t("matbuot-4-year")}`,
  //   },
  // ];
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
          <div className="w-full border border-gray-400  p-10 rounded mt-10 ">
            <h4 className="pb-5 text-[#133466] font-bold  text-[18px] md:text-[23px] text-center">
              {t("yangilik-desc")}
            </h4>
            <p className=" pb-5 font-semibold text-justify text-gray-600 leading-8 text-[14px] md:text-[16px] w-[100%]">
              {t("matbuot-1-desc")}
            </p>
          </div>
          {/* <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper "
          >
            <SwiperSlide>
              <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-4 mt-20">
                {data.map((item, i) => {
                  return (
                    <div key={i + 1}>
                      <div className="w-full border p-10 rounded">
                        <h4 className="pb-5 text-gray-500">{item.title}</h4>
                        <p className=" pb-5 font-bold text-[#4d80cc] text-[14px] md:text-[18px] w-[90%]">
                          {item.decs}
                        </p>
                        <h3 className="text-gray-500">{item.day}</h3>
                      </div>
                    </div>
                  );
                })}
              </div>
            </SwiperSlide>
          </Swiper> */}
        </div>
      </div>
      <div id="second"></div>
    </div>
  );
};

export default NewsRoom;
