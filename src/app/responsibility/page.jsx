"use client"
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import { useTranslation} from "react-i18next";
import i18Instance from "@/customHooks/i18Instance";

i18Instance()

function Page  () {

  const { t } = useTranslation();
  
  return (
    <div>
      <Navbar/>
      <div className=" bg-[#e9e4ce49]">
        <div className="text-[#15233E] pb-14">
          <div className="text-5xl font-bold  leading-9 text-center pt-14 text-[#15233E]">
            <h1 className="underline pt-14 font-headingFont" title={t('responsibility')}>{t('responsibility')}</h1>
          </div>
          <div className="mx-5 bg-lime-200 lg:mx-72 rounded-xl">
            <div className="p-5 mt-8 lg:mt-10">
              <p className="font-bold font-headingFont" title={t('res_1')}>{t('res_1')}</p>
              <p className="ml-5 text-lg font-normal" title={t('res_2')}>
              {t('res_2')}
                <br  title={t('res_3')} />{t('res_3')}
                <br title={t('res_4')}/> 
                {t('res_4')}
                <br title={t('res_5')}/>
                {t('res_5')}
                <br title={t('res_6')}/>
                {t('res_6')}
              </p>
            </div>
          </div>
          <div className="mx-5 bg-lime-200 lg:mx-72 rounded-xl">
            <div className="p-5 mt-8 lg:mt-10">
              <p className="font-bold" title={t('res_7')}>{t('res_7')}</p>
              <p className="ml-5 text-lg font-normal" title={t('res_8')}>
              {t('res_8')}
              </p>
            </div>
          </div>
          {/* <div className="mx-5 bg-lime-200 lg:mx-72 rounded-xl">
            <div className="p-5 mt-8 lg:mt-10">
              <p className="font-bold">{t('res_4')}</p>
              <p className="ml-5 text-lg font-normal">
              {t('res_5')}
                <br />
                {t('res_6')}
                <br />
                {t('res_7')}
                <br />
                {t('res_8')}
                <br />
                {t('res_9')}
              </p>
            </div>
          </div> */}
          <div className="mx-5 bg-lime-200 lg:mx-72 rounded-xl">
            <div className="p-5 mt-8 lg:mt-10">
              <p className="font-bold">{t('res_9')}</p>
              <p className="ml-5 text-lg font-normal">
              
              {t('res_10')}
              <br/>
                {t('res_11')}
                <br />
                {t('res_12')}
                <br />
                {t('res_13')}
                <br />
                
              </p>
            </div>
          </div>
          <div className="mx-5 bg-lime-200 lg:mx-72 rounded-xl ">
            <div className="p-5 mt-8 lg:mt-10">
              <p className="font-bold">{t('res_15')}</p>
              <p className="ml-5 text-lg font-normal">
              {t('res_16')}
                <br />
                {t('res_24')}
                <br/>
                {t('res_18')}
                <br />
                {t('res_19')}
                <br />
                {t('res_20')}
                <br />
                {t('res_21')}
                <br />
                {t('res_22')}
                <br />
                
              </p>
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

export default Page;