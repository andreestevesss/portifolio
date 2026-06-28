export default function Resume() {
  const experience = [
    {
      period: "2023 – Present",
      title: "Founder & Developer",
      company: "8 Tentacles Software Development, LLC",
      desc: "Independent software development and IT consulting. Built internal tools, mobile apps, and web platforms for small businesses.",
    },
    {
      period: "2020 – 2023",
      title: "ERP Administrator",
      company: "Sapiens / Senior Sistemas",
      desc: "Managed identity provisioning, access control, and SQL Server databases across enterprise ERP environments.",
    },
    {
      period: "2016 – 2020",
      title: "IT Support Specialist",
      company: "Various roles",
      desc: "Help desk, systems administration, and user support across Windows and macOS environments. Jira ticketing and escalation management.",
    },
  ];

  const certs = [
    { name: "AZ-900", sub: "Azure Fundamentals", status: "In progress", color: "#00bcd4" },
    { name: "SC-300", sub: "Identity & Access Admin", status: "Planned", color: "#f59e0b" },
  ];

  return (
    <section id="resume" className="py-16 px-10" style={{ background: "#f9f9f9" }}>
      <h2 className="text-2xl font-bold uppercase tracking-wide mb-10">Resume</h2>

      <div className="grid grid-cols-2 gap-12">
        {/* Experience */}
        <div>
          <h3 className="text-base font-bold mb-6 uppercase tracking-wider" style={{ color: "#00bcd4" }}>
            Experience
          </h3>
          <div className="flex flex-col gap-8">
            {experience.map((e) => (
              <div key={e.title} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full mt-1 flex-shrink-0" style={{ background: "#00bcd4" }} />
                  <div className="w-px flex-1 mt-1" style={{ background: "#ddd" }} />
                </div>
                <div className="pb-4">
                  <div className="text-xs mb-1" style={{ color: "#999" }}>{e.period}</div>
                  <div className="text-sm font-bold" style={{ color: "#222" }}>{e.title}</div>
                  <div className="text-xs mb-2" style={{ color: "#00bcd4" }}>{e.company}</div>
                  <p className="text-xs leading-relaxed" style={{ color: "#666" }}>{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills + Certs */}
        <div>
          <h3 className="text-base font-bold mb-6 uppercase tracking-wider" style={{ color: "#00bcd4" }}>
            Certifications
          </h3>
          <div className="flex gap-4 mb-10">
            {certs.map((c) => (
              <div key={c.name} className="p-4 rounded-sm" style={{ background: "#fff", border: "1px solid #eee", minWidth: 150 }}>
                <div className="text-xs font-semibold mb-1" style={{ color: c.color }}>{c.status}</div>
                <div className="text-lg font-bold" style={{ color: "#222" }}>{c.name}</div>
                <div className="text-xs" style={{ color: "#888" }}>{c.sub}</div>
              </div>
            ))}
          </div>

          <h3 className="text-base font-bold mb-4 uppercase tracking-wider" style={{ color: "#00bcd4" }}>
            Tools & Tech
          </h3>
          <div className="flex flex-wrap gap-2">
            {["IAM","SSO","RBAC","Sapiens ERP","SQL Server","Jira","Next.js","TypeScript","Firebase","Node.js","Azure","macOS","Windows","Vercel","Git"].map((t) => (
              <span
                key={t}
                className="text-xs px-3 py-1 rounded-sm font-medium"
                style={{ background: "#fff", border: "1px solid #ddd", color: "#444" }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
