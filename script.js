document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Set Copyright Year
  document.getElementById('year').textContent = new Date().getFullYear();

  // 2. Initialize Icons
  lucide.createIcons();

  // 3. Mobile Menu Toggle
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  
  if (btn && menu) {
    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
      const isHidden = menu.classList.contains('hidden');
      const icon = isHidden ? 'menu' : 'x';
      
      const i = btn.querySelector('i');
      i.setAttribute('data-lucide', icon);
      lucide.createIcons();
    });
  }

  // 4. Smooth Scroll for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
        // Close mobile menu if open
        if (menu && !menu.classList.contains('hidden')) {
          menu.classList.add('hidden');
        }
      }
    });
  });
});