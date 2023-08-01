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
          name: "January-2023",
          id: "1",
          file: "crimeStatistics/jan2023.pdf",
        },
        {
          name: "February-2023",
          id: "2",
          file: "crimeStatistics/feb2023.pdf",
        },
        {
          name: "March-2023",
          id: "3",
          file: "crimeStatistics/mar2023.pdf",
        },
        {
          name: "April-2023",
          id: "4",
          file: "crimeStatistics/apr2023.pdf",
        },
        {
          name: "May-2023",
          id: "5",
          file: "crimeStatistics/may2023.pdf",
        },
      ],
    },
    {
      title: "2022",
      content: [
        {
          name: "January-2022",
          id: "1",
          file: "crimeStatistics/jan2022.pdf",
        },
        {
          name: "February-2022",
          id: "2",
          file: "crimeStatistics/feb2022.pdf",
        },
        {
          name: "March-2022",
          id: "3",
          file: "crimeStatistics/mar2022.pdf",
        },
        {
          name: "April-2022",
          id: "4",
          file: "crimeStatistics/apr2022.pdf",
        },
        {
          name: "May-2022",
          id: "5",
          file: "crimeStatistics/may2022.pdf",
        },
        {
          name: "June-2022",
          id: "6",
          file: "crimeStatistics/jun2022.pdf",
        },
        {
          name: "July-2022",
          id: "7",
          file: "crimeStatistics/jul2022.pdf",
        },
        {
          name: "August-2022",
          id: "8",
          file: "crimeStatistics/aug2022.pdf",
        },
        {
          name: "September-2022",
          id: "9",
          file: "crimeStatistics/sept2022.pdf",
        },
        {
          name: "October-2022",
          id: "10",
          file: "crimeStatistics/oct2022.pdf",
        },
        {
          name: "November-2022",
          id: "11",
          file: "crimeStatistics/nov2022.pdf",
        },
        {
          name: "December-2022",
          id: "12",
          file: "crimeStatistics/dec2022.pdf",
        },
      ],
    },
    {
      title: "2021",
      content: [
        {
          name: "January-2021",
          id: "1",
          file: "crimeStatistics/jan2021.pdf",
        },
        {
          name: "February-2021",
          id: "2",
          file: "crimeStatistics/feb2021.pdf",
        },
        {
          name: "March-2021",
          id: "3",
          file: "crimeStatistics/mar2021.pdf",
        },
        {
          name: "April-2021",
          id: "4",
          file: "crimeStatistics/apr2021.pdf",
        },
        {
          name: "May-2021",
          id: "5",
          file: "crimeStatistics/may2021.pdf",
        },
        {
          name: "June-2021",
          id: "6",
          file: "crimeStatistics/jun2021.pdf",
        },
        {
          name: "July-2021",
          id: "7",
          file: "crimeStatistics/jul2021.pdf",
        },
        {
          name: "August-2021",
          id: "8",
          file: "crimeStatistics/aug2021.pdf",
        },
        {
          name: "September-2021",
          id: "9",
          file: "crimeStatistics/sept2021.pdf",
        },
        {
          name: "October-2021",
          id: "10",
          file: "crimeStatistics/oct2021.pdf",
        },
        {
          name: "November-2021",
          id: "11",
          file: "crimeStatistics/nov2021.pdf",
        },
        {
          name: "December-2021",
          id: "12",
          file: "crimeStatistics/dec2021.pdf",
        },
      ],
    },
    {
      title: "2020",
      content: [
        {
          name: "January-2020",
          id: "1",
          file: "crimeStatistics/jan2020.pdf",
        },
        {
          name: "February-2020",
          id: "2",
          file: "crimeStatistics/feb2020.pdf",
        },
        {
          name: "March-2020",
          id: "3",
          file: "crimeStatistics/mar2020.pdf",
        },
        {
          name: "April-2020",
          id: "4",
          file: "crimeStatistics/apr2020.pdf",
        },
        {
          name: "May-2020",
          id: "5",
          file: "crimeStatistics/may2020.pdf",
        },
        {
          name: "June-2020",
          id: "6",
          file: "crimeStatistics/jun2020.pdf",
        },
        {
          name: "July-2020",
          id: "7",
          file: "crimeStatistics/jul2020.pdf",
        },
        {
          name: "August-2020",
          id: "8",
          file: "crimeStatistics/aug2020.pdf",
        },
        {
          name: "September-2020",
          id: "9",
          file: "crimeStatistics/sept2020.pdf",
        },
        {
          name: "October-2020",
          id: "10",
          file: "crimeStatistics/oct2020.pdf",
        },
        {
          name: "November-2020",
          id: "11",
          file: "crimeStatistics/nov2020.pdf",
        },
        {
          name: "December-2020",
          id: "12",
          file: "crimeStatistics/dec2020.pdf",
        },
      ],
    },
    {
      title: "2019",
      content: [
        {
          name: "January-2019",
          id: "1",
          file: "crimeStatistics/jan2019.pdf",
        },
        {
          name: "February-2019",
          id: "2",
          file: "crimeStatistics/feb2019.pdf",
        },
        {
          name: "March-2019",
          id: "3",
          file: "crimeStatistics/mar2019.pdf",
        },
        {
          name: "April-2019",
          id: "4",
          file: "crimeStatistics/apr2019.pdf",
        },
        {
          name: "May-2019",
          id: "5",
          file: "crimeStatistics/may2019.pdf",
        },
        {
          name: "June-2019",
          id: "6",
          file: "crimeStatistics/jun2019.pdf",
        },
        {
          name: "July-2019",
          id: "7",
          file: "crimeStatistics/jul2019.pdf",
        },
        {
          name: "August-2019",
          id: "8",
          file: "crimeStatistics/aug2019.pdf",
        },
        {
          name: "September-2019",
          id: "9",
          file: "crimeStatistics/sept2019.pdf",
        },
        {
          name: "October-2019",
          id: "10",
          file: "crimeStatistics/oct2019.pdf",
        },
        {
          name: "November-2019",
          id: "11",
          file: "crimeStatistics/nov2019.pdf",
        },
        {
          name: "December-2019",
          id: "12",
          file: "crimeStatistics/dec2019.pdf",
        },
      ],
    },
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
            <h1 className="underline pt-14 font-headingFont" title={t("crime_statistics")}>
              {t("crime_statistics")}
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
                      <th className="border border-black">Title</th>
                      <th className="border border-black">Info</th>
                    </thead>
                    <tbody className="text-gray-800 shadow-2xl bg-lime-200">
                      {data.content.map((item) => (
                        <tr
                          key={item.id}
                          className="transition-transform duration-300 transform hover:scale-105 hover:bg-[#e9e4ce49]"
                        >
                          {/* <td
                            title={item.date}
                            className="w-40 px-6 py-3 text-sm font-medium text-left align-middle border border-black"
                          >
                            {item.date}
                          </td> */}
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
