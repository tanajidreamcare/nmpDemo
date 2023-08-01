"use client"
import Navbar from '@/components/Navbar';
import { AiOutlineMessage } from 'react-icons/ai';
import { FiPhoneCall } from 'react-icons/fi';
import axios from '@/customHooks/axiosInstance'
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import { useTranslation} from "react-i18next";
import i18Instance from "@/customHooks/i18Instance";
i18Instance()

function Page() {

  const { t } = useTranslation();

  const [Data, setData] = useState([])
  useEffect(() => {
    axios.get('/admin/divisional-acps').then((response) => {
      const data = response.data;
      setData(data);
    });
  }, []);
  
  return (
    <div>
      <Navbar/>
      <div className="">
      <div className="font-bold  text-5xl leading-9 text-center text-[#15233E] py-10">
            <h1 className="underline py-14 font-headingFont" title={t('divisional_acp')}>{t('divisional_acp')}</h1>
          </div>
      <div className="justify-center w-full md:flex">
      <div className="items-center justify-center w-full grid-cols-3 md:grid">
      {Data.map((card, index) => (
        <div key={index} className="border rounded-lg p-4 shadow-2xl w-[362px] my-10 md:mx-auto">
          <div className="md:flex justify-center md:bg-blue-950 rounded-xl h-[239px]">
            <img src={`http://3.111.197.119/uploads/${card.filename}`} height={253} width={301} />
          </div>
          <div className="mt-20 text-center md:mt-0">
            <div>
              <h1 className="text-lg font-semibold text-orange-600 md:mt-2" title={card.nameEng}>{card.nameEng}</h1>
            </div>
            <div>
              <h1 className="mt-1 text-sm font-semibold" title={card.designationEng}>{card.designationEng}</h1>
            </div>
            <div className="flex justify-center">
              <span className="mt-2 text-orange-700 ">
                <a className="flex gap-5 mx-4" href={`mailto:${card.email}`} title={card.email}><AiOutlineMessage size={24}/>{card.email}</a>
                <a className="flex gap-5 mx-4" href={`tel:${card.mobNo}`} title={card.mobNo}><FiPhoneCall size={24}/>{card.mobNo} </a>
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
        </div>
    </div>
    <div className=" md:mt-[3rem]">
    <Footer />
      </div>
      </div>
  );
};

export default Page;
