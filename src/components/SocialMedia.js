"use client";
// import Try from "./twit";
import { ImFacebook2 } from "react-icons/im";
import { FaTwitterSquare } from "react-icons/fa";
import { GrUpdate } from "react-icons/gr";
import { useTranslation} from "react-i18next";

export default function SocialMedia() {

  const { t } = useTranslation();

  const startScroll = () => {
    const marquee = document.getElementById("scroll_news");
    marquee.start();
  };

  const stopScroll = () => {
    const marquee = document.getElementById("scroll_news");
    marquee.stop();
  };
  return (
    <>
      {/* <Try /> */}
      <div className="py-5 bg-zinc-500 md:bg-zinc-100">
        <div title={t('social_media')} className="mx-20 mt-5 text-center text-[24px] md:text-4xl font-extrabold md:justify-center md:flex text-white md:text-[#15233E]">
          {t('social_media')}
        </div>
        <div className="items-center justify-center md:flex">
          <div className="justify-end mx-3 mt-10 md:mt-0 md:flex md:w-4/12">
            <div className="p-5 bg-white border-2 rounded-lg">
              <div className="flex justify-center my-3">
                <ImFacebook2 size={35} color="red" style={{ color: "blue" }} />
              </div>
              <hr className="border-2 border-solid" />
              <div className="my-3 font-bold text-center">
                @navimumbaipolice.gov.in
              </div>
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fnavimumbaipolice.gov.in%2F%3Fref%3Dembed_page&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
                width="300"
                height="300"
                frameborder="0"
                allowfullscreen="true"
                className="rounded-xl"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </div>
          </div>

          <div className="justify-center p-3 my-10 md:flex md:w-4/12">
            <div className="p-5 bg-white border-2 rounded-lg">
              <div className="flex justify-center my-3 text-sky-500">
                <FaTwitterSquare size={40} />
              </div>
              <hr className="border-2 border-solid" />
              <div className="my-3 font-bold text-center">
                @navimumbaipolice.gov.in
              </div>
              <div className="twitter-embed">
                <a
                  className="twitter-timeline"
                  href="https://twitter.com/vitekar_tanaji"
                  data-tweet-limit="5"
                  data-chrome="noheader nofooter noborders"
                  data-width="300"
                  data-height="300"
                >
                  Tweets by @NaviMumbaiPolice
                </a>
              </div>
            </div>
          </div>

          <div className="justify-start p-3 my-10 md:flex md:w-4/12">
            <div className="p-5 bg-white border-2 rounded-lg">
              <div className="flex justify-center my-3 text-sky-500">
                <GrUpdate size={35} />
              </div>
              <hr className="border-2 border-solid" />
              <div className="my-3 font-bold text-center" title={t('latest_update')}>{t('latest_update')}</div>
              <div>
                <marquee
                  direction="up"
                  height="300px"
                  width="300px"
                  scrollamount="3"
                  id="scroll_news"
                >
                  <div onMouseOver={stopScroll} onMouseOut={startScroll}>
                    <div className="mt-1 card">
                      <div className="px-5 py-5 border-gray-800 box-shadow border-x-4 ">
                        <a href="#" target="_blank" className="web-link2">
                          Navi Mumbai Police Constable Recruitment 2021 - Final Selection and Waiting List for Interview
                        </a>
                      </div>

                    </div>
                    <div className="my-5 card">
                      <div className="px-5 py-5 border-gray-800 box-shadow border-x-4 ">
                        <a href="#" target="_blank" className="web-link2">
                          Navi Mumbai Police Driver Constable Recruitment 2022 - Final Selection and Waiting List for Interview
                        </a>
                      </div>
                    </div>
                    <div className="my-5 card">
                      <div className="px-5 py-5 border-gray-800 box-shadow border-x-4 ">
                        <a href="#" target="_blank" className="web-link2">
                          Navi Mumbai Police Driver Constable Recruitment 2022 - Final Selection and Waiting List for Interview
                        </a>
                      </div>
                    </div>
                  </div>
                </marquee>
              </div>
            </div>
          </div>
        </div >
      </div >
    </>
  );
}
