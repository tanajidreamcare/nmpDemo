"use client";
import React, { useEffect, useState } from "react";
import axios from "@/customHooks/axiosInstance";


function page() {
    const [data,setData]=useState()
useEffect(async()=>{

  async function fetchData() {
    let docId;
    const queryString = window.location.search;
    console.log(queryString);
    let paramString = queryString.split('?')[1];
    let queryStrings = new URLSearchParams(paramString);
    
    for (let pair of queryStrings.entries()) {
       console.log("Key is: " + pair[0]);
       console.log("Value is: " + pair[1]);
      docId=pair[1]
    }
    // You can await here
    const ata= {docId:docId}
  const {data}=await axios.post('/LostandFound/getone',ata)
  console.log('data1',data);
  if(data){
    setData(data)
  }
    // ...
  }
  fetchData();
 
},[])


console.log('data',data);

  return (
    <div className="text-gray-800">
      <div className="w-[90%] ms-[5%] flex justify-center border-b-2 border-black">
        <div>
        <a href="/" className="p-1  mx-5 font-bold text-white bg-blue-800 border border-gray-500">go back</a>
          <div className="flex justify-center py-5">
            {" "}
            <img
              className="w-32"
              src="/admin/logo-navi-mumbai.png"
              alt="logo"
            />
          </div>
          <h1 className="text-4xl mb-5 text-gray-800 text-center">
            Navi Mumbai Police
          </h1>
          < a href="javascript:window.print()" className="p-1  mx-5 font-bold text-white bg-blue-800 border border-gray-500">Download this as a PDF</a>
  
        </div>
      </div>

      <div className="w-[90%] ms-[5%] ">
        <div className="flex justify-between text-xl my-2 mb-6 font-bold">
          <h1>In Respect of Articles Lost/Found in Navi Mumbai City.</h1>
          
          <h1>Date / तारीख:{data?.createdAt}</h1>
        </div>
        <div className="flex justify-between text-xl pb-4 font-bold border-b-2 border-black">
          <h1>Police Station / पोलीस ठाणे : Antop Hill</h1>
          <h1>Lost/Found Report No : {data?._id}</h1>
        </div>
        <div className="border-b-2 border-black">
          <h1 className="text-xl underline py-2 font-bold">
          Complaint Details / तक्रा र तपशी ल:-
          </h1>

          <div className="text-lg">
            <div>
              <span className="text-center">Full Name / पूर्ण नाव </span>
              <span className="ms-[370px]">:{data?.name}</span>
            </div>
            <div>
              <span className="text-center">Mobile No. / मोबाइल क्र </span>
              <span className="ms-[347px]">:{data?.mobile}</span>
            </div>
            <div>
              <span className="text-center">Email / ईमेल </span>
              <span className="ms-[430px]">:{data?.email}</span>
            </div>
            <div>
              <span className="text-center">Address / पत्ता </span>
              <span className="ms-[413px]">:{data?.address}</span>
            </div>
            <div>
              <span className="text-center">Article Description / लेख वर्णन </span>
              <span className="ms-[295px]">:{data?.ArticleDescription
}</span>
            </div>
            <div>
              <span className="text-center">Location of Lost / Found Article / हरवलेले/सापडलेलेदस्तऐवजचे स्थान </span>
              <span className="ms-[25px]">:{data?.reportType
}
</span>
            </div>
            <div>
              <span className="text-center">Date And Time of Lost / गमावलेली तारीख आणि वेळ </span>
              <span className="ms-[142px]">:{data?.createdAt}</span>
            </div>
          </div>
        </div>

        <div className="border-b-2 border-black">
          <h1 className="text-xl  py-2 font-bold">Note:</h1>
          <div className="flex justify-between">
            <div className="w-6/12">
              <h1>
                1. This is a digitally signed document and requires no
                signatureas per IT Act 2008.
              </h1>
              <h1>
                2. If required approach the concerned Police Station for Police
                Stamp/Signature.
              </h1>
              <h1>
                3. This application is for lodging report of Articles Inform Us
                in Navi Mumbai City only.
              </h1>
              <h4>
                4. Authority issuing duplicate document/article may obtain proof
                of identity.
              </h4>
            </div>
            <div className="relative w-6/12">
              <img src="/digital-sign.png" className="h-40 opacity-50" alt="" />
              <div className="absolute top-[15%] font-bold left-[20%] ">
                <h1>Navi Mumbai Police</h1>
                <h1>Digitally Signed</h1>
                <h1>Date: {data?.createdAt}</h1>
              </div>
            </div>
          </div>
          <h1 className="text-xl  py-2 font-bold">Disclaimer / अस्वीकरण:</h1>
          <h1>1. As per the prevailing laws, FIR of a major crime (′cognizable crimes like theft, burglary, motor vehicle theft, accident, chain-snatching, assault, rape, murder, attempt to commit murder, robbery, dacoity, extortion etc) can only be registered at a Police Station. Please contact your nearest Police Station for the same. / प्रचलित कायद्यांनुसार एखाद्या मोठ्या गुन्ह्याबद्दल तक्रार/प्रथम खबरी अहवाल संबंधित पोलीस ठाणे येथे नोंदणी करावी. (उदा. चोरी, घरफोडी करून चोरी, मोटर वाहन चोरी, अपघात, सोन-साखळी चोरणे, मारहाण, बलात्कार, खून, खून करण्याचा प्रयत्न, दरोडा, डकैती, खंडणी वगैरे) यासाठी आपल्या जवळच्या पोलीस ठाणेशी संपर्क साधावा.</h1>
          <h1>2. Report non-cognizable complaint on online complaint portal. [Online Complaint] / अ-दखलपात्र स्वरूपाच्या तक्रारी ई- तक्रार या पोर्टल वर नोंदवा. [ Online Complaint ]</h1>
          <h1 className="mb-3">3. Report here feedback of experience about police. / पोलिसांबद्दलच्या अनुभवाचा अभिप्राय येथे नोंदवा.</h1>
        </div>
        <h1 className="text-center font-bold mb-10">Issued By: Navi Mumbai Police</h1>
      </div>
    </div>
  );
}

export default page;