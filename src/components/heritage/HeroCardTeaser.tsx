/**
 * HeroCardTeaser — Framer Cards-style stacked expanding card animation
 *
 * Inspired by https://framer.com/m/Cards-4FmA.js
 * 4 cards displayed in a row. The active card is expanded (~60% width)
 * showing full content, while the other 3 are collapsed (~13% each)
 * showing just the number and a thin vertical title.
 * Clicking a collapsed card expands it with a spring-like transition.
 *
 * Heritage thread: Mahabharata (strategy/vision — the four pillars as dharmic foundations)
 */

import { useState, useEffect, useRef } from "react";
import { homeData } from "@/data/home";

export function HeroCardTeaser() {
  const { expertise } = homeData;
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Auto-cycle every 4.5 seconds
  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setActive((prev) => (prev + 1) % expertise.sectors.length);
    }, 4500);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [active, expertise.sectors.length]);

  const handleClick = (i: number) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setActive(i);
  };

  return (
    <div className="relative">
      {/* Shloka kicker */}
      <p className="shloka-kicker mb-8 text-center text-gold font-medium">
        — Four disciplines. One standard of craft —
      </p>

      {/* Cards row — Framer-style expanding layout */}
      <div className="flex gap-3 h-[340px] sm:h-[380px] lg:h-[420px]">
        {expertise.sectors.map((s, i) => {
          const isActive = i === active;
          return (
            <button
              key={s.title}
              onClick={() => handleClick(i)}
              className="group relative overflow-hidden border border-gold/15 transition-all duration-700 ease-[cubic-bezier(.4,0,.2,1)] focus:outline-none"
              style={{
                flex: isActive ? "6 1 0%" : "1 1 0%",
                minWidth: 0,
              }}
              aria-label={`View ${s.title}`}
            >
              {/* Background image */}
              <div className="absolute inset-0">
                <img
                  src={s.img}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-700"
                  style={{
                    transform: isActive ? "scale(1)" : "scale(1.15)",
                    filter: isActive ? "brightness(0.55)" : "brightness(0.25)",
                  }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-basalt/90 via-basalt/50 to-basalt/30" />
              </div>

              {/* Carved corner brackets */}
              <div
                className="carved-corner carved-corner-tl transition-opacity duration-500"
                style={{ opacity: isActive ? 1 : 0 }}
              />
              <div
                className="carved-corner carved-corner-tr transition-opacity duration-500"
                style={{ opacity: isActive ? 1 : 0 }}
              />
              <div
                className="carved-corner carved-corner-bl transition-opacity duration-500"
                style={{ opacity: isActive ? 1 : 0 }}
              />
              <div
                className="carved-corner carved-corner-br transition-opacity duration-500"
                style={{ opacity: isActive ? 1 : 0 }}
              />

              {/* ── Collapsed state: vertical number + title ── */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center gap-4 transition-opacity duration-500"
                style={{
                  opacity: isActive ? 0 : 1,
                  pointerEvents: isActive ? "none" : "auto",
                }}
              >
                <span className="font-display text-2xl gold-gradient-text font-semibold opacity-70">
                  {s.num}
                </span>
                <span
                  className="font-label text-[10px] font-medium uppercase tracking-[0.28em] text-gold-soft/70 [writing-mode:vertical-lr] rotate-180"
                >
                  {s.title}
                </span>
                <div className="h-6 w-px bg-gold/30" />
              </div>

              {/* ── Expanded state: full content ── */}
              <div
                className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 lg:p-10 transition-opacity duration-700"
                style={{
                  opacity: isActive ? 1 : 0,
                  pointerEvents: isActive ? "auto" : "none",
                }}
              >
                <div
                  className="transition-all duration-700 delay-100"
                  style={{
                    transform: isActive ? "translateY(0)" : "translateY(24px)",
                    opacity: isActive ? 1 : 0,
                  }}
                >
                  <span className="font-display text-4xl sm:text-5xl gold-gradient-text font-bold opacity-60">
                    {s.num}
                  </span>
                  <h3 className="mt-3 font-display text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-wide text-white">
                    {s.title}
                  </h3>
                  <p className="mt-3 max-w-lg font-body text-sm sm:text-base font-medium leading-relaxed text-white/70">
                    {s.desc}
                  </p>
                  {/* Gold accent */}
                  <div className="mt-5 h-px w-16 bg-gradient-to-r from-gold to-gold/30" />
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Dot indicators */}
      <div className="mt-6 flex items-center justify-center gap-3">
        {expertise.sectors.map((s, i) => (
          <button
            key={s.title}
            onClick={() => handleClick(i)}
            aria-label={`Go to ${s.title}`}
            className={`transition-all duration-500 rounded-full ${
              i === active
                ? "h-2.5 w-2.5 bg-gold shadow-[0_0_8px_rgba(196,164,105,0.4)]"
                : "h-1.5 w-1.5 bg-gold/30 hover:bg-gold/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
