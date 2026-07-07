import { Link } from "react-router-dom";
import SectionLabel from "../components/SectionLabel";
import CoverageCard from "../components/CoverageCard";
import StarRating from "../components/StarRating";
import Faq from "../components/Faq";
import Reveal from "../components/Reveal";
import StatValue from "../components/StatValue";
import Seo from "../components/Seo";
import { useLanguage } from "../i18n/LanguageContext";
import { translations } from "../i18n/translations";
import styles from "./Home.module.css";

// JSON-LD stays in English (the canonical, search-indexed language of the site)
// regardless of the on-page language the visitor has chosen.
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: translations.en.faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const HOME_COVERAGE_NUMBERS = ["01", "02", "04"];

export default function Home() {
  const { L } = useLanguage();
  const t = L.home;
  const homeCoverageCards = L.coverageCards.filter((c) =>
    HOME_COVERAGE_NUMBERS.includes(c.number)
  );

  return (
    <>
      <Seo
        title={t.seoTitle}
        description="Compare auto, home, and business insurance across 40+ carriers with one independent broker serving Conroe, The Woodlands, Spring & Greater Houston. Family-run since 2000. Free quotes back within one business day."
        jsonLd={faqJsonLd}
      />
      <section className={styles.hero}>
        <div className={styles.glow} />
        <div className={`container ${styles.heroInner}`}>
          <Reveal as="span" index={0} className="label">
            {t.heroLabel}
          </Reveal>
          <Reveal as="h1" index={1} className={styles.heroTitle}>
            {t.heroTitle}
          </Reveal>
          <Reveal as="p" index={2} className={styles.heroSubhead}>
            {t.heroSubhead}
          </Reveal>
          <Reveal index={3} className={styles.heroActions}>
            <Link to="/quote" className="btn btn-primary">
              {t.heroCtaPrimary}
            </Link>
            <Link to="/coverage" className="btn btn-secondary">
              {t.heroCtaSecondary}
            </Link>
          </Reveal>
          <Reveal index={4} className={styles.heroTrust}>
            <StarRating rating={4} />
            <span>
              <strong>{t.heroTrustStrong}</strong>
              {t.heroTrustRest}
            </span>
          </Reveal>
        </div>
      </section>

      <section className={styles.stats}>
        <div className={`container ${styles.statsGrid}`}>
          {t.stats.map((stat, index) => (
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
          <SectionLabel>{t.coverageLabel}</SectionLabel>
          <div className={styles.coverageGrid}>
            {homeCoverageCards.map((card, index) => (
              <CoverageCard
                key={card.number}
                index={index}
                addPhotoLabel={L.coverageCardAddPhoto}
                {...card}
              />
            ))}
          </div>
          <Link to="/coverage" className={styles.viewAll}>
            {t.viewAll}
          </Link>
        </div>
      </section>

      <section className="section">
        <div className={`container ${styles.whyGrid}`}>
          <div className={styles.whyCopy}>
            <SectionLabel>{t.whyLabel}</SectionLabel>
            <Reveal as="h2" className={styles.whyTitle}>
              {t.whyTitle}
            </Reveal>
            <p className={styles.whyLead}>{t.whyLead}</p>
            <ol className={styles.reasons}>
              {t.whyReasons.map((reason, index) => (
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
            <span className={styles.panelValue}>{t.panelValue}</span>
            <span className={styles.panelLabel}>{t.panelLabel}</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionLabel>{t.reviewsLabel}</SectionLabel>
          <div className={styles.testimonialGrid}>
            {L.testimonials.map((item, index) => (
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
          <SectionLabel>{t.faqLabel}</SectionLabel>
          <Reveal as="h2" className={styles.faqTitle}>
            {t.faqTitle}
          </Reveal>
          <Faq items={L.faqs} />
        </div>
      </section>

      <section className={styles.ctaBand}>
        <div className={`container ${styles.ctaInner}`}>
          <Reveal as="h2" className={styles.ctaTitle}>
            {t.ctaTitle}
          </Reveal>
          <p className={styles.ctaSubtext}>{t.ctaSubtext}</p>
          <Link to="/quote" className="btn btn-primary">
            {t.ctaButton}
          </Link>
        </div>
      </section>
    </>
  );
}
