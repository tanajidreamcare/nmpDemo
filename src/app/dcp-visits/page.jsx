"use client"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation} from "react-i18next";
import i18Instance from "@/customHooks/i18Instance";
i18Instance()

const page = ()=> {

  const { t } = useTranslation();

  const visits = [
    {
        zone:"Zone I",
        station:"APMC",
        date1:"20-07-2023",
        date2:"25-07-2023",
    },
    {
        zone:"Zone I",
        station:"CBD Belapur",
        date1:"21-07-23",
        date2:"26-07-2023",
    },
    {
        zone:"Zone I",
        station:"Kalamboli",
        date1:"22-07-2023",
        date2:"27-07-2023",
    },
  ]
  
  return(
      <>
      <div className="">
        <Navbar/>
          <div className="bg-[#D2D2D2] py-10">
          <div className="text-5xl font-bold leading-9 text-center text-[#15233E]">
          <h1 className="pt-14">{t('dcp_visits')}</h1>
        </div>
          <div className="text[#15233E] md:mx-20 md:ml-44 mx-5">
              <br/>
              <h1 className="text-lg font-extrabold leading-9 text-center">The Zonal DCP will visit the respective Police Station on following dates.</h1>
              <br/>
                <br/>
              <div className="flex justify-center ">
                
              <table className="pt-10 bg-[#D2D2D2] ">
        <thead>
          <tr className="text-base text-center text-gray-800 ">
            <th className="px-6 py-3 font-bold tracking-wider text-center uppercase border">
              Zone
            </th>
            <th className="px-6 py-3 font-bold tracking-wider text-center uppercase border">
              Police Station
            </th>
            <th className="px-6 py-3 font-bold tracking-wider text-center uppercase border">
              First Date
            </th>
            <th className="px-6 py-3 font-bold tracking-wider text-center uppercase border">
              Second Date
            </th>
          </tr>
        </thead>
        <tbody className="text-gray-800 bg-[#D2D2D2] ">
          {visits.map((hierarchy) => (
            <tr
              key={hierarchy.id}
              className="transition-transform duration-300 transform hover:scale-105 hover:bg-white"
            >
              {/* <td className="px-6 py-3 text-sm font-medium text-left align-middle border">
                {new Date(hierarchy.createdAt).toLocaleDateString()}
              </td> */}
              <td className="px-6 py-3 text-sm font-medium text-left align-middle border">
                {hierarchy.zone}
              </td>
              <td className="px-6 py-3 text-sm font-medium text-left align-middle border">
                <div className="flex justify-center ">
                  {hierarchy.station}
                </div>
              </td>
              <td className="px-6 py-3 text-sm font-medium text-left align-middle border">
                <div className="flex justify-center ">
                  {hierarchy.date1}
                </div>
              </td>
              <td className="px-6 py-3 text-sm font-medium text-left align-middle border">
                <div className="flex justify-center ">
                  {hierarchy.date2}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
              </div>
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