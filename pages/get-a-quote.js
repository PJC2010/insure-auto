// pages/get-a-quote.js
import Layout from '../components/Layout';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next/pages';
import { serverSideTranslations } from 'next-i18next/pages/serverSideTranslations';
import nextI18NextConfig from '../next-i18next.config.js';

export default function GetAQuote() {
  const router = useRouter();
  const { t } = useTranslation('common');
  const { service } = router.query; // Get service type from URL query

  const [quoteType, setQuoteType] = useState(service || ''); // Pre-select if from query
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    // ... other dynamic fields based on quoteType
  });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

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
    setStatus('submitting');
    try {
      const res = await fetch('/api/quote-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ quoteType, ...formData }),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
      setFormData({ fullName: '', email: '', phone: '' });
      setQuoteType('');
    } catch (err) {
      console.error('Quote request failed:', err);
      setStatus('error');
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">{t('getAQuote.title')}</h1>
        <p className="text-center text-lg text-gray-700 mb-10">
          {t('getAQuote.subtitle')}
        </p>

        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          {status === 'success' ? (
            <div className="text-center py-8">
              <h2 className="text-2xl font-bold text-green-700 mb-2">{t('getAQuote.successTitle')}</h2>
              <p className="text-gray-700">{t('getAQuote.successBody')}</p>
            </div>
          ) : (
          <form onSubmit={handleSubmit}>
            {status === 'error' && (
              <p className="mb-6 text-red-600 font-semibold">{t('getAQuote.errorBody')}</p>
            )}
            <div className="mb-6">
              <label htmlFor="quoteType" className="block text-gray-700 text-sm font-bold mb-2">
                {t('getAQuote.typeLabel')}
              </label>
              <select
                id="quoteType"
                name="quoteType"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={quoteType}
                onChange={handleQuoteTypeChange}
                required
              >
                <option value="">{t('getAQuote.selectPlaceholder')}</option>
                <option value="personal-auto">{t('getAQuote.types.personal-auto')}</option>
                <option value="home-insurance">{t('getAQuote.types.home-insurance')}</option>
                <option value="renters-insurance">{t('getAQuote.types.renters-insurance')}</option>
                <option value="commercial-auto">{t('getAQuote.types.commercial-auto')}</option>
              </select>
            </div>

            {quoteType && (
              <>
                <h2 className="text-2xl font-semibold mb-6 mt-8">{t('getAQuote.contactInfoTitle')}</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="fullName" className="block text-gray-700 text-sm font-bold mb-2">{t('getAQuote.fullName')}</label>
                    <input type="text" id="fullName" name="fullName" className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={formData.fullName} onChange={handleChange} required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">{t('getAQuote.email')}</label>
                    <input type="email" id="email" name="email" className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={formData.email} onChange={handleChange} required />
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">{t('getAQuote.phone')}</label>
                  <input type="tel" id="phone" name="phone" className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={formData.phone} onChange={handleChange} required />
                </div>

                <h2 className="text-2xl font-semibold mb-6 mt-8">{t('getAQuote.detailsTitle', { type: t(`getAQuote.types.${quoteType}`) })}</h2>

                {/* Dynamic fields based on quoteType */}
                {quoteType === 'personal-auto' && (
                  <>
                    <div className="mb-6">
                      <label htmlFor="vehicleYear" className="block text-gray-700 text-sm font-bold mb-2">{t('getAQuote.fields.vehicleYear')}</label>
                      <input type="number" id="vehicleYear" name="vehicleYear" className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder={t('getAQuote.fields.vehicleYearPlaceholder')} value={formData.vehicleYear || ''} onChange={handleChange} />
                    </div>
                    <div className="mb-6">
                      <label htmlFor="vehicleMake" className="block text-gray-700 text-sm font-bold mb-2">{t('getAQuote.fields.vehicleMake')}</label>
                      <input type="text" id="vehicleMake" name="vehicleMake" className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder={t('getAQuote.fields.vehicleMakePlaceholder')} value={formData.vehicleMake || ''} onChange={handleChange} />
                    </div>
                    {/* Add more auto specific fields */}
                  </>
                )}

                {quoteType === 'home-insurance' && (
                  <>
                    <div className="mb-6">
                      <label htmlFor="propertyAddress" className="block text-gray-700 text-sm font-bold mb-2">{t('getAQuote.fields.propertyAddress')}</label>
                      <input type="text" id="propertyAddress" name="propertyAddress" className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder={t('getAQuote.fields.addressPlaceholder')} value={formData.propertyAddress || ''} onChange={handleChange} />
                    </div>
                    <div className="mb-6">
                      <label htmlFor="homeType" className="block text-gray-700 text-sm font-bold mb-2">{t('getAQuote.fields.homeType')}</label>
                      <select id="homeType" name="homeType" className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={formData.homeType || ''} onChange={handleChange}>
                        <option value="">{t('getAQuote.fields.homeTypeSelect')}</option>
                        <option value="single-family">{t('getAQuote.fields.homeTypeSingleFamily')}</option>
                        <option value="condo">{t('getAQuote.fields.homeTypeCondo')}</option>
                        <option value="townhouse">{t('getAQuote.fields.homeTypeTownhouse')}</option>
                      </select>
                    </div>
                    {/* Add more home specific fields */}
                  </>
                )}

                {quoteType === 'renters-insurance' && (
                  <>
                    <div className="mb-6">
                      <label htmlFor="rentalAddress" className="block text-gray-700 text-sm font-bold mb-2">{t('getAQuote.fields.rentalAddress')}</label>
                      <input type="text" id="rentalAddress" name="rentalAddress" className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder={t('getAQuote.fields.addressPlaceholder')} value={formData.rentalAddress || ''} onChange={handleChange} />
                    </div>
                    <div className="mb-6">
                      <label htmlFor="estimatedValue" className="block text-gray-700 text-sm font-bold mb-2">{t('getAQuote.fields.estimatedValue')}</label>
                      <input type="number" id="estimatedValue" name="estimatedValue" className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder={t('getAQuote.fields.estimatedValuePlaceholder')} value={formData.estimatedValue || ''} onChange={handleChange} />
                    </div>
                    {/* Add more renters specific fields */}
                  </>
                )}

                {quoteType === 'commercial-auto' && (
                  <>
                    <div className="mb-6">
                      <label htmlFor="businessName" className="block text-gray-700 text-sm font-bold mb-2">{t('getAQuote.fields.businessName')}</label>
                      <input type="text" id="businessName" name="businessName" className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={formData.businessName || ''} onChange={handleChange} />
                    </div>
                    <div className="mb-6">
                      <label htmlFor="fleetSize" className="block text-gray-700 text-sm font-bold mb-2">{t('getAQuote.fields.fleetSize')}</label>
                      <input type="number" id="fleetSize" name="fleetSize" className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={formData.fleetSize || ''} onChange={handleChange} />
                    </div>
                    {/* Add more commercial auto specific fields */}
                  </>
                )}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg w-full focus:outline-none focus:shadow-outline transition-colors mt-8 disabled:opacity-60"
                >
                  {status === 'submitting' ? t('getAQuote.submitting') : t('getAQuote.submit')}
                </button>
              </>
            )}
          </form>
          )}
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
