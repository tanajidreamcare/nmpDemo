"use client";
import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";
import i18Instance from "@/customHooks/i18Instance";

i18Instance();

const PassportVerification = () => {
  const { t } = useTranslation();

  return (
    <div className="">
      <Navbar />
      <div className="bg-[#e9e4ce49] h-auto py-10 ">

        <div className="text-5xl font-bold leading-9 text-center text-[#15233E]">
          <h1 className="underline pt-14 font-headingFont" title={t('passport_status')}>{t('passport_status')}</h1>
        </div>

        <div className="flex items-center justify-center mx-5 my-10 md:mx-44">
          <img src="./navi_head.png" className="w-[100%] h-[50%] rounded-2xl" />
          </div>
        <div className="text-[#15233E] mt-6 md:mt-0 bg-lime-200 mb-14 rounded-2xl shadow-2xl md:mx-44 p-10 ">
          <div className="font-bold  text-5xl leading-9 text-center text-[#15233E]">
            {/* <h1 className="py-10">About Us</h1> */}
          </div>
          <div className="rounded-xl">
            <div className="p-5 ">
              <p
                title={t("passport_2")}
                className="my-4 text-2xl font-bold text-center"
              >
                {t("passport_2")}
              </p>
              <p title={t("passport_3")} className="text-justify ">
                {t("passport_3")}
                <a
                  href="https://aaplesarkar.mahaonline.gov.in/en"
                  target="_blank"
                  className="text-blue-500"
                >
                  {" "}
                  https://aaplesarkar.mahaonline.gov.in/en{" "}
                </a>{" "}
                /{" "}
                <a
                  href="https://pcs.mahaonline.gov.in/Forms/Home.aspx"
                  target="_blank"
                  className="text-blue-500"
                >
                  https://pcs.mahaonline.gov.in/Forms/Home.aspx{" "}
                </a>
                {t("passport_4")}
              </p>
            </div>
          </div>
          <div className=" rounded-xl">
            <div className="p-5 ">
              <p
                title={t("passport_5")}
                className="my-4 text-2xl font-bold text-center"
              >
                {t("passport_5")}
              </p>
              <p title={t("passport_6")} className="text-justify ">
                {t("passport_6")}
                <a
                  href="https://indianfrro.gov.in/eservices/"
                  target="_blank"
                  className="text-blue-500"
                >
                  {" "}
                  https://indianfrro.gov.in/eservices/{" "}
                </a>
                {t("passport_7")}
              </p>
              <p title={t("passport_8")} className="text-justify ">
                {t("passport_8")}
                <a
                  href="https://indianfrro.gov.in/eservices/"
                  target="_blank"
                  className="text-blue-500"
                >
                  {" "}
                  https://indianfrro.gov.in/sform/{" "}
                </a>
                {t("passport_9")}
              </p>
              <p title={t("passport_10")} className="text-justify ">
                {t("passport_10")}
                <a
                  href="https://indianfrro.gov.in/frro/FormC"
                  target="_blank"
                  className="text-blue-500"
                >
                  {" "}
                  https://indianfrro.gov.in/frro/FormC{" "}
                </a>
                {t("passport_11")}
              </p>
            </div>
          </div>
          <div className=" rounded-xl">
            <div className="p-5 ">
              <p
                title={t("passport_12")}
                className="my-4 text-2xl font-bold text-center"
              >
                {t("passport_12")}
              </p>
              <p title={t("passport_13")} className="text-justify ">
                {t("passport_13")}
              </p>
            </div>
          </div>
          <div className=" rounded-xl">
            <div className="p-5 ">
              <p
                className="my-4 text-2xl font-bold text-center"
                title={t("passport_14")}
              >
                {t("passport_14")}
              </p>
              <p title={t("passport_15")} className="text-justify ">
                {t("passport_15")}
                <a
                  href="https://www.passportindia.gov.in/AppOnlineProject/welcomeLink"
                  target="_blank"
                  className="text-blue-500 whitespace-normal"
                >
                  {" "}
                  https://www.passportindia.gov.in{" "}
                </a>
                {t("passport_16")}
              </p>
            </div>
          </div>
          <div className=" rounded-xl">
            <div className="p-5 mt-8 lg:mt-10">
              <p
                title={t("passport_17")}
                className="text-xl font-bold underline"
              >
                {t("passport_17")}
              </p>
              <p className="text-2xl ">022-27572236 (EXT. NO.- 424 / 446 )</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" md:mt-[0rem]">
        <Footer />
      </div>
    </div>
  );
};

export default PassportVerification;
