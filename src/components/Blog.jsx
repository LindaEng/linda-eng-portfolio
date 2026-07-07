import { COLORS, blogPosts, projectIcon } from '../constants/portfolioData';

const dotGrid = {
  backgroundImage: `radial-gradient(${COLORS.inkDivider} 1px, transparent 1px)`,
  backgroundSize: '18px 18px',
  backgroundPosition: '-9px -9px',
};

export default function Blog() {
  return (
    <section id="blog" className="r-section" style={{ ...dotGrid }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div style={{ marginBottom: 40 }}>
          <div
            style={{
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              color: COLORS.accent,
              marginBottom: 14,
            }}
          >
            Blog
          </div>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 34px)', fontWeight: 800, letterSpacing: '-0.02em', margin: 0 }}>
            Creative coding notes
          </h2>
        </div>

        <div className="r-two-col">
          {blogPosts.map((post, i) => (
            <a
              key={i}
              href={post.href}
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 16,
                padding: 24,
                borderRadius: 6,
                border: `1.5px solid ${COLORS.inkCardEdge}`,
                background: COLORS.bg,
                textDecoration: 'none',
                color: COLORS.ink,
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  flex: 'none',
                  border: `1.5px solid ${COLORS.inkDashed}`,
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
                <div style={{ fontSize: 17, fontWeight: 700, marginBottom: 8 }}>{post.title}</div>
                <div
                  style={{
                    fontSize: 13.5,
                    lineHeight: 1.6,
                    color: COLORS.inkMuted,
                    marginBottom: 12,
                  }}
                >
                  {post.description}
                </div>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {post.tags.map((tag, j) => (
                    <span
                      key={j}
                      style={{
                        fontSize: 11,
                        fontWeight: 600,
                        padding: '4px 10px',
                        borderRadius: 999,
                        background: COLORS.inkHairline,
                        color: COLORS.inkSubtle,
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
