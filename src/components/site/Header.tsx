import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const nav = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/expertise", label: "Expertise" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  const onDark = !scrolled && isHome;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-basalt/95 backdrop-blur-md border-b border-gold/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div
        className={`container-x mx-auto flex max-w-[1400px] items-center justify-between transition-all duration-500 ${
          scrolled ? "h-20" : "h-28"
        }`}
      >
        <Link to="/" className="flex items-center" aria-label="Ratnanjali Group — Home">
          <Logo
            className={`w-auto transition-all duration-500 brightness-0 invert drop-shadow-[0_0_12px_rgba(196,164,105,0.2)] ${
              scrolled ? "h-10 md:h-11" : "h-14 md:h-16"
            }`}
            variant="light"
          />
        </Link>

        {/* Desktop nav — Marcellus small-caps, wide tracking */}
        <nav className="hidden items-center gap-10 lg:flex">
          {nav.map((n, i) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="group relative font-label text-[12px] uppercase tracking-[0.22em] text-gold-soft/70 transition-colors hover:text-gold-soft"
              activeProps={{ className: "text-gold-soft" }}
              style={{ animationDelay: `${0.1 + i * 0.08}s` }}
            >
              {n.label}
              {/* Gold chisel-stroke underline */}
              <span className="pointer-events-none absolute -bottom-1.5 left-0 h-[0.5px] w-0 bg-gradient-to-r from-gold to-gold/50 transition-all duration-500 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Enquire CTA — gold shimmer */}
        <Link
          to="/contact"
          className="hidden items-center gap-2 border border-gold/30 px-6 py-2.5 font-label text-[11px] uppercase tracking-[0.24em] text-gold-soft transition-all lg:inline-flex gold-shimmer hover:border-gold/60 hover:bg-gold/5"
        >
          Enquire
        </Link>

        {/* Mobile menu toggle */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-gold-soft"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu — dark stone */}
      <div
        className={`lg:hidden overflow-hidden bg-basalt border-t border-gold/10 transition-[max-height] duration-500 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="container-x mx-auto flex flex-col gap-1 py-6">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="py-3 font-label text-sm uppercase tracking-[0.18em] text-gold-soft/70 hover:text-gold-soft transition-colors"
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-3 inline-flex items-center justify-center border border-gold/30 px-5 py-3 font-label text-[11px] uppercase tracking-[0.24em] text-gold-soft hover:bg-gold/10"
          >
            Enquire
          </Link>
        </nav>
      </div>
    </header>
  );
}
