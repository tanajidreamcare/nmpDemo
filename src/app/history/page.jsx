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
          <div className="bg-[#e9e4ce49]  py-10">
          <div className="text-5xl font-bold leading-9 text-center text-[#15233E]">
          <h1 className="pt-14 font-headingFont underline" title={t('history')}>{t('history')}</h1>
        </div>
          <div className="text-[#15233E] text-justify bg-lime-200 rounded-lg shadow-xl md:mx-20  mx-5  mt-10 p-10 ">
            <h1 className="text-lg " title={t('history_1')}>{t('history_1')}</h1>
             <br/>
             <h1 className="text-lg " title={t('history_2')}>{t('history_2')}</h1>
             <br/>
             <h1 className="text-lg " title={t('history_3')}>{t('history_3')}</h1>
             <br/>
             <h1 className="text-lg " title={t('history_4')}>{t('history_4')}</h1>
             <br/>
             <h1 className="text-lg " title={t('history_5')}>{t('history_5')}</h1>
             <br/>
             <h1 className="text-lg " title={t('history_6')}>{t('history_6')}</h1>
             <br/>
             <h1 className="text-lg " title={t('history_7')}>{t('history_7')}</h1>
             <br/>
             <h1 className="text-lg " title={t('history_8')}>{t('history_8')}</h1>
             <br/>
             <h1 className="text-lg " title={t('history_9')}>{t('history_9')}</h1>
             <br/>
             <h1 className="text-lg " title={t('history_10')}>{t('history_10')}</h1>
             <br/>
             <h1 className="text-lg " title={t('history_11')}>{t('history_11')}</h1>

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