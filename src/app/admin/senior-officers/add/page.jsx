"use client"
import React, {  useEffect, useState } from 'react';
import  verifyToken  from '@/customHooks/verifyToken';
import { useRouter } from 'next/navigation'
import axios from "@/customHooks/axiosInstance";


function Page() {
  const router = useRouter();
  const [errors, setErrors] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [file, setFile] = useState(null);
  const [nameEng, setnameEng] = useState("");
  const [nameMar, setnameMar] = useState("");
  const [designationEng, setdesignationEng] = useState("");
  const [designationMar, setdesignationMar] = useState("");
  const [email, setemail] = useState("");
  const [mobNo, setmobNo] = useState("");
  const [mobNo2, setmobNo2] = useState("");


  useEffect(() => {
    const isValidToken = verifyToken();
    if (!isValidToken) {
      router.push('/login');
    }
  }, [router]);

  const handleFileChange = (e) => {
    const selectedFile = e.currentTarget.files[0];
    const fileExtension = selectedFile.name.split('.').pop().toLowerCase();
    const supportedExtensions = ['png', 'jpg', 'jpeg'];

    if (fileExtension === 'exe' || fileExtension.includes('.') || !supportedExtensions.includes(fileExtension)) {
      setErrorMessage('Invalid file type');
      setFile(null);
    } else {
      setErrorMessage('');
      setFile(selectedFile);
    }
  };

  const handleNameEng = (event) => {
    setnameEng(event.target.value);
  };

  const handleNameMar = (event) => {
    setnameMar(event.target.value);
  };

  const handledesignationEng = (event) => {
    setdesignationEng(event.target.value);
  };

  const handledesignationMar = (event) => {
    setdesignationMar(event.target.value);
  };

  const handleemail = (event) => {
    setemail(event.target.value);
  };

  const handlemobNo = (event) => {
    setmobNo(event.target.value);
  };
  
  const handlemobNo2 = (event) => {
    setmobNo(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("file", file);
    formData.append("nameEng", nameEng);
    formData.append("nameMar", nameMar);
    formData.append("designationEng", designationEng);
    formData.append("designationMar", designationMar);
    formData.append("email", email);
    formData.append("mobNo", mobNo);
    formData.append("mobNo2", mobNo2);

    try {
    await axios.post(
      "/admin/senior-officers/add",
      formData
    );

    setFile(null);
    setnameEng("");
    setnameMar("");
    setdesignationEng("");
    setdesignationMar("");
    setemail("");
    setmobNo("");
    setmobNo2("");
    router.push("/admin/senior-officers");
  } catch (error) {
    if (error.response && error.response.status === 400) {
      setErrors(error.response.data.errors);
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
          Add Officer's Profile
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
                  htmlFor="nameEng"
                  className="block font-bold mb-2"
                >
                  Name in English
                </label>
                <input
                  type="text"
                  onChange={handleNameEng}
                  id="nameEng"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="nameMar"
                  className="block  font-bold mb-2"
                >
                  Name in Marathi
                </label>
                <input
                  accept="text/plain;charset=UTF-8"
                  type="text"
                  onChange={handleNameMar}
                  id="nameMar"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="designationEng"
                  className="block  font-bold mb-2"
                >
                  Designation in English
                </label>
                <input
                  type="text"
                  onChange={handledesignationEng}
                  id="designationEng"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="designationMar"
                  className="block  font-bold mb-2"
                >
                  Designation in Marathi
                </label>
                <input
                  accept="text/plain;charset=UTF-8"
                  type="text"
                  onChange={handledesignationMar}
                  id="designationMar"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block  font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  onChange={handleemail}
                  id="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="mobNo"
                  className="block font-bold mb-2"
                >
                  Mobile Number
                </label>
                <input
                  type="number"
                  onChange={handlemobNo}
                  id="mobNo"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="file"
                  className="block font-bold mb-2"
                >
                  Picture of Officer
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={handleFileChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                  accept=".png, .jpg, .jpeg"
                  />
                  {/* {errorMessage && <p className="text-red-500">{errorMessage}</p>} */}
                <p
                  id="helper-text-explanation"
                  className="mt-2 text-sm text-gray-500 dark:text-gray-500"
                >
                  Max 5MB.
                </p>
              </div>

              
              <div className="mb-4">
                <label
                  htmlFor="mobNo2"
                  className="block font-bold mb-2"
                >
                  Mobile Number
                </label>
                <input
                  type="number"
                  onChange={handlemobNo2}
                  id="mobNo2"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              

              {errors && errors.length > 0 && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
                  <strong className="font-bold">Validation errors:</strong>
                  <ul className="mt-2">
                    {errors.map((error, index) => (
                      <li key={index}>{error.message}</li>
                    ))}
                  </ul>
                </div>
              )}

              <button
                type="submit"
                className="bg-blue-500 mx-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Add New Record
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
                onClick={() => router.push("/admin/senior-officers")}
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
