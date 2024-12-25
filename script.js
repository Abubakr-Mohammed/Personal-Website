document.addEventListener('DOMContentLoaded', function() {
    const lightbox = document.getElementById('welcome-lightbox');
    const closeButton = document.getElementById('close-lightbox');
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelectorAll('.nav__link');
    const sections = document.querySelectorAll('section');
    const modeToggle = document.getElementById('mode-toggle');
    const body = document.body;

    // Show the lightbox when the page loads
    lightbox.classList.remove('hidden');

    // Close the lightbox when the button is clicked
    closeButton.addEventListener('click', function() {
        lightbox.classList.add('hidden');
    });

    navToggle.addEventListener('click', function() {
        document.body.classList.toggle('nav-open');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            document.body.classList.remove('nav-open');
        });
    });

    window.addEventListener('scroll', function() {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // Anime.js animations
    anime({
        targets: 'section',
        translateY: [100, 0],
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 1000,
        delay: anime.stagger(200, { start: 500 })
    });

    anime({
        targets: 'h1, h2, p',
        translateY: [50, 0],
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 1000,
        delay: anime.stagger(200, { start: 1000 })
    });

    // Toggle light/dark mode
    modeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        modeToggle.textContent = body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
    });
});