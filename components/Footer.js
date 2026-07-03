// components/Footer.js
import Link from 'next/link';
import { useTranslation } from 'next-i18next/pages';
import styles from './Footer.module.scss'; // 1. Import styles

export default function Footer() {
  const { t } = useTranslation('common');

  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>

        {/* About Section */}
        <div className={styles.column}>
          <h3 className="text-xl font-bold text-white mb-4">{t('footer.companyName')}</h3>
          <p>{t('footer.tagline')}</p>
        </div>

        {/* Quick Links Section */}
        <div className={styles.column}>
          <h3>{t('footer.quickLinks')}</h3>
          <ul>
            <li><Link href="/about">{t('footer.aboutUs')}</Link></li>
            <li><Link href="/services">{t('footer.services')}</Link></li>
            <li><Link href="/claims">{t('footer.fileClaim')}</Link></li>
            <li><Link href="/contact">{t('footer.contact')}</Link></li>
            <li><Link href="/get-a-quote">{t('footer.getQuote')}</Link></li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div className={styles.column}>
          <h3>{t('footer.contactUs')}</h3>
          <ul>
            <li>{t('footer.addressLine1')}</li>
            <li>{t('footer.addressLine2')}</li>
            <li>{t('footer.phoneLabel')}: <a href="tel:123-456-7890">123-456-7890</a></li>
            <li>{t('footer.emailLabel')}: <a href="mailto:info@insurauto.com">info@insurauto.com</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className={styles.copyrightBar}>
        <p>{t('footer.copyright', { year: new Date().getFullYear() })}</p>
      </div>
    </footer>
  );
}
