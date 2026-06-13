import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Clock,
  Gem,
  Heart,
  Instagram,
  Layers,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  Shield,
  Sparkles,
  Star,
  Tag,
  TrendingUp,
} from "lucide-react";
import { Nav } from "@/components/nav";
import { BRAND } from "@/components/brand";
import { FloralCluster, Petal, PetalField } from "@/components/petals";
import { LuxuryCursor } from "@/components/cursor";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion";
import { useLenis } from "@/hooks/use-lenis";

import logo from "@/assets/logo.png.asset.json";
import heroModels from "@/assets/hero-models.jpg";
import boutiqueInterior from "@/assets/boutique-interior.jpg";
import cKurti from "@/assets/c-kurti.jpg";
import cGown from "@/assets/c-gown.jpg";
import cTop from "@/assets/c-top.jpg";
import cJeans from "@/assets/c-jeans.jpg";
import cPalazzo from "@/assets/c-palazzo.jpg";
import cDupatta from "@/assets/c-dupatta.jpg";

import oFestival from "@/assets/o-festival.jpg";
import oWedding from "@/assets/o-wedding.jpg";
import oParty from "@/assets/o-party.jpg";
import oCasual from "@/assets/o-casual.jpg";
import oOffice from "@/assets/o-office.jpg";
import sEntrance from "@/assets/s-entrance.jpg";
import sGowns from "@/assets/s-gowns.jpg";

import ig1 from "@/assets/ig-1.jpg";
import ig2 from "@/assets/ig-2.jpg";
import ig3 from "@/assets/ig-3.jpg";
import ig4 from "@/assets/ig-4.jpg";

const EASE = [0.16, 1, 0.3, 1] as const;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Perfect Girls Wear — Premium Women's Fashion in Sarangpur" },
      {
        name: "description",
        content:
          "A luxury boutique for women's fashion in Sarangpur. Kurtis, gowns, lehengas, palazzos, dupattas & more. Style • Comfort • Confidence.",
      },
      { property: "og:title", content: "Perfect Girls Wear — Premium Women's Fashion in Sarangpur" },
      {
        property: "og:description",
        content:
          "A luxury boutique for women's fashion in Sarangpur. Visit our showroom or chat with us on WhatsApp.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  useLenis();
  return (
    <div id="top" className="min-h-screen overflow-x-hidden bg-cream text-charcoal">
      <LuxuryCursor />
      <Nav />
      <Hero />
      <Marquee />
      <Collections />
      <About />
      <Occasions />
      <WhyChooseUs />
      <Showroom />
      <Testimonials />
      <InstagramFeed />
      <Contact />
      <Footer />
    </div>
  );
}

