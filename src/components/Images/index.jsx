import React from "react";
import img1 from "../../assets/images/imgs/1.jpg";
import img2 from "../../assets/images/imgs/2.jpg";
import img3 from "../../assets/images/imgs/3.jpg";
import img4 from "../../assets/images/imgs/4.jpg";
import img5 from "../../assets/images/imgs/5.jpg";
import img6 from "../../assets/images/imgs/6.jpg";
import img7 from "../../assets/images/imgs/7.jpg";
import img8 from "../../assets/images/imgs/8.jpg";
import img9 from "../../assets/images/imgs/9.jpg";
import img10 from "../../assets/images/imgs/10.jpg";
import img11 from "../../assets/images/imgs/11.jpg";
import img12 from "../../assets/images/imgs/12.jpg";
import img13 from "../../assets/images/imgs/13.jpg";
import img14 from "../../assets/images/imgs/14.jpg";
import img15 from "../../assets/images/imgs/15.jpg";
import { useTranslation } from "react-i18next";

function Images() {
  const { t } = useTranslation();
  return (
    <div>
      <div className=" flex justify-center mt-[80px]">
        <div className="xl:w-[80%] w-[95%]">
          <div className="flex gap-10 items-center">
            <h1 className="font-bold  text-[18px] md:text-[23px] lg:text-[28px] h-1  md:h-3 xl:h-5 text-[#133466] w-[400px] uppercase">
              {t("image-title")} <br />
              {t("image-title-2")}
            </h1>
            <p className="h-1 w-[90%] bg-[#FFC503] mt-6"></p>
          </div>
          {/* laptop */}
          <div className="mt-[100px] hidden grid-cols-3 lg:grid">
            <div className="d ">
              <img
                className="w-full object-cover h-[310px]"
                src={img1}
                alt=""
              />
              <img
                className="w-full object-cover h-[500px]"
                src={img12}
                alt=""
              />
              <img
                className="w-full object-cover h-[270px]"
                src={img3}
                alt=""
              />
              <img
                className="w-full object-cover h-[400px]"
                src={img4}
                alt=""
              />
              <img
                className="w-full object-cover h-[450px]"
                src={img9}
                alt=""
              />
            </div>
            <div className="d">
              <img
                className="w-full object-cover h-[280px]"
                src={img11}
                alt=""
              />
              <img
                className="w-full object-cover h-[460px]"
                src={img7}
                alt=""
              />
              <img
                className="w-full object-cover h-[330px]"
                src={img8}
                alt=""
              />
              <img
                className="w-full object-cover h-[360px]"
                src={img15}
                alt=""
              />
              <img
                className="w-full object-cover h-[500px]"
                src={img2}
                alt=""
              />
            </div>
            <div className="d">
              <img
                className="w-full object-cover h-[490px]"
                src={img13}
                alt=""
              />
              <img
                className="w-full object-cover h-[310px]"
                src={img6}
                alt=""
              />
              <img
                className="w-full object-cover h-[280px]"
                src={img5}
                alt=""
              />
              <img
                className="w-full object-cover h-[400px]"
                src={img14}
                alt=""
              />
              <img
                className="w-full object-cover h-[450px]"
                src={img10}
                alt=""
              />
            </div>
          </div>

          {/* tablet */}
          <div className="mt-[100px] hidden grid-cols-2 gap-2 md:grid lg:hidden">
            <div className="grid grid-cols-1 gap-2">
              <img src={img1} alt="" />
              <img src={img12} alt="" />
              <img src={img3} alt="" />
              <img src={img4} alt="" />
              <img src={img15} alt="" />
              <img src={img6} alt="" />
              <img src={img7} alt="" />
              <img src={img8} alt="" />
            </div>
            <div className="grid grid-cols-1 gap-1">
              <img src={img9} alt="" />
              <img src={img5} alt="" />
              <img src={img11} alt="" />
              <img src={img2} alt="" />
              <img src={img13} alt="" />
              <img src={img14} alt="" />
              <img src={img10} alt="" />
            </div>
          </div>

          {/* mobile */}
          <div className="mt-16 grid grid-cols-1 gap-2 md:hidden">
            <img src={img1} alt="" />
            <img src={img12} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <img src={img15} alt="" />
            <img src={img6} alt="" />
            <img src={img7} alt="" />
            <img src={img8} alt="" />
            <img src={img9} alt="" />
            <img src={img5} alt="" />
            <img src={img11} alt="" />
            <img src={img2} alt="" />
            <img src={img13} alt="" />
            <img src={img14} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Images;
