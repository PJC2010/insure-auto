// pages/services.js
import Layout from '../components/Layout';
import ServiceCard from '../components/ServiceCard'; // You'll create this component
import Head from 'next/head';
import { useTranslation } from 'next-i18next/pages';
import { serverSideTranslations } from 'next-i18next/pages/serverSideTranslations';
import nextI18NextConfig from '../next-i18next.config.js';
import styles from './Services.module.scss';

export default function Services() {
  const { t } = useTranslation('common');

  const services = [
    {
      title: t('servicesPage.services.commercialAuto.title'),
      description: t('servicesPage.services.commercialAuto.description'),
      icon: '🚚', // Placeholder icon
      link: '/get-a-quote?service=commercial-auto'
    },
    {
      title: t('servicesPage.services.home.title'),
      description: t('servicesPage.services.home.description'),
      icon: '🏠',
      link: '/get-a-quote?service=home-insurance'
    },
    {
      title: t('servicesPage.services.renters.title'),
      description: t('servicesPage.services.renters.description'),
      icon: '🛋️',
      link: '/get-a-quote?service=renters-insurance'
    },
    {
      title: t('servicesPage.services.personalAuto.title'),
      description: t('servicesPage.services.personalAuto.description'),
      icon: '🚗',
      link: '/get-a-quote?service=personal-auto'
    },
  ];

  return (
    <Layout>
      <Head>
        <title>{t('servicesPage.pageTitle')}</title>
        <meta /* ... */ />
      </Head>
      <div className={styles.pageContainer}>
        <h1 className={styles.pageTitle}>{t('servicesPage.title')}</h1>
        <div className={styles.serviceGrid}>
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
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

// components/ServiceCard.js (example)


// Don't forget to export default ServiceCard;
