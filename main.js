(function () {
  'use strict';
  var doc = document;
  doc.documentElement.classList.remove('no-js');

  // Year
  var y = doc.getElementById('year'); if (y) y.textContent = new Date().getFullYear();

  // Mobile nav
  var toggle = doc.getElementById('navToggle'), links = doc.getElementById('navLinks');
  function closeNav() { links.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); }
  toggle.addEventListener('click', function () {
    var open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  links.addEventListener('click', function (e) { if (e.target.tagName === 'A') closeNav(); });

  // Nav border on scroll
  var nav = doc.getElementById('nav');
  function onScroll() { nav.classList.toggle('scrolled', window.scrollY > 8); }
  onScroll(); window.addEventListener('scroll', onScroll, { passive: true });

  // Scroll reveal
  var items = doc.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { threshold: 0.12 });
    items.forEach(function (el) { io.observe(el); });
  } else { items.forEach(function (el) { el.classList.add('in'); }); }

  // Active nav link
  var anchors = [].slice.call(links.querySelectorAll('a[href^="#"]'));
  if ('IntersectionObserver' in window) {
    var so = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          anchors.forEach(function (a) { a.classList.toggle('active', a.getAttribute('href') === '#' + en.target.id); });
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    anchors.forEach(function (a) { var s = doc.querySelector(a.getAttribute('href')); if (s) so.observe(s); });
  }

  // Tabs (CFD results)
  var tabs = [].slice.call(doc.querySelectorAll('[role=tab]'));
  function select(tab) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
      doc.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
    tab.focus();
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') select(tabs[(i + 1) % tabs.length]);
      if (e.key === 'ArrowLeft') select(tabs[(i - 1 + tabs.length) % tabs.length]);
    });
  });

  // Lightbox
  var lb = doc.getElementById('lightbox'), lbImg = doc.getElementById('lbImg'), lbCap = doc.getElementById('lbCap');
  function openLb(img) {
    lbImg.src = img.currentSrc || img.src; lbImg.alt = img.alt;
    var fig = img.closest('figure'); var cap = fig && fig.querySelector('figcaption');
    lbCap.textContent = cap ? cap.textContent : img.alt;
    lb.hidden = false; doc.body.style.overflow = 'hidden';
  }
  function closeLb() { lb.hidden = true; lbImg.src = ''; doc.body.style.overflow = ''; }
  doc.addEventListener('click', function (e) {
    var t = e.target;
    if (t.matches && t.matches('img[data-zoom]')) openLb(t);
    else if (!lb.hidden && (t === lb || t.id === 'lbClose')) closeLb();
  });
  doc.addEventListener('keydown', function (e) { if (e.key === 'Escape') { if (!lb.hidden) closeLb(); closeNav(); } });
})();
