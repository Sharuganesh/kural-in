import { createFileRoute } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const SEO_KEYWORDS =
  "website development in tirunelveli, tirunelveli project center, project center in tirunelveli, tirunelveli website development company, web design tirunelveli, digital marketing tirunelveli, seo services tirunelveli, google ads tirunelveli, meta ads tirunelveli, social media management tirunelveli, google business profile setup, tirunelveli seo company, tamil nadu web development, tamil nadu digital marketing, website design tamil nadu, local seo tamil nadu, ecommerce website tamil nadu, business website tamil nadu, video editing services tamil nadu, motion graphics tamil nadu, branding and content";

export const Route = createFileRoute("/team")({
  component: TeamPage,
});

function TeamPage() {
  return (
    <PageTransition>
      <Helmet>
        <title>Team | Kural Innovations Founders & ECE Engineers</title>
        <meta
          name="description"
          content="Meet the team of ECE engineers behind Kural Innovations. Student founders from Tirunelveli specializing in web development, IoT, AI/ML, and embedded systems."
        />
        <meta name="keywords" content={SEO_KEYWORDS} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Kural Innovations" />
        <link rel="canonical" href="https://www.kural-innovations.in/team" />
        <meta property="og:title" content="Team - Kural Innovations Founders" />
        <meta
          property="og:description"
          content="ECE engineers specializing in web, IoT, and AI from Tirunelveli"
        />
        <meta property="og:url" content="https://www.kural-innovations.in/team" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.kural-innovations.in/logo.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Meet the Kural Innovations Team" />
        <meta
          name="twitter:description"
          content="ECE engineers from Tirunelveli building innovative solutions"
        />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-6">
          <TeamSection />
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}
