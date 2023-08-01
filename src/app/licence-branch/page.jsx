"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";
import i18Instance from "@/customHooks/i18Instance";
import { BsFiletypePdf } from "react-icons/bs";
i18Instance();

const page = () => {
  const { t } = useTranslation();

  const goodwork = [
    {
      name: t("licence_1"),
      id: "1",
      date: "14-Jun-2019",
      file: "./license9.pdf",
    },
    {
      name: t("licence_2"),
      id: "2",
      date: "14-Jun-2019",
      file: "./license8.pdf",
    },
    {
      name: t("licence_3"),
      id: "3",
      date: "12-Jun-2019",
      file: "./license7.pdf",
    },
    {
      name: t("licence_4"),
      id: "4",
      date: "15-Jun-2019",
      file: "./license6.pdf",
    },
    {
      name: t("licence_5"),
      id: "5",
      date: "15-Jun-2019",
      file: "./license5.pdf",
    },
    {
      name: t("licence_6"),
      id: "6",
      date: "20-Oct-2020",
      file: "./license4.pdf",
    },
    {
      name: t("licence_7"),
      id: "7",
      date: "11-Jul-2019",
      file: "./license3.pdf",
    },
    {
      name: t("licence_8"),
      id: "8",
      date: "11-Jul-2019",
      file: "./license2.pdf",
    },
    {
      name: t("licence_9"),
      id: "9",
      date: "19-Jul-2019",
      file: "./license1.pdf",
    },
  ];

  return (
    <>
      <div className="">
        <Navbar />
        <div className="bg-[#e9e4ce49] py-10">
          <div className="text-5xl font-bold leading-9 text-center text-[#15233E]">
            <h1
              className="pt-14 font-headingFont underline"
              title={t("licence_branch")}
            >
              {t("licence_branch")}
            </h1>
          </div>
          <div className="flex justify-center items-center text[#15233E] md:mx-20  mx-5">
            <br />
            <br />
            <div className="flex justify-center mt-10  ">
              <table className="pt-10 bg-lime-200  ">
                <thead></thead>
                <tbody className="text-gray-800 bg-lime-200 ">
                  {goodwork.map((hierarchy) => (
                    <tr
                      key={hierarchy.id}
                      className="transition-transform duration-300 transform hover:scale-105 hover:bg-lime-300"
                    >
                      <td
                        title={hierarchy.date}
                        className="px-6 py-3 text-sm font-medium text-left align-middle border"
                      >
                        {hierarchy.date}
                      </td>
                      <td className="px-6 py-3 text-sm font-medium text-left align-middle border">
                        <div
                          title={hierarchy.name}
                          className="flex justify-center "
                        >
                          {hierarchy.name}
                        </div>
                      </td>
                      <td className="px-6 py-3 text-sm font-medium text-left align-middle border">
                        <div className="flex justify-center ">
                          <a href={hierarchy.file} target="_blank">
                            <BsFiletypePdf size={30} />
                          </a>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className=" md:mt-[0rem]">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default page;
