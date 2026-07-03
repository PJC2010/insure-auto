// pages/claims.js
import Layout from '../components/Layout';
import { useState } from 'react';
import { useTranslation } from 'next-i18next/pages';
import { serverSideTranslations } from 'next-i18next/pages/serverSideTranslations';
import nextI18NextConfig from '../next-i18next.config.js';

export default function Claims() {
  const { t } = useTranslation('common');
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
    alert(t('claims.successBody'));
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
        <h1 className="text-4xl font-bold text-center mb-8">{t('claims.title')}</h1>
        <p className="text-center text-lg text-gray-700 mb-10">
          {t('claims.subtitle')}
        </p>

        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit}>
            <h2 className="text-2xl font-semibold mb-6">{t('claims.yourInfoTitle')}</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="fullName" className="block text-gray-700 text-sm font-bold mb-2">{t('claims.fullName')}</label>
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
                <label htmlFor="policyNumber" className="block text-gray-700 text-sm font-bold mb-2">{t('claims.policyNumber')}</label>
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
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">{t('claims.email')}</label>
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
                <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">{t('claims.phone')}</label>
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

            <h2 className="text-2xl font-semibold mb-6 mt-10">{t('claims.incidentDetailsTitle')}</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="incidentDate" className="block text-gray-700 text-sm font-bold mb-2">{t('claims.incidentDate')}</label>
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
                <label htmlFor="incidentType" className="block text-gray-700 text-sm font-bold mb-2">{t('claims.incidentType')}</label>
                <select
                  id="incidentType"
                  name="incidentType"
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={formData.incidentType}
                  onChange={handleChange}
                  required
                >
                  <option value="">{t('claims.incidentTypeSelect')}</option>
                  <option value="auto-accident">{t('claims.incidentTypes.auto-accident')}</option>
                  <option value="property-damage">{t('claims.incidentTypes.property-damage')}</option>
                  <option value="theft">{t('claims.incidentTypes.theft')}</option>
                  <option value="medical-claim">{t('claims.incidentTypes.medical-claim')}</option>
                  <option value="other">{t('claims.incidentTypes.other')}</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">{t('claims.description')}</label>
              <textarea
                id="description"
                name="description"
                rows="5"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder={t('claims.descriptionPlaceholder')}
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
              {t('claims.submit')}
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'], nextI18NextConfig)),
    },
  };
}
