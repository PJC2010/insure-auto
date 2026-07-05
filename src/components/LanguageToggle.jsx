import { useLanguage } from "../i18n/LanguageContext";
import styles from "./LanguageToggle.module.css";

// Prominent EN/ES slider. The whole control is a switch: clicking anywhere (or
// pressing it with the keyboard) flips the language, and each label is also
// directly clickable to jump straight to that language.
export default function LanguageToggle() {
  const { lang, setLang, toggle, L } = useLanguage();
  const isSpanish = lang === "es";

  return (
    <div className={styles.wrap}>
      <span className={styles.globe} aria-hidden="true">
        🌐
      </span>
      <button
        type="button"
        role="switch"
        aria-checked={isSpanish}
        aria-label={`${L.languageToggle.label} — ${L.languageToggle.switchTo}`}
        title={L.languageToggle.switchTo}
        className={`${styles.track} ${isSpanish ? styles.trackEs : ""}`}
        onClick={toggle}
      >
        <span className={styles.knob} aria-hidden="true" />
        <span
          className={`${styles.option} ${!isSpanish ? styles.optionActive : ""}`}
          onClick={(event) => {
            event.stopPropagation();
            setLang("en");
          }}
        >
          EN
        </span>
        <span
          className={`${styles.option} ${isSpanish ? styles.optionActive : ""}`}
          onClick={(event) => {
            event.stopPropagation();
            setLang("es");
          }}
        >
          ES
        </span>
      </button>
    </div>
  );
}
