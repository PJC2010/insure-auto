import { NavLink } from "react-router-dom";
import { contact } from "../data/content";
import { useLanguage } from "../i18n/LanguageContext";
import LanguageToggle from "./LanguageToggle";
import styles from "./Header.module.css";

export default function Header() {
  const { L } = useLanguage();

  const navItems = [
    { to: "/", label: L.nav.home },
    { to: "/coverage", label: L.nav.coverage },
    { to: "/about", label: L.nav.about },
  ];

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <NavLink to="/" className={styles.logo}>
          <span className={styles.wordmark}>InsureAuto Agency</span>
          <span className={styles.est}>{L.header.est}</span>
        </NavLink>

        <nav className={styles.nav}>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className={styles.actions}>
          <LanguageToggle />
          <a href={`tel:${contact.phoneDigits}`} className={styles.phone}>
            {contact.phone}
          </a>
          <NavLink to="/quote" className={`btn btn-primary ${styles.quoteBtn}`}>
            {L.header.requestQuote}
          </NavLink>
        </div>
      </div>
    </header>
  );
}
