import React, { useState } from 'react';
import { CATEGORIES } from '../data/mockData';
import { SectionHeading } from '../components/SectionHeading';
import { DoodleStar, DoodleSquiggle, FluidSplashBottom, TapeClip } from '../components/DecorativeShapes';
import { Sparkles, UploadCloud, CheckCircle2, UserCheck, Star, ShieldCheck, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export const TalentPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'Music',
    talentType: '',
    location: '',
    experience: '',
    about: '',
    phone: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [portfolioFiles, setPortfolioFiles] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name) return;

    setSubmitted(true);
    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // ignore
    }
  };

  const selectedCatObj = CATEGORIES.find(c => c.id === formData.category) || CATEGORIES[0];

  return (
    <div style={{ padding: '2.5rem 0 6rem 0', position: 'relative', backgroundColor: '#FFF3A6' }}>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Main 2-Column Section matching Reference Frame 7 */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(300px, 440px) 1fr',
            gap: '3rem',
            alignItems: 'center',
            marginBottom: '4rem'
          }}
          className="talent-main-grid"
        >
          {/* Left Column: Tilted Framed Photo with Doodle Annotations */}
          <div style={{ position: 'relative', justifySelf: 'center' }}>
            {/* Paper Tape Clip */}
            <TapeClip style={{ top: '-15px' }} />

            {/* Framed Photo */}
            <div
              style={{
                width: '100%',
                maxWidth: '380px',
                height: '480px',
                borderRadius: '24px',
                overflow: 'hidden',
                border: '4px solid #4A69B3',
                boxShadow: '-8px 10px 0px #4A69B3',
                transform: 'rotate(-3deg)',
                backgroundColor: '#FFFFFF',
                position: 'relative'
              }}
            >
              <img
                src="/references/music-vocalist.jpg"
                alt="Local vocalist performing on stage"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Hand-drawn Doodles surrounding the image */}
            <DoodleStar size={36} color="#4A69B3" style={{ position: 'absolute', top: '-20px', right: '0px' }} />
            <DoodleStar size={28} color="#BA3801" style={{ position: 'absolute', bottom: '40px', left: '-30px' }} />
            <DoodleSquiggle color="#4A69B3" style={{ position: 'absolute', bottom: '-20px', right: '10px' }} />
          </div>

          {/* Right Column: SHARE YOUR TALENT Form matching Reference Frame 7 */}
          <div style={{ position: 'relative' }}>
            
            {/* Top Title & Subtitle */}
            <div style={{ marginBottom: '1.75rem' }}>
              <h1
                className="font-display text-rust"
                style={{
                  fontSize: 'clamp(2.4rem, 6vw, 4.2rem)',
                  textTransform: 'uppercase',
                  lineHeight: '1.05',
                  marginBottom: '0.2rem'
                }}
              >
                YOUR TALENT DESERVES TO BE SEEN.
              </h1>
              <p className="font-handwritten" style={{ fontSize: '1.8rem', color: '#4A69B3' }}>
                Show your work. Get discovered. Get hired.
              </p>
            </div>

            {/* Form Card Container */}
            <div
              className="editorial-card"
              style={{
                backgroundColor: '#FDFBF4',
                padding: '2rem',
                border: '3px solid #4A69B3',
                borderRadius: '24px',
                boxShadow: '6px 8px 0px #4A69B3'
              }}
            >
              {!submitted ? (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                  
                  {/* Your Name */}
                  <div>
                    <label style={{ display: 'block', fontWeight: 700, fontSize: '0.88rem', color: '#1C202B', marginBottom: '0.35rem' }}>
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Kavya Sree"
                      style={{
                        width: '100%',
                        padding: '0.7rem 1rem',
                        borderRadius: '14px',
                        border: '2px solid #4A69B3',
                        backgroundColor: '#FFFFFF',
                        fontFamily: 'inherit',
                        fontSize: '0.95rem'
                      }}
                    />
                  </div>

                  {/* Your Email */}
                  <div>
                    <label style={{ display: 'block', fontWeight: 700, fontSize: '0.88rem', color: '#1C202B', marginBottom: '0.35rem' }}>
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="kavya@example.com"
                      style={{
                        width: '100%',
                        padding: '0.7rem 1rem',
                        borderRadius: '14px',
                        border: '2px solid #4A69B3',
                        backgroundColor: '#FFFFFF',
                        fontFamily: 'inherit',
                        fontSize: '0.95rem'
                      }}
                    />
                  </div>

                  {/* Your Skill Category & Talent Type */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontWeight: 700, fontSize: '0.88rem', color: '#1C202B', marginBottom: '0.35rem' }}>
                        Your Skill Category
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value, talentType: '' })}
                        style={{
                          width: '100%',
                          padding: '0.7rem 1rem',
                          borderRadius: '14px',
                          border: '2px solid #4A69B3',
                          backgroundColor: '#FFFFFF',
                          fontFamily: 'inherit',
                          fontWeight: 600,
                          fontSize: '0.95rem'
                        }}
                      >
                        {CATEGORIES.map((c) => (
                          <option key={c.id} value={c.id}>
                            {c.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontWeight: 700, fontSize: '0.88rem', color: '#1C202B', marginBottom: '0.35rem' }}>
                        Talent Specialty
                      </label>
                      <select
                        value={formData.talentType}
                        onChange={(e) => setFormData({ ...formData, talentType: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '0.7rem 1rem',
                          borderRadius: '14px',
                          border: '2px solid #4A69B3',
                          backgroundColor: '#FFFFFF',
                          fontFamily: 'inherit',
                          fontWeight: 600,
                          fontSize: '0.95rem'
                        }}
                      >
                        <option value="">Select Specialty</option>
                        {selectedCatObj.talentTypes.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Location */}
                  <div>
                    <label style={{ display: 'block', fontWeight: 700, fontSize: '0.88rem', color: '#1C202B', marginBottom: '0.35rem' }}>
                      Location
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g. Hyderabad"
                      style={{
                        width: '100%',
                        padding: '0.7rem 1rem',
                        borderRadius: '14px',
                        border: '2px solid #4A69B3',
                        backgroundColor: '#FFFFFF',
                        fontFamily: 'inherit',
                        fontSize: '0.95rem'
                      }}
                    />
                  </div>

                  <div>
                    <label htmlFor="talent-experience" style={{ display: 'block', fontWeight: 700, fontSize: '0.88rem', color: '#1C202B', marginBottom: '0.35rem' }}>
                      Experience
                    </label>
                    <input
                      id="talent-experience"
                      type="text"
                      required
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      placeholder="e.g. 3 years"
                      style={{ width: '100%', padding: '0.7rem 1rem', borderRadius: '14px', border: '2px solid #4A69B3', backgroundColor: '#FFFFFF', fontFamily: 'inherit', fontSize: '0.95rem' }}
                    />
                  </div>

                  {/* Tell us about yourself */}
                  <div>
                    <label style={{ display: 'block', fontWeight: 700, fontSize: '0.88rem', color: '#1C202B', marginBottom: '0.35rem' }}>
                      Tell us about yourself...
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={formData.about}
                      onChange={(e) => setFormData({ ...formData, about: e.target.value })}
                      placeholder="Describe your creative performance or service..."
                      style={{
                        width: '100%',
                        padding: '0.7rem 1rem',
                        borderRadius: '14px',
                        border: '2px solid #4A69B3',
                        backgroundColor: '#FFFFFF',
                        fontFamily: 'inherit',
                        fontSize: '0.95rem'
                      }}
                    />
                  </div>

                  <div>
                    <label htmlFor="talent-portfolio" style={{ display: 'block', fontWeight: 700, fontSize: '0.88rem', color: '#1C202B', marginBottom: '0.35rem' }}>
                      Portfolio samples
                    </label>
                    <input
                      id="talent-portfolio"
                      type="file"
                      accept="image/*,video/*"
                      multiple
                      onChange={(e) => setPortfolioFiles(Array.from(e.target.files || []))}
                      style={{ width: '100%', padding: '0.65rem', borderRadius: '14px', border: '2px dashed #4A69B3', backgroundColor: '#FFF8CD', fontFamily: 'inherit' }}
                    />
                    <p style={{ marginTop: '.35rem', color: '#474E61', fontSize: '.8rem' }} aria-live="polite">
                      {portfolioFiles.length ? `${portfolioFiles.length} file${portfolioFiles.length === 1 ? '' : 's'} selected` : 'Add photos or videos that show your work.'}
                    </p>
                  </div>

                  {/* Submit Join Us Button (Rust Filled) */}
                  <button
                    type="submit"
                    className="btn-primary"
                    style={{ width: '100%', padding: '0.85rem', fontSize: '1.1rem', marginTop: '0.5rem', justifyContent: 'center' }}
                  >
                    <span>Join What The Talent</span>
                  </button>
                </form>
              ) : (
                /* Confirmation Screen */
                <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
                  <CheckCircle2 size={48} color="#BA3801" style={{ margin: '0 auto 1rem auto' }} />
                  <h3 className="font-display text-rust" style={{ fontSize: '1.8rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                    Welcome Aboard!
                  </h3>
                  <p className="font-handwritten" style={{ fontSize: '1.5rem', color: '#4A69B3', marginBottom: '1.5rem' }}>
                    Your profile request has been received.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="btn-primary">
                    Submit Another Profile
                  </button>
                </div>
              )}
            </div>

            {/* Hand-written annotations matching Reference Frame 7 */}
            <div
              className="font-handwritten"
              style={{
                position: 'absolute',
                top: '-30px',
                right: '-20px',
                fontSize: '2rem',
                color: '#4A69B3',
                transform: 'rotate(8deg)',
                textAlign: 'center'
              }}
            >
              Your<br />Talent<br />Matters
            </div>

            <div
              className="font-handwritten"
              style={{
                position: 'absolute',
                bottom: '-40px',
                right: '10px',
                fontSize: '1.5rem',
                color: '#4A69B3',
                transform: 'rotate(-4deg)'
              }}
            >
              Small Skills. Big Dreams.
            </div>
          </div>
        </div>
      </div>

      <FluidSplashBottom color="#4A69B3" />

      {/* Responsive layout */}
      <style>{`
        @media (max-width: 868px) {
          .talent-main-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};
