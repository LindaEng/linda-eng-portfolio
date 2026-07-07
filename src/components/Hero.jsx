import { COLORS, site, highlights, stats } from '../constants/portfolioData';

const dotGrid = {
  backgroundImage: `radial-gradient(${COLORS.inkDivider} 1px, transparent 1px)`,
  backgroundSize: '18px 18px',
  backgroundPosition: '-9px -9px',
};

export default function Hero() {
  return (
    <section className="r-hero-outer" style={{ position: 'relative', ...dotGrid }}>
      <div
        className="r-hero-card r-card-pad"
        style={{
          maxWidth: 1180,
          margin: '0 auto',
          position: 'relative',
          background: COLORS.bg,
          border: `1.5px solid ${COLORS.inkOutline}`,
          borderRadius: 6,
          boxShadow: `0 2px 0 ${COLORS.inkShadow}`,
        }}
      >
        <div>
          <div
            style={{
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              color: COLORS.accent,
              marginBottom: 18,
            }}
          >
            {site.roleTagline}
          </div>
          <h1
            style={{
              fontSize: 'clamp(28px, 5vw, 46px)',
              lineHeight: 1.15,
              fontWeight: 800,
              letterSpacing: '-0.02em',
              margin: '0 0 24px',
            }}
          >
            {site.name}
          </h1>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.7,
              maxWidth: 520,
              color: COLORS.inkSoft,
              margin: '0 0 28px',
            }}
          >
            I build tools that help people learn. My focus is <strong>product thinking</strong>,{' '}
            <strong>creative coding</strong>, and turning messy, dense information into something
            people actually want to sit with.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
            <a
              href="#work"
              style={{
                fontSize: 14,
                fontWeight: 700,
                padding: '13px 26px',
                borderRadius: 4,
                background: COLORS.accent,
                color: '#fff',
                textDecoration: 'none',
              }}
            >
              View my work
            </a>
            <div style={{ fontSize: 13, color: COLORS.inkMuted }}>Open to full-time roles</div>
          </div>
        </div>

        <div
          style={{
            position: 'relative',
            border: `1.5px dashed ${COLORS.inkDashed}`,
            borderRadius: 4,
            padding: '26px 24px',
          }}
        >
          <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 18 }}>
            This profile includes
          </div>
          {highlights.map((h, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                padding: '12px 0',
                borderTop: `1px solid ${COLORS.inkDivider}`,
              }}
            >
              <span style={{ fontSize: 15 }}>{h.icon}</span>
              <span style={{ fontSize: 13.5, fontWeight: 500 }}>{h.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div
        className="r-stats-bar"
        style={{
          maxWidth: 1180,
          margin: '24px auto 0',
          border: `1.5px solid ${COLORS.inkOutline}`,
          borderRadius: 6,
          background: COLORS.bg,
        }}
      >
        {stats.map((s, i) => (
          <div
            key={i}
            className="r-stat-cell"
            style={{
              borderLeft: i === 0 ? 'none' : `1.5px solid ${COLORS.inkDivider}`,
            }}
          >
            <div style={{ fontSize: 12, fontWeight: 600, color: COLORS.inkLabel, marginBottom: 8 }}>
              {s.label}
            </div>
            <div style={{ fontSize: 19, fontWeight: 700 }}>{s.value}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
