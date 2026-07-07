import { COLORS, site } from '../constants/portfolioData';

export default function Contact() {
  return (
    <section id="contact" className="r-contact-section" style={{ background: COLORS.dark }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <h2
          style={{
            fontSize: 'clamp(28px, 5vw, 40px)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            color: COLORS.onDark,
            margin: '0 0 24px',
          }}
        >
          Let's build something.
        </h2>
        <p
          style={{
            fontSize: 16,
            lineHeight: 1.6,
            color: COLORS.onDarkMuted,
            maxWidth: 480,
            margin: '0 0 36px',
          }}
        >
          Open to full-time roles and interesting freelance projects. Reach out and I'll get back
          to you within a day.
        </p>
        <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
          <a
            href={`mailto:${site.email}`}
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
            {site.email}
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            style={{ fontSize: 13, fontWeight: 600, color: COLORS.onDarkSubtle, textDecoration: 'none' }}
          >
            GitHub
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            style={{ fontSize: 13, fontWeight: 600, color: COLORS.onDarkSubtle, textDecoration: 'none' }}
          >
            LinkedIn
          </a>
        </div>
        <div
          style={{
            marginTop: 56,
            paddingTop: 24,
            borderTop: `1.5px solid ${COLORS.onDarkBorder}`,
            fontSize: 12,
            color: COLORS.onDarkFaint,
          }}
        >
          © 2026 Linda Eng. Built with care.
        </div>
      </div>
    </section>
  );
}
