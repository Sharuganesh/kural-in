import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HomeFeatures from "@/components/HomeFeatures";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const SEO_KEYWORDS =
  "website development in tirunelveli, tirunelveli project center, project center in tirunelveli, tirunelveli website development company, web design tirunelveli, digital marketing tirunelveli, seo services tirunelveli, google ads tirunelveli, meta ads tirunelveli, social media management tirunelveli, google business profile setup, tirunelveli seo company, tamil nadu web development, tamil nadu digital marketing, website design tamil nadu, local seo tamil nadu, ecommerce website tamil nadu, business website tamil nadu, video editing services tamil nadu, motion graphics tamil nadu, branding and content";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Kural Innovations | Web Development & Digital Solutions" },
      {
        name: "description",
        content:
          "Kural Innovations is a Tirunelveli-based web, SEO, ads, and digital growth studio delivering high-impact websites and marketing across Tamil Nadu.",
      },
      {
        name: "keywords",
        content: SEO_KEYWORDS,
      },
      { name: "robots", content: "index, follow" },
      { name: "author", content: "Kural Innovations" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { property: "og:title", content: "Kural Innovations" },
      { property: "og:description", content: "Small Ideas. Powerful Solutions. Web, SEO, Ads, Social & Video" },
      { property: "og:url", content: "https://www.kural-innovations.in/" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.kural-innovations.in/logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Kural Innovations" },
      { name: "twitter:description", content: "Small Ideas. Powerful Solutions." },
      { name: "twitter:image", content: "https://www.kural-innovations.in/logo.png" },
    ],
    link: [
      { rel: "canonical", href: "https://www.kural-innovations.in/" },
    ],
  }),
});

function Index() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <HomeFeatures />
        <Footer />
      </div>
    </PageTransition>
  );
}
