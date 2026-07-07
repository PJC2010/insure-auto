import { Link } from "react-router-dom";
import SectionLabel from "../components/SectionLabel";
import Reveal from "../components/Reveal";
import Seo from "../components/Seo";
import { siteUrl } from "../data/content";
import { useLanguage } from "../i18n/LanguageContext";
import styles from "./About.module.css";

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "About", item: `${siteUrl}/about` },
  ],
};

export default function About() {
  const { L } = useLanguage();
  const t = L.about;

  return (
    <>
      <Seo
        title={t.seoTitle}
        description="InsureAuto Agency has shopped the insurance market for Conroe & Greater Houston clients since 2000. Still family-run, still independent, still comparing 40+ carriers for every policy we place."
        jsonLd={breadcrumbJsonLd}
      />
      <section className={styles.header}>
        <div className="container">
          <SectionLabel>{t.label}</SectionLabel>
          <div className={styles.intro}>
            <h1 className={styles.title}>{t.title}</h1>
            <div className={styles.introCopy}>
              {t.introParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionLabel>{t.valuesLabel}</SectionLabel>
          <ol className={styles.values}>
            {t.values.map((value, index) => (
              <Reveal
                as="li"
                key={value.number}
                index={index}
                className={styles.value}
              >
                <span className={styles.valueNumber}>{value.number}</span>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDescription}>{value.description}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.ctaBand}>
        <div className={`container ${styles.ctaInner}`}>
          <h2 className={styles.ctaTitle}>{t.ctaTitle}</h2>
          <Link to="/quote" className="btn btn-primary">
            {t.ctaButton}
          </Link>
        </div>
      </section>
    </>
  );
}
