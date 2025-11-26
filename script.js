// small interactions: year, mobile menu, form behavior
document.getElementById('year').textContent = new Date().getFullYear();

const ham = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
ham && ham.addEventListener('click', () => {
  const expanded = ham.getAttribute('aria-expanded') === 'true';
  ham.setAttribute('aria-expanded', String(!expanded));
  nav.style.display = expanded ? 'none' : 'flex';
});

const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    // optional: show a quick in-page message
    setTimeout(()=> {
      alert('Terima kasih! Permintaan Anda terkirim. Kami akan follow-up dalam 1-2 hari kerja.');
    }, 300);
  });
}

document.getElementById('download-brochure')?.addEventListener('click', () => {
  window.open('assets/mahesa-brochure.pdf', '_blank');
});
