import { Link } from "react-router-dom";
import SectionLabel from "../components/SectionLabel";
import CoverageCard from "../components/CoverageCard";
import StarRating from "../components/StarRating";
import Faq from "../components/Faq";
import Seo from "../components/Seo";
import {
  homeStats,
  homeCoverageCards,
  whyIndependentReasons,
  testimonials,
  faqs,
} from "../data/content";
import styles from "./Home.module.css";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function Home() {
  return (
    <>
      <Seo
        title="Auto & Home Insurance Quotes | Independent Broker | Insure-Auto"
        description="Compare auto, home, and business insurance across 40+ carriers with one independent broker. Family-run since 2004. Free quotes back within one business day."
        jsonLd={faqJsonLd}
      />
      <section className={styles.hero}>
        <div className={styles.glow} />
        <div className={`container ${styles.heroInner}`}>
          <span className="label">Independent Auto &amp; Home Brokers</span>
          <h1 className={styles.heroTitle}>
            Insurance built around the life you&rsquo;ve built.
          </h1>
          <p className={styles.heroSubhead}>
            We&rsquo;re an independent brokerage — not tied to any single
            carrier. We compare coverage across dozens of insurers and bring
            back the policy that actually fits your life, at a price that
            makes sense.
          </p>
          <div className={styles.heroActions}>
            <Link to="/quote" className="btn btn-primary">
              Request a quote
            </Link>
            <Link to="/coverage" className="btn btn-secondary">
              Explore coverage
            </Link>
          </div>
          <div className={styles.heroTrust}>
            <StarRating rating={5} />
            <span>
              <strong>4.9/5</strong> from 312+ clients · Licensed OR · WA · CA
              · ID
            </span>
          </div>
        </div>
      </section>

      <section className={styles.stats}>
        <div className={`container ${styles.statsGrid}`}>
          {homeStats.map((stat) => (
            <div key={stat.label} className={styles.stat}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionLabel>What we cover</SectionLabel>
          <div className={styles.coverageGrid}>
            {homeCoverageCards.map((card) => (
              <CoverageCard key={card.number} {...card} />
            ))}
          </div>
          <Link to="/coverage" className={styles.viewAll}>
            View all coverage →
          </Link>
        </div>
      </section>

      <section className="section">
        <div className={`container ${styles.whyGrid}`}>
          <div className={styles.whyCopy}>
            <SectionLabel>Why independent</SectionLabel>
            <h2 className={styles.whyTitle}>
              One broker, the whole market.
            </h2>
            <p className={styles.whyLead}>
              Captive agents can only sell you what their one carrier offers.
              We work for you, not a carrier — so every recommendation is
              built around your risk, not a sales quota.
            </p>
            <ol className={styles.reasons}>
              {whyIndependentReasons.map((reason) => (
                <li key={reason.number} className={styles.reason}>
                  <span className={styles.reasonNumber}>{reason.number}</span>
                  <div>
                    <h3 className={styles.reasonTitle}>{reason.title}</h3>
                    <p className={styles.reasonDescription}>
                      {reason.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className={styles.whyPanel}>
            <span className={styles.panelValue}>40+</span>
            <span className={styles.panelLabel}>Carriers compared</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionLabel>Client stories</SectionLabel>
          <div className={styles.testimonialGrid}>
            {testimonials.map((item) => (
              <figure className={`card ${styles.testimonialCard}`} key={item.attribution}>
                <StarRating rating={item.rating} />
                <blockquote className={styles.quote}>{item.quote}</blockquote>
                <figcaption className={styles.attribution}>
                  {item.attribution}
                  <span className={styles.attributionDetail}>{item.detail}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionLabel>Frequently asked</SectionLabel>
          <h2 className={styles.faqTitle}>Answers before you ask.</h2>
          <Faq items={faqs} />
        </div>
      </section>

      <section className={styles.ctaBand}>
        <div className={`container ${styles.ctaInner}`}>
          <h2 className={styles.ctaTitle}>
            Fifteen minutes now can save you all year.
          </h2>
          <p className={styles.ctaSubtext}>
            Send us the basics and a broker will have options back to you
            within one business day.
          </p>
          <Link to="/quote" className="btn btn-primary">
            Request a quote
          </Link>
        </div>
      </section>
    </>
  );
}
