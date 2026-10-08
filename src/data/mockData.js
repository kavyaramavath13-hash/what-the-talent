import { CATEGORY_IMAGES, ARTIST_PROFILE_IMAGES } from './imageLibrary.js';

export const CATEGORIES = [
  {
    id: 'Music',
    name: 'Music',
    tagline: 'Singers, Instrumentalists & Producers',
    description: 'Discover soulful vocalists, classical musicians, indie bands, electronic producers, and live DJs for events or studio collabs.',
    image: CATEGORY_IMAGES.Music,
    count: '140+ Artists',
    talentTypes: ['Vocalist', 'Instrumentalist', 'Music Service', 'Composer', 'Producer', 'DJ']
  },
  {
    id: 'Dance',
    name: 'Dance',
    tagline: 'Performers & Choreographers',
    description: 'Expressive Kuchipudi, Bharatanatyam, Hip-Hop crews, Salsa dancers, and energetic wedding choreographers.',
    image: CATEGORY_IMAGES.Dance,
    count: '95+ Performers',
    talentTypes: ['Solo Performer', 'Dance Troupe', 'Choreographer', 'Classical Specialist', 'Street / Hip-Hop', 'Classical', 'Folk', 'Contemporary', 'Hip-Hop', 'Wedding Choreographer', 'Dance Teacher', 'Performance Groups']
  },
  {
    id: 'Art',
    name: 'Art',
    tagline: 'Painters, Illustrators & Craftsmen',
    description: 'Custom murals, digital character art, live caricatures for corporate gigs, fine oil painting, and handmade decor.',
    image: CATEGORY_IMAGES.Art,
    count: '80+ Creators',
    talentTypes: ['Muralist & Canvas', 'Digital Illustrator', 'Caricaturist', 'Sculptor & Craft', 'Painter', 'Illustrator', 'Sketch Artist', 'Digital Artist', 'Portrait Artist', 'Mural Artist']
  },
  {
    id: 'Photography',
    name: 'Photography',
    tagline: 'Lenses, Cinematography & Drones',
    description: 'Portrait photography, high-energy event coverage, aesthetic reels production, and 4K aerial drone videography.',
    image: CATEGORY_IMAGES.Photography,
    count: '110+ Lensmen',
    talentTypes: ['Event Photographer', 'Portrait Specialist', 'Cinematic Videographer', 'Drone Pilot', 'Wedding', 'Portrait', 'Fashion', 'Product', 'Event', 'Travel']
  },
  {
    id: 'Cooking',
    name: 'Cooking',
    tagline: 'Master Chefs & Artisanal Bakers',
    description: 'Private dining chefs, Telengana & Rayalaseema culinary experts, artisanal dessert designers, and mixologists.',
    image: CATEGORY_IMAGES.Cooking,
    count: '65+ Chefs',
    talentTypes: ['Gourmet Chef', 'Artisanal Baker', 'Regional Specialist', 'Event Caterer', 'Home Chef', 'Baker', 'Caterer', 'Traditional Cuisine', 'Meal Prep']
  },
  {
    id: 'Handcraft',
    name: 'Handcraft',
    tagline: 'Handloom, Pottery & Fine Crafts',
    description: 'Pochampally handloom creators, terracotta potters, custom brass artisans, and contemporary resin craft designers.',
    image: CATEGORY_IMAGES.Handcraft,
    count: '50+ Artisans',
    talentTypes: ['Terracotta & Pottery', 'Custom Embroidery', 'Handcrafted Jewelry', 'Wood & Resin Art', 'Jewelry', 'Pottery', 'Crochet', 'Embroidery', 'Handmade Decor']
  },
  {
    id: 'Beauty',
    name: 'Beauty',
    tagline: 'Makeup Artists & Hair Stylists',
    description: 'High-fashion HD bridal makeup, intricate bridal Mehendi artwork, SFX makeup for video shoots, and personal styling.',
    image: CATEGORY_IMAGES.Beauty,
    count: '75+ Stylists',
    talentTypes: ['Bridal Makeup Artist', 'Mehendi Designer', 'SFX & Creative Stylist', 'Makeup Artist', 'Hairstylist', 'Nail Artist', 'Bridal Beauty', 'Beauty Consultant']
  },
  {
    id: 'Fitness',
    name: 'Fitness',
    tagline: 'Yoga, Calisthenics & Trainers',
    description: 'Holistic Hatha Yoga gurus, high-intensity functional fitness coaches, Kalaripayattu trainers, and dance fitness leads.',
    image: CATEGORY_IMAGES.Fitness,
    count: '60+ Coaches',
    talentTypes: ['Yoga & Wellness Coach', 'Zumba & Dance Fitness', 'Personal Trainer', 'Yoga Instructor', 'Dance Fitness', 'Strength Coach', 'Wellness Coach']
  },
  {
    id: 'Other',
    name: 'Other',
    tagline: 'Standup, Anchors & Unique Acts',
    description: 'Bilingual Telugu/English standup comedians, energetic event anchors, voiceover talent, and live illusionists.',
    image: CATEGORY_IMAGES.Other,
    count: '45+ Performers',
    talentTypes: ['Stand-up Comedian', 'Emcee / Anchor', 'Voiceover Artist', 'Magician & Illusionist', 'Content Creator', 'Poet', 'Storyteller', 'Voice Artist', 'Event Performer']
  }
];

