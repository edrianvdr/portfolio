import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function ContactMe() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wkv33mk', 'template_8aiigsf', e.target, 'WPoQKXWl0g1ouGj_t')
      .then(() => {
        setStatus('Success! Your message has been sent.');
        setFormData({ user_name: '', user_email: '', message: '' });
      })
      .catch(() => setStatus('Error! Something went wrong.'));
  };

  return (
    <div className="py-16 text-white">
      <div className="px-0 mx-auto sm:px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center  mb-6">Contact Me</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="user_name" className="block text-sm font-semibold mb-2">Name</label>
              <input
                type="text"
                name="user_name"
                id="user_name"
                value={formData.user_name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 text-gray-800 border border rounded-lg hover:border-gray-800 focus:border-gray-800 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="user_email" className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                name="user_email"
                id="user_email"
                value={formData.user_email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 text-gray-800 border border rounded-lg hover:border-gray-800 focus:border-gray-800 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-2">Message</label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-4 py-2 text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-white text-blue-800 font-bold py-2 px-4 rounded-lg border hover:bg-blue-800 hover:text-white hover:border-white focus:bg-blue-800 focus:text-white focus:border-bwhite focus:outline-none transition duration-300"
            >
              Send Message <span className="sr-only">&nbsp;to Edrian Delos Reyes</span>
            </button>
          </form>
          {status && <p className="mt-4 text-center text-gray-700">{status}</p>}
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
