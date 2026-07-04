import { Reveal } from "@/components/site/RevealOnScroll";
import { ShlokaKicker } from "@/components/heritage/ShlokaKicker";

const reasons = [
  {
    t: "Architectural Excellence",
    d: "Every elevation is shaped with named architects and in-house design review — never templated.",
    thread: "Ramayana"
  },
  {
    t: "Strategic Locations",
    d: "Every site is hand-selected at addresses that compound in value.",
    thread: "Mahabharata"
  },
  {
    t: "Quality Construction",
    d: "Specified by structural consultants, executed with audited material grades.",
    thread: "Jainism"
  },
  {
    t: "Timely Delivery",
    d: "Our possession schedules are honoured — a discipline carried across two decades.",
    thread: "Ramayana"
  },
  {
    t: "Sustainable Development",
    d: "Rainwater recharge, sewage treatment, low-impact materials — built into every project.",
    thread: "Jainism"
  },
  {
    t: "Long-Term Value",
    d: "We design for the second owner as carefully as the first — built to appreciate.",
    thread: "Buddhism"
  },
];

export function WhyChoose() {
  return (
    <section className="relative bg-basalt py-28 text-white lg:py-36 overflow-hidden">
      {/* Background textures */}
      <div className="absolute inset-0 bg-grain-dark pointer-events-none" />
      <div className="absolute inset-0 bg-jali-dark pointer-events-none opacity-15" />

      {/* Background video overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-10"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source
            src="https://cdn.sanity.io/files/72qij255/production/eceb870ee451a6d05743a841f02b13293013646e.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-basalt/80" />
      </div>

      <div className="container-x relative mx-auto max-w-[1400px]">
        <Reveal className="max-w-3xl">
          <div className="eyebrow mb-4 text-gold/50"><span className="rule" />Why Ratnanjali</div>
          <ShlokaKicker light className="mb-6">
            Where duty meets design, and integrity builds cities
          </ShlokaKicker>
          <h2 className="font-display text-4xl leading-[1.05] sm:text-5xl lg:text-6xl tracking-wide">
            The discipline behind{" "}
            <em className="not-italic font-heading italic gold-gradient-text">every Ratnanjali address.</em>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px bg-gold/10 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <Reveal
              key={r.t}
              delay={(i % 3) as 0 | 1 | 2}
              className="group bg-basalt p-10 transition-colors hover:bg-stone-dark/60"
            >
              {/* Gold index numeral */}
              <div className="font-display text-5xl gold-gradient-text opacity-60 num">
                0{i + 1}
              </div>
              <h3 className="mt-6 font-display text-2xl tracking-wide text-gold-soft">{r.t}</h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-white/50">{r.d}</p>
              {/* Gold accent line */}
              <div className="mt-6 h-px w-10 bg-gold/30 transition-all duration-700 group-hover:w-20 group-hover:bg-gold/60" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
