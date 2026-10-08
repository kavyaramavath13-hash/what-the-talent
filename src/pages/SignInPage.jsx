import React, { useState } from 'react';
import { Lock, Mail, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export const SignInPage = ({ setActivePage }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) return;
    setMessage(isSignUp ? 'Account created successfully! Welcome to What The Talent.' : 'Successfully signed in!');
  };

  return (
    <div style={{ padding: '4rem 0 6rem 0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="container" style={{ maxWidth: '480px' }}>
        <div
          className="editorial-card animate-slide-up"
          style={{
            backgroundColor: '#FDFBF4',
            padding: '2.5rem',
            border: '3px solid #4A69B3',
            boxShadow: '8px 10px 0px #4A69B3'
          }}
        >
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '16px',
                backgroundColor: '#BA3801',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px solid #4A69B3',
                margin: '0 auto 1rem auto',
                fontWeight: 800,
                fontSize: '1.4rem'
              }}
            >
              W!
            </div>

            <h1 className="font-display text-rust" style={{ fontSize: '1.8rem', textTransform: 'uppercase' }}>
              {isSignUp ? 'CREATE ACCOUNT' : 'SIGN IN TO ACCOUNT'}
            </h1>
            <p className="font-editorial text-navy" style={{ fontSize: '1.15rem' }}>
              Got Talent? Get Seen!
            </p>
          </div>

          {message ? (
            <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
              <div
                style={{
                  backgroundColor: '#FFF3A6',
                  color: '#BA3801',
                  padding: '1rem',
                  borderRadius: '16px',
                  border: '2px solid #BA3801',
                  fontWeight: 700,
                  marginBottom: '1.5rem'
                }}
              >
                ✓ {message}
              </div>
              <button onClick={() => setActivePage('explore')} className="btn-primary" style={{ width: '100%' }}>
                Explore Talent Now →
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* Email */}
              <div>
                <label style={{ display: 'block', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.4rem' }}>
                  Email Address
                </label>
                <div style={{ position: 'relative' }}>
                  <Mail size={18} color="#4A69B3" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem 0.75rem 2.6rem',
                      borderRadius: '12px',
                      border: '2px solid #4A69B3',
                      backgroundColor: '#FFFFFF',
                      fontFamily: 'inherit'
                    }}
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                  <label style={{ fontWeight: 700, fontSize: '0.9rem' }}>
                    Password
                  </label>
                  {!isSignUp && (
                    <button
                      type="button"
                      style={{ background: 'none', border: 'none', color: '#BA3801', fontSize: '0.8rem', fontWeight: 700, cursor: 'pointer' }}
                      onClick={() => alert('Password reset instructions sent to your email.')}
                    >
                      Forgot Password?
                    </button>
                  )}
                </div>
                <div style={{ position: 'relative' }}>
                  <Lock size={18} color="#4A69B3" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem 0.75rem 2.6rem',
                      borderRadius: '12px',
                      border: '2px solid #4A69B3',
                      backgroundColor: '#FFFFFF',
                      fontFamily: 'inherit'
                    }}
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="btn-primary"
                style={{ width: '100%', padding: '0.9rem', fontSize: '1.05rem', marginTop: '0.5rem' }}
              >
                <span>{isSignUp ? 'Create Profile & Sign Up' : 'Sign In Now'}</span>
                <ArrowRight size={18} />
              </button>

              {/* Social Auth Divider */}
              <div style={{ position: 'relative', textAlign: 'center', margin: '1rem 0' }}>
                <div style={{ borderBottom: '1.5px dashed #4A69B3', position: 'absolute', top: '50%', width: '100%' }} />
                <span style={{ position: 'relative', backgroundColor: '#FDFBF4', padding: '0 0.8rem', color: '#474E61', fontSize: '0.8rem', fontWeight: 700 }}>
                  OR CONTINUE WITH
                </span>
              </div>

              {/* Google / Apple Sign In Placeholders */}
              <button
                type="button"
                className="btn-secondary"
                style={{ width: '100%', justifyContent: 'center', backgroundColor: '#FFFFFF', fontSize: '0.9rem' }}
                onClick={() => setMessage('Signed in with Google!')}
              >
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                </svg>
                <span>Google Sign In</span>
              </button>

              {/* Toggle Sign In / Sign Up */}
              <div style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.9rem' }}>
                <span style={{ color: '#474E61' }}>
                  {isSignUp ? 'Already have an account? ' : "Don't have an account? "}
                </span>
                <button
                  type="button"
                  style={{ background: 'none', border: 'none', color: '#BA3801', fontWeight: 800, cursor: 'pointer', textDecoration: 'underline' }}
                  onClick={() => setIsSignUp(!isSignUp)}
                >
                  {isSignUp ? 'Sign In' : 'Create Profile'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
