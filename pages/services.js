// pages/services.js
import Layout from '../components/Layout';
import ServiceCard from '../components/ServiceCard'; // You'll create this component
import Head from 'next/head';
import styles from './Services.module.scss';

export default function Services() {
  const services = [
    {
      title: 'Commercial Auto Insurance',
      description: 'Protect your business vehicles and drivers with comprehensive commercial auto policies. From small fleets to large operations, we have you covered.',
      icon: '🚚', // Placeholder icon
      link: '/get-a-quote?service=commercial-auto'
    },
    {
      title: 'Home Insurance',
      description: 'Safeguard your most valuable asset. Our home insurance policies provide protection against unforeseen events, ensuring peace of mind for homeowners.',
      icon: '🏠',
      link: '/get-a-quote?service=home-insurance'
    },
    {
      title: 'Renters Insurance',
      description: 'Even if you rent, your belongings need protection. Renters insurance covers your personal property and offers liability protection at an affordable rate.',
      icon: '🛋️',
      link: '/get-a-quote?service=renters-insurance'
    },
    {
      title: 'Personal Auto Insurance',
      description: 'Get the right coverage for your car and family. We offer competitive rates and customized plans to protect you on every journey.',
      icon: '🚗',
      link: '/get-a-quote?service=personal-auto'
    },
  ];

  return (
    <Layout>
      <Head>
        <title>Our Services - InsurAuto Agency</title>
        <meta /* ... */ />
      </Head>
      <div className={styles.pageContainer}>
        <h1 className={styles.pageTitle}>Our Comprehensive Insurance Services</h1>
        <div className={styles.serviceGrid}>
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </Layout>
  );
      
}

// components/ServiceCard.js (example)


// Don't forget to export default ServiceCard;