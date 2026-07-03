// components/LanguageSwitcher.js
import { useTranslation } from 'next-i18next/pages';
import { useRouter } from 'next/router';
import styles from './LanguageSwitcher.module.scss';

export default function LanguageSwitcher() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const { pathname, asPath, query, locale } = router;
  const otherLocale = locale === 'es' ? 'en' : 'es';

  return (
    <button
      type="button"
      className={styles.switcher}
      aria-label={t('languageSwitcher.label')}
      onClick={() => router.push({ pathname, query }, asPath, { locale: otherLocale })}
    >
      {t(`languageSwitcher.${otherLocale}`)}
    </button>
  );
}
