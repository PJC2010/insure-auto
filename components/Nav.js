// components/Nav.js
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Nav.module.scss'; // 1. Import styles

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/payments', label: 'Payments' },
    { href: '/claims', label: 'Claims' },
    { href: '/contact', label: 'Contact Us' },
  ];

  const getLinkClass = (href) => {
    return router.pathname === href ? styles.activeLink : styles.navLink;
  };

  return (
    <>
      {/* Mobile Menu Button (Hamburger) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={styles.menuButton}
        aria-label="Toggle navigation"
      >
        {isOpen ? '✕' : '☰'} {/* Simple open/close icons */}
      </button>

      {/* Desktop Menu */}
      <nav className={styles.navDesktop}>
        {links.map(({ href, label }) => (
          <Link key={href} href={href} className={getLinkClass(href)}>
            {label}
          </Link>
        ))}
        <Link href="/get-a-quote" className={styles.ctaButton}>
          Get a Quote
        </Link>
      </nav>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <nav className={styles.navMobile}>
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={getLinkClass(href)}
              onClick={() => setIsOpen(false)} // Close menu on click
            >
              {label}
            </Link>
          ))}
          <Link
            href="/get-a-quote"
            className={styles.ctaButton}
            onClick={() => setIsOpen(false)}
          >
            Get a Quote
          </Link>
        </nav>
      )}
    </>
  );
}