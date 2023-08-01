"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function CPMessage() {
  const { t } = useTranslation();

  return (
    <>
      <div className="py-5 md:py-12 mb-20 md:mb-0 bg-sky-950 h-[1300px] md:h-screen">
        <div className="justify-center w-full h-full md:flex">
          <div className="flex items-center justify-center">
            <div className="text-[40px] md:text-[60px] mt-10 font-extrabold leading-9 text-white md:hidden">
              Meet The Chief
            </div>
          </div>
          <div className="flex justify-center md:w-full">
            <div className="items-center w-[85%] justify-center md:flex md:items-right md:justify-center">
              <div className=" flex justify-center w-full md:w-4/12 mb-24">
               

                <div className="relative w-full mt-20 md:mt-0 mb-[500px] md:mb-0">
                    <Image
                      src={"/commissioner.png"}
                      height={500}
                      width={500}
                      className="z-20 absolute md:-top-60   h-[518px]  w-full "
                    />
                  <div className="curvedPOl absolute top-48 md:-top-10 right-0 rounded-3xl bg-[#E7581A] w-[250px] h-[211px]"></div>

                  <div className="absolute top-0 md:-top-60 left-[12%] md:left-[22%] lg:left-[25%]  z-10 rounded-full bg-[#ABBED1] h-[270px] w-[270px] "></div>
                  <div className="polygonOrange absolute top-80 md:top-20 left-0 h-[420px] w-full z-20"></div>
                  <div className="absolute top-[480px] md:top-64 py-4 px-8 text-lg right-0 z-30 bg-white text-black" title={t('com_of_police')}>{t('com_of_police')}</div>

                  <div
                    className="text z-30 absolute top-[360px] lg:left-[3%] md:top-28 font-saira text-[#F8F8F8]  text-[48px] leading-[50px] md:leading-[70px] font-[800] "
                    title={t("cp_name1")}
                  >
                    {t("cp_name1")}
                  </div>
                </div>
              </div>
              <div className="mx-3 md:mx-10  md:mt-0 md:w-8/12">
                <div
                  className="hidden text-[40px] text-left font-extrabold leading-9 text-white sm:block"
                  title={t("from_cp_desk")}
                >
                  {t("from_cp_desk")}
                </div>

                <h1
                  className="mt-3 text-white md:text-lg"
                  title={t("namaskar_navi_mumbai")}
                >
                  {t("namaskar_navi_mumbai")}
                </h1>

                <h1
                  title={t("cp_msg1")}
                  className="mt-3 text-sm leading-6 text-justify text-white md:text-lg"
                >
                  {t("cp_msg1")}
                  <br />
                  <br title={t("cp_msg2")} />
                  {t("cp_msg2")}
                </h1>

                <h1
                  title={t("cp_msg3")}
                  className="mt-3 text-lg text-white md:text-2xl"
                >
                  {t("cp_msg3")}
                  <br title={t("cp_msg4")} />
                  {t("cp_msg4")}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
