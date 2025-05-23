import React from 'react';
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { CiFacebook } from "react-icons/ci";
import bgimage1 from '../assets/bg1.avif';

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
    <div
                style={{ backgroundImage: `url(${bgimage1})` }}
    
     id='contact' className='bg-cover bg-center bg-no-repeat bg-gradient-to-r from-purple-500 to-blue-500 py-16 px-4 flex flex-col items-center gap-12'>
      <h1 className='text-3xl sm:text-4xl font-bold text-white transition-transform hover:scale-105'>
        Contact Us
      </h1>

      <div className='flex flex-col lg:flex-row gap-12 lg:gap-16 w-full max-w-6xl items-start justify-center'>
        {/* Contact Info */}
        <div className='text-white flex flex-col gap-8 w-full lg:max-w-md'>
          <h2 className='text-2xl sm:text-3xl font-semibold hover:scale-90 transition-transform'>
            Let's Talk
          </h2>
          <p className='text-base leading-relaxed'>
            I’m currently available for freelance or full-time work. If you have a project or idea you'd like to bring to life, feel free to contact me.
          </p>
          <div className='flex flex-col gap-5'>
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
            <div className='flex gap-6 flex-wrap'>
              <a href="https://www.linkedin.com/in/mohd-ateek-80a949256" target='_blank' rel='noopener noreferrer'>
                <FaLinkedin className='text-3xl sm:text-4xl text-blue-600' />
              </a>
              <a href="https://www.instagram.com/md_ateek09?igsh=ajZjNnFreWhwYWgx" target='_blank' rel='noopener noreferrer'>
                <FaInstagram className='text-3xl sm:text-4xl text-red-600' />
              </a>
              <a href="https://wa.me/message/ANXSMJIEXO3GF1" target='_blank' rel='noopener noreferrer'>
                <FaWhatsapp className='text-3xl sm:text-4xl text-green-600' />
              </a>
              <a href="https://www.facebook.com/people/Mohd-Ateek/100058326015440/" target='_blank' rel='noopener noreferrer'>
                <CiFacebook className='text-3xl sm:text-4xl text-blue-600' />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={onSubmit}
          className='w-full max-w-xl p-6 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300'
        >
          <h2 className='text-xl sm:text-2xl font-bold text-blue-700 mb-6 text-center'>Contact Form</h2>

          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-medium mb-1'>Name</label>
            <input
              type='text'
              name='name'
              placeholder='Enter Your Name'
              className='w-full h-10 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
              required
            />
          </div>

          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-medium mb-1'>Number</label>
            <input
              type='number'
              name='number'
              placeholder='Enter Your Number'
              className='w-full h-10 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
              required
            />
          </div>

          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-medium mb-1'>Email</label>
            <input
              type='email'
              name='email'
              placeholder='Enter Your Email'
              className='w-full h-10 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
              required
            />
          </div>

          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-medium mb-1'>Message</label>
            <textarea
              name='message'
              rows='3'
              placeholder='Enter Your Message'
              className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none'
              required
            ></textarea>
          </div>

          <button
            type='submit'
            className='w-full bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold py-2 rounded-full border-2 shadow-md hover:shadow-xl transition-all duration-500'
          >
            Submit Now
          </button>
          {result && <p className='text-center text-sm mt-3 text-green-600'>{result}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
