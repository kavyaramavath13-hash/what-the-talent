import React from 'react';
import { Sparkles, Heart, Instagram, Youtube, Twitter, Mail, MapPin, Phone } from 'lucide-react';

export const Footer = ({ setActivePage }) => {
  const handleNav = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: '#FDFBF4',
        borderTop: '3px solid #4A69B3',
        marginTop: '5rem',
        padding: '4rem 0 2rem 0',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '3rem',
            marginBottom: '3.5rem'
          }}
        >
          {/* Brand Column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
              <div
                style={{
                  backgroundColor: '#BA3801',
                  color: '#FFFFFF',
                  width: '40px',
                  height: '40px',
                  borderRadius: '12px 16px 10px 14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px solid #4A69B3',
                  fontWeight: 800,
                  fontSize: '1.2rem',
                  transform: 'rotate(-3deg)'
                }}
              >
                W!
              </div>
              <span className="font-display text-rust" style={{ fontSize: '1.6rem', textTransform: 'uppercase' }}>
                What The Talent!
              </span>
            </div>

            <p className="font-editorial text-navy" style={{ fontSize: '1.4rem', lineHeight: '1.2', marginBottom: '1rem' }}>
              Got Talent? Get Seen!
            </p>

            <p className="font-telugu text-rust" style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              Local Lo Unna Global Avvalanukuntunva?
            </p>

            <p style={{ color: '#474E61', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              The premier local talent discovery & hiring platform. Connecting extraordinary local creators, performers, and artists directly with clients & communities.
            </p>

            {/* Social Placeholders */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {[
                { icon: <Instagram size={20} />, label: 'Instagram', href: '#' },
                { icon: <Youtube size={20} />, label: 'YouTube', href: '#' },
                { icon: <Twitter size={20} />, label: 'Twitter', href: '#' }
              ].map((s, idx) => (
                <a
                  key={idx}
                  href={s.href}
                  aria-label={s.label}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: '#FFF3A6',
                    border: '2px solid #4A69B3',
                    color: '#4A69B3',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s ease',
                    boxShadow: '2px 2px 0px #4A69B3'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#BA3801';
                    e.currentTarget.style.color = '#FFFFFF';
                    e.currentTarget.style.borderColor = '#BA3801';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#FFF3A6';
                    e.currentTarget.style.color = '#4A69B3';
                    e.currentTarget.style.borderColor = '#4A69B3';
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3
              className="font-display text-navy"
              style={{ fontSize: '1.2rem', textTransform: 'uppercase', marginBottom: '1.2rem', letterSpacing: '0.05em' }}
            >
              Explore Platform
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { label: 'Home', id: 'home' },
                { label: 'About Story', id: 'about' },
                { label: 'Explore Talent (3-Level)', id: 'explore' },
                { label: 'Editorial Gallery', id: 'gallery' },
                { label: 'Showcase & Join', id: 'talent' },
                { label: 'Sign In / Account', id: 'signin' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNav(link.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#1C202B',
                      fontSize: '1rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'color 0.2s ease',
                      textAlign: 'left',
                      padding: 0
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#BA3801')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#1C202B')}
                  >
                    → {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories Column */}
          <div>
            <h3
              className="font-display text-navy"
              style={{ fontSize: '1.2rem', textTransform: 'uppercase', marginBottom: '1.2rem', letterSpacing: '0.05em' }}
            >
              Popular Categories
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {['Music', 'Dance', 'Art', 'Photography', 'Cooking', 'Handcraft', 'Beauty', 'Fitness', 'Standup Comedy'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleNav('explore')}
                  className="badge-navy"
                  style={{
                    cursor: 'pointer',
                    fontSize: '0.85rem',
                    textTransform: 'capitalize',
                    border: '1.5px solid #4A69B3'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Contact & Community */}
          <div>
            <h3
              className="font-display text-navy"
              style={{ fontSize: '1.2rem', textTransform: 'uppercase', marginBottom: '1.2rem', letterSpacing: '0.05em' }}
            >
              Get In Touch
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.95rem', color: '#1C202B' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <MapPin size={18} color="#BA3801" />
                <span>Hyderabad • Vizag • Amaravati • Bengaluru</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Mail size={18} color="#BA3801" />
                <span>hello@whatthetalent.com</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Phone size={18} color="#BA3801" />
                <span>+91 98765 TALENT (+91 98765 82536)</span>
              </div>
            </div>

            <div
              style={{
                marginTop: '1.5rem',
                backgroundColor: '#FFF3A6',
                border: '2px solid #BA3801',
                borderRadius: '16px',
                padding: '1rem',
                boxShadow: '3px 3px 0px #BA3801'
              }}
            >
              <span className="font-editorial text-navy" style={{ fontSize: '1.1rem', display: 'block' }}>
                Are you a local creator?
              </span>
              <button
                onClick={() => handleNav('talent')}
                className="btn-primary btn-sm"
                style={{ marginTop: '0.5rem', width: '100%', justifyContent: 'center' }}
              >
                Join As Talent →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '2px dashed #4A69B3',
            paddingTop: '1.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            fontSize: '0.9rem',
            color: '#474E61'
          }}
        >
          <div>
            © {new Date().getFullYear()} <strong>What The Talent!</strong> All rights reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span>Crafted with passion for local creators</span>
            <Heart size={16} fill="#BA3801" color="#BA3801" />
          </div>
        </div>
      </div>
    </footer>
  );
};
