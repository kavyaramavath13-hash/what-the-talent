# WHAT THE TALENT! — MASTER ANTIGRAVITY BUILD PROMPT

Build a complete, polished, responsive website called **What The Talent!**.

This is a local talent discovery and hiring platform. Users should be able to discover local talent, explore categories, choose a talent type, view artists, open an artist profile, chat with them, and book them.

## BRAND

Exact hero copy:
- English tagline: **Got Talent? Get Seen!**
- Main title: **What The Talent!**
- Telugu tagline: **Local Lo Unna Global Avvalanukuntunva?**

Do not change, shorten, or replace these strings.

## VISUAL SYSTEM

Use this palette throughout the website:
- Light Butter background: `#FFF3A6` — dominant page background
- Rust: `#BA3801` — primary headings, selected states, talent blocks, primary CTAs
- Navy: `#4A69B3` — navigation, English tagline, outlines, secondary CTAs, decorative artwork
- Use off-white only as a small supporting neutral when necessary.
- Do not introduce random gradients, neon colors, purple AI gradients, or unrelated palettes.

Typography:
- Use an **Obviously-style bold display font** for the main title, major headings, and Telugu tagline where glyph support permits.
- Use **Trovical Calm Free-style editorial typography** for the English tagline and selected supporting/editorial text.
- If those exact fonts are unavailable, use the closest available display/editorial alternatives and preserve the same visual character. For Telugu, use a bold Telugu display font with similar weight and personality.

## DESIGN DIRECTION

The website should feel like a modern local-talent magazine mixed with a premium creative marketplace:
- editorial
- youthful
- artistic
- playful
- bold
- local/community-oriented
- premium but approachable

Use the supplied wireframe/reference images as visual direction, not as a pixel-for-pixel copy. Preserve the design language: organic hand-drawn shapes, irregular outlines, layered blocks, strong typography, asymmetrical composition, editorial spacing, designed image cards, and navy abstract corner decorations.

Do not make it look like a generic SaaS dashboard, Bootstrap template, ecommerce site, or generic AI landing page.

## GLOBAL NAVIGATION

Desktop navbar:
- Logo on the top-left
- Centered links: Home, About, Explore, Gallery, Talent
- Sign In on the top-right

Mobile:
- Logo left
- Hamburger right
- Open navigation as a polished full-screen/drawer menu

Use a sticky or intelligently persistent navbar where appropriate.

## HOME PAGE

Hero section:
- English tagline in navy: **Got Talent? Get Seen!**
- Huge rust display title: **What The Talent!**
- Bold rust Telugu tagline: **Local Lo Unna Global Avvalanukuntunva?**
- Below the taglines, show square/near-square talent category cards with images.
- Initial categories: Music, Dance, Art, Photography, Cooking, Handcraft.
- Add a clear Explore Talent CTA.
- Add organic navy abstract decorative shapes around the hero edges/corners.
- Do not obstruct the central typography.

Hero category cards must feel like designed editorial blocks rather than generic UI cards.

After hero:
1. Featured/Discover Talent section
2. How It Works: Discover → Connect → Book
3. Short explanation of the platform
4. Featured talent cards
5. Strong CTA to Explore / Join as Talent
6. Footer

## ABOUT PAGE

Explain:
- What What The Talent! is
- What users can do
- Why the platform exists
- How it helps local talent become visible
- How users can discover, connect, chat and book talent

Use large editorial statements and designed information blocks.

Suggested key statement:
**Talent is everywhere. It just needs to be seen.**

Include sections:
- What is What The Talent?
- Why it exists
- What users can do: Discover, Explore, View Profiles, Connect
- Why local talent benefits
- How the platform works
- CTA

## EXPLORE PAGE — MOST IMPORTANT FUNCTIONAL FLOW

The Explore page must use a 3-level discovery system:

**Category → Talent Type → Artist → Profile**

Desktop layout:
- Sticky left category panel
- Dynamic right content panel

Categories:
- Music
- Dance
- Art
- Photography
- Cooking
- Handcraft
- Beauty
- Fitness
- Other

When Music is selected, show talent-type blocks on the right:
- Vocalist
- Instrumentalist
- Music Service
- Composer
- Producer
- DJ
- Add other sensible music talent types if useful

When another category is selected, dynamically show relevant talent types for that category.

Talent-type blocks should be artistic designed blocks with images/icons, rust selected states, navy outlines, subtle hover movement, and strong typography.

