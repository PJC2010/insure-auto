// components/ServiceCard.js
import Link from 'next/link';
import { useTranslation } from 'next-i18next/pages';
import styles from './ServiceCard.module.scss';

export default function ServiceCard({ title, description, icon, link }) {
  const { t } = useTranslation('common');

  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>

      <Link
        href={link}
        className={styles.link}
      >
        {t('serviceCard.learnMore')}
        <svg
          className="ml-2 w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </Link>
    </div>
  );
}
