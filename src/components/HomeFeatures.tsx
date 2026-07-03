import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import SectionLabel from "./SectionLabel";

export default function HomeFeatures() {
  const { ref, isVisible } = useIntersectionObserver();

  const stats = [
    { value: "15+", label: "Projects Delivered" },
    { value: "3-4", label: "Days to Build Website" },
    { value: "4.9★", label: "Client Satisfaction" },
    { value: "10+", label: "Engineers" },
  ];

  const recentWork = [
    {
      title: "Arokya Plumbing Contractor",
      description: "Lead-focused website for 23+ years established contractor with 3,000+ projects",
      type: "Website",
      location: "Coimbatore",
      highlight: "24/7 Support Integration",
    },
    {
      title: "Yaazh Speciality Clinic",
      description:
        "Patient-first clinic website with doctor profiles, booking system, and accessibility",
      type: "Website",
      location: "Coimbatore",
      highlight: "WhatsApp Booking",
    },
    {
      title: "Elite 360 Turf Booking",
      description: "Live slot booking interface with transparent pricing and customer reviews",
      type: "Booking System",
      location: "Madurai",
      highlight: "Real-time Availability",
    },
  ];

  const whyUs = [
    {
      icon: "🏗️",
      title: "Built for Real Business",
      description: "Every website is engineered for your specific business goals — not templates",
    },
    {
      icon: "📍",
      title: "Local Market Experts",
      description: "Deep understanding of Tirunelveli and Tamil Nadu market dynamics",
    },
    {
      icon: "⚡",
      title: "Full-Stack Delivery",
      description: "Web, marketing, SEO, ads, and IoT — all capabilities in-house",
    },
    {
      icon: "📊",
      title: "Measurable Results",
      description: "Focus on metrics that matter: leads, conversions, ROI, rankings",
    },
    {
      icon: "🎓",
      title: "Technical Excellence",
      description: "ECE engineers with TCS NQT, RHCSA certifications and proven track record",
    },
    {
      icon: "🤝",
      title: "Partnership Approach",
      description: "We work as an extension of your team, not just a vendor",
    },
  ];

  return (
    <>
      {/* Recent Work Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            className="mb-12 md:mb-16 text-center"
            ref={ref}
            style={{ animation: "slideInUp 0.6s ease-out" }}
          >
            <SectionLabel align="center">Featured Work</SectionLabel>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
              Recent <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg mt-3 max-w-2xl mx-auto">
              From lead-generation websites to booking systems, we build solutions that drive real
              business results
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {recentWork.map((project, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{
                  animation: isVisible
                    ? `slideInUp 0.6s ease-out ${150 * idx + 100}ms forwards`
                    : "none",
                  opacity: isVisible ? 1 : 0,
                }}
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-secondary text-muted-foreground">
                    {project.type}
                  </span>
                  <span className="text-2xl">📍</span>
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <span className="text-xs text-muted-foreground">{project.location}</span>
                  <span className="text-xs font-mono font-semibold text-primary">
                    {project.highlight}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary text-primary hover:bg-primary/10 font-heading font-semibold transition-all"
            >
              View All Projects →
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 md:px-8 bg-gradient-to-b from-secondary/50 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="text-center p-6 rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm"
              >
                <div className="font-display text-3xl sm:text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-heading">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-20 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 md:mb-16 text-center">
            <SectionLabel align="center">Why Kural</SectionLabel>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
              Why Work With <span className="text-gradient">Us</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${100 * idx}ms` }}
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-heading text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 md:px-8 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Ready to <span className="text-gradient">Launch</span>?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss your project, timeline, and budget. No obligation, no fluff.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-heading font-semibold hover:shadow-lg transition-all"
          >
            Start Your Project →
          </a>
        </div>
      </section>
    </>
  );
}
