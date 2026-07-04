import Reveal from "./Reveal";
import styles from "./CoverageCard.module.css";

export default function CoverageCard({ number, title, description, index = 0 }) {
  return (
    <Reveal as="article" index={index} className={`card ${styles.card}`}>
      <span className={styles.number}>{number}</span>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </Reveal>
  );
}
