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
          name: "Press Note By DCP Zone 2 Panvel Dtd 26.07.2023",
          id: "1",
          date: "26-Jul-2023",
          file: "pressRelease/26-07-23(1).pdf",
        },
        {
          name: "Press Note By DCP Zone 2 Panvel Dtd 26.07.2023",
          id: "2",
          date: "26-Jul-2023",
          file: "pressRelease/26-07-23(2).pdf",
        },
        {
          name: "Press Note By DCP Zone 2 Panvel Dtd 26.07.2023",
          id: "3",
          date: "26-Jul-2023",
          file: "pressRelease/26-07-23(3).pdf",
        },
        {
          name: "Press Note By Crime Branch Unit 2 Dtd 15.06.2023",
          id: "4",
          date: "15-Jun-2023",
          file: "pressRelease/15-06-23.pdf",
        },
        {
          name: "Press Note By Crime Branch Dtd 01.06.2023",
          id: "5",
          date: "02-Jun-2023",
          file: "pressRelease/02-06-23.pdf",
        },
        {
          name: "Press Note By Crime Branch Unit 3 Dtd 03.04.2023",
          id: "6",
          date: "10-May-2023",
          file: "pressRelease/10-05-23(1).pdf",
        },
        {
          name: "Press Note By Crime Branch Unit 3 Dtd 14.03.2023",
          id: "7",
          date: "10-May-2023",
          file: "pressRelease/10-05-23(2).pdf",
        },
        {
          name: "Press Note By Crime Branch EOW Unit 2 & AHTU Navi Mumbai Dtd 03.03.2023",
          id: "8",
          date: "10-May-2023",
          file: "pressRelease/10-05-23(3).pdf",
        },
        {
          name: "Press Note By Crime Branch Unit 2 Dtd 03.03.2023",
          id: "9",
          date: "10-May-2023",
          file: "pressRelease/10-05-23(4).pdf",
        },
        {
          name: "Press Note By Anti Anti Narcotics Cell Crime Branch Dtd 16.02.2023",
          id: "10",
          date: "10-May-2023",
          file: "pressRelease/10-05-23(5).pdf",
        },
        {
          name: "Press Note By Crime Branch Central Unit - 15.02.2023",
          id: "11",
          date: "10-May-2023",
          file: "pressRelease/10-05-23(6).pdf",
        },
        {
          name: "Press Note By Crime Branch Unit 2 Dtd 09.02.2023",
          id: "12",
          date: "10-May-2023",
          file: "pressRelease/10-05-23(7).pdf",
        },
        {
          name: "Press Note By Crime Branch Unit 2 Dtd 17.01.2023",
          id: "13",
          date: "10-May-2023",
          file: "pressRelease/10-05-23(8).pdf",
        },
        {
          name: "Press Note By Crime Branch Unit 3 Dtd 13.01.2023",
          id: "14",
          date: "10-May-2023",
          file: "pressRelease/10-05-23(9).pdf",
        },
        {
          name: "Press Note By Crime Branch Central Unit - 11.01.2023",
          id: "15",
          date: "10-May-2023",
          file: "pressRelease/10-05-23(10).pdf",
        },
        {
          name: "Press Note By Crime Branch Unit 3 Dtd 14.03.2023",
          id: "16",
          date: "15-Mar-2023",
          file: "pressRelease/15-03-23.pdf",
        },
        {
          name: "Press Note By DCP Zone 2 Panvel Dtd 18.02.2023",
          id: "17",
          date: "18-Feb-2023",
          file: "pressRelease/18-02-23.pdf",
        },
        {
          name: "Press Note By Crime Branch Unit 2 Dtd 09.02.2023",
          id: "18",
          date: "10-Feb-2023",
          file: "pressRelease/10-02-23.pdf",
        },
        {
          name: "Press Note - Closing ceremony of Road Safety Week 2023",
          id: "19",
          date: "16-Jan-2023",
          file: "pressRelease/16-01-23.pdf",
        },
        {
          name: "Press Note By Navi Mumbai Traffic Dtd 10.06.2021",
          id: "20",
          date: "03-Jan-2023",
          file: "pressRelease/03-01-23.pdf",
        },
      ],
    },
    {
      title: "2022",
      content: [
        {
          name: "47th Konkan Range Annual Police Sports Competition 2022 Invitation card",
          id: "1",
          date: "14-Dec-2022",
          file: "pressRelease/14-12-22(1).pdf",
        },
        {
          name: "47th Konkan Range Annual Police Sports Competition 2022 Outstanding Performance by Police Athletes/ players from Various Districts",
          id: "2",
          date: "14-Dec-2022",
          file: "pressRelease/14-12-22(2).pdf",
        },
        {
          name: "47th Konkan Range Annual Police Sports Competition 2022 Outstanding Performance by Police Athletes/ players from Various Districts",
          id: "3",
          date: "10-Dec-2022",
          file: "pressRelease/10-12-22.pdf",
        },
        {
          name: "Deadline for submission of applications for Police Recruitment - 2021 has been extended till 15th December 2022",
          id: "4",
          date: "29-Nov-2022",
          file: "pressRelease/29-09-22.pdf",
        },
        {
          name: "Press Note By Crime Branch Unit 1 Dtd 15.09.2022",
          id: "5",
          date: "15-Sep-2022",
          file: "pressRelease/15-09-22.pdf",
        },
        {
          name: "Press Note By Costal Security Branch-05.08.2022",
          id: "6",
          date: "13-Aug-2022",
          file: "pressRelease/13-08-22(1).pdf",
        },
        {
          name: "Press Note By Crime Branch Central Unit - 10.08.2022",
          id: "7",
          date: "13-Aug-2022",
          file: "pressRelease/13-08-22(2).pdf",
        },
        {
          name: "	Press Note By Koperkhairane Police Station-11.08.2022",
          id: "8",
          date: "13-Aug-2022",
          file: "pressRelease/13-08-22(3).pdf",
        },
        {
          name: "Press Note By Crime Branch Unit-1 04.06.2022",
          id: "9",
          date: "07-Jun-2022",
          file: "pressRelease/07-06-22(1).pdf",
        },
        {
          name: "Press Note By Crime Branch Central Unit - 03.06.2022",
          id: "10",
          date: "07-Jun-2022",
          file: "pressRelease/07-06-22(2).pdf",
        },
        {
          name: "Press Note By Crime Branch Central Unit - 02.06.2022",
          id: "11",
          date: "03-Jun-2022",
          file: "pressRelease/03-06-22.pdf",
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
            <h1 className="underline pt-14 font-headingFont" title={t("press_release")}>
              {t("press_release")}
            </h1>
          </div>

          <div className="flex justify-center w-full my-10">
            <div className="relative w-[60%] md:w-[40%] bg-[#e9e4ce49] border-[1px] border-[#E7581A] rounded-2xl py-2 px-4 z-20">
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
