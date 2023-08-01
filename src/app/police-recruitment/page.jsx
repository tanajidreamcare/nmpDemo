// "use client"
// import React from "react";
// import { BsFiletypePdf } from "react-icons/bs";
// import axios from '@/customHooks/axiosInstance'
// import { useEffect, useState } from "react";
// import Navbar from '@/components/Navbar';
// import Footer from "@/components/Footer";
// import { useTranslation} from "react-i18next";
// import i18Instance from "@/customHooks/i18Instance";

// i18Instance()

// function page() {

//   const { t } = useTranslation();
  
//   const [recruitmentData, setrecruitmentData] = useState([])
//   useEffect(() => {
//     axios.get('/admin/recruitments').then((response) => {
//       const data = response.data;
//       setrecruitmentData(data);
//     });
//   }, []);

//   return (
//     <div>
//       <Navbar/>
//       <div className="bg-[#e9e4ce49] h-screen">
//       <div className="font-bold  text-5xl leading-9 text-center pt-14 text-[#15233E]">
//             <h1 className="underline pt-14 font-headingFont" title={t('police_recruitments')}>{t('police_recruitments')}</h1>
//           </div>
//       <div className="flex justify-center w-full mt-10">
//       <table className="pt-10 shadow-2xl bg-lime-200 ">
//         <thead>
//           <tr className="text-base text-center text-gray-800 ">
//             <th className="w-40 px-6 py-3 font-medium tracking-wider text-center uppercase border border-black">
//               Date
//             </th>
//             <th className="w-40 px-6 py-3 font-medium tracking-wider text-center uppercase border border-black">
//               Title
//             </th>
//             <th className="w-40 px-6 py-3 font-medium tracking-wider text-center uppercase border border-black">
//               Info
//             </th>
//           </tr>
//         </thead>
//         <tbody className="text-gray-800 bg-white ">
//           {recruitmentData.map((hierarchy) => (
//             <tr
//               key={hierarchy.id}
//               className="transition-transform duration-300 transform hover:scale-105"
//             >
//               <td className="px-6 py-3 text-sm font-medium text-left align-middle border">
//                 {new Date(hierarchy.createdAt).toLocaleDateString()}
//               </td>
//               <td title={hierarchy.titleEng} className="px-6 py-3 text-sm font-medium text-left align-middle border">
//                 {hierarchy.titleEng}
//               </td>
//               <td className="px-6 py-3 text-sm font-medium text-left align-middle border">
//                 <div className="flex justify-center text-orange-700">
//                   <a
//                     href={`http://3.111.197.119/uploads/${hierarchy.filename}`}
//                     target="_blank"
//                     download={hierarchy.filename}
//                   >
//                     <BsFiletypePdf size={30} />
//                   </a>
//                 </div>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       </div>
      
//     </div>
//     <div className=" md:mt-[0rem]">
//     <Footer />
//       </div>
//       </div>

//   );
// };

// export default page;



// "use client"
// import React, { useEffect, useState } from "react";
// import { BsFiletypePdf } from "react-icons/bs";
// import axios from "@/customHooks/axiosInstance";
// import Navbar from '@/components/Navbar';
// import Footer from "@/components/Footer";
// import { useTranslation} from "react-i18next";
// import i18Instance from "@/customHooks/i18Instance";
// i18Instance()


// function Page() {

//   const { t } = useTranslation();
  
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios.get("/admin/press-releases")
//       .then((response) => {
//         const data = response.data;
//         setData(data);
//         console.log(data);
//       })
//       .catch((error) => {
//         console.error("Error fetching press releases:", error);
//       });
//   }, []);

//   return (
//     <div>
//       <Navbar/>
//       <div className="bg-[#e9e4ce49] h-screen">
//       <div className="font-bold  text-5xl leading-9 text-center pt-14 text-[#15233E]">
//             <h1 className="underline pt-14 font-headingFont" title={t('press_release')}>{t('press_release')}</h1>
//           </div>
//       <div className="flex justify-center w-full p-3 mt-10">
//       <table className="pt-10 bg-lime-200 ">
//         <thead>
//           <tr className="text-base text-center text-gray-800 ">
//             <th className="w-40 px-6 py-3 font-medium tracking-wider text-center uppercase border border-black ">
//               Date
//             </th>
//             <th className="w-40 px-6 py-3 font-medium tracking-wider text-center uppercase border border-black">
//               Title
//             </th>
//             <th className="w-40 py-3 font-medium tracking-wider text-center uppercase border border-black md:px-6">
//               Info
//             </th>
//           </tr>
//         </thead>
//         <tbody className="text-gray-800 bg-white border-2 border-black">
//           {data.map((hierarchy) => (
//             <tr
//               key={hierarchy.id}
//               className="transition-transform duration-300 transform hover:scale-105"
//             >
//               <td className="px-6 py-3 text-sm font-medium text-left align-middle border">
//                 {new Date(hierarchy.createdAt).toLocaleDateString()}
//               </td>
//               <td title= {hierarchy.titleEng} className="px-6 py-3 text-sm font-medium text-left align-middle border">
//                 {hierarchy.titleEng}
//               </td>
//               <td className="py-3 text-sm font-medium text-left align-middle border md:px-6">
//                 <div className="flex justify-center text-orange-700">
//                   <a
//                     href={`http://3.111.197.119/uploads/${hierarchy.filename}`}
//                     target="_blank"
//                     download={hierarchy.filename}
//                   >
//                     <BsFiletypePdf size={30} />
//                   </a>
//                 </div>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       </div>
      
