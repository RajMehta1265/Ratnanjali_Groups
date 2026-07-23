import { Reveal } from "@/components/site/RevealOnScroll";
import { homeData } from "@/data/home";
import { DharmaWheel } from "@/components/heritage/DharmaWheel";

export function VideoShowcase() {
  const { videoShowcase } = homeData;

  return (
    <section className="relative bg-basalt">
      <div className="relative h-[80vh] min-h-[560px] w-full overflow-hidden">
        {/* Video background */}
        <div className="absolute inset-0 scale-105 [filter:blur(4px)]">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src={videoShowcase.videoUrl} type="video/mp4" />
          </video>
        </div>

        {/* Dark overlays */}
        <div className="absolute inset-0 bg-basalt/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,0.5))]" />
        <div className="absolute inset-0 bg-grain-dark pointer-events-none" />

        {/* Dharma wheel background accent — Buddhist "balance & growth" thread */}
        <div className="absolute right-[10%] top-[15%] opacity-[0.04] pointer-events-none">
          <DharmaWheel size={400} animate slow color="var(--gold)" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex h-full items-end">
          <div className="container-x mx-auto max-w-[1400px] pb-16 lg:pb-24">
            <Reveal className="max-w-2xl text-white">
              <div className="eyebrow text-gold/50"><span className="rule" />The Ratnanjali Film</div>
              <h2 className="mt-5 font-display text-4xl leading-[1.02] tracking-wide kerning-tight sm:text-5xl lg:text-6xl">
                Stories built in{" "}
                <em className="not-italic font-heading italic gold-gradient-text">
                  stone, light and time.
                </em>
              </h2>
            </Reveal>
          </div>
        </div>

        {/* Stone-carved frame borders */}
        <div className="absolute inset-4 border border-gold/5 pointer-events-none z-20" />
      </div>
    </section>
  );
}
