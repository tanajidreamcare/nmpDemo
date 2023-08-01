"use client";
import Image from "next/image";
import { GrStatusUnknown } from "react-icons/gr";
import { GiPoliceOfficerHead } from 'react-icons/gi'
import { LuNewspaper } from "react-icons/lu";
import { FaPassport, FaInternetExplorer } from "react-icons/fa";
import { HiSpeakerphone } from "react-icons/hi";
import { AiFillFileAdd } from "react-icons/ai";
import { GiDeadlyStrike } from "react-icons/gi";
import { TbUserSearch } from "react-icons/tb";
import { BsCheck2Square, BsQuestionSquare } from "react-icons/bs";
import { IoMdWallet } from "react-icons/io";
import { BiMessageDetail } from "react-icons/bi";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslation} from "react-i18next";
import i18Instance from '@/customHooks/i18Instance';

i18Instance()

export default function BestServices() {

  const { t } = useTranslation();

  const router = useRouter();

  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const servicesName1 = [
    {
      index: 1,
      name: t('online_complaint'),
      message: t('police_recruitment_msg'),
      icon: <GiPoliceOfficerHead size={35} style={{ color: "white" }} />,
      link: "https://citizen.mahapolice.gov.in/Citizen/Login.aspx"
    },
    {
      index: 2,
      name: t('tenant_information'),
      message: t('press_release_msg'),
      icon: <LuNewspaper size={35} />,
      link: "/tenant-info"
    },
    {
      index: 3,
      name: t('lost_found'),
      message: t('passport_msg'),
      icon: <FaPassport size={35} />,
      link: "/lost-and-found"
    },
    {
      index: 4,
      name: t('loudspeaker_permission'),
      message: t('laudspeaker_msg'),
      icon: <HiSpeakerphone size={35} />,
      link:"/loud-speaker",
    },
    {
      index: 5,
      name: t('police_clearance'),
      message: t('dead_bodies_msg'),
      icon: <GiDeadlyStrike size={35} />,
      link:'https://pcs.mahaonline.gov.in/Forms/Home.aspx',
    },
    {
      index: 6,
      name: t('feedback'),
      message: t('missing_person_msg'),
      icon: <BsQuestionSquare size={35} />,
      link:'/feedback',
    },
  ];

  const servicesName2 = [
    {
      index: 7,
      name: t('nccrp'),
      message: t('dcp_visit_msg'),
      icon: <FaInternetExplorer size={35} />,
      link:"https://cybercrime.gov.in/"
    },
    {
      index: 8,
      name: t('published_fir'),
      message: t('police_clearance_msg'),
      icon: <BsCheck2Square size={35} />,
      link:"https://citizen.mahapolice.gov.in/Citizen/MH/PublishedFIRs.aspx",
    },
    {
      index: 9,
      name: t('nagarikanchi_sanad'),
      message: t('citizen_portal_msg'),
      icon: <IoMdWallet size={35} />,
      link:'/nagarikanchi-sanad',
    },
    {
      index: 10,
      name: t('right_to_info'),
      message: t('feedback_msg'),
      icon: <BiMessageDetail size={35} />,
      link: "/right-to-information"
    },
    {
      index: 11,
      name: t('missing_person'),
      message: t("stolan_vehicle"),
      icon: <TbUserSearch size={35} />,
      link:"https://citizen.mahapolice.gov.in/Citizen/MH/SearchView.aspx"
    },
    {
      index: 12,
      name: t('unidentified_dead_bodies'),
      message: t('dead_bodies_msg'),
      icon: <GiDeadlyStrike size={35} />,
      link:'https://citizen.mahapolice.gov.in/Citizen/MH/SearchDeadBodyList.aspx',
    },
  ];
  return (
    <>
      <div className="-mt-64 text-center bg-white md:mt-0">
        <div title={t('our_best_services')} className="mb-10  -mt-48 md:mt-0 md:pt-10 md:text-3xl font-extrabold leading-9 text-[24px] text-[#15233E]">
        {t('our_best_services')}
        </div>
        <div className="flex justify-center w-full ">
          <div className="flex justify-center md:w-3/12 w-[138px] lg:w-3/12 mx-2">
            <div>
              {servicesName1.map((serviceName) => (
                <div className="text-left md:justify-center" key={serviceName.index}>
                  <div  className={`flex  cursor-pointer justify-end`}>
                  <div onClick={() => (router.push(serviceName.link))} className={` hover:text-[#E7581A] my-14 md:mx-2 md:hidden md:my-0 `}>
                      <div  className={`flex justify-center w-16 h-16 rounded-full ${hoveredItem === serviceName.index ? "bg-sky-900" : "bg-[#E7581A] "} cursor-pointer`}>
                        <div className={`flex items-center text-white`}>
                          {serviceName.icon}
                        </div>
                      </div>
                    </div>
                    <div className="sm:text-left   hover:text-[#E7581A] md:text-right">
                      <div title={serviceName.name} onClick={() => (router.push(serviceName.link))} className="text-[16px] flex items-center h-full md:text-[24px] lg:text-xl font-bold mt-2 ml-2 md:ml-0  md:mt-0 text-[#15233E] hover:text-[#E7581A]">
                        <h1>{serviceName.name}</h1>
                      </div>
                      {/* <div onClick={() => (router.push(serviceName.link))} className="hidden text-xs font-normal sm:block md:text-sm text-[#15233E] hover:text-[#E7581A]">
                        {serviceName.message}
                      </div> */}
                    </div>
                    <div className="hidden mx-2 md:block">
                      <div  className={`flex justify-center md:w-16 md:h-16 bg-[#E7581A]  hover:bg-sky-900 w-[50px] h-[50px]   rounded-full cursor-pointer`}>
                        <div onClick={() => (router.push(serviceName.link))} className={`flex  items-center text-white`}>
                          {serviceName.icon}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hidden my-4 font-extrabold md:block">
                    {serviceName.index == 6 ? (
                      ""
                    ) : (
                      <hr />
                    )}
                    
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center mx-2 cursor-pointer sm:w-1/12 md:w-2/12 ">
            <Image
              src="/bestService_img.png"
              width={190}
              height={50}
              className="hidden object-none sm:block w-[100%]"
              alt="Picture of the Police Officer"
            />
          </div>
          <div className="flex justify-center hover:text-[#E7581A] cursor-pointer md:w-3/12 w-[138px] lg:w-3/12 mx-2 ">
            <div>
              {servicesName2.map((serviceName) => (
                <div className="justify-center " key={serviceName.index}>
                  <div className="flex ">
                    <div className="mx-2 mt-14 my-14 md:my-0">
                      <div className="flex justify-center w-16 h-16 bg-[#E7581A] rounded-full cursor-pointer hover:bg-sky-900">
                        <div onClick={() => (router.push(serviceName.link))} className="flex items-center text-white">
                          {serviceName.icon}
                        </div>
                      </div>
                    </div>
                    <div className="text-left hover:text-[#E7581A]">
                      <div title={serviceName.name} onClick={() => (router.push(serviceName.link))} className="text-[16px] flex items-center h-full md:text-xl font-bold mt-2 ml-2 md:ml-0 md:mt-0 text-[#15233E] hover:text-[#E7581A]">
                        {serviceName.name}
                      </div>
                      {/* <div onClick={() => (router.push(serviceName.link))} className="hidden text-xs md:text-sm font-normal sm:block md:text-[16px] text-[#15233E] hover:text-[#E7581A]">
                        {serviceName.message}
                      </div> */}
                    </div>
                  </div>
                  <div className="hidden my-4 font-extrabold md:block">
                  {serviceName.index == 12 ? (
                      ""
                    ) : (
                      <hr />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
