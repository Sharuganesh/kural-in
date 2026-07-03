import { createFileRoute } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const SEO_KEYWORDS =
  "website development in tirunelveli, tirunelveli project center, project center in tirunelveli, tirunelveli website development company, web design tirunelveli, digital marketing tirunelveli, seo services tirunelveli, google ads tirunelveli, meta ads tirunelveli, social media management tirunelveli, google business profile setup, tirunelveli seo company, tamil nadu web development, tamil nadu digital marketing, website design tamil nadu, local seo tamil nadu, ecommerce website tamil nadu, business website tamil nadu, video editing services tamil nadu, motion graphics tamil nadu, branding and content";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <PageTransition>
      <Helmet>
        <title>Portfolio | Kural Innovations Projects & Case Studies</title>
        <meta
          name="description"
          content="View Kural Innovations' portfolio of 14+ projects including websites, IoT systems, and AI solutions built for businesses across Tirunelveli and Tamil Nadu."
        />
        <meta name="keywords" content={SEO_KEYWORDS} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Kural Innovations" />
        <link rel="canonical" href="https://www.kural-innovations.in/projects" />
        <meta property="og:title" content="Portfolio - Kural Innovations" />
        <meta
          property="og:description"
          content="14+ delivered projects in web development, IoT, and AI"
        />
        <meta property="og:url" content="https://www.kural-innovations.in/projects" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.kural-innovations.in/logo.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Our Projects" />
        <meta name="twitter:description" content="14+ delivered projects in web, IoT, and AI" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-6">
          <ProjectsSection />
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}
