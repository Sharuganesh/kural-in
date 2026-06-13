import { createFileRoute } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import ContactDetails from "@/components/ContactDetails";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const SEO_KEYWORDS =
  "website development in tirunelveli, tirunelveli project center, project center in tirunelveli, tirunelveli website development company, web design tirunelveli, digital marketing tirunelveli, seo services tirunelveli, google ads tirunelveli, meta ads tirunelveli, social media management tirunelveli, google business profile setup, tirunelveli seo company, tamil nadu web development, tamil nadu digital marketing, website design tamil nadu, local seo tamil nadu, ecommerce website tamil nadu, business website tamil nadu, video editing services tamil nadu, motion graphics tamil nadu, branding and content";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageTransition>
      <Helmet>
        <title>Contact Kural Innovations | Tirunelveli Tech Studio</title>
        <meta name="description" content="Get in touch with Kural Innovations in Tirunelveli. Contact us for web development, SEO, digital marketing, IoT, and AI/ML projects." />
        <meta name="keywords" content={SEO_KEYWORDS} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Kural Innovations" />
        <link rel="canonical" href="https://www.kural-innovations.in/contact" />
        <meta property="og:title" content="Contact - Kural Innovations" />
        <meta property="og:description" content="Contact us for web development, SEO, ads, and IoT projects in Tirunelveli" />
        <meta property="og:url" content="https://www.kural-innovations.in/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.kural-innovations.in/logo.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Contact Kural Innovations" />
        <meta name="twitter:description" content="Get in touch with us in Tirunelveli" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-6">
          <ContactDetails />
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}
