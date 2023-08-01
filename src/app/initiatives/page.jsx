"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";
import i18Instance from "@/customHooks/i18Instance";
i18Instance();

const CrimeBranch = () => {
  const { t } = useTranslation();
  const initiate = [
    {
      img: "/initiative1.png",
      title: t('senior_citi'),
      content: (
        <div>
          <h1>
            {t('senior_citi_1')}
          </h1>
          <h1>
          {t('senior_citi_2')}
          </h1><h1>
          {t('senior_citi_3')}
          </h1><h1>
          {t('senior_citi_4')}
          </h1><h1>
          {t('senior_citi_5')}
          </h1><h1>
          {t('senior_citi_6')}
          </h1><h1>
          {t('senior_citi_7')}
          </h1>
        </div>
      ),
    },
    {
      img: "/initiative2.png",
      title: " Sensitive Navi Mumbai Police During Covid-19 Panademic ",
      content: (
        <div>
          <h1>
            The book "SENSITIVE NAVI MUMBAI POLICE DURING COVID-19 PANDEMIC"
            provides information on the performance of Navi Mumbai Police during
            the Covid-19 crisis. 2020-08-04
          </h1>
        </div>
      ),
    },
    {
      img: "/initiative_sos.jpg",
      title: "Dial 112",
      content: (
        <div>
          <h1>
            "An initiative of Govt. of India under the Nirbhaya funds scheme for
            ensuring safety of women and children"
          </h1>
          <h1>
            Emergency Response Support System (ERSS) is a Pan-India single
            number (112) based emergency response system for citizens in
            emergencies. Each State/ UT is required to designate a dedicated
            Emergency Response Centres (ERC) to handle emergency requests. If
            you require emergency assistance from Police, Fire & Rescue, Health
            and other services, you may :
          </h1>
          <h1>1.Dial 112 from your phone</h1>
          <h1>
            2.Press power button on your smart phone 3 times quickly to activate
            Panic call;
          </h1>
          <h1>
            3.In case of feature phone, long press ‘5’ or ‘9’ key to activate
            Panic call;
          </h1>
          <h1>4.Log on to State ERSS website and place your SOS request;</h1>
          <h1>5.Email SOS alert to State ERC; and</h1>
          <h1>
            Use 112 India Mobile App (available in Google Playstore and Apple
            store) to activate a panic call to ERC
          </h1>
        </div>
      ),
    },
    {
      img: "/initiative_cctv.jpg",
      title: "CCTV SURVEILLANCE PROJECT",
      content: (
        <div>
          <h1>
            In Navi Mumbai Police jurisdiction M/s CIDCO LTD. and Navi Mumbai
            municipal Corporation has provided Navi Mumbai Police a holistic and
            integrated video surveillance system with the objective of enhancing
            safety and security in the city. This system is integrated with many
            surveillance systems which help us to detect crimes, Challans to
            Traffic Offenders and many more things.
          </h1>
          <h1>
            In upcoming days two more big CCTV City Surveillance Project will be
            provided to Navi Mumbai Police by Panvel Muncipal Corporation and
            Navi Mumbai municipal Corporation.
          </h1>
        </div>
      ),
    },
    {
      img: "/initiative_echallan.jpg",
      title: "E-Challan ",
      content: (
        <div>
          <h1>
            Navi Mumbai Traffic Dept. is one of the first whom charged E-challan
            to a Traffic Offender in all over Maharashtra in the year 2015. The
            Home Department, Govt of Maharashtra has empowered Navi Mumbai
            Traffic Police with e-Challan system to fully automate the
            enforcement of traffic fines throughout Navi Mumbai City. E-Challan
            system is integrated with CCTV and Speed Cameras of Navi Mumbai City
            Surveillance Project. Currently the speed cameras are installed at
            Sion-Panvel Highway.
          </h1>
        </div>
      ),
    },
    {
      img: "/initiative_social.jpg",
      title: "24X7 Citizen Assistance through Social Media",
      content: (
        <div>
          <h1>
            With the advent of always connected smartphones available to citizen
            and widespread social media, we cannot shy away from our presence on
            social media. Navi Mumbai police has active presence on Social Media
            and assisting citizen on various police related issues. 
            <a
              href="https://twitter.com/Navimumpolice?s=20"
              target="_blank"
              className="text-blue-500"
            >
               @Navimumpolice
            </a>{" "}
            twitter handle has more than 189K followers and
            <a
              href="https://www.facebook.com/navimumbaipolice.gov.in/"
              target="_blank"
              className="text-blue-500"
            >
              <span> </span>Navi Mumbai Police Facebook Page
            </a>{" "}
            has more than 11K followers and
            <a
              href="https://www.instagram.com/navimumbaipolice/?hl=en"
              target="_blank"
              className="text-blue-500"
            >
              <span> </span>navimumbaipolice
            </a>{" "}
            Instagram account has more than 5.5K followers. Dedicated social
            media team at Navi Mumbai Police Head Office is available 24X7 to
            answer the queries of netizens and provide all possible help.
          </h1>
        </div>
      ),
    },
    {
      img: "/mpolice.jpg",
      title: "M-Police App",
      content: (
        <div>
          <h1>
            (Maharashtra Police Information and Analysis System) is one of the
            operational projects of Navi Mumbai Police. The system will automate
            all departmental processes and provide a transparent picture of
            police department processes to all levels of officers.
          </h1>
        </div>
      ),
    },
    {
      img: "/initiative_nirbhaya.jpg",
      title: "Nirbhaya Squad",
      content: (
        <div>
          <h1>
            Every police station in Navi Mumbai has a dedicated Nirbhaya squad.
            This women's squad comprising a lady Sub-Inspector, a Woman
            Constable, a Male Constable and a Driver Constable patrol the
            streets regularly to prevent cases of harassment of girls, women and
            children.
          </h1>
        </div>
      ),
    },
    {
      img: "/traffic_help.jpg",
      title: "Traffic Help Line",
      content: (
        <div>
          <h1>
            The Navi Mumbai Traffic Police has set up a traffic helpline number
            7738393839 24X7 for those citizens who have any traffic related
            problems and want to ask some questions about the traffic situation
            and also have some questions related to currency etc.
          </h1>
        </div>
      ),
    },
    {
      img: "/yatharth.jpg",
      title: t('yatartha'),
      content: (
        <div>
          <h1>
            {t('yatartha_1')}
          </h1>
          <h1>
          {t('yatartha_2')}
          </h1>
        </div>
      ),
    },
    {
      img: "/ibike.jpg",
      title: t('i-bike'),
      content: (
        <div>
          <h1>
          {t('i-bike_1')}
          </h1>
          <h1>
          {t('i-bike_2')}
          </h1>
          <h1>
          {t('i-bike_3')}
          </h1>
        </div>
      ),
    },
    {
      img: "/savli.jpg",
      title: t('savali'),
      content: (
        <div>
          <h1>
          {t('savali_1')}
          </h1>
          <h1>
          {t('savali_2')}
          </h1>
          <h1>
          {t('savali_3')}
          </h1>
          <h1>
          {t('savali_4')}
          </h1>
          <h1>
          {t('savali_5')}
          </h1>
          <h1>
          {t('savali_6')}
          </h1>
          <h1>
          {t('savali_7')}
          </h1>
          <h1>
          {t('savali_8')}
          </h1><h1>
          {t('savali_9')}
          </h1>
          <h1>
          {t('savali_10')}
          </h1>
          <h1>
          {t('savali_11')}
          </h1>
          <h1>
          {t('savali_12')}
          </h1><h1>
          {t('savali_13')}
          </h1>
          <h1>
          {t('savali_14')}
          </h1>
          <h1>
          {t('savali_15')}
          </h1>
          <h1>
          {t('savali_16')}
          </h1>
          <h1>
          {t('savali_17')}
          </h1>
          <h1>
          {t('savali_18')}
          </h1>
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="">
        <Navbar />
        <div className="bg-[#e9e4ce49] py-10">
          <div className="text-5xl font-bold leading-9 text-center text-[#15233E]">
            <h1
              className="underline pt-14 font-headingFont"
              title={t("initiative")}
            >
              {t("initiative")}
            </h1>
          </div>
          {initiate.map((points) => (
            <div className="mt-5 ">
              <div className="justify-center p-3 mx-3 shadow-lg md:mx-20 md:flex rounded-2xl bg-lime-200">
                <div className="p-2 md:w-4/12">
                  <img src={points.img} className="" />
                </div>
                <div className="pl-2 md:w-8/12 ">
                  <h1 className="text-lg font-bold underline uppercase font-initiative">
                    {points.title}
                  </h1>

                  <h1 className="text-justify">{points.content}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className=" md:mt-[0rem]">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default CrimeBranch;
