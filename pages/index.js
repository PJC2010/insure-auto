// pages/index.js
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import Link from 'next/link';

export default function Home() {
  // Data for the featured services on the home page
  const featuredServices = [
    {
      title: 'Personal Auto Insurance',
      description: 'Get the right coverage for your car and family. We offer competitive rates and customized plans.',
      icon: '🚗',
      link: '/get-a-quote?service=personal-auto'
    },
    {
      title: 'Home Insurance',
      description: 'Safeguard your most valuable asset. Our policies provide protection against unforeseen events.',
      icon: '🏠',
      link: '/get-a-quote?service=home-insurance'
    },
    {
      title: 'Renters Insurance',
      description: 'Your belongings need protection. Cover your personal property and get liability protection.',
      icon: '🛋️',
      link: '/get-a-quote?service=renters-insurance'
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <Hero />

      {/* Introduction Section */}
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Protecting What Matters Most</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            At InsurAuto Agency, we understand that life's journey comes with unexpected turns. That's why we're dedicated to providing comprehensive insurance solutions tailored to your unique needs.
          </p>
          <Link href="/about" className="text-blue-600 hover:text-blue-800 font-semibold text-lg">
            Learn More About Us &rarr;
          </Link>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/services" className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="bg-gray-100 p-8 rounded-lg shadow-md">
            <p className="text-gray-700 text-xl italic mb-6">
              "InsurAuto Agency made the entire process so easy. Their team was responsive, knowledgeable, and found me the perfect auto policy at a great price. I finally feel protected!"
            </p>
            <p className="text-gray-900 font-bold text-right">- Placeholder Name, Local Resident</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 text-center bg-blue-700 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">Secure your future with InsurAuto Agency today.</p>
          <Link href="/get-a-quote" className="bg-white text-blue-700 px-10 py-4 rounded-full text-xl font-semibold hover:bg-gray-100 transition-colors">
            Get Your Free Quote
          </Link>
        </div>
      </section>
    </Layout>
  );
}