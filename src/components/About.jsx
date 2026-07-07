import { COLORS, skills } from '../constants/portfolioData';

const dotGrid = {
  backgroundImage: `radial-gradient(${COLORS.inkDivider} 1px, transparent 1px)`,
  backgroundSize: '18px 18px',
  backgroundPosition: '-9px -9px',
};

export default function About() {
  return (
    <section id="about" className="r-section" style={{ ...dotGrid }}>
      <div
        className="r-card-pad"
        style={{
          maxWidth: 1180,
          margin: '0 auto',
          background: COLORS.bg,
          border: `1.5px solid ${COLORS.inkOutline}`,
          borderRadius: 6,
        }}
      >
        <div style={{ maxWidth: 640 }}>
          <div
            style={{
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              color: COLORS.accent,
              marginBottom: 16,
            }}
          >
            About
          </div>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: COLORS.inkBody, margin: '0 0 28px' }}>
            I'm a creative coder at heart — I like building tools, not just features, and I care
            about product thinking as much as the code underneath it. Most of what I make lately
            is in service of learning: turning dense material into something people can actually
            sit with and understand.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {skills.map((skill, i) => (
              <span
                key={i}
                style={{
                  fontSize: 12.5,
                  fontWeight: 600,
                  padding: '7px 14px',
                  borderRadius: 4,
                  border: `1.5px solid ${COLORS.inkChipEdge}`,
                  color: COLORS.inkSoft,
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
