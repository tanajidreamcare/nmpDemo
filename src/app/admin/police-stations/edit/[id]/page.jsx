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
    file: "",
    file2: "",
    file3: "",
    stationEng: "",
    stationMar: "",
    officerNameEng: "",
    officerNameMar: "",
    designationEng: "",
    designationMar: "",
    email: "",
    OfficerNo: "",
    addressEng: "",
    addressMar: "",
    stationNo: "",
    divisionEng: "",
    divisionMar: "",
    divisionNo: "",
    divisionEmail: "",
    zoneEng: "",
    zoneMar: "",
    zoneEmail: "",
    nearRailStat: "",
    nearPoliChowki: "",
    areaHospital: "",
    mapLink: "",
  });

  useEffect(() => {
    const isValidToken = verifyToken();
    if (!isValidToken) {
      router.push('/login');
    }
  }, [router]);

  useEffect(() => {
    axios
      .get(`/admin/police-stations/edit/${id}`)
      .then((response) => {
        const Data = response.data;
        setData(Data);
        console.log(data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const [file, setFile] = useState(null);
  const [file2, setFile2] = useState(null);
  const [file3, setFile3] = useState(null);
  const [stationEng, setstationEng] = useState("");
  const [stationMar, setstationMar] = useState("");
  const [officerNameEng, setofficerNameEng] = useState("");
  const [officerNameMar, setofficerNameMar] = useState("");
  const [designationEng, setdesignationEng] = useState("");
  const [designationMar, setdesignationMar] = useState("");
  const [email, setemail] = useState("");
  const [OfficerNo, setOfficerNo] = useState("");
  const [addressEng, setaddressEng] = useState("");
  const [addressMar, setaddressMar] = useState("");
  const [stationNo, setstationNo] = useState("");
  const [divisionEng, setdivisionEng] = useState("");
  const [divisionMar, setdivisionMar] = useState("");
  const [divisionNo, setdivisionNo] = useState("");
  const [divisionEmail, setdivisionEmail] = useState("");
  const [zoneEng, setzoneEng] = useState("");
  const [zoneMar, setzoneMar] = useState("");
  const [zoneEmail, setzoneEmail] = useState("");
  const [nearRailStat, setnearRailStat] = useState("");
  const [nearPoliChowki, setnearPoliChowki] = useState("");
  const [areaHospital, setareaHospital] = useState("");
  const [mapLink, setmapLink] = useState("");


  useEffect(() => {
    if (data) {
      setFile(data.filename);
      setFile2(data.file2);
      setFile3(data.file3);
      setstationEng(data.stationEng);
      setstationMar(data.stationMar);
      setofficerNameEng(data.officerNameEng);
      setofficerNameMar(data.officerNameMar);
      setdesignationEng(data.designationEng);
      setdesignationMar(data.designationMar);
      setemail(data.email);
      setOfficerNo(data.OfficerNo);
      setaddressEng(data.addressEng);
      setaddressMar(data.addressMar);
      setstationNo(data.stationNo);
      setdivisionEng(data.divisionEng);
      setdivisionMar(data.divisionMar);
      setdivisionNo(data.divisionNo);
      setdivisionEmail(data.divisionEmail);
      setzoneEng(data.zoneMar);
      setzoneMar(data.zoneMar);
      setzoneEmail(data.zoneEmail);
      setnearRailStat(data.nearRailStat);
      setnearPoliChowki(data.nearPoliChowki);
      setareaHospital(data.areaHospital);
      setmapLink(data.mapLink);
    }
  }, [data]);

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

  const handleFileChange2 = (e) => {
    const selectedFile = e.currentTarget.files[0];
    const fileExtension = selectedFile.name.split('.').pop().toLowerCase();
    const supportedExtensions = ['png', 'jpg', 'jpeg'];

    if (fileExtension === 'exe' || fileExtension.includes('.') || !supportedExtensions.includes(fileExtension)) {
      setErrorMessage('Invalid file type');
      setFile2(null);
    } else {
      setErrorMessage('');
      setFile2(selectedFile);
    }
  };

  const handleFileChange3 = (e) => {
    const selectedFile = e.currentTarget.files[0];
    const fileExtension = selectedFile.name.split('.').pop().toLowerCase();
    const supportedExtensions = ['png', 'jpg', 'jpeg'];

    if (fileExtension === 'exe' || fileExtension.includes('.') || !supportedExtensions.includes(fileExtension)) {
      setErrorMessage('Invalid file type');
      setFile3(null);
    } else {
      setErrorMessage('');
      setFile3(selectedFile);
    }
  };

  const handlestationEng = (event) => {
    setstationEng(event.target.value);
  };

  const handlestationMar = (event) => {
    setstationMar(event.target.value);
  };

  const handleofficerNameEng = (event) => {
    setofficerNameEng(event.target.value);
  };

  const handleofficerNameMar = (event) => {
    setofficerNameMar(event.target.value);
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

  const handleOfficerNo = (event) => {
    setOfficerNo(event.target.value);
  };

  const handleaddressEng = (event) => {
    setaddressEng(event.target.value);
  };

  const handleaddressMar = (event) => {
    setaddressMar(event.target.value);
  };

  const handlestationNo = (event) => {
    setstationNo(event.target.value);
  };
  
  const handledivisionEng = (event) => {
    setdivisionEng(event.target.value);
  };

  const handledivisionMar = (event) => {
    setdivisionMar(event.target.value);
  };

  const handledivisionNo = (event) => {
    setdivisionNo(event.target.value);
  };

  const handledivisionEmail = (event) => {
    setdivisionEmail(event.target.value);
  };

  const handlezoneEng = (event) => {
    setzoneEng(event.target.value);
  };

  const handlezoneMar = (event) => {
    setzoneMar(event.target.value);
  };
  
  const handlezoneEmail = (event) => {
    setzoneEmail(event.target.value);
  };

  const handlenearRailStat = (event) => {
    setnearRailStat(event.target.value);
  };

  const handlenearPoliChowki = (event) => {
    setnearPoliChowki(event.target.value);
  };
  
  const handleareaHospital = (event) => {
    setareaHospital(event.target.value);
  };

  const handlemapLink = (event) => {
    setmapLink(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("file", file);
    formData.append("file2", file2);
    formData.append("file3", file3);
    formData.append("stationEng", stationEng);
    formData.append("stationMar", stationMar);
    formData.append("officerNameEng", officerNameEng);
    formData.append("officerNameMar", officerNameMar);
    formData.append("designationEng", designationEng);
    formData.append("designationMar", designationMar);
    formData.append("email", email);
    formData.append("OfficerNo", OfficerNo);
    formData.append("addressEng", addressEng);
    formData.append("addressMar", addressMar);
    formData.append("stationNo", stationNo);
    formData.append("divisionEng", divisionEng);
    formData.append("divisionMar", divisionMar);
    formData.append("divisionNo", divisionNo);
    formData.append("divisionEmail", divisionEmail);
    formData.append("zoneEng", zoneEng);
    formData.append("zoneMar", zoneMar);
    formData.append("zoneEmail", zoneEmail);
    formData.append("nearRailStat", nearRailStat);
    formData.append("nearPoliChowki", nearPoliChowki);
    formData.append("areaHospital", areaHospital);
    formData.append("mapLink", mapLink);
    try {
      await axios.post(
        `/admin/police-stations/edit/${id}`,
        formData
      );
      setFile(null);
      setFile2("");
      setstationEng("");
      setstationMar("");
      setofficerNameEng("");
      setofficerNameMar("");
      setdesignationEng("");
      setdesignationMar("");
      setemail("");
      setOfficerNo("");
      setaddressEng("");
      setaddressMar("");
      setstationNo("");
      setdivisionEng("");
      setdivisionNo("");
      setdivisionMar("");
      setdivisionEmail("");
      setzoneEng("");
      setzoneMar("");
      setzoneEmail("");
      setnearRailStat("");
      setnearPoliChowki("");
      setareaHospital("");
      setmapLink("");
      router.push("/admin/police-stations");
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
          Edit Police Station Details
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
                  htmlFor="stationEng"
                  className="block font-bold mb-2"
                >
                  Station Name in English
                </label>
                <input
                  type="text"
                  value={stationEng}
                  onChange={handlestationEng}
                  id="stationEng"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="stationMar"
                  className="block  font-bold mb-2"
                >
                 Station Name in Marathi
                </label>
                <input
                  accept="text/plain;charset=UTF-8"
                  type="text"
                  value={stationMar}
                  onChange={handlestationMar}
                  id="stationMar"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="officerNameEng"
                  className="block  font-bold mb-2"
                >
                 Officer Name in English
                </label>
                <input
                  accept="text/plain;charset=UTF-8"
                  type="text"
                  value={officerNameEng}
                  onChange={handleofficerNameEng}
                  id="officerNameEng"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="officerNameMar"
                  className="block  font-bold mb-2"
                >
                 Officer Name in Marathi
                </label>
                <input
                  accept="text/plain;charset=UTF-8"
                  type="text"
                  value={officerNameMar}
                  onChange={handleofficerNameMar}
                  id="officerNameMar"
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
                  value={designationEng}
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
                  value={designationMar}
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
                  value={email}
                  onChange={handleemail}
                  id="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="OfficerNo"
                  className="block font-bold mb-2"
                >
                  Officer Number
                </label>
                <input
                  type="number"
                  value={OfficerNo}
                  onChange={handleOfficerNo}
                  id="OfficerNo"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="addressEng"
                  className="block font-bold mb-2"
                >
                  Address - English
                </label>
                <input
                  type="text"
                  value={addressEng}
                  onChange={handleaddressEng}
                  id="addressEng"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="addressMar"
                  className="block font-bold mb-2"
                >
                  Address - Marathi
                </label>
                <input
                  type="text"
                  value={addressMar}
                  onChange={handleaddressMar}
                  id="addressMar"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="stationNo"
                  className="block font-bold mb-2"
                >
                  Station number
                </label>
                <input
                  type="number"
                  value={stationNo}
                  onChange={handlestationNo}
                  id="stationNo"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="divisionEng"
                  className="block font-bold mb-2"
                >
                  Division - English
                </label>
                <input
                  type="text"
                  value={divisionEng}
                  onChange={handledivisionEng}
                  id="divisionEng"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="divisionMar"
                  className="block font-bold mb-2"
                >
                  Division - Marathi
                </label>
                <input
                  type="text"
                  value={divisionMar}
                  onChange={handledivisionMar}
                  id="divisionMar"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="divisionNo"
                  className="block font-bold mb-2"
                >
                  Division Number
                </label>
                <input
                  type="number"
                  value={divisionNo}
                  onChange={handledivisionNo}
                  id="divisionNo"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="divisionEmail"
                  className="block font-bold mb-2"
                >
                  Division Email
                </label>
                <input
                  type="email"
                  value={divisionEmail}
                  onChange={handledivisionEmail}
                  id="divisionEmail"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="zoneEng"
                  className="block font-bold mb-2"
                >
                  Zone - English
                </label>
                <input
                  type="text"
                  value={zoneEng}
                  onChange={handlezoneEng}
                  id="zoneEng"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="zoneMar"
                  className="block font-bold mb-2"
                >
                  Zone - Marathi
                </label>
                <input
                  type="text"
                  value={zoneMar}
                  onChange={handlezoneMar}
                  id="zoneMar"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="zoneEmail"
                  className="block font-bold mb-2"
                >
                  Zone - Email
                </label>
                <input
                  type="email"
                  value={zoneEmail}
                  onChange={handlezoneEmail}
                  id="zoneEmail"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="nearRailStat"
                  className="block font-bold mb-2"
                >
                  Nearest Railway Stn
                </label>
                <input
                  type="text"
                  value={nearRailStat}
                  onChange={handlenearRailStat}
                  id="nearRailStat"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="nearPoliChowki"
                  className="block font-bold mb-2"
                >
                  Nearest Police Stn
                </label>
                <input
                  type="text"
                  value={nearPoliChowki}
                  onChange={handlenearPoliChowki}
                  id="nearPoliChowki"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="areaHospital"
                  className="block font-bold mb-2"
                >
                  Area Hospital
                </label>
                <input
                  type="text"
                  value={areaHospital}
                  onChange={handleareaHospital}
                  id="areaHospital"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="mapLink"
                  className="block font-bold mb-2"
                >
                  Location Link
                </label>
                <input
                  type="url"
                  value={mapLink}
                  onChange={handlemapLink}
                  id="mapLink"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="file"
                  className="block font-bold mb-2"
                >
                  Picture of Station
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
                  htmlFor="file2"
                  className="block font-bold mb-2"
                >
                  Picture of Officer
                </label>
                <input
                  type="file"
                  id="file2"
                  onChange={handleFileChange2}
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
                  htmlFor="file3"
                  className="block font-bold mb-2"
                >
                  Picture of Map
                </label>
                <input
                  type="file"
                  id="file3"
                  onChange={handleFileChange3}
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
                onClick={() => router.push("/admin/police-stations")}
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
