import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const SEO_KEYWORDS =
  "website development in tirunelveli, tirunelveli project center, project center in tirunelveli, tirunelveli website development company, web design tirunelveli, digital marketing tirunelveli, seo services tirunelveli, google ads tirunelveli, meta ads tirunelveli, social media management tirunelveli, google business profile setup, tirunelveli seo company, tamil nadu web development, tamil nadu digital marketing, website design tamil nadu, local seo tamil nadu, ecommerce website tamil nadu, business website tamil nadu, video editing services tamil nadu, motion graphics tamil nadu, branding and content";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services | Web, SEO, Ads, Social & Video" },
      {
        name: "description",
        content:
          "Explore Kural Innovations' services: web development, SEO, Google & Meta ads, social media, video editing, IoT systems, and AI/ML solutions across Tamil Nadu.",
      },
      { name: "keywords", content: SEO_KEYWORDS },
      { name: "robots", content: "index, follow" },
      { name: "author", content: "Kural Innovations" },
      { property: "og:title", content: "Services - Kural Innovations" },
      { property: "og:description", content: "Web development, SEO, Ads, Social Media, Video Editing, IoT, and AI/ML" },
      { property: "og:url", content: "https://www.kural-innovations.in/services" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.kural-innovations.in/logo.png" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Our Services" },
      { name: "twitter:description", content: "Web, SEO, Ads, Social, Video, IoT & AI/ML" },
    ],
    link: [
      { rel: "canonical", href: "https://www.kural-innovations.in/services" },
    ],
  }),
});

function ServicesPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24">
          <ServicesSection />
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}
