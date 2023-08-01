"use client"
import React, { useEffect, useState } from 'react';
import  verifyToken  from '@/customHooks/verifyToken';
import { useRouter } from 'next/navigation'
import axios from "@/customHooks/axiosInstance";
import DataTable from 'react-data-table-component';
import { FaDownload } from 'react-icons/fa';
import { MdDeleteForever, MdModeEditOutline, MdOutlineRateReview } from 'react-icons/md';
import styled from 'styled-components';

const customStyles = {
  rows: {
    style: {
      minHeight: '56px', // Specify the height of the row
    },
  },
  headCells: {
    style: {
      backgroundColor: '#f5f5f5',
      fontWeight: 'bold',
    },
  },
};


function Page() {
  const router = useRouter();

  useEffect(() => {
    const isValidToken = verifyToken();
    if (!isValidToken) {
      router.push('/login');
    }
  }, [router]);

  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    axios.get('/admin/press-releases').then((response) => {
      const data = response.data;
      setNotifications(data);
    });
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete('/admin/press-releases/delete/' + id);
      window.location.reload()
      console.log('Deleted notification');
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (id) => {
    router.push(`/admin/press-releases/edit/${id}`);
  };


  const columns = [
    {
      name: '#',
      selector: 'index',
      sortable: true,
      cell: (row) => <div>{row.index}</div>,
    },
    // {
    //   name: 'View',
    //   cell: (row) => (
    //     <button onClick={() => handleView(row._id)}>
    //       <MdOutlineRateReview className="h-10 w-10 p-3 text-white rounded-full bg-green-400" />
    //     </button>
    //   ),
    //   sortable: false,
    // },
    {
      name: 'Edit',
      cell: (row) => (
        <button onClick={() => handleEdit(row._id)}>
          <MdModeEditOutline className="h-10 w-10 p-3 text-white rounded-full bg-blue-500" />
        </button>
      ),
      sortable: false,
    },
    {
      name: 'Delete',
      cell: (row) => (
        <button onClick={() => handleDelete(row._id)}>
          <MdDeleteForever className="h-10 w-10 p-3 text-white rounded-full bg-red-500" />
        </button>
      ),
      sortable: false,
    },
    {
      name: 'Name in English',
      selector: 'titleEng',
      sortable: true,
    },
    {
      name: 'Name in Marathi',
      selector: 'titleMar',
      sortable: true,
    },
    {
      name: 'Year',
      selector: 'year',
      sortable: true,
    },
    {
      name: 'File',
      cell: (row) =>
        row.filename ? (
          <a href={`http://3.111.197.119/uploads/${row.filename}`} target="_blank" download={row.name}>
            <FaDownload className="h-10 w-10 p-3 text-white rounded-full bg-yellow-300" />
          </a>
        ) : (
          <FaDownload className="h-10 w-10 p-3 text-white rounded-full bg-yellow-300" />
        ),
      sortable: false,
    },
    {
      name: 'Created At',
      selector: 'createdAt',
      sortable: true,
      cell: (row) => new Date(row.createdAt).toLocaleDateString(),
    },
    {
      name: 'Updated At',
      selector: 'updatedAt',
      sortable: true,
      cell: (row) => new Date(row.updatedAt).toLocaleDateString(),
    },
  ];

  const data = notifications.map((notification, index) => ({
    ...notification,
    index: index + 1,
  }));

  return (
    <div className="mt-16 ml-6">
      <div className="h-screen w-full mr-6 ">
        <h1 className="w-full text-center font-extrabold text-3xl my-5 ">Press Release</h1>
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => router.push('/admin/press-releases/add')}
            type="submit"
            className="bg-blue-500 mx-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add New Record
          </button>
        </div>
        <div className="mt-2 flex justify-center">
          <button
            type="submit"
            className="bg-gray-500 mx-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Print
          </button>
          <button
            type="submit"
            className="bg-gray-500 mx-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            PDF
          </button>
          <button
            type="submit"
            className="bg-gray-500 mx-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Excel
          </button>
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <DataTable
            columns={columns}
            data={data}
            noDataComponent="No records found"
            customStyles={customStyles}
            pagination
            paginationPerPage={10}
            paginationRowsPerPageOptions={[10, 20, 30]}
          />
        </div>
      </div>
    </div>
  );
}

export default Page;

