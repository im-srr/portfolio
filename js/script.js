document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.custom-nav');
    const menuToggle = document.getElementById('navToggle');
    const menuOverlay = document.getElementById('menuOverlay');
    const closeMenu = document.getElementById('closeMenu');
    const menuLinks = document.querySelectorAll('.menu-link');

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Open Menu
    menuToggle.addEventListener('click', () => {
        menuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scroll
    });

    // Close Menu
    const hideMenu = () => {
        menuOverlay.classList.remove('active');
        document.body.style.overflow = 'auto'; // Re-enable scroll
    };

    closeMenu.addEventListener('click', hideMenu);

    // Close menu when a link is clicked
    menuLinks.forEach(link => {
        link.addEventListener('click', hideMenu);
    });

    // Smooth reveal for tech pills on load
    const techPills = document.querySelectorAll('.tech-pill');
    techPills.forEach((pill, index) => {
        pill.style.opacity = '0';
        pill.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            pill.style.transition = 'all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)';
            pill.style.opacity = '1';
            pill.style.transform = 'translateY(0)';
        }, 100 * index);
    });
});