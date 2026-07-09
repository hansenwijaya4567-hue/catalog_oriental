import { brands, WA_NUMBER } from './data.js';
import { init, navigate, getCurrentRoute, goBack } from './router.js';

let currentBrand = null;
let currentCarId = null;
let sliderIndex = 0;
let xDown = null;

function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const page = document.getElementById(pageId);
  if (page) page.classList.add('active');
}

function stopVideo() {
  const video = document.getElementById('brandVideo');
  if (video) { video.pause(); video.src = ''; }
}

function updateNavBack(show) {
  const btn = document.getElementById('navBack');
  if (btn) btn.classList.toggle('show', show);
}

function renderHome() {
  showPage('pageHome');
  updateNavBack(false);
  stopVideo();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderBrand(brandKey) {
  const brand = brands[brandKey];
  if (!brand) { renderHome(); return; }

  currentBrand = brandKey;
  currentCarId = null;
  showPage('pageBrand');
  updateNavBack(true);
  stopVideo();

  const header = document.getElementById('brandHeader');
  if (header) {
    header.className = 'brand-header ' + brandKey + '-header';
    document.getElementById('brandBadge').textContent = brand.emoji + ' ' + brand.name;
    document.getElementById('brandTitle').textContent = 'Koleksi ' + brand.name;
    document.getElementById('brandDesc').textContent = brand.desc;
  }

  const video = document.getElementById('brandVideo');
  if (video && brand.video) {
    video.src = brand.video;
    video.play().catch(() => {});
  }

  const grid = document.getElementById('carGrid');
  if (!grid) return;
  grid.innerHTML = '';

  brand.cars.forEach(car => {
    const card = document.createElement('div');
    card.className = 'car-card ' + brandKey;
    card.innerHTML = `
      <img class="car-card-img" src="${car.images[0]}" alt="${car.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?w=800'">
      <div class="car-card-body">
        <h3>${brand.name} ${car.name}</h3>
        <div class="car-type">${car.type}</div>
        <div class="car-tags">${car.categories.map(c => `<span class="car-tag">${c}</span>`).join('')}</div>
      </div>
    `;
    card.addEventListener('click', () => navigate('car/' + brandKey + '/' + car.id));
    grid.appendChild(card);
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderDetail(brandKey, carId) {
  const brand = brands[brandKey];
  if (!brand) { renderHome(); return; }
  const car = brand.cars.find(c => c.id === carId);
  if (!car) { renderHome(); return; }

  currentCarId = carId;
  showPage('pageDetail');
  updateNavBack(true);
  stopVideo();

  const container = document.getElementById('carDetail');
  if (!container) return;
  container.className = 'car-detail ' + brandKey;

  let html = `
    <div class="car-detail-header">
      <h1>${brand.name} ${car.name}</h1>
      <div class="car-subtitle">${car.type} — ${car.tagline}</div>
      <div style="font-size:0.8rem;color:#666;margin-top:2px">Varian: ${car.variants}</div>
    </div>
  `;

  html += `<div class="slider-container" id="slider">
    <div class="slider-track" id="sliderTrack">`;
  car.images.forEach((img) => {
    html += `<img src="${img}" alt="${car.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?w=800'">`;
  });
  html += `</div>
    <button class="slider-btn slider-prev" id="sliderPrev">‹</button>
    <button class="slider-btn slider-next" id="sliderNext">›</button>
    <div class="slider-dots" id="sliderDots">`;
  car.images.forEach((_, i) => {
    html += `<div class="slider-dot${i === 0 ? ' active' : ''}" data-index="${i}"></div>`;
  });
  html += `</div>
    <div class="slider-label">${car.images.length} Foto</div>
  </div>
  <div class="slider-thumbs" id="sliderThumbs">`;
  car.images.forEach((img, i) => {
    html += `<img src="${img}" alt="thumb ${i+1}" class="${i === 0 ? ' active' : ''}" data-index="${i}" loading="lazy">`;
  });
  html += `</div>`;

  html += `<div class="action-buttons">
    <button class="action-btn wa-testdrive" id="waTestdrive">
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-1.102-1.002-1.846-2.24-2.062-2.62-.216-.38-.023-.586.163-.772.166-.166.372-.433.558-.65.186-.217.248-.372.372-.62.124-.248.062-.465-.031-.651-.094-.186-.67-1.613-.92-2.209-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      Ajukan Test Drive Gratis
    </button>
    <button class="action-btn wa-consult" id="waConsult">
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z"/><path d="M7 9h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z"/></svg>
      Konsultasi Gratis
    </button>
  </div>`;

  html += `<h3 class="section-title">Spesifikasi Lengkap</h3>
    <div class="specs-grid">`;
  car.specs.forEach(s => {
    html += `<div class="spec-item"><div class="spec-label">${s.label}</div><div class="spec-value">${s.value}</div></div>`;
  });
  html += `</div>`;

  html += `<div class="features-section">
    <h3>✨ Fitur Unggulan</h3>
    <div class="features-grid">`;
  car.features.forEach(f => {
    html += `<div class="feature-item">${f}</div>`;
  });
  html += `</div></div>`;

  html += `<div class="warranty-section">
    <h3>🛡️ Garansi</h3>
    <div class="warranty-items">`;
  car.warranty.forEach(w => {
    html += `<div class="warranty-item">${w}</div>`;
  });
  html += `</div></div>`;

  container.innerHTML = html;

  sliderIndex = 0;
  renderSlider();
  bindSliderEvents();
  bindWAButtons(brand.name, car.name);

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function bindSliderEvents() {
  const prevBtn = document.getElementById('sliderPrev');
  const nextBtn = document.getElementById('sliderNext');
  if (prevBtn) prevBtn.addEventListener('click', () => slideDir(-1));
  if (nextBtn) nextBtn.addEventListener('click', () => slideDir(1));

  document.querySelectorAll('.slider-dot').forEach(dot => {
    dot.addEventListener('click', () => {
      goToSlide(parseInt(dot.dataset.index));
    });
  });

  document.querySelectorAll('.slider-thumbs img').forEach(thumb => {
    thumb.addEventListener('click', () => {
      goToSlide(parseInt(thumb.dataset.index));
    });
  });
}

function bindWAButtons(brandName, carName) {
  const waTestdrive = document.getElementById('waTestdrive');
  const waConsult = document.getElementById('waConsult');

  if (waTestdrive) {
    waTestdrive.addEventListener('click', () => openWA('testdrive', brandName, carName));
  }
  if (waConsult) {
    waConsult.addEventListener('click', () => openWA('consult', brandName, carName));
  }
}

function slideDir(dir) {
  const track = document.getElementById('sliderTrack');
  const dots = document.querySelectorAll('.slider-dot');
  if (!track || !dots.length) return;
  const total = track.children.length;
  sliderIndex = (sliderIndex + dir + total) % total;
  renderSlider();
}

function goToSlide(idx) {
  sliderIndex = idx;
  renderSlider();
}

function renderSlider() {
  const track = document.getElementById('sliderTrack');
  const dots = document.querySelectorAll('.slider-dot');
  const thumbs = document.querySelectorAll('.slider-thumbs img');
  if (!track) return;
  const total = track.children.length;
  track.style.transform = `translateX(-${sliderIndex * 100}%)`;
  dots.forEach((d, i) => d.classList.toggle('active', i === sliderIndex));
  thumbs.forEach((t, i) => t.classList.toggle('active', i === sliderIndex));
}

function openWA(type, brandName, carName) {
  const msg = type === 'testdrive'
    ? `Halo Metro Oriental! Saya ingin *Test Drive* untuk:\n\nMerek: ${brandName}\nModel: ${carName}\n\nMohon info jadwal test drive yang tersedia. Terima kasih!`
    : `Halo Metro Oriental! Saya ingin *Konsultasi* untuk:\n\nMerek: ${brandName}\nModel: ${carName}\n\nMohon informasinya lebih lanjut. Terima kasih!`;
  const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
}

function routeHandler(route) {
  if (route.page === 'brand') {
    renderBrand(route.brandKey);
  } else if (route.page === 'car') {
    renderDetail(route.brandKey, route.carId);
  } else {
    renderHome();
  }
}

function handleScroll() {
  const nav = document.getElementById('nav');
  if (!nav) return;
  const curr = window.scrollY;
  const lastScroll = parseInt(nav.dataset.lastScroll || '0');
  if (curr > lastScroll && curr > 100) nav.classList.add('hidden');
  else nav.classList.remove('hidden');
  nav.dataset.lastScroll = curr;
}

function handleTouchStart(evt) {
  xDown = evt.touches[0].clientX;
}

function handleTouchMove(evt) {
  if (!xDown) return;
  const xUp = evt.touches[0].clientX;
  const diff = xDown - xUp;
  if (Math.abs(diff) > 50) {
    slideDir(diff > 0 ? 1 : -1);
    xDown = null;
  }
}

function initSplash() {
  setTimeout(() => {
    const splash = document.getElementById('splash');
    if (splash) {
      splash.classList.add('hide');
      setTimeout(() => { splash.style.display = 'none'; }, 800);
    }
  }, 1200);
}

function bindHomeEvents() {
  document.querySelectorAll('.brand-card').forEach(card => {
    card.addEventListener('click', () => {
      const brandKey = card.dataset.brand;
      if (brandKey) navigate('brand/' + brandKey);
    });
  });
}

function bindNavEvents() {
  const navBrand = document.querySelector('.nav-brand');
  if (navBrand) navBrand.addEventListener('click', () => navigate('/'));

  const navBack = document.getElementById('navBack');
  if (navBack) navBack.addEventListener('click', goBack);
}

export function initApp() {
  init(routeHandler);
  initSplash();
  bindHomeEvents();
  bindNavEvents();

  window.addEventListener('scroll', handleScroll, { passive: true });

  document.addEventListener('touchstart', handleTouchStart, { passive: true });
  document.addEventListener('touchmove', handleTouchMove, { passive: true });

  console.log('🚗 Metro Oriental — Medan');
  console.log('💬 WhatsApp: ' + WA_NUMBER);
}
