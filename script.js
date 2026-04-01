// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        navLinks.classList.remove('active');
    });
});

// Video card click - YouTube खोलता है
document.querySelectorAll('.video-card').forEach(card => {
    card.addEventListener('click', function() {
        const videoId = this.getAttribute('data-video');
        if (videoId) {
            window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
        } else {
            alert('YouTube link jaldi add karunga! 😊');
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(0,0,0,0.95)';
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.3)';
    } else {
        header.style.background = 'rgba(0,0,0,0.9)';
        header.style.boxShadow = 'none';
    }
});

// Intersection Observer - Sections animate on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('.videos-section, .about, .contact').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'all 0.6s ease';
    observer.observe(section);
});

// Counter animation (views)
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target.toLocaleString() + ' views';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start).toLocaleString() + ' views';
        }
    }, 16);
}

// Page load effects
window.addEventListener('load', () => {
    // Animate view counters
    document.querySelectorAll('.video-meta span:last-child').forEach((el, index) => {
        setTimeout(() => {
            animateCounter(el, [1200000, 856000, 2100000][index] || 1000000);
        }, index * 200);
    });
});