//     </div>
//     <div className=" md:mt-[0rem]">
//     <Footer />
//       </div>
//       </div>
//   );
// }

// export default Page;


"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";
import i18Instance from "@/customHooks/i18Instance";
import { BsFiletypePdf } from "react-icons/bs";
import { useState } from "react";
i18Instance();

const page = () => {
  const { t } = useTranslation();

  const goodWork = [
    {
      title: "2023",
      content: [
        {
          name: "Navi Mumbai police constable recruitment 2021 - Final Select and waiting list and instructions for candidates",
          id: "1",
          date: "08-May-2023",
          file: "policeRecruitment/08-05-23.pdf",
        },
        {
          name: "	Navi Mumbai Driver Police Constable Recruitment 2019 - Final selection and waiting list and instructions for candidates",
          id: "2",
          date: "21-Apr-2023",
          file: "policeRecruitment/21-04-23.pdf",
        },
        {
          name: "Navi Mumbai police constable recruitment 2021 - Provisional Select and waiting list and instructions for candidates",
          id: "3",
          date: "13-Apr-2023",
          file: "policeRecruitment/13-04-23.pdf",
        },
        {
          name: "Navi Mumbai police constable recruitment 2021 - Consolidated mark list of pass candidates for Ground test, written test and N.C.C",
          id: "4",
          date: "11-Apr-2023",
          file: "policeRecruitment/11-04-23.pdf",
        },
        {
          name: "Navi Mumbai Police Constable Recruitment 2021 - Final Mark List of written exam",
          id: "5",
          date: "10-Apr-2023",
          file: "policeRecruitment/10-04-23.pdf",
        },
        {
          name: "Navi Mumbai Police Constable Recruitment 2021 - Provisional Mark List of written exam",
          id: "6",
          date: "05-Apr-2023",
          file: "policeRecruitment/05-04-23.pdf",
        },
        {
          name: "Navi Mumbai recruitment 2021 instruction to candidates regarding written exam",
          id: "7",
          date: "04-Apr-2023",
          file: "policeRecruitment/04-04-23.pdf",
        },
        {
          name: "Navi Mumbai police constable recruitment 2021 final model answer key",
          id: "8",
          date: "03-Apr-2023",
          file: "policeRecruitment/03-04-23.pdf",
        },
        {
          name: "Navi Mumbai Police Constable Recruitment 2021 Written Examination Model Answer key",
          id: "9",
          date: "02-Apr-2023",
          file: "policeRecruitment/02-04-23.pdf",
        },
        {
          name: "	Instructions to Candidates regarding Navi Mumbai Police Constable Recruitment 2021 Written Exam",
          id: "10",
          date: "30-Mar-2023",
          file: "policeRecruitment/30-03-23.pdf",
        },
        {
          name: "Instructions to Candidates regarding Navi Mumbai Police Constable Recruitment 2021 Written Exam",
          id: "11",
          date: "29-Mar-2023",
          file: "policeRecruitment/29-03-23.pdf",
        },
        {
          name: "police constable recruitment 2021- final list of candidates qualifed for written exam",
          id: "12",
          date: "27-Mar-2023",
          file: "policeRecruitment/27-03-23.pdf",
        },
        {
          name: "Police constable recruitment 2021 - Provisional list of candidates qualified for written exam",
          id: "13",
          date: "14-Mar-2023",
          file: "policeRecruitment/14-03-23.pdf",
        },
        {
          name: "Navi mumbai police Recruitment 2021 result of ground test",
          id: "14",
          date: "17-Feb-2023",
          file: "policeRecruitment/17-02-23.pdf",
        },
        {
          name: "Navi Mumbai police constable recruitment 2021- Provisional Ground Test Marks",
          id: "15",
          date: "20-Jan-2023",
          file: "policeRecruitment/20-01-23.pdf",
        },
      ],
    },
    {
      title: "2022",
      content: [
        {
          name: "Navi Mumbai Police Recruitment - 2021 Instructions for Candidates regarding Reservations",
          id: "1",
          date: "28-Dec-2022",
          file: "policeRecruitment/28-12-22(1).pdf",
        },
        {
          name: "Navi Mumbai Police Recruitment - 2021 Instructions for Candidates regarding Dates for Recruitment Procedure",
          id: "2",
          date: "28-Dec-2022",
          file: "policeRecruitment/28-12-22(1).pdf",
        },
        {
          name: "Deadline for submission of applications for police recruitment has been extended till 15th December 2022",
          id: "3",
          date: "29-Nov-2022",
          file: "policeRecruitment/29-11-22.pdf",
        },
        {
          name: "Advertisement For the Recruitment of Post of Police Constable -2021 of Navi Mumbai Police Commissionerate",
          id: "4",
          date: "07-Nov-2022",
          file: "policeRecruitment/07-11-22.pdf",
        },
        {
          name: "Driver Police Constable Recruitment 2019. Recruitment Orders of 10 candidates",
          id: "5",
          date: "17-Jun-2022",
          file: "policeRecruitment/17-06-22.pdf",
        },
        {
          name: "Driver Police Constable Recruitment 2019. Recruitment Orders of 10 Candidates",
          id: "6",
          date: "14-Jun-2022",
          file: "policeRecruitment/14-06-22.pdf",
        },
        {
          name: "Regarding Attendance the Medical Examination of Driver Police Constable post.",
          id: "7",
          date: "10-Jun-2022",
          file: "policeRecruitment/10-06-22.pdf",
        },
        {
          name: "Driver Police Constable Recruitment 2019. Recruitment Orders of 86 candidates",
          id: "8",
          date: "03-Jun-2022",
          file: "policeRecruitment/03-06-22.pdf",
        },
        {
          name: "	Police Constable Driver Recruitment - 2019 - To take appointment letter for the post of Police Constable Driver and to attend for basic training",
          id: "9",
          date: "01-Jun-2022",
          file: "policeRecruitment/01-06-22(1).pdf",
        },
        {
          name: "	Driver Police Recruitment -२०१९ Attendance for re-verification of academic and other original documents",
          id: "10",
          date: "01-Jun-2022",
          file: "policeRecruitment/01-06-22(2).pdf",
        },
        {
          name: "	Driver Police Constable 2019 - Final Selection & Waiting list and instructions for candidates",
          id: "11",
          date: "31-May-2022",
          file: "policeRecruitment/31-05-22.pdf",
        },
        {
          name: "Driver Police Constable 2019 - Provisional Selection & Waiting list and instructions for candidates",
          id: "12",
          date: "25-May-2022",
          file: "policeRecruitment/25-05-22.pdf",
        },
        {
          name: "Recruitment for Driver Police Constable 2019 Physical test Results",
          id: "13",
          date: "24-May-2022",
          file: "policeRecruitment/24-05-22.pdf",
        },
        {
          name: "Regarding Ground Test of Recruitment of Driver police constable 2019.",
          id: "14",
          date: "20-May-2022",
          file: "policeRecruitment/20-05-22.pdf",
        },
        {
          name: "Police Recruitment 2019 - Regarding attendance for appointment of Driver Police Constable and Police Constable and for basic training.",
          id: "15",
          date: "05-Apr-2022",
          file: "policeRecruitment/05-04-22.pdf",
        },
        {
          name: "	Regarding the medical examination of the candidates who are eligible for the final selection of Navi Mumbai district Driver Police Constable Recruitment Year 2019.",
          id: "16",
          date: "31-Mar-2022",
          file: "policeRecruitment/31-03-22(1).pdf",
        },
        {
          name: "	Regarding the medical examination of the candidates who are eligible for the final selection of Navi Mumbai district Driver Police Constable Recruitment Year 2019.",
          id: "17",
          date: "31-Mar-2022",
          file: "policeRecruitment/31-03-22(2).pdf",
        },
        {
          name: "Regarding attending the medical examination of Driver Police Constable post",
          id: "18",
          date: "29-Mar-2022",
          file: "policeRecruitment/29-03-22.pdf",
        },
        {
          name: "Driver Police Constable 2019 - Final Selection & Waiting list and instructions for candidates",
          id: "19",
          date: "29-Mar-2022",
          file: "policeRecruitment/29-03-22.pdf",
        },
        {
          name: "Driver Police Constable 2019 - Provisional Selection & Waiting list and instructions for candidates",
          id: "20",
          date: "25-Mar-2022",
          file: "policeRecruitment/25-03-22(1).pdf",
        },
        {
          name: "Regarding cancelling the names of 25 candidates from Driver Police constable Recruitment 2019",
          id: "21",
          date: "25-Mar-2022",
          file: "policeRecruitment/25-03-22(2).pdf",
        },
        {
          name: "9 months Basic traning of newly recruited police constable",
          id: "22",
          date: "25-Mar-2022",
          file: "policeRecruitment/25-03-22(3).pdf",
        },
        {
          name: "Driver Police Constable Recruitment 2019 - Revised Provisional Select List, Waiting List & instructions to candidates",
          id: "23",
          date: "27-Jan-2022",
          file: "policeRecruitment/27-01-22.pdf",
        },
        {
          name: "	Candidates applied for the post of Police Constable Driver-2019 in more than one district, their candidature has been canceled.",
          id: "24",
          date: "27-Jan-2022",
          file: "policeRecruitment/27-01-22.pdf",
        },
        {
          name: "Navi Mumbai Police Constable Driver Recruitment 2019 - Revised Instructions for Candidates",
          id: "25",
          date: "24-Jan-2022",
          file: "policeRecruitment/24-01-22.pdf",
        },
        {
          name: "Navi Mumbai Police Constable Driver Recruitment 2019 - Instruction for Candidates",
          id: "26",
          date: "21-Jan-2022",
          file: "policeRecruitment/21-01-22.pdf",
        },
        {
          name: "Candidates applied for the post of Police Constable Driver in more than one district, their candidature has been canceled.",
          id: "27",
          date: "19-Jan-2022",
          file: "policeRecruitment/19-01-22.pdf",
        },
        {
          name: "Driver Police Constable Recruitment 2019 - Provisional Select List, Waiting List & instructions to candidates",
          id: "28",
          date: "18-Jan-2022",
          file: "policeRecruitment/18-01-22.pdf",
        },
        {
          name: "	Police Constable Recruitment 2019 - Final Select List, Waiting List & instructions to candidates",
          id: "29",
          date: "01-Jan-2022",
          file: "policeRecruitment/01-01-22.pdf",
        },
      ],
    }
  ];

  const [selectFAQ, setselectFAQ] = useState("Good Work 2023");
  const [isDropDownOpen, setisDropDownOpen] = useState(false);

  const toggleDropdown = () => {
    setisDropDownOpen(!isDropDownOpen);
  };

  return (
    <>
      <div className="">
        <Navbar />
        <div className="bg-[#e9e4ce49] py-10">
          <div className="text-5xl font-bold leading-9 text-center text-[#15233E]">
            <h1 className="underline pt-14 font-headingFont" title={t("police_recruitments")}>
              {t("police_recruitments")}
            </h1>
          </div>

          <div className="flex justify-center w-full my-10">
            <div className="relative w-[60%] md:w-[40%] bg-white border-[1px] border-[#E7581A] rounded-2xl py-2 px-4 z-20">
              <button
                onClick={toggleDropdown}
                className="dropdown-toggle text-[#E7581A] flex justify-between w-full"
              >
                <span title="Select Category">Select Category</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 text-[#E7581A] transition-transform ${
                    toggleDropdown ? "" : "rotate-180"
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
                <div className="absolute top-12 left-0 bg-white w-full border-[1px] border-[#E7581A] rounded-2xl py-2 px-4 z-20">
                  {goodWork.map((titles, i) => (
                    <ul key={i} className="dropdown-menu">
                      <li
                        onClick={() => {
                          setselectFAQ(titles.title);
                          setisDropDownOpen(!isDropDownOpen);
                        }}
                        className="cursor-pointer hover:text-[#E7581A]"
                        title={titles.title}
                      >
                        {titles.title}
                      </li>
                    </ul>
                  ))}
                </div>
              )}
            </div>
          </div>

          {goodWork.map((data, i) => (
            <div key={i}>
              {data.title === selectFAQ && (
                <div className="flex justify-center mt-10">
                  <table className="pt-10 shadow-2xl bg-lime-200">
                    <thead>
                    <th className="border border-black">Date</th>
                      <th className="border border-black">Title</th>
                      <th className="border border-black">Info</th>
                    </thead>
                    <tbody className="text-gray-800 shadow-2xl bg-lime-200">
                      {data.content.map((item) => (
                        <tr
                          key={item.id}
                          className="transition-transform duration-300 transform hover:scale-105 hover:bg-[#e9e4ce49]"
                        >
                          <td
                            title={item.date}
                            className="w-40 px-6 py-3 text-sm font-medium text-left align-middle border border-black"
                          >
                            {item.date}
                          </td>
                          <td title={item.name} className="px-6 py-3 text-sm font-medium text-left align-middle border border-black w-80">
                            {/* <div  className="flex justify-center"> */}
                              {item.name}
                            {/* </div> */}
                          </td>
                          <td className="w-40 px-6 py-3 text-sm font-medium text-left align-middle border border-black">
                            {/* <div className="flex justify-center"> */}
                              <a href={item.file} target="_blank">
                                <BsFiletypePdf size={30} />
                              </a>
                            {/* </div> */}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className=" md:mt-[0rem]">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default page;
