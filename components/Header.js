// components/Header.js
import Link from 'next/link';
import Nav from './Nav';
import styles from './Header.module.scss'; // 1. Import styles

export default function Header() {
  return (
    // 2. Apply class names
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          InsurAuto Agency
        </Link>
        <Nav />
      </div>
    </header>
  );
}