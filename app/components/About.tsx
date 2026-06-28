export default function About() {
  const info = [
    { label: "Name", value: "Andre Esteves" },
    { label: "Location", value: "Oakland, CA" },
    { label: "Languages", value: "English, Portuguese" },
    { label: "Email", value: "andre@8tentacles.dev" },
    { label: "Availability", value: "Open to work" },
  ];

  const skills = [
    { name: "IT Support & Help Desk", pct: 90, color: "#00bcd4" },
    { name: "IAM / User Provisioning", pct: 85, color: "#7cb342" },
    { name: "SQL Server / ERP Admin", pct: 75, color: "#7e57c2" },
    { name: "Azure / Cloud (AZ-900)", pct: 60, color: "#795548" },
  ];

  return (
    <section id="about" className="py-16 px-10">
      {/* Photo + bio */}
      <div className="flex gap-12 items-start mb-12">
        <img
          src="/andre.jpg"
          alt="Andre Esteves"
          className="flex-shrink-0"
          style={{ width: 260, height: 290, objectFit: "cover", objectPosition: "center 10%" }}
        />
        <div>
          <h2 className="text-2xl font-bold mb-4 uppercase tracking-wide">About Me</h2>
          <p className="text-sm leading-relaxed mb-3" style={{ color: "#555" }}>
            I'm Andre Esteves, an IT professional with 8+ years of experience in IT support, systems
            administration, and Identity & Access Management. Based in Oakland, CA — bilingual in
            English and Portuguese.
          </p>
          <p className="text-sm leading-relaxed mb-3" style={{ color: "#555" }}>
            I specialize in IAM, ERP administration (Sapiens/Senior Sistemas), user provisioning,
            SQL Server, and Jira. I also build software through my company,{" "}
            <strong>8 Tentacles Software Development, LLC</strong>.
          </p>
          <p className="text-sm leading-relaxed mb-6" style={{ color: "#555" }}>
            Currently seeking IT Support Engineering and IAM roles in the San Francisco Bay Area.
          </p>
          <div className="flex gap-3">
            <a
              href="mailto:andre@8tentacles.dev"
              className="flex items-center gap-2 px-5 py-2 text-sm font-medium text-white"
              style={{ background: "#00bcd4" }}
            >
              Hire Me ↓
            </a>
            <a
              href="/resume.pdf"
              className="flex items-center gap-2 px-5 py-2 text-sm font-medium text-white"
              style={{ background: "#333" }}
            >
              Download Resume ↓
            </a>
          </div>
        </div>
      </div>

      {/* Info table + skill bars */}
      <div className="grid grid-cols-2 gap-8">
        <table style={{ borderCollapse: "collapse", width: "100%", border: "1px solid #eee" }}>
          <tbody>
            {info.map((row) => (
              <tr key={row.label}>
                <td className="text-sm font-medium px-4 py-3" style={{ color: "#555", border: "1px solid #eee", width: 110 }}>
                  {row.label}
                </td>
                <td className="text-sm px-4 py-3" style={{ color: "#222", border: "1px solid #eee" }}>
                  {row.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex flex-col gap-4">
          {skills.map((s) => (
            <div key={s.name}>
              <div className="flex justify-between text-xs font-semibold mb-1" style={{ color: "#222" }}>
                <span>{s.name}</span>
                <span style={{ color: "#777" }}>{s.pct}%</span>
              </div>
              <div className="h-5 rounded-sm overflow-hidden" style={{ background: "#e0e0e0" }}>
                <div
                  className="h-full flex items-center pl-2 text-xs font-semibold text-white rounded-sm"
                  style={{ width: `${s.pct}%`, background: s.color }}
                >
                  {s.pct}%
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
