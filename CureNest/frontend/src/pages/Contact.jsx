import React from 'react'
import { assets } from '../assets/assets'
import { toast } from 'react-toastify'

const Contact = () => {

  return (
    <div>

      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className=' font-semibold text-lg text-gray-600'>OUR OFFICE</p>
          <p className=' text-gray-500'>RKGIT College, <br /> Ghaziabad, Uttar Pradesh, India</p>
          <p className=' text-gray-500'>Tel: +91 6306216307 <br /> Email: kaifali.web@gmail.com</p>
          <p className=' font-semibold text-lg text-gray-600'>CAREERS AT CureNest</p>
          <p className=' text-gray-500'>Learn more about our teams and job openings.</p>
          <button onClick={() => toast.error(`Hiring Soon..........`)} className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>

    </div>
  )
}

export default Contact
