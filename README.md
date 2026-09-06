# MOROCCO WELL DRILLING | حفر الآبار

Trilingual company website (العربية · Français · English) for **Morocco Well
Drilling** — water well drilling in Fès, Meknès, Agadir and Marrakech.

**Live site:** https://welldriling.github.io/wellsdriling/

## Features

- Arabic (RTL) by default, with Français / English switcher
- Light & dark theme (remembered per visitor)
- Animated loader, hero with parallax, typed slogans, animated counters
- Scroll-driven "journey of water" drill animation with depth meter
- Gallery slider, testimonials slider, before/after comparison slider
- Quote form that opens WhatsApp with a ready-made message (06 52 87 97 89)
- Floating WhatsApp button, click-to-call, service-area map of Morocco
- Custom 404 page, SEO meta tags, JSON-LD local business data

## Structure

```
├── index.html      Main page (AR/FR/EN)
├── 404.html        Custom not-found page
├── css/style.css   All styling (light/dark, RTL/LTR, responsive)
├── js/main.js      Language switch, theme, sliders, animations, form
├── img/            Site photos (renamed by slot — see below)
│   └── originals/  Backup of the owner's original photo files
├── robots.txt
└── sitemap.xml
```

## Photo slots

To replace any photo on the site, overwrite the matching file in `img/`
(keep the same name):

| File | Where it appears |
|---|---|
| `logo.png` | Header, footer, favicon, social share |
| `truck-2.jpg` | Hero background |
| `truck-1.jpg`, `rig-site.jpg` | About section (+ gallery) |
| `dth-bits.jpg`, `crate-dhd380.jpg`, `truck-3.jpg`, `parts-stock.jpg` | Equipment (+ gallery) |
| `truck-mast.jpg`, `rig-olive.jpg`, `crate-hammers.jpg` | Gallery |
| `before.jpg`, `after.jpg` | Before/After comparison slider |

The untouched original photos are kept in `img/originals/`.

## Tech

100% static HTML/CSS/JS — no frameworks, no build step. Only external
resource: Google Fonts (Cairo + Montserrat), which degrades gracefully
to system fonts if unavailable.
