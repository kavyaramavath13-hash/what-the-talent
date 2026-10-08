import React, { useState, useEffect, useRef } from 'react';
import { X, Send, Sparkles, Check, CheckCheck, Phone, Video } from 'lucide-react';

export const ChatModal = ({ artist, onClose }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'artist',
      text: `Namaste! I'm ${artist?.name}. Thanks for reaching out on What The Talent! How can I help with your upcoming event?`,
      time: '10:14 AM'
    },
    {
      id: 2,
      sender: 'artist',
      text: `I'm currently taking bookings for ${artist?.talentType} sessions around ${artist?.location}.`,
      time: '10:15 AM'
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  if (!artist) return null;

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: input,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Simulate artist response
    setTimeout(() => {
      setIsTyping(false);
      const responses = [
        `Thanks for the details! I'd love to perform. My standard rate for ${artist.talentType} is ${artist.startingPrice}. Shall I block the date for you?`,
        `Sounds fantastic! I have all my equipment ready. Is your venue acoustics suitable for a live acoustic set?`,
        `Wonderful! You can also click 'Book Now' on my profile to send the formal agreement details directly.`
      ];
      const replyText = responses[Math.floor(Math.random() * responses.length)];

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'artist',
          text: replyText,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    }, 1400);
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
        padding: '1rem'
      }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="editorial-card animate-slide-up"
        style={{
          width: '100%',
          maxWidth: '520px',
          height: '620px',
          backgroundColor: '#FDFBF4',
          display: 'flex',
          flexDirection: 'column',
          margin: 'auto'
        }}
      >
        {/* Header */}
        <div
          style={{
            backgroundColor: '#4A69B3',
            color: '#FFFFFF',
            padding: '1rem 1.25rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '2.5px solid #BA3801'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ position: 'relative' }}>
              <img
                src={artist.image}
                alt={artist.name}
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '2px solid #FFF3A6'
                }}
              />
              <span
                style={{
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  width: '12px',
                  height: '12px',
                  backgroundColor: '#22C55E',
                  borderRadius: '50%',
                  border: '2px solid #4A69B3'
                }}
              />
            </div>

            <div>
              <h3 className="font-display" style={{ fontSize: '1.15rem', textTransform: 'uppercase', lineHeight: '1.1' }}>
                {artist.name}
              </h3>
              <span style={{ fontSize: '0.8rem', color: '#FFF3A6', fontWeight: 600 }}>
                Online • Typically replies in 15 mins
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <button
              onClick={onClose}
              style={{
                backgroundColor: '#FFF3A6',
                color: '#4A69B3',
                border: '2px solid #BA3801',
                borderRadius: '50%',
                width: '34px',
                height: '34px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Message Log */}
        <div
          style={{
            flex: 1,
            padding: '1.25rem',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            backgroundColor: '#FFF3A6',
            backgroundImage: 'radial-gradient(#4A69B3 0.75px, transparent 0.75px)',
            backgroundSize: '16px 16px'
          }}
        >
          {messages.map((msg) => (
            <div
              key={msg.id}
              style={{
                alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                maxWidth: '80%'
              }}
            >
              <div
                style={{
                  backgroundColor: msg.sender === 'user' ? '#BA3801' : '#FDFBF4',
                  color: msg.sender === 'user' ? '#FFFFFF' : '#1C202B',
                  border: `2px solid ${msg.sender === 'user' ? '#BA3801' : '#4A69B3'}`,
                  borderRadius: msg.sender === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                  padding: '0.85rem 1.1rem',
                  boxShadow: msg.sender === 'user' ? '2px 3px 0px #4A69B3' : '2px 3px 0px #BA3801',
                  fontSize: '0.95rem',
                  lineHeight: '1.45'
                }}
              >
                {msg.text}
              </div>
              <span
                style={{
                  fontSize: '0.7rem',
                  color: '#474E61',
                  marginTop: '0.25rem',
                  display: 'block',
                  textAlign: msg.sender === 'user' ? 'right' : 'left',
                  fontWeight: 600
                }}
              >
                {msg.time}
              </span>
            </div>
          ))}

          {isTyping && (
            <div style={{ alignSelf: 'flex-start', backgroundColor: '#FDFBF4', border: '2px solid #4A69B3', borderRadius: '16px', padding: '0.6rem 1rem' }}>
              <span className="font-editorial text-navy" style={{ fontSize: '0.95rem' }}>
                {artist.name} is typing...
              </span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Composer */}
        <form
          onSubmit={handleSend}
          style={{
            padding: '1rem',
            backgroundColor: '#FDFBF4',
            borderTop: '2px solid #4A69B3',
            display: 'flex',
            gap: '0.6rem'
          }}
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`Message ${artist.name}...`}
            style={{
              flex: 1,
              padding: '0.75rem 1rem',
              borderRadius: '25px',
              border: '2px solid #4A69B3',
              backgroundColor: '#FFFFFF',
              fontFamily: 'inherit',
              fontSize: '0.95rem'
            }}
          />
          <button
            type="submit"
            className="btn-primary"
            style={{ borderRadius: '50px', padding: '0.75rem 1.25rem' }}
          >
            <Send size={18} />
          </button>
        </form>
      </div>
    </div>
  );
};
