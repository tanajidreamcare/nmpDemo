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
          <h1 className="underline pt-14 font-headingFont" title={t('economic_offence_wing')}>{t('economic_offence_wing')}</h1>
        </div>
          <div className="flex items-center justify-center mx-5 my-10 md:mx-44">
          <img src="./navi_head.png" className="w-[100%] h-[50%] rounded-2xl shadow-lg" />
          </div>
          <div className="text[#15233E] md:mx-44 p-10 bg-lime-200 rounded-2xl shadow-lg  mx-5 text-left">
              <h1 className="text-xl font-bold text-center" title={t('eco_1')}>{t('eco_1')}</h1>
              <br/>
              <h1 className="text-lg" title={t('eco_2')}>{t('eco_2')}</h1>
              <h1 className="text-lg" title={t('eco_3')}>{t('eco_3')}</h1>
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