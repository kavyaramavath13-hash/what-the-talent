import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ExplorePage } from './pages/ExplorePage';
import { ArtistProfilePage } from './pages/ArtistProfilePage';
import { GalleryPage } from './pages/GalleryPage';
import { TalentPage } from './pages/TalentPage';
import { SignInPage } from './pages/SignInPage';
import { BookingModal } from './components/BookingModal';
import { ChatModal } from './components/ChatModal';
import { ARTISTS } from './data/mockData';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [selectedCategoryId, setSelectedCategoryId] = useState('Music');
  const [selectedArtist, setSelectedArtist] = useState(ARTISTS[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [bookingArtist, setBookingArtist] = useState(null);
  const [chatArtist, setChatArtist] = useState(null);

  const handleOpenBooking = (artist) => {
    setBookingArtist(artist);
  };

  const handleOpenChat = (artist) => {
    setChatArtist(artist);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#FFF3A6' }}>
      {/* Global Navigation Header */}
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      {/* Main Content Area */}
      <main style={{ flex: 1 }}>
        {activePage === 'home' && (
          <HomePage
            setActivePage={setActivePage}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            onCategorySelect={(catId) => {
              setSelectedCategoryId(catId);
              setSearchQuery('');
            }}
            onArtistSelect={(artist) => setSelectedArtist(artist)}
            onBookNow={handleOpenBooking}
            onChatNow={handleOpenChat}
          />
        )}

        {activePage === 'about' && (
          <AboutPage setActivePage={setActivePage} />
        )}

        {activePage === 'explore' && (
          <ExplorePage
            selectedCategoryId={selectedCategoryId}
            setSelectedCategoryId={setSelectedCategoryId}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            onArtistSelect={(artist) => setSelectedArtist(artist)}
            setActivePage={setActivePage}
            onBookNow={handleOpenBooking}
            onChatNow={handleOpenChat}
          />
        )}

        {activePage === 'profile' && (
          <ArtistProfilePage
            artist={selectedArtist}
            setActivePage={setActivePage}
            onArtistSelect={(artist) => setSelectedArtist(artist)}
            onBookNow={handleOpenBooking}
            onChatNow={handleOpenChat}
          />
        )}

        {activePage === 'gallery' && (
          <GalleryPage
            setActivePage={setActivePage}
            onArtistSelect={(artist) => setSelectedArtist(artist)}
          />
        )}

        {activePage === 'talent' && (
          <TalentPage />
        )}

        {activePage === 'signin' && (
          <SignInPage setActivePage={setActivePage} />
        )}
      </main>

      {/* Booking Flow Modal */}
      {bookingArtist && (
        <BookingModal
          artist={bookingArtist}
          onClose={() => setBookingArtist(null)}
        />
      )}

      {/* Chat Flow Modal */}
      {chatArtist && (
        <ChatModal
          artist={chatArtist}
          onClose={() => setChatArtist(null)}
        />
      )}

      {/* Global Footer */}
      <Footer setActivePage={setActivePage} />
    </div>
  );
}
