document.addEventListener('DOMContentLoaded', function() {
    const revealSection = document.getElementById('revealSection');
    
    function revealOnScroll() {
        const sectionTop = revealSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight - 100) {
            revealSection.classList.remove('opacity-0');
        }
    }
    
    window.addEventListener('scroll', revealOnScroll);
});
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll("[data-card]");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Increase delay for a smoother staggered effect
                entry.target.style.transitionDelay = `${index * 0.3}s`;
                entry.target.classList.add("opacity-100"); // Reveal card
                entry.target.classList.remove("opacity-0"); // Remove initial opacity
                observer.unobserve(entry.target); // Stop observing once revealed
            }
        });
    }, {
        threshold: 0.5 // Animation triggers when 50% of card is visible
    });

    cards.forEach(card => observer.observe(card));
});


