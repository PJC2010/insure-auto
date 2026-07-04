import { NavLink } from "react-router-dom";
import { contact } from "../data/content";
import styles from "./Header.module.css";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/coverage", label: "Coverage" },
  { to: "/about", label: "About" },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <NavLink to="/" className={styles.logo}>
          <span className={styles.wordmark}>InsureAuto Agency</span>
          <span className={styles.est}>Est. []</span>
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
          <a href={`tel:${contact.phoneDigits}`} className={styles.phone}>
            {contact.phone}
          </a>
          <NavLink to="/quote" className="btn btn-primary">
            Request a quote
          </NavLink>
        </div>
      </div>
    </header>
  );
}
