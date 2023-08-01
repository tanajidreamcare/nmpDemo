"use client"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation} from "react-i18next";
import i18Instance from "@/customHooks/i18Instance";
i18Instance()

const page = ()=> {

  const { t } = useTranslation();
  
  return(
      <>
      <div className="">
        <Navbar/>
          <div className="bg-[#e9e4ce49] py-10">
          <div className="text-5xl font-bold leading-9 text-center text-[#15233E]">
          <h1 className="pt-14 font-headingFont underline" title={t('women_assistance_cell')}>{t('women_assistance_cell')}</h1>
        </div>
        <div className="flex items-center justify-center mx-5 my-10 md:mx-44">
          <img src="./navi_head.png" className="w-[100%] h-[50%] rounded-2xl" />
          </div>
          <div className="text[#15233E] bg-lime-200 p-10 rounded-xl md:mx-20 lg:mx-44 mx-5 text-justify">
              <h1 title={t('wom_1')}>{t('wom_1')}</h1>
              {/* </br> */}
              <h1 className="text-blue-500"><a href="https://womenchild.maharashtra.gov.in/content/homecontent/important-acts.php" target="_blank">Acts For Women Empowerment</a></h1>
              <h1 className="text-lg">MOBILE PHONE APPS FOR WOMEN SAFETY</h1>
              <h1>CITIZEN COP APP - Install From Play Store:</h1>
              <h1 className="text-blue-500"><a href="https://play.google.com/store/apps/details?id=com.info.traffic&hl=en" target="_blank">Download</a></h1>
              {/* </br> */}
              <h1 className="text-xl font-bold text-center">Safety Tips</h1>
              <h1><b>Call 103</b> and  to raise your voice against violence.</h1>
              <h1><b>Say "No" :-</b></h1>
              <h1>No one has the right to tease you or sexually harass you. No one has the right to make you uncomfortable, whether you are at home or on the streets, whether in school, college or in a social gathering.</h1>
              <h1>No one has the right to beat you, torture you physically or mentally, or force use on you in any way. No matter what your relationship is with this person.</h1>
              <h1><b>REMEMBER :- </b></h1>
              <h1>Violence against you is not your fault. Violence is not anyone’s right. Don’t hesitate, don’t be afraid to call for help.</h1>
              <h1><b>Call 103 –</b> 24 hour helpline for crime against women in Navi Mumbai and the police will be there immediately to take action. It is up to you to make that call.</h1>
          </div>
          </div>
          <div className=" md:mt-[0rem]">
    <Footer />
      </div>
      </div>
      </>
  )
};

export default page;