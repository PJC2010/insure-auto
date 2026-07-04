import { Link } from "react-router-dom";
import { contact } from "../data/content";
import styles from "./MobileCta.module.css";

export default function MobileCta() {
  return (
    <div className={styles.bar}>
      <a href={`tel:${contact.phoneDigits}`} className={`btn btn-secondary ${styles.action}`}>
        Call now
      </a>
      <Link to="/quote" className={`btn btn-primary ${styles.action}`}>
        Get a quote
      </Link>
    </div>
  );
}
