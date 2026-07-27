import { useMemo, useState } from "react";
import { z } from "zod";
import { Star, MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal, SectionHeading, Section } from "./primitives";
import { WHATSAPP_URL } from "./chrome";
import member1 from "@/assets/member-1.jpg";
import member2 from "@/assets/member-2.jpg";
import member3 from "@/assets/member-3.jpg";

function bmiCategory(bmi: number) {
  if (bmi < 18.5) return { label: "Underweight", tone: "text-accent" };
  if (bmi < 25) return { label: "Healthy weight", tone: "text-primary" };
  if (bmi < 30) return { label: "Overweight", tone: "text-accent" };
  return { label: "Obese", tone: "text-primary" };
}

export function BmiCalculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const bmi = useMemo(() => {
    const h = Number(height) / 100;
    const w = Number(weight);
    if (!h || !w || h < 0.5 || h > 2.6 || w < 20 || w > 300) return null;
    return w / (h * h);
  }, [height, weight]);

  const category = bmi ? bmiCategory(bmi) : null;

  return (
    <Section id="bmi" className="bg-card">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <SectionHeading
          align="left"
          eyebrow="BMI Calculator"
          title={
            <>
              Know your <span className="text-primary">starting point</span>
            </>
          }
          subtitle="BMI is a quick screening tool, not a diagnosis. Book a free body composition scan at the club for a complete picture of muscle, fat and hydration."
        />

        <Reveal className="rounded-sm border border-border bg-background p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="bmi-height" className="text-xs tracking-widest uppercase text-muted-foreground">
                Height (cm)
              </label>
              <input
                id="bmi-height"
                type="number"
                inputMode="decimal"
                min={50}
                max={260}
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="175"
                className="mt-2 w-full rounded-sm border border-input bg-card px-4 py-3 text-lg outline-none focus:border-primary"
              />
            </div>
            <div>
              <label htmlFor="bmi-weight" className="text-xs tracking-widest uppercase text-muted-foreground">
                Weight (kg)
              </label>
              <input
                id="bmi-weight"
                type="number"
                inputMode="decimal"
                min={20}
                max={300}
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="72"
                className="mt-2 w-full rounded-sm border border-input bg-card px-4 py-3 text-lg outline-none focus:border-primary"
              />
            </div>
          </div>

          <div
            aria-live="polite"
            className="mt-8 flex items-end justify-between gap-4 border-t border-border pt-6"
          >
            <div>
              <p className="text-xs tracking-widest uppercase text-muted-foreground">Your BMI</p>
              <p className="font-display text-6xl leading-none">
                {bmi ? bmi.toFixed(1) : "—"}
              </p>
            </div>
            <p className={`font-display text-3xl tracking-wide ${category?.tone ?? "text-muted-foreground"}`}>
              {category?.label ?? "Enter your details"}
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

const REVIEWS = [
  {
    img: member1,
    name: "Karan Shah",
    when: "2 weeks ago",
    text: "Cleanest gym in Vadodara and the coaching is on another level. Equipment is always maintained and the floor never feels crowded.",
  },
  {
    img: member2,
    name: "Meera Joshi",
    when: "1 month ago",
    text: "Joined for weight loss, stayed for the strength classes. The trainers actually track your progress instead of just counting reps.",
  },
  {
    img: member3,
    name: "Vikram Patel",
    when: "3 months ago",
    text: "Great early morning crowd, spotless changing rooms and genuinely helpful nutrition guidance. Worth every rupee.",
  },
];

export function Testimonials() {
  return (
    <Section id="testimonials">
      <SectionHeading
        eyebrow="Testimonials"
        title={
          <>
            Rated <span className="text-primary">4.9</span> by our members
          </>
        }
      />
      <div className="mt-16 grid gap-6 lg:grid-cols-3">
        {REVIEWS.map((r, i) => (
          <Reveal as="article" key={r.name} delay={i * 100} className="h-full">
            <div className="h-full rounded-sm border border-border bg-card p-7 transition-transform duration-300 hover:-translate-y-1.5">
              <div className="flex min-w-0 items-center gap-3">
                <img
                  src={r.img}
                  alt=""
                  width={800}
                  height={800}
                  loading="lazy"
                  className="h-11 w-11 shrink-0 rounded-full object-cover"
                />
                <div className="min-w-0">
                  <p className="truncate font-semibold">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.when}</p>
                </div>
              </div>
              <div className="mt-4 flex gap-0.5" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-accent text-accent" aria-hidden="true" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{r.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

const FAQS = [
  [
    "Do you offer a free trial?",
    "Yes. Every new visitor gets a free trial session including a fitness assessment with a certified coach. Message us on WhatsApp to book a slot.",
  ],
  [
    "I'm a complete beginner. Is this gym for me?",
    "Absolutely. Our Strength Foundations classes and onboarding sessions are designed specifically for first-timers, with coaches teaching every movement from scratch.",
  ],
  [
    "Can I freeze my membership?",
    "Quarterly and Annual members can freeze their plan for up to 30 days a year for travel, illness or work commitments.",
  ],
  [
    "Is personal training included in the membership?",
    "Group classes and programming support are included. One-on-one personal training is a separate package of 12 sessions.",
  ],
  [
    "Do you provide nutrition plans?",
    "Yes — practical, Indian-diet friendly plans built around your schedule, reviewed monthly alongside your body composition scan.",
  ],
  [
    "What are the peak hours?",
    "6:00–9:00 AM and 6:00–9:00 PM are busiest. The floor is designed with duplicate stations so waiting time stays minimal.",
  ],
];

export function Faq() {
  return (
    <Section id="faq" className="bg-card">
      <SectionHeading
        eyebrow="FAQ"
        title={
          <>
            Questions, <span className="text-primary">answered</span>
          </>
        }
      />
      <Reveal className="mx-auto mt-14 max-w-3xl">
        <Accordion type="single" collapsible className="w-full">
          {FAQS.map(([q, a], i) => (
            <AccordionItem key={q} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="text-left font-display text-xl tracking-wide hover:no-underline">
                {q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </Section>
  );
}

const inquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email address").max(255),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(20),
  message: z.string().trim().min(5, "Tell us a little more").max(1000),
});

export function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const result = inquirySchema.safeParse(data);
    if (!result.success) {
      const next: Record<string, string> = {};
      for (const issue of result.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      setSent(false);
      return;
    }
    setErrors({});
    setSent(true);
    e.currentTarget.reset();
  };

  const field =
    "mt-2 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary";

  return (
    <Section id="contact">
      <SectionHeading
        eyebrow="Contact"
        title={
          <>
            Come train <span className="text-primary">with us</span>
          </>
        }
      />

      <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
        <Reveal className="space-y-6">
          <ul className="space-y-5 rounded-sm border border-border bg-card p-8">
            <li className="flex gap-4">
              <MapPin className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <address className="text-sm not-italic text-muted-foreground">
                102, Race Course Road,
                <br />
                Vadodara, Gujarat 390007
              </address>
            </li>
            <li className="flex gap-4">
              <Phone className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <a href="tel:+919876543210" className="text-sm text-muted-foreground hover:text-foreground">
                +91 98765 43210
              </a>
            </li>
            <li className="flex gap-4">
              <Mail className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <a
                href="mailto:hello@ironpulsefitness.com"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                hello@ironpulsefitness.com
              </a>
            </li>
            <li className="flex gap-4">
              <Clock className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <div className="text-sm text-muted-foreground">
                <p>Monday–Saturday · 5:00 AM – 11:00 PM</p>
                <p>Sunday · 7:00 AM – 8:00 PM</p>
              </div>
            </li>
          </ul>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-3 rounded-sm bg-primary px-6 py-4 font-display text-2xl tracking-wider text-primary-foreground transition-transform duration-200 hover:scale-[1.02]"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            Chat on WhatsApp
          </a>

          <div className="overflow-hidden rounded-sm border border-border">
            <iframe
              title="Iron Pulse Fitness location on Google Maps"
              src="https://www.google.com/maps?q=Race%20Course%20Road%2C%20Vadodara%2C%20Gujarat%20390007&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-64 w-full grayscale"
            />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <form
            onSubmit={onSubmit}
            noValidate
            className="rounded-sm border border-border bg-card p-8"
          >
            <h3 className="text-3xl tracking-wide">Send an enquiry</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              We reply within one working day.
            </p>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-xs tracking-widest uppercase text-muted-foreground">
                  Name
                </label>
                <input id="name" name="name" maxLength={100} className={field} />
                {errors.name ? <p className="mt-1 text-xs text-primary">{errors.name}</p> : null}
              </div>
              <div>
                <label htmlFor="phone" className="text-xs tracking-widest uppercase text-muted-foreground">
                  Phone
                </label>
                <input id="phone" name="phone" maxLength={20} className={field} />
                {errors.phone ? <p className="mt-1 text-xs text-primary">{errors.phone}</p> : null}
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="email" className="text-xs tracking-widest uppercase text-muted-foreground">
                Email
              </label>
              <input id="email" name="email" type="email" maxLength={255} className={field} />
              {errors.email ? <p className="mt-1 text-xs text-primary">{errors.email}</p> : null}
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="text-xs tracking-widest uppercase text-muted-foreground">
                Message
              </label>
              <textarea id="message" name="message" rows={5} maxLength={1000} className={field} />
              {errors.message ? (
                <p className="mt-1 text-xs text-primary">{errors.message}</p>
              ) : null}
            </div>

            <button
              type="submit"
              className="mt-7 w-full rounded-sm bg-primary px-6 py-4 font-display text-2xl tracking-wider text-primary-foreground transition-transform duration-200 hover:scale-[1.02]"
            >
              Send Enquiry
            </button>

            <p aria-live="polite" className="mt-4 min-h-5 text-sm text-accent">
              {sent ? "Thanks — your enquiry has been received. We'll be in touch shortly." : ""}
            </p>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}