export const ARTISTS = [
  {
    id: 'artist-1',
    name: 'Kavya Sree',
    category: 'Music',
    talentType: 'Vocalist',
    location: 'Jubilee Hills, Hyderabad',
    experience: '6+ Years',
    hiredCount: 54,
    rating: 4.9,
    reviewsCount: 38,
    startingPrice: '₹8,500',
    priceUnit: 'per performance',
    image: '/references/music-vocalist.jpg',
    coverImage: '/images/library/concert-stage-performance.jpg',
    availability: 'Available on Weekends & Private Bookings',
    bio: 'Kavya Sree is an accomplished Carnatic-fusion and Telugu acoustic vocalist with over 200 live shows across South India. Known for blending traditional ragas with modern acoustic instrumentation, she brings emotional depth to corporate events, weddings, and intimate soirees.',
    skills: ['Carnatic Fusion', 'Telugu Film Classics', 'Indie Acoustic', 'Unplugged Live', 'Harmonium'],
    contact: {
      phone: '+91 98765 43210',
      email: 'kavya.music@whatthetalent.com',
      instagram: '@kavyasree_vox',
      youtube: 'youtube.com/kavyasreemusic'
    },
    portfolio: [
      {
        id: 'p1',
        title: 'Raaga Fusion Unplugged at Shilparamam',
        type: 'image',
        url: '/images/library/vocalist-live-performance.jpg',
        description: 'Live performance with acoustic ensemble blending Kalyani Raga with modern guitar chords.'
      },
      {
        id: 'p2',
        title: 'Studio Session: Hyderabad Tales Single',
        type: 'image',
        url: '/images/library/music-studio-production.jpg',
        description: 'Recording vocal takes for original indie single.'
      },
      {
        id: 'p3',
        title: 'Sunset Acoustic Live - Hitec City',
        type: 'image',
        url: '/images/library/acoustic-guitar-performance.jpg',
        description: 'Private rooftop gathering performance.'
      }
    ],
    pastClients: ['Hyatt Hyderabad', 'Tech Mahindra Cultural Night', 'T-Hub Annual Gala', 'Private Weddings']
  },
  {
    id: 'artist-2',
    name: 'Siddharth Rao',
    category: 'Music',
    talentType: 'Instrumentalist',
    location: 'Banjara Hills, Hyderabad',
    experience: '9 Years',
    hiredCount: 82,
    rating: 5.0,
    reviewsCount: 61,
    startingPrice: '₹12,000',
    priceUnit: 'per event',
    image: '/images/library/instrumentalist-portrait.jpg',
    coverImage: '/images/library/acoustic-guitar-performance.jpg',
    availability: 'Available full-time for gigs & sessions',
    bio: 'Siddharth is a master Sitarist and Electric Violinist. He fuses ancient Indian classical melodies with ambient electronic soundscapes, creating a captivating atmosphere for high-end luxury events, gallery openings, and stage shows.',
    skills: ['Sitar', 'Electric Violin', 'Ambient Soundscapes', 'Fusion Ensemble', 'Improvisation'],
    contact: {
      phone: '+91 98765 11223',
      email: 'siddharth.sitar@whatthetalent.com',
      instagram: '@sidrao_strings',
      youtube: 'youtube.com/sidraomusic'
    },
    portfolio: [
      {
        id: 'p20',
        title: 'Electric Violin Solo at Taj Falaknuma',
        type: 'image',
        url: '/images/library/concert-stage-performance.jpg',
        description: 'High-energy electric violin opening set for international delegate meet.'
      },
      {
        id: 'p21',
        title: 'Classic Sitar Morning Raga',
        type: 'image',
        url: '/images/library/acoustic-guitar-performance.jpg',
        description: 'Traditional morning meditation raga session.'
      }
    ],
    pastClients: ['Taj Falaknuma Palace', 'Park Hyatt', 'GVK One Events', 'Sangeet Celebrations']
  },
  {
    id: 'artist-3',
    name: 'DJ Vikram (V-Beat)',
    category: 'Music',
    talentType: 'DJ',
    location: 'Gachibowli, Hyderabad',
    experience: '7 Years',
    hiredCount: 115,
    rating: 4.8,
    reviewsCount: 94,
    startingPrice: '₹15,000',
    priceUnit: 'per night',
    image: '/images/library/dj-artist-portrait.jpg',
    coverImage: '/images/library/dj-event-performance.jpg',
    availability: 'Open for Club & Private Party Bookings',
    bio: 'Vikram brings unmatched energy with Tollywood remixes, Afrobeat fusion, and Deep House tracks. He curates customized playlists that keep dance floors packed till late night.',
    skills: ['Tollywood Club Mix', 'Afro-House', 'EDM & Commercial', 'Live Sound Setup', 'Crowd Hype'],
    contact: {
      phone: '+91 99887 76655',
      email: 'djvikram@whatthetalent.com',
      instagram: '@djvikram_vbeat',
      youtube: 'youtube.com/vbeatmixes'
    },
    portfolio: [
      {
        id: 'p30',
        title: 'Massive Sangeet DJ Night',
        type: 'image',
        url: '/images/library/dj-event-performance.jpg',
        description: 'Packed floor performance with custom light show sync.'
      }
    ],
    pastClients: ['Prism Club', 'Fat Pigeon', 'Hard Rock Cafe', 'Private Wedding Receptions']
  },
  {
    id: 'artist-4',
    name: 'Ananya & Troupe',
    category: 'Dance',
    talentType: 'Dance Troupe',
    location: 'Madhapur, Hyderabad',
    experience: '8 Years',
    hiredCount: 67,
    rating: 4.9,
    reviewsCount: 45,
    startingPrice: '₹25,000',
    priceUnit: 'per routine',
    image: '/images/library/folk-dance-performance.jpg',
    coverImage: '/images/library/dance-performance.jpg',
    availability: 'Bookings open 2 weeks in advance',
    bio: 'Ananya leading an 8-member troupe specializing in explosive cinematic Tollywood dance productions, fusion Kuchipudi-Contemporary acts, and corporate flashmobs.',
    skills: ['Tollywood Choreography', 'Kuchipudi Fusion', 'LED Prop Dance', 'Flashmobs', 'Stage Formations'],
    contact: {
      phone: '+91 91234 56789',
      email: 'ananya.dance@whatthetalent.com',
      instagram: '@ananya_dancetroupe',
      youtube: 'youtube.com/ananyadancetroupe'
    },
    portfolio: [
      {
        id: 'p40',
        title: 'Grand Telugu Film Medley Performance',
        type: 'image',
        url: '/images/library/dance-performance.jpg',
        description: 'Synchronized group act with traditional costumes and modern props.'
      }
    ],
    pastClients: ['GMR Convention', 'Novotel Airport', 'Regional Award Ceremonies']
  },
  {
    id: 'artist-5',
    name: 'Rohit Kulkarni',
    category: 'Art',
    talentType: 'Muralist & Canvas',
    location: 'Secunderabad',
    experience: '5 Years',
    hiredCount: 39,
    rating: 5.0,
    reviewsCount: 29,
    startingPrice: '₹18,000',
    priceUnit: 'per project',
    image: '/images/library/dj-artist-portrait.jpg',
    coverImage: '/images/categories/art/painter-palette.jpg',
    availability: 'Custom orders & wall projects open',
    bio: 'Rohit transforms ordinary walls into vibrant cultural narratives. From cafe interiors to large-scale street art murals, his work blends Telangana folk motifs with modern graffiti artistry.',
    skills: ['Street Art Murals', 'Cafe Interior Art', 'Acrylic on Canvas', 'Cheriyal Motif Fusion', '3D Wall Textures'],
    contact: {
      phone: '+91 97654 32109',
      email: 'rohit.art@whatthetalent.com',
      instagram: '@rohit_murals',
      youtube: 'youtube.com/rohitartwall'
    },
    portfolio: [
      {
        id: 'p50',
        title: 'Jubilee Hills Cafe Wall Mural',
        type: 'image',
        url: '/images/categories/art/painter-palette.jpg',
        description: '20ft x 10ft hand-painted mural featuring local coffee culture.'
      }
    ],
    pastClients: ['Roast CCX Cafe', 'Olive Bistro', 'Mindspace Tech Park']
  },
  {
    id: 'artist-6',
    name: 'Tarun & Sneha Lenswork',
    category: 'Photography',
    talentType: 'Event Photographer',
    location: 'Kondapur, Hyderabad',
    experience: '7 Years',
    hiredCount: 92,
    rating: 4.9,
    reviewsCount: 78,
    startingPrice: '₹20,000',
    priceUnit: 'per day shoot',
    image: '/images/library/photographer-portrait.jpg',
    coverImage: '/images/library/event-photography.jpg',
    availability: 'Available for travel across Telangana & AP',
    bio: 'Dynamic duo specializing in candid wedding photography, cinematic highlight films, and high-fashion portraiture. We capture raw, authentic emotional moments with editorial grading.',
    skills: ['Candid Wedding', '4K Cinematic Reels', 'Drone Aerials', 'Color Grading', 'Lighting Design'],
    contact: {
      phone: '+91 94400 11223',
      email: 'tarunsneha@whatthetalent.com',
      instagram: '@lenswork_ts',
      youtube: 'youtube.com/lensworkts'
    },
    portfolio: [
      {
        id: 'p60',
        title: 'Royal Destination Wedding at Ramoji',
        type: 'image',
        url: '/images/library/event-photography.jpg',
        description: 'Editorial bride portrait captured during sunset golden hour.'
      }
    ],
    pastClients: ['Ramoji Film City Weddings', 'N-Convention Events', 'Trident Hyderabad']
  },
  {
    id: 'artist-7',
    name: 'Chef Chef Lakshmi Narayana',
    category: 'Cooking',
    talentType: 'Gourmet Chef',
    location: 'Banjara Hills, Hyderabad',
    experience: '12 Years',
    hiredCount: 43,
    rating: 5.0,
    reviewsCount: 36,
    startingPrice: '₹14,000',
    priceUnit: 'per dining experience',
    image: '/images/library/chef-portrait.jpg',
    coverImage: '/images/library/chef-kitchen-service.jpg',
    availability: 'Private dinners & masterclasses on request',
    bio: 'Former luxury hotel chef offering bespoke private dining experiences. Specializes in elevated Telengana regional thalis, modern deconstructed Hyderabadi biryani, and artisanal woodfired flatbreads.',
    skills: ['Heritage Hyderabadi', 'Modern Telengana Fusion', 'Plating Aesthetics', 'Live Charcoal Grill', 'Sommelier Pairing'],
    contact: {
      phone: '+91 98850 99887',
      email: 'cheflakshmi@whatthetalent.com',
      instagram: '@cheflakshminarayana',
      youtube: 'youtube.com/lakshmicooking'
    },
    portfolio: [
      {
        id: 'p70',
        title: '7-Course Telangana Heritage Dinner',
        type: 'image',
        url: '/images/library/chef-kitchen-service.jpg',
        description: 'Plated deconstructed Zafrani Biryani with silver leaf and smoked mirchi ka salan.'
      }
    ],
    pastClients: ['Private Luxury Residences', 'HNI Private Gatherings', 'Diplomatic Dinners']
  },
  {
    id: 'artist-8',
    name: 'Pranavi Pochampally Handlooms',
    category: 'Handcraft',
    talentType: 'Custom Embroidery',
    location: 'Pochampally / Hyderabad',
    experience: '15 Years',
    hiredCount: 71,
    rating: 4.9,
    reviewsCount: 50,
    startingPrice: '₹5,000',
    priceUnit: 'per custom garment',
    image: '/images/library/handcraft-artist-portrait.jpg',
    coverImage: '/images/library/handloom-weaving.jpg',
    availability: 'Custom weave orders open for delivery',
    bio: 'National Award-winning artisan family crafting authentic Ikat geometric weaves, hand-embroidered blouses, and contemporary sustainable home textiles directly from master weavers.',
    skills: ['Pochampally Ikat', 'Zardosi & Maggam Work', 'Natural Dyes', 'Custom Sari Weaving', 'Sustainable Fashion'],
    contact: {
      phone: '+91 94900 33445',
      email: 'pranavi.ikat@whatthetalent.com',
      instagram: '@pranavi_pochampally',
      youtube: 'youtube.com/pochampallycraft'
    },
    portfolio: [
      {
        id: 'p80',
        title: 'Custom Silk Ikat Bridal Ensemble',
        type: 'image',
        url: '/images/library/handloom-weaving.jpg',
        description: 'Handcrafted double ikat silk weave with gold zari work.'
      }
    ],
    pastClients: ['Crafts Council of Telangana', 'Weavers Guild', 'Fashion Designers Collective']
  },
  {
    id: 'artist-9',
    name: 'Suhana Makeovers',
    category: 'Beauty',
    talentType: 'Bridal Makeup Artist',
    location: 'Hitec City, Hyderabad',
    experience: '6 Years',
    hiredCount: 108,
    rating: 5.0,
    reviewsCount: 88,
    startingPrice: '₹16,000',
    priceUnit: 'per makeover session',
    image: '/images/library/bridal-beauty-portrait.jpg',
    coverImage: '/images/library/beauty-makeup-artist.jpg',
    availability: 'Booking wedding seasons 2026-27',
    bio: 'Suhana creates effortless, glowing bridal looks with airbrush technology and skin-first techniques. Specializing in South Indian traditional bridal styling and reception glamour.',
    skills: ['Airbrush Makeup', 'Glass Skin Finish', 'South Indian Bridal Styling', 'Hair Sculpting', 'Draping Master'],
    contact: {
      phone: '+91 90001 22334',
      email: 'suhana.makeover@whatthetalent.com',
      instagram: '@suhanamakeovers_official',
      youtube: 'youtube.com/suhanabeauty'
    },
    portfolio: [
      {
        id: 'p90',
        title: 'Traditional Telugu Bride Transformation',
        type: 'image',
        url: '/images/library/beauty-makeup-artist.jpg',
        description: 'Dewy finish with classic red lip and fresh jasmine flower hair arrangement.'
      }
    ],
    pastClients: ['Hyderabad Bridal Week', 'Celeb Sangeet Glam', 'Bride & Groom Magazine']
  },
  {
    id: 'artist-10',
    name: 'Yogacharya Master Raghava',
    category: 'Fitness',
    talentType: 'Yoga & Wellness Coach',
    location: 'Financial District, Hyderabad',
    experience: '10 Years',
    hiredCount: 62,
    rating: 4.9,
    reviewsCount: 44,
    startingPrice: '₹2,500',
    priceUnit: 'per session',
    image: '/images/library/wellness-coach-portrait.jpg',
    coverImage: '/images/library/yoga-fitness-session.jpg',
    availability: 'Morning 6 AM - 10 AM & Evening sessions',
    bio: 'Certified Ashtanga and Hatha Yoga guru helping corporate professionals, athletes, and individuals reduce stress, build core flexibility, and achieve mindfulness.',
    skills: ['Ashtanga Vinyasa', 'Pranayama & Breathwork', 'Sound Healing', 'Corporate Wellness Workshops', 'Postural Alignment'],
    contact: {
      phone: '+91 91100 88776',
      email: 'raghava.yoga@whatthetalent.com',
      instagram: '@raghavayoga_life',
      youtube: 'youtube.com/raghavayoga'
    },
    portfolio: [
      {
        id: 'p100',
        title: 'Sunrise Sound Healing & Vinyasa Flow',
        type: 'image',
        url: '/images/library/yoga-fitness-session.jpg',
        description: 'Outdoor park session with Tibetan singing bowl sound bath.'
      }
    ],
    pastClients: ['Microsoft India Campus', 'Amazon Development Center', 'Oakridge International']
  },
  {
    id: 'artist-11',
    name: 'Karthik Comedy (K-Laughs)',
    category: 'Other',
    talentType: 'Stand-up Comedian',
    location: 'Begumpet, Hyderabad',
    experience: '4 Years',
    hiredCount: 51,
    rating: 4.8,
    reviewsCount: 39,
    startingPrice: '₹10,000',
    priceUnit: 'per 45-min spot',
    image: '/images/library/event-performer-portrait.jpg',
    coverImage: '/images/library/dj-event-performance.jpg',
    availability: 'Available for corporate shows & college fests',
    bio: 'Bilingual comedian known for hilarious Hyderabadi dialect observational comedy, tech-life humor, and relatable South Indian family anecdotes.',
    skills: ['Telugu Stand-up', 'Hyderabadi Hindi-English Roast', 'Corporate Hosting', 'Improv Crowdworx'],
    contact: {
      phone: '+91 98888 77766',
      email: 'karthik.comedy@whatthetalent.com',
      instagram: '@karthik_klaughs',
      youtube: 'youtube.com/klaughs'
    },
    portfolio: [
      {
        id: 'p110',
        title: 'Sold Out Solo Show at Heart Cup Cafe',
        type: 'image',
        url: '/images/library/dj-event-performance.jpg',
        description: 'Full house crowds laughing to Hyderabadi IT sector jokes.'
      }
    ],
    pastClients: ['The Habitat', 'Heart Cup Cafe', 'Infosys Cultural Fest']
  },
  {
    id: 'artist-12',
    name: 'Aravind Producer',
    category: 'Music',
    talentType: 'Producer',
    location: 'Madhapur, Hyderabad',
    experience: '8 Years',
    hiredCount: 76,
    rating: 4.9,
    reviewsCount: 53,
    startingPrice: '₹20,000',
    priceUnit: 'per track production',
    image: '/images/library/creator-portrait.jpg',
    coverImage: '/images/library/music-studio-production.jpg',
    availability: 'Studio time open for indie & commercial tracks',
    bio: 'Music producer behind several viral indie hits and Telugu OTT soundtrack scores. Expert in Logic Pro X, analog mixing, beatmaking, and vocal arrangement.',
    skills: ['Logic Pro X', 'Beat Production', 'Mixing & Mastering', 'Vocal Tuning', 'Jingle Composition'],
    contact: {
      phone: '+91 97000 44556',
      email: 'aravind.beats@whatthetalent.com',
      instagram: '@aravind_producer',
      youtube: 'youtube.com/aravindbeats'
    },
    portfolio: [
      {
        id: 'p120',
        title: 'Indie Pop Album Mastering',
        type: 'image',
        url: '/images/library/music-studio-production.jpg',
        description: 'High quality analog outboard gear setup in Madhapur studio.'
      }
    ],
    pastClients: ['Aha OTT Originals', 'Aditya Music Indie', 'Local Film Scores']
  }
];

