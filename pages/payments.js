// pages/payments.js
import Layout from '../components/Layout';
import { useState } from 'react';
import { useTranslation } from 'next-i18next/pages';
import { serverSideTranslations } from 'next-i18next/pages/serverSideTranslations';
import nextI18NextConfig from '../next-i18next.config.js';

export default function Payments() {
  const { t } = useTranslation('common');
  const [policyNumber, setPolicyNumber] = useState('');
  const [amount, setAmount] = useState('');
  // In a real app, you'd integrate with a payment gateway like Stripe Elements

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send 'policyNumber' and 'amount' to your backend
    // which then communicates with the payment gateway.
    console.log('Payment submitted:', { policyNumber, amount });
    alert(t('payments.successBody'));
    // Reset form or show confirmation
    setPolicyNumber('');
    setAmount('');
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">{t('payments.title')}</h1>
        <p className="text-center text-lg text-gray-700 mb-10">
          {t('payments.subtitle')}
        </p>

        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="policyNumber" className="block text-gray-700 text-sm font-bold mb-2">
                {t('payments.policyNumber')}
              </label>
              <input
                type="text"
                id="policyNumber"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder={t('payments.policyNumberPlaceholder')}
                value={policyNumber}
                onChange={(e) => setPolicyNumber(e.target.value)}
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="amount" className="block text-gray-700 text-sm font-bold mb-2">
                {t('payments.amount')}
              </label>
              <input
                type="number"
                id="amount"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder={t('payments.amountPlaceholder')}
                step="0.01"
                min="0.01"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
              />
            </div>

            {/* In a real scenario, this is where payment gateway elements would go */}
            <div className="mb-6 text-center text-gray-600">
              <p>{t('payments.gatewayNotice')}</p>
              <p className="text-sm mt-2">{t('payments.secureNotice')}</p>
            </div>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg w-full focus:outline-none focus:shadow-outline transition-colors"
            >
              {t('payments.submit')}
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
