// pages/contact.js
import Layout from '../components/Layout';
import Head from 'next/head';
import { useState } from 'react';
import { useTranslation } from 'next-i18next/pages';
import { serverSideTranslations } from 'next-i18next/pages/serverSideTranslations';
import nextI18NextConfig from '../next-i18next.config.js';

export default function Contact() {
  const { t } = useTranslation('common');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    } catch (err) {
      console.error('Contact form submission failed:', err);
      setStatus('error');
    }
  };

  return (
    <Layout>
      <Head>
        <title>{t('contact.pageTitle')}</title>
        <meta
          name="description"
          content={t('contact.pageDescription')}
        />
      </Head>
      <div className="bg-neutral-100">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-extrabold text-center mb-8 text-neutral-900">
            {t('contact.title')}
          </h1>
          <p className="text-center text-lg text-neutral-500 mb-12 max-w-xl mx-auto">
            {t('contact.subtitle')}
          </p>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold mb-6 text-primary">
                {t('contact.formTitle')}
              </h2>
              {status === 'success' ? (
                <div className="text-center py-8">
                  <h3 className="text-2xl font-bold text-green-700 mb-2">{t('contact.successTitle')}</h3>
                  <p className="text-neutral-700">{t('contact.successBody')}</p>
                </div>
              ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {status === 'error' && (
                  <p className="text-red-600 font-semibold">{t('contact.errorBody')}</p>
                )}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-neutral-700 mb-1"
                  >
                    {t('contact.name')} *
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
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-neutral-700 mb-1"
                  >
                    {t('contact.email')} *
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
                    htmlFor="phone"
                    className="block text-sm font-semibold text-neutral-700 mb-1"
                  >
                    {t('contact.phone')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary focus:ring-primary"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-neutral-700 mb-1"
                  >
                    {t('contact.subject')} *
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
                    {t('contact.message')} *
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
                  disabled={status === 'submitting'}
                  className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition-all duration-300 transform hover:scale-105 disabled:opacity-60"
                >
                  {status === 'submitting' ? t('contact.submitting') : t('contact.submit')}
                </button>
              </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold mb-6 text-primary">
                {t('contact.infoTitle')}
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

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'], nextI18NextConfig)),
    },
  };
}
