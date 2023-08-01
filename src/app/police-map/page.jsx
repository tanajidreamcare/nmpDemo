"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import i18Instance from "@/customHooks/i18Instance";

i18Instance();

function Page() {
  const { t } = useTranslation();

  const citiMap = [
    { map: "/map1.jpg", title: "NAVI MUMBAI POLICE COMMISSIONERATE MAP" },
    { map: "/map2.jpg", title: "NAVI MUMBAI ZONE 1 MAP" },
    { map: "/map3.jpg", title: "NAVI MUMBAI ZONE 2 MAP" },
  ];

  // State to manage the currently opened image
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to open an image
  const openImage = (imageSrc) => {
    setSelectedImage(imageSrc);
    document.body.classList.add("modal-open"); // Add class to disable scrolling on the background content
  };

  // Function to close the opened image
  const closeImage = () => {
    setSelectedImage(null);
    document.body.classList.remove("modal-open"); // Remove class to enable scrolling on the background content
  };

  return (
    <div>
      <Navbar />
      <div className="h-auto bg-white">
        <div>
          <div className="text-5xl font-bold leading-9 text-center text-[#15233E] pt-14">
            <h1 className="underline pt-14 font-headingFont" title={t("navi_mumbai_police_map")}>
              {t("navi_mumbai_police_map")}
            </h1>
          </div>
          <div className="px-4 pb-10 mt-10 md:flex md:justify-evenly">
            {citiMap.map((mumbai) => (
              <div className="w-96" key={mumbai.title}>
                <div>
                  <img
                    src={mumbai.map}
                    alt={mumbai.title}
                    className="transition-transform duration-500 bg-white cursor-pointer rounded-2xl hover:scale-105"
                    onClick={() => openImage(mumbai.map)}
                  />
                </div>
                <div className="mt-5 text-xl font-bold leading-7 text-center text-[#15233E]">
                  <h1 title={mumbai.title}>{mumbai.title}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* The modal to show the full image */}
      {selectedImage && (
       <div className="relative w-full h-full bg-black -mt-96">
        <div className="bg-black -mt-96 bg-opacity-70 h-[500%] w-full fixed top-0 left-0"></div>
         <div className="flex items-center justify-center w-full h-full ">
          <div className="max-w-full mx-4 bg-black rounded-lg md:mx-0 ">
            <button
              onClick={closeImage}
              className="absolute -top-80 right-32  text-[#15233E] text-6xl font-bold cursor-pointer z-10"
            >
              &times;
            </button>
            <div className="absolute left-[15%] -top-[10%] z-10  w-[70%] flex items-center justify-center h-screen">
              <img src={selectedImage} alt="Full Size" className="h-[200%] w-[200%]" />
              
            </div>
          </div>
        </div>
       </div>
      )}

      <div className=" md:mt-[0rem]">
        <Footer />
      </div>
    </div>
  );
}

export default Page;
