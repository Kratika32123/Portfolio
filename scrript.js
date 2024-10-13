
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Your message has been sent!');
});
// Cursor Movement Effect
document.addEventListener('mousemove', (e) => {
    const backgroundEffect = document.querySelector('.background-effect');
    
    const x = e.clientX; // Get X coordinate of cursor
    const y = e.clientY; // Get Y coordinate of cursor

    // Set transform property to move the background slightly
    backgroundEffect.style.transform = `translate(-${x / 50}px, -${y / 50}px)`;
});

// Animation on Scroll
const animatedElements = document.querySelectorAll('.animate-on-scroll');

const animateOnScroll = () => {
    const triggerBottom = window.innerHeight / 5 * 4;

    animatedElements.forEach(element => {
        const boxTop = element.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            element.classList.add('show');
        } else {
            element.classList.remove('show');
        }
    });
}

window.addEventListener('scroll', animateOnScroll);

// Button Hover Animation
const buttons = document.querySelectorAll('.btn-primary');

buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.1)';
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
    });
});