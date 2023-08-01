"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";
import i18Instance from "@/customHooks/i18Instance";
import { BsFiletypePdf } from "react-icons/bs";
i18Instance();

const page = () => {
  const { t } = useTranslation();

  const sanad = [
    {
      name: "Nagarikanchi Sanad",
      id: "1",
      date: "09-05-2023",
      file: "./sanad1.pdf",
    },
  ];

  return (
    <>
      <div className="">
        <Navbar />
        <div className="bg-[#e9e4ce49] py-10">
          <div className="text-5xl font-bold leading-9 text-center text-[#15233E]">
            <h1 className="pt-14 font-headingFont underline" title={t("nagarikanchi_sanad")}>
              {t("nagarikanchi_sanad")}
            </h1>
          </div>
          <div className="text-[#15233E] md:mx-20 md:ml-24 mx-5">
            <br />
            <br />
            <div className="flex justify-center ">
              <table className="pt-10 bg-lime-200  shadow-2xl  border ">
                <thead>
                  <tr className="text-base text-center text-[#15233E] border border-black">
                    <th className="px-6 py-3 font-bold tracking-wider text-center uppercase border  border-black">
                      Date
                    </th>
                    <th className="px-6 py-3 font-bold tracking-wider text-center uppercase border border-black">
                      Title
                    </th>
                    <th className="px-6 py-3 font-bold tracking-wider text-center uppercase border border-black">
                      Info
                    </th>
                  </tr>
                </thead>
                <tbody className="text-[#15233E] bg-lime-200 ">
                  {sanad.map((hierarchy) => (
                    <tr
                      key={hierarchy.id}
                      className="transition-transform duration-300 transform hover:scale-105 hover:bg-[#e9e4ce49]"
                    >
                      <td
                        title={hierarchy.date}
                        className="px-6 py-3 text-sm font-medium text-left align-middle border border-black w-40"
                      >
                        {hierarchy.date}
                      </td>
                      <td className="px-6 py-3 text-sm font-medium text-left align-middle border border-black w-40">
                        <div
                          title={hierarchy.name}
                          className="flex justify-center "
                        >
                          {hierarchy.name}
                        </div>
                      </td>
                      <td className="px-6 py-3 text-sm font-medium text-left align-middle border border-black w-40">
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
