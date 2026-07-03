// pages/_app.js

// This line imports your global CSS file, which is required for Tailwind CSS.
import '../styles/globals.scss';
import { appWithTranslation } from 'next-i18next/pages';
import nextI18NextConfig from '../next-i18next.config.js';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp, nextI18NextConfig);