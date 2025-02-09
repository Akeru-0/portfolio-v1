document.addEventListener("DOMContentLoaded", function () {
    // Create the Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Add the visible class when in view
                entry.target.classList.add("visible");
            } else {
                // Remove the visible class when out of view (for retriggering)
                entry.target.classList.remove("visible");
            }
        });
    });

    // Select and observe elements with the fade-in class
    document.querySelectorAll('.fade-in').forEach((element) => {
        observer.observe(element);
    });
});
