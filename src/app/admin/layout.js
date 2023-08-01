import AdminSideBar from "@/components/AdminSideBar"


export const metadata = {
  title: '',
  description: '',
}

export default function Layout({ children }) {

  return (
    <html lang="en">
      <body >
        <div className='container relative w-full h-full  text-gray-700 '>
          <div className='w-full h-16 flex justify-center items-center bg-gradient-to-b from-gray-700 to-black'>
            <h1 className=" text-white font-sans text-xl">
              Admin DashBoard
            </h1>
          </div>
          <div className='relative flex justify-around'>
            <div className='w-3/12 absolute left-0 -top-14 flex justify-center items-center  h-screen  text-white'>
              <AdminSideBar />
            </div>
            <div className='w-8/12 ms-32'>
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
