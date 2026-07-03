import { createFileRoute } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const SEO_KEYWORDS =
  "website development in tirunelveli, tirunelveli project center, project center in tirunelveli, tirunelveli website development company, web design tirunelveli, digital marketing tirunelveli, seo services tirunelveli, google ads tirunelveli, meta ads tirunelveli, social media management tirunelveli, google business profile setup, tirunelveli seo company, tamil nadu web development, tamil nadu digital marketing, website design tamil nadu, local seo tamil nadu, ecommerce website tamil nadu, business website tamil nadu, video editing services tamil nadu, motion graphics tamil nadu, branding and content";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <PageTransition>
      <Helmet>
        <title>Services | Web Development, SEO, Ads, AI/ML & IoT in Tirunelveli</title>
        <meta
          name="description"
          content="Kural Innovations provides web development, SEO, Google & Meta ads, social media management, video editing, IoT systems, and AI/ML solutions in Tirunelveli, Tamil Nadu."
        />
        <meta name="keywords" content={SEO_KEYWORDS} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Kural Innovations" />
        <link rel="canonical" href="https://www.kural-innovations.in/services" />
        <meta property="og:title" content="Services - Kural Innovations | Tirunelveli" />
        <meta
          property="og:description"
          content="Web development, SEO, Ads, Social Media, Video Editing, IoT, and AI/ML solutions"
        />
        <meta property="og:url" content="https://www.kural-innovations.in/services" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.kural-innovations.in/logo.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Our Services" />
        <meta
          name="twitter:description"
          content="Web, SEO, Ads, Social, Video, IoT & AI/ML services in Tirunelveli"
        />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-6">
          <ServicesSection />
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}
