import { createFileRoute } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import CompanyStory from "@/components/CompanyStory";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const SEO_KEYWORDS =
  "website development in tirunelveli, tirunelveli project center, project center in tirunelveli, tirunelveli website development company, web design tirunelveli, digital marketing tirunelveli, seo services tirunelveli, google ads tirunelveli, meta ads tirunelveli, social media management tirunelveli, google business profile setup, tirunelveli seo company, tamil nadu web development, tamil nadu digital marketing, website design tamil nadu, local seo tamil nadu, ecommerce website tamil nadu, business website tamil nadu, video editing services tamil nadu, motion graphics tamil nadu, branding and content";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageTransition>
      <Helmet>
        <title>About Kural Innovations | Student Startup from Tirunelveli, Tamil Nadu</title>
        <meta
          name="description"
          content="Learn about Kural Innovations, a student-founded tech studio in Tirunelveli delivering web development, IoT solutions, AI/ML projects, and student project guidance."
        />
        <meta name="keywords" content={SEO_KEYWORDS} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Kural Innovations" />
        <link rel="canonical" href="https://www.kural-innovations.in/about" />
        <meta property="og:title" content="About Kural Innovations | Student Startup" />
        <meta
          property="og:description"
          content="Student-founded tech studio in Tirunelveli offering web development, IoT, AI/ML, and project guidance."
        />
        <meta property="og:url" content="https://www.kural-innovations.in/about" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.kural-innovations.in/logo.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="About Kural Innovations" />
        <meta
          name="twitter:description"
          content="Student startup building tech solutions in Tirunelveli"
        />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-6">
          <CompanyStory />
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}
