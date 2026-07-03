// components/Nav.js
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next/pages';
import LanguageSwitcher from './LanguageSwitcher';
import styles from './Nav.module.scss'; // 1. Import styles

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { t } = useTranslation('common');

  const links = [
    { href: '/', label: t('nav.home') },
    { href: '/about', label: t('nav.about') },
    { href: '/services', label: t('nav.services') },
    { href: '/payments', label: t('nav.payments') },
    { href: '/claims', label: t('nav.claims') },
    { href: '/contact', label: t('nav.contact') },
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
        aria-label={t('nav.toggle')}
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
          {t('nav.getQuote')}
        </Link>
        <LanguageSwitcher />
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
            {t('nav.getQuote')}
          </Link>
          <LanguageSwitcher />
        </nav>
      )}
    </>
  );
}
