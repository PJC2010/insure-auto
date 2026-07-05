import { Link } from "react-router-dom";
import { contact } from "../data/content";
import { useLanguage } from "../i18n/LanguageContext";
import styles from "./MobileCta.module.css";

export default function MobileCta() {
  const { L } = useLanguage();

  return (
    <div className={styles.bar}>
      <a href={`tel:${contact.phoneDigits}`} className={`btn btn-secondary ${styles.action}`}>
        {L.mobileCta.call}
      </a>
      <Link to="/quote" className={`btn btn-primary ${styles.action}`}>
        {L.mobileCta.quote}
      </Link>
    </div>
  );
}
