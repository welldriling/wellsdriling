/* ==========================================================================
   Wells Drilling — main.js
   Vanilla JS only, no external libraries.
   ========================================================================== */
(function () {
  "use strict";

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ---------- Sticky header shadow ---------- */
  var header = document.getElementById("header");
  function onScrollHeader() {
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 10);
  }
  window.addEventListener("scroll", onScrollHeader, { passive: true });
  onScrollHeader();

  /* ---------- Mobile navigation ---------- */
  var hamburger = document.getElementById("hamburger");
  function closeNav() {
    if (!header || !hamburger) return;
    header.classList.remove("nav-open");
    hamburger.setAttribute("aria-expanded", "false");
    hamburger.setAttribute("aria-label", "Open menu");
  }
  if (hamburger && header) {
    hamburger.addEventListener("click", function () {
      var open = header.classList.toggle("nav-open");
      hamburger.setAttribute("aria-expanded", open ? "true" : "false");
      hamburger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
    var nav = document.getElementById("nav");
    if (nav) {
      nav.addEventListener("click", function (e) {
        if (e.target && e.target.closest("a")) closeNav();
      });
    }
    window.addEventListener("resize", function () {
      if (window.innerWidth > 880) closeNav();
    });
  }

  /* ---------- Scrollspy (active nav link) ---------- */
  var navLinks = Array.prototype.slice.call(document.querySelectorAll(".nav-link"));
  var sections = navLinks
    .map(function (link) { return document.querySelector(link.getAttribute("href")); })
    .filter(Boolean);

  if ("IntersectionObserver" in window && sections.length) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var id = "#" + entry.target.id;
        navLinks.forEach(function (link) {
          link.classList.toggle("active", link.getAttribute("href") === id);
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach(function (s) { spy.observe(s); });
  }

  /* ---------- Reveal on scroll ---------- */
  var revealEls = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
  if ("IntersectionObserver" in window && revealEls.length) {
    var revealer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { revealer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("visible"); });
  }

  /* ---------- Lightbox ---------- */
  var items = Array.prototype.slice.call(document.querySelectorAll(".gallery-item"));
  var lightbox = document.getElementById("lightbox");
  var lbImg = document.getElementById("lbImg");
  var lbCaption = document.getElementById("lbCaption");
  var current = 0;

  function showItem(index) {
    if (!items.length || !lbImg) return;
    current = (index + items.length) % items.length;
    var item = items[current];
    var img = item.querySelector("img");
    lbImg.src = item.getAttribute("href");
    lbImg.alt = img ? img.alt : "";
    if (lbCaption) lbCaption.textContent = item.getAttribute("data-caption") || "";
  }

  function openLightbox(index) {
    if (!lightbox) return;
    showItem(index);
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
    var closeBtn = document.getElementById("lbClose");
    if (closeBtn) closeBtn.focus();
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.hidden = true;
    document.body.style.overflow = "";
  }

  items.forEach(function (item, i) {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      openLightbox(i);
    });
  });

  var lbClose = document.getElementById("lbClose");
  var lbPrev = document.getElementById("lbPrev");
  var lbNext = document.getElementById("lbNext");
  if (lbClose) lbClose.addEventListener("click", closeLightbox);
  if (lbPrev) lbPrev.addEventListener("click", function () { showItem(current - 1); });
  if (lbNext) lbNext.addEventListener("click", function () { showItem(current + 1); });

  if (lightbox) {
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) closeLightbox();
    });
  }

  document.addEventListener("keydown", function (e) {
    if (!lightbox || lightbox.hidden) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") showItem(current - 1);
    if (e.key === "ArrowRight") showItem(current + 1);
  });

  /* ---------- Toast helper ---------- */
  var toast = document.getElementById("toast");
  var toastTimer = null;
  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.hidden = false;
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.hidden = true; }, 4000);
  }

  /* ---------- Contact form (opens the visitor's email app) ---------- */
  var form = document.getElementById("quoteForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = form.elements.name.value.trim();
      var phone = form.elements.phone.value.trim();
      var email = form.elements.email.value.trim();
      var message = form.elements.message.value.trim();

      if (!name || !phone || !message) {
        showToast("Please fill in your name, phone and message.");
        return;
      }

      var subject = "Quote request — " + name;
      var body = "Name: " + name +
        "\nPhone / WhatsApp: " + phone +
        (email ? "\nEmail: " + email : "") +
        "\n\nMessage:\n" + message;

      window.location.href =
        "mailto:contact@wellsdrilling.com" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);

      showToast("Opening your email app with your message ready to send…");
      form.reset();
    });
  }
})();
