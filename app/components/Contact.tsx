"use client";
export default function Contact() {
  return (
    <section id="contact" className="py-16 px-10" style={{ background: "#f9f9f9" }}>
      <h2 className="text-2xl font-bold uppercase tracking-wide mb-2">Contact</h2>
      <p className="text-sm mb-10" style={{ color: "#777" }}>
        Open to IT Support, Help Desk, and IAM roles in the SF Bay Area.
      </p>

      <div className="grid grid-cols-2 gap-12">
        <div className="flex flex-col gap-4">
          {[
            { label: "Email", value: "andre@8tentacles.dev", href: "mailto:andremartinsss@hotmail.com" },
            { label: "LinkedIn", value: "linkedin.com/in/andreesteves", href: "https://linkedin.com/in/andremartinsss" },
            { label: "GitHub", value: "github.com/andreestevesss", href: "https://github.com/andreestevesss" },
            { label: "Location", value: "Oakland, CA (SF Bay Area)", href: null },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-4">
              <span className="text-xs font-bold uppercase tracking-wider w-20" style={{ color: "#999" }}>
                {item.label}
              </span>
              {item.href ? (
                <a href={item.href} className="text-sm" style={{ color: "#00bcd4" }}>
                  {item.value}
                </a>
              ) : (
                <span className="text-sm" style={{ color: "#444" }}>{item.value}</span>
              )}
            </div>
          ))}
        </div>

        <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Your name"
            className="w-full px-4 py-2 text-sm outline-none"
            style={{ border: "1px solid #ddd", background: "#fff" }}
          />
          <input
            type="email"
            placeholder="Your email"
            className="w-full px-4 py-2 text-sm outline-none"
            style={{ border: "1px solid #ddd", background: "#fff" }}
          />
          <textarea
            rows={4}
            placeholder="Your message"
            className="w-full px-4 py-2 text-sm outline-none resize-none"
            style={{ border: "1px solid #ddd", background: "#fff" }}
          />
          <button
            type="submit"
            className="px-6 py-2 text-sm font-medium text-white self-start"
            style={{ background: "#00bcd4" }}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
