import React, { useState } from 'react';
import { Image, Play, X, ExternalLink } from 'lucide-react';

export const PortfolioGallery = ({ items = [] }) => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedMedia, setSelectedMedia] = useState(null);

  const filteredItems = items.filter((item) => {
    if (activeTab === 'all') return true;
    return item.type === activeTab;
  });

  return (
    <div>
      {/* Lightbox Modal */}
      {selectedMedia && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(28, 32, 43, 0.92)',
            zIndex: 110,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem'
          }}
          onClick={() => setSelectedMedia(null)}
        >
          <div
            className="editorial-card animate-slide-up"
            style={{
              maxWidth: '850px',
              width: '100%',
              backgroundColor: '#FDFBF4',
              padding: '1.5rem',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedMedia(null)}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                backgroundColor: '#BA3801',
                color: '#FFFFFF',
                border: '2px solid #4A69B3',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 10
              }}
            >
              <X size={20} />
            </button>

            <img
              src={selectedMedia.url}
              alt={selectedMedia.title}
              style={{
                width: '100%',
                maxHeight: '520px',
                objectFit: 'cover',
                borderRadius: '16px',
                border: '2px solid #4A69B3',
                marginBottom: '1rem'
              }}
            />

            <div>
              <span className="badge-rust mb-2">{selectedMedia.type || 'PORTFOLIO'}</span>
              <h3 className="font-display text-rust" style={{ fontSize: '1.5rem', textTransform: 'uppercase' }}>
                {selectedMedia.title}
              </h3>
              <p style={{ color: '#474E61', marginTop: '0.4rem', fontSize: '0.95rem' }}>
                {selectedMedia.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Grid Display */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: '1.25rem'
        }}
      >
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedMedia(item)}
            className="editorial-card group"
            style={{
              cursor: 'pointer',
              overflow: 'hidden',
              height: '220px',
              position: 'relative'
            }}
          >
            <img
              src={item.url}
              alt={item.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.4s ease'
              }}
              className="portfolio-image"
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundColor: 'rgba(28, 32, 43, 0.65)',
                opacity: 0,
                transition: 'opacity 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: '1rem',
                color: '#FFFFFF'
              }}
              className="portfolio-overlay"
            >
              <span className="badge-rust" style={{ fontSize: '0.7rem', alignSelf: 'flex-start', marginBottom: '0.4rem' }}>
                {item.type || 'Selected Work'}
              </span>
              <h4 className="font-display" style={{ fontSize: '1.05rem', textTransform: 'uppercase', lineHeight: '1.2' }}>
                {item.title}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
