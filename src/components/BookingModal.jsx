import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, DollarSign, Send, CheckCircle2, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export const BookingModal = ({ artist, onClose }) => {
  const [formData, setFormData] = useState({
    service: artist ? `${artist.talentType} Performance / Session` : '',
    date: '',
    time: '18:00',
    location: artist ? artist.location : '',
    budget: artist ? artist.startingPrice : '₹10,000',
    userName: '',
    userPhone: '',
    userEmail: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');
  const [errors, setErrors] = useState({});

  if (!artist) return null;

  const validate = () => {
    const errs = {};
    if (!formData.date) errs.date = 'Please select an event date';
    if (!formData.userName.trim()) errs.userName = 'Name is required';
    if (!formData.userPhone.trim()) errs.userPhone = 'Phone number is required';
    if (!formData.message.trim()) errs.message = 'Please provide brief details about your event';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const ref = 'WTT-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(ref);
    setSubmitted(true);

    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // ignore
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(28, 32, 43, 0.85)',
        backdropFilter: 'blur(6px)',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        overflowY: 'auto'
      }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="editorial-card animate-slide-up"
        style={{
          width: '100%',
          maxWidth: '620px',
          backgroundColor: '#FDFBF4',
          maxHeight: '90vh',
          overflowY: 'auto',
          margin: 'auto'
        }}
      >
        {/* Header */}
        <div
          style={{
            backgroundColor: '#BA3801',
            color: '#FFFFFF',
            padding: '1.25rem 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '2.5px solid #4A69B3'
          }}
        >
          <div>
            <span className="badge-navy mb-1" style={{ fontSize: '0.75rem', backgroundColor: '#FFF3A6', color: '#4A69B3' }}>
              OFFICIAL BOOKING REQUEST
            </span>
            <h3 className="font-display" style={{ fontSize: '1.5rem', textTransform: 'uppercase' }}>
              Book {artist.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            style={{
              backgroundColor: '#FFF3A6',
              color: '#BA3801',
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
        </div>

        {/* Modal Body */}
        <div style={{ padding: '1.5rem' }}>
          {!submitted ? (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {/* Artist Summary Card */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  backgroundColor: '#FFF3A6',
                  padding: '0.85rem 1rem',
                  borderRadius: '16px',
                  border: '2px solid #4A69B3'
                }}
              >
                <img
                  src={artist.image}
                  alt={artist.name}
                  style={{ width: '56px', height: '56px', borderRadius: '12px', objectFit: 'cover', border: '2px solid #BA3801' }}
                />
                <div>
                  <h4 className="font-display text-rust" style={{ fontSize: '1.1rem', textTransform: 'uppercase' }}>
                    {artist.name}
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: '#4A69B3', fontWeight: 600 }}>
                    {artist.talentType} • {artist.location}
                  </p>
                </div>
              </div>

              {/* Service Requested */}
              <div>
                <label style={{ display: 'block', fontWeight: 700, fontSize: '0.9rem', color: '#1C202B', marginBottom: '0.4rem' }}>
                  Requested Service / Performance Type
                </label>
                <input
                  type="text"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '12px',
                    border: '2px solid #4A69B3',
                    backgroundColor: '#FFFFFF',
                    fontFamily: 'inherit',
                    fontWeight: 600
                  }}
                />
              </div>

              {/* Date & Time Row */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontWeight: 700, fontSize: '0.9rem', color: '#1C202B', marginBottom: '0.4rem' }}>
                    Event Date *
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '12px',
                      border: errors.date ? '2px solid #BA3801' : '2px solid #4A69B3',
                      backgroundColor: '#FFFFFF',
                      fontFamily: 'inherit'
                    }}
                  />
                  {errors.date && <span style={{ color: '#BA3801', fontSize: '0.8rem', fontWeight: 700 }}>{errors.date}</span>}
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: 700, fontSize: '0.9rem', color: '#1C202B', marginBottom: '0.4rem' }}>
                    Preferred Time
                  </label>
                  <input
                    type="time"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '12px',
                      border: '2px solid #4A69B3',
                      backgroundColor: '#FFFFFF',
                      fontFamily: 'inherit'
                    }}
                  />
                </div>
              </div>

              {/* Location & Budget Row */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontWeight: 700, fontSize: '0.9rem', color: '#1C202B', marginBottom: '0.4rem' }}>
                    Event Location / Venue
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g. Jubilee Hills Club, Hyderabad"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '12px',
                      border: '2px solid #4A69B3',
                      backgroundColor: '#FFFFFF',
                      fontFamily: 'inherit'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: 700, fontSize: '0.9rem', color: '#1C202B', marginBottom: '0.4rem' }}>
                    Proposed Budget
                  </label>
                  <input
                    type="text"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    placeholder="e.g. ₹15,000"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '12px',
                      border: '2px solid #4A69B3',
                      backgroundColor: '#FFFFFF',
                      fontFamily: 'inherit'
                    }}
                  />
                </div>
              </div>

              {/* User Contact Details */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontWeight: 700, fontSize: '0.9rem', color: '#1C202B', marginBottom: '0.4rem' }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={formData.userName}
                    onChange={(e) => setFormData({ ...formData, userName: e.target.value })}
                    placeholder="Full Name"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '12px',
                      border: errors.userName ? '2px solid #BA3801' : '2px solid #4A69B3',
                      backgroundColor: '#FFFFFF',
                      fontFamily: 'inherit'
                    }}
                  />
                  {errors.userName && <span style={{ color: '#BA3801', fontSize: '0.8rem', fontWeight: 700 }}>{errors.userName}</span>}
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: 700, fontSize: '0.9rem', color: '#1C202B', marginBottom: '0.4rem' }}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.userPhone}
                    onChange={(e) => setFormData({ ...formData, userPhone: e.target.value })}
                    placeholder="+91 98765 00000"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '12px',
                      border: errors.userPhone ? '2px solid #BA3801' : '2px solid #4A69B3',
                      backgroundColor: '#FFFFFF',
                      fontFamily: 'inherit'
                    }}
                  />
                  {errors.userPhone && <span style={{ color: '#BA3801', fontSize: '0.8rem', fontWeight: 700 }}>{errors.userPhone}</span>}
                </div>
              </div>

              {/* Requirement Message */}
              <div>
                <label style={{ display: 'block', fontWeight: 700, fontSize: '0.9rem', color: '#1C202B', marginBottom: '0.4rem' }}>
                  Event Details & Special Requirements *
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your event, audience size, acoustic setup or custom requests..."
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '12px',
                    border: errors.message ? '2px solid #BA3801' : '2px solid #4A69B3',
                    backgroundColor: '#FFFFFF',
                    fontFamily: 'inherit'
                  }}
                />
                {errors.message && <span style={{ color: '#BA3801', fontSize: '0.8rem', fontWeight: 700 }}>{errors.message}</span>}
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="btn-primary"
                style={{ width: '100%', padding: '1rem', marginTop: '0.5rem' }}
              >
                <Send size={18} />
                <span>Send Booking Request Now</span>
              </button>
            </form>
          ) : (
            /* Success Feedback View */
            <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
              <div
                style={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '50%',
                  backgroundColor: '#FFF3A6',
                  color: '#BA3801',
                  border: '3px solid #BA3801',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem auto',
                  boxShadow: '4px 4px 0px #4A69B3'
                }}
              >
                <CheckCircle2 size={40} />
              </div>

              <span className="badge-rust mb-2">BOOKING CONFIRMED</span>

              <h3 className="font-display text-rust" style={{ fontSize: '1.8rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                Booking Request Sent!
              </h3>

              <p className="font-editorial text-navy" style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>
                Your booking reference: <strong style={{ color: '#BA3801' }}>{bookingRef}</strong>
              </p>

              <p style={{ color: '#474E61', fontSize: '0.95rem', maxWidth: '440px', margin: '0 auto 1.5rem auto', lineHeight: '1.6' }}>
                We have notified <strong>{artist.name}</strong> about your event on {formData.date}. The artist will respond to your request within 2 hours.
              </p>

              <button onClick={onClose} className="btn-primary">
                Done & Return to Site
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
