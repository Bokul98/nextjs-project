import React from 'react'

export default function DashboardLayout({ children }) {
  return (
    <div>
      <div className='grid grid-cols-12'>
        {/* Side Navbar */}
        <div className='col-span-3'>User Dashboard</div>
        {/* Main Content */}
        <div className='col-span-9'>User Dashboard Content</div>
      </div>
    </div>
  )
}
