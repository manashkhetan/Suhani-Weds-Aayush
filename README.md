# Suhani & Aayush | Royal Jaipur Wedding Invitation 🌺

A responsive, high-fidelity Hindu wedding invitation web application inspired by royal Rajasthani aesthetics and cultural traditions.

---

## 📁 Project Architecture & Directory Structure

```
Suhani_Weds_Aayush/
├── index.html                   # Semantic, accessible HTML5 markup
├── README.md                    # Project documentation & customization guide
└── assets/                      # Modular static assets
    ├── css/                     # Scalable stylesheet architecture
    │   ├── variables.css        # Design tokens, color palette & typography variables
    │   ├── typography.css       # Font hierarchies, shlokas & sacred inscriptions
    │   ├── layout.css           # Navigation, hero, container & section layouts
    │   ├── components.css       # Event cards, buttons, countdown units & animations
    │   ├── responsive.css       # Media queries for tablet & mobile devices
    │   └── style.css            # Master stylesheet orchestrator
    ├── js/                      # Modular JavaScript layer
    │   ├── countdown.js         # Real-time event countdown timer module
    │   └── main.js              # Application entry point & lifecycle management
    └── images/                  # Visual assets & illustrations
        ├── ganesh-idol-emblem.png  # Lord Ganesha devotional artwork
        ├── jaipur-wedding-hero.png # Jaipur palace twilight artwork
        └── events/              # Bespoke traditional vector graphics (SVGs)
            ├── haldi.svg        # Haldi Brass Urli with Marigolds
            ├── mehendi.svg      # Henna Mehndi Paisley Motif
            ├── engagement.svg   # Solitaire Diamond Rings in Gold & Sapphire
            ├── sangeet.svg      # Festive Dholak & Ghungroo
            ├── barat-swagat.svg # Decorated Royal Rajasthani Ghodi
            └── wedding.svg      # Sacred Vedic Phera Agni Kund
```

---

## 🎨 Design System & Highlights

- **Theme Palette**: Royal Rajasthani palette featuring Royal Wine (`#3d1122`), Rose (`#a8576e`), Warm Gold (`#ce9d4a`), Soft Sand (`#f3e2c4`), and Warm Ivory (`#fff9ee`).
- **Typography**: *Cormorant Garamond* (Sacred Sanskrit text, display headings, monogram) paired with *DM Sans* (body & interface readability) and *Gotu* (Devanagari Sanskrit).
- **Features**:
  - **Devotional Inscription**: Sacred Ganesha idol with invocation (*"ॐ श्री गणेशाय नमः"*) and shloka (*"वक्रतुण्ड महाकाय..."*) with spacious royal layout.
  - **Interactive Festivities Showcase**: 6-event celebration tabs (Haldi, Mehendi, Engagement, Sangeet, Barat Swagat, The Wedding) with bespoke traditional vector artwork, color-coded themes, specific venues, timings, and direct Google Maps links.
  - **Unified Sacred Invitation & Live Countdown**: Dynamic JavaScript countdown timer with zero-padded unit counters and gold gradient indicators.
  - **Sticky Frosted Glass Navbar & Scrollspy**: Dynamic sticky header with active section tracking on scroll.
  - **Responsive Design**: Fluid typography with CSS `clamp()`, adaptable layouts across mobile (320px) to 4K displays.

---

## 🚀 Getting Started

### Local Preview
Open `index.html` directly in any modern web browser or serve via any static file server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (npx)
npx serve .
```

---

## ⚙️ Customization Guide

1. **Venue Location**: Update the Google Maps URLs in `index.html` within the celebration panels with your exact Google Maps pin link.
2. **Countdown Target**: Modify the target timestamp parameter in `assets/js/main.js` (e.g. `2026-12-12T16:00:00+05:30`).
3. **WhatsApp RSVP Integration**: Connect direct WhatsApp messaging by adding a click handler to a CTA button directing to `https://wa.me/<YOUR_NUMBER>?text=...`.
4. **Photo Gallery**: Place event photos into `assets/images/` and add a gallery section using CSS Grid.

---

## 📄 License
Created for Suhani & Aayush's wedding celebration.
