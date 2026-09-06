# Wells Drilling — Company Website

Professional one-page website for **Wells Drilling**, a water well drilling
company based in Oujda, Morocco. Published with GitHub Pages at:

**https://welldriling.github.io/wellsdriling/**

## Structure

```
├── index.html      Main page (sections: home, services, about, process,
│                   gallery, testimonials, FAQ, contact)
├── 404.html        Custom "page not found" page
├── css/style.css   All styling (no external fonts or libraries)
├── js/main.js      Navigation, gallery lightbox, form, animations
├── images/         All site photos
│   └── incoming/   Drop new original photos here before importing
├── favicon.svg     Browser icon
├── robots.txt      Search engine rules
└── sitemap.xml     Sitemap
```

## Editing

- **Phone / WhatsApp / email / address** — search for `+212` or
  `contact@wellsdrilling.com` in `index.html` and replace with the real details.
- **Photos** — put original photos in `images/incoming/` and re-run the import
  script (`import_photos.py`), or simply replace the files
  `photo-01.jpg` … `photo-11.jpg`, `hero.jpg`, `about-1.jpg`, `about-2.jpg`
  with your own photos using those exact names.
- **Texts** — all content is plain HTML, editable in any text editor.

## Tech

100% static HTML/CSS/JS. No frameworks, no CDNs, no build step —
nothing that can break.
