# ☕ مسيال · Misyaal — Specialty Coffee (Taif)

Bilingual (Arabic / English) website for **Misyaal Specialty Coffee** in Al Faisaliyah, Taif — restored faithfully from the original Claude Design source.

## Pages

- **`index.html`** — Home: hero, info strip, "وصل حديثًا / Just landed", opening hours (7 days), branches (Al Faisaliyah + Drive-thru) with map, footer.
- **`menu.html`** — Full menu: Hot / Cold / Drip drinks, Desserts, Breakfast — with prices (SAR), descriptions, size options, "most ordered" badges, and dish photos. Includes category tabs and per-item size selection.

## Design (from the original source)

- **Colors:** brand `#0C4A3E` (deep green), paper `#F7EEDC` (cream), accent `#B06A2C`.
- **Fonts:** Amiri, Aref Ruqaa, Cormorant Garamond, Tajawal.
- **Language:** Arabic (RTL) by default with a one-click AR ⇄ EN toggle, remembered across pages via `localStorage`.
- **Zero build step** — plain HTML/CSS/JS.

## Structure

```
misyal/
├── index.html          # Home
├── menu.html           # Menu (data-driven, faithful to the original menu)
├── app.js              # Shared bilingual language toggle
├── sweets/             # Dessert photos
├── uploads/            # Food / hero photos
└── .github/workflows/deploy.yml   # GitHub Pages deployment
```

## Running locally

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deployment

Auto-deploys to GitHub Pages via GitHub Actions. Live at:
**https://faresalbar.github.io/misyal/**
