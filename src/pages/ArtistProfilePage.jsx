import React from 'react';
import { ARTISTS } from '../data/mockData';
import { ArtistCard } from '../components/ArtistCard';
import { PortfolioGallery } from '../components/PortfolioGallery';
import { FluidSplashBottom, TapeClip } from '../components/DecorativeShapes';
import { MapPin, Star, Calendar, MessageSquare, Phone, Mail, Instagram, Youtube, ArrowLeft, Heart } from 'lucide-react';

export const ArtistProfilePage = ({ artist, setActivePage, onArtistSelect, onBookNow, onChatNow }) => {
  if (!artist) {
    artist = ARTISTS[0];
  }

  const relatedArtists = ARTISTS.filter((a) => a.id !== artist.id);

  return (
    <div style={{ padding: '2rem 0 6rem 0', position: 'relative', backgroundColor: '#FFF3A6' }}>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Navigation Back Link matching Reference Frame 4 */}
        <button
          onClick={() => setActivePage('explore')}
          className="btn-secondary btn-sm mb-4"
          style={{ marginBottom: '1.5rem', border: 'none', background: 'none', color: '#4A69B3', fontWeight: 700, fontSize: '0.95rem', cursor: 'pointer', padding: 0 }}
        >
          ← Back to {artist.talentType}s
        </button>

        {/* Profile Card Container */}
        <div
          className="editorial-card mb-12"
          style={{
            backgroundColor: '#FDFBF4',
            padding: '2rem',
            marginBottom: '4rem',
            border: '3px solid #4A69B3',
            borderRadius: '24px',
            boxShadow: '6px 8px 0px #4A69B3'
          }}
        >
          {/* Two-Column Desktop Layout */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(300px, 420px) 1fr',
              gap: '2.5rem',
              alignItems: 'start'
            }}
            className="profile-grid"
          >
            {/* Left Column: Large Artist Image & 3 Thumbnails */}
            <div>
              <div
                style={{
                  position: 'relative',
                  height: '420px',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  border: '3px solid #4A69B3',
                  boxShadow: '5px 6px 0px #4A69B3',
                  marginBottom: '1.25rem'
                }}
              >
                <img
                  src={artist.image}
                  alt={artist.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              {/* 3 Portfolio Thumbnails under Main Image matching Reference Frame 4 */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.75rem' }}>
                {artist.portfolio.slice(0, 3).map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      height: '90px',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      border: '2px solid #4A69B3',
                      boxShadow: '2px 3px 0px #4A69B3'
                    }}
                  >
                    <img
                      src={item.url || item.image}
                      alt={item.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Artist Info & Actions */}
            <div>
              {/* Header Title & Heart Icon */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                <h1 className="font-display text-rust" style={{ fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', textTransform: 'uppercase', lineHeight: '1.05' }}>
                  {artist.name}
                </h1>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    backgroundColor: '#FFF3A6',
                    border: '2px solid #BA3801',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Heart size={20} color="#BA3801" fill="#BA3801" />
                </div>
              </div>

              {/* Talent Tag */}
              <span className="badge-rust mb-3" style={{ fontSize: '0.85rem' }}>
                {artist.talentType}
              </span>

              {/* Badges Row: Experience & Location */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', marginBottom: '1.5rem', marginTop: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', backgroundColor: '#FFF3A6', border: '1.5px solid #4A69B3', padding: '0.35rem 0.85rem', borderRadius: '20px', fontWeight: 700, fontSize: '0.9rem', color: '#1C202B' }}>
                  <Star size={16} fill="#BA3801" color="#BA3801" />
                  <span>{artist.experience} Experience</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', backgroundColor: '#FFF3A6', border: '1.5px solid #4A69B3', padding: '0.35rem 0.85rem', borderRadius: '20px', fontWeight: 700, fontSize: '0.9rem', color: '#1C202B' }}>
                  <MapPin size={16} color="#BA3801" />
                  <span>{artist.location}</span>
                </div>
              </div>

              {/* About Me Section */}
              <div style={{ marginBottom: '1.5rem' }}>
                <h3 className="font-display text-rust mb-2" style={{ fontSize: '1.25rem', textTransform: 'uppercase' }}>
                  About Me
                </h3>
                <p style={{ color: '#474E61', fontSize: '0.98rem', lineHeight: '1.65' }}>
                  {artist.bio}
                </p>
              </div>

              {/* Contact Block */}
              <div style={{ marginBottom: '1.5rem' }}>
                <h3 className="font-display text-navy mb-2" style={{ fontSize: '1.1rem', textTransform: 'uppercase' }}>
                  Contact
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.9rem', color: '#1C202B' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Phone size={16} color="#BA3801" />
                    <span>{artist.contact.phone}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Mail size={16} color="#BA3801" />
                    <span>{artist.contact.email}</span>
                  </div>
                </div>
              </div>

              {/* Portfolio Section */}
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <h3 className="font-display text-navy" style={{ fontSize: '1.1rem', textTransform: 'uppercase' }}>
                    Portfolio
                  </h3>
                  <button onClick={() => document.getElementById('portfolio-work')?.scrollIntoView({ behavior: 'smooth', block: 'center' })} style={{ background: 'none', border: 'none', color: '#4A69B3', fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer' }}>
                    View Full Portfolio →
                  </button>
                </div>

                <div id="portfolio-work"><PortfolioGallery items={artist.portfolio} /></div>
              </div>

              {/* Primary Actions (Book Now - Rust filled, Chat Now - Navy outlined pill) */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <button
                  onClick={() => onBookNow(artist)}
                  className="btn-primary"
                  style={{ padding: '0.9rem 1.5rem', fontSize: '1.05rem', justifyContent: 'center' }}
                >
                  <span>Book Now</span>
                </button>

                <button
                  onClick={() => onChatNow(artist)}
                  className="btn-secondary"
                  style={{ padding: '0.9rem 1.5rem', fontSize: '1.05rem', justifyContent: 'center' }}
                >
                  <MessageSquare size={18} />
                  <span>Chat Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Other Talents Carousel Section matching Reference Frame 4 Bottom */}
        <div>
          <h2 className="font-display text-rust mb-4" style={{ fontSize: '1.8rem', textTransform: 'uppercase' }}>
            Other Talents by {artist.name}
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.25rem'
            }}
          >
            {relatedArtists.slice(0, 4).map((rel) => (
              <ArtistCard
                key={rel.id}
                artist={rel}
                onViewDetails={(a) => {
                  onArtistSelect(a);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onBookNow={onBookNow}
                onChatNow={onChatNow}
              />
            ))}
          </div>
        </div>
      </div>

      <FluidSplashBottom color="#4A69B3" />

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 868px) {
          .profile-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};
