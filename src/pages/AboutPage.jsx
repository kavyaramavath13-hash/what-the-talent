import React from 'react';
import { ArrowRight, Eye, Compass, UserRound, MapPin, Sparkles } from 'lucide-react';
import { CornerDecorationLeft, CornerDecorationRight } from '../components/DecorativeShapes';

const rust = '#BA3801';
const navy = '#4A69B3';
const ink = '#474E61';
const paper = '#FDFBF4';

const steps = [
  ['01', 'Discover', 'Choose the kind of talent you need.'],
  ['02', 'Explore', 'Browse specialties and people nearby.'],
  ['03', 'View', 'See experience, availability and past work.'],
  ['04', 'Connect', 'Talk directly about what you have in mind.'],
  ['05', 'Book', 'Send a request with the event details.']
];

const advantages = [
  ['01', 'Local discovery', 'Find people nearby for a specific skill or occasion, all in one place.'],
  ['02', 'A clearer path', 'Go from category to talent type to artist, instead of sorting through scattered posts.'],
  ['03', 'Useful profiles', 'Review skills, experience, location, portfolio and availability before reaching out.'],
  ['04', 'One connected journey', 'Discover, view, chat and send a booking request in the same platform.'],
  ['05', 'Room to be found', 'Emerging creators can showcase their work even as they build an audience.']
];

