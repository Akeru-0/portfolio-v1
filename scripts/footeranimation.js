document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.1 // Triggers when at least 10% of the element is visible
    });

    // Observe footer elements
    const footerElements = document.querySelectorAll('.footer-text, .footer-resume, .footer-github');
    footerElements.forEach(element => {
        observer.observe(element);
    });
});