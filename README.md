<div align="center">

# YS — Personal Portfolio
### yannicksalm.ch

*Crafted with intention. Built for the web.*

---

[![Astro](https://img.shields.io/badge/Astro-4.x-FF5D01?style=flat-square&logo=astro&logoColor=white)](https://astro.build)
[![License](https://img.shields.io/badge/License-MIT-c8b483?style=flat-square)](LICENSE)
[![Live](https://img.shields.io/badge/Live-yannicksalm.ch-1c2e0f?style=flat-square)](https://yannicksalm.ch)

</div>

---

## About

Personal portfolio of **Yannick Salm** — IT apprentice (Informatiker EFZ, Plattformentwicklung) at SVA Aargau, Switzerland. This site presents my work as a web creator across UI/UX design, web development, and system engineering.

The design follows a deliberate **luxury aesthetic**: deep forest greens, champagne gold accents, and editorial typography — far from the generic. Every detail is intentional.

---

## Stack

| Layer | Technology |
|---|---|
| Framework | [Astro 4](https://astro.build) |
| Styling | CSS Custom Properties, dark/light theming |
| Typography | Cormorant Garamond (300 / 400) |
| Forms | [Formspree](https://formspree.io) |
| Deployment | GitHub Pages / Vercel |

---

## Pages

```
/                   → Home & introduction
/about              → Career timeline & background
/projects           → Project overview
  /home-server      → Proxmox home server setup
  /note             → Note web app (note.yannicksalm.ch)
  /this-or-that     → Quiz app (thisorthat-phi.vercel.app)
  /ys-workout       → Workout app concept & wireframes
  /website-frauenverein-sarmenstorf → Client project
/services           → Service overview
  /websites         → Website creation
  /mail-cloud       → Mail & Microsoft 365
/contact            → Contact form
/impressum          → Legal notice
/datenschutz        → Privacy policy
```

---

## Design System

```css
/* Base colors */
--color-bg:       #1D2E28   /* Deep forest green */
--color-accent:   #738A6E  /* Champagne gold    */
--color-accent-h: #E6EFE3  /* Gold hover state  */

/* Typography */
font-family: 'Cormorant Garamond', serif;
font-weight: 300 | 400;

/* Utilities */
.eyebrow   /* Small uppercase gold label */
```

True color inversion between dark and light themes via CSS custom properties. Theme preference is persisted via `localStorage` with a no-flash script in `<head>`.

---

## Getting Started

```bash
# Clone
git clone git@github.com:homepagesya1/ys-homepage.git
cd ys-homepage

# Install dependencies
npm install

# Dev server
npm run dev

# Production build
npm run build
```

---

## Contact

| Platform | Link |
|---|---|
| GitHub | [@Sky-Walker-xlsr](https://github.com/Sky-Walker-xlsr) |
| LinkedIn | [yannick-salm-057945361](https://linkedin.com/in/yannick-salm-057945361) |
| Instagram | [@sky_gogggles](https://instagram.com/sky_gogggles) |
| Web | [yannicksalm.ch](https://yannicksalm.ch) |

---

<div align="center">
  <sub>© 2025 Yannick Salm — built with care, not a template.</sub>
</div>