import React from 'react';
import { ArrowRight, Heart } from 'lucide-react';
import { CATEGORY_IMAGES, TALENT_TYPE_IMAGES } from '../data/imageLibrary';

export const TalentTypeCard = ({ category, talentType, isSelected, onClick, count = 12 }) => {
  const coverImage = TALENT_TYPE_IMAGES[category]?.[talentType] || CATEGORY_IMAGES[category];

  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), onClick())}
      className="group editorial-card"
      style={{
        cursor: 'pointer',
        backgroundColor: '#FDFBF4',
        border: '2.5px solid #4A69B3',
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow: isSelected ? '5px 7px 0px #BA3801' : '4px 6px 0px #4A69B3',
        borderColor: isSelected ? '#BA3801' : '#4A69B3',
        transform: isSelected ? 'translateY(-4px)' : 'none',
        transition: 'all 0.25s ease'
      }}
    >
      {/* Cover Image Container */}
      <div style={{ position: 'relative', height: '170px', overflow: 'hidden' }}>
        <img
          src={coverImage}
          alt={talentType}
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.4s ease'
          }}
          className="type-card-image"
        />
        <div
          style={{
            position: 'absolute',
            top: '0.75rem',
            right: '0.75rem',
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 243, 166, 0.9)',
            border: '1.5px solid #BA3801',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Heart size={16} color="#BA3801" fill="#BA3801" />
        </div>
      </div>

      {/* Label Footer */}
      <div
        style={{
          padding: '0.85rem 1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#FDFBF4'
        }}
      >
        <span
          className="font-display text-rust"
          style={{ fontSize: '1.05rem', textTransform: 'uppercase', letterSpacing: '0.01em' }}
        >
          {talentType}
        </span>
        <ArrowRight size={18} color="#4A69B3" />
      </div>
    </div>
  );
};
