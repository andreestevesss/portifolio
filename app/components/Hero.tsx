"use client";

const socials = [
  { label: "LinkedIn", href: "https://linkedin.com/in/andremartinsss", icon: "in" },
  { label: "GitHub", href: "https://github.com/andreestevesss", icon: "gh" },
  { label: "Email", href: "mailto:andremartinsss@hotmail.com", icon: "@" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden"
      style={{ height: "100vh", minHeight: 500, background: "#111" }}
    >
      <img
        src="/andre.jpg"
        alt="Andre Esteves"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "grayscale(100%) brightness(0.5)", objectPosition: "center 20%" }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.82) 30%, rgba(0,0,0,0.18) 100%)" }}
      />

      <div className="absolute bottom-16 left-10 z-10 text-white">
        <h1 className="text-5xl font-bold mb-2 leading-tight">I'M Andre Esteves</h1>
        <p className="text-sm tracking-widest mb-6" style={{ color: "rgba(255,255,255,0.65)" }}>
          IT Support Engineer &nbsp;·&nbsp; IAM Specialist &nbsp;·&nbsp; Developer
        </p>
        <div className="flex gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all hover:border-teal-400 hover:text-teal-400"
              style={{ border: "1px solid rgba(255,255,255,0.35)", color: "rgba(255,255,255,0.8)" }}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce" style={{ color: "rgba(255,255,255,0.4)" }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </section>
  );
}
