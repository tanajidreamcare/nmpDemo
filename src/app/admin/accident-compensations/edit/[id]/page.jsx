"use client"
import React, {  useEffect, useState } from 'react';
import  verifyToken  from '@/customHooks/verifyToken';
import {   useRouter } from 'next/navigation'
import axios from "@/customHooks/axiosInstance";



function Page({params}) {
  const router = useRouter();
  const [validationErrors, setValidationErrors] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const id = params.id
  const [data, setData] = useState({
    filename: "",
    CRNo: "",
    year: "",
    RegDate: "",
    policeStation: "",
    entryType: "",
  });

  useEffect(() => {
    const isValidToken = verifyToken();
    if (!isValidToken) {
      router.push('/login');
    }
  }, [router]);

  useEffect(() => {
    axios
      .get(`/admin/accident-compensation/edit/${id}`)
      .then((response) => {
        const Data = response.data;
        setData(Data);
        console.log(data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const [file, setFile] = useState("");
  const [CRNo, setCRNo] = useState("");
  const [year, setyear] = useState("");
  const [RegDate, setRegDate] = useState("");
  const [policeStation, setpoliceStation] = useState("");
  const [entryType, setentryType] = useState("");


  useEffect(() => {
    if (data) {
      setFile(data.filename);
      setCRNo(data.CRNo);
      setyear(data.year);
      setRegDate(data.RegDate);
      setpoliceStation(data.policeStation);
      setentryType(data.entryType);
    }
  }, [data]);

  const handleFileChange = (e) => {
    const selectedFile = e.currentTarget.files[0];
    const fileExtension = selectedFile.name.split('.').pop().toLowerCase();
    const supportedExtensions = ['pdf',];

    if (fileExtension === 'exe' || fileExtension.includes('.') || !supportedExtensions.includes(fileExtension)) {
      setErrorMessage('Invalid file type');
      setFile(null);
    } else {
      setErrorMessage('');
      setFile(selectedFile);
    }
  };

  const handleCRNo = (event) => {
    setCRNo(event.target.value);
  };

  const handleyear = (event) => {
    setyear(event.target.value);
  };

  const handleRegDate = (event) => {
    setRegDate(event.target.value);
  };

  const handlepoliceStation = (event) => {
    setpoliceStation(event.target.value);
  };

  const handleentryType = (event) => {
    setentryType(event.target.value);
  };

  
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("file", file);
    formData.append("CRNo", CRNo);
    formData.append("year", year);
    formData.append("RegDate", RegDate);
    formData.append("policeStation", policeStation);
    formData.append("entryType", entryType);

    try {
      await axios.post(
        `/admin/accident-compensation/edit/${id}`,
        formData
      );
      setFile("");
      setCRNo("");
      setyear("");
      setRegDate("");
      setpoliceStation("");
      setentryType("");

      router.push("/admin/accident-compensations");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setValidationErrors(error.response.data.errors);
      } else {
        console.error(error);
      }
    }
  };

  return (
    <div className=''>
      <div className="container mx-auto p-6">
      <div className="flex m-3 justify-center">
        <h1 className="text-4xl text-center font-bold mb-5 mt-20 md:mt-0">
          Edit Accident Compensation Data
        </h1>
      </div>
      <div className="w-full flex justify-center">
        <div className="bg-gradient-to-b from-gray-700 to-black text-white mb-8 rounded-lg shadow-2xl shadow-zinc-700 py-6 w-full">
          <form
            onSubmit={handleSubmit}
            acceptCharset="UTF-8"
            className="w-full flex justify-center"
          >
            <div className="w-8/12">
              

              <div className="mb-4">
                <label
                  htmlFor="CRNo"
                  className="block  font-bold mb-2"
                >
                  CR Number
                </label>
                <input
                  type="number"
                  value={CRNo}
                  onChange={handleCRNo}
                  id="CRNo"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="year"
                  className="block  font-bold mb-2"
                >
                  Year
                </label>
                <input
                  accept="text/plain;charset=UTF-8"
                  type="text"
                  value={year}
                  onChange={handleyear}
                  id="year"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="RegDate"
                  className="block  font-bold mb-2"
                >
                  Register Date
                </label>
                <input
                  accept="text/plain;charset=UTF-8"
                  type="text"
                  value={RegDate}
                  onChange={handleRegDate}
                  id="RegDate"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>

              <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="policeStation"
              >
                Police Station*
              </label>
              <select
                className="w-full px-3 py-4 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
                id="policeStation"
                name="policeStation"
                value={policeStation}
                onChange={handlepoliceStation}
              >
                <option value="">Select Police Station</option>
                <option value="APMC">APMC</option>
                <option value="CBD Belapur">CBD Belapur</option>
                <option value="Kalamboli">Kalamboli</option>
                <option value="Khandeshwar">Khandeshwar</option>
                <option value="Kharghar">Kharghar</option>
                <option value="Kopar Khairane">Kopar Khairane</option>
                <option value="Mora Sagari">Mora Sagari</option>
                <option value="Nerul">Nerul</option>
                <option value="Nhava Sheva">Nhava Sheva</option>
                <option value="NRI">NRI</option>
                <option value="Panvel">Panvel</option>
                <option value="Panvel Taluka">Panvel Taluka</option>
                <option value="Rabale">Rabale</option>
                <option value="Rabale MIDC">Rabale MIDC</option>
                <option value="Sanpada">Sanpada</option>
                <option value="Taloja">Taloja</option>
                <option value="Turbhe">Turbhe</option>
                <option value="Uran">Uran</option>
                <option value="Vashi">Vashi</option>
                <option value="Kamothe">Kamothe</option>
              </select>
              </div>

             

              <div className="mb-4">
                <label
                  htmlFor="file"
                  className="block font-bold mb-2"
                > 
                  Accident Compensation File
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={handleFileChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  required
                  accept=".pdf"
                  />
                  {/* {errorMessage && <p className="text-red-500">{errorMessage}</p>} */}
                <p
                  id="helper-text-explanation"
                  className="mt-2 text-sm text-gray-500 dark:text-gray-500"
                >
                  Max 5MB.
                </p>
              </div>

              

              
             

              

              {validationErrors.length > 0 && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
                  <strong className="font-bold">Validation errors:</strong>
                  <ul className="mt-2">
                    {validationErrors.map((error, index) => (
                      <li key={index}>{error.message}</li>
                    ))}
                  </ul>
                </div>
              )}

              <button
                type="submit"
                className="bg-blue-500 mx-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Edit Record
              </button>

              <button
                type="Reset"
                onClick={() => window.location.reload}
                className="bg-blue-500 mx-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Reset
              </button>

              <button
                type="cancel"
                onClick={() => router.push("/admin/accident-compensations")}
                className="bg-blue-500 mx-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Page;
