const projects = [
  {
    name: "PatriotX Admin Dashboard",
    desc: "Full-stack Firebase admin panel built with Next.js 16 and TypeScript. Deployed on Vercel.",
    tags: ["Next.js", "TypeScript", "Firebase", "Vercel"],
    link: "https://github.com/andreestevesss/firebase-admin-dashboard",
  },
  {
    name: "Vehicle Inventory App",
    desc: "Internal iOS app for managing auction lot vehicle inventory. Distributed via Apple Unlisted App method.",
    tags: ["iOS", "Swift", "Internal tool"],
    link: null,
  },
  {
    name: "FACEIT Leaderboard Bot",
    desc: "CS2 rank tracker for South America with Discord webhook alerts. Runs on Cloudflare Workers.",
    tags: ["Node.js", "Discord", "Cloudflare Workers"],
    link: "https://github.com/andreestevesss",
  },
  {
    name: "Forma Landscape Platform",
    desc: "Full-stack landscape company management platform with React/Tailwind, Node.js, Supabase, and Stripe.",
    tags: ["React", "Tailwind", "Supabase", "Stripe"],
    link: null,
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16 px-10">
      <h2 className="text-2xl font-bold uppercase tracking-wide mb-10">Portfolio</h2>
      <div className="grid grid-cols-2 gap-5">
        {projects.map((p) => (
          <div
            key={p.name}
            className="p-5 rounded-sm"
            style={{ border: "1px solid #eee", background: "#fff" }}
          >
            <h3 className="text-sm font-bold mb-2" style={{ color: "#222" }}>{p.name}</h3>
            <p className="text-xs leading-relaxed mb-3" style={{ color: "#777" }}>{p.desc}</p>
            <div className="flex flex-wrap gap-2 mb-3">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-0.5 font-medium text-white"
                  style={{ background: "#00bcd4" }}
                >
                  {t}
                </span>
              ))}
            </div>
            {p.link && (
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium"
                style={{ color: "#00bcd4" }}
              >
                View on GitHub →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
