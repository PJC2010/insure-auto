import Reveal from "./Reveal";
import styles from "./CoverageCard.module.css";

export default function CoverageCard({
  number,
  title,
  description,
  image,
  imageHint,
  addPhotoLabel = "Add a photo",
  index = 0,
}) {
  const hint = imageHint || title;
  return (
    <Reveal as="article" index={index} className={`card ${styles.card}`}>
      <div className={styles.media}>
        {image ? (
          <img className={styles.image} src={image} alt={title} />
        ) : (
          <div className={styles.placeholder}>
            <span className={styles.hint}>{hint}</span>
            <span className={styles.addPhoto}>{addPhotoLabel}</span>
          </div>
        )}
      </div>
      <div className={styles.content}>
        <span className={styles.number}>{number}</span>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </Reveal>
  );
}
