// import React, { useState } from 'react';
// import { MdOutlineClose } from "react-icons/md";
// import { FaUser, FaEnvelope } from "react-icons/fa";

// const ContactUs = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsModalOpen(false);
//   };

//   return (
//     <div className="relative z-50">
//       {/* Floating Side Button */}
//       <button
//         onClick={() => setIsModalOpen(true)}
//         className="bg-blue-600 text-white px-3 py-3 sm:px-3 sm:py-3 rounded-xl shadow-md hover:bg-blue-700 transition fixed top-1/2 right-2 sm:right-6 -translate-y-1/2 me-2 mt-5 rotate-[-90deg] origin-right z-1"
//       >
//         Contact Us
//       </button>

//       {/* Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-4">
//           <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 w-full max-w-sm sm:max-w-md relative animate-fade-in-up">
            
//             {/* Close Button */}
//             <button
//               onClick={() => setIsModalOpen(false)}
//               className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-2xl"
//             >
//               <MdOutlineClose />
//             </button>

//             <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">Get in Touch</h2>

//             <form onSubmit={handleSubmit} className="space-y-5">
//               {/* Name Input */}
//               <div className="relative">
//                 <FaUser className="absolute top-3 left-3 text-gray-400" />
//                 <input
//                   type="text"
//                   placeholder="Your Name"
//                   required
//                   className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
//                 />
//               </div>

//               {/* Email Input */}
//               <div className="relative">
//                 <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
//                 <input
//                   type="email"
//                   placeholder="Your Email"
//                   required
//                   className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
//                 />
//               </div>

//               {/* Message Textarea */}
//               <div>
//                 <textarea
//                   placeholder="Your Message"
//                   rows="3"
//                   className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none resize-none"
//                 ></textarea>
//               </div>

//               {/* Buttons */}
//               <div className="flex justify-between mt-4">
//                 <button
//                   type="button"
//                   onClick={() => setIsModalOpen(false)}
//                   className="w-[48%] py-2 text-gray-600 border border-gray-300 rounded-xl hover:bg-gray-100 transition"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="w-[48%] py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
//                 >
//                   Send
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ContactUs;
