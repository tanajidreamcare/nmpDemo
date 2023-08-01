'use client'
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'
import { useRouter } from "next/navigation";
import { BsSearch } from "react-icons/bs"
import i18n from 'i18next';


const Navbar = () => {
  const [searchOn, setsearchOn] = useState(false)
  const router = useRouter();
  const [aboutUsToggle, setaboutUsToggle] = useState(false)
  const [reportUsToggle, setreportUsToggle] = useState(false)
  const [SpecialUnits1Toggle, setSpecialUnits1Toggle] = useState(false)
  const [CitizenCornerToggle, setCitizenCornerToggle] = useState(false)
  const [PoliceCornerToggle, setPoliceCornerToggle] = useState(false)
  const [ContactUsToggle, setContactUsToggle] = useState(false)
  const [selectedOption, setSelectedOption] = useState("English");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [aboutUsMobile, setaboutUsMobile] = useState(false)
  const [reportUsMobile, setreportUsMobile] = useState(false)
  const [SpecialUnits1Mobile, setSpecialUnits1Mobile] = useState(false)
  const [CitizenCornerMobile, setCitizenCornerMobile] = useState(false)
  const [PoliceCornerMobile, setPoliceCornerMobile] = useState(false)
  const [ContactUsMobile, setContactUsMobile] = useState(false)

  const [currentLang, setCurrentLang] = useState("");
  const KEY = "selectedLanguage"

  const getKey = () => {
    return localStorage.getItem(KEY) || "en";
  };

  useEffect(() => {
    // Get the key from local storage

    const key = getKey();
    setCurrentLang(key);
  }, []);


  useEffect(() => {
    i18n.changeLanguage(currentLang);
    localStorage.setItem(KEY, currentLang)
  }, [currentLang])

  const { t } = useTranslation();

  const handleOptionChange = (option) => {
    setCurrentLang(option);
    setIsDropdownOpen(false);
  };
  const aboutUs = [
    { title: t('our_mission'), link: "/our-mission" },
    { title: t('hall_of_fame'), link: "/hall-of-fame" },
    { title: t('responsibility'), link: "/responsibility" },
    // { title: t('hierarchy'), link: "/hierarchy" },
    { title: t('organizational_structure'), link: "/organizational-structure" },
    { title: t('navi_mumbai_police_map'), link: "/police-map" },
    { title: t('history'), link: "/history" },
    { title: t('initiative'), link: "/initiatives" },
    // { title: t('gallery')},
    { title: t('martyrs'), link: "/martyrs" },
    { title: t('navi_mumbai_police_station_info'), link: "/navi-mumbai-police-station-information" }
  ]

  const ReportUs = [
    { title: t('online_complaint'), link: "https://citizen.mahapolice.gov.in/Citizen/MH/index.aspx", },
    { title: t('tenant_information'), link: "/tenant-info" },
    { title: t('lost_found'), link: "/lost-and-found" },
    { title: t('feedback'), link: "/feedback" },
  ]

  const SpecialUnits1 = [
    { title: t('crime_branch'), link: "/crime-branch" },
    { title: t('economic_offence_wing'), link: "/economic-offence-wing" },
    { title: t('traffic_branch'), link: "/traffic-branch" },
    // { title: t('police_sergeon') },
    { title: t('motor_transport_unit'), link: "/motor-transport-unit" },
    // { title: t('navi_mumbai_police_band')},
  ]

  const SpecialUnits2 = [
    // { title: t('local_armed_police') },
    // { title: t('quick_response_team') },
    // { title: t('riot_control_police')},
    // { title: t('modemized_control_room') },
    // { title: t('protection_security') },
    { title: t('cctns'), link: "/cctns" },
    { title: t('control_room'), link: "/control-room" },
    { title: t('police_head_quarter'), link: "/police-headquarter" },
    { title: t('special_branch'), link: "/special-branch" },
  ]

  const SpecialUnits3 = [
    { title: t('cyber_crime'), link: "/cyber-crime" },
    { title: t('communication_it'), link: "/communication-it" },
    { title: t('women_assistance_cell'), link: "/women-assistant-cell" },
    // { title: t('juvenile_aid_protection_unit') },
    // { title: t('anti_human_trafficking_unit') },
    // { title: t('crime_detection_unit')},
    { title: t('licence_branch'), link: "/licence-branch" },
  ]

  const CitizenCorner = [
    { title: t('search_and_view_fir'), link: "https://citizen.mahapolice.gov.in/Citizen/MH/PublishedFIRs.aspx", target: "_blank" },
    // { title: t('shooting_aaplication') },
    { title: t('police_clearance'), link: "https://pcs.mahaonline.gov.in/Forms/Home.aspx" },
    { title: t('loudspeaker_permission'), link: "/loud-speaker" },
    { title: t('accident_compensation'), link: "/accident-compensation" },
    { title: t('right_to_info'), link: "/right-to-information" },
    // { title: t('your_contribution') },
    { title: t('passport_status'), link: "/passport-status" },
    { title: t('police_recruitments'), link: "/police-recruitment" },
  ]

  const CitizenCorner2 = [
    // { title: t('gras_payment') },

    { title: t('useful_website'), link: "/useful-websites" },
    // { title: t('licensing_unit')},
    { title: t('citizen_wall'), link: "https://citizen.mahapolice.gov.in/Citizen/MH/index.aspx" },
    { title: t('safety_tips'), link: "/safety-tips" },
    // { title: t('dcp_visits'), link:"/dcp-visits"},
    // { title: t('tenders') },
    { title: t('faqs'), link: "/faqs" },
    { title: t('nagarikanchi_sanad'), link: "/nagarikanchi-sanad" },
  ]

  const PoliceCorner = [
    // { title: t('police_staff_council_meetings') },
    // { title: t('police_foundation') },
    // { title: t('welfare_activities'), link:"/police-welfare"}, 
    // { title: t('media_coverage') },
    { title: t('press_release'), link: "/press-releases" },
    { title: t('crime_review'), link: "/crime-review" },
    // { title: t('miscellaneoue') },

    { title: t('good_work'), link: "/good-work" },
  ]

  const ContactUs = [
    // { title: t('police_station_incharge'), link:"" },
    { title: t('senior_police_officers'), link: "/senior-police-officers" },
    { title: t('divisional_acp'), link: "/divisional-acps" },
    { title: t('emergency_contacts'), link: "/emergency-contacts" },
  ]

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed z-30 flex items-center justify-between w-full px-2 py-5 -mt-2 bg-[#F8F8F8]">
      <div className="relative md:w-[150px] ">
        <a href="/">
          <img
            src="/navbarLogo.jpeg"
            alt="Logo"
            className="hidden md:block absolute rounded-3xl -top-16 -left-2 w-[150px] mr-2 mt-2"
          />
        </a>


        <a href="/" title={t('navi_mumbai_police')} className="md:hidden mx-1 text-[1.4em] w-full md:w-auto font-semibold leading-[36px] text-sky-900 hover:text-[#E7581A]">
          {t('navi_mumbai_police')}
        </a>
      </div>

      <div className="flex items-center justify-around md:mt-0">
        <div className="justify-around hidden md:flex">
          <ul className="flex flex-col mt-[2px] text-lg w-11/12 mr-5 space-y-2 md:flex-row md:space-y-0 md:space-x-5 text-sky-900">
            <a href="/">
              <li title={t('home')} className="inline-flex font-medium leading-[28px] cursor-pointer hover:text-[#E7581A]">
                {t('home')}
              </li>
            </a>
            <li title={t('about_us')} onMouseEnter={() => setaboutUsToggle(true)} onMouseLeave={() => setaboutUsToggle(false)} className={`relative ${aboutUsToggle ? "hover:text-[#E7581A]" : ""} inline font-medium leading-[28px] cursor-pointer`}>
              {t('about_us')}
              {aboutUsToggle &&
                <div className="absolute z-50 -left-5">
                  <ul className="text-black bg-white px-6 py-2 border-[1px]  rounded-lg">
                    {aboutUs.map((about, i) => (
                      <a key={i} href="#">
                        <li onClick={() => (router.push(about.link))} className="hover:text-[#E7581A] w-48" key={i} title={about.title}>{about.title}</li>
                      </a>
                    ))}
                  </ul>
                </div>
              }
            </li>
            <li title={t('report_us')} onMouseEnter={() => setreportUsToggle(true)} onMouseLeave={() => setreportUsToggle(false)} className={`relative ${reportUsToggle ? "hover:text-[#E7581A]" : ""} inline font-medium leading-[28px] cursor-pointer`}>
              {t('report_us')}
              {reportUsToggle &&
                <div className="absolute z-50 -left-5">
                  <ul className="text-black bg-white px-6 py-2 border-[1px]  rounded-lg">
                    {ReportUs.map((report, i) => (
                      <li onClick={() => (router.push(report.link))} className="hover:text-[#E7581A] w-48" key={i} title={report.title}>{report.title}</li>
                    ))}
                  </ul>
                </div>
              }
            </li>
            <li title={t('special_units')} onMouseEnter={() => setSpecialUnits1Toggle(true)} onMouseLeave={() => setSpecialUnits1Toggle(false)} className={`relative ${SpecialUnits1Toggle ? "hover:text-[#E7581A]" : ""} inline font-medium leading-[28px] cursor-pointer`}>
              {t('special_units')}
              {SpecialUnits1Toggle &&
                <div className="absolute z-50 -left-80">
                  <ul className="text-black bg-white px-6 py-2 flex border-[1px]  rounded-lg">
                    <div>
                      {SpecialUnits1.map((special, i) => (
                        <li onClick={() => (router.push(special.link))} className="w-60 hover:text-[#E7581A]" key={i} title={special.title}>{special.title}</li>
                      ))}
                    </div>
                    <div>
                      {SpecialUnits2.map((special, i) => (
                        <li onClick={() => (router.push(special.link))} className="w-60 hover:text-[#E7581A]" key={i} title={special.title}>{special.title}</li>
                      ))}
                    </div>
                    <div>
                      {SpecialUnits3.map((special, i) => (
                        <li onClick={() => (router.push(special.link))} className="w-72 hover:text-[#E7581A]" key={i} title={special.title}>{special.title}</li>
                      ))}
                    </div>

                  </ul>
                </div>
              }
            </li>
            <li title={t('citizen_corner')} onMouseEnter={() => setCitizenCornerToggle(true)} onMouseLeave={() => setCitizenCornerToggle(false)} className={`relative ${CitizenCornerToggle ? "hover:text-[#E7581A]" : ""} inline font-medium leading-[28px] cursor-pointer`}>
              {t('citizen_corner')}
              {CitizenCornerToggle &&
                <div className="absolute z-50 -left-36">
                  <ul className="text-black bg-white px-6 py-2 flex border-[1px]  rounded-lg">
                    <div>
                      {CitizenCorner.map((special, i) => (

                        <li onClick={() => (router.push(special.link))} tar={special.target} className="w-60 hover:text-[#E7581A]" key={i} title={special.title}>{special.title}</li>
                      ))}
                    </div>
                    <div>
                      {CitizenCorner2.map((special, i) => (
                        <li onClick={() => (router.push(special.link))} className="w-32 hover:text-[#E7581A]" key={i} title={special.title}>{special.title}</li>
                      ))}
                    </div>
                  </ul>
                </div>
              }
            </li>
            <li title={t('police_corner')} onMouseEnter={() => setPoliceCornerToggle(true)} onMouseLeave={() => setPoliceCornerToggle(false)} className={`relative ${PoliceCornerToggle ? "hover:text-[#E7581A]" : ""} inline font-medium leading-[28px] cursor-pointer`}>
              {t('police_corner')}
              {PoliceCornerToggle &&
                <div className="absolute z-50 -left-5">
                  <ul className="text-black bg-white px-6 py-2 border-[1px]  rounded-lg">
                    {PoliceCorner.map((report, i) => (
                      <li onClick={() => (router.push(report.link))} className="hover:text-[#E7581A] w-56" key={i} title={report.title}> {report.title}</li>
                    ))}
                  </ul>
                </div>
              }
            </li>
            <li title={t('contact_us')} onMouseEnter={() => setContactUsToggle(true)} onMouseLeave={() => setContactUsToggle(false)} className={`relative ${ContactUsToggle ? "hover:text-[#E7581A]" : ""} inline font-medium leading-[28px] cursor-pointer`}>
              {t('contact_us')}
              {ContactUsToggle &&
                <div className="absolute z-50 -left-28">
                  <ul className="text-black bg-white px-6 py-2 border-[1px]  rounded-lg">
                    {ContactUs.map((report, i) => (
                      <li onClick={() => (router.push(report.link))} className="hover:text-[#E7581A] w-44" key={i} title={report.title}>{report.title}</li>
                    ))}
                  </ul>
                </div>
              }
            </li>
          </ul>
          <div className="flex items-center mx-2 w-1/12  me-10 text-[#E7581A]">
            {/* <div className="w-[36px] h-[36px] flex items-center justify-center m-2 font-normal border-2 rounded-md cursor-pointer">
                A+
              </div>
              <div className="w-[36px] h-[36px] flex items-center justify-center m-2 font-normal border-2 rounded-md cursor-pointer">
                A
              </div>
              <div className="w-[36px] h-[36px] flex items-center justify-center m-2 font-normal border-2 rounded-md cursor-pointer">
                A-
              </div> */}
            <div className="relative flex">
              <div  className="mt-[4px] mx-2">
                <BsSearch onClick={() => (setsearchOn(!searchOn))} />
                {searchOn &&
                  <div className="items-center text-gray-500 flex absolute -top-[6px] right-[102px]">
                    <input
                      type="text"
                      placeholder="Search"
                      className="bg-white rounded-lg py-1 px-2 w-[120px] border-2 border-gray-400 "
                    />
                 
                  </div>
                }
              </div>
              <button
                className="flex items-center space-x-1 cursor-pointer focus:outline-none"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span className="text-black-500">
                  {currentLang === 'en' ? 'English' : 'मराठी'}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 text-black transition-transform ${isDropdownOpen ? 'rotate-180' : ''
                    }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="absolute py-2 mt-2 bg-white rounded shadow -left-2">
                  <ul className="text-black">
                    <li
                      className="px-4 py-2 cursor-pointer hover:bg-white"
                      onClick={() => handleOptionChange('en')}
                    >
                      English
                    </li>
                    <li
                      className="px-4 py-2 cursor-pointer hover:bg-white"
                      onClick={() => handleOptionChange('mr')}
                    >
                      मराठी
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div className="w-16">
              {/* <BiSearch size={32} className="text-sky-900" /> */}
            </div>
          </div>
        </div>
        <div className="relative flex md:hidden text-[#E7581A]">
          {/* <div className="w-[36px] h-[36px] flex items-center justify-center m-2 font-normal border-[1px] rounded-md cursor-pointer">
              A+
            </div>
            <div className="w-[36px] h-[36px] flex items-center justify-center m-2 font-normal border-[1px] rounded-md cursor-pointer">
              A
            </div>
            <div className="w-[36px] h-[36px] flex items-center justify-center m-2 font-normal border-[1px] rounded-md cursor-pointer">
              A-
            </div> */}
          <div >
            <BsSearch />
          </div>
          <button
            className="flex items-center space-x-1 cursor-pointer  focus:outline-none"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <span className="text-black-500">{selectedOption}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-4 w-4 text-black transition-transform ${isDropdownOpen ? "rotate-180" : ""
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
          {isDropdownOpen && (
            <div className="absolute py-2 mt-2 bg-white rounded shadow -left-2 -top-2">
              <ul className="text-black">
                <li
                  className="px-4 py-2 cursor-pointer hover:bg-white"
                  onClick={() => handleOptionChange("English")}
                >
                  English
                </li>
                <li
                  className="px-4 py-2 cursor-pointer hover:bg-white"
                  onClick={() => handleOptionChange("मराठी")}
                // value={}
                >
                  मराठी
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* for smaller devices */}
        <div className="md:hidden ">
          <button
            className="flex items-center justify-center"
            onClick={handleMenuToggle}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 z-40 absolute top-20 right-10 text-[#E7581A]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-[#E7581A]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

          {isMenuOpen && (
            <div className="absolute right-0 w-full h-screen overflow-scroll border-b border-gray-200 top-12">
              <ul className="items-center px-6 pt-20 pb-6 overflow-auto text-lg text-left text-black bg-white ml-28">
                <li onClick={() => router.push("/")} title={t('home')} className="h-full px-8 py-4 cursor-pointer hover:bg-white">
                  {t('home')}
                </li>
                <li onClick={() => setaboutUsMobile(!aboutUsMobile)} className="px-8 py-4">
                  <div className="flex"> <span className="pr-12">{t('about_us')}</span> {aboutUsMobile ? <IoMdArrowDropup size={30} /> : <IoMdArrowDropdown size={30} />} </div>
                  {aboutUsMobile &&
                    <div className="w-full h-full mt-2 ml-6 text-sm ">
                      <ul className="rounded-lg ">
                        {aboutUs.map((about, i) => (
                          <><li onClick={() => (router.push(about.link))} className="py-2 " key={i} title={about.title}>{about.title}</li></>
                        ))}
                      </ul>
                    </div>
                  }
                </li>
                <li onClick={() => setreportUsMobile(!reportUsMobile)} className="px-8 py-4">
                  <div className="flex"> <span className="pr-10">{t('report_us')}</span> {reportUsMobile ? <IoMdArrowDropup size={30} /> : <IoMdArrowDropdown size={30} />} </div>
                  {reportUsMobile &&
                    <div className="w-full h-full mt-2 ml-6 text-sm">
                      <ul className="rounded-lg ">
                        {ReportUs.map((about, i) => (
                          <><li onClick={() => (router.push(about.link))} className="py-2 " key={i} title={about.title}>{about.title}</li></>
                        ))}
                      </ul>
                    </div>
                  }
                </li>

                <li onClick={() => setSpecialUnits1Mobile(!SpecialUnits1Mobile)} className="px-8 py-4">
                  <div className="flex"> <span className="pr-4">{t('special_units')}</span> {SpecialUnits1Mobile ? <IoMdArrowDropup size={30} /> : <IoMdArrowDropdown size={30} />} </div>
                  {SpecialUnits1Mobile &&
                    <div className="w-full h-full mt-2 ml-6 text-sm">
                      <ul className="rounded-lg ">
                        {SpecialUnits1.map((special, i) => (
                          <li onClick={() => (router.push(special.link))} className="py-2" key={i} title={special.title}>{special.title}</li>
                        ))}

                        {SpecialUnits2.map((special, i) => (
                          <li onClick={() => (router.push(special.link))} className="py-2" key={i} title={special.title}>{special.title}</li>
                        ))}

                        {SpecialUnits3.map((special, i) => (
                          <li onClick={() => (router.push(special.link))} className="py-2" key={i} title={special.title}>{special.title}</li>
                        ))}

                      </ul>
                    </div>
                  }
                </li>
                <li onClick={() => setCitizenCornerMobile(!CitizenCornerMobile)} className="px-8 py-4 ">
                  <div className="flex"> <span className="pr-1">{t('citizen_corner')}</span> {CitizenCornerMobile ? <IoMdArrowDropup size={30} /> : <IoMdArrowDropdown size={30} />} </div>
                  {CitizenCornerMobile &&
                    <div className="w-full h-full mt-2 ml-6 text-sm">
                      <ul className="rounded-lg ">
                        {CitizenCorner.map((special, i) => (
                          <li onClick={() => (router.push(special.link))} className="py-2" key={i} title={special.title}>{special.title}</li>
                        ))}
                        {CitizenCorner2.map((special, i) => (
                          <li onClick={() => (router.push(special.link))} className="py-2" key={i} title={special.title}>{special.title}</li>
                        ))}
                      </ul>
                    </div>
                  }
                </li>
                <li onClick={() => setPoliceCornerMobile(!PoliceCornerMobile)} className="px-8 py-4">
                  <div className="flex"> <span className="pr-3">{t('police_corner')}</span> {PoliceCornerMobile ? <IoMdArrowDropup size={30} /> : <IoMdArrowDropdown size={30} />} </div>
                  {PoliceCornerMobile &&
                    <div className="w-full h-full mt-2 ml-6 text-sm">
                      <ul className="rounded-lg ">
                        {PoliceCorner.map((report, i) => (
                          <li onClick={() => (router.push(report.link))} className="py-2" key={i} title={report.title}>{report.title}</li>
                        ))}
                      </ul>
                    </div>
                  }
                </li>
                <li onClick={() => setContactUsMobile(!ContactUsMobile)} className="px-8 py-4 mb-3">
                  <div className="flex"> <span className="pr-8">{t('contact_us')}</span> {ContactUsMobile ? <IoMdArrowDropup size={30} /> : <IoMdArrowDropdown size={30} />} </div>
                  {ContactUsMobile &&
                    <div className="w-full h-full mt-2 ml-6 text-sm">
                      <ul className="rounded-lg ">
                        {ContactUs.map((report, i) => (
                          <li onClick={() => (router.push(report.link))} className="py-2" key={i} title={report.title}>{report.title}</li>
                        ))}
                      </ul>
                    </div>
                  }
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
