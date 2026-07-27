import { Star, Users, Award, Dumbbell, Heart, Salad, Check } from "lucide-react";
import { Reveal, Counter, SectionHeading, Section } from "./primitives";
import { WHATSAPP_URL } from "./chrome";
import heroImg from "@/assets/hero.jpg";
import aboutImg from "@/assets/about.jpg";

export function Hero() {
  return (
    <section id="hero" className="relative isolate flex min-h-svh items-center overflow-hidden">
      <img
        src={heroImg}
        alt="Athlete performing a heavy deadlift at PowerHub Fitness"
        width={1920}
        height={1280}
        fetchPriority="high"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
      />
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(90deg, oklch(0.145 0 0 / 96%) 0%, oklch(0.145 0 0 / 78%) 45%, oklch(0.145 0 0 / 35%) 100%)",
        }}
        aria-hidden="true"
      />
      <div
        className="glow-orb -z-10 h-96 w-96 -left-24 top-1/4 bg-primary"
        aria-hidden="true"
      />

      <div className="mx-auto w-full max-w-7xl px-5 pt-32 pb-20 sm:px-8">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Train Hard. Live Strong.</p>
          <h1 className="mt-6 text-6xl sm:text-7xl lg:text-8xl">
            Become the strongest
            <br />
            version of <span className="text-gradient-ember">yourself.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Premium equipment, certified trainers, personalised programs, and a motivating
            community to help you reach your fitness goals.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#membership"
              className="rounded-sm bg-primary px-8 py-4 font-display text-2xl tracking-wider text-primary-foreground shadow-[var(--shadow-ember)] transition-transform duration-200 hover:scale-105"
            >
              Start Your Fitness Journey
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-sm border border-border px-8 py-4 font-display text-2xl tracking-wider text-foreground transition-colors duration-200 hover:border-accent hover:text-accent"
            >
              Book a Free Trial
            </a>
          </div>
        </Reveal>

        <Reveal delay={200} className="mt-16">
          <dl className="grid max-w-2xl grid-cols-1 gap-6 border-t border-border pt-8 sm:grid-cols-3">
            {[
              {
                Icon: Star,
                value: <Counter to={4.9} decimals={1} />,
                label: "Member rating",
              },
              {
                Icon: Users,
                value: <Counter to={500} suffix="+" />,
                label: "Active members",
              },
              {
                Icon: Award,
                value: <Counter to={8} suffix="+" />,
                label: "Certified trainers",
              },
            ].map(({ Icon, value, label }) => (
              <div key={label} className="flex items-center gap-3">
                <Icon className="h-6 w-6 shrink-0 text-accent" aria-hidden="true" />
                <div className="min-w-0">
                  <dt className="font-display text-3xl tracking-wide">{value}</dt>
                  <dd className="text-xs tracking-widest text-muted-foreground uppercase">
                    {label}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

const ABOUT_POINTS = [
  {
    Icon: Dumbbell,
    title: "Premium equipment",
    body: "Hammer Strength racks, calibrated plates, sleds and a full functional floor.",
  },
  {
    Icon: Award,
    title: "Experienced coaches",
    body: "Certified strength, mobility and rehab specialists on the floor all day.",
  },
  {
    Icon: Heart,
    title: "Personalised training",
    body: "Programs written around your assessment, schedule and long-term goals.",
  },
  {
    Icon: Salad,
    title: "Nutrition support",
    body: "Practical Indian-diet friendly plans with monthly body composition reviews.",
  },
];

export function About() {
  return (
    <Section id="about">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <Reveal className="relative">
          <div className="glow-orb -z-10 h-72 w-72 -left-10 -top-10 bg-primary" aria-hidden="true" />
          <img
            src={aboutImg}
            alt="Coach spotting a member during a bench press session"
            width={1200}
            height={900}
            loading="lazy"
            className="w-full rounded-sm object-cover shadow-[var(--shadow-card)]"
          />
          <div className="absolute -bottom-8 -right-4 hidden rounded-sm bg-accent px-6 py-4 text-accent-foreground sm:block">
            <p className="font-display text-4xl leading-none">12+</p>
            <p className="text-xs font-semibold tracking-widest uppercase">Years coaching</p>
          </div>
        </Reveal>

        <div>
          <SectionHeading
            align="left"
            eyebrow="About PowerHub"
            title={
              <>
                A gym built for <span className="text-primary">serious progress</span>
              </>
            }
            subtitle="PowerHub Fitness is a premium fitness centre in Vadodara offering world-class equipment, certified trainers, strength and functional training, personal coaching, nutrition guidance and group classes — everything you need to build strength, improve health and stay consistent for years, not weeks."
          />
          <ul className="mt-10 grid gap-6 sm:grid-cols-2">
            {ABOUT_POINTS.map(({ Icon, title, body }, i) => (
              <Reveal as="li" key={title} delay={i * 90}>
                <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                <h3 className="mt-3 text-2xl tracking-wide">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={300} className="mt-10 flex items-center gap-3 text-sm text-muted-foreground">
            <Check className="h-5 w-5 text-accent" aria-hidden="true" />A friendly community
            that shows up — beginners genuinely welcome.
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

const PLANS = [
  {
    name: "Monthly",
    price: "₹2,499",
    period: "/month",
    highlight: false,
    benefits: [
      "Full gym & cardio access",
      "2 group classes per week",
      "Locker & towel service",
      "Fitness assessment",
    ],
  },
  {
    name: "Quarterly",
    price: "₹6,499",
    period: "/3 months",
    highlight: true,
    benefits: [
      "Everything in Monthly",
      "Unlimited group classes",
      "Monthly body composition scan",
      "Personalised training plan",
      "1 free guest pass",
    ],
  },
  {
    name: "Annual",
    price: "₹19,999",
    period: "/year",
    highlight: false,
    benefits: [
      "Everything in Quarterly",
      "Quarterly nutrition consult",
      "Priority class booking",
      "2 months effectively free",
    ],
  },
  {
    name: "Personal Training",
    price: "₹9,999",
    period: "/12 sessions",
    highlight: false,
    benefits: [
      "1-on-1 coaching",
      "Custom periodised program",
      "Weekly progress reviews",
      "WhatsApp check-ins",
    ],
  },
];

export function Membership() {
  return (
    <Section id="membership" className="bg-card">
      <SectionHeading
        eyebrow="Membership"
        title={
          <>
            Choose your <span className="text-primary">commitment</span>
          </>
        }
        subtitle="No hidden joining fees. Freeze your plan for up to 30 days a year."
      />
      <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {PLANS.map((plan, i) => (
          <Reveal as="article" key={plan.name} delay={i * 90} className="h-full">
            <div
              className={
                "flex h-full flex-col rounded-sm border p-8 transition-transform duration-300 hover:-translate-y-2 " +
                (plan.highlight
                  ? "border-primary bg-background shadow-[var(--shadow-ember)]"
                  : "border-border bg-background")
              }
            >
              {plan.highlight ? (
                <span className="mb-4 w-fit rounded-sm bg-accent px-3 py-1 text-[11px] font-bold tracking-widest text-accent-foreground uppercase">
                  Most popular
                </span>
              ) : null}
              <h3 className="text-3xl tracking-wide">{plan.name}</h3>
              <p className="mt-4 flex items-end gap-1">
                <span className="font-display text-5xl text-primary">{plan.price}</span>
                <span className="pb-1 text-xs text-muted-foreground">{plan.period}</span>
              </p>
              <ul className="mt-6 flex-1 space-y-3 text-sm text-muted-foreground">
                {plan.benefits.map((b) => (
                  <li key={b} className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                    {b}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={
                  "mt-8 rounded-sm px-6 py-3 text-center font-display text-xl tracking-wider transition-transform duration-200 hover:scale-[1.03] " +
                  (plan.highlight
                    ? "bg-primary text-primary-foreground"
                    : "border border-border text-foreground hover:border-primary")
                }
              >
                Join Now
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

const SERVICES = [
  ["Strength Training", "Barbell fundamentals, progressive overload, tracked lifts."],
  ["Cardio Zone", "Treadmills, rowers, bikes and stair climbers with entertainment."],
  ["Functional Training", "Sleds, kettlebells, rigs and movement-first conditioning."],
  ["CrossFit", "Coached WODs, olympic lifting technique and community scoring."],
  ["Yoga", "Mobility, breathwork and recovery flows in a dedicated studio."],
  ["Zumba", "High-energy dance cardio sessions every evening."],
  ["Personal Training", "1-on-1 coaching with a periodised, goal-driven plan."],
  ["Nutrition Coaching", "Sustainable meal frameworks built around Indian food."],
  ["Body Composition Analysis", "Segmental scans tracking muscle, fat and hydration."],
];

export function Services() {
  return (
    <Section id="services">
      <SectionHeading
        eyebrow="Services"
        title={
          <>
            Everything under <span className="text-primary">one roof</span>
          </>
        }
      />
      <ul className="mt-16 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map(([title, body], i) => (
          <Reveal
            as="li"
            key={title}
            delay={(i % 3) * 90}
            className="group bg-background p-8 transition-colors duration-300 hover:bg-card"
          >
            <span className="font-display text-sm tracking-[0.3em] text-primary">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-3 text-2xl tracking-wide transition-colors group-hover:text-accent">
              {title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}