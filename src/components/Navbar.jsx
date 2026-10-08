import React, { useState, useEffect } from 'react';
import { Menu, X, User, ArrowRight } from 'lucide-react';

export const Navbar = ({ activePage, setActivePage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'explore', label: 'Explore' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'talent', label: 'Talent' }
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className="site-header"
      style={{
        backgroundColor: 'rgba(255, 243, 166, 0.95)',
        backdropFilter: 'blur(8px)',
        borderBottom: scrolled ? '1.5px solid rgba(74, 105, 179, 0.45)' : '1.5px solid transparent',
        padding: scrolled ? '0.7rem 0' : '1rem 0'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
        {/* Top-Left Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="group focus:outline-none flex items-center gap-2"
          style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.6rem' }}
          aria-label="What The Talent Home"
        >
          <div
            style={{
              backgroundColor: '#BA3801',
              color: '#FFFFFF',
              width: '42px',
              height: '42px',
              borderRadius: '12px 18px 10px 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid #4A69B3',
              boxShadow: '3px 3px 0px #4A69B3',
              fontWeight: 800,
              fontSize: '1.2rem',
              transform: 'rotate(-3deg)'
            }}
          >
            W!
          </div>
          <div style={{ textAlign: 'left' }}>
            <span
              className="font-display text-rust"
              style={{
                fontSize: '1.45rem',
                display: 'block',
                lineHeight: '1',
                textTransform: 'uppercase',
                letterSpacing: '-0.01em'
              }}
            >
              What The Talent!
            </span>
            <span
              className="font-editorial text-navy"
              style={{ fontSize: '0.85rem', display: 'block', marginTop: '-1px' }}
            >
              Got Talent? Get Seen!
            </span>
          </div>
        </button>

        {/* Centered Desktop Navigation */}
        <nav
          aria-label="Main Navigation"
          style={{
            display: 'none',
            '@media (min-width: 768px)': { display: 'flex' }
          }}
          className="desktop-nav"
        >
          <ul
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.15rem',
              listStyle: 'none',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}
          >
            {navItems.map((item, index) => {
              const isActive = activePage === item.id;
              return (
                <li key={item.id} style={{ display: 'flex', alignItems: 'center' }}>
                  {index > 0 && (
                    <span aria-hidden="true" style={{ color: '#4A69B3', padding: '0 0.35rem', fontWeight: 600 }}>
                      –
                    </span>
                  )}
                  <button
                    onClick={() => handleNavClick(item.id)}
                    style={{
                      background: 'none',
                      color: isActive ? '#BA3801' : '#4A69B3',
                      border: 'none',
                      borderBottom: isActive ? '2px solid #BA3801' : '2px solid transparent',
                      padding: '0.25rem 0.2rem',
                      fontFamily: 'var(--font-body)',
                      fontWeight: 700,
                      fontSize: '0.95rem',
                      cursor: 'pointer'
                    }}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Top-Right Sign In CTA */}
        <div style={{ display: 'none', '@media (min-width: 768px)': { display: 'block' } }} className="desktop-signin">
          <button
            onClick={() => handleNavClick('signin')}
            className="btn-secondary btn-sm"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
          >
            <User size={18} />
            <span>Sign In</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="mobile-hamburger-btn"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '44px',
            height: '44px',
            backgroundColor: '#FDFBF4',
            border: '2px solid #4A69B3',
            borderRadius: '12px',
            boxShadow: '3px 3px 0px #4A69B3',
            cursor: 'pointer',
            color: '#4A69B3'
          }}
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            top: '70px',
            backgroundColor: '#FFF3A6',
            zIndex: 49,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '2rem 1.5rem',
            borderTop: '3px solid #BA3801',
            animation: 'slideInUp 0.25s ease-out'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <span className="font-editorial text-navy" style={{ fontSize: '1.2rem' }}>
              Got Talent? Get Seen!
            </span>

            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  style={{
                    backgroundColor: isActive ? '#BA3801' : '#FDFBF4',
                    color: isActive ? '#FFFFFF' : '#4A69B3',
                    border: '2.5px solid #4A69B3',
                    borderRadius: '16px',
                    padding: '1rem 1.25rem',
                    fontWeight: 800,
                    fontSize: '1.25rem',
                    textAlign: 'left',
                    boxShadow: isActive ? '4px 4px 0px #4A69B3' : '2px 2px 0px #4A69B3',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer'
                  }}
                >
                  <span>{item.label}</span>
                  <ArrowRight size={20} />
                </button>
              );
            })}
          </div>

          <div style={{ paddingTop: '1.5rem', borderTop: '2px dashed #4A69B3' }}>
            <button
              onClick={() => handleNavClick('signin')}
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <User size={20} />
              <span>Sign In to Account</span>
            </button>
          </div>
        </div>
      )}

      {/* Embedded CSS for responsive display toggles */}
      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .desktop-signin { display: block !important; }
          .mobile-hamburger-btn { display: none !important; }
        }
      `}</style>
    </header>
  );
};
