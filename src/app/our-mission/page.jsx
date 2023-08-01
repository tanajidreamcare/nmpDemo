"use client"
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import { useTranslation} from "react-i18next";
import i18Instance from "@/customHooks/i18Instance";

i18Instance()
function Page() {

  const { t } = useTranslation();
  
  return (
    <div>
      <Navbar/>
      <div className="bg-[#e9e4ce49] py-10">
      {/* <div className="text-5xl font-bold leading-9 text-center pt-8 text-[#15233E]">
          <h1 className="underline pt-14 font-headingFont" title={t('our_mission')}>{t('our_mission')}</h1>
        </div> */}
        <div className="text-5xl font-bold leading-9 text-center text-[#15233E]">
            <h1 className="underline pt-14 font-headingFont" title={t("our_mission")}>
              {t("our_mission")}
            </h1>
          </div>
      <div className="text-[#15233E] text-justify bg-lime-200 rounded-lg shadow-xl md:mx-20  mx-5  mt-10 p-10 ">
        
        <div className=""> 
          <p className="text-lg" title={t('our_mission_1')} >
          {t('our_mission_1')}
          <br/><br title={t('our_mission_2')}/>
          {t('our_mission_2')}
          <br/><br title={t('our_mission_3')}/>
          {t('our_mission_3')}
          </p>
        </div>
      </div>
    </div>
    <div className="mt-[0rem] md:mt-[0rem]">
    <Footer />
      </div>
    
    </div>
  );
};

export default Page;