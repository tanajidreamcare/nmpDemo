"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";
import i18Instance from "@/customHooks/i18Instance";
i18Instance();

const page = () => {
    const { t } = useTranslation();
    const officers = [
        {
          id: "01",
          officerImg: "/martyres1.png",
          officerName: "Babasaheb Dnyandeo Adhav",
          officerPost: "Police Sub-Inspector",
          Date: "18-Oct-2006",
          
        },
        {
          id: "02",
          officerImg: "/martyres2.png",
          officerName: "Bhiku Maruti Karade",
          officerPost: "Head-constable/1158",
          Date: "18-Oct-2006",
          
        },
        {
          id:"03",
          officerImg:" /martyres3.png",
          officerName:" Gopal Vasant Saindane",
          officerPost:"Police Naik",
          Date:"27-Feb-2007",
         
      },
    ]
  return (
    <>
    <div>
    <Navbar/>
    <div className="bg-[#e9e4ce49] py-10">
    <div className="text-5xl font-bold leading-9 text-center text-[#15233E]">
            <h1
              className="pt-14 font-headingFont underline"
              title={t("martyrs")}
            >
              {t("martyrs")}
            </h1>
          </div>
      <div className=" py-14 flex flex-wrap justify-center">
        {officers.map((option) => (
          <div key={option.id} className="md:flex mx-3 md:mx-14 mb-10">
            <div className="h-[400px] w-[350px] border border-black rounded-lg hover:shadow-2xl">
              <div className="flex justify-center py-5">
                <div>
                  {option.officerImg ? (
                    <img src={option.officerImg} width={200} height={200} alt={option.officerName} />
                  ) : (
                    <div className="w-20 h-20 bg-gray-300"></div> // Placeholder for empty image
                  )}
                </div>
              </div>
              <div className="text-lg font-semibold text-center">
                <h1>{option.officerName}</h1>
              </div>
              <div className="text-base font-medium text-center">
                <h1>{option.officerPost}</h1>
              </div>
              <br />
              <hr />
              
              <div className="flex justify-between px-8 py-8">
                <h1 className=""> Date :</h1>
                <h1 className="">{option.Date}</h1>
              </div>
              
            </div>
          </div>
        ))}
      </div>
      </div>
      <div className=" md:mt-[0rem]">
          <Footer />
        </div>
        </div>
    </>
  )
}

export default page
