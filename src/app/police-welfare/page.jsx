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
          <div className="bg-[#D2D2D2] py-10">
          <div className="text-5xl font-bold leading-9 text-center text-[#15233E]">
          <h1 className="pt-14">{t('welfare_activities')}</h1>
        </div>
          <div className="flex items-center justify-center my-10">
          <img src="./trafficBrach.png" className="w-[50%] h-[50%]" />
          </div>
          <div className="text[#15233E] md:mx-20 md:ml-44 mx-5 text-left">

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