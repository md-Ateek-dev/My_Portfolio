import React from 'react'
import ProfileImage from '../assets/ProfileImage.png'
const AboutUs = () => {
  return (
    <div id='about' className='flex flex-col items-center justify-center gap-20 bg-gradient-to-r from-purple-500 to-blue-500 text-gray-900'>
        <div className=''>
            <h1 className='text-3xl p-2 font-bold bg-gradient-to-r from-orange-600/100 to-green-500/60 bg-yellow-400/100 bg-clip-text text-transparent transition-all transform-gpu hover:scale-105'>About Me</h1>
        </div>
        <div className='flex gap-20'>
            <div className='flex flex-col '>
            <img src={ProfileImage} alt="ProfileImage" className='rounded-xl backdrop-blur-md ' />
           
            </div>
            <div className='flex flex-col gap-20'>
                <div className='flex flex-col text-2xl font-extralight'>
                    <p className='text-white'><span className='font-normal bg-gradient-to-r from-orange-600/100 to-green-500/60 bg-yellow-400/100 bg-clip-text text-transparent'>"I' am Mohd Ateek </span>I'm a Full Stack Developer"

</p>
                         <p className='text-white'> who loves building clean, responsive websites and solving real-world <br /> problems with impactful code. Clean Code, Real Impact."
                             </p>
                </div>
                <div className='flex flex-col gap-10'>
                <div className='flex gap-5 items-center font-medium transform-content transition-all hover:scale-105 duration-150'>
  <p >HTML&CSS100%</p>
  <hr className='w-full outline-0 border-0 h-2 rounded-full bg-gradient-to-r from-orange-600 via-yellow-400 to-green-500'/>
</div>
                    <div className='flex gap-20 items-center font-medium transform-content transition-all hover:scale-105 duration-150'><p >Javascript 80%</p> <hr className='w-full outline-0 border-0 h-2 rounded-full bg-gradient-to-r from-orange-600/100 to-green-500/60 bg-yellow-400/100'/></div>
                    <div className='flex gap-20 items-center font-medium transform-content transition-all hover:scale-105 duration-150'><p >Bootstrap 100%</p> <hr className='w-100 outline-0 border-0 h-2 rounded-full bg-gradient-to-r from-orange-600/100 to-green-500/60 bg-yellow-400/100'/></div>
                    <div className='flex gap-20 items-center font-medium transform-content transition-all hover:scale-105 duration-150'><p>React.js 70%</p> <hr className='w-70 outline-0 border-0 h-2 rounded-full bg-gradient-to-r from-orange-600/100 to-green-500/60 bg-yellow-400/100'/></div>
                    <div className='flex gap-20 items-center font-medium transform-content transition-all hover:scale-105 duration-150'><p>Node.js 80%</p> <hr className='w-80 outline-0 border-0 h-2 rounded-full bg-gradient-to-r from-orange-600/100 to-green-500/60 bg-yellow-400/100'/></div>
                    <div className='flex gap-20 items-center font-medium transform-content transition-all hover:scale-105 duration-150'><p>Express.js 80%</p> <hr className='w-80 outline-0 border-0 h-2 rounded-full bg-gradient-to-r from-orange-600/100 to-green-500/60 bg-yellow-400/100'/></div>
                    <div className='flex gap-20 items-center font-medium transform-content transition-all hover:scale-105 duration-150'><p>MongoDB 90%</p> <hr className='w-90 outline-0 border-0 h-2 rounded-full bg-gradient-to-r from-orange-600/100 to-green-500/60 bg-yellow-400/100'/></div>
                </div>
            </div>
        </div>
        <div className='flex w-full justify-around mb-5'>
            <div className='transform-gpu transition-normal hover:scale-105 duration-150' >
                <h1 className='text-3xl font-bold bg-gradient-to-r from-orange-600/100 to-green-500/60 bg-yellow-400/100 bg-clip-text text-transparent'>1+</h1>
                <p className='text-xl'>YEAR OF EXPERIENCE</p>   
            </div>
            <hr />
            <div className='transform-gpu transition-normal hover:scale-105 duration-150'>
                
                <h1 className='text-3xl font-bold bg-gradient-to-r from-orange-600/100 to-green-500/60 bg-yellow-400/100 bg-clip-text text-transparent'>5+</h1>
                <p className='text-xl'>PROJECT COMPLETED</p>
            </div>
            <hr/>
            <div className='transform-gpu transition-normal hover:scale-105 duration-150 mb-5'>
                <h1 className='text-3xl font-bold bg-gradient-to-r from-orange-600/100 to-green-500/60 bg-yellow-400/100 bg-clip-text text-transparent'>Pending..</h1>
                <p className='text-xl'>HAPPY CLIENTS</p>
            </div>
        </div>
    </div>
  )
}

export default AboutUs