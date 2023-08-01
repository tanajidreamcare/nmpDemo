"use client"
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useTranslation} from "react-i18next";
import { BsFiletypePdf } from "react-icons/bs";
import i18Instance from "@/customHooks/i18Instance";

i18Instance()

function Page () {

  const { t } = useTranslation();
    
   return (
    <>
    <Navbar/>
        <div className="bg-[#e9e4ce49] py-10 px-3">
            {/* <div className="mx-20  py-10 text-[24px] md:text-4xl font-extrabold md:justify-center md:flex text-[#15233E]">
                <h1 className="mt-10 underline font-headingFont" title={t('traffic_branch')}>{t('traffic_branch')}</h1>
            </div> */}
            <div className="text-5xl font-bold leading-9 text-center text-[#15233E]">
          <h1 className="underline pt-14 font-headingFont" title={t('traffic_branch')}>{t('traffic_branch')}</h1>
        </div>
            <div className="flex items-center justify-center mx-5 my-10 md:mx-44">
          <img src="./trafficBrach.png" className="w-[80%] h-[45%] rounded-2xl shadow-lg" />
          </div>
            <div className="flex justify-center p-10 shadow-lg rounded-2xl md:mx-44 bg-lime-200">
            <div className="text-[#15233E] ">
                <h1 className="text-2xl font-extrabold" title={t('traffic_branch')}>{t('traffic_branch')}</h1>
                <h1 className="" title={t('traffic_1')}>{t('traffic_1')}</h1>
                <h1 className="font-extrabold" title={t('traffic_2')}>{t('traffic_2')}</h1>
                              </div>
              </div>
              <div className="">
                  <h1 className="font-extrabold text-3xl text-[#15233E] text-center my-10">{t('our_mission')}</h1>
                  <div className="flex justify-center p-10 shadow-lg rounded-2xl md:mx-44 bg-lime-200">
                  <div className="items-center justify-center ">
                      <h1 className="leading-10" title={t('traffic_3')}>
                      {t('traffic_3')}
                      </h1>
                      <h1 className="leading-10" title={t('traffic_4')}>
                      {t('traffic_4')}
                      </h1>
                      <h1 className="leading-10" title={t('traffic_5')}>{t('traffic_5')}</h1>
                      <h1 className="leading-10" title={t('traffic_6')}>{t('traffic_6')}</h1>
                      <h1 className="leading-10" title={t('traffic_7')}>{t('traffic_7')}</h1>
                      <h1 className="leading-10" title={t('traffic_8')}>{t('traffic_8')}</h1>
                  </div>
                  </div>
              </div>
              <div>
                <div className="my-10 ">
                <table className="w-[94%] md:w-[74%] pt-10 bg-cyan-50 md:mx-44 mx-3">
        <thead>
          <tr className="text-base text-center text-gray-800 bg-cyan-50">
            <th title={t('right_6')} className="px-6 py-3 font-bold tracking-wider text-center uppercase border">
            {t('right_6')}
            </th>
            <th title={t('right_7')} className="py-3 font-bold tracking-wider text-center uppercase border md:px-6">
            {t('infoTable')}
            </th>
          </tr>
        </thead>
        <tbody className="text-gray-800 bg-cyan-50 ">
            <tr
              className="transition-transform duration-300 transform hover:scale-105 hover:bg-white"
            >
              <td className="px-6 py-3 text-sm font-medium text-left align-middle border">
                {t('table_1')}
              </td>
              <td className="py-3 text-sm font-medium text-left align-middle border md:px-6">
                <div className="flex justify-center text-orange-700">
                  <a
                    href="/traffficFines.pdf"
                    target="_blank"
                  >
                    <BsFiletypePdf size={30} />
                  </a>

                </div>
              </td>
            </tr>
        </tbody>
      </table>
                </div>

              </div>
          </div>
          <div className=" md:mt-[0rem]">
    <Footer />
      </div>
      </>
  )
};

export default Page;

