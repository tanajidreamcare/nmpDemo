"use client";
import Navbar from "@/components/Navbar";
import i18Instance from "@/customHooks/i18Instance";
import React from "react";
import Image from "next/image";

i18Instance();
function page() {
  return (
    <div>
      <div className="-mt-10">
        <Navbar />
      </div>
      <div className="w-full pt-5 my-10 bg-[#D2D2D2]">
        <h1 className="text-5xl mt-20 font-thin text-gray-800 text-center">
          Citizen Alert Wall
        </h1>

        <div className="flex justify-center my-16 w-full px-10">
          <div className="md:w-6/12 w-full flex justify-between">
            <div className="w-3/12">
              <Image
                src={"/admin/logo-navi-mumbai.png"}
                width={100}
                height={100}
                className="w-16 h-16"
              />
            </div>
            <div className="bg-white w-9/12 py-2 flex justify-center border-[1px] ">
              <div className="w-full">
                <h1 className="text-2xl border-[1px] p-2 border-gray-500 font-thin bg-slate-800 text-white text-center">
                  heading for image
                </h1>
                <Image
                  src={"/commissioner.png"}
                  width={100}
                  height={100}
                  className="w-full p-4 border-[1px] border-gray-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
