// components/Layout.js
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import Chatbot from './Chatbot';
import styles from './Layout.module.scss'; // 1. Import styles

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>InsurAuto Agency</title>
        <meta name="description" content="Your Journey, Our Protection. Comprehensive Insurance for Every Aspect of Your Life." />
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