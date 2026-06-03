import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import ContactDetails from "@/components/ContactDetails";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const SEO_KEYWORDS =
  "website development in tirunelveli, tirunelveli project center, project center in tirunelveli, tirunelveli website development company, web design tirunelveli, digital marketing tirunelveli, seo services tirunelveli, google ads tirunelveli, meta ads tirunelveli, social media management tirunelveli, google business profile setup, tirunelveli seo company, tamil nadu web development, tamil nadu digital marketing, website design tamil nadu, local seo tamil nadu, ecommerce website tamil nadu, business website tamil nadu, video editing services tamil nadu, motion graphics tamil nadu, branding and content";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact | Kural Innovations" },
      {
        name: "description",
        content:
          "Get in touch with Kural Innovations. Contact us for web development, SEO, marketing, or IoT projects in Tirunelveli and Tamil Nadu.",
      },
      { name: "keywords", content: SEO_KEYWORDS },
      { name: "robots", content: "index, follow" },
      { name: "author", content: "Kural Innovations" },
      { property: "og:title", content: "Contact - Kural Innovations" },
      { property: "og:description", content: "Let's discuss your project" },
      { property: "og:url", content: "https://www.kural-innovations.in/contact" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.kural-innovations.in/logo.png" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Get in Touch" },
      { name: "twitter:description", content: "Contact Kural Innovations" },
    ],
    link: [
      { rel: "canonical", href: "https://www.kural-innovations.in/contact" },
    ],
  }),
});

function ContactPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24">
          <ContactDetails />
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}
