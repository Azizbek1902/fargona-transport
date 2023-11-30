import React from "react";
import { useTranslation } from "react-i18next";
import { FaInstagram, FaTelegram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
function Footer() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="bg-[#2A333E]  w-full h-full flex justify-center">
        <div className="xl:w-[80%] w-[95%] pb-14 pt-20">
          <div className="md:grid-cols-3 grid-cols-1 grid gap-5">
            <div className="flex  lg:w-[350px]">
              <h1 className="text-white  font-semibold">
                {t("footer-left-title")} - {t("footer-left-text1")}
              </h1>
              {/* <p className="text-white w"></p> */}
            </div>
            <div className="flex  justify-center gap-10 items-center">
              <a
                href="https://t.me/fargonatransportuz"
                className="bg-[#005F9F] cursor-pointer  w-9 h-9 rounded-[50%] text-white"
              >
                <FaTelegram size={20} className="mt-2 ml-[8.2px]" />
              </a>
              <a
                href="https://www.youtube.com/"
                className="bg-[#005F9F] cursor-pointer  w-9 h-9 rounded-[50%] text-white"
              >
                <FiYoutube size={20} className="mt-2 ml-[8.2px]" />
              </a>
              <a
                href="https://www.instagram.com/"
                className="bg-[#005F9F] cursor-pointer  w-9 h-9 rounded-[50%] text-white"
              >
                <FaInstagram size={20} className="mt-2 ml-[8.2px]" />
              </a>
            </div>
            <div className="">
              <h1 className="text-white font-semibold">
                {t("footer-right-title")}
              </h1>
              <p className="text-white">{t("footer-right-text1")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
