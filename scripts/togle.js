// Select all .toggle-arrow elements
const toggleArrows = document.querySelectorAll('.toggle-arrow');

// Add event listeners to each toggle-arrow element
toggleArrows.forEach(function(toggleArrow) {
    toggleArrow.addEventListener('click', function() {
        const position = this.closest('.position-full-width');
        position.classList.toggle('active');
        this.classList.toggle('active');
    });
});
