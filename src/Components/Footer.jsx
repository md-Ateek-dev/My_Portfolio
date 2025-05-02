import React from 'react'
import { FaUser } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='flex flex-col bg-black '>
        <hr />
        <div className='flex justify-between '>
            <div className='text-2xl max-w-2xl'>
                <img src="" alt="" />
                <p className='m-20 text-xl text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero ratione tenetur, veniam eveniet
                    reiciendis adipisci facere commodi voluptatem quia laboriosam laudantium? Ducimus, illo.</p>
            </div>
            <div className='flex items-center gap-10 relative m-20'>
                <div className='bg-black rounded-2xl border-2 text-white'>
                    {/* icon */}
                    <FaUser className='absolute top-12 left-2 text-xl text-white'/>
                    <input className='flex gap-10 ms-8 h-11 ps-3 w-50 rounded-2xl ' type="email" placeholder='Enter your Email' />
                </div>
                <div className='bg-gradient-to-r from-orange-600 to-green-500  text-xl p-2 border-2 border-orange-500 rounded-2xl text-white cursor-pointer transition-all transform-gpu hover:scale-105 hover:border-white shadow-md shadow-amber-50'>Subscribe</div>
            </div>
        </div>
        <hr className=' outline-5 border-0 h-0.5 rounded-full bg-white' />
        <div className='flex justify-between text-md m-3 ms-20 text-white'>
            <p className=''>@ 2025 Web Developer. All rights</p>
            <div className='flex gap-20 mb-10 '>
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer