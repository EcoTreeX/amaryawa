/* Amaryawa Farms — shared static-site interactions for GitHub Pages. */
(function () {
  const nav = document.querySelector('.site-nav');
  const menuToggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.desktop-nav');
  const current = document.body.dataset.page;
  if (nav && window.scrollY > 24) nav.classList.add('scrolled');
  window.addEventListener('scroll', function () { if (nav) nav.classList.toggle('scrolled', window.scrollY > 24); }, { passive: true });
  if (current && menu) menu.querySelectorAll('[data-page]').forEach(function (link) { link.classList.toggle('active', link.dataset.page === current); });
  if (menuToggle && menu) menuToggle.addEventListener('click', function () { const open = menu.classList.toggle('open'); menuToggle.setAttribute('aria-expanded', String(open)); menuToggle.textContent = open ? '×' : '☰'; });
  if (menu) menu.querySelectorAll('a').forEach(function (link) { link.addEventListener('click', function () { menu.classList.remove('open'); if (menuToggle) { menuToggle.setAttribute('aria-expanded', 'false'); menuToggle.textContent = '☰'; } }); });
})();
