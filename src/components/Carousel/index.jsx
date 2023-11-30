import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useTranslation } from "react-i18next";
import Img from "../../assets/images/logo.png";
import Img2 from "../../assets/images/farg'ona-hokimligi.png";
import Img3 from "../../assets/images/transport.uz-removebg-preview.png";
import Img7 from "../../assets/images/farg'ona-viloyati.png";
import Img6 from "../../assets/images/carusel-img/photo_2023-11-29_14-26-06.jpg";

function Carousel() {
  const { t } = useTranslation();
  const data = [
    {
      id: 1,
      img: "https://heise.cloudimg.io/width/6676/q30.png-lossy-30.webp-lossy-30.foil1/_www-heise-de_/imgs/71/4/2/6/4/7/6/8/Verkehr-d0dce4d6cef8d3df.jpg",
    },
    {
      id: 2,
      img: "https://makroskoop.ee/wp-content/uploads/2021/09/robottakso-scaled.jpg",
    },
    {
      id: 3,
      img: Img6,
    },
  ];
  const newData = [
    {
      id: 5,
      img: "https://premiumsoft.uz/images/partner/partner-dark-1.png",
      title: `${t("hamkor-1")}`,
      href: "https://fergana.uz/",
      bgColor: "#6883d7",
      height: "55px",
      smHeight: "35px",
      width: "120px",
    },
    {
      id: 6,
      img: Img,
      title: `${t("hamkor-2")}`,
      href: "https://ferpi.uz/",
      bgColor: "#ffffffd9",
      height: "55px",
      smHeight: "45px",
      width: "120px",
    },
    {
      id: 7,
      img: Img3,
      title: `${t("hamkor-3")}`,
      href: "https://www.mintrans.uz/",
      bgColor: "#fafcffde",
      height: "45px",
      smHeight: "35px",
      width: "",
    },
    {
      id: 8,
      img: Img2,
      title: `${t("hamkor-4")}`,
      href: "https://www.fargona.uz/",
      bgColor: "#53639a",
      height: "45px",
      smHeight: "35px",
      width: "120px",
    },
    {
      id: 9,
      img: Img7,
      title: `${t("hamkor-5")}`,
      href: "https://t.me/transportfergana",
      bgColor: "#1F1C61",
      height: "45px",
      smHeight: "35px",
      width: "130px",
    },
  ];
  return (
    <div className="pt-20">
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className=" w-full swiper h-[70vh] md:h-[70vh] "
      >
        {data.map((item) => {
          return (
            <div key={item.id} className="relative">
              <SwiperSlide>
                <div className=" ">
                  <div className="w-full h-full object-cover">
                    <img
                      className="z-10  w-full object-cover h-[70vh]"
                      src={item.img}
                      alt=""
                    />
                    <div className="absolute top-0 left-0 bg-[#0000008b] w-full h-full"></div>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>

      <div className="absolute flex justify-center items-center z-10 -mt-10 top-0 left-0 w-full h-full  p-4 text-white font-bold  ">
        <div className="xl:w-[80%] w-[95%]">
          <div className="flex carusel-mt  -z-10 flex-col md:flex-row justify-between items-center gap-10">
            <h2 className="md:w-1/2 w-full  md:text-2xl xl:text-4xl tracking-widest text-lg">
              {t("carusel-text")}
            </h2>
            <div className="flex flex-col gap-5">
              <div className="text-white text-xl">
                {t("carusel-hamkor-title")}{" "}
              </div>
              <div className="flex flex-row flex-wrap md:flex-col items-center gap-3">
                {newData.map((item) => (
                  <div
                    style={{ background: item.bgColor }}
                    key={item.id}
                    className="cursor-pointer   w-[100px] h-[45px] md:w-[160px] md:h-[60px]  px-3 py-1  lg:py-1  rounded-md tooltip"
                  >
                    <a
                      className="flex justify-center items-center h-full"
                      href={item.href}
                    >
                      <img
                        src={item.img}
                        // className={`w-[95px] h-[${item.smHeight}] md:w-[130px] md:w-[${item.width}] md:h-[${item.height}]`}
                        alt=""
                      />
                      <span className="tooltiptext uppercase">
                        {item.title}
                      </span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="first"></div>
    </div>
  );
}

export default Carousel;
