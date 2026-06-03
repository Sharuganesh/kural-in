import { useState } from "react";
import SectionLabel from "./SectionLabel";

export default function ContactDetails() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      value: "kuralinnovation@gmail.com",
      link: "mailto:kuralinnovation@gmail.com",
      description: "Respond within 24 hours",
    },
    {
      icon: "📞",
      title: "Phone / WhatsApp",
      value: "+91 9345852826",
      link: "tel:+919345852826",
      description: "Available 9am - 6pm IST",
    },
    {
      icon: "📍",
      title: "Office",
      value: "Tirunelveli, Tamil Nadu",
      link: "",
      description: "India's tech growth hub",
    },
    {
      icon: "📸",
      title: "Instagram",
      value: "@kural_innovations",
      link: "https://instagram.com/kural_innovations",
      description: "Follow for updates & insights",
    },
  ];

  const projectTypes = [
    "Website Development",
    "Web App / Dashboard",
    "SEO & Digital Marketing",
    "Ads Management (Meta/Google)",
    "Social Media Handling",
    "IoT / Hardware Solution",
    "AI/ML Project",
    "Other",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:kuralinnovation@gmail.com?subject=Project Inquiry - ${formData.name}&body=Name: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AProject Type: ${formData.projectType}%0A%0AMessage:%0A${formData.message}`;
    window.open(mailtoLink);
    setFormData({ name: "", email: "", phone: "", projectType: "", message: "" });
  };

  return (
    <>
      {/* Header */}
      <section className="py-12 sm:py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center" style={{ animation: "slideInUp 0.6s ease-out" }}>
          <SectionLabel align="center">Contact</SectionLabel>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Let's Build <span className="text-gradient">Together</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project idea? A business problem to solve? Send us the details and we'll get back to you within 24 hours. No lengthy discovery calls — we're direct.
          </p>
        </div>
      </section>

      {/* Quick Contact Info */}
      <section className="py-8 sm:py-12 md:py-16 px-4 md:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {contactMethods.map((method, idx) => (
              <a
                key={idx}
                href={method.link || "#"}
                target={method.link.startsWith("http") ? "_blank" : undefined}
                rel={method.link.startsWith("http") ? "noopener noreferrer" : undefined}
                className="p-4 md:p-6 rounded-xl border border-border bg-background hover:border-primary/50 transition-all group"
                style={{ animation: `slideInUp 0.6s ease-out ${150 * idx + 200}ms both` }}
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{method.icon}</div>
                <h3 className="font-heading font-semibold text-sm md:text-base mb-1">{method.title}</h3>
                <p className="text-xs text-muted-foreground">{method.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 sm:py-20 md:py-24 px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12 text-center" style={{ animation: "slideInUp 0.6s ease-out 0.1s both" }}>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold">Send us your details</h2>
            <p className="text-muted-foreground mt-2">Fill this out and we'll reach out with a timeline and approach</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-secondary/20 p-8 rounded-2xl border border-border" style={{ animation: "slideInUp 0.6s ease-out 0.2s both" }}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-heading font-semibold mb-2">Your Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-heading font-semibold mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-heading font-semibold mb-2">Phone / WhatsApp</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-heading font-semibold mb-2">Project Type</label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:border-primary transition-colors"
                >
                  <option value="">Select project type</option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-heading font-semibold mb-2">Tell us about your project or idea *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe your project, target audience, timeline, and any specific requirements..."
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 rounded-lg bg-primary text-primary-foreground font-heading font-semibold hover:shadow-lg transition-all"
            >
              Send Inquiry →
            </button>

            <p className="text-xs text-muted-foreground text-center">
              * We'll respond within 24 hours with a detailed approach and timeline
            </p>
          </form>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 md:px-8 bg-secondary/30">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
              How We <span className="text-gradient">Work</span>
            </h2>
            <p className="text-muted-foreground mt-3">Our simple, proven process</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Discovery Call",
                description: "30-min chat about your problem, target audience, and goals. No sales pitch.",
              },
              {
                step: "2",
                title: "Proposal",
                description: "We outline approach, timeline, deliverables, and cost. You review and decide.",
              },
              {
                step: "3",
                title: "Development",
                description: "We build in sprints with weekly updates. You stay informed every step.",
              },
              {
                step: "4",
                title: "Launch & Support",
                description: "Deploy live, handle post-launch issues, and provide 30 days of support.",
              },
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="p-6 rounded-2xl border border-border bg-background text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-display font-bold text-lg mb-3">
                    {item.step}
                  </div>
                  <h3 className="font-heading font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:flex absolute top-1/3 -right-3 items-center justify-center w-6 h-6 rounded-full border-2 border-primary bg-background">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
              Common <span className="text-gradient">Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "What's your typical project timeline?",
                a: "For a standard website: 3-4 days for design and development (fastest in the region). A full web application with custom features: 2-4 weeks. Marketing setup (SEO + ads): 1-2 weeks for foundational work, then ongoing optimization. IoT/Hardware projects: 4-8 weeks depending on complexity. We prioritize speed without compromising quality.",
              },
              {
                q: "Do you provide ongoing support?",
                a: "Yes, absolutely. Every project includes 30 days of post-launch support — bug fixes, performance tweaks, and adjustments. After that, we offer tiered maintenance plans: Basic (₹3,000/month) for updates and monitoring, Standard (₹7,500/month) for monthly feature additions and analytics review, and Premium (₹15,000/month) for priority support and full optimization.",
              },
              {
                q: "What's your process for SEO and ads?",
                a: "SEO: We start with keyword research for your city/region, optimize on-page elements (titles, meta, headers), set up Google Search Console, submit sitemaps, create location-based schema markup, and build content targeting high-intent keywords. We track rankings monthly. Ads: We handle pixel setup, audience segmentation based on your data, creative testing (A/B variants), bid optimization, and weekly performance reports. We focus on cost-per-lead, not just impressions.",
              },
              {
                q: "Can you work with my existing code/website?",
                a: "Absolutely. We've worked on many projects built by others. Our process: 1) Audit your existing code for performance, security, and maintainability, 2) Identify bottlenecks and areas for improvement, 3) Provide recommendations and cost estimates, 4) Implement fixes and enhancements, 5) Deploy with zero downtime using proper deployment strategies. We document everything so you (or another team) can maintain it later.",
              },
              {
                q: "How do you price projects?",
                a: "We don't use hourly rates — we quote fixed-price based on scope. For example: Simple brochure website ₹15,000-25,000, lead-generation website ₹40,000-80,000, booking/e-commerce ₹80,000-2,00,000, SEO setup ₹5,000-10,000, ads management ₹2,000/month. All quotes include detailed breakdown: design, development, testing, SEO optimization. No surprises. No hidden costs.",
              },
              {
                q: "Do you offer payment plans?",
                a: "Yes. Standard structure: 30% deposit to start, 40% at midpoint (design approval), 30% on launch. For larger projects (over ₹1 lakh), we can do 4-6 milestone-based payments spread over the project timeline. We also offer flexible terms for long-term retainer clients. Discussion is always welcome — we understand business constraints.",
              },
            ].map((item, idx) => (
              <details
                key={idx}
                className="group p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors cursor-pointer"
              >
                <summary className="font-heading font-semibold text-foreground group-open:text-primary transition-colors">
                  {item.q}
                </summary>
                <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
