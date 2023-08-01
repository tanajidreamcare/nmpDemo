"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18Instance from "@/customHooks/i18Instance";
import axios from "@/customHooks/axiosInstance.js";
import { useRouter } from "next/navigation";
i18Instance();

function Page() {
  const { t } = useTranslation();
  const router = useRouter();

  const [otpVerPopup, setotpVerPopup] = useState(false);
  const [captchaerror, setCaptchaError] = useState(false);
  const [loudspeakerData, setloudspeakerData] = useState({
    policeStation: "",
    name: "",
    contact: "",
    addressApp: "",
    organization: "",
    nameOrg: "",
    addressOrg: "",
    officeTel: "",
    regNum: "",
    file: null,
    nameOrganizer: "",
    organizerNumber: "",
    organizerAddress: "",
    programName: "",
    venue: "",
    time1: "",
    time2: "",
    time3: "",
    time4: "",
    date1: "",
    date2: "",
    LSNo: "",
    generator: "",
    permission: "",
    file2: null,
    contractorName: "",
    contractorNo: "",
    contractorAddress: "",
    licenseName: "",
    file3: null,
  });

  const [otp, setOtp] = useState("");

  // const handleChange = (e) => {
  //   setloudspeakerData({ ...loudspeakerData, [e.target.name]: e.target.value });
  // }

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      // If files are present, it's a file input change
      setloudspeakerData({
        ...loudspeakerData,
        [name]: files[0], // You can store the selected file object directly or process it further if needed.
      });
    } else {
      // If no files, it's a regular input change
      setloudspeakerData({
        ...loudspeakerData,
        [name]: value,
      });
    }
  };

  const [captcha, setCaptcha] = useState("");
  const [captchaImage, setCaptchaImage] = useState("");

  const handleRefreshCaptcha = () => {
    //function for refreshing the captcha from backend
    axios
      .get("/captcha/sendcaptcha")
      .then((response) => {
        const { data } = response;
        setCaptchaImage("data:image/svg+xml;base64," + btoa(data));
      })
      .catch((error) => {
        console.log(error.message);
        seterrorMessage("Failed to refresh captcha.");
      });
  };

  useEffect(() => {
    handleRefreshCaptcha();
  }, []);

  const handleCaptchaCheck = async () => {
    console.log("entering captcha verification");
    const ata = {
      currentCaptcha: captcha,
    };

    const { data } = await axios.post("/captcha/verifycaptcha", ata);
    if (data.validity == true) {
      console.log("data is true", data);
      setCaptchaError(false);
      return true;
    } else {
      setCaptchaError(true);
    }
  };

  const resetForm = () => {
    setloudspeakerData({
      policeStation: "",
      name: "",
      contact: "",
      addressApp: "",
      organization: "",
      nameOrg: "",
      addressOrg: "",
      officeTel: "",
      regNum: "",
      file: null,
      nameOrganizer: "",
      organizerNumber: "",
      organizerAddress: "",
      programName: "",
      venue: "",
      time1: "",
      time2: "",
      time3: "",
      time4: "",
      date1: "",
      date2: "",
      LSNo: "",
      generator: "",
      permission: "",
      file2: null,
      contractorName: "",
      contractorNo: "",
      contractorAddress: "",
      licenseName: "",
      file3: null,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(loudspeakerData);
    try {
      const { data } = await axios.post(
        "/loud-speaker/create",
        loudspeakerData
      );
      if (data) {
        const id = data._id;
        console.log(data);
        router.push(`/loud-speaker-pdf?data=${id}`);
        resetForm();
      } else {
        alert("Registration Failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        <Navbar />
        <div className="w-full bg-[#e9e4ce49]  pb-14">
          <div className="text-5xl font-bold leading-9 text-center text-[#15233E] py-14">
            <h1 className="underline pt-14 font-headingFont" title={t('loudspeaker_permission')}>{t('loudspeaker_permission')}</h1>
          </div>
          <form
            //  onSubmit={handleSubmit}
            className="w-[80%] bg-cyan-50 rounded-2xl shadow-lg py-10  px-10 mx-auto"
          >
            <div className="my-3 md:w-1/2">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="option2"
              >
                {t('lost_5')}
              </label>
              <select
                name="policeStation"
                className="w-full px-3 py-3 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
                id="policeStation"
                value={loudspeakerData.policeStation}
                onChange={handleChange}
              >
                <option value="">{t('select_police_station')}</option>
                <option value="APMC">{t('apmc')}</option>
                <option value="CBD Belapur">{t('cbd_belapur')}</option>
                <option value="Kamothe">{t('kamothe')}</option>
                <option value="Kalamboli">{t('kalamboli')}</option>
                <option value="Khandeshwar">{t('khandeshwar')}</option>
                <option value="Kharghar">{t('kharghar')}</option>
                <option value="Kopar Khairane">{t('kopar_khairane')}</option>
                <option value="Mora Sagari">{t('mora_sagari')}</option>
                <option value="Nerul">{t('nerul')}</option>
                <option value="Nhava Sheva">{t('nhava_sheva')}</option>
                <option value="NRI">{t('nri')}</option>
                <option value="Panvel">{t('panvel')}</option>
                <option value="Panvel Taluka">{t('panvel_taluka')}</option>
                <option value="Rabale">{t('rabale')}</option>
                <option value="Rabale MIDC">{t('rabale_midc')}</option>
                <option value="Sanpada">{t('sanpada')}</option>
                <option value="Taloja">{t('taloja')}</option>
                <option value="Turbhe">{t('turbhe')}</option>
                <option value="Uran">{t('uran')}</option>
                <option value="Vashi">{t('washi')}</option>
              </select>
            </div>
            <div className="py-3 my-3 mt-8 font-bold text-center bg-blue-400">
              {t('lost_6')}
            </div>

            <div className="mb-4 md:flex">
              <div className="md:w-1/2 md:mr-2">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="name"
                >
                  {t('tenant_18')} *
                </label>
                <input
                  className="w-full px-3 py-3 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={loudspeakerData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="my-3 md:w-1/2 md:my-0 md:ml-2">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="contact"
                >
                  {t('tenant_19')} *
                </label>
                <input
                  className="w-full px-3 py-3 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
                  id="contact"
                  type="number"
                  name="contact"
                  placeholder="Enter your contact number"
                  value={loudspeakerData.contact}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="addressApp"
              >
                {t('tenant_21')}
              </label>
              <input
                className="w-full px-3 py-3 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
                id="addressApp"
                type="text"
                name="addressApp"
                placeholder="Enter your address"
                value={loudspeakerData.addressApp}
                onChange={handleChange}
                required
              />
            </div>
            <div className="py-3 my-3 mt-8 font-bold text-center bg-blue-400">
              {t('loud_1')}
            </div>
            <div className="mb-4 md:flex">
              <div className="md:w-1/2">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="organization"
                >
                  {t('loud_2')} *
                </label>
                <select
                  className="w-full px-3 py-3 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
                  id="organization"
                  name="organization"
                  value={loudspeakerData.organization}
                  onChange={handleChange}
                  required
                >
                  <option value="">{t('loud_2')}</option>
                  <option value="Organization">{t('loud_3')}</option>
                  <option value="Association">{t('loud_4')}</option>
                  <option value="Mandal">{t('loud_5')}</option>
                  <option value="Political Party">{t('loud_6')}</option>
                  <option value="Individual">{t('loud_7')}</option>
                  <option value="Housing Society">{t('loud_8')}</option>
                </select>
              </div>
              <div className="my-3 md:w-1/2 md:ml-2 md:my-0">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="nameOrg"
                >
                  {t('loud_9')} *
                </label>
                <input
                  className="w-full px-3 py-3 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
                  id="nameOrg"
                  name="nameOrg"
                  type="text"
                  placeholder="Enter your contact number"
                  value={loudspeakerData.nameOrg}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="addressOrg"
              >
                {t('tenant_21')}
              </label>
              <input
                className="w-full px-3 py-3 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
                id="addressOrg"
                type="text"
                name="addressOrg"
                placeholder="Enter your address"
                value={loudspeakerData.addressOrg}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4 md:flex">
              <div className="md:w-1/2 md:mr-2">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="officeTel"
                >
                  {t('loud_10')} *
                </label>
                <input
                  className="w-full px-3 py-3 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
                  id="officeTel"
                  type="number"
                  name="officeTel"
                  placeholder="Enter your name"
                  value={loudspeakerData.officeTel}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="my-3 md:w-1/2 md:my-0 md:mr-2">
                <label
                  className="block my-6 mb-2 text-sm font-bold text-gray-700 md:my-0"
                  htmlFor="regNum"
                >
                  {t('loud_11')}
                </label>
                <input
                  className="w-full px-3 py-3 mt-2 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
                  id="regNum"
                  type="number"
                  name="regNum"
                  placeholder="Enter your register name"
                  value={loudspeakerData.regNum}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="my-2 md:w-1/2 md:mr-2">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="file"
              >
                {t('loud_12')}
              </label>
              <input
                className="w-full px-3 py-3 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
                id="file"
                type="file"
                // onChange={(e) => setFile(e.target.files[0])}
                onChange={handleChange}
                required
                accept=".pdf, .doc"
              />
            </div>
            <div className="py-3 my-3 mt-8 font-bold text-center bg-blue-400">
            {t('loud_13')}
            </div>
            <div className="mb-4 md:flex">
              <div className="md:w-1/2 ">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="nameOrganizer"
                >
                  {t('tenant_18')} *
                </label>
                <input
                  className="w-full px-3 py-3 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
                  id="nameOrganizer"
                  name="nameOrganizer"
                  type="text"
                  placeholder="Enter your name"
                  value={loudspeakerData.nameOrganizer}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="my-3 md:w-1/2 md:my-0 md:ml-2">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="organizerNumber"
                >
                  {t('tenant_19')} *
                </label>
                <input
                  className="w-full px-3 py-3 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
                  id="organizerNumber"
                  name="organizerNumber"
                  type="number"
                  placeholder="Enter your contact number"
                  value={loudspeakerData.organizerNumber}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="organizerAddress"
              >
                {t('tenant_21')}
              </label>
              <input
                className="w-full px-3 py-3 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
                id="organizerAddress"
                type="text"
                name="organizerAddress"
                placeholder="Enter your address"
                value={loudspeakerData.organizerAddress}
                onChange={handleChange}
                required
              />
            </div>
            <div className="py-3 my-3 mt-8 font-bold text-center bg-blue-400">
              {t('loud_14')}
            </div>
            <div className="mb-4 md:flex">
              <div className="md:w-1/2 md:mr-2">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="name"
                >
                  {t('loud_15')} *
                </label>
                <input
                  className="w-full px-3 py-3 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
                  id="programName"
                  type="text"
                  name="programName"
                  placeholder="Enter program name"
                  value={loudspeakerData.programName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="my-3 md:w-1/2 md:my-0 md:ml-2">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="venue"
                >
                  {t('loud_16')} *
                </label>
                <input
                  className="w-full px-3 py-3 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
                  id="venue"
                  type="text"
                  name="venue"
                  placeholder="Enter your venue"
                  value={loudspeakerData.venue}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <h1 className="font-bold ">
              {t('loud_17')}
            </h1>
            <div className="mb-4 md:flex">
              <div className="my-3 md:w-1/4 md:my-0 md:mr-2">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="time1"
                >
                  {t('loud_18')}
                </label>
                <input
                  className="w-full px-3 py-3 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
                  id="time1"
                  type="time"
                  name="time1"
                  value={loudspeakerData.time1}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="my-3 md:w-1/4 md:my-0 md:mr-2">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="time2"
                >
                  {t('loud_19')}
                </label>
                <input
                  className="w-full px-3 py-3 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
                  id="time2"
                  type="time"
                  name="time2"
                  value={loudspeakerData.time2}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="my-3 md:w-1/4 md:my-0 md:mr-2">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="time3"
                >
                  {t('loud_20')}
                </label>
                <input
                  className="w-full px-3 py-3 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
                  id="time3"
                  type="time"
                  name="time3"
                  value={loudspeakerData.time3}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="my-3 md:w-1/4 md:my-0 md:ml-2">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="time4"
                >
                  {t('loud_21')}
                </label>
                <input
                  className="w-full px-3 py-3 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
                  id="time4"
                  type="time"
                  name="time4"
                  value={loudspeakerData.time4}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="mb-4 md:flex">
              <div className="md:w-1/2 md:mr-2">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="date1"
                >
                  {t('loud_22')} *
                </label>
                <input
                  className="w-full px-3 py-3 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
                  id="date1"
                  type="date"
                  name="date1"
                  value={loudspeakerData.date1}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="my-3 md:w-1/2 md:my-0 md:ml-2">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="date2"
                >
                  {t('loud_23')} *
                </label>
                <input
                  className="w-full px-3 py-3 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
                  id="date2"
                  type="date"
                  name="date2"
                  value={loudspeakerData.date2}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="mb-4 md:flex">
              <div className="md:w-1/2 md:mr-2">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="name"
                >
                  {t('loud_24')}
                </label>
                <input
                  className="w-full px-3 py-3 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
                  id="LSNo"
                  type="number"
                  name="LSNo"
                  placeholder="Enter Number"
                  value={loudspeakerData.LSNo}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="my-3 md:w-1/2 md:ml-2 md:my-0">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="generator"
                >
                  {t('loud_25')} *
                </label>
                <select
                  className="w-full px-3 py-3 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
                  id="generator"
                  name="generator"
                  value={loudspeakerData.generator}
                  onChange={handleChange}
                  required
                >
                  <option value="">{t('loud_2')}</option>
                  <option value="yes">{t('loud_26')}</option>
                  <option value="no">{t('loud_27')}</option>
                </select>
              </div>
            </div>
            <div className="mb-4 md:flex">
              <div className="md:w-1/2 md:mr-4">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="option2"
                >
                  {t('loud_28')} *
                </label>
                <select
                  className="w-full px-3 py-3 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
                  id="permission"
                  name="permission"
                  required
                  value={loudspeakerData.permission}
                  onChange={handleChange}
                >
                  <option value="">{t('loud_2')}</option>
                  <option value="yes">{t('loud_26')}</option>
                  <option value="no">{t('loud_27')}</option>
                </select>
              </div>
              <div className="my-3 md:w-1/2 md:my-0">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="file"
                >
                  {t('loud_29')}
                </label>
                <input
                  className="w-full px-3 py-3 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
                  id="file2"
                  type="file"
                  required
                  // onChange={(e) => setFile2(e.target.files[0])}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="py-3 my-3 mt-8 font-bold text-center bg-blue-400">
            {t('loud_30')}
            </div>
            <div className="mb-4 md:flex">
              <div className="md:w-1/2 md:mr-2">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="name"
                >
                  {t('tenant_18')} *
                </label>
                <input
                  className="w-full px-3 py-3 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
                  id="contractorName"
                  type="text"
                  name="contractorName"
                  placeholder="Enter your name"
                  value={loudspeakerData.contractorName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="my-3 md:w-1/2 md:my-0 md:ml-2">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="contact"
                >
                  {t('tenant_19')} *
                </label>
                <input
                  className="w-full px-3 py-3 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
                  id="contractorNo"
                  type="text"
                  name="contractorNo"
                  placeholder="Enter your contractor number"
                  value={loudspeakerData.contractorNo}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="address"
              >
                {t('tenant_21')}
              </label>
              <input
                className="w-full px-3 py-3 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
                id="contractorAddress"
                type="text"
                name="contractorAddress"
                placeholder="Enter your address"
                value={loudspeakerData.contractorAddress}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4 md:flex">
              <div className="md:w-1/2 md:mr-2">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="name"
                >
                  {t('loud_31')}
                </label>
                <input
                  className="w-full px-3 py-3 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
                  id="licenseName"
                  type="text"
                  name="licenseName"
                  placeholder="Enter your name"
                  value={loudspeakerData.licenseName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="my-3 md:w-1/2 md:my-0 md:mr-2">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="file"
                >
                  {t('loud_32')}
                </label>
                <input
                  className="w-full px-3 py-3 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
                  id="file3"
                  type="file"
                  // onChange={(e) => setFile(e.target.files[0])}
                  onChange={handleChange}

                />
              </div>
            </div>
            <div className="">
              <h1 className="mt-6 mb-2 font-bold underline">{t('loud_33')}</h1>
              <h1 className="text-left">
              {t('loud_34')}
              </h1>
              <h1 className="text-left">
              {t('loud_35')}
              </h1>
              <h1 className="text-left">
              {t('loud_36')}
              </h1>
            </div>

            <img
              src={captchaImage}
              alt="captcha"
              className="w-40 h-16 bg-white"
            />

            <button
              type="button"
              className="ml-2 my-2 bg-gray-200 px-3 py-1.5 rounded-lg text-sm text-gray-700 hover:bg-gray-300 focus:ring-2 focus:ring-gray-400"
              onClick={handleRefreshCaptcha}
            >
              {t("refresh")}
            </button>
            <input
              type="text"
              name="captcha"
              placeholder="Enter the data above"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full md:w-[30%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              value={captcha}
              onChange={(e) => setCaptcha(e.target.value)}
            />

            {captchaerror && <span>enter Captcha ....!</span>}

            {/* <button
              className="px-4 py-2 mx-5 font-bold text-white bg-blue-400 rounded hover:bg-blue-700"
              type="reset"
              onClick={() => resetForm()}
            >
              Reset
            </button> */}
            <button
              className="px-4 py-2 mt-5 font-bold text-white bg-blue-400 rounded hover:bg-blue-700"
              onClick={ async () => {
                alert("submit?");
                const completed = await handleCaptchaCheck();
                console.log("compz", completed)
                if(completed == true){
                  console.log("error is ", captchaerror)
                  if (captchaerror == false) {
                    alert("captcha is success");
                    if (loudspeakerData.contact !== "") {
                      const ata = {
                        mobile: loudspeakerData.contact,
                      };
  
                      const { data } = await axios.post("/otp/sendOtp", ata);
                      console.log("data", data);
                      //const data="kkkk"
                      if (data.status == "pending") {
                        setotpVerPopup(!otpVerPopup);
                      } else {
                        alert("Failed to Send OTP");
                      }
                    } else {
                      alert("Enter Mobile Number");
                    }
                  } else {
                    alert("captcha error");
                  }
                }
                
              }}
            >
              Submit
            </button>
          </form>
        </div>
        <div className=" md:mt-[10rem]">
          <Footer />
        </div>
      </div>

      {otpVerPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
          <div className="p-8 bg-white rounded-md">
            <h2 className="mb-4 text-xl font-semibold">Enter OTP</h2>

            <input
              type="number"
              value={otp}
              name="otp"
              onChange={(e) => {
                setOtp(e.target.value);
              }}
              className="w-full p-2 mb-4 border border-gray-300 rounded-md"
              placeholder="Enter OTP"
            />
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => {
                  setotpVerPopup(!otpVerPopup);
                }}
                className="px-4 py-2 mr-2 text-sm text-gray-600 rounded-md hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                // type="submit"
                className="px-4 py-2 text-sm text-white bg-blue-500 rounded-md hover:bg-blue-600"
                onClick={async () => {
                  if (otp !== "" && otp.length == 6) {
                    const ata = {
                      mobile: loudspeakerData.contact,
                      otp: otp,
                    };
                    console.log("verify", ata);
                    const { data } = await axios.post("/otp/verifyOtp", ata);
                    if (data.valid) {
                      handleSubmit();
                    } else {
                      alert("OTP verification Failed");
                    }
                  } else {
                    alert("enter a valid OTP");
                  }
                }}
              >
                Verify
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Page;
