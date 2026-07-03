// components/Layout.js
import Head from 'next/head';
import { useTranslation } from 'next-i18next/pages';
import Header from './Header';
import Footer from './Footer';
import Chatbot from './Chatbot';
import styles from './Layout.module.scss'; // 1. Import styles

export default function Layout({ children }) {
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>{t('meta.siteTitle')}</title>
        <meta name="description" content={t('meta.defaultDescription')} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* 2. Apply class name */}
      <div className={styles.layout}>
        <Header />
        
        <main className={styles.main}>
          {children}
        </main>
        
        <Footer />
      </div>
      
      <Chatbot />
    </>
  );
}