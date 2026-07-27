import { createFileRoute } from "@tanstack/react-router";
import { Navbar, ScrollProgress, WhatsAppButton, Footer } from "@/components/site/chrome";
import { Hero, About, Membership, Services } from "@/components/site/sections-top";
import {
  Trainers,
  SuccessStories,
  Gallery,
  Schedule,
} from "@/components/site/sections-mid";
import {
  BmiCalculator,
  Testimonials,
  Faq,
  Contact,
} from "@/components/site/sections-bottom";

const TITLE = "PowerHub Fitness — Premium Gym in Vadodara | Train Hard. Live Strong.";
const DESCRIPTION =
  "Premium equipment, certified trainers, strength & functional training, personal coaching and nutrition guidance at PowerHub Fitness, Vadodara.";

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "HealthClub",
  name: "PowerHub",
  slogan: "Train Hard. Live Strong.",
  description: DESCRIPTION,
  telephone: "+91 8160629976",
  email: "hello@PowerHub.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "102, Race Course Road",
    addressLocality: "Vadodara",
    addressRegion: "Gujarat",
    postalCode: "390007",
    addressCountry: "IN",
  },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "500" },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "05:00",
      closes: "23:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "07:00",
      closes: "20:00",
    },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(JSON_LD) },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Membership />
        <Services />
        <Trainers />
        <SuccessStories />
        <Gallery />
        <Schedule />
        <BmiCalculator />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
