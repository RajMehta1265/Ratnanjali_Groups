import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/RevealOnScroll";
import { Mail, Phone, MapPin } from "lucide-react";
import { contactData } from "@/data/contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Ratnanjali Group" },
      { name: "description", content: "Speak with the Ratnanjali Group team about residential, commercial and hospitality opportunities." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { hero, form, office } = contactData;

  return (
    <PageShell>
      <section className="pb-12 pt-40 lg:pt-48">
        <div className="container-x mx-auto max-w-[1400px]">
          <div className="eyebrow eyebrow-gold mb-6"><span className="rule" />{hero.eyebrow}</div>
          <h1 className="max-w-5xl font-display text-6xl leading-[1.02] sm:text-7xl lg:text-8xl tracking-tight kerning-tight">
            {hero.titleText} <br className="hidden sm:block" />
            <em className="text-foreground/70">{hero.titleItalic}</em>
          </h1>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container-x mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <form className="grid gap-6" onSubmit={(e) => { e.preventDefault(); }}>
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Full Name" name="name" />
                <Field label="Phone" name="phone" type="tel" />
              </div>
              <Field label="Email" name="email" type="email" />
              <div>
                <label className="mb-2 block text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Interested In</label>
                <select className="w-full border border-border bg-transparent px-0 py-3 text-base text-foreground outline-none focus:border-foreground">
                  {form.interestedOptions.map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-2 block text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Message</label>
                <textarea rows={5} className="w-full border border-border bg-transparent px-0 py-3 text-base text-foreground outline-none focus:border-foreground" />
              </div>
              <button type="submit" className="mt-4 w-fit bg-foreground px-10 py-4 text-[12px] uppercase tracking-[0.24em] text-background transition-colors hover:bg-foreground/85">
                Send Enquiry
              </button>
            </form>
          </Reveal>

          <Reveal delay={1} className="lg:col-span-5">
            <div className="border border-border bg-stone-soft p-10">
              <div className="eyebrow eyebrow-gold mb-6">{office.eyebrow}</div>
              <div className="space-y-6 text-sm">
                <div className="flex gap-4">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-gold" />
                  <p className="leading-relaxed">
                    {office.address.map((line, i) => (
                      <span key={i}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </p>
                </div>
                <div className="flex gap-4"><Phone size={18} className="mt-0.5 shrink-0 text-gold" /><p>{office.phone}</p></div>
                <div className="flex gap-4"><Mail size={18} className="mt-0.5 shrink-0 text-gold" /><p>{office.email}</p></div>
              </div>
            </div>

            <div className="mt-6 aspect-[4/3] w-full overflow-hidden border border-border bg-stone">
              <div className="flex h-full w-full items-center justify-center text-muted-foreground">
                <span className="text-[11px] uppercase tracking-[0.24em]">{office.mapPlaceholder}</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-[11px] uppercase tracking-[0.22em] text-muted-foreground">{label}</label>
      <input id={name} name={name} type={type} className="w-full border-b border-border bg-transparent px-0 py-3 text-base text-foreground outline-none transition-colors focus:border-foreground" />
    </div>
  );
}

