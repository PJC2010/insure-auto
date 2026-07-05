import { useState } from "react";
import { Link } from "react-router-dom";
import SectionLabel from "../components/SectionLabel";
import Reveal from "../components/Reveal";
import Seo from "../components/Seo";
import { contact, siteUrl } from "../data/content";
import { useLanguage } from "../i18n/LanguageContext";
import styles from "./Quote.module.css";

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Request a quote", item: `${siteUrl}/quote` },
  ],
};

export default function Quote() {
  const { L } = useLanguage();
  const t = L.quote;
  const [selectedCoverage, setSelectedCoverage] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  function toggleChip(option) {
    setSelectedCoverage((current) =>
      current.includes(option)
        ? current.filter((item) => item !== option)
        : [...current, option]
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    // Honeypot: real visitors never fill this hidden field, bots often do.
    if (form.elements.company.value) return;
    setSubmitted(true);
  }

  return (
    <>
      <Seo
        title={t.seoTitle}
        description="Request a free auto, home, or commercial insurance quote in Conroe, The Woodlands & Greater Houston. An independent broker compares 40+ carriers and responds with options within one business day."
        jsonLd={breadcrumbJsonLd}
      />
      <section className={styles.header}>
        <div className="container">
          <SectionLabel>{t.label}</SectionLabel>
          <h1 className={styles.title}>{t.title}</h1>
          <p className={styles.intro}>{t.intro}</p>
        </div>
      </section>

      <section className="section">
        <div className={`container ${styles.grid}`}>
          <div>
            {submitted ? (
              <div className={`card ${styles.confirmation}`}>
                <span className={styles.quoteMark}>&ldquo;</span>
                <h2 className={styles.confirmationTitle}>
                  {t.confirmationTitle}
                </h2>
                <p className={styles.confirmationText}>{t.confirmationText}</p>
                <Link to="/" className="btn btn-primary">
                  {t.backHome}
                </Link>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.field}>
                  <label className="label">{t.chipLabel}</label>
                  <div className={styles.chips}>
                    {t.chipOptions.map((option) => (
                      <button
                        type="button"
                        key={option}
                        className={
                          selectedCoverage.includes(option)
                            ? `${styles.chip} ${styles.chipActive}`
                            : styles.chip
                        }
                        onClick={() => toggleChip(option)}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                <input
                  type="text"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                  className={styles.honeypot}
                  aria-hidden="true"
                />

                <div className="field-row">
                  <div className="field">
                    <label htmlFor="fullName">{t.fullName}</label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      placeholder={t.fullNamePlaceholder}
                      autoComplete="name"
                      required
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="zip">{t.zip}</label>
                    <input
                      id="zip"
                      name="zip"
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]{5}"
                      placeholder={t.zipPlaceholder}
                      autoComplete="postal-code"
                      required
                    />
                  </div>
                </div>

                <div className="field-row">
                  <div className="field">
                    <label htmlFor="email">{t.email}</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder={t.emailPlaceholder}
                      autoComplete="email"
                      required
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="phone">{t.phone}</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder={t.phonePlaceholder}
                      autoComplete="tel"
                      required
                    />
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="insuredWith">{t.insuredWith}</label>
                  <select id="insuredWith" name="insuredWith" defaultValue="">
                    <option value="" disabled>
                      {t.insuredWithPlaceholder}
                    </option>
                    {t.insuredWithOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="field">
                  <label htmlFor="notes">{t.notes}</label>
                  <textarea
                    id="notes"
                    name="notes"
                    placeholder={t.notesPlaceholder}
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-block">
                  {t.submit}
                </button>

                <p className={styles.privacy}>{t.privacy}</p>
              </form>
            )}
          </div>

          <aside className={styles.sidebar}>
            <SectionLabel>{t.sidebarLabel}</SectionLabel>
            <ol className={styles.steps}>
              {t.steps.map((step, index) => (
                <Reveal
                  as="li"
                  key={step.number}
                  index={index}
                  className={styles.step}
                >
                  <span className={styles.stepNumber}>{step.number}</span>
                  <div>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepDescription}>
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ol>

            <div className={styles.contactBox}>
              <span className={styles.contactLabel}>{t.contactPrompt}</span>
              <span className={styles.contactPhone}>{contact.phone}</span>
              <span className={styles.contactHours}>{t.contactHours}</span>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
