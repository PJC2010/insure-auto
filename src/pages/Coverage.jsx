import { Link } from "react-router-dom";
import SectionLabel from "../components/SectionLabel";
import CoverageCard from "../components/CoverageCard";
import Seo from "../components/Seo";
import { siteUrl } from "../data/content";
import { useLanguage } from "../i18n/LanguageContext";
import styles from "./Coverage.module.css";

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Coverage", item: `${siteUrl}/coverage` },
  ],
};

export default function Coverage() {
  const { L } = useLanguage();
  const t = L.coverage;

  return (
    <>
      <Seo
        title={t.seoTitle}
        description="Personal auto, homeowners, renters, commercial auto, umbrella, landlord, and specialty coverage for Conroe, The Woodlands & Greater Houston — shopped across 40+ carriers by an independent broker."
        jsonLd={breadcrumbJsonLd}
      />
      <section className={styles.header}>
        <div className={`container ${styles.headerInner}`}>
          <SectionLabel>{t.label}</SectionLabel>
          <h1 className={styles.title}>{t.title}</h1>
          <p className={styles.intro}>{t.intro}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            {L.coverageCards.map((card, index) => (
              <CoverageCard
                key={card.number}
                index={index}
                addPhotoLabel={L.coverageCardAddPhoto}
                {...card}
              />
            ))}
          </div>

          <div className={styles.callout}>
            <div>
              <h2 className={styles.calloutTitle}>{t.calloutTitle}</h2>
              <p className={styles.calloutText}>{t.calloutText}</p>
            </div>
            <Link to="/quote" className="btn btn-primary">
              {t.calloutButton}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
