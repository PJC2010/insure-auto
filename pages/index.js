// pages/index.js
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import Link from 'next/link';
import { useTranslation } from 'next-i18next/pages';
import { serverSideTranslations } from 'next-i18next/pages/serverSideTranslations';
import nextI18NextConfig from '../next-i18next.config.js';

export default function Home() {
  const { t } = useTranslation('common');

  // Data for the featured services on the home page
  const featuredServices = [
    {
      title: t('home.services.personalAuto.title'),
      description: t('home.services.personalAuto.description'),
      icon: '🚗',
      link: '/get-a-quote?service=personal-auto'
    },
    {
      title: t('home.services.home.title'),
      description: t('home.services.home.description'),
      icon: '🏠',
      link: '/get-a-quote?service=home-insurance'
    },
    {
      title: t('home.services.renters.title'),
      description: t('home.services.renters.description'),
      icon: '🛋️',
      link: '/get-a-quote?service=renters-insurance'
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <Hero />

      {/* Introduction Section */}
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">{t('home.introTitle')}</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            {t('home.introText')}
          </p>
          <Link href="/about" className="text-blue-600 hover:text-blue-800 font-semibold text-lg">
            {t('home.learnMore')}
          </Link>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t('home.servicesTitle')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/services" className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors">
              {t('home.viewAllServices')}
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12">{t('home.testimonialsTitle')}</h2>
          <div className="bg-gray-100 p-8 rounded-lg shadow-md">
            <p className="text-gray-700 text-xl italic mb-6">
              {t('home.testimonialQuote')}
            </p>
            <p className="text-gray-900 font-bold text-right">{t('home.testimonialAuthor')}</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 text-center bg-blue-700 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">{t('home.ctaTitle')}</h2>
          <p className="text-xl text-blue-100 mb-8">{t('home.ctaSubtitle')}</p>
          <Link href="/get-a-quote" className="bg-white text-blue-700 px-10 py-4 rounded-full text-xl font-semibold hover:bg-gray-100 transition-colors">
            {t('home.ctaButton')}
          </Link>
        </div>
      </section>
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
