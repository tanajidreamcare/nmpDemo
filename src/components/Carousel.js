"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import axios from '@/customHooks/axiosInstance'
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import i18Instance from "@/customHooks/i18Instance";
import { FcBusinesswoman } from "react-icons/fc";
import { FcManager } from "react-icons/fc";
import { FcPhone } from "react-icons/fc";

i18Instance()

const Carousel = () => {

  const { t } = useTranslation();

  const emergencyContacts = [
    { title: t('call_1'), link: "tel:112" },
    { title: t('call_2'), link: "tel:7738393839" },
    { title: t('call_4'), link: "tel:1930" },
    { title: t('call_5'), link: "tel:103" },
    { title: t('call_6'), link: "tel:1093" },
    { title: t('call_7'), link: "tel:1090" },
    { title: t('call_8'), link: "tel:8424820665,8424820686" },
  ];


  const [emergencyContactstoggle, setemergencyContactstoggle] = useState(false)
  const router = useRouter()
  

  const [currentIndex, setCurrentIndex] = useState(0);

  const [isDropDownOpen, setisDropDownOpen] = useState(false);

  const toggleDropdown = () => {
    setisDropDownOpen(!isDropDownOpen);
  };

  const [Data, setData] = useState([])


  useEffect(() => {
    getHeadlinesData();
    getPoliceStationDatas()
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 5);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const [headlinesData, setheadlinesData] = useState([])

  const getHeadlinesData = () => {
    axios.get('/admin/headlines').then((response) => {
      const { data } = response;
      setheadlinesData(data)
    })
      .catch((error) => {
        console.log(error.message);
      })
  };

  const getPoliceStationDatas = () => {
    axios.get('/admin/police-stations').then((response) => {
      const { data } = response;
      setData(data)
    })
      .catch((error) => {
        console.log(error.message);
      })
  };


  return (
    <div className="relative w-full p-0 ">


      <div className="relative md:block pb-[50%] md:pb-0 w-full" >

        <iframe className="hidden md:block rep " width="560" height="315" src="https://www.youtube-nocookie.com/embed/S7JpI06xaHk?autoplay=1&loop=1&playlist=S7JpI06xaHk&mute=1&controls=0&rel=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe className="md:hidden rep " width="560" height="315" src="https://www.youtube.com/embed/4Do9z4-Ee0E?autoplay=1&mute=1&loop=1&playlist=ixomwj9LP2s" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        <div className="z-10 md:bg-opacity-[68%] md:w-[7%] w-[25%] opacity- h-screen ">
          <div  onMouseEnter={() => setemergencyContactstoggle(true)} onMouseLeave={() => setemergencyContactstoggle(false)} className="hidden md:flex">

            <Image
              src="/call_img.png"
              alt="hb"
              width={60}
              height={60}
              className="absolute  w-16 h-16 cursor-pointer bottom-[45%] right-[5%] md:right-16 md:top-16 hover:scale-125 hover:shadow-xl"
            />
            <div >
              {emergencyContactstoggle && (
                <div className="absolute z-50 bottom-[45%] right-[5%]">
                  <ul className="text-black w-[125%] bg-white px-6 py-2 border-[1px] rounded-lg">
                    {emergencyContacts.map((contact, i) => (
                      <li key={i} className="hover:text-[#E7581A] w-48 ">
                        <a href={contact.link}><p className="font-bold" title={contact.title}>{contact.title}</p></a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div onClick={() => (setemergencyContactstoggle(!emergencyContactstoggle))}  className="md:hidden">
            <Image
              src="/call_img.png"
              alt="hb"
              width={60}
              height={60}
              className="absolute w-16 h-16 cursor-pointer bottom-[36%] right-[5%] md:right-16 md:top-16 hover:scale-125 hover:shadow-xl"
            />
            <div className="">
              {emergencyContactstoggle && (
                <div className="absolute z-50 bottom-[45%] right-[5%]">
                  <ul className="text-black bg-white px-6 py-2 border-[1px] rounded-lg">
                    {emergencyContacts.map((contact, i) => (
                      <li key={i} className="hover:text-[#E7581A] w-48">
                        <a href={contact.link} title={contact.title}>{contact.title}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            </div>


          </div>
          <div className="flex bg-[#15233EAD] md:h-full  justify-center ">
            <div className="z-10 flex justify-center py-3 text-xs bg-transparent">
              <ul className="z-20 space-y-2 mt-28">
                <li className="text-white border-b-4 cursor-pointer ">
                  <a href="tel:112">
                  <div className="flex justify-center">
                    <Image
                      src="/emergency_img.png"
                      alt="Emergency Help"
                      className="hover:filter w-[36px] h-[30px] mt-2 hover:brightness-75"
                      width={70}
                      height={50}
                    />
                  </div>
                  <h1 title={t('emergency')} className="w-full mb-2 text-center hover:text-[#EB1815] ">
                    {t('emergency')}
                  </h1>
                  </a>
                </li>

                <a href="https://citizen.mahapolice.gov.in/Citizen/MH/index.aspx" target="_blank">
                <li className="pt-2 text-white border-b-4 cursor-pointer">
                <div className="flex justify-center">
                    <Image
                      src="/old_citizen.jpg"
                      alt="Citizen Portal"
                      className="hover:filter w-[36px] h-[30px] hover:brightness-75 mt-2"
                      width={70}
                      height={50}
                    />
                  </div>
                  <h1 title={t('citizen_wall')} className="w-full mb-4 text-center hover:text-[#EB1815]">
                    {t('citizen_wall')}
                  </h1>
                </li>
                </a>                
                
                <li onClick={() => (router.push('/traffic-branch'))} className="text-white border-b-4 cursor-pointer">
                  <div className="flex justify-center">
                    <Image
                      src="/old_traffic.jpeg"
                      alt="Emergency Help"
                      className="hover:filter w-[36px] h-[30px] hover:brightness-75 mt-2"
                      width={70}
                      height={50}
                    />
                  </div>
                  <h1 title={t('traffic_branch')} onClick={() => (router.push('/traffic-branch'))}  className="w-full mb-2 text-center hover:text-[#EB1815]">
                    {t('traffic_branch')}
                  </h1>
                </li>
                
                <li onClick={() => (router.push('/passport-status'))} className="text-white border-b-4 cursor-pointer">
                <div className="flex justify-center text-white">
                    <Image
                      src="/old_passport.jpeg"
                      alt="Passport Branch"
                      className="hover:filter w-[36px] h-[34px] hover:brightness-75"
                      width={75}
                      height={50}
                    />
                  </div>
                  <h1 title={t('passport_status')} onClick={() => (router.push('/passport-status'))} className="w-full mb-2 text-center hover:text-[#EB1815]">
                    {t('passport_status')}
                  </h1>
                </li>

                <li onClick={() => (router.push('/useful-websites'))} className="text-white border-b-4 cursor-pointer">
                <div className="flex justify-center text-white">
                    <Image
                      src="/citizen_img.png"
                      alt="Passport Branch"
                      className="hover:filter w-[36px] h-[34px] hover:brightness-75"
                      width={75}
                      height={50}
                    />
                  </div>
                  <h1 title={t('useful_website')} onClick={() => (router.push('/useful-websites'))} className="w-full mb-4 text-center hover:text-[#EB1815]">
                    {t('useful_website')}
                  </h1>
                </li>

                
                <li onClick={() => (router.push('/crime-branch'))} className="text-white cursor-pointer">
                <div className="flex justify-center">
                    <Image
                      src="/old_crime.jpeg"
                      alt="Crime Branch"
                      className="hover:filter w-[36px] h-[30px] hover:brightness-75 mt-2"
                      width={75}
                      height={50}
                    />
                  </div>
                  <h1 title={t('crime_branch')}  onClick={() => (router.push('/crime-branch'))} className="w-full mb-4 text-center hover:text-[#EB1815]">
                    {t('crime_branch')} 
                  </h1>
                </li>
                

              
              </ul>
            </div>
          </div>
        </div>

        <div className="absolute top-[10%] md:top-[55%] left-[25%] md:left-[31%] w-[60%] md:w-[40%] bg-white border-[1px] border-[#E7581A] rounded-2xl py-2 px-4 z-20">
          <button onClick={toggleDropdown} className="dropdown-toggle text-[#E7581A] flex justify-between w-full">
            <span title={t('select_police_station')}>{t('select_police_station')}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-4 w-4 text-[#E7581A] transition-transform ${toggleDropdown ? "" : "rotate-180"
                }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {isDropDownOpen && (
            <div>
              {Data.map((policeData, i) => (
                <ul key={i} className="dropdown-menu">

                  <li onClick={() => (router.push(`/police-station/${policeData._id}`))} className="cursor-pointer hover:text-[#E7581A]" title={policeData.stationEng}>{policeData.stationEng}</li>


                </ul>
              ))}
            </div>
          )}
        </div>

        <div className=" absolute bottom-[30%] md:bottom-20 left-[5%] w-[90%] flex justify-center">
          <div className=" md:w-[70%]  z-10 flex items-center justify-center w-full">
            <div className="flex w-full border-1">
              <div className="w-[172px] h-[48px] px-3 text-base bg-orange-600 rounded-l-full font-extrabold leading-7 text-center align-middle">
                <h5 className="flex items-center justify-center h-full text-white">{t('headline')}</h5>
              </div>
              <div className="flex items-center justify-center w-full text-center text-black bg-white rounded-r-full h-50">
                <marquee>
                  {headlinesData?.map((headlines, index) => (
                    <a href={headlines.link} className="px-5 text-base font-medium" title={headlines.titleEnglish}>{headlines.titleEnglish}</a>
                  ))}
                </marquee>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Carousel;
