// pages/claims.js
import Layout from '../components/Layout';
import { useState } from 'react';

export default function Claims() {
  const [formData, setFormData] = useState({
    fullName: '',
    policyNumber: '',
    email: '',
    phone: '',
    incidentDate: '',
    incidentType: '',
    description: '',
    // fileUpload: null // For actual file upload, you'd handle this differently
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'file' ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Claim Form Data:', formData);
    // In a real application, you would send this data to an API endpoint
    // e.g., using fetch or axios, which then processes the claim.
    alert('Claim submitted! An agent will review your submission shortly. (Simulated submission)');
    setFormData({
      fullName: '',
      policyNumber: '',
      email: '',
      phone: '',
      incidentDate: '',
      incidentType: '',
      description: '',
    });
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">File an Insurance Claim</h1>
        <p className="text-center text-lg text-gray-700 mb-10">
          Please fill out the form below to initiate your claim. Our team will review your submission and contact you promptly.
        </p>

        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit}>
            <h2 className="text-2xl font-semibold mb-6">Your Information</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="fullName" className="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="policyNumber" className="block text-gray-700 text-sm font-bold mb-2">Policy Number</label>
                <input
                  type="text"
                  id="policyNumber"
                  name="policyNumber"
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={formData.policyNumber}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <h2 className="text-2xl font-semibold mb-6 mt-10">Incident Details</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="incidentDate" className="block text-gray-700 text-sm font-bold mb-2">Date of Incident</label>
                <input
                  type="date"
                  id="incidentDate"
                  name="incidentDate"
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={formData.incidentDate}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="incidentType" className="block text-gray-700 text-sm font-bold mb-2">Type of Incident</label>
                <select
                  id="incidentType"
                  name="incidentType"
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={formData.incidentType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Incident Type</option>
                  <option value="auto-accident">Auto Accident</option>
                  <option value="property-damage">Property Damage (Home/Renters)</option>
                  <option value="theft">Theft</option>
                  <option value="medical-claim">Medical Claim</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Description of Incident</label>
              <textarea
                id="description"
                name="description"
                rows="5"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Please provide a detailed description of what happened."
                value={formData.description}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            {/* <div className="mb-6">
              <label htmlFor="fileUpload" className="block text-gray-700 text-sm font-bold mb-2">Upload Supporting Documents (Optional)</label>
              <input
                type="file"
                id="fileUpload"
                name="fileUpload"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={handleChange}
                multiple // Allow multiple files
              />
              <p className="text-xs text-gray-500 mt-1">Accepted formats: PDF, JPG, PNG (Max 5MB)</p>
            </div> */}

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg w-full focus:outline-none focus:shadow-outline transition-colors"
            >
              Submit Claim
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}