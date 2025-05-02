import React from 'react'
import Services_data from '../assets/Services_data'
import { FaLongArrowAltRight } from "react-icons/fa";
const Services = () => {
  return (
    <div id='services' className='bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg shadow-red-900/50 flex flex-col items-center justify-center gap-5 hover:bg-amber-600'>
        <div className=''>
          <h1 className='text-4xl p-5 mt-5 font-semibold bg-gradient-to-r from-orange-600/100 to-green-500/60 bg-yellow-400/100 bg-clip-text text-transparent transition-all transform-gpu hover:scale-105'>My Services</h1>
          {/* <img src="" alt="" /> */}
        </div>
        <div className='grid grid-cols-[1fr_1fr_1fr] gap-10 mb-5'>
          {Services_data.map((Service,index)=>{
            return <div data-aos="zoom-in-down"
            className="bg-gradient-to-r from-purple-500 to-blue-500 flex flex-col justify-center gap-5 p-5 m-3 border-2 hover:border-black hover:text-white rounded-2xl transition-all cursor-pointer "
            key={index}>
            <h3 className='font-semibold text-m'>{Service.s_no}</h3>
            <h2 className='text-xl font-semibold'>{Service.s_name}</h2>
            <p>{Service.s_desc}</p>
            <div className="flex items-center gap-2">
              <p className='text-black'>Read more</p>
              <p><FaLongArrowAltRight/></p>
            </div>
          </div>
          
          })}
        </div>
    </div>
  )
}    

export default Services