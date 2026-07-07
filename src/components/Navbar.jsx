import { useState } from 'react';
import { COLORS, site } from '../constants/portfolioData';

const links = [
  { href: '#work', label: 'Work' },
  ...(site.showBlog ? [{ href: '#blog', label: 'Blog' }] : []),
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 20,
        background: COLORS.bgSoft,
        backdropFilter: 'blur(8px)',
        borderBottom: `1.5px solid ${COLORS.inkBorder}`,
      }}
    >
      <div className="r-nav">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            fontSize: 17,
            fontWeight: 700,
            letterSpacing: '-0.01em',
          }}
        >
          <span
            style={{
              border: `1.5px solid ${COLORS.ink}`,
              padding: '3px 9px',
              borderRadius: 3,
            }}
          >
            LE
          </span>
          <span>{site.handle}</span>
        </div>

        <div className="r-nav-links">
          {links.map((l) => (
            <a key={l.href} href={l.href} style={{ textDecoration: 'none', color: 'inherit' }}>
              {l.label}
            </a>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <a
            href={site.resumeHref}
            style={{
              fontSize: 13,
              fontWeight: 700,
              padding: '9px 18px',
              borderRadius: 4,
              background: COLORS.accent,
              color: '#fff',
              textDecoration: 'none',
            }}
          >
            Resume
          </a>
          <button
            className="r-hamburger"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            style={{ color: COLORS.ink }}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          style={{
            padding: '12px 20px 16px',
            borderTop: `1px solid ${COLORS.inkBorder}`,
            background: COLORS.bgSoft,
          }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                padding: '11px 0',
                fontSize: 14,
                fontWeight: 600,
                textDecoration: 'none',
                color: 'inherit',
                borderBottom: `1px solid ${COLORS.inkHairline}`,
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
