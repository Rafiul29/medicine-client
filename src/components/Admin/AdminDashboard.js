import React from 'react'
import { Link } from 'react-router-dom'
const AdminDashboard = () => {
  return (
    <main className='section-padding'>
      <div className='wrapper'>
      <div className='flex justify-center items-center gap-10'>
        <Link to="/admin/manage-medicines" className='bg-cyan-500 px-5 py-3 rounded-md font-semibold text-2xl  hover:bg-cyan-600 duration-600'>Manage Madicine</Link>
        <Link to="/admin/manage-category" className='bg-cyan-500 px-5 py-3 rounded-md font-semibold text-2xl  hover:bg-cyan-600 duration-600'>Manage Category</Link>
      </div>
      </div>
    </main>
  )
}

export default AdminDashboard