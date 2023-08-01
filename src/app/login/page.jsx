"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "../../customHooks/axiosInstance.js";
import Cookies from "js-cookie"
import { useRouter } from 'next/navigation';
import verifyToken from "@/customHooks/verifyToken.js";

function page() {
  useEffect(() => {
    const verifiedToken = verifyToken();
    if(verifiedToken){
      router.push("/admin")
    }
  }, []);
  useEffect(() => {
    handleRefreshCaptcha();
  }, []);
  const [userID, setUserID] = useState("");
  const [password, setPassword] = useState("");
  const [captcha, setCaptcha] = useState("");
  const router = useRouter();
  const [captchaImage, setCaptchaImage] = useState("");

  const [errorMessage, seterrorMessage] = useState("");

  const handleRefreshCaptcha = () => {
    //function for refreshing the captcha from backend
    axios
      .get("/captcha/sendcaptcha")
      .then((response) => {
        const { data } = response;
        setCaptchaImage("data:image/svg+xml;base64," + btoa(data));
      })
      .catch((error) => {
        console.log(error.message);
        seterrorMessage("Failed to refresh captcha.");
      });
  };

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {userID, password, captcha}
    try {
      // Verify the captcha value on the server-side
      const response = await axios.post("/login", data);
      const { token, validation, message } = response.data;

      if (validation) {
        Cookies.set("adminToken", token, { expires: 1 / 96 });
        router.push("/admin");
        console.log("Login success");
        router.push("/admin");
      } else {
        seterrorMessage(message);
      }
    } catch (error) {
      console.log(error.message);
      seterrorMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="relative flex justify-center w-full h-screen items-center">
      <Image
        className="w-full h-full object-cover"
        width={700}
        height={700}
        src={"/admin/crime.webp"}
        alt="picture with a police locking chain with crime written in background"
      />
      <div className="absolute border-[1px] border-gray-400 bg-gray-500 bg-opacity-70 p-10">
        <div className="w-full flex mb-6 justify-center  ">
          <div className="rounded-full p-6 bg-slate-100">
            <Image
              className="w-16 h-16 "
              width={100}
              height={100}
              src={"/admin/logo-navi-mumbai.png"}
              alt="navi mumbai police logo"
            />
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="email"
              id="userID"
              className="px-4 py-2 text-gray-700"
              name="userID"
              placeholder="user id"
              required
              value={userID}
              onChange={(e) => setUserID(e.target.value)}
            />
          </div>
          <div className="mt-6">
            <input
              type="password"
              id="password"
              className="px-4 py-2 text-gray-700"
              name="password"
              placeholder="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <div className="flex my-4">
              <Image
                src={captchaImage}
                width={150}
                height={10}
                alt="captcha"
                className="bg-white"
              />
              <button
                type="button"
                className="ml-2 my-2 bg-gray-200 px-3 py-1.5 rounded-lg text-sm text-gray-700 hover:bg-gray-300 focus:ring-2 focus:ring-gray-400"
                onClick={handleRefreshCaptcha}
              >
                Refresh
              </button>
            </div>
            <input
              type="text"
              name="captcha"
              placeholder="Enter the data above"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              value={captcha}
              onChange={(e) => setCaptcha(e.target.value)}
            />
            <div className="  text-red-600">
              <p>{errorMessage}</p>
            </div>
          </div>
          <div className="flex justify-center">
            <button type="submit"
              className="buttonBlack  animate-button mt-3 py-2 relative overflow-hidden"
            >
              <span className="md:absolute px-4 top-0 left-0 w-0 h-full bg-black transition-all duration-500"></span>
              <span className="relative px-4 font-semibold z-10">Submit</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default page;
