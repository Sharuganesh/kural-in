import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const SEO_KEYWORDS =
  "website development in tirunelveli, tirunelveli project center, project center in tirunelveli, tirunelveli website development company, web design tirunelveli, digital marketing tirunelveli, seo services tirunelveli, google ads tirunelveli, meta ads tirunelveli, social media management tirunelveli, google business profile setup, tirunelveli seo company, tamil nadu web development, tamil nadu digital marketing, website design tamil nadu, local seo tamil nadu, ecommerce website tamil nadu, business website tamil nadu, video editing services tamil nadu, motion graphics tamil nadu, branding and content";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
  head: () => ({
    meta: [
      { title: "Projects | Kural Innovations Portfolio" },
      {
        name: "description",
        content:
          "View Kural Innovations' portfolio of 15+ projects including websites, IoT systems, and AI solutions built for businesses across Tirunelveli and Tamil Nadu.",
      },
      { name: "keywords", content: SEO_KEYWORDS },
      { name: "robots", content: "index, follow" },
      { name: "author", content: "Kural Innovations" },
      { property: "og:title", content: "Portfolio - Kural Innovations" },
      { property: "og:description", content: "15+ projects delivering web, IoT, and AI solutions" },
      { property: "og:url", content: "https://www.kural-innovations.in/projects" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.kural-innovations.in/logo.png" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Our Projects" },
      { name: "twitter:description", content: "15+ delivered projects" },
    ],
    link: [
      { rel: "canonical", href: "https://www.kural-innovations.in/projects" },
    ],
  }),
});

function ProjectsPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24">
          <ProjectsSection />
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}
