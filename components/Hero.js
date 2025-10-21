// components/Hero.js
import Link from 'next/link';
import styles from './Hero.module.scss'; // 1. Import styles

export default function Hero() {
  return (
    <div className={styles.hero}>
      <img
        src="/images/hero-bg.jpg" // <-- ADD YOUR IMAGE HERE
        alt="Happy family protected by InsurAuto insurance"
        className={styles.backgroundImage}
      />
      <div className={styles.content}>
        <h1 className={styles.title}>
          Your Journey, Our Protection.
        </h1>
        <p className={styles.subtitle}>
          Comprehensive Insurance for Every Aspect of Your Life
        </p>
        <div className={styles.buttonContainer}>
          <Link href="/get-a-quote" className={styles.ctaButtonPrimary}>
            Get Your Free Quote
          </Link>
          <Link href="/services" className={styles.ctaButtonSecondary}>
            Explore Services
          </Link>
        </div>
      </div>
    </div>
  );
}