When the user clicks a talent type such as Vocalist, replace the right panel with artist profile cards.

## ARTIST CARDS

Each artist card must show:
- artist photo
- name
- talent type
- location
- experience
- number of people who hired them
- View Details button
- Book Now button

Card interactions:
- image zoom on hover
- slight lift
- subtle rotation or offset
- navy outline reveal
- clear focus states

## ARTIST PROFILE PAGE

Two-column desktop layout:
- Large artist image on the left
- Details on the right

Show:
- name
- talent type
- experience
- location
- contact information
- availability
- about/bio
- portfolio
- previous work / selected work
- number of hires

Primary actions:
- **BOOK NOW** — rust filled
- **CHAT NOW** — navy outlined

Below the profile, show related talents/artists.

## BOOKING FLOW

Book Now should open a polished booking interface containing:
- artist
- service
- date
- time
- location
- budget
- message
- Send Booking Request

Use validation and clear success/error feedback.

## CHAT FLOW

Chat Now should open a simple polished conversation UI:
- artist header
- message history
- message composer
- send button

The UI should feel like a real product even if the initial implementation uses mock data/local state.

## GALLERY PAGE

Create an editorial masonry-style gallery rather than a standard grid.

Filters:
- All
- Music
- Dance
- Art
- Photography
- Cooking
- Handcraft

Use varied image sizes, organic spacing, subtle reveal animations, and the same butter/rust/navy system.

## TALENT PAGE

This page is for artists/creators who want to join.

Hero statement:
**YOUR TALENT DESERVES TO BE SEEN.**

Explain benefits:
- Showcase your work
- Get discovered
- Receive bookings
- Connect with people
- Grow visibility

CTA:
**SHOWCASE MY TALENT →**

Include a talent registration form:
- name
- talent category
- talent type
- location
- experience
- about
- portfolio upload area
- Join What The Talent button

## SIGN IN PAGE

Create a minimal branded sign-in page with:
- email
- password
- sign in
- forgot password
- Google/alternate sign-in placeholder
- create profile link

## FOOTER

Include:
- What The Talent!
- Got Talent? Get Seen!
- Home
- About
- Explore
- Gallery
- Talent
- Join
- Contact
- social placeholders
- copyright

## INTERACTIONS AND ANIMATION

Use refined micro-interactions, not excessive animation:
- smooth page transitions
- text reveal in hero
- card lift and image zoom
- subtle organic movement of navy decorative shapes
- animated active navigation state
- dynamic Explore panel transitions
- portfolio/gallery reveal on scroll
- button hover/press states
- reduced-motion support

Animations must never reduce readability or usability.

## RESPONSIVE BEHAVIOR

Desktop:
- full centered navigation
- two-column Explore
- 3–4 artist cards per row depending on width
- two-column artist profile

Tablet:
- responsive grid
- 2 artist cards per row
- narrower category panel

Mobile:
- hamburger navigation
- category panel becomes a dropdown or horizontal selector
- one artist card per row
- profile becomes stacked
- booking/chat interfaces remain easy to use with thumb-friendly controls

Do not simply shrink the desktop layout. Redesign layouts intelligently for mobile.

## ACCESSIBILITY AND QUALITY

- semantic HTML
- keyboard navigation
- visible focus states
- adequate contrast
- alt text for images
- accessible buttons/forms
- responsive typography
- no horizontal overflow
- loading/error/empty states where relevant

## IMPLEMENTATION

Build the site as a real working frontend, not a static screenshot.

Use reusable components for:
- Navbar
- Footer
- TalentCategoryCard
- TalentTypeCard
- ArtistCard
- PortfolioGallery
- BookingModal/Page
- ChatPanel
- SectionHeading
- DecorativeShapes

Use mock data for artists and categories so all interactions can be demonstrated.

The Explore flow must actually work:
1. Select category
2. See relevant talent types
3. Select talent type
4. See artists
5. Select artist
6. Open profile
7. Book or chat

Make the first implementation polished enough to demo immediately.

## IMPORTANT

Do not stop after building only the hero.
Build the complete connected website and all pages described above.
Do not ask for clarification unless a genuinely blocking technical issue occurs. Use sensible mock content where content is not provided.

At the end, verify every navigation link, Explore state, artist profile route/state, booking flow, chat UI, responsive layout, and major interaction.
