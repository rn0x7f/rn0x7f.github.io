const box = document.getElementById('interactive-box');

// Add an event listener for click interaction
box.addEventListener('click', () => {
    // Add the class that triggers the animation
    box.classList.add('rotate');

    // Wait for the animation to complete (1 second), then navigate to the new page
    setTimeout(() => {
        window.location.href = 'portfolio.html';
    }, 1000);
});
