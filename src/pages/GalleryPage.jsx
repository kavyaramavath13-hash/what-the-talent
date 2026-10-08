import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/mockData';
import { SectionHeading } from '../components/SectionHeading';
import { DoodleStar, DoodleSquiggle, FluidSplashBottom, TapeClip } from '../components/DecorativeShapes';
import { Heart, MapPin, Eye, Sparkles, X } from 'lucide-react';

export const GalleryPage = ({ setActivePage, onArtistSelect }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedGalleryItem, setSelectedGalleryItem] = useState(null);

  const filters = ['All', 'Music', 'Dance', 'Art', 'Photography', 'Cooking', 'Handcraft', 'Beauty', 'Fitness', 'Other'];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeFilter === 'All') return true;
    return item.category.toLowerCase() === activeFilter.toLowerCase();
  });

  return (
    <div style={{ padding: '2rem 0 6rem 0', position: 'relative', backgroundColor: '#FFF3A6' }}>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Gallery Header matching Reference Frame 5 */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            <h1
              className="font-display text-rust"
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                textTransform: 'uppercase',
                lineHeight: '1.05',
                marginBottom: '0.2rem'
              }}
            >
              Gallery
            </h1>
            <DoodleStar size={32} color="#4A69B3" />
          </div>
          <p className="font-handwritten" style={{ fontSize: '1.8rem', color: '#4A69B3' }}>
            Moments, movements, and magic.
          </p>
        </div>

        {/* Category Filters Bar matching Reference */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '0.6rem',
            marginBottom: '3rem'
          }}
        >
          {filters.map((filter) => {
            const isSelected = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                style={{
                  backgroundColor: isSelected ? '#BA3801' : '#FDFBF4',
                  color: isSelected ? '#FFFFFF' : '#4A69B3',
                  border: `2px solid ${isSelected ? '#BA3801' : '#4A69B3'}`,
                  borderRadius: '30px',
                  padding: '0.55rem 1.3rem',
                  fontWeight: 800,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  boxShadow: isSelected ? '3px 4px 0px #4A69B3' : '2px 2px 0px #4A69B3',
                  transition: 'all 0.2s ease'
                }}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Editorial Masonry Grid matching Reference Frame 5 */}
        <div
          className="gallery-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            gridAutoRows: '250px',
            gap: '1.5rem'
          }}
        >
          {filteredItems.map((item, index) => {
            const spanStyle =
              item.size === 'tall'
                ? { gridRow: 'span 2' }
                : item.size === 'wide'
                ? { gridColumn: 'span 2' }
                : {};

            const rotationDeg = index % 3 === 0 ? '-1.5deg' : index % 3 === 1 ? '1.5deg' : '0deg';

            return (
              <div
                key={item.id}
                onClick={() => setSelectedGalleryItem(item)}
                className="editorial-card group gallery-card"
                style={{
                  ...spanStyle,
                  cursor: 'pointer',
                  overflow: 'hidden',
                  position: 'relative',
                  transform: `rotate(${rotationDeg})`,
                  backgroundColor: '#FDFBF4',
                  border: '2.5px solid #4A69B3',
                  borderRadius: '18px',
                  boxShadow: '4px 6px 0px #4A69B3'
                }}
              >
                {/* Paper Tape Clip Effect on selected cards */}
                {index % 2 === 0 && <TapeClip />}

                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                  className="gallery-image"
                />

                {/* Hover Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(28, 32, 43, 0.85) 0%, transparent 60%)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '1.25rem',
                    color: '#FFFFFF'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <span className="badge-rust" style={{ fontSize: '0.75rem' }}>
                      {item.category}
                    </span>
                    <div
                      style={{
                        backgroundColor: '#FFF3A6',
                        color: '#BA3801',
                        padding: '0.25rem 0.6rem',
                        borderRadius: '20px',
                        border: '1.5px solid #BA3801',
                        fontSize: '0.8rem',
                        fontWeight: 800,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.2rem'
                      }}
                    >
                      <Heart size={14} fill="#BA3801" color="#BA3801" />
                      <span>{item.likes}</span>
                    </div>
                  </div>

                  <div>
                    <h3
                      className="font-display"
                      style={{
                        fontSize: '1.3rem',
                        textTransform: 'uppercase',
                        lineHeight: '1.1',
                        marginBottom: '0.2rem'
                      }}
                    >
                      {item.title}
                    </h3>
                    <p className="font-handwritten" style={{ color: '#FFF3A6', fontSize: '1.15rem' }}>
                      By {item.artistName} • {item.location}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Lightbox Modal */}
        {selectedGalleryItem && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(28, 32, 43, 0.9)',
              backdropFilter: 'blur(6px)',
              zIndex: 110,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem'
            }}
            onClick={() => setSelectedGalleryItem(null)}
          >
            <div
              className="editorial-card animate-slide-up"
              style={{
                maxWidth: '750px',
                width: '100%',
                backgroundColor: '#FDFBF4',
                padding: '1.5rem',
                position: 'relative',
                border: '3px solid #4A69B3',
                borderRadius: '24px'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedGalleryItem(null)}
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
                  cursor: 'pointer'
                }}
              >
                <X size={20} />
              </button>

              <img
                src={selectedGalleryItem.image}
                alt={selectedGalleryItem.title}
                style={{
                  width: '100%',
                  maxHeight: '460px',
                  objectFit: 'cover',
                  borderRadius: '16px',
                  border: '2.5px solid #4A69B3',
                  marginBottom: '1rem'
                }}
              />

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <span className="badge-rust mb-1">{selectedGalleryItem.category}</span>
                  <h3 className="font-display text-rust" style={{ fontSize: '1.6rem', textTransform: 'uppercase' }}>
                    {selectedGalleryItem.title}
                  </h3>
                  <p className="font-handwritten" style={{ fontSize: '1.4rem', color: '#4A69B3' }}>
                    Artist: {selectedGalleryItem.artistName} • {selectedGalleryItem.location}
                  </p>
                </div>

                <button
                  onClick={() => {
                    setSelectedGalleryItem(null);
                    setActivePage('explore');
                  }}
                  className="btn-primary btn-sm"
                >
                  Explore Category →
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <FluidSplashBottom color="#4A69B3" />
    </div>
  );
};
