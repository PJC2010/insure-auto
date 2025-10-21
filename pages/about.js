// pages/about.js
import Layout from '../components/Layout';
import Head from 'next/head';

export default function About() {
  const pageTitle = 'About InsurAuto Agency | Your Local Insurance Partner';
  const pageDescription =
    'Learn about InsurAuto Agency, our mission, and our dedicated team. We are committed to protecting our community with reliable insurance solutions.';

  return (
    <Layout>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        
        {/* Open Graph (OG) tags for social media sharing */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        {/* Replace with your full URL */}
        <meta property="og:url" content="https://www.insurauto.com/about" /> 
        {/* Replace with an image URL for social sharing */}
        <meta property="og:image" content="https://www.insurauto.com/images/social-share-image.jpg" /> 

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content="https://www.insurauto.com/images/social-share-image.jpg" />
      </Head>
      
      {/* ... (rest of your page content) ... */}
      
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-extrabold text-center mb-12 text-neutral-900">
          About InsurAuto Agency
        </h1>
        {/* ... (rest of your placeholder text and images) ... */}
      </div>
    </Layout>
  );
}