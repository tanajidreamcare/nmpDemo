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

  const pcrCase = [
    {
      title: "2023",
      content: [
        {
          name: "January-2023",
          id: "1",
          file: "cprCases/jan23.pdf",
        },
        {
          name: "February-2023",
          id: "2",
          file: "cprCases/feb23.pdf",
        },
        {
          name: "March-2023",
          id: "3",
          file: "cprCases/mar23.pdf",
        },
        {
          name: "April-2023",
          id: "4",
          file: "cprCases/apr23.pdf",
        },
        {
          name: "May-2023",
          id: "5",
          file: "cprCases/may23.pdf",
        },
        {
          name: "June-2023",
          id: "6",
          file: "cprCases/jun23.pdf",
        },
      ],
    },
    {
      title: "2022",
      content: [
        {
          name: "January-2022",
          id: "1",
          file: "cprCases/jan22.pdf",
        },
        {
          name: "February-2022",
          id: "2",
          file: "cprCases/feb22.pdf",
        },
        {
          name: "March-2022",
          id: "3",
          file: "cprCases/mar22.pdf",
        },
        {
          name: "April-2022",
          id: "4",
          file: "cprCases/apr22.pdf",
        },
        {
          name: "May-2022",
          id: "5",
          file: "cprCases/may22.pdf",
        },
        {
          name: "June-2022",
          id: "6",
          file: "cprCases/jun22.pdf",
        },
        {
          name: "July-2022",
          id: "7",
          file: "cprCases/jul22.pdf",
        },
        {
          name: "August-2022",
          id: "8",
          file: "cprCases/aug22.pdf",
        },
        {
          name: "September-2022",
          id: "9",
          file: "cprCases/sept22.pdf",
        },
        {
          name: "October-2022",
          id: "10",
          file: "cprCases/oct22.pdf",
        },
        {
          name: "November-2022",
          id: "11",
          file: "cprCases/nov22.pdf",
        },
        {
          name: "December-2022",
          id: "12",
          file: "cprCases/dec22.pdf",
        },
      ],
    },
  ];

  const atrocityCase = [
    {
      title: "2023",
      content: [
        {
          name: "Citizen Portal - Status of SC/ST (Prevention of Atrocities) Act, 1989 cases Jan 2023 to April 2023",
          id: "1",
          file: "atrocityCases/2023-1.pdf",
        },
        {
          name: "Citizen Portal - Status of SC/ST (Prevention of Atrocities) Act, 1989 cases Jan 2023",
          id: "2",
          file: "atrocityCases/2023-2.pdf",
        },
      ],
    },
    {
      title: "2022",
      content: [
        {
          name: "Citizen Portal - Status of SC/ST (Prevention of Atrocities) Act, 1989 cases Jan 2022 to Dec. 2022",
          id: "1",
          file: "atrocityCases/2022-1.pdf",
        },
        {
          name: "Citizen Portal - Status of SC/ST (Prevention of Atrocities) Act, 1989 cases Jan 2022 to Dec. 2022",
          id: "2",
          file: "atrocityCases/2022-2.pdf",
        },
        {
          name: "Good Work done by Crime Branch Unit 3, Navi Mumbai Police",
          id: "3",
          file: "/good3.pdf",
        },
      ],
    },
    {
      title: "2021",
      content: [
        {
          name: "Citizen Portal - Status of SC/ST (Prevention of Atrocities) Act, 1989 cases June 2021 to December 2021",
          id: "1",
          file: "atrocityCases/2021-1.pdf",
        },
        {
          name: "Citizen Portal - Status of SC/ST (Prevention of Atrocities) Act, 1989 cases June 2021 to December 2021",
          id: "2",
          file: "atrocityCases/2021-2.pdf",
        },
        {
          name: "Citizen Portal - Status of SC/ST (Prevention of Atrocities) Act, 1989 cases (2018-2021)",
          id: "3",
          file: "atrocityCases/2021-3.pdf",
        },
      ],
    },
    {
      title: "2020",
      content: [
      ],
    },
    {
      title: "2019",
      content: [
      ],
    },
    {
      title: "2018",
      content: [
        {
          name: "Citizen Portal - Status of SC/ST (Prevention of Atrocities) Act, 1989 cases (2018-2021)",
          id: "3",
          file: "atrocityCases/2018-1.pdf",
        },
      ],
    },
    {
      title: "2017",
      content: [
      ],
    },
    
  ];

  const [selectPCR, setselectPCR] = useState("2023");
  const [selectAtrocity, setselectAtrocity] = useState("2023");
  const [isDropDownOpen1, setisDropDownOpen1] = useState(false);
  const [isDropDownOpen2, setisDropDownOpen2] = useState(false);

  const toggleDropdown1 = () => {
    setisDropDownOpen1(!isDropDownOpen1);
  };

  const toggleDropdown2 = () => {
    setisDropDownOpen2(!isDropDownOpen2);
  };

  return (
    <>
      <div className="">
        <Navbar />
        <div className="bg-[#e9e4ce49] py-10">
          <div className="text-3xl font-bold leading-9 text-center text-[#15233E]">
            {/* <h1 className="underline pt-14 font-headingFont" title={t("atrocity_title")}>
              {t("atrocity_title")}
            </h1> */}
          </div>

          <div className="text-2xl font-bold text-center pt-14">PCR Cases</div>
          <div className="flex justify-center w-full my-10">
            
            <div className="relative w-[60%] md:w-[40%] bg-[#e9e4ce49] border-[1px] border-[#E7581A] rounded-2xl py-2 px-4 z-20">
              <button
                onClick={toggleDropdown1}
                className="dropdown-toggle text-[#E7581A] flex justify-between w-full"
              >
                <span title="Select Category">Select Category</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 text-[#E7581A] transition-transform ${
                    toggleDropdown1 ? "" : "rotate-180"
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
              {isDropDownOpen1 && (
                <div className="absolute top-12 left-0 bg-white w-full border-[1px] border-[#E7581A] rounded-2xl py-2 px-4 z-20">
                  {pcrCase.map((titles, i) => (
                    <ul key={i} className="dropdown-menu">
                      <li
                        onClick={() => {
                          setselectPCR(titles.title);
                          setisDropDownOpen1(!isDropDownOpen1);
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

          {pcrCase.map((data, i) => (
            <div key={i}>
              {data.title === selectPCR && (
                <div className="flex justify-center mt-10">
                  <table className="pt-10 shadow-2xl bg-lime-200">
                    <thead>
                      <th className="border border-black">Title</th>
                      <th className="border border-black">Info</th>
                    </thead>
                    <tbody className="text-gray-800 shadow-2xl bg-lime-200">
                      {data.content.map((item) => (
                        <tr
                          key={item.id}
                          className="transition-transform duration-300 transform hover:scale-105 hover:bg-[#e9e4ce49]"
                        >
                          <td title={item.name} className="px-6 py-3 text-sm font-medium text-left align-middle border border-black w-80">
                              {item.name}
                          </td>
                          <td className="w-40 px-6 py-3 text-sm font-medium text-left align-middle border border-black">
                              <a href={item.file} target="_blank">
                                <BsFiletypePdf size={30} />
                              </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          ))}


          {/* -------- */}

          <div>
          <div className="mt-10 text-2xl font-bold text-center">Citizen Portal - Status of SC/ST (Prevention of Atrocities) Act, 1989 cases (2018-2021)</div>
        <div className="flex justify-center w-full my-10">
            <div className="relative w-[60%] md:w-[40%] bg-[#e9e4ce49] border-[1px] border-[#E7581A] rounded-2xl py-2 px-4 z-20">
              <button
                onClick={toggleDropdown2}
                className="dropdown-toggle text-[#E7581A] flex justify-between w-full"
              >
                <span title="Select Category">Select Category</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 text-[#E7581A] transition-transform ${
                    toggleDropdown2 ? "" : "rotate-180"
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
              {isDropDownOpen2 && (
                <div className="absolute top-12 left-0 bg-white w-full border-[1px] border-[#E7581A] rounded-2xl py-2 px-4 z-20">
                  {atrocityCase.map((titles, i) => (
                    <ul key={i} className="dropdown-menu">
                      <li
                        onClick={() => {
                          setselectAtrocity(titles.title);
                          setisDropDownOpen2(!isDropDownOpen2);
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

          {atrocityCase.map((data, i) => (
            <div key={i}>
              {data.title === selectAtrocity && (
                <div className="flex justify-center mt-10">
                  <table className="pt-10 shadow-2xl bg-lime-200">
                    <thead>
                      <th className="border border-black">Title</th>
                      <th className="border border-black">Info</th>
                    </thead>
                    <tbody className="text-gray-800 shadow-2xl bg-lime-200">
                      {data.content.map((item) => (
                        <tr
                          key={item.id}
                          className="transition-transform duration-300 transform hover:scale-105 hover:bg-[#e9e4ce49]"
                        >
                          <td title={item.name} className="px-6 py-3 text-sm font-medium text-left align-middle border border-black w-80">
                              {item.name}
                          </td>
                          <td className="w-40 px-6 py-3 text-sm font-medium text-left align-middle border border-black">
                              <a href={item.file} target="_blank">
                                <BsFiletypePdf size={30} />
                              </a>
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

       
        


        <div className=" md:mt-[15rem]">
          <Footer />
        </div>
        
      </div>
      </div>
    </>
  )
};

export default page;
