"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useTranslation } from "react-i18next";
import i18Instance from "@/customHooks/i18Instance";
i18Instance();

function Page() {
  const { t } = useTranslation();

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
  return (
    <>
      <div className="w-full">
        <div className="bg-[#D2D2D2]">
          <Navbar />
          <div className="text-5xl font-bold leading-9 text-center text-[#15233E]">
            <h1 className="pt-14 mt-5">Online Complaint</h1>
          </div>
          <div className="w-full flex justify-center">
            <div className="w-10/12">
             

              <div className="justify-between  my-5 md:flex ">
                
            
                <div className="md:w-4/12 md:pl-8 flex justify-items-end  my-5 md:my-0">
                  <div className="w-full float-right">
                  <label htmlFor="name" className="font-bold text-gray-500">
                    {t("full_name")}*
                  </label>
                  <br />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    //   onChange={handleNameChange}
                    className="w-full py-1 border border-gray-500 rounded-lg "
                  />
                  </div>
                </div>
              </div>

              <div className="flex justify-between w-full">
                <div className="md:w-4/12 md:pr-8 flex justify-items-start  my-5 md:my-0">
                  <div className="w-full">
                  <label htmlFor="contact" className="font-bold text-gray-500">
                    {t("contact_no")}*
                  </label>
                  <br />
                  <input
                    type="number"
                    id="contact"
                    name="contact"
                    //   onChange={handlenumber}
                    className="w-full py-1 border border-gray-500 rounded-lg "
                  />
                  </div>
                </div>
                <div className="md:w-4/12 md:px-4 flex justify-center  my-5 md:my-0">
                  <div className="w-full">
                  <label htmlFor="email" className="font-bold text-gray-500">
                    {t("email")} *
                  </label>
                  <br />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    //   onChange={handleemail}
                    className="w-full  py-1 border border-gray-500 rounded-lg "
                  />
                  </div>
                </div>
                <div className="md:w-4/12 md:pl-8 flex justify-items-end  my-5 md:my-0">
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
                      //   onChange={handleaddress}
                      className="w-full py-1 border border-gray-500 rounded-lg "
                    />
                  </div>
                </div>
              </div>


              <div className="flex justify-center w-full my-5">
                  <div className="  md:w-[100%] w-full">
                    <label
                      htmlFor="article"
                      className="font-bold  text-gray-500"
                    >
                      {t("addrress")}*
                    </label>
                    <br />
                    <input
                      type="text"
                      id="address"
                      name="address"
                      //   onChange={handledescription}
                      className=" w-full py-1 border border-gray-500 rounded-lg"
                    />
                  </div>
                </div>



                <div className="flex justify-center my-5">
                  <div className=" justify-center w-full">
                    <label
                      htmlFor="article"
                      className="font-bold  text-gray-500"
                    >
                      {t("description")}
                    </label>
                    <br />
                    <input
                      type="text"
                      id="article"
                      name="article"
                      //   onChange={handledescription}
                      className="w-full py-1 border border-gray-500 rounded-lg"
                    />
                  </div>
                </div>



                <div className="flex justify-center mb-16">
                  <div className="">
                    <div className="flex justify-center">
                      <img src="" alt="captcha" className="bg-white" />
                      <button
                        type="button"
                        className="ml-2 my-2 bg-gray-200 px-3 py-1.5 rounded-lg text-sm text-gray-700 hover:bg-gray-300 focus:ring-2 focus:ring-gray-400"
                        // onClick={handleRefreshCaptcha}
                      >
                        {t("refresh")}
                      </button>
                    </div>
                    <div className="flex justify-center w-full mt-5">
                      <div className="w-full">
                        <input
                          type="text"
                          name="captcha"
                          placeholder="Enter the numbers above"
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-[200px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          required
                          // value={values.captcha}
                          //   onChange={handleCaptchaInput}
                        />
                        <div className="text-red-600 ">
                          <div className="justify-center text-center">
                            {/* <p>{errorMessage}</p> */}
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center">
                        <button
                          type="submit"
                          className="p-1 mx-5 font-bold text-white bg-blue-800 border border-gray-500"
                        >
                          {t("submit")}
                        </button>
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
    </>
  );
}

export default Page;
