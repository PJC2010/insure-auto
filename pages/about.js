// pages/about.js
import Layout from '../components/Layout';
import Head from 'next/head';
import { useTranslation } from 'next-i18next/pages';
import { serverSideTranslations } from 'next-i18next/pages/serverSideTranslations';
import nextI18NextConfig from '../next-i18next.config.js';

export default function About() {
  const { t } = useTranslation('common');
  const pageTitle = t('about.pageTitle');
  const pageDescription = t('about.pageDescription');

  return (
    <Layout>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />

        {/* Open Graph (OG) tags for social media sharing */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        {/* Replace with your full URL */}
        <meta property="og:url" content="https://www.insurauto.com/about" />
        {/* Replace with an image URL for social sharing */}
        <meta property="og:image" content="https://www.insurauto.com/images/social-share-image.jpg" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content="https://www.insurauto.com/images/social-share-image.jpg" />
      </Head>

      {/* ... (rest of your page content) ... */}

      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-extrabold text-center mb-12 text-neutral-900">
          {t('about.title')}
        </h1>
        {/* ... (rest of your placeholder text and images) ... */}
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
