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
      title: "Good Work 2023",
      content: [
        {
          name: "Good Work done by Panvel city Police Station, Navi Mumbai Police.date -11.07.2023",
          id: "1",
          date: "20-Jul-2023",
          file: "/good-work/20-07-23(1).pdf",
        },
        {
          name: "Good Work done by Panvel city Police Station, Navi Mumbai Police.date -11.07.2023",
          id: "2",
          date: "20-Jul-2023",
          file: "/good-work/20-07-23(2).pdf",
        },
        {
          name: "Good Work done by Crime Branch Unit 2, Navi Mumbai Police date 15.06.2023",
          id: "3",
          date: "15-Jun-2023",
          file: "/good-work/15-06-23.pdf",
        },
        {
          name: "Good Work done by Anti Narcotics Cell crime Branch date 01.06.2023",
          id: "4",
          date: "02-Jun-2023",
          file: "/good-work/02-06-23.pdf",
        },
        {
          name: "Good Work done by Crime Branch Unit 3, Navi Mumbai Police",
          id: "5",
          date: "10-May-2023",
          file: "/good-work/10-05-23(1).pdf",
        },
        {
          name: "Good Work done by Crime Branch Unit 3, Navi Mumbai Police",
          id: "6",
          date: "10-May-2023",
          file: "/good-work/10-05-23(2).pdf",
        },
        {
          name: "Good Work done by Crime Branch EOW Unit 2 & AHTU Navi Mumbai",
          id: "7",
          date: "10-May-2023",
          file: "/good-work/10-05-23(3).pdf",
        },
        {
          name: "Good Work done by Crime Branch Unit 2, Navi Mumbai Police",
          id: "8",
          date: "10-may-2023",
          file: "/good-work/10-05-23(4).pdf",
        },
        {
          name: "Good Work done by Anti Narcotics Cell crime Branch",
          id: "9",
          date: "10-may-2023",
          file: "/good-work/10-05-23(5).pdf",
        },
        {
          name: "Good Work done by Crime Branch Unit 2, Navi Mumbai Police",
          id: "10",
          date: "10-may-2023",
          file: "/good-work/10-05-23(6).pdf",
        },
        {
          name: "Good Work done by Crime Branch Unit 2, Navi Mumbai Police",
          id: "11",
          date: "10-may-2023",
          file: "/good-work/10-05-23(7).pdf",
        },
        {
          name: "Good Work done by Crime Branch Unit 3, Navi Mumbai Police",
          id: "12",
          date: "10-may-2023",
          file: "/good-work/10-05-23(8).pdf",
        },
        {
          name: "Good Work done by Crime Branch Unit 3, Navi Mumbai Police",
          id: "13",
          date: "10-may-2023",
          file: "/good-work/10-05-23(9).pdf",
        },
        {
          name: "Good Work done by URAN Police Station",
          id: "14",
          date: "18-Feb-2023",
          file: "/good-work/18-02-23.pdf",
        },
        {
          name: "Good Work done by Crime Branch central Unit ,Navi Mumbai Police",
          id: "15",
          date: "15-Feb-2023",
          file: "/good-work/15-02-23.pdf",
        },
        {
          name: "Good Work done by Crime Branch Unit 2, Navi Mumbai Police",
          id: "16",
          date: "14-Feb-2023",
          file: "/good-work/14-02-23.pdf",
        },
      ],
    },
    {
      title: "Good Work 2022",
      content: [
        {
          name: "Good Work done by Anti Narcotics Cell crime Branch",
          id: "1",
          date: "22-Dec-2022",
          file: "/good-work/22-12-22.pdf",
        },
        {
          name: "Good Work done by Crime Branch Unit 2, Navi Mumbai Police",
          id: "2",
          date: "08-Nov-2022",
          file: "/good-work/08-11-22(1).pdf",
        },
        {
          name: "Good Work done by Crime Branch AHTU and Anti Narcotics Cell Navi Mumbai Police",
          id: "3",
          date: "08-Nov-2022",
          file: "/good-work/08-11-22(2).pdf",
        },
        {
          name: "Anti Narcotics Cell crime Branch",
          id: "4",
          date: "08-nov-2022",
          file: "/good-work/08-11-22(3)",
        },
        {
          name: "Good Work done by Crime Branch Central unit,Navi Mumbai Police",
          id: "5",
          date: "13-Aug-2022",
          file: "/good-work/13-08-22.pdf",
        },
        {
          name: "Good Work done by Taloja Police Station and Panvel Taluka Police Station",
          id: "6",
          date: "17-Jun-2022",
          file: "/good-work/17-06-22.pdf",
        },
        {
          name: "Good Work done by Crime Branch Central unit,Navi Mumbai Police",
          id: "7",
          date: "07-Jun-2022",
          file: "/good-work/07-06-22.pdf",
        },
        {
          name: "Good Work done by Crime Branch Unit1, Navi Mumbai Police date",
          id: "8",
          date: "28-Apr-2022",
          file: "/good-work/28-04-22.pdf",
        },
        {
          name: "Good Work done by Crime Branch Unit1, Navi Mumbai Police",
          id: "9",
          date: "28-Apr-2022",
          file: "/good-work/28-04-22(1).pdf",
        },
        {
          name: "Good Work done by Crime Branch Unit 1, Navi Mumbai Police",
          id: "10",
          date: "28-Apr-2022",
          file: "/good-work/28-04-22(2).pdf",
        },
        {
          name: "2022	Good Work done by Crime Branch , Navi Mumbai Police",
          id: "11",
          date: "28-Apr-2022",
          file: "/good-work/28-04-22(3).pdf",
        },
        {
          name: "Good Work done by Crime Branch Unit 1, Navi Mumbai Police",
          id: "12",
          date: "27-Apr-2022",
          file: "/good-work/27-04-22(1).pdf",
        },
        {
          name: "Good Work done by Anti Narcotics Cell Crime Branch ,Navi Mumbai Police",
          id: "13",
          date: "27-Apr-2022",
          file: "/good-work/27-04-22(2).pdf",
        },
        {
          name: "Good Work done by Crime Branch ,Unit-2 Navi Mumbai Police",
          id: "14",
          date: "27-Apr-2022",
          file: "/good-work/27-04-22(3).pdf",
        },
        {
          name: "Good Work done by Crime Branch Unit 2, Navi Mumbai Police",
          id: "15",
          date: "27-Apr-2022",
          file: "/good-work/27-04-22(4).pdf",
        },
        {
          name: "Good Work done by Anti Narcotics Cell Crime Branch ,Navi Mumbai Police",
          id: "16",
          date: "27-Apr-2022",
          file: "/good-work/27-04-22(5).pdf",
        },
        
      ],
    },
    {
      title: "Good Work 2021",
      content: [
        {
          name: "Good Work done by nerul Police Station, Navi Mumbai Police.",
          id: "1",
          date: "02-Aug-2021",
          file: "/good-work/02-08-21.pdf",
        },
        {
          name: "Good Work done by Nerul Police Station, Navi Mumbai Police.",
          id: "2",
          date: "10-Jul-2021",
          file: "/good-work/10-07-21.pdf",
        },
        {
          name: "Good Work done by Nerul Police Station, Navi Mumbai Police.",
          id: "3",
          date: "10-Jul-2021",
          file: "/good-work/10-07-21(1).pdf",
        },
        {
          name: "Good Work done by Koparkhairane Police Station, Navi Mumbai Police.",
          id: "4",
          date: "10-Jul-2021",
          file: "/good-work/10-07-21(2).pdf",
        },
        {
          name: "Good Work done by Crime Branch ,Unit-2 Navi Mumbai Police",
          id: "5",
          date: "13-Jun-2021",
          file: "/good-work/13-06-21(1).pdf",
        },
        {
          name: "Good Work done by Crime Branch ,Unit-2 Navi Mumbai Police",
          id: "6",
          date: "13-Jun-2021",
          file: "/good-work/13-06-21(2).pdf",
        },
        {
          name: "Good Work done by Crime Branch Unit-2 ,Navi Mumbai Police",
          id: "7",
          date: "13-Jun-2021",
          file: "/good-work/13-06-21(3).pdf",
        },
        {
          name: "Good Work done by Crime Branch Unit-3 ,Navi Mumbai Police",
          id: "8",
          date: "13-Jun-2021",
          file: "/good-work/13-06-21(4).pdf",
        },
        {
          name: "Good Work done by Crime Branch Unit-1 ,Navi Mumbai Police",
          id: "9",
          date: "13-Jun-2021",
          file: "/good-work/13-06-21(5).pdf",
        },
        {
          name: "Good Work done by Crime Branch central Unit ,Navi Mumbai Police",
          id: "10",
          date: "13-Jun-2021",
          file: "/good-work/13-06-21(6).pdf",
        },
        {
          name: "Good Work done by Anti Narcotics Cell Crime Branch ,Navi Mumbai Police",
          id: "11",
          date: "13-Jun-2021",
          file: "/good-work/13-06-21(7).pdf",
        },
        {
          name: "Good Work done by Anti Narcotics Cell Crime Branch ,Navi Mumbai Police",
          id: "12",
          date: "13-Jun-2021",
          file: "/good-work/13-06-21(8).pdf",
        },
        {
          name: "Good Work done by Anti Human Trafficking Unit Crime Branch ,Navi Mumbai Police",
          id: "13",
          date: "13-Jun-2021",
          file: "/good-work/13-06-21(9).pdf",
        },
        {
          name: "Good Work done by Rabale MIDC Police Station, Navi Mumbai Police",
          id: "14",
          date: "04-May-2021",
          file: "/good-work/04-05-21(1).pdf",
        },
        {
          name: "Good Work done by Panvel city Police Station, Navi Mumbai Police",
          id: "15",
          date: "04-May-2021",
          file: "/good-work/04-05-21(2).pdf",
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
            <h1 className="underline pt-14 font-headingFont" title={t("good_work")}>
              {t("good_work")}
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
                  <table className="pt-10 shadow-2xl rounded-2xl bg-lime-200">
                    {/* <thead></thead> */}
                    <tbody className="text-gray-800 shadow-2xl rounded-2xl bg-lime-200">
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
