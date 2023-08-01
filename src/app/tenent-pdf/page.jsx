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
  const {data}=await axios.post('/TenantInformation/getone',ata)
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
          <h1>Tenant Information / भा डेकरुची मा हि ती :</h1>
          
          <h1>Date / तारीख:{data?.createdAt}</h1>
        </div>
        <div className="flex justify-between text-xl pb-4 font-bold border-b-2 border-black">
          <h1>Police Station / पोलीस ठाणे : Antop Hill</h1>
          <h1>Register Id.: {data?._id}</h1>
        </div>
        <div className="border-b-2 border-black">
          <h1 className="text-xl underline py-2 font-bold">
          Owner Details / जा गा मा लका चे तपशी ल:-
          </h1>

          <div className="text-lg">
            <div>
              <span className="text-center">Owner Name / पूर्ण नाव</span>
              <span className="ms-[370px]">:{data?.fullName}</span>
            </div>
            <div>
              <span className="text-center">Owner Mobile / भ्रमणध्वनी क्रमांक </span>
              <span className="ms-[347px]">:{data?.mobile}</span>
            </div>
            <div>
              <span className="text-center">Owner Email / ई-मेल आयड </span>
              <span className="ms-[430px]">:{data?.email}</span>
            </div>
            <div>
              <span className="text-center">Owner Address / पत </span>
              <span className="ms-[413px]">:{data?.address}</span>
            </div>
            <div>
              <span className="text-center">Owner City/District / शहर/जिल </span>
              <span className="ms-[295px]">:{data?.city}</span>
            </div>
            <div>
              <span className="text-center">Owner State / राज </span>
              <span className="ms-[25px]">:{data?.state}</span>
            </div>
          
          </div>
        </div>

        <div className="border-b-2 border-black">
          <h1 className="text-xl underline py-2 font-bold">
          Rented Property Details / भा ड्या ने दि लेल्या जा गेचा तपशी ल:-
          </h1>

          <div className="text-lg">
            <div>
              <span className="text-center">Address of Rented Property / भाड्याने दिलेल्या मालमत्तेचापत</span>
              <span className="ms-[370px]">:{data?.rentPropertyAddress}</span>
            </div>
            <div>
              <span className="text-center">Rented Property Pin code / पिनकोड </span>
              <span className="ms-[347px]">:{data?.pinCode
}</span>
            </div>
            <div>
              <span className="text-center">Rented Property Agreement Start Date / करार प्रारंभतारीख </span>
              <span className="ms-[430px]">:{data?.
AgreementStartDate
}</span>
            </div>
            <div>
              <span className="text-center">Agreement End Date / करार शेवटची तारीख </span>
              <span className="ms-[413px]">:{data?.AgreementEndDate
}</span>
            </div>
                     
          </div>
        </div>

        <div className="border-b-2 border-black">
          <h1 className="text-xl underline py-2 font-bold">
          Tenant Details / भा डेकरुचा तपशी ल:-
          </h1>

          <div className="text-lg">
            <div>
              <span className="text-center">Tenant′s Name / पूर्ण नाव</span>
              <span className="ms-[370px]">:{data?.
tenantName
}</span>
            </div>
            <div>
              <span className="text-center">Tenant Permanent Address / कायमचा पत </span>
              <span className="ms-[347px]">:{data?.tenantPermenentAddress
}</span>
            </div>
            <div>
              <span className="text-center">Tenant City/District / शहर/जिल</span>
              <span className="ms-[430px]">:{data?.tenantPermantCity
}</span>
            </div>
            <div>
              <span className="text-center">Identity Proof of Tenant / भाडेकरु ओळख पुराव</span>
              <span className="ms-[413px]">:{data?.tenantIdNumber
}</span>
            </div>
                     
          </div>
        </div>
        <div className="border-b-2 border-black">
          <h1 className="text-xl underline py-2 font-bold">
          Tenant Work Place Details / भा डेकरुचा तपशी ल:-
          </h1>

          <div className="text-lg">
            <div>
              <span className="text-center">Tenant′s Work Place Number  / पूर्ण नाव</span>
              <span className="ms-[370px]">:{data?.tenantWorkPlaceNumber
}</span>
            </div>
            <div>
              <span className="text-center">tenantWorkPlaceEmail
 / कायमचा पत </span>
              <span className="ms-[347px]">:{data?.tenantWorkPlaceEmail
}</span>
            </div>
            <div>
              <span className="text-center">tenantOccupation
 / शहर/जिल</span>
              <span className="ms-[430px]">:{data?.tenantOccupation
}</span>
            </div>
            <div>
              <span className="text-center">tenantWorkplaceAddress
 / भाडेकरु ओळख पुराव</span>
              <span className="ms-[413px]">:{data?.tenantWorkplaceAddress
}</span>
            </div>
                     
          </div>
        </div>
        <div className="border-b-2 border-black">
          <h1 className="text-xl underline py-2 font-bold">
          Tenant Known persion details / भा डेकरुचा तपशी ल:-
          </h1>

          <div className="text-lg">
            <div>
              <span className="text-center">TenantKnownPersonName / पूर्ण नाव</span>
              <span className="ms-[370px]">:{data?.tenantKnownPersonName}</span>
            </div>
            <div>
              <span className="text-center">TenantKnownPerson Mobile / कायमचा पत </span>
              <span className="ms-[347px]">:{data?.tenantKnownPersonMobile}</span>
            </div>
            <div>
              <span className="text-center">TenantKnownPersonName 2 / शहर/जिल</span>
              <span className="ms-[430px]">:{data?.tenantKnownPerson2Name}</span>
            </div>
            <div>
              <span className="text-center">TenantKnownPerson Mobile 2 / भाडेकरु ओळख पुराव</span>
              <span className="ms-[413px]">:{data?.tenantKnownPerson2Mobile}</span>
            </div>
            <div>
              <span className="text-center">Agent Name / भाडेकरु ओळख पुराव</span>
              <span className="ms-[413px]">:{data?.AgentName}</span>
            </div>
            <div>
              <span className="text-center">Agent Details / भाडेकरु ओळख पुराव</span>
              <span className="ms-[413px]">:{data?.AgentDetails}</span>
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