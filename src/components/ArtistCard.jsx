import React from 'react';
import { MapPin, Clock, Users, Heart } from 'lucide-react';

export const ArtistCard = ({ artist, onViewDetails, onBookNow, onChatNow }) => {
  return (
    <div
      className="editorial-card group"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        backgroundColor: '#FDFBF4',
        border: '2.5px solid #4A69B3',
        borderRadius: '20px',
        boxShadow: '4px 6px 0px #4A69B3',
        overflow: 'hidden',
        padding: '1rem',
        gap: '1rem'
      }}
    >
      {/* Top Image Banner */}
      <div
        style={{
          position: 'relative',
          height: '210px',
          borderRadius: '16px',
          overflow: 'hidden',
          border: '2px solid #4A69B3'
        }}
      >
        <img
          src={artist.image}
          alt={artist.name}
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.5s ease'
          }}
          className="media-zoom"
        />

        {/* Heart Icon Button Floating Top-Right */}
        <div
          style={{
            position: 'absolute',
            top: '0.75rem',
            right: '0.75rem',
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 243, 166, 0.95)',
            border: '1.5px solid #BA3801',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
        >
          <Heart size={16} color="#BA3801" fill="#BA3801" />
        </div>
      </div>

      {/* Body Details */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          {/* Artist Name & Specialty */}
          <h3
            className="font-display text-rust"
            style={{
              fontSize: '1.4rem',
              textTransform: 'uppercase',
              lineHeight: '1.1',
              marginBottom: '0.2rem'
            }}
          >
            {artist.name}
          </h3>
          <span style={{ fontSize: '0.85rem', color: '#4A69B3', fontWeight: 700, display: 'block', marginBottom: '0.75rem' }}>
            {artist.talentType}
          </span>

          {/* Details Metadata List (matching Reference Frame 3) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.85rem', color: '#474E61', marginBottom: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <MapPin size={15} color="#BA3801" />
              <span>{artist.location}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Clock size={15} color="#BA3801" />
              <span>{artist.experience}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Users size={15} color="#BA3801" />
              <span>{artist.hiredCount} hired</span>
            </div>
          </div>
        </div>

        {/* Action Buttons Row (Matching Reference Frame 3) */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem' }}>
          <button
            onClick={() => onViewDetails(artist)}
            className="btn-secondary btn-sm"
            style={{ width: '100%', padding: '0.55rem 0.5rem', fontSize: '0.85rem' }}
          >
            <span>View Details</span>
          </button>

          <button
            onClick={() => onBookNow(artist)}
            className="btn-primary btn-sm"
            style={{ width: '100%', padding: '0.55rem 0.5rem', fontSize: '0.85rem' }}
          >
            <span>Book Now</span>
          </button>
        </div>
      </div>
    </div>
  );
};
