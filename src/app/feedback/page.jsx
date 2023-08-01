"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useTranslation } from "react-i18next";
import i18Instance from "@/customHooks/i18Instance";
import { useEffect, useState } from "react";
import axios from "@/customHooks/axiosInstance";
import { useRouter } from "next/navigation";
i18Instance();

function Page() {
  const { t } = useTranslation();
  const router = useRouter();
  const [otpVerPopup, setotpVerPopup] = useState(false);
  const optionsFeedback = [
    { value: "option1", label: t("inform_us") },
    { value: "option2", label: t("feedback") },
  ];

  const optionsPoliceStation = [
    { value: "option1", label: t("apmc") },
    { value: "option2", label: t("cbd_belapur") },
    { value: "option3", label: t("kalamboli") },
    { value: "option4", label: t("kamothe") },
    { value: "option5", label: t("khandeshwar") },
    { value: "option6", label: t("kharghar") },
    { value: "option7", label: t("kopar_khairane") },
    { value: "option8", label: t("mora_sagari") },
    { value: "option9", label: t("nerul") },
    { value: "option10", label: t("nhava_sheva") },
    { value: "option11", label: t("nri") },
    { value: "option12", label: t("panvel") },
    { value: "option13", label: t("panvel_taluka") },
    { value: "option14", label: t("rabale") },
    { value: "option15", label: t("rabale_midc") },
    { value: "option16", label: t("sanpada") },
    { value: "option17", label: t("taloja") },
    { value: "option18", label: t("turbhe") },
    { value: "option19", label: t("uran") },
    { value: "option20", label: t("washi") },
  ];
  // const [verifyCaptcha,setVerifycaptcha]=useState("")
  const [captchaerror, setCaptchaError] = useState(true);

  const [feedbackData, setFeedBackdata] = useState({
    policeStation: "",
    category: "",
    fullName: "",
    mobile: "",
    email: "",
    Address: "",
    subject: "",
    description: "",
  });
  const [captcha, setCaptcha] = useState("");
  const [captchaImage, setCaptchaImage] = useState("");

  useEffect(() => {
    handleRefreshCaptcha();
  }, []);

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

  const handleCaptchaCheck = async () => {
    const ata = {
      currentCaptcha: captcha,
    };
    return axios.post("/captcha/verifycaptcha", ata);
  };
  

  console.log(("errorsss", captchaerror));
  const handleChange = (e) => {
    setFeedBackdata({ ...feedbackData, [e.target.name]: e.target.value });
  };
  const resetForm = () => {
    setFeedBackdata({
      policeStation: "",
      category: "",
      fullName: "",
      mobile: "",
      email: "",
      Address: "",
      subject: "",
      description: "",
    });
  };
  const [otp, setOtp] = useState("");
  const handleSubmit = async (e) => {
    // e.preventDefault();

    try {
      const { data } = await axios.post("/feedBackRoute/create", feedbackData);
      // const { data } = await signUp(user);
      if (data) {
        const id = data._id;
        router.push(`/feedbackpdf?data=${id}`);
        resetForm();
      } else {
        alert("Registration Failed");
      }
    } catch (error) {
      console.log(error);
    }
    //  }
  };
  return (
    <>
      <div className="w-full">
        <div className="bg-[#e9e4ce49]">
          <Navbar />

          <div className="text-5xl  font-bold leading-9 text-center text-[#15233E]">
            <h1 className="pt-20 underline font-headingFont">{t("feedback")}</h1>
          </div>

          <div className="flex justify-center w-full ">
            <div className="w-10/12 mt-20">
              <div className="p-10 mb-10 shadow-lg bg-lime-200 rounded-2xl ">
                <h1 className="pb-4 font-bold text-black">{t("disclaimer")}</h1>
                <h1 className="text-black">{t("inform_2")}</h1>
                <h1 className="text-black">{t("inform_3")}</h1>
              </div>

              <div className="p-10 shadow-lg bg-cyan-50 rounded-2xl ">
              <div className="justify-between my-5 md:flex ">
                <div className="flex justify-start my-5 md:w-4/12 md:pr-8 md:my-0">
                  <div className="w-full">
                    <label
                      htmlFor="dropdownValue"
                      className="font-bold text-gray-500"
                    >
                      {t("select_category")} *
                    </label>
                    <br />
                    <select
                      name="category"
                      required
                      onChange={handleChange}
                      id="reportdropdownValue"
                      className="w-full p-4 border border-gray-500 rounded-lg "
                    >
                      <option value="">{t("select_category")}</option>
                      {optionsFeedback.map((option) => (
                        <option key={option.value} value={option.label}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="flex justify-center w-full my-5 md:w-4/12 md:px-4 md:my-0">
                  <div className="w-full">
                    <label
                      htmlFor="dropdownValue"
                      className="font-bold text-gray-500"
                    >
                      {t("police_station")}
                    </label>
                    <br />
                    <select
                      name="policeStation"
                      //  value={feedbackData.firstName}
                      onChange={handleChange}
                      id="reportdropdownValue"
                      className="w-full p-4 border border-gray-500 rounded-lg "
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
                <div className="flex my-5 md:w-4/12 md:pl-8 justify-items-end md:my-0">
                  <div className="float-right w-full">
                    <label htmlFor="name" className="font-bold text-gray-500">
                      {t("full_name")}*
                    </label>
                    <br />
                    <input
                      type="text"
                      id="name"
                      name="fullName"
                      value={feedbackData.fullName}
                      onChange={handleChange}
                      className="w-full p-4 border border-gray-500 rounded-lg "
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="justify-between w-full md:flex">
                <div className="flex my-5 md:w-4/12 md:pr-8 justify-items-start md:my-0">
                  <div className="w-full">
                    <label
                      htmlFor="contact"
                      className="font-bold text-gray-500"
                    >
                      {t("contact_no")}*
                    </label>
                    <br />
                    <input
                      type="number"
                      name="mobile"
                      value={feedbackData.mobile}
                      onChange={handleChange}
                      className="w-full p-4 border border-gray-500 rounded-lg "
                      required
                    />
                  </div>
                </div>
                <div className="flex justify-center my-5 md:w-4/12 md:px-4 md:my-0">
                  <div className="w-full">
                    <label htmlFor="email" className="font-bold text-gray-500">
                      {t("email")} *
                    </label>
                    <br />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={feedbackData.email}
                      onChange={handleChange}
                      className="w-full p-4 border border-gray-500 rounded-lg "
                      required
                    />
                  </div>
                </div>
                <div className="flex my-5 md:w-4/12 md:pl-8 justify-items-end md:my-0">
                  <div className="w-full">
                    <label
                      htmlFor="address"
                      className="font-bold text-gray-500"
                    >
                      {t("subject")} *
                    </label>
                    <br />
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={feedbackData.subject}
                      onChange={handleChange}
                      className="w-full p-4 border border-gray-500 rounded-lg "
                      required
                    />
                  </div>
                </div>
              </div>
              {/* <button onClick={()=>{
                          const id="64b840ff50a3e5672e40106d"
                         
                        }}>
                          haiiiiii
                        </button> */}
              <div className="flex justify-center w-full my-5">
                <div className="  md:w-[100%] w-full">
                  <label htmlFor="article" className="font-bold text-gray-500">
                    {t("addrress")}*
                  </label>
                  <br />
                  <input
                    type="text"
                    id="address"
                    name="Address"
                    value={feedbackData.Address}
                    onChange={handleChange}
                    className="w-full p-4 border border-gray-500 rounded-lg "
                    required
                  />
                </div>
              </div>

              <div className="flex justify-center my-5">
                <div className="justify-center w-full ">
                  <label htmlFor="article" className="font-bold text-gray-500">
                    {t("description")}
                  </label>
                  <br />
                  <input
                    type="text"
                    id="article"
                    name="description"
                    value={feedbackData.description}
                    onChange={handleChange}
                    className="w-full p-4 border border-gray-500 rounded-lg"
                    required
                  />
                </div>
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
              <button
                // type="submit"
                onClick={async () => {
                  // alert()
                 const {data} = await handleCaptchaCheck();
                  if (data.validity == true) {
                    if (feedbackData.mobile !== "") {
                      const ata = {
                        mobile: feedbackData.mobile,
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
                className="p-1 mx-5 font-bold text-white bg-blue-800 border border-gray-500"
              >
                {t("submit")}
              </button>
              <div className="flex justify-center mb-16">
                <div className="">
                  <div className="flex justify-center">
                    <span>_</span>
                    {/* <img src=""  className="bg-white" /> */}
                    {/* <button
                      type="button"
                      className="ml-2 my-2 bg-gray-200 px-3 py-1.5 rounded-lg text-sm text-gray-700 hover:bg-gray-300 focus:ring-2 focus:ring-gray-400"
                      // onClick={handleRefreshCaptcha}
                    >
                      {t("refresh")}
                    </button> */}
                  </div>
                  <div className="flex justify-center w-full mt-5">
                    <div className="w-full">
                      {/* <input
                        type="text"
                        name="captcha"
                        placeholder="Enter the numbers above"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-[200px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                        // value={values.captcha}
                        //   onChange={handleCaptchaInput}
                      /> */}
                      <div className="text-red-600 ">
                        <div className="justify-center text-center">
                          {/* <p>{errorMessage}</p> */}
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      {/* <button
                        // type="submit"
                        onClick={() => {
                          // alert()
                          console.log("hello");
                        }}
                        className="p-1 mx-5 font-bold text-white bg-blue-800 border border-gray-500"
                      >
                        {t("submit")}
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>

          <div className=" md:mt-[0rem]">
            <Footer />
          </div>
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
                      mobile: feedbackData.mobile,
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
}

export default Page;