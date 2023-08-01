"use client"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation} from "react-i18next";
import i18Instance from "@/customHooks/i18Instance";
i18Instance()

const CrimeBranch = ()=> {

  const { t } = useTranslation();
  
  return(
      <>
      <div className="">
        <Navbar/>
          <div className="bg-[#e9e4ce49] py-10">
          <div className="text-5xl font-bold leading-9 text-center text-[#15233E]">
          <h1 className="underline pt-14 font-headingFont" title={t('crime_branch')}>{t('crime_branch')}</h1>
        </div>
          <div className="flex items-center justify-center mx-5 my-10 md:mx-44">
          <img src="./navi_head.png" className="w-[100%] h-[50%] rounded-2xl" />
          </div>
          <div className="text[#15233E] bg-lime-200 rounded-2xl shadow-lg p-10 md:mx-44 md:ml-44 mx-5 text-left">
              <h1 className="text-xl font-extrabold" title={t('crime_branch_navi_mumbai')}>{t('crime_branch_navi_mumbai')}</h1>
              <h1 className="" title={t('crime_branch_1')}>{t('crime_branch_1')}</h1>
              <h1 className="" title={t('crime_branch_2')}>{t('crime_branch_2')}</h1>
              <h1 className="text-xl font-extrabold" title={t('crime_branch_3')}>{t('crime_branch_3')}</h1>
              <h1 className="leading-10" title={t('crime_branch_4')}>{t('crime_branch_4')}</h1>
              <h1 className="leading-10" title={t('crime_branch_5')}>{t('crime_branch_5')}</h1>
              <h1 className="leading-10" title={t('crime_branch_6')}>{t('crime_branch_6')}</h1>
              <h1 className="leading-10" title={t('crime_branch_7')}>{t('crime_branch_7')}</h1>
              <h1 className="leading-10" title={t('crime_branch_8')}>{t('crime_branch_8')}</h1>
              <h1 className="leading-10" title={t('crime_branch_9')}>{t('crime_branch_9')}</h1>
              <h1 className="leading-10" title={t('crime_branch_10')}>{t('crime_branch_10')}</h1>
              <h1 className="leading-10" title={t('crime_branch_11')}>{t('crime_branch_11')}</h1>
              <h1 className="leading-10" title={t('crime_branch_12')}>{t('crime_branch_12')}</h1>

          </div>
          </div>
          <div className=" md:mt-[0rem]">
    <Footer />
      </div>
      </div>
      </>
  )
};

export default CrimeBranch;