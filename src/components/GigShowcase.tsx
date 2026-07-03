import SectionLabel from "./SectionLabel";
import websiteThumbnail from "../assets/fiverr-website-developement-thumbnail.png";
import videoThumbnail from "../assets/Fiverr-video-editing-thumbnail.png";

interface Gig {
  title: string;
  category: string;
  thumbnail?: string;
  description: string;
  fiverLink: string;
  badge?: string;
}

const gigs: Gig[] = [
  {
    title: "Website Design & Development",
    category: "Web Development",
    thumbnail: websiteThumbnail,
    description: "Custom responsive websites built with React, optimized for conversions and SEO",
    fiverLink: "https://www.fiverr.com/s/lja8Ap2",
    badge: "Popular",
  },
  {
    title: "Video Editing & Motion Graphics",
    category: "Video",
    thumbnail: videoThumbnail,
    description: "Professional video editing, reels, and motion graphics for social media",
    fiverLink: "https://www.fiverr.com/s/AyNDoaQ",
  },
];

export default function GigShowcase() {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 md:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 md:mb-16 text-center">
          <SectionLabel align="center">Our Services</SectionLabel>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Services Available on <span className="text-gradient">Fiverr</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Book directly from our Fiverr profile for flexible engagement and milestone-based
            delivery
          </p>
        </div>

        {/* Gigs Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {gigs.map((gig, idx) => (
            <a
              key={idx}
              href={gig.fiverLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-xl border border-border overflow-hidden bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              {/* Thumbnail Image */}
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center relative overflow-hidden">
                {gig.thumbnail ? (
                  <img
                    src={gig.thumbnail}
                    alt={gig.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-grid-small opacity-5" />
                    <div className="text-center z-10">
                      <div className="text-3xl mb-2">{idx === 0 ? "🌐" : "🎬"}</div>
                      <span className="text-xs font-mono text-muted-foreground px-2">
                        {gig.category}
                      </span>
                    </div>
                  </>
                )}
              </div>

              {/* Badge */}
              {gig.badge && (
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-semibold bg-primary text-primary-foreground">
                  {gig.badge}
                </div>
              )}

              {/* Content */}
              <div className="p-4">
                <h3 className="font-heading font-semibold text-base mb-2 group-hover:text-primary transition-colors">
                  {gig.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{gig.description}</p>

                {/* CTA */}
                <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                  View on Fiverr →
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
