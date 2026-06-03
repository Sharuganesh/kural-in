import SectionLabel from "./SectionLabel";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function CompanyStory() {
  const { ref, isVisible } = useIntersectionObserver();

  const values = [
    {
      icon: "🎯",
      title: "Problem First",
      description:
        "We start by understanding the real problem you're solving, not by suggesting the fanciest solution.",
    },
    {
      icon: "⚡",
      title: "Practical Engineering",
      description: "Clean code, working systems, minimal scope. We build what's needed, not what's cool.",
    },
    {
      icon: "📍",
      title: "Local Roots",
      description:
        "Deep understanding of Tamil Nadu market. We know what works in Tirunelveli, Coimbatore, Madurai.",
    },
    {
      icon: "🤝",
      title: "Long-term Partners",
      description: "We measure success by your success — repeat work and referrals matter more than one-time deals.",
    },
  ];

  const timeline = [
    {
      year: "2023",
      milestone: "Founded",
      description: "Four ECE engineers from Tirunelveli started building for real businesses instead of corporates.",
    },
    {
      year: "2024",
      milestone: "First 10 Projects",
      description: "Delivered websites, IoT systems, and marketing solutions. Established strong local reputation.",
    },
    {
      year: "2025",
      milestone: "Expertise Certified",
      description:
        "Team cleared TCS NQT Digital certification, RHCSA-certified infrastructure engineers. Expanded to full-stack services.",
    },
    {
      year: "2026",
      milestone: "Present",
      description:
        "50+ successful projects across web, marketing, IoT, and AI/ML. Trusted by clinics, contractors, gyms, and restaurants.",
    },
  ];

  return (
    <>
      {/* Our Story Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center" ref={ref} style={{ animation: "slideInUp 0.6s ease-out" }}>
            <SectionLabel align="center">Our Story</SectionLabel>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              How <span className="text-gradient">Kural</span> Started
            </h2>
          </div>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed" style={{ animation: "slideInUp 0.6s ease-out 0.1s both" }}>
            <p>
              Four ECE (Electronics and Communication Engineering) students from Tirunelveli had a choice: join a corporation or build something real.
            </p>

            <p>
              We spent years building projects for others—tech that worked, customers that were satisfied, but no ownership. We realized we wanted to build for businesses we believed in: local clinics, contractors with 20+ years of experience, gyms, restaurants. The kind of businesses that don't need venture funding or hype, they need results.
            </p>

            <p>
              So we started <strong>Kural Innovations</strong> — a "build lab" where ideas are engineered into real solutions. The name comes from the ancient Tamil text Thirukkural: short wisdom that creates powerful impact. That's our philosophy.
            </p>

            <p>
              Today, we're a team of ECE engineers, some with TCS NQT Digital certifications, some RHCSA-certified in infrastructure. We build websites that convert, marketing strategies that work in local markets, IoT systems with real dashboards, and AI models that predict measurable outcomes. We've deployed energy monitors in factories, gas detection systems in restaurants, and booking interfaces that process hundreds of transactions daily.
            </p>

            <p className="text-primary font-semibold">
              Every project solves a real problem for a real business. No mockups. No promises. Working systems.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 md:px-8 bg-secondary/50">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <SectionLabel align="center">Our Values</SectionLabel>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
              How We <span className="text-gradient">Work</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, idx) => (
              <div
                key={idx}
                className={`p-8 rounded-2xl border border-border bg-background transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${150 * idx}ms` }}
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="font-heading text-2xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <SectionLabel align="center">Journey</SectionLabel>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
              Our <span className="text-gradient">Timeline</span>
            </h2>
          </div>

          <div className="space-y-8">
            {timeline.map((item, idx) => (
              <div
                key={idx}
                className={`relative pl-8 transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                }`}
                style={{ transitionDelay: `${100 * idx}ms` }}
              >
                <div className="absolute left-0 top-2 w-5 h-5 rounded-full bg-primary border-4 border-background" />
                <div className="font-mono text-sm text-primary font-bold">{item.year}</div>
                <h3 className="font-heading text-xl font-bold mt-1 mb-2">{item.milestone}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 md:px-8 bg-secondary/50">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <SectionLabel align="center">Team</SectionLabel>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Meet the <span className="text-gradient">Engineers</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Four ECE engineers from Tirunelveli — certified, experienced, and committed to building real solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl border border-border bg-background">
              <h3 className="font-heading text-xl font-bold">Backend & Infrastructure</h3>
              <p className="text-muted-foreground mt-2">
                Firebase, REST APIs, database design, and infrastructure automation. RHCSA-certified. Built systems processing 1000s of daily transactions.
              </p>
            </div>
            <div className="p-8 rounded-2xl border border-border bg-background">
              <h3 className="font-heading text-xl font-bold">Frontend & UI/UX</h3>
              <p className="text-muted-foreground mt-2">
                React, TypeScript, Tailwind CSS, animations. Responsive design specialist. Previously designed interfaces for 500k+ users.
              </p>
            </div>
            <div className="p-8 rounded-2xl border border-border bg-background">
              <h3 className="font-heading text-xl font-bold">IoT & Embedded Systems</h3>
              <p className="text-muted-foreground mt-2">
                ESP8266, ESP32, sensor integration, real-time dashboards. Deployed energy monitors, gas detectors, motion sensors in live systems.
              </p>
            </div>
            <div className="p-8 rounded-2xl border border-border bg-background">
              <h3 className="font-heading text-xl font-bold">AI/ML & Data Science</h3>
              <p className="text-muted-foreground mt-2">
                LightGBM, TensorFlow, predictive models, data analysis. Built IS-TEWS tsunami prediction model with AUC 0.9957.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 md:py-24 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Want to Work With <span className="text-gradient">Us</span>?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            If your business needs a real solution, let's talk.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-heading font-semibold hover:shadow-lg transition-all"
          >
            Get in Touch →
          </a>
        </div>
      </section>
    </>
  );
}
