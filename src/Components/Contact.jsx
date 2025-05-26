import React from 'react';
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
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
      setResult(data.message);
    }
  };

  return (
    <div
      id='contact'
      className='min-h-screen w-full bg-gradient-to-br from-black via-zinc-900 to-gray-900 py-20 px-4 flex flex-col items-center gap-16 relative overflow-hidden'
    >
      {/* Animated Blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-800 opacity-30 rounded-full blur-3xl animate-pulse -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-700 opacity-20 rounded-full blur-3xl animate-pulse -z-10"></div>

      <h1 className='text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 animate-fade-in-up'>
        Contact <span className="text-blue-500">Us</span>
      </h1>

      <div className='flex flex-col lg:flex-row gap-12 lg:gap-20 w-full max-w-6xl items-start justify-center'>
        {/* Contact Info */}
        <div className='text-white flex flex-col gap-8 w-full lg:max-w-md backdrop-blur-lg bg-white/5 rounded-2xl p-8 shadow-xl border border-white/10 animate-fade-in-left'>
          <h2 className='text-2xl font-semibold text-blue-400'>Let's Talk</h2>
          <p className='text-base leading-relaxed text-gray-300'>
            I’m currently available for freelance or full-time work. If you have a project or idea you'd like to bring to life, feel free to contact me.
          </p>
          <div className='flex flex-col gap-5'>
            <div className='flex items-center gap-3 group'>
              <MdEmail className='text-blue-400 text-xl group-hover:scale-110 transition-transform' />
              <a target='_blank' rel='noopener noreferrer' href='mailto:mohateek.dev@gmail.com' className="hover:text-blue-400 transition-colors">mohdateek@gmail.com</a>
            </div>
            <div className='flex items-center gap-3 group'>
              <FaPhoneAlt className='text-green-400 text-sm group-hover:scale-110 transition-transform' />
              <a target='_blank' rel='noopener noreferrer' href='tel:7054375826' className="hover:text-green-400 transition-colors">+91 7054375826</a>
            </div>
            <div className='flex items-center gap-3'>
              <IoLocationSharp className='text-red-400 text-xl' />
              <p className="text-gray-400">Lucknow, India</p>
            </div>
            <div className='flex gap-6 flex-wrap mt-2'>
              <a href="https://www.linkedin.com/in/mohd-ateek-80a949256" target='_blank' rel='noopener noreferrer'>
                <FaLinkedin className='text-3xl text-blue-600 hover:scale-110 hover:text-blue-400 transition-all' />
              </a>
              <a href="https://www.instagram.com/md_ateek09?igsh=ajZjNnFreWhwYWgx" target='_blank' rel='noopener noreferrer'>
                <FaInstagram className='text-3xl text-pink-500 hover:scale-110 hover:text-pink-400 transition-all' />
              </a>
              <a href="https://wa.me/message/ANXSMJIEXO3GF1" target='_blank' rel='noopener noreferrer'>
                <FaWhatsapp className='text-3xl text-green-500 hover:scale-110 hover:text-green-400 transition-all' />
              </a>
              <a href="https://www.facebook.com/people/Mohd-Ateek/100058326015440/" target='_blank' rel='noopener noreferrer'>
                <CiFacebook className='text-3xl text-blue-500 hover:scale-110 hover:text-blue-400 transition-all' />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={onSubmit}
          className='w-full max-w-xl p-8 rounded-2xl bg-white/10 backdrop-blur-lg shadow-2xl border border-white/10 animate-fade-in-right'
        >
          <h2 className='text-2xl font-bold text-white mb-6 text-center'>Contact Form</h2>

          <div className='mb-5'>
            <label className='block text-gray-300 text-sm font-medium mb-1'>Name</label>
            <input
              type='text'
              name='name'
              placeholder='Enter Your Name'
              className='w-full h-12 px-4 bg-black/40 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder-gray-400'
              required
            />
          </div>
          <div className='mb-5'>
            <label className='block text-gray-300 text-sm font-medium mb-1'>Number</label>
            <input 
              type='number'
              name='number'
              placeholder='Enter Your Number'
              className='w-full h-12 px-4 bg-black/40 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder-gray-400'
              required
            />
          </div>
          <div className='mb-5'>
            <label className='block text-gray-300 text-sm font-medium mb-1'>Email</label>
            <input
              type='email'
              name='email'
              placeholder='Enter Your Email'
              className='w-full h-12 px-4 bg-black/40 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder-gray-400'
              required
            />
          </div>
          <div className='mb-5'>
            <label className='block text-gray-300 text-sm font-medium mb-1'>Message</label>
            <textarea
              name='message'
              rows='3'
              placeholder='Enter Your Message'
              className='w-full px-4 py-2 bg-black/40 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder-gray-400 resize-none'
              required
            ></textarea>
          </div>
          <button
            type='submit'
            className='w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 text-white text-lg font-semibold py-3 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1'
          >
            Submit Now
          </button>
          {result && <p className='text-center text-sm mt-4 text-green-400 animate-fade-in-up'>{result}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
