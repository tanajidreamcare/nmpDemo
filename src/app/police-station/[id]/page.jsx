"use client"
import React, {  useEffect, useState } from 'react';
import Image from "next/image";
import {   useRouter } from 'next/navigation'
import { CiLocationOn } from "react-icons/ci";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import axios from "@/customHooks/axiosInstance";
import { useTranslation} from "react-i18next";
import i18Instance from "@/customHooks/i18Instance";

i18Instance()
function Page  (params)  {

  const { t } = useTranslation();
  
  const router = useRouter();
  const id = params.params.id
  console.log(params.params.id)
  const [Data, setData] = useState(null)
  useEffect(() => {
    axios.get(`/admin/police-stations/edit/${id}`).then((response) => {
      const data = response.data;
      setData(data);
      console.log(data);
    });
  }, []);

  if (Data === null) {
    // Show a loading state while data is being fetched
    return <div>Loading...</div>;
  }
  
  return (
    <div className="pt-">
      <Navbar/>

    <div className="bg-[#e9e4ce49] ">
      <div className="font-bold  text-5xl leading-9 text-center text-[#15233E] pt-10">
        <h1 className="pt-14" title={Data.stationEng}>{Data.stationEng}</h1>
      </div>
      <div className="flex justify-center w-full mt-10 ">
        <img
          src={`http://3.111.197.119/uploads/${Data.filename}`}
          height={100}
          width={600}
          className=" w-[100%] lg:w-[70%] h-80 p-2 border-1 rounded-2xl shadow-2xl bg-[#FFFFFF]"
        ></img>
      </div>
      <div className="px-2 mt-10 lg:flex lg:px-56 rounded-xl  ">
        <div className=" lg:w-1/3  justify-center text-center  align-middle bg-[#15233E] text-white shadow-2xl ">
          <div className="flex justify-center ">
            <img
              src={`http://3.111.197.119/uploads/${Data.filename2}`}
              height={300}
              width={300}
              className="align-middle p-1 rounded-2xl md:mt-[30%] mt-[5%]"
            ></img>
          </div>
          <h1 className="text-lg font-semibold" title={Data.officerNameEng}>{Data.officerNameEng}</h1>
          <h1 className="text-base font-medium" title={Data.designationEng}>{Data.designationEng}</h1>
          <a title= {Data.OfficerNo} href="tel:+91 9867852777" className="text-base hover:text-blue-600">
            {Data.OfficerNo}
          </a>
        </div>
        <div className="lg:w-2/3 bg-white p-4 ">
          <div className="grid grid-cols-12 border">
            <div className="col-span-12 row-start-1 p-2 border">
              <h1>Address :</h1>
              <h1 title={Data.addressEng}>
                {Data.addressEng}
              </h1>
            </div>
            <div className="col-span-6 row-start-2 p-2 border">
              <h1> Telephone No. :</h1>
              <h1>
                <a
                  href="tel:+91 9867852777"
                  className="text-base hover:text-blue-600"
                  title={Data.stationNo}
                >
                  {Data.stationNo}
                </a>
              </h1>
            </div>
            <div className="col-span-6 row-start-2 p-2 break-words whitespace-normal border">
              <h1>Email ID:</h1>
              <h1 title={Data.email}>{Data.email}</h1>
            </div>
            <div className="col-span-6 row-start-3 p-2 border">
              <h1>Division :</h1>
              <h1 title={Data.divisionEng}>{Data.divisionEng}</h1>
            </div>
            <div className="col-span-6 row-start-3 p-2 border">
              <h1>Telephone No. of Division :</h1>
              <h1></h1>
              <a
                href="tel:+91 02227452532"
                className="text-base hover:text-blue-600"
                title={Data.divisionNo}
              >
                {Data.divisionNo}
              </a>
            </div>
            <div className="col-span-12 row-start-4 p-2 border">
              <h1>Email ID of Division :</h1>
              <h1 title={Data.divisionEmail}>{Data.divisionEmail}</h1>
            </div>
            <div className="col-span-6 row-start-5 p-2 border ">

              
              <h1>Zone :</h1>
              <h1 title={Data.zoneEng}>{Data.zoneEng}</h1>
            </div>
            {/* <div className="col-span-6 row-start-5 p-2 border">
              <h1>Telephone No. of Zone :</h1>
              <h1>
                <a
                  href="tel:+91 02227490476"
                  className="text-base hover:text-blue-600"
                >
                  {Data.zoneEmail}
                </a>
              </h1>
            </div> */}
            <div className="col-span-12 row-start-6 p-2 border ">
              <h1>Email ID of Zone :</h1>
              <h1 title={Data.zoneEmail}>{Data.zoneEmail}</h1>
            </div>
            <div className="col-span-6 row-start-7 p-2 border">
              <h1>Nearest Railway Station :</h1>
              <h1 title={Data.nearRailStat}>{Data.nearRailStat}</h1>
            </div>
            <div className="col-span-6 p-2 border row-start-8">
              <h1>Nearest Traffic Chowki :</h1>
              <h1 title={Data.nearPoliChowki}>{Data.nearPoliChowki}</h1>
            </div>
            <div className="col-span-12 p-2 border row-start-9">
              <h1>Hospitals in the Jurisdiction of Police Station : </h1>
              <h1 title={Data.areaHospital}>{Data.areaHospital}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="p-3 md:p-8 md:m-10 lg:flex justify-evenly ">
        <div className=" bg-[#FFFFFF] p-8 rounded-xl">
          <h1 className="flex justify-center "><CiLocationOn size={30} /></h1>
          <h1 className="my-5 text-xl font-semibold text-center ">Jurisdiction Map</h1>
          <img
            src={`http://3.111.197.119/uploads/${Data.filename3}`}
            height={700}
            width={450}
            className="p-1 align-middle rounded-2xl "
          ></img>
        </div>
        <div className="bg-[#FFFFFF] p-8 rounded-xl mt-5 md:mt-0">
          <h1 className="flex justify-center"><CiLocationOn size={30} /></h1>
          <h1 className="my-5 text-xl font-semibold text-center">Locate Us</h1>
          <div>
            <iframe
              src={Data.mapLink}
              // width="440"
              // height="330"
             className="rounded-2xl w-[300px] h-[299px] md:w-[440px] md:h-[330px]"

              
            ></iframe>
          </div>
        </div>
      </div>
    </div>

    <div className=" md:mt-[2rem]">
    <Footer />
      </div>
    
    </div>
  );
};

export default Page;