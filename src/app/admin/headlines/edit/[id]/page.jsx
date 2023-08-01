"use client"
import React, {  useEffect, useState } from 'react';
import  verifyToken  from '@/customHooks/verifyToken';
import {   useRouter } from 'next/navigation'
import axios from "@/customHooks/axiosInstance";



// export const getServerSideProps = async (context) => {
//   const { params } = context;
//   const id = params.id;
//   console.log(id)
//   const data =  axios.get(`/admin/headlines/edit/${id}`)

//   return {
//     props: {
//       data
//     }
//   }
// }

function Page({params}) {
  const router = useRouter();
  const [validationErrors, setValidationErrors] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const id = params.id
  console.log(id)
  const [data, setData] = useState({
    filename: "",
    link: "",
    titleEnglish: "",
    titleMarathi: "",
  });

  useEffect(() => {
    const isValidToken = verifyToken();
    if (!isValidToken) {
      router.push('/login');
    }
  }, [router]);

  useEffect(() => {
    axios
      .get(`/admin/headlines/edit/${id}`)
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
  const [link, setLink] = useState("");
  const [titleEnglish, setTitleEnglish] = useState("");
  const [titleMarathi, setTitleMarathi] = useState("");

  useEffect(() => {
    if (data) {
      setFile(data.filename);
      setLink(data.link);
      setTitleEnglish(data.titleEnglish);
      setTitleMarathi(data.titleMarathi);
    }
  }, [data]);

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

  const handleMarathiChange = (event) => {
    setTitleMarathi(event.target.value);
  };

  const handleEnglishChange = (event) => {
    setTitleEnglish(event.target.value);
  };

  const handleLinkChange = (event) => {
    setLink(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("file", file);
    formData.append("titleMarathi", titleMarathi);
    formData.append("titleEnglish", titleEnglish);
    formData.append("link", link);

    try {
      await axios.post(
        `/admin/headlines/edit/${id}`,
        formData
      );
      setFile(null);
      setTitleMarathi("");
      setTitleEnglish("");
      setLink("");
      router.push("/admin/headlines");
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
      <div className="container mx-auto  p-6">
      <div className="flex m-3 justify-center">
        <button
          className="absolute left-6 bg-green-900 text-white rounded-md border-2  p-2"
          onClick={() => router.push("/admin")}
        >
          DashBoard
        </button>
        <h1 className="text-4xl text-center font-bold mb-5 mt-20 md:mt-0">
          Edit Headlines
        </h1>
      </div>
      <div className="w-full flex justify-center">
        <div className="bg-sky-300 mb-8 rounded-lg shadow-2xl shadow-zinc-700 py-6 w-full">
          <form
            onSubmit={handleSubmit}
            key={data._id}
            className="w-full flex justify-center"
          >
            <div className="w-8/12">
              <div className="mb-4">
                <label
                  htmlFor="titleMarathi"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Title in Marathi
                </label>
                <input
                  type="text"
                  value={titleMarathi}
                  onChange={handleMarathiChange}
                  id="titleMarathi"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="titleEnglish"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Title in English
                </label>
                <input
                  type="text"
                  value={titleEnglish}
                  onChange={handleEnglishChange}
                  id="titileEnglish"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="link"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Link
                </label>
                <input
                  type="text"
                  id="link"
                  value={link}
                  onChange={handleLinkChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="file"
                  className="block text-gray-700 font-bold mb-2"
                >
                  File
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={handleFileChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                  accept=".pdf"
                  />
                  {errorMessage && <p className="text-red-500">{errorMessage}</p>}
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
