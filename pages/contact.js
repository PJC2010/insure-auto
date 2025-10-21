// pages/contact.js
import Layout from '../components/Layout';
import Head from 'next/head';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Contact Form Data:', formData);
    alert(
      'Message sent! We will get back to you shortly. (This is a demo submission)'
    );
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  return (
    <Layout>
      <Head>
        <title>Contact Us - InsurAuto Agency</title>
        <meta
          name="description"
          content="Get in touch with InsurAuto Agency. Send us a message or find our phone number and address."
        />
      </Head>
      <div className="bg-neutral-100">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-extrabold text-center mb-8 text-neutral-900">
            Contact InsurAuto Agency
          </h1>
          <p className="text-center text-lg text-neutral-500 mb-12 max-w-xl mx-auto">
            We're here to help! Reach out to us through the form below or using
            our direct contact information.
          </p>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold mb-6 text-primary">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-neutral-700 mb-1"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary focus:ring-primary"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                {/* ... (repeat for email, phone, subject) ... */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-neutral-700 mb-1"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary focus:ring-primary"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-neutral-700 mb-1"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary focus:ring-primary"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-neutral-700 mb-1"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    className="block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary focus:ring-primary"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition-all duration-300 transform hover:scale-105"
                >
                  Submit Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold mb-6 text-primary">
                Our Information
              </h2>
              <div className="space-y-6 text-neutral-700 text-lg">
                {/* ... (your existing contact info) ... */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}