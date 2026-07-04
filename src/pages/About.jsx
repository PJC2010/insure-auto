import { Link } from "react-router-dom";
import SectionLabel from "../components/SectionLabel";
import Reveal from "../components/Reveal";
import Seo from "../components/Seo";
import { aboutValues, siteUrl } from "../data/content";
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
  return (
    <>
      <Seo
        title="About Us | Family-Run Independent Broker in Conroe, TX | InsureAuto Agency"
        description="InsureAuto Agency has shopped the insurance market for Conroe & Greater Houston clients since []. Still family-run, still independent, still comparing 40+ carriers for every policy we place."
        jsonLd={breadcrumbJsonLd}
      />
      <section className={styles.header}>
        <div className="container">
          <SectionLabel>Our story</SectionLabel>
          <div className={styles.intro}>
            <h1 className={styles.title}>
              Family-run, shopping the market on your behalf since [].
            </h1>
            <div className={styles.introCopy}>
              <p>
                InsureAuto Agency was founded in [] on a simple idea: an
                insurance brokerage should work for the client, not for a
                single carrier. That idea still runs the business today.
              </p>
              <p>
                We&rsquo;re still family-run, still independent, and still
                comparing coverage across more than forty carriers so the
                households and businesses we serve get the right policy —
                not just the one on the shelf.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionLabel>What we stand for</SectionLabel>
          <ol className={styles.values}>
            {aboutValues.map((value, index) => (
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
          <h2 className={styles.ctaTitle}>
            Ready to see what independent looks like?
          </h2>
          <Link to="/quote" className="btn btn-primary">
            Request a quote
          </Link>
        </div>
      </section>
    </>
  );
}
