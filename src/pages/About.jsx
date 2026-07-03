import { Link } from "react-router-dom";
import SectionLabel from "../components/SectionLabel";
import { aboutValues } from "../data/content";
import styles from "./About.module.css";

export default function About() {
  return (
    <>
      <section className={styles.header}>
        <div className="container">
          <SectionLabel>Our story</SectionLabel>
          <div className={styles.intro}>
            <h1 className={styles.title}>
              Two decades of shopping the market on your behalf.
            </h1>
            <div className={styles.introCopy}>
              <p>
                Insure-Auto was founded in 2004 on a simple idea: an insurance
                brokerage should work for the client, not for a single
                carrier. Two decades later, that idea still runs the
                business.
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
            {aboutValues.map((value) => (
              <li key={value.number} className={styles.value}>
                <span className={styles.valueNumber}>{value.number}</span>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDescription}>{value.description}</p>
              </li>
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
