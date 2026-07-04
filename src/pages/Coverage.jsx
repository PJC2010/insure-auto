import { Link } from "react-router-dom";
import SectionLabel from "../components/SectionLabel";
import CoverageCard from "../components/CoverageCard";
import Seo from "../components/Seo";
import { coverageCards, siteUrl } from "../data/content";
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
  return (
    <>
      <Seo
        title="Insurance Coverage: Auto, Home, Umbrella & More | Insure-Auto"
        description="Personal auto, homeowners, renters, commercial auto, umbrella, landlord, and specialty coverage — shopped across 40+ carriers by an independent broker."
        jsonLd={breadcrumbJsonLd}
      />
      <section className={styles.header}>
        <div className={`container ${styles.headerInner}`}>
          <SectionLabel>Coverage</SectionLabel>
          <h1 className={styles.title}>
            Coverage for the life you&rsquo;re building.
          </h1>
          <p className={styles.intro}>
            From your first car to your growing business, we shop the market
            so you don&rsquo;t have to. Explore the coverage we place every
            day — and reach out if you don&rsquo;t see exactly what you need.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            {coverageCards.map((card) => (
              <CoverageCard key={card.number} {...card} />
            ))}
          </div>

          <div className={styles.callout}>
            <div>
              <h2 className={styles.calloutTitle}>Not sure what you need?</h2>
              <p className={styles.calloutText}>
                Tell us a bit about your situation and we&rsquo;ll point you
                toward the right coverage — no obligation.
              </p>
            </div>
            <Link to="/quote" className="btn btn-primary">
              Request a quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
