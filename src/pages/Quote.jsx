import { useState } from "react";
import { Link } from "react-router-dom";
import SectionLabel from "../components/SectionLabel";
import {
  quoteChipOptions,
  insuredWithOptions,
  quoteSteps,
  contact,
} from "../data/content";
import styles from "./Quote.module.css";

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
    setSubmitted(true);
  }

  return (
    <>
      <section className={styles.header}>
        <div className="container">
          <SectionLabel>Request a quote</SectionLabel>
          <h1 className={styles.title}>Let&rsquo;s find your coverage.</h1>
          <p className={styles.intro}>
            Tell us a little about what you need covered, and a broker will
            shop the market on your behalf.
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

                <div className="field-row">
                  <div className="field">
                    <label>Full name</label>
                    <input type="text" placeholder="Jordan Rivera" />
                  </div>
                  <div className="field">
                    <label>ZIP code</label>
                    <input type="text" placeholder="10001" />
                  </div>
                </div>

                <div className="field-row">
                  <div className="field">
                    <label>Email</label>
                    <input type="email" placeholder="you@email.com" />
                  </div>
                  <div className="field">
                    <label>Phone</label>
                    <input type="tel" placeholder="(555) 012-3456" />
                  </div>
                </div>

                <div className="field">
                  <label>Currently insured with</label>
                  <select defaultValue="">
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
                  <label>Anything else we should know?</label>
                  <textarea placeholder="Two drivers, a 2019 SUV, and a house built in 1998…" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">
                  Request my quote
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
