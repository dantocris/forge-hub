const socialProfiles = {
  instagram: 'https://www.instagram.com/forge_hub1/',
  x: 'https://x.com/forge_hub1',
  facebook: 'https://www.facebook.com/profile.php?id=61594158843015'
};

document.querySelectorAll('[data-year]').forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});

document.querySelectorAll('[data-social]').forEach((link) => {
  const profile = socialProfiles[link.dataset.social];
  if (profile) {
    link.href = profile;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  } else {
    link.href = '#';
    link.setAttribute('aria-disabled', 'true');
    link.addEventListener('click', (event) => event.preventDefault());
  }
});

const heroVideo = document.querySelector('.hero-video');
if (heroVideo) {
  const playVideo = () => heroVideo.play().catch(() => {});
  if (document.visibilityState === 'visible') playVideo();
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') playVideo();
  });
}
