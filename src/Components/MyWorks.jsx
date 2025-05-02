import React from 'react'
import MyWork from '../assets/MyWork'
import { IoIosArrowRoundForward } from "react-icons/io";

const MyWorks = () => {
  return (
    <div id='work' className='bg-gradient-to-r from-purple-500 to-blue-500 flex flex-col items-center justify-center gap-30'>
      <div className=''>
        <h1 className='p-4 mt-10 text-4xl font-bold bg-gradient-to-r from-orange-600/100 to-green-500/60 bg-yellow-400/100 bg-clip-text text-transparent transition-all transform-gpu hover:scale-105'>My Letest Work</h1>
      </div>
      <div className='grid grid-cols-[1fr_1fr_1fr_1fr] gap-15 items-center justify-center'>
        {MyWork.map((Work,index)=>{
          return <img className='h-55 w-80 rounded-xl shadow-2xl shadow-blue-200 border-2 border-violet-600 transition-all transform-gpu hover:scale-105 hover:opacity-60 hover:border-amber-500' key={index} src={Work.w_imag} alt="" />
        })}
      </div>
      <div className='text-white flex'>
      <p className="flex items-center text-3xl text-white bg-gradient-to-r from-orange-600 to-green-500 
      border-2 border-amber-600 rounded-full cursor-pointer p-2 
      transition-all duration-500 ease-in-in hover:bg-orange-700 hover:shadow-lg hover:gap-4 hover:border-green-700">
      Show More 
      <IoIosArrowRoundForward className="ml-1 transition-transform duration-500 ease-in-out group-hover:translate-x-2" />
    </p>         
         
        </div>
    </div>
  )
}

export default MyWorks