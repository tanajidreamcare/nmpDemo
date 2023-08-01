"use client"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation} from "react-i18next";
import i18Instance from "@/customHooks/i18Instance";
import { BsFiletypePdf } from "react-icons/bs";
import { useState, useEffect } from "react";
import axios from '@/customHooks/axiosInstance'
import { useRouter } from "next/navigation";
i18Instance()

const page = ()=> {

  const { t } = useTranslation();

  const router = useRouter()

  const [Data, setData] = useState([])

  useEffect(() => {
    getPoliceStationDatas()
  }, []);

  const getPoliceStationDatas = () => {
    axios.get('/admin/police-stations').then((response) => {
      const { data } = response;
      setData(data)
    })
      .catch((error) => {
        console.log(error.message);
      })
  };

  return(
      <>
      <div className=" bg-[#e9e4ce49]">
        <Navbar/>
            <div className="py-10 ">
                <div className="text-5xl font-bold leading-9 text-center text-[#15233E]">
                    <h1 className="underline pt-14 font-headingFont" title={t('navi_mumbai_police_station_info')}>{t('navi_mumbai_police_station_info')}</h1>
                </div>
            </div>
            <div>
      <div className="grid p-4 text-center border md:mx-40 md:grid-cols-34 ">
        <div className="col-span-6 row-start-1 p-2 bg-green-300 border">
        {t('zone_1')}
        </div>
        <div className="col-span-6 row-start-1 p-2 bg-green-300 border">
        {t('zone_2')}
        </div>
        <div className="col-span-3 row-start-2 p-2 bg-green-500 border">
         {t('vashi_division')}
        </div>
        <div className="col-span-3 row-start-2 p-2 bg-green-500 border">
          {t('turbhe_division')}
        </div>
        <div className="col-span-3 row-start-2 p-2 bg-green-500 border">
          {t('panvel_division')}
        </div>
        <div className="col-span-3 row-start-2 p-2 bg-green-500 border">
          {t('port_division')}
        </div>
        <div onClick={() => (router.push(`/police-station/64b698c7d10415847f71064a`))} className="col-span-3 row-start-3 p-2 border cursor-pointer bg-lime-300">
         {t('washi')}
        </div>
        <div onClick={() => (router.push(`/police-station/64b69616d10415847f710642`))} className="col-span-3 row-start-3 p-2 border cursor-pointer bg-emerald-300">
          {t('trubhe_midc')}
        </div>
        <div onClick={() => (router.push(`/police-station/64b67758d10415847f710613`))} className="col-span-3 row-start-3 p-2 bg-teal-300 border cursor-pointer">
          {t('kharghar')}
        </div>
        <div onClick={() => (router.push(`/police-station/64b69788d10415847f710646`))} className="col-span-3 row-start-3 p-2 border cursor-pointer bg-cyan-300">
          {t('uran')}
        </div>
        <div onClick={() => (router.push(`/police-station/64b3f927fd730a775b814880`))} className="col-span-3 row-start-4 p-2 border cursor-pointer bg-lime-300">
         {t('apmc')}
        </div>
        <div onClick={() => (router.push(`/police-station/64b693c2d10415847f71063a`))} className="col-span-3 row-start-4 p-2 border cursor-pointer bg-emerald-300">
          {t('sanpada')}
        </div>
        <div onClick={() => (router.push(`/police-station/64b694d1d10415847f71063d`))} className="col-span-3 row-start-4 p-2 bg-teal-300 border cursor-pointer">
          {t('taloja')}
        </div>
        <div onClick={() => (router.push(`/police-station/64b67fafd10415847f710622`))} className="col-span-3 row-start-4 p-2 border cursor-pointer bg-cyan-300">
          {t('nhava_sheva')}
        </div>
        <div onClick={() => (router.push(`/police-station/64b678e8d10415847f710617`))} className="col-span-3 row-start-5 p-2 border cursor-pointer bg-lime-300">
         {t('kopar_khairane')}
        </div>
        <div onClick={() => (router.push(`/police-station/64b67e44d10415847f71061f`))} className="col-span-3 row-start-5 p-2 border cursor-pointer bg-emerald-300">
          {t('nerul')}
        </div>
        <div onClick={() => (router.push(`/police-station/64b6716bd10415847f710609`))} className="col-span-3 row-start-5 p-2 bg-teal-300 border cursor-pointer">
          {t('kalamboli')}
        </div>
        <div onClick={() => (router.push(`/police-station/64b67d0ad10415847f71061c`))} className="col-span-3 row-start-5 p-2 border cursor-pointer bg-cyan-300">
          {t('mora_sagari')}
        </div>
        <div onClick={() => (router.push(`/police-station/64b68e50d10415847f710633`))} className="col-span-3 row-start-6 p-2 border cursor-pointer bg-lime-300">
         {t('rabale')}
        </div>
        <div onClick={() => (router.push(`/police-station/64b680fbd10415847f710626`))} className="col-span-3 row-start-6 p-2 border cursor-pointer bg-emerald-300">
          {t('nri')}
        </div>
        <div onClick={() => (router.push(`/police-station/64b6760ed10415847f710610`))} className="col-span-3 row-start-6 p-2 bg-teal-300 border cursor-pointer">
          {t('khandeshwar')}
        </div>
        <div className="col-span-3 row-start-6 p-2 border bg-cyan-300">
          
        </div>
        <div onClick={() => (router.push(`/police-station/64b6928fd10415847f710636`))} className="col-span-3 row-start-7 p-2 border cursor-pointer bg-lime-300">
         {t('rabale_midc')}
        </div>
        <div onClick={() => (router.push(`/police-station/64b62086e2be1126c6e7079a`))} className="col-span-3 row-start-7 p-2 border cursor-pointer bg-emerald-300">
          {t('cbd_belapur')}
        </div>
        <div  onClick={() => (router.push(`/police-station/64b6727ed10415847f71060c`))} className="col-span-3 row-start-7 p-2 bg-teal-300 border cursor-pointer">
          {t('kamothe')}
        </div>
        <div className="col-span-3 row-start-7 p-2 border bg-cyan-300">
          
        </div>
        <div className="col-span-3 p-2 border row-start-8 bg-lime-300">
         
        </div>
        <div className="col-span-3 p-2 border row-start-8 bg-emerald-300">
          
        </div>
        <div onClick={() => (router.push(`/police-station/64b68aa0d10415847f71062c`))} className="col-span-3 p-2 bg-teal-300 border cursor-pointer row-start-8">
          {t('panvel')}
        </div>
        <div className="col-span-3 p-2 border row-start-8 bg-cyan-300">
          
        </div>
        <div className="col-span-3 p-2 border row-start-9 bg-lime-300">
         
        </div>
        <div className="col-span-3 p-2 border row-start-9 bg-emerald-300">
          
        </div>
        <div onClick={() => (router.push(`/police-station/64b68cb0d10415847f71062f`))} className="col-span-3 p-2 bg-teal-300 border cursor-pointer row-start-9">
          {t('panvel_taluka')}
        </div>
        <div className="col-span-3 p-2 border row-start-9 bg-cyan-300">
          
        </div>
        
      </div>
    </div>
            <div className=" md:mt-[5rem]">
                <Footer />
            </div>
      </div>
      </>
  )
};

export default page;