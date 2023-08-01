"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";
import i18Instance from "@/customHooks/i18Instance";
import axios from "@/customHooks/axiosInstance";
import { useRouter } from "next/navigation";
i18Instance();

function page() {

  const { t } = useTranslation();
  const router = useRouter();
  const [otpVerPopup, setotpVerPopup] = useState(false);

  const [otp, setOtp] = useState("");
  const [formData, setFormData] = useState({
    policeStation: "",
    propertyOwnerImage: "",
    fullName: "",
    mobile: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pinCode: "",
    rentPropertyAddress: "",
    rentPropertyCity: "",
    rentPropertySate: "",
    rentPropertyPincode: "",
    AgreementStartDate: "",
    AgreementEndDate: "",
    tenantName: "",
    tenantPicture: "",
    tenantPermenentAddress: "",
    tenantPermantCity: "",
    tenantState: "",
    tenantPincode: "",
    tenantIdType: "",
    tenantIdNumber: "",
    tenantCoresidents: "",
    tenantIdProof: "",
    tenantWorkPlaceNumber: "",
    tenantWorkPlaceEmail: "",
    tenantOccupation: "",
    tenantWorkplaceAddress: "",
    tenantWorkplaceCity: "",
    tenantWorkplaceState: "",
    tenantWorkplacePincode: "",
    tenantKnownPersonName: "",
    tenantKnownPersonMobile: "",
    tenantKnownPerson2Name: "",
    tenantKnownPerson2Mobile: "",
    AgentName: "",
    AgentDetails: "",
    AcceptTerms: "",
  });
  console.log("formData", formData);
  const options = [
    {
      name: t('tenant_12'),
      fields: [
        [
          {
            label: t('select_police_station'),
            type: "dropdown",
            value: formData.policeStation[0],
            name: "policeStation",
            options: [
              t("apmc"),
              t("cbd_belapur"),
              t("kalamboli"),
              t("kamothe"),
              t("khandeshwar"),
              t("kharghar"),
              t("kopar_khairane"),
              t("mora_sagari"),
              t("nerul"),
              t("nhava_sheva"),
              t("nri"),
              t("panvel") ,
              t("panvel_taluka"),
              t("rabale"),
              t("rabale_midc"),
              t("sanpada"),
              t("taloja"),
              t("turbhe"),
              t("uran"),
              t("washi"),
            ],
          },
          {
            label: t('tenant_17'),
            type: "file",
            value: formData.propertyOwnerImage[0],
            name: "propertyOwnerImage",
          },
        ],
        [
          {
            label: t('tenant_18'),
            type: "text",
            value: formData.fullName[0],
            name: "fullName",
          },
        ],
        [
          {
            label: t('tenant_19'),
            type: "number",
            value: formData.mobile[0],
            name: "mobile",
          },
          {
            label: t('tenant_20'),
            type: "email",
            value: formData.email[0],
            name: "email",
          },
        ],
        [
          {
            label: t('tenant_21'),
            type: "text",
            value: formData.address[0],
            name: "address",
          },
          {
            label: t('tenant_22'),
            type: "text",
            value: formData.city[0],
            name: "city",
          },
        ],
        [
          {
            label: t('tenant_23'),
            type: "dropdown",
            value: formData.state[0],
            name: "state",
            options: [
              t('state_1'),
              t('state_2'),
              t('state_3'),
              t('state_4'),
              t('state_5'),
              t('state_6'),
              t('state_7'),
              t('state_8'),
              t('state_9'),
              t('state_10'),
              t('state_11'),
              t('state_12'),
              t('state_13'),
              t('state_14'),
              t('state_15'),
              t('state_16'),
              t('state_17'),
              t('state_18'),
              t('state_19'),
              t('state_20'),
              t('state_21'),
              t('state_22'),
              t('state_23'),
              t('state_24'),
              t('state_25'),
              t('state_26'),
              t('state_27'),
              t('state_28'),
              t('state_29'),
              t('state_30'),
              t('state_31'),
              t('state_32'),
              t('state_33'),
              t('state_34'),
              t('state_35'),
              t('state_36'),
            ],
          },
          {
            label: t('tenant_24'),
            type: "number",
            value: formData.pinCode[0],
            name: "pinCode",
          },
        ],
      ],
    },
    {
      name: t('tenant_13'),
      fields: [
        [
          {
            label: t('tenant_21'),
            type: "text",
            value: formData.rentPropertyAddress[0],
            name: "rentPropertyAddress",
          },
          {
            label: t('tenant_22'),
            type: "text",
            value: formData.rentPropertyCity[0],
            name: "rentPropertyCity",
          },
        ],
        [
          {
            label: t('tenant_23'),
            type: "dropdown",
            value: formData.rentPropertySate[0],
            name: " rentPropertyState",
            options: [
              t('state_1'),
              t('state_2'),
              t('state_3'),
              t('state_4'),
              t('state_5'),
              t('state_6'),
              t('state_7'),
              t('state_8'),
              t('state_9'),
              t('state_10'),
              t('state_11'),
              t('state_12'),
              t('state_13'),
              t('state_14'),
              t('state_15'),
              t('state_16'),
              t('state_17'),
              t('state_18'),
              t('state_19'),
              t('state_20'),
              t('state_21'),
              t('state_22'),
              t('state_23'),
              t('state_24'),
              t('state_25'),
              t('state_26'),
              t('state_27'),
              t('state_28'),
              t('state_29'),
              t('state_30'),
              t('state_31'),
              t('state_32'),
              t('state_33'),
              t('state_34'),
              t('state_35'),
              t('state_36'),
            ],
          },
          {
            label: t('tenant_24'),
            type: "number",
            value: formData.rentPropertyPincode[0],
            name: " rentPropertyPincode",
          },
        ],
        [
          {
            label: t('tenant_26'),
            type: "date",
            value: formData.AgreementStartDate[0],
            name: "AgreementStartDate",
          },
          {
            label: t('tenant_27'),
            type: "date",
            value: formData.AgreementEndDate[0],
            name: "AgreementEndDate",
          },
        ],
      ],
    },
    {
      name: t('tenant_14'),
      fields: [
        [
          {
            label: t('tenant_29'),
            type: "text",
            value: formData.tenantName[0],
            name: "tenantName",
          },
          {
            label: t('tenant_30'),
            type: "file",
            value: formData.tenantPicture[0],
            name: "tenantPicture",
          },
        ],
        [
          {
            label: t('tenant_31'),
            type: "text",
            value: formData.tenantPermenentAddress[0],
            name: "tenantPermenentAddress",
          },
          {
            label: t('tenant_32'),
            type: "text",
            value: formData.tenantPermantCity[0],
            name: "tenantPermantCity",
          },
        ],
        [
          {
            label: t('tenant_23'),
            type: "dropdown",
            value: formData.tenantState[0],
            name: "tenantState",
            options: [
              t('state_1'),
              t('state_2'),
              t('state_3'),
              t('state_4'),
              t('state_5'),
              t('state_6'),
              t('state_7'),
              t('state_8'),
              t('state_9'),
              t('state_10'),
              t('state_11'),
              t('state_12'),
              t('state_13'),
              t('state_14'),
              t('state_15'),
              t('state_16'),
              t('state_17'),
              t('state_18'),
              t('state_19'),
              t('state_20'),
              t('state_21'),
              t('state_22'),
              t('state_23'),
              t('state_24'),
              t('state_25'),
              t('state_26'),
              t('state_27'),
              t('state_28'),
              t('state_29'),
              t('state_30'),
              t('state_31'),
              t('state_32'),
              t('state_33'),
              t('state_34'),
              t('state_35'),
              t('state_36'),
            ],
          },
          {
            label: t('tenant_24'),
            type: "number",
            value: formData.tenantPincode[0],
            name: "tenantPincode",
          },
        ],
        [
          {
            label: t('tenant_33'),
            type: "dropdown",
            name: "tenantIdType",
            options: [
              t('tenant_36'),
              t('tenant_37'),
              t('tenant_38'),
              t('tenant_39'),
              t('tenant_40'),
              t('tenant_41'),
            ],
          },
          {
            label: t('tenant_34'),
            type: "number",
            name: "tenantIdNumber",
          },
        ],
        [
          { label: t('tenant_35'), type: "text", name: "tenantCoresidents" },
          // { label: '', type: 'text', name: 'ten input1' },
          // { label: '', type: 'text', name: 'ten input2' },
        ],
        [
          {
            label: "Upload Your Identity Proof",
            type: "file",
            value: formData.tenantIdProof[0],
            name: "tenantIdProof",
            fullWidth: true,
          },
        ],
      ],
    },
    {
      name: t('tenant_15'),
      fields: [
        [
          {
            label: t('tenant_42'),
            value: formData.tenantWorkPlaceNumber[0],
            type: "number",
            name: "tenantWorkPlaceNumber",
          },
          {
            label: t('tenant_43'),
            type: "email",
            name: "tenantWorkPlaceEmail",
          },
        ],
        [
          {
            label: t('tenant_44'),
            value: formData.tenantOccupation[0],
            type: "text",
            name: "tenantOccupation",
          },
          {
            label: t('tenant_45'),
            value: formData.tenantWorkplaceAddress[0],
            type: "text",
            name: "tenantWorkplaceAddress",
          },
        ],
        [
          {
            label: t('tenant_32'),
            value: formData.tenantWorkplaceCity[0],
            type: "text",
            name: "tenantWorkplaceCity",
          },
          {
            label: t('tenant_23'),
            type: "dropdown",
            value: formData.tenantWorkplaceState[0],
            name: "tenantWorkplaceState",
            options: [
              t('state_1'),
              t('state_2'),
              t('state_3'),
              t('state_4'),
              t('state_5'),
              t('state_6'),
              t('state_7'),
              t('state_8'),
              t('state_9'),
              t('state_10'),
              t('state_11'),
              t('state_12'),
              t('state_13'),
              t('state_14'),
              t('state_15'),
              t('state_16'),
              t('state_17'),
              t('state_18'),
              t('state_19'),
              t('state_20'),
              t('state_21'),
              t('state_22'),
              t('state_23'),
              t('state_24'),
              t('state_25'),
              t('state_26'),
              t('state_27'),
              t('state_28'),
              t('state_29'),
              t('state_30'),
              t('state_31'),
              t('state_32'),
              t('state_33'),
              t('state_34'),
              t('state_35'),
              t('state_36'),
            ],
          },
        ],
        [
          {
            label: t('tenant_24'),
            type: "number",
            value: formData.tenantWorkplacePincode[0],
            name: "tenantWorkplacePincode",
          },
        ],
      ],
    },
    {
      name: t('tenant_16'),
      fields: [
        [
          {
            label: t('tenant_46'),
            type: "text",
            value: formData.tenantKnownPersonName[0],
            name: "tenantKnownPersonName",
          },
          {
            label: t('tenant_47'),
            type: "number",
            value: formData.tenantKnownPersonMobile[0],
            name: "tenantKnownPersonMobile",
          },
        ],
        [
          {
            label: t('tenant_48'),
            type: "text",
            value: formData.tenantKnownPerson2Name[0],
            name: "tenantKnownPerson2Name",
          },
          {
            label: t('tenant_49'),
            type: "number",
            value: formData.tenantKnownPerson2Mobile[0],
            name: "tenantKnownPerson2Mobile",
          },
        ],
        [
          {
            label: t('tenant_50'),
            type: "text",
            value: formData.AgentName[0],
            name: "AgentName",
          },
          {
            label: t('tenant_51'),
            type: "text",
            value: formData.AgentDetails[0],
            name: "AgentDetails",
          },
        ],
        [{ label: t('tenant_52'), type: "number", name: "per number" }],
        [
          {
            label: t('tenant_53'),
            type: "checkbox",
            value: formData.AcceptTerms[0],
            name: "AcceptTerms",
          },
        ],
      ],
    },
  ];

  

  const [currentOption, setCurrentOption] = useState(0);

  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: inputValue,
    }));
  };

  console.log("formData", formData);
  const handlePreviousClick = () => {
    setCurrentOption((prevOption) => prevOption - 1);
  };

  const handleNextClick = () => {
    if (currentOption === options.length - 1) {
      if (termsAccepted) {
        console.log("Form submitted:", formData);
        resetForm();
      } else {
        alert(
          "Please accept the terms and conditions before submitting the form."
        );
      }
    } else {
      const { fields } = options[currentOption];
      const isFormValid = fields.every((fieldGroup) => {
        return fieldGroup.every((field) => {
          const { name } = field;
          if (field.type === "dropdown") {
            return formData[name] !== undefined;
          }
          return formData[name];
        });
      });
      if (isFormValid) {
        setCurrentOption((prevOption) => prevOption + 1);
      } else {
        alert(
          "Please fill in all fields before proceeding to the next option."
        );
      }
    }
  };
  const handleSubmit = async (e) => {
    alert("submit enter");
    //e.preventDefault();

    try {
      const { data } = await axios.post("/TenantInformation/create", formData);
      // const { data } = await signUp(user);
      console.log("/TenantInformation", data);
      //router.push('/lost-found-pdf');
      if (data) {
        const id = data._id;
        router.push(`/tenent-pdf?data=${id}`);

        //resetForm();
      } else {
        alert("Registration Failed");
      }
    } catch (error) {
      console.log(error);
    }
    //  }
  };
  const resetForm = () => {
    setCurrentOption(0);
    setFormData({});
    setTermsAccepted(false);
  };

  const renderFields = () => {
    const { fields } = options[currentOption];

    return (
      <>
        {Array.isArray(fields) &&
          fields.map((fieldGroup, groupIndex) => (
            <div className="md:flex mb-4 mt-4 text-[#15233E] " key={groupIndex}>
              {Array.isArray(fieldGroup) &&
                fieldGroup.map((field, fieldIndex) => (
                  <div
                    className={field.fullWidth ? "w-full" : "md:w-1/2 mr-2 "}
                    key={fieldIndex}
                  >
                    <label
                      className="block my-3 mt-4 text-sm font-bold text-gray-700"
                      htmlFor={field.name}
                    >
                      {field.label}*
                    </label>
                    {field.type === "dropdown" ? (
                      <select
                        className="w-full px-3 py-3 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
                        id={field.name}
                        name={field.name}
                        value={formData[field.name] || ""}
                        onChange={handleInputChange}
                      >
                        <option value="">Select an option</option>
                        {field.options.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    ) : field.type === "file" ? (
                      <input
                        className="w-full px-3 py-3 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
                        id={field.name}
                        name={field.name}
                        type="file"
                        onChange={handleInputChange}
                      />
                    ) : field.type === "checkbox" ? (
                      <div className="flex items-center">
                        <input
                          className="mr-2 leading-tight"
                          id="acceptTerms"
                          name="acceptTerms"
                          type="checkbox"
                          checked={termsAccepted}
                          onChange={() => setTermsAccepted(!termsAccepted)}
                        />
                        <label
                          className="text-sm text-gray-700"
                          htmlFor={field.name}
                        >
                          {t('tenant_54')}
                        </label>
                      </div>
                    ) : (
                      <input
                        className="w-full px-3 py-3 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
                        id={field.name}
                        name={field.name}
                        type={field.type}
                        placeholder={`Enter your ${field.label.toLowerCase()}`}
                        value={formData[field.name] || ""}
                        onChange={handleInputChange}
                      />
                    )}
                  </div>
                ))}
            </div>
          ))}
      </>
    );
  };

  return (
    <div className="w-full bg-[#e9e4ce49]">
      <Navbar />
      <div className="">
        <div className="text-5xl font-bold leading-9 text-center text-[#15233E] pt-14">
          <h1 className="mb-10 underline pt-14 font-headingFont" title={t('tenant_information')}>{t('tenant_information')}</h1>
        </div>
        <div className="w-[80%] bg-cyan-50 rounded-2xl shadow-lg my-5 pb-10 px-2 lg:px-10 mx-auto py-10">
          <h1 className="text-xl font-bold">{t('tenant_1')}</h1>
          <h1 className="py-1">
            1){" "}
            <span className="mx-5">
              {" "}
              {t('tenant_2')}
            </span>{" "}
          </h1>
          <h1 className="py-1">
            2){" "}
            <span className="mx-5">
              {" "}
              {t('tenant_3')}{" "}
            </span>{" "}
          </h1>
          <h1 className="py-1">
            A) <span className="mx-5"> {t('tenant_4')} </span>{" "}
          </h1>
          <h1 className="py-1">
            B){" "}
            <span className="mx-5">
              {" "}
              {t('tenant_5')}{" "}
            </span>{" "}
          </h1>
          <h1 className="py-1">
            C){" "}
            <span className="mx-5">
              {" "}
              {t('tenant_6')}{" "}
            </span>{" "}
          </h1>
          <h1 className="py-1 md:relative">
            3){" "}
            <span className="mx-5 md:absolute md:left-5">
              {" "}
              {t('tenant_7')}{" "}
            </span>{" "}
          </h1>
          <h1 className="py-1 mt-5">
            4){" "}
            <span className="mx-5">
              {" "}
              {t('tenant_8')}{" "}
            </span>{" "}
          </h1>
          <h1 className="py-1">
            5){" "}
            <span className="mx-5">
              {" "}
              {t('tenant_9')}{" "}
            </span>{" "}
          </h1>
          <h1 className="py-1">
            6){" "}
            <span className="mx-5">
              {" "}
              {t('tenant_10')}{" "}
            </span>{" "}
          </h1>
          <h1 className="py-1 pb-10 md:relative">
            7){" "}
            <span className="mx-5 md:absolute md:left-5">
              {" "}
              {t('tenant_11')}{" "}
            </span>{" "}
          </h1>
        </div>
      </div>

      <div className="justify-center gap-1 lg:flex ">
        <div className="p-4 mt-10 md:w-3/12">
          <ul className="p-5 shadow-lg bg-cyan-200 rounded-2xl">
          <div className="p-5 ">
          {options?.map((option, index) => (
              <li
                key={index}
                className={`cursor-pointer hover:scale-105 transition-all duration-500 my-3 ${
                  index === currentOption ? "text-white bg-gray-600 rounded-xl font-bold  p-2 my-2" : ""
                }`}
                onClick={() => setCurrentOption(index)}
              >
                {option.name}
              </li>
            ))}
          </div>
          </ul>
        </div>
        <div className="p-4 mt-10 md:w-7/12">
          <div className="p-4 border shadow-lg bg-cyan-50 rounded-2xl">
            <h2 className="mb-4 text-xl font-bold">
              {options[currentOption]?.name}
            </h2>
            <form>
              {renderFields()}
              <div className="justify-between md:flex">
                {currentOption > 0 && (
                  <button
                    className="px-4 py-2 mr-5 font-bold text-white bg-blue-500 rounded"
                    type="button"
                    onClick={handlePreviousClick}
                  >
                    {t('tenant_28')}
                  </button>
                )}
                {currentOption === options.length - 1 ? (
                  <>
                    <button
                      className="px-4 py-4 font-bold text-white bg-blue-500 rounded"
                      type="button"
                      onClick={async () => {
                        alert();

                        if (formData.mobile !== "") {
                          const ata = {
                            mobile: formData.mobile,
                          };

                          const { data } = await axios.post(
                            "/otp/sendOtp",
                            ata
                          );
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
                      }}
                    >
                      {t('tenant_55')}
                    </button>
                  </>
                ) : (
                  <button
                    className="px-4 py-2 font-bold text-white bg-blue-500 rounded"
                    type="button"
                    onClick={handleNextClick}
                  >
                    {t('tenant_25')}
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="mt-[25rem] md:mt-[4rem]">
        <Footer />
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
                // type="submit"
                className="px-4 py-2 text-sm text-white bg-blue-500 rounded-md hover:bg-blue-600"
                onClick={async () => {
                  alert();
                  if (otp !== "" && otp.length == 6) {
                    const ata = {
                      mobile: formData.mobile,
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

export default page;
