import React from 'react';
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";


const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "25125e9f-4586-46ed-9c11-603e85723742");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  
  return (
    <div id='contact' className='bg-gradient-to-r from-purple-500 to-blue-500 py-16 px-4 flex flex-col items-center justify-center gap-12'>
      <h1 className='text-4xl mt-10 font-bold bg-gradient-to-r from-orange-600 to-green-500 bg-clip-text text-transparent transition-all transform-gpu hover:scale-105'>
        Contact Us
      </h1>

      <div className='flex flex-col lg:flex-row gap-16 w-full max-w-6xl justify-center items-center'>
        {/* Left Side - Contact Info */}
        <div className='text-white flex flex-col gap-8 max-w-md'>
          <h2 className='text-3xl font-semibold bg-gradient-to-r from-orange-600 to-green-700 bg-clip-text text-transparent hover:scale-105 transition-transform'>
            Let's Talk
          </h2>
          <p className='text-md leading-relaxed'>
            I’m currently available for freelance or full-time work. If you have a project or idea you'd like to bring to life, feel free to contact me.
          </p>
          <div className='flex flex-col gap-6'>
            <div className='flex items-center gap-3'>
              <MdEmail className='text-black text-xl' />
              <p>mohdateek@gmail.com</p>
            </div>
            <div className='flex items-center gap-3'>
              <FaPhoneAlt className='text-black text-sm' />
              <p>+91 7054375826</p>
            </div>
            <div className='flex items-center gap-3'>
              <IoLocationSharp className='text-black text-xl' />
              <p>Lucknow, India</p>
            </div>
            <div className='flex gap-10'>
              <FaLinkedin className='text-4xl text-blue-600 gap-10'/>
              <FaInstagram className='text-4xl text-red-600 gap-10'/>
              <FaWhatsapp className='text-4xl text-green-600 gap-10'/>
              <a href="https://facebook.com/your-profile" target="_blank" rel="noopener noreferrer">
  <CiFacebook className="text-4xl text-blue-600" />
</a>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <form onSubmit={onSubmit} className='ms-40 mt-15 rounded-2xl w-full max-w-xl p-6 shadow-xl shadow-blue-200 transition-shadow duration-300 hover:shadow-2xl'>
          <h2 className='text-2xl font-bold text-blue-700 mb-6 text-center'>Contact Form</h2>

          <div className='mb-4'>
            <label className='block text-gray-700 text-md font-medium mb-1'>Name</label>
            <input
              type='text'
              name='name'
              placeholder='Enter Your Name'
              className='w-full h-10 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
            />
          </div>

          <div className='mb-4'>
            <label className='block text-gray-700 text-md font-medium mb-1'>Number</label>
            <input
              type='number'
              name='number'
              placeholder='Enter Your Number'
              className='w-full h-10 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
            />
          </div>

          <div className='mb-4'>
            <label className='block text-gray-700 text-md font-medium mb-1'>Email</label>
            <input
              type='email'
              name='email'
              placeholder='Enter Your Email'
              className='w-full h-10 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
            />
          </div>

          <div className='mb-4'>
            <label className='block text-gray-700 text-md font-medium mb-1'>Message</label>
            <textarea
              name='message'
              rows='3'
              placeholder='Enter Your Message'
              className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none'
            ></textarea>
          </div>

          <button
            type='submit'
            className='w-full bg-gradient-to-r from-orange-600 to-green-500 text-white text-lg font-semibold py-2 rounded-full border-2 border-amber-700 shadow-lg hover:shadow-2xl hover:from-orange-700 transition-all duration-500 ease-in-out'
          >
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
