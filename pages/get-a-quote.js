// pages/get-a-quote.js
import Layout from '../components/Layout';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function GetAQuote() {
  const router = useRouter();
  const { service } = router.query; // Get service type from URL query

  const [quoteType, setQuoteType] = useState(service || ''); // Pre-select if from query
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    // ... other dynamic fields based on quoteType
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleQuoteTypeChange = (e) => {
    setQuoteType(e.target.value);
    // Reset specific form data when type changes
    setFormData({
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Quote Request:', { quoteType, ...formData });
    // Send to backend API for processing and lead generation
    alert(`Thank you for requesting a ${quoteType} quote! An agent will contact you soon. (Simulated submission)`);
    setFormData({ fullName: '', email: '', phone: '' });
    setQuoteType('');
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Get Your Free Insurance Quote</h1>
        <p className="text-center text-lg text-gray-700 mb-10">
          Tell us about your needs, and we'll help you find the best coverage options.
        </p>

        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="quoteType" className="block text-gray-700 text-sm font-bold mb-2">
                What type of insurance are you looking for?
              </label>
              <select
                id="quoteType"
                name="quoteType"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={quoteType}
                onChange={handleQuoteTypeChange}
                required
              >
                <option value="">Select Insurance Type</option>
                <option value="personal-auto">Personal Auto Insurance</option>
                <option value="home-insurance">Home Insurance</option>
                <option value="renters-insurance">Renters Insurance</option>
                <option value="commercial-auto">Commercial Auto Insurance</option>
              </select>
            </div>

            {quoteType && (
              <>
                <h2 className="text-2xl font-semibold mb-6 mt-8">Your Contact Information</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="fullName" className="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
                    <input type="text" id="fullName" name="fullName" className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={formData.fullName} onChange={handleChange} required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                    <input type="email" id="email" name="email" className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={formData.email} onChange={handleChange} required />
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
                  <input type="tel" id="phone" name="phone" className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={formData.phone} onChange={handleChange} required />
                </div>

                <h2 className="text-2xl font-semibold mb-6 mt-8">Details for Your {quoteType.replace('-', ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} Quote</h2>

                {/* Dynamic fields based on quoteType */}
                {quoteType === 'personal-auto' && (
                  <>
                    <div className="mb-6">
                      <label htmlFor="vehicleYear" className="block text-gray-700 text-sm font-bold mb-2">Vehicle Year</label>
                      <input type="number" id="vehicleYear" name="vehicleYear" className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="e.g., 2020" value={formData.vehicleYear || ''} onChange={handleChange} />
                    </div>
                    <div className="mb-6">
                      <label htmlFor="vehicleMake" className="block text-gray-700 text-sm font-bold mb-2">Vehicle Make</label>
                      <input type="text" id="vehicleMake" name="vehicleMake" className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="e.g., Toyota" value={formData.vehicleMake || ''} onChange={handleChange} />
                    </div>
                    {/* Add more auto specific fields */}
                  </>
                )}

                {quoteType === 'home-insurance' && (
                  <>
                    <div className="mb-6">
                      <label htmlFor="propertyAddress" className="block text-gray-700 text-sm font-bold mb-2">Property Address</label>
                      <input type="text" id="propertyAddress" name="propertyAddress" className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Street, City, State, ZIP" value={formData.propertyAddress || ''} onChange={handleChange} />
                    </div>
                    <div className="mb-6">
                      <label htmlFor="homeType" className="block text-gray-700 text-sm font-bold mb-2">Type of Home</label>
                      <select id="homeType" name="homeType" className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={formData.homeType || ''} onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="single-family">Single Family Home</option>
                        <option value="condo">Condo</option>
                        <option value="townhouse">Townhouse</option>
                      </select>
                    </div>
                    {/* Add more home specific fields */}
                  </>
                )}

                {quoteType === 'renters-insurance' && (
                  <>
                    <div className="mb-6">
                      <label htmlFor="rentalAddress" className="block text-gray-700 text-sm font-bold mb-2">Rental Property Address</label>
                      <input type="text" id="rentalAddress" name="rentalAddress" className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Street, City, State, ZIP" value={formData.rentalAddress || ''} onChange={handleChange} />
                    </div>
                    <div className="mb-6">
                      <label htmlFor="estimatedValue" className="block text-gray-700 text-sm font-bold mb-2">Estimated Value of Personal Property</label>
                      <input type="number" id="estimatedValue" name="estimatedValue" className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="e.g., 25000" value={formData.estimatedValue || ''} onChange={handleChange} />
                    </div>
                    {/* Add more renters specific fields */}
                  </>
                )}

                {quoteType === 'commercial-auto' && (
                  <>
                    <div className="mb-6">
                      <label htmlFor="businessName" className="block text-gray-700 text-sm font-bold mb-2">Business Name</label>
                      <input type="text" id="businessName" name="businessName" className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={formData.businessName || ''} onChange={handleChange} />
                    </div>
                    <div className="mb-6">
                      <label htmlFor="fleetSize" className="block text-gray-700 text-sm font-bold mb-2">Number of Vehicles in Fleet</label>
                      <input type="number" id="fleetSize" name="fleetSize" className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={formData.fleetSize || ''} onChange={handleChange} />
                    </div>
                    {/* Add more commercial auto specific fields */}
                  </>
                )}
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg w-full focus:outline-none focus:shadow-outline transition-colors mt-8"
                >
                  Get My Quote
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </Layout>
  );
}