import React from 'react'
import DashboardNav from '../components/DashboardNav'
import ConnectNav from '../components/ConnectNav'

const DashboarsSeller = () => {
  return (
    <div>
      <>
        <div className='container-fluid bg-secondary p-5'>
          <ConnectNav />
        </div>

        <div className='container-fluid'>
          <DashboardNav />
        </div>
        <div className='container-fluid'>
          <p> hotels here</p>
        </div>
      </>
    </div>
  )
}

export default DashboarsSeller