ARTISTS.forEach((artist) => {
  artist.image = ARTIST_PROFILE_IMAGES[artist.id] || artist.image;
});

export const GALLERY_ITEMS = [
  {
    id: 'g1',
    title: 'Carnatic Fusion Sunset Jam',
    artistName: 'Kavya Sree',
    category: 'Music',
    size: 'tall',
    image: '/images/library/vocalist-live-performance.jpg',
    likes: 342,
    location: 'Shilparamam, Hyderabad'
  },
  {
    id: 'g2',
    title: 'Pochampally Ikat Master Weave',
    artistName: 'Pranavi Pochampally',
    category: 'Handcraft',
    size: 'wide',
    image: '/images/library/handloom-weaving.jpg',
    likes: 489,
    location: 'Pochampally Weavers Village'
  },
  {
    id: 'g3',
    title: 'A Painter’s Palette',
    artistName: 'Local Art Community',
    category: 'Art',
    size: 'square',
    image: '/images/categories/art/painter-palette.jpg',
    likes: 612,
    location: 'Jubilee Hills'
  },
  {
    id: 'g4',
    title: 'Golden Hour Bridal Glow',
    artistName: 'Suhana Makeovers',
    category: 'Beauty',
    size: 'tall',
    image: '/images/library/beauty-makeup-artist.jpg',
    likes: 520,
    location: 'Hitec City'
  },
  {
    id: 'g5',
    title: 'Sitar & Electric Violin Harmony',
    artistName: 'Siddharth Rao',
    category: 'Music',
    size: 'square',
    image: '/images/library/concert-stage-performance.jpg',
    likes: 298,
    location: 'Taj Falaknuma Palace'
  },
  {
    id: 'g6',
    title: 'Deconstructed Zafrani Biryani Platter',
    artistName: 'Chef Lakshmi Narayana',
    category: 'Cooking',
    size: 'wide',
    image: '/images/library/chef-kitchen-service.jpg',
    likes: 741,
    location: 'Banjara Hills'
  },
  {
    id: 'g7',
    title: 'Telugu Cinematic Dance Formations',
    artistName: 'Ananya & Troupe',
    category: 'Dance',
    size: 'wide',
    image: '/images/library/dance-performance.jpg',
    likes: 830,
    location: 'GMR Arena'
  },
  {
    id: 'g8',
    title: 'Sunrise Asana on Hussain Sagar Deck',
    artistName: 'Master Raghava',
    category: 'Fitness',
    size: 'tall',
    image: '/images/library/yoga-fitness-session.jpg',
    likes: 415,
    location: 'Hussain Sagar'
  },
  {
    id: 'g9',
    title: 'Monsoon Candid Wedding Drone Capture',
    artistName: 'Tarun & Sneha Lenswork',
    category: 'Photography',
    size: 'square',
    image: '/images/library/event-photography.jpg',
    likes: 673,
    location: 'Ramoji Film City'
  },
  {
    id: 'g10',
    title: 'Stories from the Local Stage',
    artistName: 'Hyderabad Creator Community',
    category: 'Other',
    size: 'wide',
    image: '/images/gallery/g10-event-performer-portrait.jpg',
    likes: 387,
    location: 'Hyderabad'
  }
];

const GALLERY_IMAGE_FILES = {
  g1: 'g1-singer-with-guitar', g2: 'g2-handloom-weaving', g3: 'g3-painter-palette',
  g4: 'g4-bridal-beauty-portrait', g5: 'g5-concert-stage-performance', g6: 'g6-chef-at-work',
  g7: 'g7-folk-dance-performance', g8: 'g8-yoga-fitness-session', g9: 'g9-event-photography',
  g10: 'g10-event-performer-portrait'
};
GALLERY_ITEMS.forEach((item) => {
  item.image = `/images/gallery/${GALLERY_IMAGE_FILES[item.id]}.jpg`;
});
