import React, { useState } from 'react'

const ContactUs = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const handleSubmit =(e) =>{
      e.preventDefault();
    };
    
  return (
   
    <div className="flex items-center justify-center relative">
    <button
      onClick={() => setIsModalOpen( true)}
      className="bg-green-600 text-white px-5 py-5 rounded-xl shadow-md hover:bg-green-700 transition fixed top-1/2 right-6 -translate-y-1/2 rotate-[-90deg] origin-right"
    >
      Contact Us
    </button>

    {isModalOpen && (
      <div className="fixed inset-0 bg-black/10 flex items-center justify-center z-30">
        <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md relative animate-fade-in-up">
          <h2 className="text-2xl font-semibold mb-4 text-center">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-300 rounded-xl hover:bg-gray-400 transition"
              >
                Cancel
              </button>
              <button onClick={ () =>setIsModalOpen(false)}
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    )}
  </div>
);
}

export default ContactUs