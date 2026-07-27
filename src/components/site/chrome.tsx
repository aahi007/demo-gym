import { useEffect, useState } from "react";
import { Menu, X, MessageCircle, Instagram, Facebook, Youtube, Dumbbell } from "lucide-react";
import { cn } from "@/lib/utils";

export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#membership", label: "Membership" },
  { href: "#services", label: "Services" },
  { href: "#trainers", label: "Trainers" },
  { href: "#gallery", label: "Gallery" },
  { href: "#schedule", label: "Schedule" },
  { href: "#contact", label: "Contact" },
];

export const WHATSAPP_URL =
  "https://wa.me/8160629976?text=Hi%20Iron%20Pulse%20Fitness%2C%20I%27d%20like%20to%20book%20a%20free%20trial.";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-60 h-[3px] bg-transparent"
    >
      <div
        className="h-full origin-left transition-[width] duration-150"
        style={{ width: `${progress}%`, background: "var(--gradient-ember)" }}
      />
    </div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav
        aria-label="Main"
        className="mx-auto grid w-full max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-8 lg:grid-cols-[auto_1fr_auto]"
      >
        <a href="#hero" className="flex min-w-0 items-center gap-2">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-sm bg-primary">
            <Dumbbell className="h-5 w-5 text-primary-foreground" aria-hidden="true" />
          </span>
          <span className="font-display truncate text-2xl tracking-wide">
            Iron<span className="text-primary">Pulse</span>
          </span>
        </a>

        <ul className="hidden items-center justify-center gap-7 lg:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[13px] font-medium tracking-wide text-muted-foreground uppercase transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#membership"
            className="hidden shrink-0 rounded-sm bg-primary px-5 py-2.5 font-display text-lg tracking-wider text-primary-foreground transition-transform duration-200 hover:scale-105 sm:inline-block"
          >
            Join Now
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-sm border border-border lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl lg:hidden">
          <ul className="mx-auto max-w-7xl px-5 py-4 sm:px-8">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border/60 py-3 font-display text-2xl tracking-wide"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Iron Pulse Fitness on WhatsApp"
      className="fixed right-5 bottom-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary shadow-[var(--shadow-ember)] transition-transform duration-300 hover:scale-110"
    >
      <MessageCircle className="h-6 w-6 text-primary-foreground" aria-hidden="true" />
    </a>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-sm bg-primary">
              <Dumbbell className="h-5 w-5 text-primary-foreground" aria-hidden="true" />
            </span>
            <span className="font-display text-2xl tracking-wide">
              Iron<span className="text-primary">Pulse</span>
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Train Hard. Live Strong. A premium strength and conditioning club in Vadodara
            built for people who take their progress seriously.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { Icon: Instagram, label: "Instagram" },
              { Icon: Facebook, label: "Facebook" },
              { Icon: Youtube, label: "YouTube" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#contact"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-sm border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Footer">
          <h3 className="font-display text-xl tracking-wider">Explore</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-primary">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="font-display text-xl tracking-wider">Visit Us</h3>
          <address className="mt-4 space-y-2 text-sm not-italic text-muted-foreground">
            <p>102, Race Course Road, Vadodara, Gujarat 390007</p>
            <p>
              <a href="tel:+918160629976" className="hover:text-primary">
                +91 8160629976
              </a>
            </p>
            <p>
              <a href="mailto:hello@ironpulsefitness.com" className="hover:text-primary">
                hello@ironpulsefitness.com
              </a>
            </p>
            <p>Mon–Sat 5:00 AM – 11:00 PM</p>
            <p>Sun 7:00 AM – 8:00 PM</p>
          </address>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Iron Pulse Fitness. Fictional brand concept.
      </div>
    </footer>
  );
}