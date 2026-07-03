import styles from "./CoverageCard.module.css";

export default function CoverageCard({ number, title, description }) {
  return (
    <article className={`card ${styles.card}`}>
      <span className={styles.number}>{number}</span>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </article>
  );
}
