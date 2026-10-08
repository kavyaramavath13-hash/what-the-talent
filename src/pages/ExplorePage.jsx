import React, { useState } from 'react';
import { CATEGORIES, ARTISTS } from '../data/mockData';
import { TalentTypeCard } from '../components/TalentTypeCard';
import { ArtistCard } from '../components/ArtistCard';
import { FluidSplashBottom } from '../components/DecorativeShapes';
import { Search, ArrowLeft, Sparkles, Music, Activity, Palette, Camera, Utensils, Scissors, Dumbbell, Grid } from 'lucide-react';

export const ExplorePage = ({
  selectedCategoryId,
  setSelectedCategoryId,
  searchQuery,
  setSearchQuery,
  onArtistSelect,
  setActivePage,
  onBookNow,
  onChatNow
}) => {
  const [selectedTalentType, setSelectedTalentType] = useState(null);

  const currentCategory = CATEGORIES.find((c) => c.id === selectedCategoryId) || CATEGORIES[0];

  // Map category icons matching reference
  const getCategoryIcon = (id) => {
    switch (id) {
      case 'Music': return <Music size={18} />;
      case 'Dance': return <Activity size={18} />;
      case 'Art': return <Palette size={18} />;
      case 'Photography': return <Camera size={18} />;
      case 'Cooking': return <Utensils size={18} />;
      case 'Handcraft': return <Scissors size={18} />;
      case 'Fitness': return <Dumbbell size={18} />;
      default: return <Grid size={18} />;
    }
  };

  const handleSelectCategory = (catId) => {
    setSelectedCategoryId(catId);
    setSelectedTalentType(null);
    setSearchQuery('');
  };

  // Filter artists based on selected category, talent type, and search query
  const filteredArtists = ARTISTS.filter((artist) => {
    const matchesCategory = searchQuery.trim() ? true : artist.category === currentCategory.id;
    const matchesType = searchQuery.trim() ? true : selectedTalentType ? artist.talentType === selectedTalentType : true;
    const matchesSearch = searchQuery.trim() === '' ||
      artist.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      artist.talentType.toLowerCase().includes(searchQuery.toLowerCase()) ||
      artist.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      artist.skills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
      artist.location.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesType && matchesSearch;
  });

  return (
    <div style={{ padding: '2rem 0 6rem 0', position: 'relative', backgroundColor: '#FFF3A6' }}>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Page Header matching Reference Frame 2 */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h1
            className="font-display text-rust"
            style={{
              fontSize: 'clamp(2.4rem, 6vw, 4.2rem)',
              textTransform: 'uppercase',
              lineHeight: '1.05',
              marginBottom: '0.2rem'
            }}
          >
            EXPLORE YOUR TALENT
          </h1>
          <p className="font-handwritten" style={{ fontSize: '1.8rem', color: '#4A69B3' }}>
            Find the right person for what you need.
          </p>
        </div>

        <label className="explore-search" aria-label="Search local talent">
          <Search size={19} color="#BA3801" aria-hidden="true" />
          <input
            type="search"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Search by skill, creator or location..."
          />
          {searchQuery && <button type="button" onClick={() => setSearchQuery('')}>Clear</button>}
        </label>

        {/* Mobile Horizontal Selector */}
        <div className="mobile-category-bar" style={{ display: 'none', overflowX: 'auto', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', gap: '0.6rem', whiteSpace: 'nowrap' }}>
            {CATEGORIES.map((cat) => {
              const isSelected = cat.id === currentCategory.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleSelectCategory(cat.id)}
                  style={{
                    backgroundColor: isSelected ? '#BA3801' : '#FDFBF4',
                    color: isSelected ? '#FFFFFF' : '#4A69B3',
                    border: `2px solid ${isSelected ? '#BA3801' : '#4A69B3'}`,
                    padding: '0.6rem 1.1rem',
                    borderRadius: '30px',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    cursor: 'pointer'
                  }}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* 2-Column Layout matching Reference Frames 2 & 3 */}
        <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: '2.5rem', alignItems: 'start' }} className="explore-layout">
          
          {/* Left Panel: TALENT CATEGORIES */}
          <aside
            className="editorial-card desktop-category-panel"
            style={{
              position: 'sticky',
              top: '90px',
              padding: '1.25rem',
              backgroundColor: '#FDFBF4',
              border: '2.5px solid #4A69B3',
              borderRadius: '20px',
              boxShadow: '4px 6px 0px #4A69B3'
            }}
          >
            <h3
              className="font-display text-rust mb-3"
              style={{ fontSize: '1.15rem', textTransform: 'uppercase', letterSpacing: '0.02em' }}
            >
              TALENT CATEGORIES
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              {CATEGORIES.map((cat) => {
                const isSelected = cat.id === currentCategory.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleSelectCategory(cat.id)}
                    style={{
                      backgroundColor: isSelected ? '#BA3801' : 'transparent',
                      color: isSelected ? '#FFFFFF' : '#1C202B',
                      border: isSelected ? '2px solid #BA3801' : '2px solid transparent',
                      borderRadius: '12px',
                      padding: '0.65rem 0.85rem',
                      fontWeight: 700,
                      fontSize: '0.95rem',
                      textAlign: 'left',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <span style={{ color: isSelected ? '#FFFFFF' : '#4A69B3' }}>
                      {getCategoryIcon(cat.id)}
                    </span>
                    <span>{cat.name}</span>
                  </button>
                );
              })}
            </div>
          </aside>

          {/* Dynamic Right Content Panel */}
          <main style={{ minHeight: '600px' }}>
            {!searchQuery.trim() && !selectedTalentType ? (
              /* Level 1: Category Header & Talent Types Grid (Reference Frame 2) */
              <div>
                <div style={{ marginBottom: '1.75rem' }}>
                  <h2
                    className="font-display text-rust"
                    style={{ fontSize: '2.2rem', textTransform: 'uppercase', lineHeight: '1.1' }}
                  >
                    {currentCategory.name}
                  </h2>
                  <p className="font-handwritten" style={{ fontSize: '1.4rem', color: '#4A69B3' }}>
                    {currentCategory.tagline}
                  </p>
                </div>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))',
                    gap: '1.5rem'
                  }}
                >
                  {currentCategory.talentTypes.map((type) => (
                    <TalentTypeCard
                      key={type}
                      category={currentCategory.name}
                      talentType={type}
                      isSelected={selectedTalentType === type}
                      onClick={() => setSelectedTalentType(type)}
                    />
                  ))}
                </div>
              </div>
            ) : (
              /* Level 2: Artist Listing Grid (Reference Frame 3) */
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.75rem',
                    flexWrap: 'wrap',
                    gap: '1rem'
                  }}
                >
                  <div>
                    <button
                      onClick={() => searchQuery.trim() ? setSearchQuery('') : setSelectedTalentType(null)}
                      className="btn-secondary btn-sm mb-2"
                      style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}
                    >
                      <ArrowLeft size={16} />
                      <span>{searchQuery.trim() ? 'Clear Search' : `Back to ${currentCategory.name} Specialties`}</span>
                    </button>
                    <h2 className="font-display text-rust" style={{ fontSize: '2.2rem', textTransform: 'uppercase' }}>
                      {searchQuery.trim() ? 'Search Results' : `${selectedTalentType}s`}
                    </h2>
                    <p className="font-handwritten" style={{ fontSize: '1.4rem', color: '#4A69B3' }}>
                      {searchQuery.trim() ? `${filteredArtists.length} local ${filteredArtists.length === 1 ? 'talent' : 'talents'} found for “${searchQuery}”.` : 'Find the right person for your moment.'}
                    </p>
                  </div>
                </div>

                {filteredArtists.length > 0 ? (
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                      gap: '1.5rem'
                    }}
                  >
                    {filteredArtists.map((artist) => (
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
                ) : (
                  <div
                    className="editorial-card text-center"
                    style={{ padding: '3rem 1.5rem', backgroundColor: '#FDFBF4' }}
                  >
                    <Sparkles size={40} color="#BA3801" style={{ margin: '0 auto 1rem auto' }} />
                    <h3 className="font-display text-rust" style={{ fontSize: '1.4rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                      {searchQuery.trim() ? 'No Matches Yet' : 'No Artists Found'}
                    </h3>
                    <p style={{ color: '#474E61', fontSize: '0.95rem', maxWidth: '400px', margin: '0 auto 1.5rem auto' }}>
                      {searchQuery.trim() ? 'Try another skill, name or location.' : `We are currently onboarding more ${selectedTalentType} artists in this area.`}
                    </p>
                    <button
                      onClick={() => setSelectedTalentType(null)}
                      className="btn-primary btn-sm"
                    >
                      Explore Other Specialties
                    </button>
                  </div>
                )}
              </div>
            )}
          </main>
        </div>
      </div>

      <FluidSplashBottom color="#4A69B3" />

      {/* Embedded CSS for Mobile */}
      <style>{`
        .explore-search { display:flex; align-items:center; gap:.65rem; max-width:560px; margin:-1rem 0 1.5rem; padding:.45rem .6rem .45rem 1rem; border:2px solid #4A69B3; border-radius:999px; background:#FDFBF4; box-shadow:2px 3px 0 #4A69B3; }
        .explore-search input { min-width:0; flex:1; border:0; outline:0; background:transparent; color:#1C202B; font:500 .95rem var(--font-body); }
        .explore-search button { border:0; background:transparent; color:#4A69B3; font:700 .85rem var(--font-body); cursor:pointer; padding:.4rem; }
        .explore-search:focus-within { outline:3px solid rgba(74,105,179,.3); }
        @media (max-width: 768px) {
          .explore-layout {
            grid-template-columns: 1fr !important;
          }
          .desktop-category-panel {
            display: none !important;
          }
          .mobile-category-bar {
            display: block !important;
          }
        }
      `}</style>
    </div>
  );
};
