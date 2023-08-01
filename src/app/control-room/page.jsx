"use client"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation} from "react-i18next";
import i18Instance from "@/customHooks/i18Instance";
i18Instance()

const page = ()=> {

  const { t } = useTranslation();
  
  return(
      <>
      <div className="">
        <Navbar/>
          <div className="bg-[#e9e4ce49] py-10">
          <div className="text-5xl font-bold leading-9 text-center text-[#15233E]">
          <h1 className="pt-14 font-headingFont underline" title={t('control_room')}>{t('control_room')}</h1>
        </div>
          <div className="flex items-center justify-center mx-5 my-10 md:mx-44">
          <img src="./navi_head.png" className="w-[100%] rounded-2xl shadow-lg  h-[50%]" />
          </div>
          <div className="text[#15233E] bg-lime-200 text-justify rounded-2xl shadow-lg p-10 md:mx-44 mx-5 ">
              
              <br/>
              <h1 className="text-lg leading-9" title={t('control_1')}>{t('control_1')}</h1>
              <h1 className="text-lg leading-9" title={t('control_2')}>{t('control_2')}</h1>
              <h1 className="text-lg leading-9" title={t('control_3')}><b>{t('control_3')}</b> {t('control_4')}</h1>
              <h1 className="text-lg leading-9" title={t('control_5')}><b>{t('control_5')}</b> {t('control_6')}</h1>
              <h1 className="text-lg leading-9" title={t('control_7')}><b>{t('control_7')} </b>{t('control_8')}</h1>
              <h1 className="text-lg leading-9" title={t('control_9')}>{t('control_9')}</h1>
              <h1 className="text-lg leading-9" title={t('control_10')}>{t('control_10')}</h1>
              <h1 className="text-lg leading-9" title={t('control_11')}>{t('control_11')}</h1>
              <h1 className="text-lg leading-9" title={t('control_12')}>{t('control_12')}</h1>

          </div>
          </div>
          <div className=" md:mt-[0rem]">
    <Footer />
      </div>
      </div>
      </>
  )
};

export default page;