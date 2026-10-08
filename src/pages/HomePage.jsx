import React, { useEffect } from 'react';
import { CATEGORIES, ARTISTS } from '../data/mockData';
import { TalentCategoryCard } from '../components/TalentCategoryCard';
import { ArtistCard } from '../components/ArtistCard';
import {
  DoodleStar,
  DoodleSquiggle,
  FluidSplashBottom,
  TapeClip,
  PaintBlobLeft,
  PaintBlobRight
} from '../components/DecorativeShapes';
import { Search, ArrowRight } from 'lucide-react';

export const HomePage = ({ setActivePage, searchQuery, setSearchQuery, onCategorySelect, onArtistSelect, onBookNow, onChatNow }) => {
  const featuredArtists = ARTISTS.slice(0, 4);

  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const handleCategoryClick = (catId) => {
    onCategorySelect(catId);
    setActivePage('explore');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#FFF3A6' }}>
      <section className="home-hero">
        <PaintBlobLeft />
        <PaintBlobRight />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="home-hero-grid">
            <div className="hero-side" style={{ position: 'relative' }}>
              <div className="hero-cutout left">
                <img
                  src="/images/library/event-photography.jpg"
                  alt="Local photographer"
                />
              </div>
              <DoodleSquiggle
                color="#4A69B3"
                style={{ position: 'absolute', bottom: '-8px', left: '-12px' }}
              />
            </div>

            <div style={{ textAlign: 'center', padding: '0 0.5rem' }}>
              <p
                className="font-editorial text-navy hero-reveal"
                style={{
                  fontSize: 'clamp(1.35rem, 3vw, 2.05rem)',
                  marginBottom: '0.35rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem'
                }}
              >
                Got Talent? Get Seen!
                <DoodleStar size={26} color="#4A69B3" />
              </p>

              <h1
                className="font-display text-rust hero-reveal delay-1"
                style={{
                  fontSize: 'clamp(3rem, 8.4vw, 6.6rem)',
                  textTransform: 'uppercase',
                  lineHeight: '0.88',
                  marginBottom: '0.85rem'
                }}
              >
                WHAT THE
                <br />
                TALENT!
              </h1>

              <p
                className="font-telugu text-rust hero-reveal delay-2"
                style={{
                  fontSize: 'clamp(1.2rem, 2.6vw, 2rem)',
                  lineHeight: 1.25,
                  marginBottom: '1.5rem'
                }}
              >
                Local Lo Unna Global Avvalanukuntunva?
              </p>

              <div className="home-search hero-reveal delay-3">
                <Search size={18} color="#BA3801" style={{ marginRight: '0.45rem', flexShrink: 0 }} />
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for a skill, creator or location..."
                  aria-label="Search talent"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') setActivePage('explore');
                  }}
                />
                <button
                  type="button"
                  onClick={() => setActivePage('explore')}
                  aria-label="Search"
                  style={{
                    backgroundColor: '#4A69B3',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '50px',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                  }}
                >
                  <Search size={16} />
                </button>
              </div>
            </div>

            <div className="hero-side" style={{ position: 'relative' }}>
              <div className="hero-cutout right">
                <img
                  src="/references/music-vocalist.jpg"
                  alt="Local musician"
                />
              </div>
              <DoodleStar
                size={30}
                color="#BA3801"
                style={{ position: 'absolute', top: '-12px', right: '-8px' }}
              />
            </div>
          </div>

          <div className="home-category-grid hero-reveal delay-4">
            {CATEGORIES.map((cat) => (
              <TalentCategoryCard
                key={cat.id}
                category={cat}
                onClick={() => handleCategoryClick(cat.id)}
              />
            ))}
          </div>

          <div
            className="reveal support-banner-home"
            style={{
              marginTop: '3.25rem',
              backgroundColor: '#FFF8CD',
              border: '2px solid #4A69B3',
              borderRadius: '28px 18px 32px 22px',
              padding: '1.75rem 2rem',
              display: 'grid',
              gridTemplateColumns: 'minmax(180px, 260px) 1fr',
              gap: '1.75rem',
              alignItems: 'center',
              position: 'relative'
            }}
          >
            <div style={{ position: 'relative' }}>
              <TapeClip />
              <div
                style={{
                  height: '168px',
                  borderRadius: '18px',
                  overflow: 'hidden',
                  border: '2px solid #4A69B3',
                  transform: 'rotate(-2deg)'
                }}
              >
                <img
                  src="/images/library/artist-painting-workshop.jpg"
                  alt="Local creator at work"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>

            <div style={{ position: 'relative' }}>
              <h2
                className="font-display text-rust"
                style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', textTransform: 'uppercase', lineHeight: 1.08, marginBottom: '0.35rem' }}
              >
                Support Local Creators
              </h2>
              <p className="font-body" style={{ color: '#474E61', marginBottom: '1.1rem' }}>
                Talent thrives when we support it.
              </p>
              <button type="button" onClick={() => setActivePage('explore')} className="btn-primary">
                Explore Now →
              </button>
              <p
                className="font-editorial text-navy"
                style={{
                  position: 'absolute',
                  top: '-8px',
                  right: '0',
                  fontSize: '1.35rem',
                  transform: 'rotate(5deg)',
                  lineHeight: 1.15
                }}
              >
                Real People
                <br />
                Real Stories.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="reveal"
        style={{
          padding: '4.5rem 0 5rem',
          backgroundColor: '#FFF8CD',
          borderTop: '2px solid #4A69B3',
          position: 'relative'
        }}
      >
        <div className="container">
          <div className="mb-10" style={{ maxWidth: '720px' }}>
            <h2
              className="font-display text-rust"
              style={{
                fontSize: 'clamp(2rem, 4.4vw, 3.4rem)',
                lineHeight: 1.05,
                textTransform: 'uppercase'
              }}
            >
              Talent is everywhere.
              <br />
              Let's make it visible.
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1.5rem'
            }}
          >
            {featuredArtists.map((artist) => (
              <ArtistCard
                key={artist.id}
                artist={artist}
                onViewDetails={(a) => {
                  onArtistSelect(a);
                  setActivePage('profile');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onBookNow={onBookNow}
                onChatNow={onChatNow}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="reveal" style={{ padding: '5rem 0 4.5rem', position: 'relative' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.5rem',
              alignItems: 'start'
            }}
          >
            {[
              {
                step: '01',
                title: 'DISCOVER',
                description: 'Find talented people around you.'
              },
              {
                step: '02',
                title: 'CONNECT',
                description: 'Talk directly with the talent.'
              },
              {
                step: '03',
                title: 'BOOK',
                description: 'Hire them for your event, project or occasion.'
              }
            ].map((item) => (
              <article key={item.step} className="how-step">
                <div className="how-number">{item.step}</div>
                <h3
                  className="font-display text-rust"
                  style={{ fontSize: '1.45rem', textTransform: 'uppercase', margin: '0.7rem 0 0.45rem' }}
                >
                  {item.title}
                </h3>
                <p className="font-editorial text-navy" style={{ fontSize: '1.25rem', lineHeight: 1.35 }}>
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="reveal" style={{ padding: '0 0 5rem' }}>
        <div className="container">
          <div className="cta-poster">
            <h2
              className="font-display"
              style={{
                fontSize: 'clamp(2.4rem, 5.5vw, 4.4rem)',
                textTransform: 'uppercase',
                lineHeight: 0.95,
                color: '#FFF3A6',
                marginBottom: '1.4rem'
              }}
            >
              Got a talent?
              <br />
              Get seen.
            </h2>
            <button
              type="button"
              className="btn-secondary"
              onClick={() => setActivePage('talent')}
              style={{
                backgroundColor: '#FFF3A6',
                color: '#BA3801',
                borderColor: '#4A69B3',
                fontWeight: 800
              }}
            >
              SHOWCASE MY TALENT →
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      <div style={{ position: 'relative', height: '70px' }}>
        <FluidSplashBottom color="#4A69B3" />
      </div>

      <style>{`
        @media (max-width: 720px) {
          .support-banner-home {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};