export const AboutPage = ({ setActivePage }) => (
  <div className="about-page" style={{ padding: '3rem 0 5rem', position: 'relative', overflow: 'hidden' }}>
    <CornerDecorationLeft className="top-8 left-0 hidden md:block" />
    <CornerDecorationRight className="top-16 right-0 hidden md:block" />
    <div className="container" style={{ position: 'relative', zIndex: 1 }}>
      <section className="about-hero">
        <span className="badge-navy mb-3">A PLACE FOR LOCAL CREATIVITY</span>
        <p className="font-editorial text-navy about-kicker">Talent is everywhere.</p>
        <h1 className="font-display text-rust">Visibility<br />isn’t.</h1>
        <p className="about-intro">What The Talent! helps people discover skilled creators nearby—and gives local talent a dedicated place to show what they do.</p>
        <div className="about-journey" aria-label="Talent leads to discovery, connection and opportunity">
          {['Talent', 'Discovery', 'Connection', 'Opportunity'].map((word, index) => (
            <React.Fragment key={word}>
              <span>{word}</span>{index < 3 && <ArrowRight size={18} aria-hidden="true" />}
            </React.Fragment>
          ))}
        </div>
      </section>

      <section className="about-problem editorial-card">
        <div>
          <span className="badge-rust mb-3">THE PROBLEM</span>
          <h2 className="font-display text-rust">Talent is everywhere.<br />But is it visible?</h2>
        </div>
        <div className="about-copy">
          <p>Many talented people have the skill, but not the visibility. Their work can be spread across Instagram, WhatsApp, personal contacts and word of mouth, making it hard for new people to find them.</p>
          <p>At the same time, someone looking for a singer, dancer, photographer, chef, maker or trainer may not know where to start.</p>
          <strong>It’s a discovery, visibility and connection problem.</strong>
        </div>
      </section>

      <section className="about-origin">
        <div className="about-origin-stamp"><Eye size={34} /><span>LOCAL<br />TALENT</span></div>
        <div>
          <span className="badge-navy mb-3">WHY WE CHOSE THIS</span>
          <h2 className="font-display text-rust">Hidden in<br />plain sight.</h2>
          <p>We chose this idea because a person can be highly skilled and still remain unknown simply because there is no easy way for people nearby to discover them. We want local talent to become visible talent, with a place to show work and find opportunities in their own community.</p>
        </div>
      </section>

      <section className="about-section">
        <div className="about-section-heading">
          <span className="badge-rust mb-3">WHY THIS APPROACH</span>
          <h2 className="font-display text-rust">A more human<br />way to find talent.</h2>
        </div>
        <div className="about-advantage-list">
          {advantages.map(([number, title, description]) => (
            <article className="about-advantage" key={number}>
              <span className="about-number">{number}</span>
              <div><h3 className="font-display text-rust">{title}</h3><p>{description}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-does">
        <div>
          <span className="badge-navy mb-3">WHAT THE PLATFORM DOES</span>
          <h2 className="font-display text-rust">Two sides.<br />One community.</h2>
        </div>
        <div className="about-audiences">
          <article className="about-audience-card">
            <h3 className="font-display text-rust">For people looking</h3>
            <p>Discover a category, explore talent types, view portfolios, connect with creators and send a booking request.</p>
            <div className="about-word-list">DISCOVER <span>·</span> EXPLORE <span>·</span> VIEW <span>·</span> CONNECT <span>·</span> BOOK</div>
          </article>
          <article className="about-audience-card about-audience-dark">
            <h3 className="font-display">For local talent</h3>
            <p>Create a profile, showcase work, get discovered, talk with potential clients and grow through new opportunities.</p>
            <div className="about-word-list">SHOWCASE <span>·</span> GET DISCOVERED <span>·</span> CONNECT <span>·</span> GROW</div>
          </article>
        </div>
      </section>

      <section className="about-how">
        <div className="about-how-heading">
          <span className="badge-navy mb-3">HOW IT WORKS</span>
          <h2 className="font-display text-rust">A clear path<br />from need to connection.</h2>
          <div className="about-flow">CATEGORY <ArrowRight size={16} /> TALENT TYPE <ArrowRight size={16} /> ARTIST <ArrowRight size={16} /> PROFILE <ArrowRight size={16} /> CHAT <ArrowRight size={16} /> BOOK</div>
        </div>
        <div className="about-steps">
          {steps.map(([number, title, description]) => (
            <article className="about-step" key={number}><span>{number}</span><h3 className="font-display text-rust">{title}</h3><p>{description}</p></article>
          ))}
        </div>
      </section>

      <section className="about-who">
        <div><MapPin size={28} color={rust} /><h2 className="font-display text-rust">For people looking</h2><p>Find talent for events, weddings, celebrations, creative projects, food, beauty, fitness and local experiences.</p></div>
        <div><UserRound size={28} color={navy} /><h2 className="font-display text-navy">For local talent</h2><p>A home for artists, musicians, dancers, photographers, chefs, makers, beauty and fitness professionals, creators and performers.</p></div>
      </section>

      <section className="about-vision">
        <Sparkles size={30} aria-hidden="true" />
        <span className="badge-navy mb-3">THE VISION</span>
        <h2 className="font-display">Make local talent visible.</h2>
        <p>People don’t have to be famous to be discovered. A talented person from any community should be able to share their work, meet people who need their skills and find room to grow.</p>
        <strong>HIDDEN TALENT <ArrowRight size={20} /> VISIBLE OPPORTUNITY</strong>
      </section>

      <section className="about-cta">
        <div><span className="font-editorial">Got talent?</span><h2 className="font-display">Get seen.</h2></div>
        <div className="about-cta-actions">
          <button className="btn-primary" onClick={() => setActivePage('talent')}>Showcase My Talent <ArrowRight size={18} /></button>
          <button className="btn-secondary" onClick={() => setActivePage('explore')}><Compass size={18} /> Explore Talent</button>
        </div>
      </section>
    </div>
    <style>{`
      .about-page h2 { line-height: 1.02; }
      .about-hero { max-width: 880px; margin: 0 auto 5rem; text-align: center; }
      .about-kicker { font-size: clamp(1.6rem, 3.5vw, 2.6rem); margin: 1rem 0 .2rem; }
      .about-hero h1 { font-size: clamp(4rem, 12vw, 9rem); line-height: .83; letter-spacing: -.055em; text-transform: uppercase; }
      .about-intro { max-width: 650px; margin: 1.5rem auto 1.7rem; color: ${ink}; font-size: 1.1rem; line-height: 1.7; }
      .about-journey { display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:.6rem; color:${navy}; font-family:var(--font-display); font-weight:800; text-transform:uppercase; }
      .about-problem { display:grid; grid-template-columns:1fr 1fr; align-items:center; gap:2rem; padding:clamp(1.5rem,4vw,3rem); margin-bottom:5rem; background:${paper}; }
      .about-problem h2,.about-origin h2,.about-section h2,.about-does h2,.about-how h2 { font-size:clamp(2.2rem,5vw,4.2rem); text-transform:uppercase; }
      .about-copy { color:${ink}; line-height:1.7; font-size:1rem; }
      .about-copy p + p { margin-top:.8rem; }
      .about-copy strong { display:block; color:${rust}; font-family:var(--font-display); text-transform:uppercase; margin-top:1rem; }
      .about-origin { display:grid; grid-template-columns:minmax(170px, .7fr) 1.3fr; gap:2rem; align-items:center; max-width:900px; margin:0 auto 6rem; }
      .about-origin-stamp { width:clamp(150px,22vw,240px); aspect-ratio:1; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:.7rem; color:${paper}; background:${rust}; border:3px solid ${navy}; border-radius:46% 54% 60% 40% / 50% 40% 60% 50%; box-shadow:8px 9px 0 ${navy}; transform:rotate(-6deg); font:800 1.4rem var(--font-display); text-align:center; }
      .about-origin p { max-width:650px; color:${ink}; line-height:1.75; margin-top:1rem; }
      .about-section { display:grid; grid-template-columns:.8fr 1.2fr; gap:3rem; margin-bottom:6rem; }
      .about-advantage-list { border-top:2px solid ${navy}; }
      .about-advantage { display:grid; grid-template-columns:64px 1fr; gap:1rem; padding:1rem .3rem; border-bottom:1px solid rgba(74,105,179,.45); }
      .about-number { color:${rust}; font:800 1.6rem var(--font-display); }
      .about-advantage h3 { text-transform:uppercase; font-size:1.15rem; }
      .about-advantage p,.about-audience-card p,.about-step p,.about-who p { color:${ink}; line-height:1.65; }
      .about-does { display:grid; grid-template-columns:.8fr 1.2fr; gap:2.5rem; align-items:start; margin-bottom:6rem; }
      .about-audiences { display:grid; gap:1rem; }
      .about-audience-card { background:${paper}; border:2px solid ${navy}; border-radius:24px 16px 28px 18px; box-shadow:4px 5px 0 ${navy}; padding:1.6rem; }
      .about-audience-card h3 { font-size:1.55rem; text-transform:uppercase; margin-bottom:.5rem; }
      .about-audience-dark { background:${rust}; color:${paper}; border-color:${navy}; }
      .about-audience-dark h3,.about-audience-dark p { color:${paper}; }
      .about-word-list { color:${navy}; font:800 .75rem var(--font-display); letter-spacing:.02em; margin-top:1.2rem; }
      .about-word-list span { padding:0 .3rem; color:${rust}; }
      .about-audience-dark .about-word-list { color:${paper}; }
      .about-audience-dark .about-word-list span { color:#FFF3A6; }
      .about-how { padding:2rem 0 5rem; }
      .about-how-heading { text-align:center; margin-bottom:2rem; }
      .about-flow { display:flex; flex-wrap:wrap; justify-content:center; align-items:center; gap:.55rem; margin:1.5rem auto 0; color:${navy}; font:800 .8rem var(--font-display); }
      .about-steps { display:grid; grid-template-columns:repeat(5,1fr); gap:.8rem; }
      .about-step { padding:1.2rem; border:2px solid ${navy}; border-radius:22px 14px 24px 16px; background:${paper}; min-height:170px; }
      .about-step > span { color:${rust}; font:800 2.5rem/.9 var(--font-display); }
      .about-step h3 { margin:.7rem 0 .25rem; text-transform:uppercase; }
      .about-who { display:grid; grid-template-columns:1fr 1fr; gap:1rem; margin:1rem 0 5rem; }
      .about-who > div { padding:1.6rem; border-top:3px solid ${rust}; background:rgba(253,251,244,.55); }
      .about-who h2 { font-size:1.5rem; text-transform:uppercase; margin:.6rem 0; }
      .about-vision { text-align:center; padding:3.5rem 1.5rem; background:${navy}; color:${paper}; border:3px solid ${rust}; border-radius:34px 20px 40px 24px; box-shadow:7px 8px 0 ${rust}; margin-bottom:5rem; }
      .about-vision > svg { display:block; margin:0 auto .8rem; color:#FFF3A6; }
      .about-vision h2 { font-size:clamp(2.2rem,6vw,4.8rem); line-height:1; text-transform:uppercase; margin:.5rem 0 1rem; }
      .about-vision p { max-width:720px; margin:0 auto 1.2rem; line-height:1.7; }
      .about-vision strong { display:inline-flex; align-items:center; gap:.6rem; color:#FFF3A6; font:800 1rem var(--font-display); }
      .about-cta { display:flex; align-items:center; justify-content:space-between; gap:1.5rem; padding:2rem; background:#FFF8CD; border:2px solid ${navy}; border-radius:28px 18px 32px 20px; }
      .about-cta .font-editorial { display:block; color:${navy}; font-size:1.7rem; }
      .about-cta h2 { color:${rust}; font-size:clamp(3rem,7vw,5.5rem); line-height:.9; text-transform:uppercase; }
      .about-cta-actions { display:flex; flex-wrap:wrap; gap:.8rem; }
      @media(max-width:850px) { .about-section,.about-does { grid-template-columns:1fr; gap:1.5rem; } .about-steps { grid-template-columns:repeat(2,1fr); } }
      @media(max-width:600px) { .about-problem,.about-origin,.about-who { grid-template-columns:1fr; } .about-origin-stamp { width:145px; margin:0 auto; } .about-steps { grid-template-columns:1fr; } .about-step { min-height:0; } .about-cta { align-items:flex-start; flex-direction:column; padding:1.4rem; } .about-cta-actions { width:100%; flex-direction:column; } .about-cta-actions button { width:100%; } }
    `}</style>
  </div>
);
