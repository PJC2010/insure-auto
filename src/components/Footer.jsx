import { Link } from "react-router-dom";
import { contact, areasServed } from "../data/content";
import { useLanguage } from "../i18n/LanguageContext";
import styles from "./Footer.module.css";

export default function Footer() {
  const { L } = useLanguage();
  const t = L.footer;

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <span className={styles.wordmark}>InsureAuto Agency</span>
          <p className={styles.blurb}>{t.blurb}</p>
        </div>

        <div className={styles.col}>
          <span className="label">{t.coverageLabel}</span>
          <Link to="/coverage">{t.coverageLinks.personalAuto}</Link>
          <Link to="/coverage">{t.coverageLinks.homeowners}</Link>
          <Link to="/coverage">{t.coverageLinks.commercialAuto}</Link>
          <Link to="/coverage">{t.coverageLinks.all}</Link>
        </div>

        <div className={styles.col}>
          <span className="label">{t.companyLabel}</span>
          <Link to="/about">{t.companyLinks.story}</Link>
          <Link to="/quote">{t.companyLinks.quote}</Link>
        </div>

        <div className={styles.col}>
          <span className="label">{t.contactLabel}</span>
          <a href={`tel:${contact.phoneDigits}`}>{contact.phone}</a>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <span>{contact.address}</span>
        </div>
      </div>

      <div className={`container ${styles.areas}`}>
        <span className="label">{t.areasLabel}</span>
        <p className={styles.areaList}>
          {t.areasPrefix}{" "}
          {areasServed.map((area, index) => (
            <span key={area}>
              {area}
              {index < areasServed.length - 1 ? ", " : ""}
            </span>
          ))}{" "}
          {t.areasSuffix}
        </p>
      </div>

      <div className={`container ${styles.bottomBar}`}>
        <span>{t.copyright}</span>
        <span>{t.licensed}</span>
      </div>
    </footer>
  );
}
