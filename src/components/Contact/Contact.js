import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Contact = () => {
  return (
    <section className='px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2'>
      <div className='flex flex-col justify-center items-center'>
        <h1 className=' font-mono text-xl text-center md:text-3xl '>
          Contact Us, Our Office Address Down Below
        </h1>

        <div className='flex justify-center items-center mb-10'>
          <Link to='bdadress'>
            <button className='  py-1 px-3 text-white mt-3 mx-1 bg-cyan-600 w-auto sm:mb-0'>
              BD Address
            </button>
          </Link>
          <Link to='us-address' className='  py-1 px-3 text-white mt-3 mx-1 bg-cyan-600 w-auto sm:mb-0'>
            US Address
          </Link>
        </div>
      </div>
      <div className='w-full '>

        <Outlet />
      </div>
    </section>
  )
}

export default Contact
