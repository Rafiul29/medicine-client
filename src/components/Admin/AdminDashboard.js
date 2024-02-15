import React from 'react'
import { Link } from 'react-router-dom'
const AdminDashboard = () => {
  return (
    <main className='section-padding min-h-screen'>
      <div className='wrapper'>
      <div className='flex justify-center items-center gap-5'>
        <Link to="/admin/manage-medicines" className='bg-cyan-500 px-5 py-2 rounded-md font-semibold text-md  hover:bg-cyan-600 duration-600'>Manage Madicine</Link>
        <Link to="/admin/manage-category" className='bg-cyan-500 px-5 py-2 rounded-md font-semibold text-md  hover:bg-cyan-600 duration-600'>Manage Category</Link>
        <Link to="/admin/manage-orders" className='bg-cyan-500 px-5 py-2 rounded-md font-semibold text-md  hover:bg-cyan-600 duration-600'>Manage orders</Link>
      </div>
      </div>
    </main>
  )
}

export default AdminDashboard