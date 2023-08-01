"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";
import i18Instance from "@/customHooks/i18Instance";
import { useRouter } from "next/navigation";
import axios from "@/customHooks/axiosInstance";
i18Instance();

const Page = () => {
  const { t } = useTranslation();
  const router = useRouter();

  const [otpVerPopup, setotpVerPopup] = useState(false);
  const [captchaerror, setCaptchaError] = useState(true);
  const [lostFoundData, setlostFoundData] = useState({
    policeStation: "",

    name: "",
    email: "",
    mobile: "",
    address: "",
    pin: "",
    reportType: "",
    articleType: "",
    city: "",
    state: "",
    Articlepin: "",

    ArticleDescription: "",
  });

  const [otp, setOtp] = useState("");

  const handleChange = (e) => {
    setlostFoundData({ ...lostFoundData, [e.target.name]: e.target.value });
  };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setlostFoundData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };
  const [captcha, setCaptcha] = useState("");
  const [captchaImage, setCaptchaImage] = useState("");

  const handleRefreshCaptcha = () => {
    //function for refreshing the captcha from backend
    axios
      .get("/captcha/sendcaptcha")
      .then((response) => {
        const { data } = response;
        console.log("captcha is", data.text);
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

  const handleCaptchaCheck =  () => {
    console.log("entering captcha verification");
    console.log("frontend captcha is", captcha)
    const ata = {
      currentCaptcha: captcha,
    };

    // const { data } = await axios.post("/captcha/verifycaptcha", ata);
    // if (data.validity == true) {
    //   console.log("data is true", data);
    //   setCaptchaError(false);
    // } else {
    //   setCaptchaError(true);
    // }

    return axios.post("/captcha/verifycaptcha", ata);

  };

  const resetForm = () => {
    setlostFoundData({
      policeStation: "",
      applicantDetails: {
        name: "",
        email: "",
        contact: "",
        address: "",
        pin: "",
      },
      ArticleDetails: {
        reportType: "",
        articleType: "",
        city: "",
        state: "",
        pin: "",
      },
      ArticleDescription: "",
    });
  };

  const handleSubmit = async (e) => {
    alert("submit enter");

    //e.preventDefault();
      try {
        const { data } = await axios.post(
          "/LostandFound/create",
          lostFoundData
        );

        if (data) {
          const id = data._id;
          router.push(`/lost-found-pdf?data=${id}`);
          resetForm();
        } else {
          alert("Registration Failed");
        }
      } catch (error) {
        console.log(error);
      }
  
  }

  return (
    <>
      <div className="bg-[#e9e4ce49]">
        <Navbar />
        <div className="w-full ">
          <div className="text-5xl font-bold leading-9 text-center text-[#15233E] pt-14">
            <h1 className="underline pt-14 font-headingFont">{t('lost_found')}</h1>
          </div>
          <div className="text-center bg-lime-200 rounded-2xl shadow-lg py-10 w-[80%] px-10 mx-auto my-10">
            {t('lost_1')}
            <h1 className="text-xl">
            {t('lost_2')}{" "}
              <a
                href="https://www.ceir.gov.in/Home/index.jsp"
                target="_blank"
                className="text-orange-400"
              >
                {t('lost_3')}
              </a>{" "}
              {t('lost_4')}
            </h1>
          </div>

          <div className="w-[80%] bg-cyan-50 rounded-2xl shadow-lg py-10 px-10 mx-auto">
            <div className="my-3 md:w-1/2 md:my-0">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="option2"
              >
                {t('lost_5')}
              </label>
              <select
                className="w-full px-3 py-4 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
                id="option2"
                name="policeStation"
                value={lostFoundData?.policeStation}
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
            <div className="py-6 my-6 font-bold text-center bg-blue-400">
              Applicant's Details
            </div>

            <div className="my-4 md:flex">
              <div className="my-3 mr-2 md:w-1/2 md:my-0">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="name"
                >
                  {t('full_name')}
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  onChange={handleChange}
                  value={lostFoundData.name}
                  className="w-full px-3 py-4 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="md:w-1/2 md:ml-2">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="contact"
                >
                {t('email')}
                </label>
                <input
                  className="w-full px-3 py-4 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
                  id="contact"
                  type="text"
                  name="email"
                  placeholder="Enter your contact number"
                  value={lostFoundData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mb-4 md:flex">
              <div className="md:w-1/2 md:mr-2">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="name"
                >
                  {t('contact_no')}
                </label>
                <input
                  className="w-full px-3 py-4 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
                  id="name"
                  type="number"
                  name="mobile"
                  placeholder="Enter your Mobile No"
                  value={lostFoundData.mobile}
                  onChange={handleChange}
                />
              </div>
              <div className="my-3 md:w-1/2 md:my-0 md:ml-2">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="contact"
                >
                  {t('address')}
                </label>
                <input
                  className="w-full px-3 py-4 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
                  id="contact"
                  type="text"
                  name="address"
                  placeholder="Enter your Address"
                  value={lostFoundData.address}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mb-2 mr-2 md:w-1/2">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="name"
              >
                {t('tenant_24')}
              </label>
              <input
                className="w-full px-3 py-4 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
                id="name"
                type="number"
                placeholder="Enter your PIN Code"
                name="pin"
                value={lostFoundData.pin}
                onChange={handleChange}
              />
            </div>
            <div className="py-6 my-6 font-bold text-center bg-blue-400">
              {t('lost_7')}
            </div>
            <div className="mb-4 md:flex">
              <div className="my-3 mr-2 md:w-1/2 md:my-0">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="option2"
                >
                  {t('lost_8')}
                </label>
                <select
                  className="w-full px-3 py-4 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
                  id="option2"
                  name="reportType"
                  value={lostFoundData.reportType}
                  onChange={handleChange}
                >
                  <option value="none">{t('lost_25')}</option>
                  <option value="Lost Item Report">{t('lost_10')}</option>
                  <option value="Found Item Report">{t('lost_11')}</option>
                </select>
              </div>
              <div className="md:w-1/2 md:ml-2">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="option2"
                >
                  {t('lost_9')}
                </label>
                <select
                  className="w-full px-3 py-4 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
                  id="option2"
                  name="articleType"
                  value={lostFoundData.articleType}
                  onChange={handleChange}
                >
                  <option value="none">{t('lost_26')}</option>
                  <option value="Driving Licence">{t('tenant_40')}</option>
                  <option value="PAN Card">{t('tenant_37')}</option>
                  <option value="AADHAR Card">{t('tenant_36')}</option>
                  <option value="Voter ID Card">{t('tenant_38')}</option>
                  <option value="Ration Card">{t('tenant_39')}</option>
                  <option value="Educational Document">
                  {t('lost_13')}
                  </option>
                  <option value="Mobile ">{t('lost_14')} </option>
                  <option value="Other Document">{t('tenant_41')}</option>
                </select>
              </div>
            </div>

            <div className="mb-4 md:flex">
              <div className="my-3 mr-2 md:w-1/2 md:my-0 ">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="option2"
                >
                  {t('tenant_22')}
                </label>
                <select
                  className="w-full px-3 py-4 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
                  id="option2"
                  name="city"
                  value={lostFoundData.city}
                  onChange={handleChange}
                >
                  <option value="">Select City</option>
                  <option value="yNavi Mumbai">{t('city_mumbai')}</option>
                </select>
              </div>

              <div className="md:w-1/2 md:ml-2">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="option2"
                >
                 {t('tenant_23')}
                </label>
                <select
                  className="w-full px-3 py-4 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
                  id="option2"
                  name="state"
                  value={lostFoundData.state}
                  onChange={handleChange}
                >
                  <option value="">Select State</option>
                  <option value="Maharashtra">{t('state_21')}</option>
                </select>
              </div>
            </div>

            <div className="flex mb-4">
              <div className="mr-2 md:w-1/2">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="contact"
                >
                  {t('tenant_24')}
                </label>
                <input
                  className="w-full px-3 py-4 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
                  id="contact"
                  type="number"
                  name="Articlepin"
                  placeholder="Enter your contact number"
                  value={lostFoundData.Articlepin}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="address"
              >
                {t('lost_15')}
              </label>
              <input
                className="w-full px-3 py-4 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
                id="address"
                type="text"
                name="ArticleDescription"
                placeholder="Enter your address"
                value={lostFoundData?.ArticleDescription}
                onChange={handleChange}
              />
            </div>

            <div className="">
              <h1 className="font-bold text-left">Note</h1>
              <h1 className="text-left">
                1) This is a digitally signed document and requires no
                signatureas per IT Act 2008.
              </h1>
              <h1 className="text-left">
                2) If required approach the concerned Police Station for Police
                Stamp/Signature.
              </h1>
              <h1 className="text-left">
                3) This application is for lodging report of Articles Lost /
                Found in Navi Mumbai City only.
              </h1>
              <h1 className="text-left">
                4) Authority issuing duplicate document / article may obtain
                proof of identity.{" "}
              </h1>
            </div>
            <div className="">
              <h1 className="font-bold text-left">Disclaimer</h1>
              <h1 className="text-left">
                1) Report lodged with this application is not a subject matter
                of enquiry/investigation.
              </h1>
              <h1 className="text-left">
                2) In case loss is due to theft or any other crime, contact
                nearest police station.
              </h1>
              <h1 className="text-left">
                3) False report to police is a punishable offence as per IPC &
                IT Act.
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
              className="bg-gray-200 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full md:w-[30%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              value={captcha}
              onChange={(e) => setCaptcha(e.target.value)}
            />

            {captchaerror && <span>enter Captcha ....!</span>}
            {/* <button
              className="px-4 py-2 mx-5 mt-3 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
              type="reset"
            >
              Reset
            </button> */}
            <button
              onClick={async () => {
                // alert()
                const {data} = await handleCaptchaCheck();
                alert("submit captcha?")
                if (data.validity == true) {
                  alert("captcha is success")
                  if (lostFoundData.mobile !== "") {
                    const ata = {
                      mobile: lostFoundData.mobile,
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
              }}
              className="px-4 py-2 mx-4 mt-3 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
            >
              {t('tenant_55')}
            </button>
          </div>
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
                      mobile: lostFoundData.mobile,
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
    </>
  );
};

export default Page;
