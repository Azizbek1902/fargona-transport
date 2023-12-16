import React from "react";

import { useTranslation } from "react-i18next";
const Survey = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className=" flex justify-center mt-[80px]">
        <div className="xl:w-[80%] w-[95%]">
          <div className="flex gap-10 items-center">
            <h1 className="font-bold text-[18px] md:text-[23px] lg:text-[30px] h-1  md:h-3 xl:h-5 text-[#133466] w-[300px] uppercase">
              {t("request")}
            </h1>
            <p className="h-1 w-[90%] bg-[#FFC503] mt-6"></p>
          </div>
          <h1 className="mt-8 text-[#133466] text-xl font-medium">
            {t("request-title")}.
          </h1>
          <div className="w-full rounded-md mt-10 grid lg:grid-cols-3 gap-5 grid-cols-1 md:grid-cols-2">
            <div className="flex justify-start rounded-md p-8 border border-gray-400">
              <div className="text-start">
                <h1 className="text-[#133466] h-16 mb-3 font-medium font-sans text-2xl">
                  {t("request1")}
                </h1>
                <a
                  target="_blank"
                  className="underline cursor-pointer font-semibold flex justify-start text-base font-serif text-[#133466]"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdizOxhYQY4Ig2YMWRreXF5G5_I1Ki9ZSHmnlp2t4sJLaLEfg/viewform"
                >
                  {t("request-batafsil")}
                </a>
              </div>
            </div>
            <div className="flex justify-start rounded-md p-8 border border-gray-400">
              <div className="text-start">
                <h1 className="text-[#133466] h-16 mb-3 font-medium font-sans text-2xl">
                  {t("request2")}
                </h1>
                <a
                  target="_blank"
                  className="underline cursor-pointer font-semibold flex justify-start text-base font-serif text-[#133466]"
                  href="https://docs.google.com/forms/d/e/1FAIpQLScUpyuMwFtNr_LWqGpgFRmNECjJ5tagcYnXoUh8R4P1LQ5pug/viewform"
                >
                  {t("request-batafsil")}
                </a>
              </div>
            </div>
            <div className="flex justify-start rounded-md p-8 border border-gray-400">
              <div className="text-start">
                <h1 className="text-[#133466] h-16 mb-3 font-medium font-sans text-2xl">
                  {t("request3")}
                </h1>
                <a
                  target="_blank"
                  className="underline cursor-pointer font-semibold flex justify-start text-base font-serif text-[#133466]"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfysAyG2Rf8ewnXPxrlMCGsFIPLOEPZ6qJlXo7t2Qg4zHu6lw/viewform"
                >
                  {t("request-batafsil")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="second"></div>
    </div>
  );
};

export default Survey;
