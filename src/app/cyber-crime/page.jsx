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
          <h1 className="pt-14 font-headingFont underline" title={t('cyber_crime')}>{t('cyber_crime')}</h1>
        </div>
        <div className="flex items-center justify-center mx-5 my-10 md:mx-44">
          <img src="./navi_head.png" className="w-[100%] h-[50%] rounded-2xl" />
          </div>
          <div className="text-[#15233E] bg-lime-200 rounded-2xl shadow-lg p-10  md:mx-44 mx-5 text-justify">
              <h1 className="text-xl font-extrabold text-center underline" title= {t('cyber_1')}>{t('cyber_1')}</h1>
              <br/>
              <h1 className="font-bold" title= {t('cyber_2')}>{t('cyber_2')}</h1>
              <h1 className="font-bold" title= {t('cyber_3')}>{t('cyber_3')}</h1>
              <br/>
              <h1 className="" title= {t('cyber_4')}>{t('cyber_4')}</h1>
              <h1 className="text-lg font-bold underline" title= {t('cyber_5')}>{t('cyber_5')}</h1>
              <h1 className="" title= {t('cyber_6')}>{t('cyber_6')}</h1>
              <h1 className="" title= {t('cyber_7')}>{t('cyber_7')}</h1>
              <h1 className="" title= {t('cyber_8')}>{t('cyber_8')}</h1>
              <h1 className="" title= {t('cyber_9')}>{t('cyber_9')}</h1>
              <h1 className="" title= {t('cyber_10')}>{t('cyber_10')}</h1>
              <h1 className="" title= {t('cyber_11')}>{t('cyber_11')}</h1>
              <br/>
              <h1 className="text-lg font-bold text-blue-500"><a href="./cyber1.pdf" title= {t('cyber_12')}>{t('cyber_12')}</a></h1>
              <br/>
              <h1 className="text-lg font-bold text-blue-500"><a href="./cyber2.pdf" title= {t('cyber_13')}>{t('cyber_13')}</a></h1>
              <br/>
              <h1 className="text-lg font-bold text-blue-500"><a href="./cyber3.pdf" title= {t('cyber_14')}>{t('cyber_14')}</a></h1>
              <br/>
              <h1 className="text-bold" title= {t('cyber_15')}>{t('cyber_15')}</h1>
              <br/>
              <h1 className="text-lg font-bold text-blue-500"><a href="./cyber4.pdf" title= {t('cyber_16')}>{t('cyber_16')}</a></h1>
              <br/>
              <h1 className="text-lg font-bold text-blue-500"><a href="./cyber5.pdf" title= {t('cyber_17')}>{t('cyber_17')}</a></h1>
              <br/>
              <br/>
              <div className="flex items-center justify-center">
              <img src="./cyberi1.jpg" className="h-[70%] w-[90%] md:w-[60%]"/>
                </div>
              <br/>
              <div className="flex items-center justify-center">
              <img src="./cyberi2.jpg" className="h-[70%] w-[90%] md:w-[60%]"/>
                </div>
              <br/>
              <div className="flex items-center justify-center">
              <img src="./cyberi3.jpg" className="h-[70%] w-[90%] md:w-[60%]"/>
                </div>
              <br/>
              <div className="flex items-center justify-center">
              <img src="./cyberi4.jpg" className="h-[70%] w-[90%] md:w-[60%]"/>
                </div>
              <br/>
              <div className="flex items-center justify-center">
              <img src="./cyberi5.jpg" className="h-[70%] w-[90%] md:w-[60%]"/>
                </div>
              <br/>
              <div className="flex items-center justify-center">
              <img src="./cyberi6.jpg" className="h-[70%] w-[90%] md:w-[60%]"/>
                </div>
              <br/>

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