/* ---------------- MARQUEE ---------------- */
function Marquee() {
  const words = [
    "Kurti", "Gowns", "Lehenga", "Palazzo", "Dupatta",
    "Tops", "Jeans", "Shirts", "Leggings",
    "Festival Wear", "Wedding Edit", "New Arrivals Weekly",
  ];
  const loop = [...words, ...words];
  return (
    <div className="relative border-y border-charcoal/10 bg-blush/40 py-6 overflow-hidden">
      <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
        {loop.map((w, i) => (
          <span key={i} className="inline-flex items-center gap-10">
            <span className="font-display text-2xl md:text-3xl text-charcoal">{w}</span>
            <Petal size={14} />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // Luxury — subtle parallax
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const shapesY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const modelsY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const modelsScale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);
  const fadeOut = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen w-full overflow-hidden pt-[72px]">
      {/* Background gradient + soft blobs (slowest layer) */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f7efe9] via-[#fadadd]/40 to-[#f7efe9]" />
        <div className="absolute -right-40 top-20 h-[700px] w-[700px] rounded-full bg-blush/30 blur-3xl" aria-hidden />
        <div className="absolute -left-40 bottom-0 h-[500px] w-[500px] rounded-full bg-rose/10 blur-3xl" aria-hidden />
      </motion.div>

      {/* Decorative floral shapes (mid-fast layer) */}
      <motion.div style={{ y: shapesY, opacity: fadeOut }} className="pointer-events-none absolute inset-0 z-0">
        <FloralCluster className="absolute left-4 top-24 h-28 w-28 opacity-80 sm:left-6 sm:h-40 sm:w-40" />
        <FloralCluster className="absolute right-4 bottom-12 h-24 w-24 opacity-60 sm:right-6 sm:h-28 sm:w-28" flip />
      </motion.div>

      {/* Massive background type */}
      <div className="pointer-events-none absolute inset-x-0 top-[20%] z-0 flex flex-col items-center select-none">
        <span
          className="font-display font-bold tracking-tighter text-charcoal/[0.06]"
          style={{ fontSize: "clamp(64px, 14vw, 220px)", lineHeight: 0.9 }}
        >
          PERFECT
        </span>
        <span
          className="font-display font-bold tracking-tighter text-charcoal/[0.04] -mt-6"
          style={{ fontSize: "clamp(32px, 7vw, 110px)", lineHeight: 0.9 }}
        >
          GIRLS WEAR
        </span>
      </div>

      <PetalField count={7} />

      <div className="container-editorial relative z-10 grid min-h-[calc(100vh-72px)] grid-cols-1 items-center gap-10 py-12 lg:grid-cols-12 lg:gap-8">
        {/* Left: brand intro with staggered reveal */}
        <motion.div
          className="lg:col-span-6 flex flex-col items-start"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
          }}
        >
          {[
            <span key="badge" className="inline-flex items-center gap-2 rounded-full bg-white/60 px-4 py-1.5 backdrop-blur-sm">
              <Petal size={14} />
              <span className="eyebrow">A Sarangpur Boutique</span>
            </span>,
            <h1
              key="title"
              className="font-display font-bold text-charcoal mt-6 leading-[0.95] tracking-tight"
              style={{ fontSize: "clamp(44px, 8vw, 120px)" }}
            >
              <span className="text-rose italic">Perfect</span>
              <br />
              Girls Wear
            </h1>,
            <div key="rule" className="mt-5 flex items-center gap-3">
              <span className="h-px w-12 bg-rose/60" />
              <Heart className="h-3 w-3 fill-rose text-rose" />
              <span className="eyebrow">{BRAND.tagline}</span>
              <Heart className="h-3 w-3 fill-rose text-rose" />
              <span className="h-px w-12 bg-rose/60" />
            </div>,
            <p key="hindi" className="font-editorial text-2xl text-charcoal/80 mt-6 max-w-md">
              नए फैशन का <span className="text-rose">परफेक्ट स्टाइल</span>
            </p>,
            <p key="desc" className="text-sm leading-relaxed text-muted-ink mt-4 max-w-md">
              Discover premium quality girls wear, elegant styles, and the latest fashion trends designed for
              every occasion. Handpicked with love in our Sarangpur showroom.
            </p>,
            <div key="ctas" className="mt-8 flex flex-wrap gap-3">
              <a href="#collections" className="btn-luxury btn-rose">
                Explore Collections
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href={BRAND.whatsapp} target="_blank" rel="noreferrer" className="btn-luxury btn-outline">
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </a>
            </div>,
          ].map((node, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
              }}
              className="w-full"
            >
              {node}
            </motion.div>
          ))}
        </motion.div>

        {/* Right: editorial photo with parallax */}
        <motion.div
          className="lg:col-span-6 relative"
          style={{ y: modelsY }}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: EASE, delay: 0.2 }}
        >
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[24px] shadow-[var(--shadow-luxury)] image-frame">
            <motion.img
              src={heroModels}
              alt="Two women in modern Indian fashion outfits walking with shopping bags"
              className="h-full w-full object-cover"
              style={{ scale: modelsScale }}
              width={1080}
              height={1440}
              fetchPriority="high"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-charcoal/40 to-transparent" />
          </div>

          {/* floating badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.9 }}
            className="absolute -left-2 -bottom-5 sm:-left-10 sm:-bottom-8 bg-charcoal text-white rounded-2xl px-5 py-3 sm:px-6 sm:py-4 shadow-2xl border border-rose/40 max-w-[240px]"
          >
            <p className="font-editorial text-lg leading-tight">
              <span className="text-rose">नया</span> कलेक्शन
            </p>
            <p className="text-xs uppercase tracking-wider text-white/70 mt-1">हमेशा उपलब्ध</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- COLLECTIONS ---------------- */
const collections = [
  { name: "Kurti", hindi: "कुर्ती", img: cKurti },
  { name: "Gowns", hindi: "गाउन", img: cGown },
  { name: "Tops", hindi: "टॉप्स", img: cTop },
  { name: "Jeans", hindi: "जीन्स", img: cJeans },
  { name: "Palazzo", hindi: "प्लाजो", img: cPalazzo },
  { name: "Dupatta", hindi: "दुपट्टा", img: cDupatta },
  { name: "Shirts", hindi: "शर्ट", img: cTop },
  { name: "Leggings", hindi: "लेगिंग्स", img: cPalazzo },
];

function SectionHeader({
  eyebrow,
  title,
  subtitle,
  light = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  light?: boolean;
}) {
  return (
    <Reveal className="text-center">
      <div className="inline-flex items-center gap-3">
        <Petal size={12} />
        <span className="eyebrow">{eyebrow}</span>
        <Petal size={12} />
      </div>
      <h2
        className={`font-display font-bold mt-4 leading-[1.1] tracking-tight text-balance ${
          light ? "text-white" : "text-charcoal"
        }`}
        style={{ fontSize: "clamp(32px, 5vw, 64px)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base ${light ? "text-white/70" : "text-muted-ink"}`}>{subtitle}</p>
      )}
      <div className="mx-auto mt-6 h-px w-16 bg-rose" />
    </Reveal>
  );
}

function Collections() {
  return (
    <section id="collections" className="bg-cream py-20 sm:py-24 md:py-32">
      <div className="container-editorial">
        <SectionHeader
          eyebrow="Our Collections"
          title={<>Fashion For <em className="font-editorial text-rose not-italic"><span className="italic">Every</span></em> Occasion</>}
          subtitle="हर अंदाज़, हर मौक़े के लिए"
        />

        <StaggerGroup className="mt-12 sm:mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {collections.map((c) => (
            <StaggerItem key={c.name}>
              <motion.div
                whileHover={{ y: -10, scale: 1.03 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-white shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card-hover)]"
              >
                <img
                  src={c.img}
                  alt={`${c.name} collection at Perfect Girls Wear`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="flex items-center gap-2">
                    <Petal size={10} />
                    <span className="text-[11px] uppercase tracking-[0.15em] text-white/70">
                      {c.hindi}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-white mt-1">
                    {c.name}
                  </h3>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

/* ---------------- ABOUT ---------------- */
function About() {
  const features = [
    { icon: Sparkles, label: "Latest Designs" },
    { icon: Gem, label: "Premium Quality" },
    { icon: Tag, label: "Affordable Prices" },
    { icon: Clock, label: "New Arrivals Weekly" },
  ];
  return (
    <section id="about" className="bg-white py-20 sm:py-24 md:py-32">
      <div className="container-editorial grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-7 relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[20px] shadow-[var(--shadow-luxury)] image-frame">
            <img
              src={boutiqueInterior}
              alt="Inside the Perfect Girls Wear boutique"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105"
            />
          </div>
          <div className="absolute -right-4 -bottom-6 hidden md:block">
            <FloralCluster className="h-28 w-28" />
          </div>
        </Reveal>

        <Reveal delay={0.15} className="lg:col-span-5">
          <span className="eyebrow">About Us</span>
          <h2
            className="font-display font-bold text-charcoal mt-3 leading-[1.05]"
            style={{ fontSize: "clamp(28px, 4vw, 52px)" }}
          >
            Welcome to{" "}
            <span className="italic text-rose">Perfect</span> Girls Wear
          </h2>
          <div className="mt-4 h-0.5 w-20 bg-rose" />

          <p className="text-base leading-[1.7] text-muted-ink mt-6 max-w-lg">
            A fashion destination where style, quality, and affordability come together. For every occasion,
            every season, and every personality — handpicked with care in Sarangpur.
          </p>

          <div className="mt-8 rounded-2xl bg-cream p-6 border-l-[3px] border-rose">
            <p className="font-editorial text-lg leading-[1.7] text-charcoal">
              "Fashion is not just about wearing clothes — it's about expressing who you are. At Perfect
              Girls Wear, we believe every girl deserves to feel confident, beautiful, and perfectly
              herself."
            </p>
            <p className="text-sm text-rose mt-4">— {BRAND.owner}, Founder</p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {features.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="rounded-xl bg-cream p-4 text-center transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
              >
                <Icon className="mx-auto h-5 w-5 text-rose" />
                <p className="text-xs font-semibold text-charcoal mt-2 leading-snug">{label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- OCCASIONS ---------------- */
const occasions = [
  { name: "Festival Wear", sub: "Celebrate in Style", img: oFestival },
  { name: "Party Wear", sub: "Make Every Entrance Count", img: oParty },
  { name: "Wedding Collection", sub: "Elegance for Every Ceremony", img: oWedding },
  { name: "Casual Wear", sub: "Effortless Everyday Fashion", img: oCasual },
  { name: "Office Wear", sub: "Professional & Chic", img: oOffice },
];

function Occasions() {
  return (
    <section id="occasions" className="bg-cream py-20 sm:py-24 md:py-32">
      <div className="container-editorial">
        <SectionHeader eyebrow="Shop by Occasion" title="Find Your Perfect Look" />

        <StaggerGroup className="mt-12 sm:mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {occasions.map((o, i) => (
            <StaggerItem key={o.name} className={i === 3 ? "lg:col-start-1" : ""}>
              <motion.div
                whileHover={{ y: -8, scale: 1.03 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="group relative aspect-[4/5] overflow-hidden rounded-2xl shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card-hover)]"
              >
                <img
                  src={o.img}
                  alt={o.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                  <h3
                    className="font-display font-bold text-white leading-tight"
                    style={{ fontSize: "clamp(20px, 2.5vw, 32px)" }}
                  >
                    {o.name}
                  </h3>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.15em] text-white/75">{o.sub}</p>
                </div>
                <Petal size={14} className="absolute bottom-5 right-5 opacity-60" />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

/* ---------------- WHY CHOOSE US ---------------- */
function WhyChooseUs() {
  const items = [
    { icon: Shield, title: "Premium Quality", desc: "Handpicked fabrics and expert craftsmanship in every piece" },
    { icon: Tag, title: "Affordable Prices", desc: "Luxury fashion that fits your budget without compromise" },
    { icon: TrendingUp, title: "Latest Trends", desc: "New styles arriving weekly, staying ahead of fashion" },
    { icon: Layers, title: "Huge Variety", desc: "From casual daily wear to grand wedding collections" },
    { icon: Heart, title: "Customer Love", desc: "500+ happy customers trust us with their style" },
  ];
  return (
    <section className="bg-charcoal py-20 sm:py-24 md:py-28">
      <div className="container-editorial">
        <SectionHeader
          eyebrow="Why Choose Us"
          title="What Makes Us Special"
          subtitle="What makes Perfect Girls Wear different"
          light
        />
        <StaggerGroup className="mt-12 sm:mt-14 grid grid-cols-1 gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {items.map(({ icon: Icon, title, desc }) => (
            <StaggerItem key={title}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-7 sm:p-8 text-center transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:bg-white/[0.07] hover:border-rose/30 hover:shadow-[0_8px_32px_rgba(232,109,141,0.15)]">
                <Icon className="mx-auto h-7 w-7 text-rose" />
                <h3 className="mt-5 text-base font-semibold text-white">{title}</h3>
                <p className="mt-2 text-[13px] leading-[1.6] text-white/60">{desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

/* ---------------- SHOWROOM ---------------- */
const showroom = [
  { img: sEntrance, caption: "Entrance View" },
  { img: boutiqueInterior, caption: "Kurti Collection" },
  { img: sGowns, caption: "Gown Display" },
];

function Showroom() {
  return (
    <section id="showroom" className="bg-ink py-20 sm:py-24 md:py-32">
      <div className="container-editorial">
        <SectionHeader
          eyebrow="Our Boutique"
          title="Experience Our Store"
          subtitle="Step inside our fashion haven"
          light
        />
      </div>

      <Reveal className="mt-12 sm:mt-14 overflow-x-auto pb-8 [&::-webkit-scrollbar]:hidden" >
        <div className="flex gap-6 px-[max(8vw,24px)] sm:px-[max(15vw,40px)]" style={{ scrollSnapType: "x mandatory" }}>
          {showroom.map((s, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 overflow-hidden rounded-2xl image-frame"
              style={{ width: "min(80vw, 900px)", aspectRatio: "16/10", scrollSnapAlign: "center" }}
            >
              <img
                src={s.img}
                alt={s.caption}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink to-transparent" />
              <p className="absolute bottom-6 left-6 text-sm text-white">{s.caption}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
const testimonials = [
  {
    quote:
      "I walked in looking for a wedding outfit and left with three! The collection is incredible and the prices are so reasonable. Pankaj ji really understands what young women want to wear.",
    name: "Priya Sharma",
    role: "Wedding Collection Buyer",
  },
  {
    quote:
      "Perfect Girls Wear has become my go-to for every occasion. The quality is amazing, the styles are always on trend, and the staff makes you feel so welcome.",
    name: "Neha Patel",
    role: "Regular Customer",
  },
  {
    quote:
      "I was looking for casual kurtis for college and found the most beautiful pieces. My friends keep asking where I shop! New arrivals every week keep me coming back.",
    name: "Ananya Gupta",
    role: "College Student",
  },
];

function Testimonials() {
  return (
    <section className="bg-cream py-20 sm:py-24 md:py-32">
      <div className="container-editorial max-w-[1200px]">
        <SectionHeader eyebrow="Testimonials" title="What Our Customers Say" />

        <StaggerGroup className="mt-12 sm:mt-14 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="relative h-full rounded-2xl bg-white p-8 sm:p-10 shadow-[var(--shadow-soft)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]"
              >
                <Petal size={12} className="absolute right-5 top-5 opacity-40" />
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-terracotta text-terracotta" />
                  ))}
                </div>
                <p className="font-editorial text-lg sm:text-xl leading-[1.6] text-charcoal mt-5">
                  "{t.quote}"
                </p>
                <div className="my-6 h-px w-10 bg-border-soft" />
                <p className="font-semibold text-charcoal">{t.name}</p>
                <p className="text-[13px] text-muted-ink">{t.role}</p>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

/* ---------------- INSTAGRAM ---------------- */
function InstagramFeed() {
  const images = [ig1, ig2, ig3, ig4, ig1, ig3, ig2, ig4];
  return (
    <section className="bg-white py-20 sm:py-24 md:py-32">
      <div className="container-editorial">
        <SectionHeader
          eyebrow={BRAND.instagramHandle}
          title="Follow Our Fashion Journey"
        />
      </div>

      <StaggerGroup className="mt-12 sm:mt-14 grid grid-cols-2 md:grid-cols-4">
        {images.map((src, i) => (
          <StaggerItem key={i}>
            <div className="group relative aspect-square overflow-hidden">
              <img
                src={src}
                alt="Instagram post"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>

      <Reveal className="mt-12 text-center">
        <a href={BRAND.instagram} target="_blank" rel="noreferrer" className="btn-luxury btn-dark">
          <Instagram className="h-4 w-4" />
          Follow Us on Instagram
        </a>
      </Reveal>
    </section>
  );
}

/* ---------------- CONTACT ---------------- */
function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-ink py-24 sm:py-32 md:py-40">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse at center, rgba(232,109,141,0.10) 0%, transparent 60%)" }}
      />
      <PetalField count={4} tint="dark" />

      <div className="container-editorial relative">
        <Reveal className="mx-auto max-w-[920px]">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 backdrop-blur-2xl md:p-14 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_40px_80px_rgba(0,0,0,0.3)]">
            <div className="text-center">
              <img src={logo.url} alt="Perfect Girls Wear" className="mx-auto h-14 w-14 rounded-full" />
              <p className="eyebrow mt-4 text-white/60">{BRAND.tagline}</p>
              <h2
                className="font-display font-bold text-white mt-6 leading-tight"
                style={{ fontSize: "clamp(28px, 4vw, 52px)" }}
              >
                Get In <em className="font-editorial text-rose not-italic italic">Touch</em>
              </h2>
              <p className="mt-3 text-base text-white/60">Visit us or chat with us on WhatsApp</p>
            </div>

            <div className="mt-10 sm:mt-12 grid gap-10 sm:gap-12 md:grid-cols-2">
              <div className="space-y-5">
                <ContactRow icon={Phone} label="Call us" value={BRAND.phoneDisplay} href={`tel:${BRAND.phoneTel}`} />
                <ContactRow icon={MessageCircle} label="WhatsApp" value="Chat on WhatsApp" href={BRAND.whatsapp} accent />
                <ContactRow icon={Instagram} label="Instagram" value={BRAND.instagramHandle} href={BRAND.instagram} />
                <ContactRow icon={MapPin} label="Visit" value={BRAND.address} href={BRAND.mapsUrl} />
              </div>

              <a
                href={BRAND.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="group relative flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] p-8 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-rose/40 hover:bg-white/[0.06]"
                style={{ aspectRatio: "4/3" }}
              >
                <div className="text-center text-white/70">
                  <MapPin className="mx-auto h-8 w-8 text-rose" />
                  <p className="mt-3 font-display text-lg text-white">Find Us On Google Maps</p>
                  <p className="mt-1 text-xs uppercase tracking-wider">{BRAND.address}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs text-rose">
                    Open in Maps <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <a href={BRAND.whatsapp} target="_blank" rel="noreferrer" className="btn-luxury btn-rose">
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </a>
              <a href={BRAND.mapsUrl} target="_blank" rel="noreferrer" className="btn-luxury btn-outline-light">
                <Navigation className="h-4 w-4" />
                Get Directions
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
  accent,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href: string;
  accent?: boolean;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="group flex items-start gap-4"
    >
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-rose/15 text-rose transition-transform duration-300 group-hover:scale-110">
        <Icon className="h-4 w-4" />
      </div>
      <div className="min-w-0">
        <p className="text-[11px] uppercase tracking-[0.15em] text-white/40">{label}</p>
        <p
          className={`mt-0.5 text-base break-words ${
            accent ? "text-rose group-hover:underline" : "text-white"
          }`}
        >
          {value}
        </p>
      </div>
    </a>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="bg-charcoal text-white/70">
      <div className="container-editorial py-14 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <img src={logo.url} alt="" className="h-12 w-12 rounded-full" />
              <div>
                <p className="font-display text-lg text-white">Perfect</p>
                <p className="font-editorial text-rose text-sm -mt-1">Girls Wear</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-white/60 leading-relaxed">
              Your destination for premium girls' fashion in Sarangpur.
            </p>
            <p className="text-[11px] uppercase tracking-[0.15em] text-rose mt-3">{BRAND.tagline}</p>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.15em] text-rose">Quick Links</p>
            <ul className="mt-4 space-y-2 text-sm">
              {["collections", "about", "occasions", "showroom", "contact"].map((l) => (
                <li key={l}>
                  <a href={`#${l}`} className="capitalize hover:text-white transition">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.15em] text-rose">Collections</p>
            <ul className="mt-4 space-y-2 text-sm">
              {["Kurti", "Gowns", "Tops", "Palazzo", "Dupatta", "Jeans"].map((l) => (
                <li key={l} className="hover:text-white transition">
                  {l}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.15em] text-rose">Contact</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-rose flex-shrink-0" />
                <a href={`tel:${BRAND.phoneTel}`} className="hover:text-white">
                  {BRAND.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="h-4 w-4 text-rose flex-shrink-0" />
                <a href={BRAND.instagram} target="_blank" rel="noreferrer" className="hover:text-white break-all">
                  {BRAND.instagramHandle}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-rose flex-shrink-0" />
                <a href={BRAND.whatsapp} target="_blank" rel="noreferrer" className="hover:text-white">
                  Chat on WhatsApp
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-rose flex-shrink-0" />
                <a href={BRAND.mapsUrl} target="_blank" rel="noreferrer" className="hover:text-white">
                  {BRAND.address}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Perfect Girls Wear. All Rights Reserved.
          </p>
          <p className="text-xs text-white/40 flex items-center gap-1">
            Designed with <Heart className="h-3 w-3 fill-rose text-rose" /> for fashion
          </p>
        </div>
      </div>
    </footer>
  );
}
