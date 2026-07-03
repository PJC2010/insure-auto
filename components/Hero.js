// components/Hero.js
import Link from 'next/link';
import { useTranslation } from 'next-i18next/pages';
import styles from './Hero.module.scss'; // 1. Import styles

export default function Hero() {
  const { t } = useTranslation('common');

  return (
    <div className={styles.hero}>
      <img
        src="/images/hero-bg.jpg" // <-- ADD YOUR IMAGE HERE
        alt={t('hero.imageAlt')}
        className={styles.backgroundImage}
      />
      <div className={styles.content}>
        <h1 className={styles.title}>
          {t('hero.title')}
        </h1>
        <p className={styles.subtitle}>
          {t('hero.subtitle')}
        </p>
        <div className={styles.buttonContainer}>
          <Link href="/get-a-quote" className={styles.ctaButtonPrimary}>
            {t('hero.ctaPrimary')}
          </Link>
          <Link href="/services" className={styles.ctaButtonSecondary}>
            {t('hero.ctaSecondary')}
          </Link>
        </div>
      </div>
    </div>
  );
}
