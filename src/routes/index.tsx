import { createFileRoute } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HomeFeatures from "@/components/HomeFeatures";
import GigShowcase from "@/components/GigShowcase";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const SEO_KEYWORDS =
  "website development in tirunelveli, tirunelveli project center, project center in tirunelveli, tirunelveli website development company, web design tirunelveli, digital marketing tirunelveli, seo services tirunelveli, google ads tirunelveli, meta ads tirunelveli, social media management tirunelveli, google business profile setup, tirunelveli seo company, tamil nadu web development, tamil nadu digital marketing, website design tamil nadu, local seo tamil nadu, ecommerce website tamil nadu, business website tamil nadu, video editing services tamil nadu, motion graphics tamil nadu, branding and content";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <PageTransition>
      <Helmet>
        <title>Kural Innovations | Web Development & Digital Solutions</title>
        <meta name="description" content="Kural Innovations is a Tirunelveli-based web, SEO, ads, and digital growth studio delivering high-impact websites and marketing across Tamil Nadu." />
        <meta name="keywords" content={SEO_KEYWORDS} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Kural Innovations" />
        <link rel="canonical" href="https://www.kural-innovations.in/" />
        <meta property="og:title" content="Kural Innovations | Web Development & Digital Solutions" />
        <meta property="og:description" content="Small Ideas. Powerful Solutions. Web, SEO, Ads, Social & Video" />
        <meta property="og:url" content="https://www.kural-innovations.in/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.kural-innovations.in/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kural Innovations" />
        <meta name="twitter:description" content="Small Ideas. Powerful Solutions." />
        <meta name="twitter:image" content="https://www.kural-innovations.in/logo.png" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <HomeFeatures />
        <GigShowcase />
        <Footer />
      </div>
    </PageTransition>
  );
}
