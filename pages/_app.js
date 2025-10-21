// pages/_app.js

// This line imports your global CSS file, which is required for Tailwind CSS.
import '../styles/globals.scss'; 

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;