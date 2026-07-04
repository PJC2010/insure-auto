import { useState } from "react";
import { Link } from "react-router-dom";
import SectionLabel from "../components/SectionLabel";
import Seo from "../components/Seo";
import {
  quoteChipOptions,
  insuredWithOptions,
  quoteSteps,
  contact,
  siteUrl,
} from "../data/content";
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
        title="Get a Free Insurance Quote in Minutes | Insure-Auto"
        description="Request a free auto, home, or commercial insurance quote. An independent broker compares 40+ carriers and responds with options within one business day."
        jsonLd={breadcrumbJsonLd}
      />
      <section className={styles.header}>
        <div className="container">
          <SectionLabel>Request a quote</SectionLabel>
          <h1 className={styles.title}>Let&rsquo;s find your coverage.</h1>
          <p className={styles.intro}>
            Tell us a little about what you need covered, and a broker will
            shop the market on your behalf. Free, no obligation, and no
            spam — ever.
          </p>
        </div>
      </section>

      <section className="section">
        <div className={`container ${styles.grid}`}>
          <div>
            {submitted ? (
              <div className={`card ${styles.confirmation}`}>
                <span className={styles.quoteMark}>&ldquo;</span>
                <h2 className={styles.confirmationTitle}>
                  Request received.
                </h2>
                <p className={styles.confirmationText}>
                  Thank you. A broker from our team will be in touch within
                  one business day with options tailored to what you told us.
                </p>
                <Link to="/" className="btn btn-primary">
                  Back to home
                </Link>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.field}>
                  <label className="label">What should we quote?</label>
                  <div className={styles.chips}>
                    {quoteChipOptions.map((option) => (
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
                    <label htmlFor="fullName">Full name</label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      placeholder="Jordan Rivera"
                      autoComplete="name"
                      required
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="zip">ZIP code</label>
                    <input
                      id="zip"
                      name="zip"
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]{5}"
                      placeholder="10001"
                      autoComplete="postal-code"
                      required
                    />
                  </div>
                </div>

                <div className="field-row">
                  <div className="field">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@email.com"
                      autoComplete="email"
                      required
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="phone">Phone</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(555) 012-3456"
                      autoComplete="tel"
                      required
                    />
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="insuredWith">Currently insured with</label>
                  <select id="insuredWith" name="insuredWith" defaultValue="">
                    <option value="" disabled>
                      Select one
                    </option>
                    {insuredWithOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="field">
                  <label htmlFor="notes">Anything else we should know?</label>
                  <textarea
                    id="notes"
                    name="notes"
                    placeholder="Two drivers, a 2019 SUV, and a house built in 1998…"
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-block">
                  Request my quote — free, no obligation
                </button>

                <p className={styles.privacy}>
                  Your information is used only to prepare your quote and is
                  never sold to third parties.
                </p>
              </form>
            )}
          </div>

          <aside className={styles.sidebar}>
            <SectionLabel>What to expect</SectionLabel>
            <ol className={styles.steps}>
              {quoteSteps.map((step) => (
                <li key={step.number} className={styles.step}>
                  <span className={styles.stepNumber}>{step.number}</span>
                  <div>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepDescription}>
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <div className={styles.contactBox}>
              <span className={styles.contactLabel}>Prefer to talk?</span>
              <span className={styles.contactPhone}>{contact.phone}</span>
              <span className={styles.contactHours}>{contact.hours}</span>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
