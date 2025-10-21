// components/Footer.js
import Link from 'next/link';
import styles from './Footer.module.scss'; // 1. Import styles

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        
        {/* About Section */}
        <div className={styles.column}>
          <h3 className="text-xl font-bold text-white mb-4">InsurAuto Agency</h3>
          <p>
            Your Journey, Our Protection. Providing comprehensive insurance for auto, home, and business.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className={styles.column}>
          <h3>Quick Links</h3>
          <ul>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/claims">File a Claim</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/get-a-quote">Get a Quote</Link></li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div className={styles.column}>
          <h3>Contact Us</h3>
          <ul>
            <li>123 Insurance Blvd, Suite 100</li>
            <li>City, State, ZIP 12345</li>
            <li>Phone: <a href="tel:123-456-7890">123-456-7890</a></li>
            <li>Email: <a href="mailto:info@insurauto.com">info@insurauto.com</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className={styles.copyrightBar}>
        <p>&copy; {new Date().getFullYear()} InsurAuto Agency. All rights reserved.</p>
      </div>
    </footer>
  );
}