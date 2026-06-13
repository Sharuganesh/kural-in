import SectionLabel from "./SectionLabel";

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
    description: "Custom responsive websites built with React, optimized for conversions and SEO",
    fiverLink: "https://www.fiverr.com", // Replace with your actual Fiverr link
    badge: "Popular",
  },
  {
    title: "SEO & Local Ranking Optimization",
    category: "SEO",
    description: "Get your business ranking on Google for local keywords in Tirunelveli & Tamil Nadu",
    fiverLink: "https://www.fiverr.com", // Replace with your actual Fiverr link
  },
  {
    title: "Google & Meta Ads Management",
    category: "Paid Ads",
    description: "Expert campaign setup, optimization, and management for leads and sales",
    fiverLink: "https://www.fiverr.com", // Replace with your actual Fiverr link
  },
  {
    title: "Video Editing & Motion Graphics",
    category: "Video",
    description: "Professional video editing, reels, and motion graphics for social media",
    fiverLink: "https://www.fiverr.com", // Replace with your actual Fiverr link
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
            Book directly from our Fiverr profile for flexible engagement and milestone-based delivery
          </p>
        </div>

        {/* Gigs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {gigs.map((gig, idx) => (
            <a
              key={idx}
              href={gig.fiverLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-xl border border-border overflow-hidden bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              {/* Thumbnail Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-small opacity-5" />
                <div className="text-center z-10">
                  <div className="text-3xl mb-2">{idx === 0 ? "🌐" : idx === 1 ? "🔍" : idx === 2 ? "📊" : "🎬"}</div>
                  <span className="text-xs font-mono text-muted-foreground px-2">{gig.category}</span>
                </div>
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
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {gig.description}
                </p>

                {/* CTA */}
                <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                  View on Fiverr →
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Video Gallery Section */}
        <div className="mt-16 pt-16 border-t border-border">
          <div className="mb-12 text-center">
            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
              Our <span className="text-gradient">Work in Action</span>
            </h3>
            <p className="text-muted-foreground">Video case studies and project walkthroughs</p>
          </div>

          {/* Video Placeholder - Replace with actual videos */}
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Website Launch Case Study", duration: "3:45" },
              { title: "SEO Ranking Strategy", duration: "5:20" },
            ].map((video, idx) => (
              <div
                key={idx}
                className="group relative rounded-xl overflow-hidden bg-muted aspect-video cursor-pointer hover:shadow-xl transition-all"
              >
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-5xl mb-2 group-hover:scale-110 transition-transform">▶</div>
                    <p className="text-sm font-medium">{video.title}</p>
                    <p className="text-xs text-gray-300 mt-1">{video.duration}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Note about adding videos */}
          <div className="mt-8 p-6 rounded-lg bg-primary/5 border border-primary/20">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-primary">💡 Note:</span> Add your video files to{" "}
              <code className="bg-background px-2 py-1 rounded text-xs">/src/assets/</code> and update the video URLs in this
              component to showcase your work directly on the website.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
