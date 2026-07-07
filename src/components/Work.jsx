import { COLORS, projects, projectIcon } from '../constants/portfolioData';

export default function Work() {
  return (
    <section
      id="work"
      className="r-section"
      style={{
        position: 'relative',
        background: COLORS.dark,
        backgroundImage: `radial-gradient(${COLORS.bgDot} 1px, transparent 1px)`,
        backgroundSize: '20px 20px',
      }}
    >
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <h2
          style={{
            fontSize: 'clamp(24px, 4vw, 34px)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            color: COLORS.onDark,
            margin: '0 0 40px',
          }}
        >
          Build things that stand out
        </h2>

        <div className="r-two-col">
          {projects.map((proj, i) => (
            <a
              key={i}
              href={proj.href}
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 16,
                padding: 24,
                borderRadius: 6,
                border: `1.5px solid ${COLORS.onDarkCardEdge}`,
                background: COLORS.dark,
                textDecoration: 'none',
                color: COLORS.onDark,
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  flex: 'none',
                  border: `1.5px solid ${COLORS.onDarkIconEdge}`,
                  borderRadius: 4,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 20,
                }}
              >
                {projectIcon}
              </div>
              <div>
                <div style={{ fontSize: 17, fontWeight: 700, marginBottom: 8 }}>{proj.title}</div>
                <div
                  style={{
                    fontSize: 13.5,
                    lineHeight: 1.6,
                    color: COLORS.onDarkMuted,
                    marginBottom: 12,
                  }}
                >
                  {proj.description}
                </div>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {proj.tags.map((tag, j) => (
                    <span
                      key={j}
                      style={{
                        fontSize: 11,
                        fontWeight: 600,
                        padding: '4px 10px',
                        borderRadius: 999,
                        background: COLORS.onDarkTagBg,
                        color: COLORS.onDarkSoft,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
