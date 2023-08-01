"use client"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation} from "react-i18next";
import i18Instance from "@/customHooks/i18Instance";
import { BsFiletypePdf } from "react-icons/bs";
import { useRouter } from "next/navigation";
i18Instance()

const page = ()=> {

  const { t } = useTranslation();
  const router = useRouter();
  
  return(
      <>
      <div className="">
        <Navbar/>
          <div className="bg-[#e9e4ce49] py-10">
          <div className="text-5xl font-bold leading-9 text-center text-[#15233E]">
          <h1 className="pt-14 font-headingFont underline " title={t('crime_review')}>{t('crime_review')}</h1>
        </div>
          <div className="">
              <br/>
                <br/>
              <div className="flex justify-center mb-5 md:mb-10 mt-36">
                <div className="items-center justify-between md:flex ">
                    <h1 onClick={() => (router.push('/atrocity-cases'))} className="py-2 font-bold text-blue-500 bg-white border-2 border-blue-500 rounded-lg cursor-pointer mx-14 px-14 hover:bg-blue-500 hover:text-white">{t('atrocity_cases')}</h1>
                    <h1 onClick={() => (router.push('https://citizen.mahapolice.gov.in/Citizen/MH/PublishedFIRs.aspx'))} className="py-2 mt-4 font-bold text-blue-500 bg-white border-2 border-blue-500 rounded-lg cursor-pointer md:mt-0 mx-14 md:mx-0 px-14 hover:bg-blue-500 hover:text-white">{t('registered_fir')}</h1>
                </div>
                
              </div>
              <div className="flex items-center justify-center mb-44 ">
                    <h1 onClick={() => (router.push('/crime-statistics'))} className="py-2 font-bold text-blue-500 bg-white border-2 border-blue-500 rounded-lg cursor-pointer mx-14 px-14 hover:bg-blue-500 hover:text-white">{t('crime_statistics')}</h1>
                </div>
          </div>
          </div>
          <div className=" md:mt-[20rem]">
    <Footer />
      </div>
      </div>
      </>
  )
};

export default page;