document.addEventListener('DOMContentLoaded', function () {

  // ── ACCORDION ──
  document.querySelectorAll('.accordion__row').forEach(function(row) {
    row.addEventListener('click', function () {
      var body = this.nextElementSibling;
      if (!body || !body.classList.contains('accordion__body')) return;
      var isOpen = body.classList.contains('is-open');
      document.querySelectorAll('.accordion__body.is-open').forEach(function(b) {
        b.classList.remove('is-open');
      });
      if (!isOpen) body.classList.add('is-open');
    });
  });

  // ── PDP THUMBNAILS ──
  document.querySelectorAll('.pdp-gallery__thumb').forEach(function(thumb) {
    thumb.addEventListener('click', function () {
      var src = this.getAttribute('data-src');
      var mainImg = document.querySelector('#pdp-main-img');
      if (mainImg && src) mainImg.src = src;
      document.querySelectorAll('.pdp-gallery__thumb').forEach(function(t) {
        t.classList.remove('is-active');
      });
      this.classList.add('is-active');
    });
  });

  // ── SIZE BUTTONS ──
  document.querySelectorAll('.size-btn:not(.is-sold-out)').forEach(function(btn) {
    btn.addEventListener('click', function () {
      var row = this.closest('.size-row');
      if (row) row.querySelectorAll('.size-btn').forEach(function(b) {
        b.classList.remove('is-active');
      });
      this.classList.add('is-active');
    });
  });

  // ── COLOUR SWATCHES ──
  document.querySelectorAll('.colour-swatch').forEach(function(swatch) {
    swatch.addEventListener('click', function () {
      var row = this.closest('.colour-row');
      if (row) row.querySelectorAll('.colour-swatch').forEach(function(s) {
        s.classList.remove('is-active');
      });
      this.classList.add('is-active');
    });
  });

});
