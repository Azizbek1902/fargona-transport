import React from "react";

const ExploreCard = ({ img, title }) => {
  return (
    <div className="explore-card flex justify-center items-center w-full py-7 px-2">
      <div className="flex flex-col  items-center gap-3">
        <div className="h-[60px] flex text-[50px] text-white justify-center items-center">
          <p>{img}</p>
        </div>
        <p className="font-bold text-[12px] md:text-base uppercase w-[] md:w-[200px]   lg:w-[220px] text-center text-white">
          {title}
        </p>
      </div>
    </div>
  );
};

export default ExploreCard;
