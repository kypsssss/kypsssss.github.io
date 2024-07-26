document.addEventListener('DOMContentLoaded', function () {
    const particleCount = 100; // Number of snowflakes
    const particles = [];
    const particleSize = 10; // Size of each snowflake

    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.width = `${particleSize}px`;
        particle.style.height = `${particleSize}px`;
        particle.style.backgroundColor = 'white'; // Snowflake color
        particle.style.position = 'absolute';
        particle.style.borderRadius = '50%';
        particle.style.opacity = Math.random() * 0.5 + 0.5; // Random opacity
        particle.style.left = `${Math.random() * window.innerWidth}px`;
        particle.style.top = `-${particleSize}px`; // Start above the viewport
        document.getElementById('particles').appendChild(particle);
        particles.push(particle);
    }

    function animateParticles() {
        particles.forEach(particle => {
            const topPosition = parseFloat(particle.style.top);
            if (topPosition < window.innerHeight) {
                particle.style.top = `${topPosition + 1}px`; // Falling speed
            } else {
                // Reset particle to the top when it goes off screen
                particle.style.top = `-${particleSize}px`;
                particle.style.left = `${Math.random() * window.innerWidth}px`;
            }
        });
        requestAnimationFrame(animateParticles);
    }

    // Create initial snowflakes
    for (let i = 0; i < particleCount; i++) {
        createParticle();
    }

    // Start animation
    animateParticles();
});
