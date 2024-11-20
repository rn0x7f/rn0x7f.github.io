const box = document.getElementById('interactive-box');

// Add an event listener for click interaction
box.addEventListener('click', () => {
    box.style.transform = 'scale(1.5) rotate(360deg)';
    box.style.backgroundColor = '#ff5722';

    // Reset the animation after 1 second
    setTimeout(() => {
        box.style.transform = 'scale(1) rotate(0deg)';
        box.style.backgroundColor = '#4caf50';
    }, 1000);
});
