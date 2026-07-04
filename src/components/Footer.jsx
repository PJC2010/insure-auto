import { Link } from "react-router-dom";
import { contact } from "../data/content";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <span className={styles.wordmark}>InsureAuto Agency</span>
          <p className={styles.blurb}>
            Independent auto &amp; home insurance brokers. Family-run since
            [], shopping the whole market for every client.
          </p>
        </div>

        <div className={styles.col}>
          <span className="label">Coverage</span>
          <Link to="/coverage">Personal auto</Link>
          <Link to="/coverage">Homeowners</Link>
          <Link to="/coverage">Commercial auto</Link>
          <Link to="/coverage">All coverage</Link>
        </div>

        <div className={styles.col}>
          <span className="label">Company</span>
          <Link to="/about">Our story</Link>
          <Link to="/quote">Request a quote</Link>
        </div>

        <div className={styles.col}>
          <span className="label">Contact</span>
          <a href={`tel:${contact.phoneDigits}`}>{contact.phone}</a>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <span>{contact.address}</span>
        </div>
      </div>

      <div className={`container ${styles.bottomBar}`}>
        <span>© 2026 InsureAuto Agency</span>
        <span>Licensed in TX</span>
      </div>
    </footer>
  );
}
