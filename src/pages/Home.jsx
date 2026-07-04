import { Link } from "react-router-dom";
import SectionLabel from "../components/SectionLabel";
import CoverageCard from "../components/CoverageCard";
import StarRating from "../components/StarRating";
import Faq from "../components/Faq";
import Reveal from "../components/Reveal";
import StatValue from "../components/StatValue";
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
        title="Auto & Home Insurance in Conroe & Greater Houston | InsureAuto Agency"
        description="Compare auto, home, and business insurance across 40+ carriers with one independent broker serving Conroe, The Woodlands, Spring & Greater Houston. Family-run since []. Free quotes back within one business day."
        jsonLd={faqJsonLd}
      />
      <section className={styles.hero}>
        <div className={styles.glow} />
        <div className={`container ${styles.heroInner}`}>
          <Reveal as="span" index={0} className="label">
            Independent Auto &amp; Home Brokers
          </Reveal>
          <Reveal as="h1" index={1} className={styles.heroTitle}>
            Insurance built around the life you&rsquo;ve built.
          </Reveal>
          <Reveal as="p" index={2} className={styles.heroSubhead}>
            We&rsquo;re an independent brokerage — not tied to any single
            carrier. We compare coverage across dozens of insurers and bring
            back the policy that actually fits your life, at a price that
            makes sense.
          </Reveal>
          <Reveal index={3} className={styles.heroActions}>
            <Link to="/quote" className="btn btn-primary">
              Request a quote
            </Link>
            <Link to="/coverage" className="btn btn-secondary">
              Explore coverage
            </Link>
          </Reveal>
          <Reveal index={4} className={styles.heroTrust}>
            <StarRating rating={4} />
            <span>
              <strong>4.0/5</strong> from 12+ reviews · Licensed in TX
            </span>
          </Reveal>
        </div>
      </section>

      <section className={styles.stats}>
        <div className={`container ${styles.statsGrid}`}>
          {homeStats.map((stat, index) => (
            <Reveal key={stat.label} index={index} className={styles.stat}>
              <StatValue
                className={styles.statValue}
                value={stat.value}
                index={index}
              />
              <span className={styles.statLabel}>{stat.label}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionLabel>What we cover</SectionLabel>
          <div className={styles.coverageGrid}>
            {homeCoverageCards.map((card, index) => (
              <CoverageCard key={card.number} index={index} {...card} />
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
            <Reveal as="h2" className={styles.whyTitle}>
              One broker, the whole market.
            </Reveal>
            <p className={styles.whyLead}>
              Captive agents can only sell you what their one carrier offers.
              We work for you, not a carrier — so every recommendation is
              built around your risk, not a sales quota.
            </p>
            <ol className={styles.reasons}>
              {whyIndependentReasons.map((reason, index) => (
                <Reveal
                  as="li"
                  key={reason.number}
                  index={index}
                  className={styles.reason}
                >
                  <span className={styles.reasonNumber}>{reason.number}</span>
                  <div>
                    <h3 className={styles.reasonTitle}>{reason.title}</h3>
                    <p className={styles.reasonDescription}>
                      {reason.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
          <div className={styles.whyPanel}>
            <span className={`${styles.panelRing} ${styles.panelRingOuter}`} />
            <span className={`${styles.panelRing} ${styles.panelRingInner}`} />
            <span className={styles.panelValue}>40+</span>
            <span className={styles.panelLabel}>Carriers compared</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionLabel>Google reviews</SectionLabel>
          <div className={styles.testimonialGrid}>
            {testimonials.map((item, index) => (
              <Reveal
                as="figure"
                className={`card ${styles.testimonialCard}`}
                key={item.attribution}
                index={index}
              >
                <StarRating rating={item.rating} />
                <blockquote className={styles.quote}>{item.quote}</blockquote>
                <figcaption className={styles.attribution}>
                  {item.attribution}
                  <span className={styles.attributionDetail}>{item.detail}</span>
                </figcaption>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionLabel>Frequently asked</SectionLabel>
          <Reveal as="h2" className={styles.faqTitle}>
            Answers before you ask.
          </Reveal>
          <Faq items={faqs} />
        </div>
      </section>

      <section className={styles.ctaBand}>
        <div className={`container ${styles.ctaInner}`}>
          <Reveal as="h2" className={styles.ctaTitle}>
            Fifteen minutes now can save you all year.
          </Reveal>
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
