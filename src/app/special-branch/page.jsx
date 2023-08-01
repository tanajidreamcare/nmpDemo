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
          <h1 className="pt-14 font-headingFont underline" title={t('special_branch')}>{t('special_branch')}</h1>
        </div>
        <div className="flex items-center justify-center mx-5 my-10 md:mx-44">
          <img src="./navi_head.png" className="w-[100%] h-[50%] rounded-2xl" />
          </div>
          <div className="text[#15233E] bg-lime-200 p-10 rounded-xl text-justify md:mx-20 lg:mx-44 mx-5 ">
              
              <br/>
              <h1 className="text-lg leading-9 text-left font-semibold" title={t('spl_1')}>{t('spl_1')}</h1>
              <h1 className="text-lg leading-9" title={t('spl_2')}>{t('spl_2')}</h1>
              <h1 className="text-lg leading-9" title={t('spl_3')}>{t('spl_3')}</h1>
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