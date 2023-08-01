import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import { AiOutlineApple } from "react-icons/ai";
import { AiOutlineAndroid } from "react-icons/ai";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation"


function Footer() {
  const router = useRouter();
  const { t } = useTranslation();

 
  return (
    <div className="">
      
      <div className="bg-[#15233E] w-full p-6 text-white hidden sm:block">
        <div className="w-full">
          <div className="justify-center md:flex text-[20px]">
            <a href="tel:112">
              <div className="cursor-pointer me-4 hover:text-[#E7581A]" title={t('emergency')}>{t('emergency')}: 112</div>
            </a>
            <a href="tel:7738393839">
              <div className="cursor-pointer me-4 hover:text-[#E7581A]" title={t('traffic_helpline')}>
                {t('traffic_helpline')} : 7738393839
              </div>
            </a>
            <a href="tel:1090">
              <div className="cursor-pointer me-4 hover:text-[#E7581A]" title={t('senior_citizen_helpline')}>
                {t('senior_citizen_helpline')} : 1090
              </div>
            </a>
            <a href="tel:1093">
              <div className="cursor-pointer me-4 hover:text-[#E7581A]" title={t('costal_helpline')}>{t('costal_helpline')} : 1093</div>
            </a>
            <a href="tel:103">
              <div className="cursor-pointer hover:text-[#E7581A]" title={t('women_helpline')}>{t('women_helpline')} : 103</div>
            </a>
          </div>
        </div>
        <div className="justify-start md:flex md:justify-around md:ms-16">
          <div>
            <div title={t('navi_mumbai_police')} className="mt-6 mb-4 underline md:text-[20px] underline-offset-8 sm:font-semibold ">
              {t('navi_mumbai_police')}
            </div>
            <div className="justify-start md:flex md:justify-end text-[18px]">
              <div>
                <div onClick={() => (router.push('/press-releases'))} className="me-[48px] cursor-pointer hover:text-[#E7581A]" title={t('press_release')}>{t('press_release')}</div>
                <div onClick={() => (router.push('/faqs'))} className="me-[48px] cursor-pointer hover:text-[#E7581A]" title={t('faqs')}>{t('faqs')}</div>
                <div onClick={() => (router.push('/martyrs'))} className="me-[48px] cursor-pointer hover:text-[#E7581A]" title={t('martyrs')}>{t('martyrs')}</div>
                <div className="me-[48px] cursor-pointer hover:text-[#E7581A]" title={t('site_map')}>{t('site_map')}</div>
              </div>
              <div>
                <div title={t('senior_police_officers')} onClick={() => (router.push('/senior-police-officers'))} className="me-[48px] cursor-pointer hover:text-[#E7581A]">
                  {t('senior_police_officers')}
                </div>
                <div onClick={() => (router.push('/history'))} className="me-[48px] cursor-pointer hover:text-[#E7581A]" title={t('history')}>{t('history')}</div>
                <div title={t('police_recruitments')} onClick={() => (router.push('/police-recruitment'))} className="me-[48px] cursor-pointer hover:text-[#E7581A]">
                  {t('police_recruitments')}
                </div>
                {/* <div className="me-[48px] cursor-pointer hover:text-[#E7581A]">{t('disclaimer')}</div> */}
              </div>
            </div>
          </div>
          <div>
            <div title={t('info_services')} className="mt-6 mb-4 underline  md:text-[20px] underline-offset-8 sm:font-semibold">
              {t('info_services')}
            </div>
            <div className="md:flex justify-end text-[18px] ">
              <div>
                <div onClick={() => (router.push('/safety-tips'))} className="me-[48px] cursor-pointer hover:text-[#E7581A]" title={t('safety_tips')}>{t('safety_tips')}</div>
                <div onClick={() => (router.push("https://citizen.mahapolice.gov.in/Citizen/MH/index.aspx"))} className="me-[48px] cursor-pointer hover:text-[#E7581A]" title={t('citizen_wall')}>{t('citizen_wall')}</div>
                <div onClick={() => (router.push('/initiatives'))} className="me-[48px] cursor-pointer hover:text-[#E7581A]" title={t('initiative')}>{t('initiative')}</div>
                {/* <div className="me-[48px] cursor-pointer hover:text-[#E7581A]">{t('licensing_unit')}</div> */}
              </div>
              <div>
                <div onClick={() => (router.push('https://citizen.mahapolice.gov.in/Citizen/MH/SearchView.aspx'))} className="me-[48px] cursor-pointer hover:text-[#E7581A]" title={t('missing_person')}>{t('missing_person')}</div>
                <div title={t('unidentified_dead_bodies')} onClick={() => (router.push('https://citizen.mahapolice.gov.in/Citizen/MH/SearchDeadBodyList.aspx'))} className="me-[48px] cursor-pointer hover:text-[#E7581A]">
                  {t('unidentified_dead_bodies')}
                </div>
                <div onClick={() => (router.push('/useful-websites'))} className="me-[48px] cursor-pointer hover:text-[#E7581A]" title={t('useful_website')}>{t('useful_website')}</div>
                <div onClick={() => (router.push("/emergency-contacts"))} className="me-[48px] cursor-pointer hover:text-[#E7581A]" title={t('emergency_contacts')}>{t('emergency_contacts')}</div>
              </div>
            </div>
          </div>
          <div>
            <div title={t('quick_links')} className="mt-6 mb-4  md:text-[20px] underline underline-offset-8 sm:text-[12px] sm:font-semibold">
              {t('quick_links')}
            </div>
            <div className="flex justify-start md:justify-end text-[18px]">
              <div>
                {/* <div className="me-[48px] cursor-pointer hover:text-[#E7581A]">{t('tenders')}</div> */}
                <div onClick={() => (router.push('https://citizen.mahapolice.gov.in/Citizen/MH/index.aspx'))} className="me-[48px] cursor-pointer hover:text-[#E7581A]" title={t('online_complaint')}>{t('online_complaint')}</div>
                <div onClick={() => (router.push("/lost-and-found"))} className="me-[48px] cursor-pointer hover:text-[#E7581A]" title={t('lost_found')}>{t('lost_found')}</div>
                <div title={t('right_to_info')} onClick={() => (router.push('/right-to-information'))} className="me-[48px] cursor-pointer hover:text-[#E7581A]">
                  {t('right_to_info')}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-16 mt-6 md:flex md:justify-between">
          <div className="flex ">
            <div className="me-2 text-[16px]" title={t('follow_us')}>{t('follow_us')}</div>
            <div className="rounded-full p-1 mx-1 border-[1px] border-white hover:text-[#E7581A]">
              <a href="https://www.instagram.com/navimumbaipolice/?hl=en" target="_blank"><AiOutlineInstagram /></a>
            </div>
            <div className="rounded-full p-1 mx-1 border-[1px] border-white hover:text-[#E7581A]">
              <a href="https://www.facebook.com/navimumbaipolice.gov.in/" target="_blank"><AiOutlineFacebook /></a>
            </div>
            <div className="rounded-full p-1 mx-1 border-[1px] border-white hover:text-[#E7581A]">
              <a href="https://twitter.com/Navimumpolice?s=20" target="_blank"><FiTwitter /></a>
            </div>
          </div>
        </div>
        <div className="mx-16 my-2">
          <hr />
        </div>
        <div className="w-full text-[16px] text-center sm-text-[10px]">
          <div>
            {t('copyright')} © 2023 {t('navi_mumbai_police')} | {t('developed_by')} : {t('dreamcare_developers')}
          </div>
        </div>
      </div>

      {/* ----------Mobile Screen-------------- */}
      <div className="bg-[#15233E] w-full p-6 text-white md:hidden">

        <div className="flex justify-start">
          <div className="justify-start md:flex text-[12px]">
            <a href="tel:112">
              <div className="cursor-pointer">{t('emergency')}: 112</div>
            </a>
            <a href="tel:7738393839">
              <div title={t('traffic_helpline')} className="cursor-pointer">
                {t('traffic_helpline')} : 7738393839
              </div>
            </a>
            <a href="tel:1090">
              <div title={t('senior_citizen_helpline')} className="cursor-pointer">
                {t('senior_citizen_helpline')} : 1090
              </div>
            </a>
            <a href="tel:1093">
              <div className="cursor-pointer" title={t('costal_helpline')}>{t('costal_helpline')} : 1093</div>
            </a>
            <a href="tel:103">
              <div className="cursor-pointer" title={t('women_helpline')}>{t('women_helpline')} : 103</div>
            </a>

          </div>
          <div className="ms-5">
            <div title={t('quick_links')} className=" mb-4 underline underline-offset-8 text-[12px] sm:font-semibold">
              {t('quick_links')}
            </div>
            <div className="flex justify-start md:justify-end text-[12px]">
              <div>
                {/* <div className="cursor-pointer">{t('tenders')}</div> */}
                <div onClick={() => (router.push('https://citizen.mahapolice.gov.in/Citizen/MH/index.aspx'))} className="cursor-pointer" title={t('online_complaint')}>{t('online_complaint')}</div>
                <div onClick={() => (router.push("/lost-and-found"))} className="cursor-pointer" title={t('lost_found')}>{t('lost_found')}</div>
                <div title={t('right_to_info')} onClick={() => (router.push('/right-to-information'))} className="cursor-pointer">
                  {t('right_to_info')}
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="flex items-center justify-center">
          <div>
            <div title={t('navi_mumbai_police')} className="mt-6 mb-4 underline underline-offset-8 sm:font-semibold text-[12px]">
              {t('navi_mumbai_police')}
            </div>
            <div className="justify-start text-[12px]">
              <div>
                <div onClick={() => (router.push('/press-releases'))} className="cursor-pointer" title={t('press_release')}>{t('press_release')}</div>
                <div onClick={() => (router.push('/faqs'))} className="me-[48px] cursor-pointer" title={t('faqs')}>{t('faqs')}</div>
                <div onClick={() => (router.push('/martyrs'))} className="me-[48px] cursor-pointer" title={t('martyrs')}>{t('martyrs')}</div>
                <div className="me-[48px] cursor-pointer" title={t('site_map')}>{t('site_map')}</div>
              </div>
              <div>
                <div title={t('senior_police_officers')} onClick={() => (router.push('/senior-police-officers'))} className="me-[48px] cursor-pointer">
                  {t('senior_police_officers')}
                </div>
                <div onClick={() => (router.push('/history'))} className="me-[48px] cursor-pointer" title={t('history')}>{t('history')}</div>
                <div title={t('police_recruitments')} onClick={() => (router.push('/police-recruitment'))} className="me-[48px] cursor-pointer">
                  {t('police_recruitments')}
                </div>
                <div className="me-[48px] cursor-pointer" title={t('disclaimer')}>{t('disclaimer')}</div>
              </div>
            </div>
          </div>


          <div className="ms-7">
            <div title={t('info_services')} className="mt-6 mb-4 underline underline-offset-8 sm:font-semibold text-[12px]">
              {t('info_services')}
            </div>
            <div className="md:flex justify-end text-[12px] ">
              <div>
                <div onClick={() => (router.push('/safety-tips'))} className="me-[48px] cursor-pointer" title={t('safety_tips')}>{t('safety_tips')}</div>
                <div onClick={() => (router.push("https://citizen.mahapolice.gov.in/Citizen/MH/index.aspx"))} className="me-[48px] cursor-pointer" title={t('citizen_wall')}>{t('citizen_wall')}</div>
                <div onClick={() => (router.push('/initiatives'))} className="me-[48px] cursor-pointer" title={t('initiative')}>{t('initiative')}</div>
                {/* <div className="me-[48px] cursor-pointer">{t('licensing_unit')}</div> */}
              </div>
              <div>
                <div onClick={() => (router.push('https://citizen.mahapolice.gov.in/Citizen/MH/SearchView.aspx'))} className="me-[48px] cursor-pointer" title={t('missing_person')}>{t('missing_person')}</div>
                <div title={t('unidentified_dead_bodies')} onClick={() => (router.push('https://citizen.mahapolice.gov.in/Citizen/MH/SearchDeadBodyList.aspx'))} className="me-[48px] cursor-pointer">
                  {t('unidentified_dead_bodies')}
                </div>
                <div onClick={() => (router.push('/useful-websites'))} className="me-[48px] cursor-pointer" title={t('useful_websites')}>{t('useful_website')}</div>
                <div onClick={() => (router.push('/emergency-contacts'))} className="me-[48px] cursor-pointer" title={t('emergency_contacts')}>{t('emergency_contacts')}</div>
              </div>
            </div>
          </div>

        </div>
        <div className="mx-16 mt-6 md:flex md:justify-between">
          <div className="flex ">
            <div className="me-2" title={t('follow_us')}>{t('follow_us')}</div>
            <div className="rounded-full p-1 mx-1 border-[1px] border-white">
              <a href="https://www.instagram.com/navimumbaipolice/?hl=en" target="_blank"><AiOutlineInstagram /></a>
            </div>
            <div className="rounded-full p-1 mx-1 border-[1px] border-white">
              <a href="https://www.facebook.com/navimumbaipolice.gov.in/" target="_blank"><AiOutlineFacebook /></a>
            </div>
            <div className="rounded-full p-1 mx-1 border-[1px] border-white">
              <a href="https://twitter.com/Navimumpolice?s=20" target="_blank"><FiTwitter /></a>
            </div>
          </div>
        </div>
        <div className="mx-16 my-2">
          <hr />
        </div>
        <div className="w-full text-sm text-center sm-text-[10px]">
          <div>
            {t('copyright')} © 2023 {t('navi_mumbai_police')} | {t('developed_by')} : {t('dreamcare_developers')}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
