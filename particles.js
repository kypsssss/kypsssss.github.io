document.addEventListener('DOMContentLoaded', function () {
    const particleCount = 100; // Number of particles
    const particles = [];
    const particleSize = 5; // Size of each particle

    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.width = `${particleSize}px`;
        particle.style.height = `${particleSize}px`;
        particle.style.backgroundColor = 'black';
        particle.style.position = 'absolute';
        particle.style.borderRadius = '50%';
        particle.style.opacity = Math.random() * 0.5 + 0.5; // Random opacity
        particle.style.left = `${Math.random() * window.innerWidth}px`;
        particle.style.top = `-${particleSize}px`;
        document.getElementById('particles').appendChild(particle);
        particles.push(particle);
    }

    function animateParticles() {
        particles.forEach(particle => {
            const topPosition = parseFloat(particle.style.top);
            if (topPosition < window.innerHeight) {
                particle.style.top = `${topPosition + 1}px`; // Fall speed
            } else {
                // Reset particle to the top when it goes off screen
                particle.style.top = `-${particleSize}px`;
                particle.style.left = `${Math.random() * window.innerWidth}px`;
            }
        });
        requestAnimationFrame(animateParticles);
    }

    // Create initial particles
    for (let i = 0; i < particleCount; i++) {
        createParticle();
    }

    // Start animation
    animateParticles();
});
