"use client"
import React, { useEffect, useState } from 'react';
import  verifyToken  from '@/customHooks/verifyToken';
import { useRouter } from 'next/navigation'
import axios from '@/customHooks/axiosInstance'

function Page() {
  const router = useRouter();

  useEffect(() => {
    const isValidToken = verifyToken();
    if (!isValidToken) {
      router.push('/login');
    }
  }, [router]);

  const [stats, setStats] = useState([]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get(
          "/admin/collection-stats"
        );
        setStats(response.data);
      } catch (error) {
        console.error("Error fetching collection stats:", error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className='mt-16'>
      <h1 className='text-5xl text-center w-full mb-6'>Navi Mumbai Police</h1>
      <div className='w-full flex justify-center flex-wrap'>
        {stats.map((data, index) => (
          <div
            key={index}
           
            className='bg-gradient-to-b from-gray-700 to-black p-4 text-white rounded-lg m-2 shadow-lg hover:scale-105 transition-all duration-300'
          >
            <h1 className='text-3xl text-center'>{data.count}</h1>
            <h1  onClick={() => (router.push(`/admin/${data.name}`))}>{data.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
