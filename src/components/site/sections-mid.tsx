import { Reveal, SectionHeading, Section, Counter } from "./primitives";
import trainer1 from "@/assets/trainer-1.jpg";
import trainer2 from "@/assets/trainer-2.jpg";
import trainer3 from "@/assets/trainer-3.jpg";
import trainer4 from "@/assets/trainer-4.jpg";
import member1 from "@/assets/member-1.jpg";
import member2 from "@/assets/member-2.jpg";
import member3 from "@/assets/member-3.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const TRAINERS = [
  {
    img: trainer1,
    name: "Rohan Mehta",
    spec: "Strength & Powerlifting",
    exp: "11 years",
    certs: "NSCA-CSCS, IPF Level 2",
  },
  {
    img: trainer2,
    name: "Ananya Desai",
    spec: "Yoga & Mobility",
    exp: "8 years",
    certs: "RYT-500, FRC Mobility Specialist",
  },
  {
    img: trainer3,
    name: "Marcus Cole",
    spec: "CrossFit & Conditioning",
    exp: "9 years",
    certs: "CF-L3, USAW Sports Performance",
  },
  {
    img: trainer4,
    name: "Priya Nair",
    spec: "Personal Training & Nutrition",
    exp: "7 years",
    certs: "ACE-CPT, Precision Nutrition L1",
  },
];

export function Trainers() {
  return (
    <Section id="trainers" className="bg-card">
      <SectionHeading
        eyebrow="The Team"
        title={
          <>
            Meet our <span className="text-primary">trainers</span>
          </>
        }
        subtitle="Certified coaches who program, correct and push — every single session."
      />
      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {TRAINERS.map((t, i) => (
          <Reveal as="article" key={t.name} delay={i * 90}>
            <div className="group overflow-hidden rounded-sm border border-border bg-background">
              <div className="overflow-hidden">
                <img
                  src={t.img}
                  alt={`${t.name}, ${t.spec} coach at PowerHub Fitness`}
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="aspect-4/5 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl tracking-wide">{t.name}</h3>
                <p className="mt-1 text-sm font-semibold text-primary">{t.spec}</p>
                <p className="mt-3 text-xs tracking-widest text-muted-foreground uppercase">
                  {t.exp} experience
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{t.certs}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

const STORIES = [
  {
    img: member1,
    name: "Karan S.",
    months: 9,
    lost: "18 kg",
    gained: "6 kg lean mass",
    quote:
      "I had tried three gyms before. The difference here is the coaching — every session had a purpose and my lifts kept climbing.",
  },
  {
    img: member2,
    name: "Meera J.",
    months: 12,
    lost: "14 kg",
    gained: "4 kg lean mass",
    quote:
      "The nutrition plan actually fit my family's food. I got stronger, stopped crash dieting and finally kept the results.",
  },
  {
    img: member3,
    name: "Vikram P.",
    months: 14,
    lost: "11 kg",
    gained: "7 kg lean mass",
    quote:
      "At 48 I deadlift more than I did at 30. PowerHub rebuilt my back health before it ever pushed heavy weight.",
  },
];

export function SuccessStories() {
  return (
    <Section id="results">
      <SectionHeading
        eyebrow="Success Stories"
        title={
          <>
            Real members. <span className="text-primary">Real change.</span>
          </>
        }
      />
      <div className="mt-16 grid gap-6 lg:grid-cols-3">
        {STORIES.map((s, i) => (
          <Reveal as="article" key={s.name} delay={i * 100}>
            <div className="group h-full overflow-hidden rounded-sm border border-border bg-card">
              <div className="relative overflow-hidden">
                <img
                  src={s.img}
                  alt={`${s.name} after training at PowerHub Fitness`}
                  width={800}
                  height={800}
                  loading="lazy"
                  className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute top-4 left-4 rounded-sm bg-primary px-3 py-1 text-[11px] font-bold tracking-widest text-primary-foreground uppercase">
                  <Counter to={s.months} /> month transformation
                </span>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 border-b border-border pb-4">
                  <div>
                    <p className="font-display text-3xl text-primary">{s.lost}</p>
                    <p className="text-xs tracking-widest text-muted-foreground uppercase">
                      Weight lost
                    </p>
                  </div>
                  <div>
                    <p className="font-display text-3xl text-accent">{s.gained}</p>
                    <p className="text-xs tracking-widest text-muted-foreground uppercase">
                      Muscle gain
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">“{s.quote}”</p>
                <p className="mt-4 font-display text-xl tracking-wide">{s.name}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

const GALLERY = [
  { img: gallery1, alt: "Weight floor with dumbbells and racks", span: "lg:col-span-2" },
  { img: gallery2, alt: "Group kettlebell class in session", span: "" },
  { img: gallery4, alt: "Member training with battle ropes", span: "" },
  { img: gallery3, alt: "Cardio zone with treadmills at night", span: "lg:col-span-2" },
];

export function Gallery() {
  return (
    <Section id="gallery" className="bg-card">
      <SectionHeading
        eyebrow="Gallery"
        title={
          <>
            Inside the <span className="text-primary">club</span>
          </>
        }
      />
      <div className="mt-16 grid auto-rows-[240px] gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[300px]">
        {GALLERY.map((g, i) => (
          <Reveal
            key={g.alt}
            delay={i * 90}
            className={`group overflow-hidden rounded-sm ${g.span}`}
          >
            <img
              src={g.img}
              alt={g.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-115"
            />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

const SCHEDULE = [
  ["Monday", "6:00 AM · Strength Foundations", "7:00 PM · CrossFit WOD"],
  ["Tuesday", "6:00 AM · Functional HIIT", "7:00 PM · Zumba"],
  ["Wednesday", "6:00 AM · Power Hour", "7:00 PM · Mobility & Yoga"],
  ["Thursday", "6:00 AM · Conditioning Circuit", "7:00 PM · CrossFit WOD"],
  ["Friday", "6:00 AM · Strength Foundations", "7:00 PM · Zumba"],
  ["Saturday", "7:00 AM · Team Endurance", "6:00 PM · Open Gym Coaching"],
  ["Sunday", "8:00 AM · Recovery Yoga", "—"],
];

export function Schedule() {
  return (
    <Section id="schedule">
      <SectionHeading
        eyebrow="Class Schedule"
        title={
          <>
            Weekly <span className="text-primary">timetable</span>
          </>
        }
        subtitle="Morning and evening sessions, all included with Quarterly and Annual plans."
      />
      <Reveal className="mt-16 overflow-x-auto rounded-sm border border-border">
        <table className="w-full min-w-[600px] border-collapse text-left">
          <caption className="sr-only">PowerHub Fitness weekly class schedule</caption>
          <thead>
            <tr className="bg-card">
              <th scope="col" className="p-5 font-display text-xl tracking-wider">
                Day
              </th>
              <th scope="col" className="p-5 font-display text-xl tracking-wider">
                Morning
              </th>
              <th scope="col" className="p-5 font-display text-xl tracking-wider">
                Evening
              </th>
            </tr>
          </thead>
          <tbody>
            {SCHEDULE.map(([day, am, pm]) => (
              <tr key={day} className="border-t border-border transition-colors hover:bg-card">
                <th scope="row" className="p-5 text-sm font-semibold tracking-widest uppercase">
                  {day}
                </th>
                <td className="p-5 text-sm text-muted-foreground">{am}</td>
                <td className="p-5 text-sm text-muted-foreground">{pm}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Reveal>
    </Section>
  );
}