const path = (section, category, file) => `/images/${section}/${category}/${file}.jpg`;
const libraryImage = (file) => `/images/library/${file}.jpg`;

export const CATEGORY_IMAGES = {
  Music: path('categories', 'music', 'music-category'),
  Dance: path('categories', 'dance', 'dance-category'),
  Art: '/images/categories/art/painter-palette.jpg',
  Photography: path('categories', 'photography', 'photography-category'),
  Cooking: path('categories', 'cooking', 'cooking-category'),
  Handcraft: path('categories', 'handcraft', 'handcraft-category'),
  Beauty: path('categories', 'beauty', 'beauty-category'),
  Fitness: path('categories', 'fitness', 'fitness-category'),
  Other: path('categories', 'other', 'other-category')
};

const categoryTalentImages = {
  Music: {
    Vocalist: 'singer-with-guitar', Instrumentalist: 'acoustic-guitar-performance',
    'Music Service': 'music-studio-production', Composer: 'acoustic-guitar-performance',
    Producer: 'music-studio-production', DJ: 'dj-event-performance',
    'Music Services': 'music-studio-production', 'Music Producer': 'music-studio-production', Band: 'live-guitarist'
  },
  Dance: {
    Classical: 'dance-performance', Folk: 'folk-dance-performance', Contemporary: 'dance-performance',
    'Hip-Hop': 'dance-performance', 'Wedding Choreographer': 'folk-dance-performance',
    'Dance Teacher': 'dance-performance', 'Performance Groups': 'folk-dance-performance',
    'Solo Performer': 'dance-performance', 'Dance Troupe': 'folk-dance-performance',
    Choreographer: 'dance-performance', 'Classical Specialist': 'folk-dance-performance', 'Street / Hip-Hop': 'dance-performance'
  },
  Art: {
    Painter: 'artist-palette-canvas', Illustrator: 'artist-painting-workshop', 'Sketch Artist': 'artist-painting-workshop',
    'Digital Artist': 'artist-painting-workshop', 'Portrait Artist': 'artist-painting-workshop', 'Mural Artist': 'artist-palette-canvas',
    'Muralist & Canvas': 'artist-palette-canvas', 'Digital Illustrator': 'artist-painting-workshop',
    Caricaturist: 'artist-painting-workshop', 'Sculptor & Craft': 'pottery-workshop'
  },
  Photography: {
    Wedding: 'wedding-photography', Portrait: 'photographer-portrait', Fashion: 'photographer-portrait',
    Product: 'event-photographers', Event: 'event-photographers', Travel: 'wedding-photography',
    'Event Photographer': 'event-photographers', 'Portrait Specialist': 'photographer-portrait',
    'Cinematic Videographer': 'event-photography', 'Drone Pilot': 'event-photography'
  },
  Cooking: {
    'Home Chef': 'chef-at-work', Baker: 'chef-kitchen-service', Caterer: 'chef-at-work',
    'Traditional Cuisine': 'chef-kitchen-service', 'Meal Prep': 'chef-at-work',
    'Gourmet Chef': 'chef-at-work', 'Artisanal Baker': 'chef-kitchen-service',
    'Regional Specialist': 'chef-kitchen-service', 'Event Caterer': 'chef-at-work'
  },
  Handcraft: {
    Jewelry: 'handmade-jewelry-display', Pottery: 'pottery-workshop', Crochet: 'handloom-weaving',
    Embroidery: 'handcraft-artist-portrait', 'Handmade Decor': 'pottery-workshop',
    'Terracotta & Pottery': 'pottery-workshop', 'Custom Embroidery': 'handloom-weaving',
    'Handcrafted Jewelry': 'handmade-jewelry-tools', 'Wood & Resin Art': 'pottery-workshop'
  },
  Beauty: {
    'Makeup Artist': 'beauty-makeup-artist', Hairstylist: 'bridal-beauty-portrait',
    'Nail Artist': 'beauty-makeup-artist', 'Bridal Beauty': 'bridal-beauty-portrait',
    'Beauty Consultant': 'beauty-makeup-artist', 'Bridal Makeup Artist': 'bridal-beauty-portrait',
    'Mehendi Designer': 'bridal-beauty-portrait', 'SFX & Creative Stylist': 'beauty-makeup-artist'
  },
  Fitness: {
    'Personal Trainer': 'personal-trainer-session', 'Yoga Instructor': 'yoga-fitness-session',
    'Dance Fitness': 'yoga-fitness-session', 'Strength Coach': 'strength-training-coach',
    'Wellness Coach': 'wellness-coach-portrait', 'Yoga & Wellness Coach': 'yoga-fitness-session',
    'Zumba & Dance Fitness': 'personal-trainer-session'
  },
  Other: {
    'Content Creator': 'creator-portrait', Poet: 'event-performer-portrait', Storyteller: 'event-performer-portrait',
    'Voice Artist': 'event-performer-portrait', 'Event Performer': 'event-performer-portrait',
    'Stand-up Comedian': 'event-performer-portrait', 'Emcee / Anchor': 'event-performer-portrait',
    'Voiceover Artist': 'creator-portrait', 'Magician & Illusionist': 'creator-portrait'
  }
};

export const TALENT_TYPE_IMAGES = Object.fromEntries(
  Object.entries(categoryTalentImages).map(([category, talentTypes]) => [
    category,
    Object.fromEntries(Object.entries(talentTypes).map(([type, file]) => [
      type,
      libraryImage(file)
    ]))
  ])
);

export const ARTIST_PROFILE_IMAGES = {
  'artist-1': '/images/artists/music/artist-1-profile.jpg',
  'artist-2': '/images/artists/music/artist-2-profile.jpg',
  'artist-3': '/images/artists/music/artist-3-profile.jpg',
  'artist-4': '/images/artists/dance/artist-4-profile.jpg',
  'artist-5': '/images/artists/art/artist-5-profile.jpg',
  'artist-6': '/images/artists/photography/artist-6-profile.jpg',
  'artist-7': '/images/artists/cooking/artist-7-profile.jpg',
  'artist-8': '/images/artists/handcraft/artist-8-profile.jpg',
  'artist-9': '/images/artists/beauty/artist-9-profile.jpg',
  'artist-10': '/images/artists/fitness/artist-10-profile.jpg',
  'artist-11': '/images/artists/other/artist-11-profile.jpg',
  'artist-12': '/images/artists/other/artist-12-profile.jpg'
};
