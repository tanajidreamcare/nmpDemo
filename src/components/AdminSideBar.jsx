"use client"
import Link from "next/link";
import React from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

function AdminSideBar() {
  const router = useRouter();
  const handleLogout = () => {
    Cookies.remove("adminToken");
    router.push("/login");
  };
  return (
    <div className="py-10  text-center w-[80%] rounded-3xl bg-gradient-to-b from-gray-700 to-black">
      <div className="cursor-pointer text-xl font-base  mb-3 flex justify-center">
        <Link href={'/admin/'} className="w-[70%] rounded-3xl py-2 hover:scale-105 transition-all duration-300 bg-white  ring-2 ring-gray-700 shadow-2xl text-gray-700">
          Dashboard
        </Link>
      </div>
      <div className="cursor-pointer text-xl font-base mb-3  flex justify-center">
        <Link href={'/admin/lost-and-found/'} className="w-[70%] rounded-3xl py-2 hover:scale-105 transition-all duration-300 bg-white  ring-2 ring-gray-700 shadow-2xl text-gray-700">
          Lost & Found
        </Link>
      </div>
      <div className="cursor-pointer text-xl font-base mb-3  flex justify-center">
        <Link href={''} className="w-[70%] rounded-3xl py-2 hover:scale-105 transition-all duration-300 bg-white  ring-2 ring-gray-700 shadow-2xl text-gray-700">
          Drone{" "}
        </Link>
      </div>
      <div className="cursor-pointer text-xl font-base mb-3  flex justify-center">
        <Link href={''} className="w-[70%] rounded-3xl py-2 hover:scale-105 transition-all duration-300 bg-white  ring-2 ring-gray-700 shadow-2xl text-gray-700">
          Speaker/Sound{" "}
        </Link>
      </div>
      <div className="cursor-pointer text-xl font-base mb-3  flex justify-center">
        <h1 onClick={handleLogout} className="w-[70%] rounded-3xl py-2 hover:scale-105 transition-all duration-300 bg-white  ring-2 ring-gray-700 shadow-2xl text-gray-700">
          Logout
        </h1>
      </div>
    </div>
  );
}

export default AdminSideBar;
