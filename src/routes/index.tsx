import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Kural Innovations | Web Development & Digital Solutions" },
      {
        name: "description",
        content:
          "Kural Innovations is a technology-driven innovation studio based in Tamil Nadu, transforming small ideas into powerful real-world solutions.",
      },
      {
        name: "keywords",
        content: "Kural Innovations, web development, Tamil Nadu tech company, digital solutions, startup development",
      },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Kural Innovations" },
      { property: "og:description", content: "Small Ideas. Powerful Solutions." },
      { property: "og:url", content: "https://www.kural-innovations.in" },
      { property: "og:type", content: "website" },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
