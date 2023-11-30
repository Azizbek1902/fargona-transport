import React from "react";

const ResourseCard = ({ bgImg, title }) => {
  return (
    <div
      className="resourses-card  h-[290px] w-full "
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${bgImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top left",
      }}
    >
      <div className="w-full h-full resourses-card-inside">
        <div className="py-[48px] px-[24px]">
          <p className="text-[20px] xl:text-[22px] font-bold text-white ">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResourseCard;
