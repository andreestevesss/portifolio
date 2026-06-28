"use client";
import { useState, useEffect } from "react";

const links = ["Home", "About", "Resume", "Portfolio", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-10 py-4 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(10,10,10,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
      }}
    >
      <span className="text-base font-bold tracking-widest" style={{ color: "#00bcd4" }}>
        ANDRE
      </span>
      <div className="flex gap-8">
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-sm text-white/80 hover:text-white transition-colors tracking-wide"
          >
            {link}
          </a>
        ))}
      </div>
    </nav>
  );
}
