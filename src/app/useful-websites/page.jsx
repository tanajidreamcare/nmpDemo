"use client"
import React from "react";
import { BsLink45Deg } from "react-icons/bs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation} from "react-i18next";
import i18Instance from "@/customHooks/i18Instance";

i18Instance()

function Page  ()  {

  const { t } = useTranslation();
  
  const table = [
    {
      Name_of_office : t('web_3'),
      link  : "https://aaplesarkar.mahaonline.gov.in/",
      
    },
    {
        Name_of_office : t('web_10'),
        link  : "https://www.mahapolice.gov.in/",
        
      },
      {
        Name_of_office : t('web_22'),
        link  : "https://cybercrime.gov.in/",
        
      },
      {
        Name_of_office : t('web_11'),
        link  : "https://pcs.mahaonline.gov.in/Forms/Home.aspx",
        
      },
      {
        Name_of_office : t('crime_branch_11'),
        link  : "https://citizen.mahapolice.gov.in/Citizen/MH/index.aspx",
        
      },
      {
        Name_of_office : t('web_18'),
        link  : "https://www.indiacode.nic.in/",
        
      },
      {
        Name_of_office : t('web_7'),
        link  : "https://www.maharashtra.gov.in/",
        
      },
      {
        Name_of_office : t('web_8'),
        link  : "https://www.india.gov.in/",
        
      },
      {
        Name_of_office : t('web_6'),
        link  : "https://main.sci.gov.in/",
        
      },
      {
        Name_of_office : t('web_5'),
        link  : "https://bombayhighcourt.nic.in/index.php",
        
      },
      {
        Name_of_office : t('web_4'),
        link  : "https://mumbaipolice.gov.in/",
        
      },
      {
        Name_of_office : t('web_15'),
        link  : "https://trafficpolicemumbai.maharashtra.gov.in/",
        
      },
      {
        Name_of_office : t('web_2'),
        link  : "https://www.thanepolice.gov.in/",
        
      },
      {
        Name_of_office : t('web_24'),
        link  : "https://thaneruralpolice.gov.in/",
        
      },
      {
        Name_of_office : t('web_25'),
        link  : "https://palgharpolice.gov.in/",
        
      },
      {
        Name_of_office : t('web_26'),
        link  : "https://mbvv.mahapolice.gov.in/",
        
      },
      {
        Name_of_office : t('web_27'),
        link  : "https://raigadpolice.gov.in/",
        
      },
      {
        Name_of_office :t('web_21'),
        link  : "https://punepolice.gov.in/",
        
      },
      {
        Name_of_office : t('web_28'),
        link  : "http://ratnagiripolice.co.in/",
        
      },
      {
        Name_of_office : t('web_29'),
        link  : "https://sindhudurgpolice.gov.in/PoliceR?page=6",
        
      },
   
  ];
  return (
    <div>
      <Navbar/>
      <div className="bg-[#e9e4ce49] h-full pb-10 ">
      <div className="font-bold  text-5xl leading-9 text-center text-[#15233E] pt-14">
            <h1 className="underline pt-14 font-headingFont" title={t('useful_website')}>{t('useful_website')}</h1>
          </div>
        <table className=" text-[#15233E] flex justify-center items-center pt-10">
          <thead className="flex items-center justify-center ">
            <div className="mx-2 lg:mx-5">
              
              {table.map((hierarchy) => (
                <tr className="bg-lime-200">
                  <th
                    scope="col"
                    title={hierarchy.Name_of_office}
                    className=" px-1 lg:px-6 py-3 text-left text-sm font-medium text-[#15233E] align-middle border border-black"
                  >
                    {hierarchy.Name_of_office}
                  </th>
                  <th
                    scope="col"
                    className="px-1 lg:px-6 py-3 text-left text-sm font-medium text-[#15233E]  align-middle border border-black"
                  >
                    
                    <span className="flex justify-center text-orange-700">
                     <a href={hierarchy.link} target="#">
                     <BsLink45Deg size={30}  />
                     </a>
                    </span>
                  </th>
                  

                 
                </tr>
              ))}
            </div>
          </thead>
        </table>
      </div>
      <div className=" md:mt-[0rem]">
    <Footer />
      </div>
    </div>
  );
};

export default Page;