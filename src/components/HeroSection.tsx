import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-secondary/20"
    >
      {/* Subtle background */}
      <div className="absolute inset-0 circuit-grid opacity-5" />

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto w-full py-20">
        {/* Logo */}
        <div className="mx-auto mb-8 sm:mb-10">
          <img
            src={logo}
            alt="Kural Innovations - Student-founded tech studio from Tirunelveli offering web development, IoT, and AI/ML solutions"
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 mx-auto drop-shadow-lg"
            width={112}
            height={112}
            loading="eager"
            fetchPriority="high"
          />
        </div>

        {/* Main Heading */}
        <h1
          className="font-display font-bold tracking-wider mb-4 leading-tight"
          style={{ fontSize: "clamp(2rem, 7vw, 3.5rem)" }}
        >
          <span className="text-gradient">Web Development & Digital Growth</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
          Get a high-converting website, SEO ranking, and lead-generation system that turns visitors
          into customers.
        </p>

        {/* Services Quick List */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {["Web Development", "SEO & Rankings", "Lead Generation", "Digital Ads"].map(
            (service) => (
              <span
                key={service}
                className="px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-sm font-medium text-primary"
              >
                {service}
              </span>
            ),
          )}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            to="/contact"
            className="px-8 py-3 rounded-lg font-heading text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl"
          >
            Get Free Quote
          </Link>
          <Link
            to="/projects"
            className="px-8 py-3 rounded-lg font-heading text-base font-semibold border-2 border-primary text-primary hover:bg-primary/10 transition-all"
          >
            View Our Work
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 pt-8 border-t border-border/50">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-primary">17+</div>
            <div className="text-xs sm:text-sm text-muted-foreground mt-1">Projects Done</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-primary">4.9★</div>
            <div className="text-xs sm:text-sm text-muted-foreground mt-1">Client Rating</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-primary">3-4</div>
            <div className="text-xs sm:text-sm text-muted-foreground mt-1">Days Launch</div>
          </div>
          <div className="hidden sm:block text-center">
            <div className="text-2xl sm:text-3xl font-bold text-primary">100%</div>
            <div className="text-xs sm:text-sm text-muted-foreground mt-1">Transparency</div>
          </div>
        </div>
      </div>
    </section>
  );
}
