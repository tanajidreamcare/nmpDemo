"use client";
import i18Instance from "@/customHooks/i18Instance";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { ImGithub } from "react-icons/im";
import { useTranslation} from "react-i18next";
i18Instance();

function Page() {

  const { t } = useTranslation();

  return (
    <div className="w-full">
      <Navbar />

      <div className="w-full h-full text-white ">

          <div className="relative w-full h-full ">
            <h1 className="absolute w-full  font-serif text-3xl text-center text-gray-700 underline top-12 md:top-20 md:text-7xl" title={t('organizational_structure')}>{t('organizational_structure')}</h1>
            <img
              className="object-cover w-full h-full pt-14 md:pt-14"
              src={"/os.png"}
              alt="organisational structure"
            />
          </div>
      </div>
      <div className="mt-96 md:mt-0">
      <Footer  />
      </div>
    </div>
  );
}

export default Page;
