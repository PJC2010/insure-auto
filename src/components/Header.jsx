import { NavLink } from "react-router-dom";
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
          <span className={styles.wordmark}>Insure-Auto</span>
          <span className={styles.est}>Est. 2004</span>
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

        <NavLink to="/quote" className="btn btn-primary">
          Request a quote
        </NavLink>
      </div>
    </header>
  );
}
