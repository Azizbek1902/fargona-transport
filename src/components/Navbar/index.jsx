import { FaInstagram, FaTelegram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Img from "../../assets/images/logo1.png";
import { TbWorld } from "react-icons/tb";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import Uzb from "../../assets/images/uz (1).svg";
import Rus from "../../assets/images/ru (1).svg";
import Eng from "../../assets/images/gb.svg";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const { t, i18n } = useTranslation();
  const [til, setTil] = useState(false);
  const [yazik, setYazik] = useState("uz");
  const navigation = [
    {
      name: `${t("navbar-text-1")}`,
      href: "#first",
      current: false,
    },
    {
      name: `${t("navbar-text-2")}`,
      href: "#second",
      current: false,
    },
    {
      name: `${t("navbar-text-3")}`,
      href: "#third",

      current: false,
    },
  ];
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setTil(!til);
    setYazik(language);
  };
  return (
    <Disclosure as="nav" className="bg-[#3559c6] fixed z-50 w-full">
      {({ open }) => (
        <>
          <div className="mx-auto  px-2 sm:px-6 lg:px-8 xl:px-[140px]">
            <div className="relative flex h-20 items-center justify-between">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}

                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-start sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 gap-2 mb-1 items-center">
                  <img src={Img} className="w-[75px] " alt="" />
                  <p className="text-white w-[180px] md:w-[250px] xl:w-[300px]  text-[15px] md:text-[18px] lg: font-semibold">
                    {t("navbar-logo")}
                  </p>
                </div>
                <div className="hidden  lg:fixed w-full lg:flex justify-center -left-5 sm:ml-6   mt-4 ">
                  <div className="flex item-center   mt-2">
                    {navigation.map((item, index) => (
                      <a
                        key={index + 1}
                        href={item.href}
                        id={item.id}
                        className={classNames(
                          item.current
                            ? "bg-gray-900  text-gray-200"
                            : "text-gray-200  hover:text-gray-200",
                          "rounded-md px-3 text-[16px] py-2 text-md font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 hidden sm:ml-6 sm:block items-center pr-2 sm:static sm:inset-auto  sm:pr-0">
                <div
                  type="button"
                  className="relative  flex gap-4 rounded-full  p-1  focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0A1F61]"
                >
                  {/* <span className="absolute -inset-1.5" /> */}
                  <span className="sr-only">View notifications</span>
                  <a
                    href="https://t.me/fargonatransportuz"
                    className=" w-8 h-8 rounded-[50%] text-white mr-[5px]"
                  >
                    <FaTelegram size={32} className="mt-[2px] ml-[6px]" />
                  </a>
                  <a
                    href="https://www.youtube.com/@fargona-transport-boshreja"
                    className="bg-[#fff]  w-8 h-8 rounded-[50%] text-[#455CA1]"
                  >
                    <FiYoutube size={20} className="mt-[7px] ml-[7px]" />
                  </a>
                  <a
                    href="https://www.instagram.com/"
                    className="bg-[#fff]  w-8 h-8 rounded-[50%] text-[#455CA1]  "
                  >
                    <FaInstagram size={20} className="mt-[6px] ml-[6px]" />
                  </a>

                  <div className="relative pl-2 mt-1">
                    <div
                      onClick={() => changeLanguage(yazik)}
                      className="flex items-center text-white   gap-1 cursor-pointer text-[22px] "
                    >
                      <TbWorld />
                      <p className="text-[18px]">
                        {yazik === "uz" ? "UZ" : yazik === "ru" ? "RU" : "EN"}
                      </p>
                    </div>
                    <div
                      className={`bg-white  transition-all duration-400 rounded ${
                        til ? "h-auto pt-1" : "h-0 pt-0"
                      }  overflow-hidden  shadow-lg right-0 top-[40px] xl:left-0 w-[100px] absolute`}
                    >
                      <div
                        onClick={() => changeLanguage("uz")}
                        className="flex items-center gap-1 cursor-pointer text-[22px] "
                      >
                        <img
                          src={Uzb}
                          className="w-[30px] rounded-md h-[20px]"
                          alt=""
                        />
                        <p className="text-[18px]">O'zbek</p>
                      </div>
                      <div
                        onClick={() => changeLanguage("ru")}
                        className="flex items-center gap-1 cursor-pointer text-[22px] "
                      >
                        <img
                          src={Rus}
                          className="w-[30px] rounded-md h-[20px]"
                          alt=""
                        />
                        <p className="text-[18px]">Русский</p>
                      </div>
                      <div
                        onClick={() => changeLanguage("en")}
                        className="flex items-center gap-1 cursor-pointer text-[22px] "
                      >
                        <img
                          src={Eng}
                          className="w-[30px] rounded-md h-[20px]"
                          alt=""
                        />
                        <p className="text-[18px]">English</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 text-center">
              {navigation.map((item, index) => (
                <Disclosure.Button
                  key={index + 1}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <div className="sm:block md:hidden flex justify-center">
                <div className="flex gap-6 p-3">
                  <a
                    href="https://t.me/fargonatransportuz"
                    className=" w-8 h-8 rounded-[50%] text-white"
                  >
                    <FaTelegram size={32} className="mt-[2px] ml-[6px]" />
                  </a>
                  <a
                    href="https://www.youtube.com/@fargona-transport-boshreja"
                    className="bg-[#fff]  w-8 h-8 rounded-[50%] text-[#455CA1]"
                  >
                    <FiYoutube size={20} className="mt-[7px] ml-[6px]" />
                  </a>
                  <a
                    href="https://www.instagram.com/"
                    className="bg-[#fff] w-8 h-8 rounded-[50%] text-[#455CA1]"
                  >
                    <FaInstagram size={20} className="mt-[6px] ml-[5.8px]" />
                  </a>
                </div>
              </div>
              <div className="relative pl-2 flex justify-center">
                <div
                  onClick={() => changeLanguage(yazik)}
                  className="flex items-center text-white   gap-1 cursor-pointer text-[22px] "
                >
                  <TbWorld />
                  <p className="text-[18px]">
                    {yazik === "uz" ? "UZ" : yazik === "ru" ? "RU" : "EN"}
                  </p>
                </div>
                <div className="flex justify-center">
                  <div
                    className={`bg-white  transition-all duration-300 rounded ${
                      til ? "h-auto" : "h-0 pt-0"
                    }  overflow-hidden  shadow-lg  top-[40px]  w-[100px] absolute`}
                  >
                    <div
                      onClick={() => changeLanguage("uz")}
                      className="flex items-center cursor-pointer text-[22px] "
                    >
                      <img
                        src={Uzb}
                        className="w-[30px] rounded-lg h-[20px]"
                        alt=""
                      />
                      <p className="text-[18px]">O'zbek</p>
                    </div>
                    <div
                      onClick={() => changeLanguage("ru")}
                      className="flex items-center cursor-pointer text-[22px] "
                    >
                      <img
                        src={Rus}
                        className="w-[30px] rounded-lg h-[20px]"
                        alt=""
                      />
                      <p className="text-[18px]">Русский</p>
                    </div>
                    <div
                      onClick={() => changeLanguage("en")}
                      className="flex items-center gap-1 cursor-pointer text-[22px] "
                    >
                      <img
                        src={Eng}
                        className="w-[30px] rounded-md h-[20px]"
                        alt=""
                      />
                      <p className="text-[18px]">English</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
