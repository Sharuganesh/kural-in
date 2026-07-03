import { useRef, useEffect, useState } from "react";
import { z } from "zod";
import SectionLabel from "./SectionLabel";

const CONTACT_EMAIL = "kuralinnovation@gmail.com";

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

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Please enter a valid email"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000),
});

type FormData = z.infer<typeof contactSchema>;
type FormErrors = Partial<Record<keyof FormData, string>>;

function buildMailto(form: FormData): string {
  const subject = encodeURIComponent(`Contact from ${form.name} — Kural Innovations`);
  const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
  return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
}

export default function ContactSection() {
  const { ref, visible } = useIntersection();
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "success">("idle");
  const [timestamp] = useState(Date.now());

  const validate = (): boolean => {
    const result = contactSchema.safeParse(form);
    if (result.success) {
      setErrors({});
      return true;
    }
    const newErrors: FormErrors = {};
    result.error.issues.forEach((issue) => {
      const field = issue.path[0] as keyof FormData;
      if (!newErrors[field]) newErrors[field] = issue.message;
    });
    setErrors(newErrors);
    return false;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const honeypot = (document.getElementById("hp-field") as HTMLInputElement)?.value;
    if (honeypot && honeypot.length > 0) {
      setStatus("success");
      return;
    }

    const elapsed = Date.now() - timestamp;
    if (elapsed < 2000) {
      setStatus("success");
      return;
    }

    window.location.href = buildMailto(form);
    setStatus("success");
    setForm({ name: "", email: "", message: "" });
  };

  const updateField = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  return (
    <section id="contact" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <div
          className={`text-center mb-12 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        >
          <SectionLabel align="center">Contact</SectionLabel>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Let's Build <span className="text-gradient">Together</span>
          </h2>
          <p className="font-heading text-lg text-muted-foreground max-w-xl mx-auto">
            Have an idea, a problem to solve, or a project in mind? Send a message and we'll get
            back to you within 24 hours.
          </p>
        </div>

        <div
          className={`grid md:grid-cols-5 gap-8 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="md:col-span-2 space-y-6">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="group flex items-start gap-4 p-4 rounded-xl border border-border hover:border-primary/30 transition-all duration-300 card-elevated"
              style={{ background: "var(--gradient-card)" }}
            >
              <span className="text-2xl">📧</span>
              <div>
                <p className="font-heading font-semibold text-foreground text-sm">Email</p>
                <p className="font-mono text-xs text-primary break-all">{CONTACT_EMAIL}</p>
              </div>
            </a>

            <a
              href="tel:+919345852826"
              className="group flex items-start gap-4 p-4 rounded-xl border border-border hover:border-primary/30 transition-all duration-300 card-elevated"
              style={{ background: "var(--gradient-card)" }}
            >
              <span className="text-2xl">📞</span>
              <div>
                <p className="font-heading font-semibold text-foreground text-sm">Phone</p>
                <p className="font-mono text-xs text-primary">+91 9345852826</p>
              </div>
            </a>

            <a
              href="https://instagram.com/kural_innovations"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 p-4 rounded-xl border border-border hover:border-primary/30 transition-all duration-300 card-elevated"
              style={{ background: "var(--gradient-card)" }}
            >
              <span className="text-2xl">📸</span>
              <div>
                <p className="font-heading font-semibold text-foreground text-sm">Instagram</p>
                <p className="font-mono text-xs text-primary">@kural_innovations</p>
              </div>
            </a>

            <div className="flex items-center gap-2 text-muted-foreground px-4">
              <span className="text-sm">📍</span>
              <span className="font-mono text-sm">Tirunelveli, Tamil Nadu, India</span>
            </div>
          </div>

          <div className="md:col-span-3">
            {status === "success" ? (
              <div
                className="p-8 rounded-2xl border border-primary/20 text-center card-elevated"
                style={{ background: "var(--gradient-card)" }}
              >
                <div className="text-5xl mb-4">✅</div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  Ready to send
                </h3>
                <p className="text-muted-foreground mb-6">
                  If your email app opened, send the message from there. Otherwise you can email us
                  directly at{" "}
                  <a className="text-primary underline" href={`mailto:${CONTACT_EMAIL}`}>
                    {CONTACT_EMAIL}
                  </a>
                  .
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="font-heading text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  Send another message →
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-6 md:p-8 rounded-2xl border border-border space-y-5 card-elevated"
                style={{ background: "var(--gradient-card)" }}
              >
                <input
                  type="text"
                  id="hp-field"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  className="absolute opacity-0 h-0 w-0 overflow-hidden pointer-events-none"
                  aria-hidden="true"
                />

                <div>
                  <label className="block font-heading text-sm text-foreground mb-1.5">Name</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => updateField("name", e.target.value)}
                    placeholder="Your name"
                    className={`w-full px-4 py-3 rounded-lg bg-input border text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all ${
                      errors.name ? "border-destructive" : "border-border"
                    }`}
                  />
                  {errors.name && (
                    <p className="text-destructive text-xs mt-1 font-mono">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block font-heading text-sm text-foreground mb-1.5">Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    placeholder="your@email.com"
                    className={`w-full px-4 py-3 rounded-lg bg-input border text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all ${
                      errors.email ? "border-destructive" : "border-border"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-destructive text-xs mt-1 font-mono">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block font-heading text-sm text-foreground mb-1.5">
                    Message
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) => updateField("message", e.target.value)}
                    placeholder="Tell us about your idea or project..."
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg bg-input border text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none ${
                      errors.message ? "border-destructive" : "border-border"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-destructive text-xs mt-1 font-mono">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-lg font-heading text-sm tracking-wider bg-primary text-primary-foreground glow-cyan hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  OPEN IN EMAIL APP
                </button>
                <p className="text-xs text-muted-foreground text-center font-mono">
                  Opens your mail client with this message — no server, fully private.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
