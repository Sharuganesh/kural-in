import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import CompanyStory from "@/components/CompanyStory";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const SEO_KEYWORDS =
  "website development in tirunelveli, tirunelveli project center, project center in tirunelveli, tirunelveli website development company, web design tirunelveli, digital marketing tirunelveli, seo services tirunelveli, google ads tirunelveli, meta ads tirunelveli, social media management tirunelveli, google business profile setup, tirunelveli seo company, tamil nadu web development, tamil nadu digital marketing, website design tamil nadu, local seo tamil nadu, ecommerce website tamil nadu, business website tamil nadu, video editing services tamil nadu, motion graphics tamil nadu, branding and content";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Kural Innovations | Tirunelveli Innovation Studio" },
      {
        name: "description",
        content:
          "Learn about Kural Innovations, a Tirunelveli-based studio delivering web, marketing, and technology solutions across Tamil Nadu.",
      },
      { name: "keywords", content: SEO_KEYWORDS },
      { name: "robots", content: "index, follow" },
    ],
  }),
});

function AboutPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24">
          <CompanyStory />
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}
