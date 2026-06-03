import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const SEO_KEYWORDS =
  "website development in tirunelveli, tirunelveli project center, project center in tirunelveli, tirunelveli website development company, web design tirunelveli, digital marketing tirunelveli, seo services tirunelveli, google ads tirunelveli, meta ads tirunelveli, social media management tirunelveli, google business profile setup, tirunelveli seo company, tamil nadu web development, tamil nadu digital marketing, website design tamil nadu, local seo tamil nadu, ecommerce website tamil nadu, business website tamil nadu, video editing services tamil nadu, motion graphics tamil nadu, branding and content";

export const Route = createFileRoute("/team")({
  component: TeamPage,
  head: () => ({
    meta: [
      { title: "Team | Kural Innovations Founders" },
      {
        name: "description",
        content:
          "Meet the ECE engineers behind Kural Innovations. Specialized in backend infrastructure, frontend UI/UX, IoT systems, and AI/ML solutions.",
      },
      { name: "keywords", content: SEO_KEYWORDS },
      { name: "robots", content: "index, follow" },
      { name: "author", content: "Kural Innovations" },
      { property: "og:title", content: "Team - Kural Innovations" },
      { property: "og:description", content: "ECE engineers specializing in web, IoT, and AI" },
      { property: "og:url", content: "https://www.kural-innovations.in/team" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.kural-innovations.in/logo.png" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Meet the Team" },
      { name: "twitter:description", content: "ECE engineers from Tirunelveli" },
    ],
    link: [
      { rel: "canonical", href: "https://www.kural-innovations.in/team" },
    ],
  }),
});

function TeamPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24">
          <TeamSection />
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}
