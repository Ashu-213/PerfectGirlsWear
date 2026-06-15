import { useEffect, useState } from "react";
import { Menu, MessageCircle, Phone, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { BRAND } from "./brand";

const links = [
  { label: "Collections", href: "#collections" },
  { label: "About", href: "#about" },
  { label: "Occasions", href: "#occasions" },
  { label: "Showroom", href: "#showroom" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${scrolled
            ? "backdrop-blur-xl bg-[rgba(247,239,233,0.92)] shadow-[0_1px_0_rgba(0,0,0,0.05)]"
            : "bg-transparent"
          }`}
      >
        <div className="container-editorial flex h-[72px] items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <img src={logo} alt="Perfect Girls Wear" className="h-11 w-11 rounded-full object-cover" />
            <span className="hidden sm:flex flex-col leading-tight">
              <span className="font-display text-lg text-charcoal">Perfect</span>
              <span className="font-editorial text-xs text-rose -mt-1">Girls Wear</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-9">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[13px] font-medium uppercase tracking-[0.08em] text-charcoal hover:text-rose transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={BRAND.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-rose px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.08em] text-white transition-all hover:scale-[1.03] hover:shadow-[var(--shadow-rose-glow)]"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-charcoal/15 text-charcoal"
              aria-label="Menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[60] bg-cream flex flex-col">
          <div className="container-editorial flex h-[72px] items-center justify-between">
            <div className="flex items-center gap-2">
              <img src={logo} alt="" className="h-10 w-10 rounded-full" />
              <span className="font-display text-lg text-charcoal">Perfect</span>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-charcoal/15"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="flex flex-1 flex-col items-center justify-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-4xl text-charcoal hover:text-rose transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href={BRAND.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-rose px-7 py-3 text-sm font-semibold uppercase tracking-wider text-white"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
            <a href={`tel:${BRAND.phoneTel}`} className="text-charcoal flex items-center gap-2 text-sm">
              <Phone className="h-4 w-4 text-rose" /> {BRAND.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
