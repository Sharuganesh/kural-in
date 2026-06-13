import { useRef, useEffect, useState } from "react";
import SectionLabel from "./SectionLabel";
import { useTilt } from "@/hooks/useTilt";
import arokyaImg from "@/assets/arokya.png";
import yaazhImg from "@/assets/yaazh.png";
import turfImg from "@/assets/turf.png";
import fitnessImg from "@/assets/fitness-studio.jpeg";
import clinicImg from "@/assets/clinic.jpeg";
import braidalecommerceImg from "@/assets/bridal-ecommerce.png";
import industrialEnergyImg from "@/assets/industrial-energy.png";
import isteewsImg from "@/assets/is-tews.png";
import predictiveMaintenance from "@/assets/predictive-maintenance.jpeg";
import smartRestaurantImg from "@/assets/smart-restaurant.png";

function useIntersection(margin = "-100px") {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { rootMargin: margin },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [margin]);
  return { ref, visible };
}

const services = [
  {
    icon: "🌐",
    title: "Web Development",
    desc: "Your website is often the first impression. We build sites that load fast, look right on mobile, and are structured for Google from the first line of code. We've built for clinics, gyms, turf grounds, contractors, and e-commerce — each one built for the specific business, not a template.",
    tech: ["React", "Vite", "Tailwind", "SEO"],
  },
  {
    icon: "📈",
    title: "SEO & Local Rankings",
    desc: "When someone in your city searches for what you offer, you should show up. We handle on-page SEO, local schema markup, Google Search Console setup, sitemap submission, and content that targets the right keywords — in Tirunelveli, Coimbatore, and across Tamil Nadu.",
    tech: ["Local SEO", "Schema", "Analytics", "Content"],
  },
  {
    icon: "🎯",
    title: "Meta + Google Ads",
    desc: "We set up and manage campaigns that actually spend your budget on people likely to become customers. That means pixel setup, proper audience targeting, A/B testing creatives, and weekly performance reviews.",
    tech: ["Meta Ads", "Google Ads", "Pixel", "GA4"],
  },
  {
    icon: "📣",
    title: "Social Media Handling",
    desc: "Consistent presence builds trust. We handle content calendars, caption writing, reel creation, and posting schedules so your brand shows up regularly — without you doing it yourself.",
    tech: ["Reels", "Branding", "Copy", "Insights"],
  },
  {
    icon: "📍",
    title: "Google Business Setup",
    desc: "Your Google Maps listing is free visibility. We set it up correctly, write the description, upload photos, manage review responses, and optimize for local pack rankings.",
    tech: ["GMB", "Maps", "Reviews", "NAP"],
  },
  {
    icon: "🎬",
    title: "Video Editing & Motion",
    desc: "Whether it's a 30-second reel for Instagram or a 3-minute clinic tour, we edit for retention and engagement — with motion text, color grading, sound design, and subtitles included.",
    tech: ["Premiere", "After Effects", "Reels", "Motion"],
  },
  {
    icon: "📡",
    title: "IoT Systems",
    desc: "We've deployed real IoT systems — energy monitors, gas detectors, restaurant ordering — on ESP8266 and ESP32 with Firebase backends. If you need connected hardware with a real-time dashboard, we build it end-to-end.",
    tech: ["ESP8266", "ESP32", "Firebase", "REST API"],
  },
  {
    icon: "🔬",
    title: "AI/ML Solutions",
    desc: "From our IS-TEWS tsunami prediction model (AUC 0.9957) to predictive maintenance on industrial motors, we build ML systems that solve measurable problems — not proof-of-concept projects that go nowhere.",
    tech: ["LightGBM", "TensorFlow", "Flask", "Pandas"],
  },
];

export default function ServicesSection() {
  const { ref, visible } = useIntersection();
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY * 0.08);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="services" className="relative py-32 px-6 bg-secondary/30" ref={ref}>
      <div className="absolute inset-0 circuit-grid opacity-[0.06]" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        >
          <SectionLabel align="center">Services</SectionLabel>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
            Everything Your Business Needs to <span className="text-gradient">Grow Online</span>
          </h2>
          <p className="font-heading text-muted-foreground mt-6 max-w-3xl mx-auto text-base sm:text-lg">
            We work with clinics, contractors, gyms, restaurants, and local businesses across Tamil Nadu. Whether you're starting from nothing or trying to get more customers from an existing setup, we handle the full picture — website, ads, social, and SEO.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} visible={visible} />
          ))}
        </div>

        <div className="mt-16 space-y-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <SectionLabel>Video Editing</SectionLabel>
              <h3 className="font-display text-2xl sm:text-3xl font-bold">
                Reels, promos, and brand stories that keep people watching
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mt-3">
                We deliver high-retention edits for social media and ads, tuned for engagement and
                conversion. Motion graphics, subtitles, and punchy cuts included.
              </p>
              <a
                href="https://drive.google.com/file/d/1fTvfNWrl158x7JnlhF1srulQEX3JHllb/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-sm font-heading text-primary hover:gap-3 transition-all"
              >
                View full video ↗
              </a>
            </div>
            <div className="relative group">
              <a
                href="https://drive.google.com/file/d/1fTvfNWrl158x7JnlhF1srulQEX3JHllb/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-video rounded-2xl overflow-hidden border border-border bg-gradient-to-br from-primary/20 to-secondary/20 shadow-lg flex items-center justify-center group-hover:border-primary/50 transition-all cursor-pointer"
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-primary group-hover:scale-110 transition-transform flex items-center justify-center shadow-lg">
                    <span className="text-3xl">▶</span>
                  </div>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <div className="text-center">
                    <p className="text-white text-sm font-heading font-semibold mb-2">Video Editing Showreel</p>
                    <p className="text-white/70 text-xs">Click to watch full video</p>
                  </div>
                </div>
              </a>
              <p className="text-xs text-muted-foreground mt-3 text-center">
                Opens in Google Drive (3 minutes) — Reels, promos, and brand stories
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
  visible,
}: {
  service: (typeof services)[0];
  index: number;
  visible: boolean;
}) {
  const tilt = useTilt(7);
  return (
    <div
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      className={`tilt-card group relative p-6 rounded-2xl border border-border transition-all duration-500 card-elevated ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ background: "var(--gradient-card)", transitionDelay: `${150 * index}ms` }}
    >
      <div className="relative z-10">
        <span className="text-4xl block mb-4 transition-transform duration-500 group-hover:scale-125 group-hover:-rotate-6">
          {service.icon}
        </span>
        <h3 className="font-heading text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {service.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{service.desc}</p>
        <div className="flex flex-wrap gap-2">
          {service.tech.map((t) => (
            <span
              key={t}
              className="font-mono text-[10px] px-2 py-1 rounded-md bg-secondary text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
