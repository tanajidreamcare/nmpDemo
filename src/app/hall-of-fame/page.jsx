"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";
import i18Instance from "@/customHooks/i18Instance";
i18Instance();

const Page = () => {
  const { t } = useTranslation();

  const officers = [
    // Your officer data array
    {
      id: "01",
      officerImg: "/milind_sir.png",
      officerName: "17. Shri. Milind Bharambe",
      officerPost: "Additional Director General of Police",
      fromDate: "14/12/2022",
      toDate: "---",
    },
    {
      id: "02",
      officerImg: "/bipin_kumar_singh.JPG",
      officerName: "16. Shri. Bipin Kumar Singh",
      officerPost: "Additional Director General of Police",
      fromDate: "03/09/2020",
      toDate: "14/12/2022",
    },
    {
      id: "03",
      officerImg: "/sanjay_kumar.JPG",
      officerName: "15. Shri. Sanjay Kumar",
      officerPost: "Additional Director General of Police",
      fromDate: "01/08/2018",
      toDate: "03/09/2020",
    },
    {
      id: "04",
      officerImg: "/hemant_nagrale.jpg",
      officerName: "14. Shri. Hemant Nagarale",
      officerPost: "Additional Director General of Police",
      fromDate: "13/05/2016",
      toDate: "01/08/2018",
    },
    {
      id: "05",
      officerImg: "/prabhat_ranjan.JPG",
      officerName: "13. Shri. Prabhat Ranjan",
      officerPost: "Additional Director General of Police",
      fromDate: "12/06/2015",
      toDate: "13/05/2016",
    },
    {
      id: "06",
      officerImg: "/kl_prasad.JPG",
      officerName: "12. Shri. K.L. Prasad",
      officerPost: "Additional Director General of Police",
      fromDate: "28/02/2014",
      toDate: "10/06/2015",
    },
    {
      id: "07",
      officerImg: "/ak_sharma.JPG",
      officerName: "11. Shri. A.K. Sharma",
      officerPost: "Additional Director General of Police",
      fromDate: "16/06/2012",
      toDate: "28/02/2014",
    },
    {
      id: "08",
      officerImg: "/ahmed_javed.JPG",
      officerName: "10. Shri. Ahmed Javed",
      officerPost: "Additional Director General of Police",
      fromDate: "09/08/2010",
      toDate: "16/06/2012",
    },
    {
      id: "09",
      officerImg: "/gulabrao_pol.JPG",
      officerName: "09. Shri. Gulabrao Pol",
      officerPost: "Special Inspector General of Police",
      fromDate: "25/05/2009",
      toDate: "09/08/2010",
    },
    {
      id: "10",
      officerImg: "/ramrao_wagh.JPG",
      officerName: "08. Shri. Ramrao Wagh",
      officerPost: "Special Inspector General of Police",
      fromDate: "01/08/2006",
      toDate: "25/05/2009",
    },
    {
      id: "11",
      officerImg: "/vijay_kamble.JPG",
      officerName: "07. Shri. Vijay Kamble",
      officerPost: "Special Inspector General of Police",
      fromDate: "31/05/2003",
      toDate: "01/08/2006",
    },
    {
      id: "12",
      officerImg: "/ramrao_ghadge.JPG",
      officerName: "06. Shri. Ramrao Ghadge",
      officerPost: "Special Inspector General of Police",
      fromDate: "07/06/2002",
      toDate: "31/05/2003",
    },
    {
      id: "13",
      officerImg: "/av_parasnis.JPG",
      officerName: "05. Shri. A.V. Parasnis",
      officerPost: "Special Inspector General of Police",
      fromDate: "21/06/2000",
      toDate: "07/06/2002",
    },
    {
      id: "14",
      officerImg: "/an_roy.JPG",
      officerName: "04. Shri. A.N. Roy",
      officerPost: "Special Inspector General of Police",
      fromDate: "05/07/1999",
      toDate: "21/06/2000",
    },
    {
      id: "15",
      officerImg: "/sm_ambedkar.JPG",
      officerName: "03. Shri. S.M. Ambedkar",
      officerPost: "Inspector General of Police",
      fromDate: "01/07/1996",
      toDate: "05/07/1999",
    },
    {
      id: "16",
      officerImg: "/rd_gawande.JPG",
      officerName: "02. Shri. R.D. Gavande",
      officerPost: "Deputy Inspector General of Police",
      fromDate: "23/01/1996",
      toDate: "01/07/1996",
    },
    {
      id: "17",
      officerImg: "/ks_shinde.JPG",
      officerName: "01. Shri. K.S. Shinde",
      officerPost: "Deputy Inspector General of Police",
      fromDate: "02/11/1994",
      toDate: "23/01/1996",
    },
  ];

  return (
    <>
      <div>
        <Navbar />
        <div className="bg-[#e9e4ce49] py-10">
          <div className="text-5xl font-bold leading-9 text-center text-[#15233E]">
            <h1
              className="pt-14 font-headingFont underline"
              title={t("hall_of_fame")}
            >
              {t("hall_of_fame")}
            </h1>
          </div>
          <div className="flex flex-wrap justify-center  gap-10 p-4 pt-10  md:p-20">
            {officers.map((option) => (
              <div
                key={option.id}
                className="w-[350px] border border-black rounded-lg hover:shadow-2xl"
              >
                <div className="flex justify-center py-5">
                  <div>
                    <img
                      src={option.officerImg}
                      width={150}
                      height={150}
                      alt="Officer"
                    />
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
                <div className="py-5 text-center">
                  <h1>Period</h1>
                </div>
                <div className="flex justify-between px-8">
                  <h1 className="">From Date :</h1>
                  <h1 className="">{option.fromDate}</h1>
                </div>
                <div className="flex justify-between px-8 py-5">
                  <h1 className="">to Date :</h1>
                  <h1 className="">{option.toDate}</h1>
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
  );
};

export default Page;
