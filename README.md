# ☕ Misyal Café — مقهى مسيال

A bilingual (Arabic / English) landing website for **Misyal Café** — specialty coffee, fresh bakery, and a cozy place to gather.

## ✨ Features

- **Bilingual & RTL-aware** — one-click toggle between English (LTR) and Arabic (RTL); the choice is remembered via `localStorage`.
- **Fully responsive** — works from mobile to desktop, with a slide-down mobile menu.
- **Zero build step** — plain HTML, CSS, and vanilla JavaScript. Just open `index.html`.
- **Sections** — hero, story/about, full menu (hot coffee, cold drinks, bakery), gallery, visit info (address, hours, contact, socials), and footer.
- **Smooth reveal animations** with reduced-motion support for accessibility.
- **Auto-deploys** to GitHub Pages via GitHub Actions.

## 📁 Project structure

```
misyal/
├── index.html          # Page markup + bilingual content (data-en / data-ar attributes)
├── styles.css          # All styling, theme tokens, responsive + RTL rules
├── script.js           # Language toggle, mobile nav, scroll reveal
├── .github/workflows/
│   └── deploy.yml       # GitHub Pages deployment
└── README.md
```

## 🚀 Running locally

No dependencies. Either open `index.html` directly, or serve it:

```bash
# Python
python3 -m http.server 8000

# or Node
npx serve .
```

Then visit <http://localhost:8000>.

## 🌐 Deploying (GitHub Pages)

The included workflow publishes the site automatically on every push to `main`.

To enable it once:

1. Go to **Settings → Pages** in the repository.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. Push to `main` — the site builds and goes live at `https://faresalbar.github.io/misyal/`.

## ✏️ Editing content

- **Text**: every translatable element has `data-en` and `data-ar` attributes in `index.html`. Edit both to keep the two languages in sync.
- **Menu / prices**: update the `.menu-item` blocks in `index.html`. Prices show in SAR (﷼).
- **Colors / theme**: tweak the CSS custom properties at the top of `styles.css` (`:root`).
- **Images**: the current design uses gradient placeholders. Swap them for real photos by setting `background-image` on the `.about-img`, `.gallery-item`, and `.visit-map` elements.

---

_Brewed with love, served with a smile._
