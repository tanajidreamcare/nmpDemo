"use client"
import React, { useEffect, useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import i18Instance from "@/customHooks/i18Instance";
import axios from "@/customHooks/axiosInstance.js";
import { BsFiletypePdf } from "react-icons/bs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

i18Instance();

function Page() {
  const [captcha, setCaptcha] = useState("");
  const [captchaImage, setCaptchaImage] = useState("");
  const [accData, setAccData] = useState([]);
  const [selectedPoliceStation, setSelectedPoliceStation] = useState("");
  const [searchCR, setSearchCR] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    axios.get("/admin/accident-compensation").then((response) => {
      const data = response.data;
      setAccData(data);
    });
  }, []);

  // Use useMemo to memoize the filteredData and avoid unnecessary re-calculations
  const filteredData = useMemo(() => {
    let data = [...accData];

    // Filter data based on selected police station
    if (selectedPoliceStation !== "") {
      data = data.filter((item) => item.policeStation === selectedPoliceStation);
    }

    // Filter data based on searchCR
    if (searchCR !== "") {
      data = data.filter((item) =>
        item.CRNo.toLowerCase().includes(searchCR.toLowerCase())
      );
    }

    // Sort data based on sortOrder and year
    data.sort((a, b) => {
      if (sortOrder === "asc") {
        return a.year - b.year;
      } else {
        return b.year - a.year;
      }
    });

    return data;
  }, [accData, selectedPoliceStation, searchCR, sortOrder]);

  const { t } = useTranslation();
  const optionsPoliceStation = [
    { value: "APMC", label: t("apmc") },
    { value: "CBD Belapur", label: t("cbd_belapur") },
    { value: "Kalamboli", label: t("kalamboli") },
    { value: "Kamothe", label: t("kamothe") },
    { value: "Khandeshwar", label: t("khandeshwar") },
    { value: "Kharghar", label: t("kharghar") },
    { value: "Kopar Khairane", label: t("kopar_khairane") },
    { value: "Mora Sagari", label: t("mora_sagari") },
    { value: "Nerul", label: t("nerul") },
    { value: "Nhava Sheva", label: t("nhava_sheva") },
    { value: "NRI", label: t("nri") },
    { value: "Panvel", label: t("panvel") },
    { value: "Panvel Taluka", label: t("panvel_taluka") },
    { value: "Rabale", label: t("rabale") },
    { value: "Rabale MIDC", label: t("rabale_midc") },
    { value: "Sanpada", label: t("sanpada") },
    { value: "Taloja", label: t("taloja") },
    { value: "Turbhe", label: t("turbhe") },
    { value: "Uran", label: t("uran") },
    { value: "Vashi", label: t("washi") },
  ];

  return (
    <div className="bg-[#e9e4ce49]">
      <Navbar />
      <div className="py-10">
        <div className="text-5xl font-bold leading-9 text-center text-[#15233E]">
          <h1
            className="underline pt-14 font-headingFont"
            title={t("accident_compensation")}
          >
            {t("accident_compensation")}
          </h1>
        </div>

        <div className="flex justify-center">
          <div className="md:w-[80%] w-[90%]  ">
            <div className="">
              <div className="md:flex justify-between w-full bg-gray-800 mt-16 md:gap-10 ">
                <div className="md:flex justify-center  md:w-[40%]   md:px-4 md:my-0">
                  <div className="w-full pt-6">
                    <label
                      htmlFor="dropdownValue"
                      className="font-bold text-gray-200"
                    >
                      {t("police_station")}
                    </label>
                    <br />
                    <select
                      name="policeStation"
                      value={selectedPoliceStation}
                      onChange={(e) => setSelectedPoliceStation(e.target.value)}
                      id="reportdropdownValue"
                      className="w-full p-4 border bg-white border-gray-500 rounded-lg "
                      required
                    >
                      <option value="">{t("select_police_station")}</option>
                      {optionsPoliceStation.map((option) => (
                        <option key={option.value} value={option.label}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className=" text-gray-500 md:w-[40%] pt-6 ">
                  <p className="font-bold text-gray-200">Search By CR No *</p>
                  <input
                    type="text"
                    placeholder="Search"
                    className="bg-white rounded-lg p-3 border-[1px] border-gray-500 "
                    value={searchCR}
                    onChange={(e) => setSearchCR(e.target.value)}
                  />
                </div>
              </div>
              <table className="w-full">
                <thead className="bg-gray-800 text-white px-6 pb-5">
                  <tr className="border-2 border-gray-800">
                    <th className="py-10 px-5 mx-6">Police Station</th>
                    <th className="mx-6 py-10 px-5">
                      Year
                      <button
                        onClick={() =>
                          setSortOrder(sortOrder === "asc" ? "desc" : "asc")
                        }
                      >
                        {sortOrder === "asc" ? "▲" : "▼"}
                      </button>
                    </th>
                    <th className="mx-6 py-10 px-5">CR Number</th>
                    <th className="mx-6 py-10 px-5">File</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((item) => (
                    <tr key={item.id} className="bg-white">
                      <td className="mx-6 py-10 px-5 border-2 border-gray-800">
                        {item.policeStation}
                      </td>
                      <td className="mx-6 py-10 px-5 border-2 border-gray-800">
                        {item.year}
                      </td>
                      <td className="mx-6 py-10 px-5 border-2 border-gray-800">
                        {item.CRNo}
                      </td>
                      <td className="mx-6 py-10 px-5 border-2 border-gray-800">
                        <a
                          href={`http://3.111.197.119/api/uploads/${item.filename}`}
                          target="_blank"
                        >
                          <BsFiletypePdf size={30} />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Page;
