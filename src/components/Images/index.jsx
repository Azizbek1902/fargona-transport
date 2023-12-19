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

function Images() {
  return (
    <div>
      <div className=" flex justify-center mt-[80px]">
        <div className="xl:w-[80%] w-[95%]">
          <div className="flex gap-10 items-center">
            <h1 className="font-bold text-[18px] md:text-[23px] lg:text-[30px] h-1  md:h-3 xl:h-5 text-[#133466] w-[300px] uppercase">
              Images
            </h1>
            <p className="h-1 w-[90%] bg-[#FFC503] mt-6"></p>
          </div>
          <div className="mt-10 hidden grid-cols-3 lg:grid">
            <div className="d">
              <img src={img1} alt="" />
              <img src={img12} alt="" />
              <img src={img3} alt="" />
              <img src={img4} alt="" />
              <img src={img15} alt="" />
            </div>
            <div className="d">
              <img src={img6} alt="" />
              <img src={img7} alt="" />
              <img src={img8} alt="" />
              <img src={img9} alt="" />
              <img src={img5} alt="" />
            </div>
            <div className="d">
              <img src={img11} alt="" />
              <img src={img2} alt="" />
              <img src={img13} alt="" />
              <img src={img14} alt="" />

              <img src={img10} alt="" />
            </div>
          </div>
          <div className="mt-10 hidden grid-cols-2 gap-1 md:grid lg:hidden">
            <div className="grid grid-cols-1 gap-1">
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
          <div className="mt-10 grid grid-cols-1 gap-1 md:hidden">
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
