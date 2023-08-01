"use client"
import { BiSearch } from "react-icons/bi";
import { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'
import { useRouter } from "next/navigation";

const Navbar2 = () => {
 
  const router = useRouter();
  const [aboutUsToggle, setaboutUsToggle] = useState(false)
  const [reportUsToggle, setreportUsToggle] = useState(false)
  const [SpecialUnits1Toggle, setSpecialUnits1Toggle] = useState(false)
  const [CitizenCornerToggle, setCitizenCornerToggle] = useState(false)
  const [PoliceCornerToggle, setPoliceCornerToggle] = useState(false)
  const [ContactUsToggle, setContactUsToggle] = useState(false)
  const [selectedOption, setSelectedOption] = useState("En");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [aboutUsMobile, setaboutUsMobile] = useState(false)
  const [reportUsMobile, setreportUsMobile] = useState(false)
  const [SpecialUnits1Mobile, setSpecialUnits1Mobile] = useState(false)
  const [CitizenCornerMobile, setCitizenCornerMobile] = useState(false)
  const [PoliceCornerMobile, setPoliceCornerMobile] = useState(false)
  const [ContactUsMobile, setContactUsMobile] = useState(false)

  const aboutUs = [ 
    { title: 'Our Mission' },
  { title: 'Hall of Fame' },
  { title: 'Responsibility'},
  { title: 'Hierarchy' },
  { title: 'Organizational Structure' },
  { title: 'Navi Mumbai Police Map'},
  { title: 'History' },
  { title: 'Initiative' },
  { title: 'Gallery'},
  { title: 'Martyrs' },
  ]

  const ReportUs = [
    { title: 'Online Complaint' },
  { title: 'Tenant Information' },
  { title: 'Lost Found'},
  { title: 'Feedback' },
  ]

  const SpecialUnits1 = [
    { title: 'Crime Branch' },
  { title: 'Economic Offence Wing' },
  { title: 'Traffic Branch'},
  { title: 'Police Sergeon' },
  { title: 'Motor Transport Unit' },
  { title: 'Navi Mumbai Police Band'},
  ]

  const SpecialUnits2 = [
    { title: 'Local Armed Police' },
  { title: 'Quick Response Team' },
  { title: 'Riot Control Police'},
  { title: 'Modemized Control Room' },
  { title: 'Protection Security' },
  { title: 'Special Branch'},
  ]

  const SpecialUnits3 = [
    { title: 'Cyber Crime' },
  { title: 'Anti Narcotics Cell' },
  { title: 'Crime Against Women Unit'},
  { title: 'Juvenile Aid Protection Unit' },
  { title: 'Anti Human Trafficking Unit' },
  { title: 'Crime Detection Unit'},
  ]

  const CitizenCorner = [
    { title: 'Search and View FIR' },
  { title: 'Shooting Aaplication' },
  { title: 'Police Clearance'},
  { title: 'Loudspeaker Permission', link: "/loud-speaker"},
  { title: 'Accident Compensation' },
  { title: 'Right to Info'},
  { title: 'Your Contribution' },
  { title: 'Passport Status', link: "/passport-status"},
  ]

  const CitizenCorner2 = [
    { title: 'GRAS Payment' },
  { title: 'Useful Website' },
  { title: 'Licensing Unit'},
  { title: 'Citizen Wall' },
  { title: 'Safety Tips' },
  { title: 'DCP Visits'},
  { title: 'Tenders' },
  { title: 'FAQs'},
  ]

  const PoliceCorner = [
    { title: 'Police Staff Council Meetings' },
  { title: 'Police Foundation' },
  { title: 'Welfare Activities'},
  { title: 'Media Coverage' },
  { title: 'Press Release' , link: "/press-releases"},
  { title: 'Crime Review'},
  { title: 'Miscellaneoue' },
  { title: 'Police Recruitments', link: "/police-recruitment"},
  { title: 'Good Work'},
  ]

  const ContactUs = [
    { title: 'Police Station Incharge', link:"" },
  { title: 'Divisional ACP', link:"/divisional-acps" },
  { title: 'Senior Police Officers', link: "/senior-police-officers"},
  { title: 'Emergency Contacts' },
  ]
  // const aboutUs = ["Our mission", "Hall of Fame", "Responsibilities", "Hierarchy", "Organizational Structure", "Navi Mumbai Police Map", "History", "Initiatives", "Gallery", "Martyrs"]
  // const ReportUs = ["Online Complaint", "Tenant Information", "Lost/found", "Inform Us/Feedback"]
  // const SpecialUnits1 = ["Crime Branch", "Economic Offense Wing", "Traffic Branch", "Police Surgeon", "Motor Transport Unit", "Greater Mumbai Police Band"]
  // const SpecialUnits2 = ["Local Armed Police", "Quick Response team", "Riot Control Police", "Modemized Control Room", "Protection & Security", "Special Branch"]
  // const SpecialUnits3 = ["Cyber Crime", "Anti Narcotic Cell", "Crime against Women Unit", "Juvenile Aid Protection Unit(JAPU)", "Anti Human Trafficking Unit", "Crime Detection Unit"]
  // const CitizenCorner = ["Search & View Public FIR", "Filming/Shooting Application", "Police Clearance Service", "Loudspeaker Permission", "Accident Compensation", "Right to Information(RTI)", "Your Contribution", "Passport Status"]
  // const CitizenCorner2 = ["GRAS Payment", "Useful Websites", "Licensing Unit", "Citizen Wall", "Safety Tips", "DCP Visits", "Tenders", "FAQs"]
  // const PoliceCorner = ["Police Staff Council Meeting", "Police Foundation", "Welfare Activities", "Media Coverage", "Press Release", "Crime Review", "Miscellaneous", "Police Recruitment", "Good Work"]
  // const ContactUs = ["Police Station Incharge", "Divisional ACP's", "Senior Police Officers", "Emergency Contacts"]

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed z-30 flex items-center justify-between w-full px-2 -mt-2 bg-white">
      <div className="flex items-center">
        <a href="/">
        <img
          src="/logo.png"
          alt="Logo"
          className="w-[50px] h-[50px] mr-2"
        />
        </a>
        
        <a href="/" className="mx-1 text-[1.4em]  md:w-auto font-semibold leading-[36px] text-sky-900 hover:text-[#E7581A]">
          Navi Mumbai Police
        </a>
      </div>

      <div className="flex items-center justify-around md:mt-0">
        <div className="justify-around hidden md:flex">
          <ul className="flex flex-col mt-[2px] text-[1em] w-11/12 mr-5 space-y-2 md:flex-row md:space-y-0 md:space-x-4 text-sky-900">
            <li className="inline-flex font-medium leading-[28px] cursor-pointer hover:text-[#E7581A]">
              <a href="/">
              Home
              </a>
            </li>
            <li onMouseEnter={() => setaboutUsToggle(true)} onMouseLeave={() => setaboutUsToggle(false)} className={`relative ${aboutUsToggle ? "hover:text-[#E7581A]" : ""} inline font-medium leading-[28px] cursor-pointer`}>
            About Us
              {aboutUsToggle &&
                <div className="absolute z-50 -left-5">
                  <ul className="text-black bg-white px-6 py-2 border-[1px]  rounded-lg">
                    {aboutUs.map((about, i) => (
                      <a key={i} href="#">
                        <li className="hover:text-[#E7581A] w-48" key={i}>{about.title}</li>
                      </a>
                    ))}
                  </ul>
                </div>
              }
            </li>
            <li onMouseEnter={() => setreportUsToggle(true)} onMouseLeave={() => setreportUsToggle(false)} className={`relative ${reportUsToggle ? "hover:text-[#E7581A]" : ""} inline font-medium leading-[28px] cursor-pointer`}>
              Report Us
              {reportUsToggle &&
                <div className="absolute z-50 -left-5">
                  <ul className="text-black bg-white px-6 py-2 border-[1px]  rounded-lg">
                    {ReportUs.map((report, i) => (
                      <li className="hover:text-[#E7581A] w-48" key={i}>{report.title}</li>
                    ))}
                  </ul>
                </div>
              }
            </li>
            <li onMouseEnter={() => setSpecialUnits1Toggle(true)} onMouseLeave={() => setSpecialUnits1Toggle(false)} className={`relative ${SpecialUnits1Toggle ? "hover:text-[#E7581A]" : ""} inline font-medium leading-[28px] cursor-pointer`}>
              Special Units
              {SpecialUnits1Toggle &&
                <div className="absolute z-50 -left-80">
                  <ul className="text-black bg-white px-6 py-2 flex border-[1px]  rounded-lg">
                    <div>
                      {SpecialUnits1.map((special, i) => (
                        <li className="w-60 hover:text-[#E7581A]" key={i}>{special.title}</li>
                      ))}
                    </div>
                    <div>
                      {SpecialUnits2.map((special, i) => (
                        <li className="w-60 hover:text-[#E7581A]" key={i}>{special.title}</li>
                      ))}
                    </div>
                    <div>
                      {SpecialUnits3.map((special, i) => (
                        <li className="w-72 hover:text-[#E7581A]" key={i}>{special.title}</li>
                      ))}
                    </div>

                  </ul>
                </div>
              }
            </li>
            <li onMouseEnter={() => setCitizenCornerToggle(true)} onMouseLeave={() => setCitizenCornerToggle(false)} className={`relative ${CitizenCornerToggle ? "hover:text-[#E7581A]" : ""} inline font-medium leading-[28px] cursor-pointer`}>
              Citizen Corner
              {CitizenCornerToggle &&
                <div className="absolute z-50 -left-36">
                  <ul className="text-black bg-white px-6 py-2 flex border-[1px]  rounded-lg">
                    <div>
                      {CitizenCorner.map((special, i) => (
                        <li className="w-60 hover:text-[#E7581A]" key={i}>{special.title}</li>
                      ))}
                    </div>
                    <div>
                      {CitizenCorner2.map((special, i) => (
                        <li className="w-32 hover:text-[#E7581A]" key={i}>{special.title}</li>
                      ))}
                    </div>
                  </ul>
                </div>
              }
            </li>
            <li onMouseEnter={() => setPoliceCornerToggle(true)} onMouseLeave={() => setPoliceCornerToggle(false)} className={`relative ${PoliceCornerToggle ? "hover:text-[#E7581A]" : ""} inline font-medium leading-[28px] cursor-pointer`}>
              Police Corner
              {PoliceCornerToggle &&
                <div className="absolute z-50 -left-5">
                  <ul className="text-black bg-white px-6 py-2 border-[1px]  rounded-lg">
                    {PoliceCorner.map((report, i) => (
                      <li onClick={() => (router.push(report.link))} className="hover:text-[#E7581A] w-56" key={i}>{report.title}</li>
                    ))}
                  </ul>
                </div>
              }
            </li>              <li onMouseEnter={() => setContactUsToggle(true)} onMouseLeave={() => setContactUsToggle(false)} className={`relative ${ContactUsToggle ? "hover:text-[#E7581A]" : ""} inline font-medium leading-[28px] cursor-pointer`}>
              Contact Us
              {ContactUsToggle &&
                <div className="absolute z-50 -left-28">
                  <ul className="text-black bg-white px-6 py-2 border-[1px]  rounded-lg">
                    {ContactUs.map((report, i) => (
                      <li onClick={() => (router.push(report.link))} className="hover:text-[#E7581A] w-44" key={i}>{report.title}</li>
                    ))}
                  </ul>
                </div>
              }
            </li>
          </ul>
          <div className="flex items-center mx-2 w-1/12  text-[#E7581A]">
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
            <button
        className="flex items-center space-x-1 cursor-pointer focus:outline-none"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <span className="text-black-500">
           En
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-4 w-4 text-black transition-transform ${
            isDropdownOpen ? 'rotate-180' : ''
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
              En
            </li>
            <li
              className="px-4 py-2 cursor-pointer hover:bg-white"
              onClick={() => handleOptionChange('mr')}
            >
              Mr
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
          <button
            className="flex items-center space-x-1 cursor-pointer focus:outline-none"
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
                  
                >
                  En
                </li>
                <li
                  className="px-4 py-2 cursor-pointer hover:bg-white"
                
                  // value={}
                >
                  Mr
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
                <li className="h-full px-8 py-4 cursor-pointer hover:bg-white">
                  Home
                </li>
                <li onClick={() => setaboutUsMobile(!aboutUsMobile)} className="px-8 py-4">
                 <div  className="flex"> <span className="pr-12">About Us</span> {aboutUsMobile ?<IoMdArrowDropup size={30}/> :<IoMdArrowDropdown size={30}/>} </div>
                  {aboutUsMobile &&
                    <div className="w-full h-full mt-2 ml-6 text-sm ">
                      <ul className="rounded-lg ">
                        {aboutUs.map((about, i) => (
                          <><li className="py-2 " key={i}>{about.title}</li></>
                        ))}
                      </ul>
                    </div>
                  }
                </li>
                <li onClick={() => setreportUsMobile(!reportUsMobile)} className="px-8 py-4">
                 <div  className="flex"> <span className="pr-10">Report Us</span> {reportUsMobile ?<IoMdArrowDropup size={30}/> :<IoMdArrowDropdown size={30}/>} </div>
                  {reportUsMobile &&
                    <div className="w-full h-full mt-2 ml-6 text-sm">
                      <ul className="rounded-lg ">
                        {ReportUs.map((about, i) => (
                          <><li className="py-2 " key={i}>{about.title}</li></>
                        ))}
                      </ul>
                    </div>
                  }
                </li>
                
                <li onClick={() => setSpecialUnits1Mobile(!SpecialUnits1Mobile)} className="px-8 py-4">
                <div  className="flex"> <span className="pr-4">Special Units</span> {SpecialUnits1Mobile ?<IoMdArrowDropup size={30}/> :<IoMdArrowDropdown size={30}/>} </div>
                  {SpecialUnits1Mobile &&
                    <div className="w-full h-full mt-2 ml-6 text-sm">
                      <ul className="rounded-lg ">                        
                      {SpecialUnits1.map((special, i) => (
                        <li className="py-2" key={i}>{special.title}</li>
                      ))}
                    
                      {SpecialUnits2.map((special, i) => (
                        <li className="py-2" key={i}>{special.title}</li>
                      ))}
                    
                      {SpecialUnits3.map((special, i) => (
                        <li className="py-2" key={i}>{special.title}</li>
                      ))}
                      
                      </ul>
                    </div>
                  }
                </li>
                <li onClick={() => setCitizenCornerMobile(!CitizenCornerMobile)} className="px-8 py-4 ">
                <div  className="flex"> <span className="pr-1">Citizen Corner</span> {CitizenCornerMobile ?<IoMdArrowDropup size={30}/> :<IoMdArrowDropdown size={30}/>} </div>
                  {CitizenCornerMobile &&
                    <div className="w-full h-full mt-2 ml-6 text-sm">
                      <ul className="rounded-lg ">
                      {CitizenCorner.map((special, i) => (
                        <li className="py-2" key={i}>{special.title}</li>
                      ))}
                      {CitizenCorner2.map((special, i) => (
                        <li className="py-2" key={i}>{special.title}</li>
                      ))}
                      </ul>
                    </div>
                  }
                </li>
                <li onClick={() => setPoliceCornerMobile(!PoliceCornerMobile)} className="px-8 py-4">
                <div  className="flex"> <span className="pr-3">Police Corner</span> {PoliceCornerMobile ?<IoMdArrowDropup size={30}/> :<IoMdArrowDropdown size={30}/>} </div>
                  {PoliceCornerMobile &&
                    <div className="w-full h-full mt-2 ml-6 text-sm">
                    <ul className="rounded-lg ">
                      {PoliceCorner.map((report, i) => (
                      <li className="py-2" key={i}>{report.title}</li>
                    ))}
                      </ul>
                    </div>
                  }
                </li>
                <li onClick={() => setContactUsMobile(!ContactUsMobile)} className="px-8 py-4 mb-3">
                <div  className="flex"> <span className="pr-8">Contact Us</span> {ContactUsMobile ?<IoMdArrowDropup size={30}/> :<IoMdArrowDropdown size={30}/>} </div>
                  {ContactUsMobile &&
                    <div className="w-full h-full mt-2 ml-6 text-sm">
                    <ul className="rounded-lg ">
                      {ContactUs.map((report, i) => (
                      <li className="py-2" key={i}>{report.title}</li>
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

export default Navbar2;
