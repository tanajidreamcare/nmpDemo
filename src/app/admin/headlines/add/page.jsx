"use client"
import React, {  useEffect, useState } from 'react';
import  verifyToken  from '@/customHooks/verifyToken';
import { useRouter } from 'next/navigation'
import axios from "@/customHooks/axiosInstance";


function Page() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState('');
  const [file, setFile] = useState(null);
  const [link, setLink] = useState("");
  const [titleEnglish, setTitleEnglish] = useState("");
  const [titleMarathi, setTitleMarathi] = useState("");
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    const isValidToken = verifyToken();
    if (!isValidToken) {
      router.push('/login');
    }
  }, [router]);

  const handleFileChange = (e) => {
    const selectedFile = e.currentTarget.files[0];
    const fileExtension = selectedFile.name.split('.').pop().toLowerCase();
    const supportedExtensions = ['pdf'];

    if (fileExtension === 'exe' || fileExtension.includes('.') || !supportedExtensions.includes(fileExtension)) {
      setErrorMessage('Invalid file type');
      setFile(null);
    } else {
      setErrorMessage('');
      setFile(selectedFile);
    }
  };

  const handleLinkChange = (event) => {
    setLink(event.target.value);
  };

  const handleMarathiChange = (event) => {
    setTitleMarathi(event.target.value);
  };

  const handleEnglishChange = (event) => {
    setTitleEnglish(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("file", file);
    formData.append("titleMarathi", titleMarathi);
    formData.append("titleEnglish", titleEnglish);
    formData.append("link", link);
    console.log(titleEnglish)



    try {
      await axios.post("/admin/headlines/upload", formData);

      setFile(null);
      setTitleMarathi("");
      setTitleEnglish("");
      setLink("");
      router.push("/admin/headlines");
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
      <div className="container mx-auto p-3">
      <div className="flex mx-6 justify-center">
        
        <h1 className="text-4xl text-center font-bold mb-5 mt-20 md:mt-0">
          Add Headlines
        </h1>
      </div>
      <div className="w-full flex justify-center text-white">
        <div className="bg-gradient-to-b from-gray-700 to-black mb-8 rounded-lg shadow-2xl shadow-zinc-700 py-6 w-full">
          <form onSubmit={handleSubmit} className="w-full flex justify-center">
            <div className="w-8/12">
              <div className="mb-4">
                <label
                  htmlFor="titleMarathi"
                  className="block  font-bold mb-2"
                >
                  Title in Marathi
                </label>
                <input
                  type="text"
                  onChange={handleMarathiChange}
                  name='titleMarathi'
                  id="titleMarathi"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="titleEnglish"
                  className="block  font-bold mb-2"
                >
                  Title in English
                </label>
                <input
                  type="text"
                  name='titileEnglish'
                  onChange={handleEnglishChange}
                  id="titileEnglish"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="file"
                  className="block  font-bold mb-2"
                >
                  File
                </label>
                <input
                  type="file"
                  id="file"
                  name='file'
                  onChange={handleFileChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                  accept=".pdf"
                  />
                  {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                <p
                  id="helper-text-explanation"
                  className="mt-2 text-sm  "
                >
                  Max 5MB.
                </p>
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

              <div className="mb-4">
                <label
                  htmlFor="link"
                  className="block  font-bold mb-2"
                >
                  Link
                </label>
                <input
                  type="text"
                  name='link'
                  onChange={handleLinkChange}
                  id="link"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

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
                onClick={() => router.push("/admin/headlines")}
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
