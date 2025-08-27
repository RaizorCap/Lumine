// Create night sky with stars
function createStars() {
    const starsContainer = document.querySelector('.stars');
    const starCount = 100;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';

        const size = Math.random() * 3 + 1;
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';

        starsContainer.appendChild(star);
    }
}

// Create fireworks around the card
function createFirework(x, y) {
    const fireworksContainer = document.querySelector('.fireworks');
    const colors = ['#ff1493', '#9400d3', '#ffd700', '#00ffff', '#ff6347'];
    const particles = 12;

    for (let i = 0; i < particles; i++) {
        const particle = document.createElement('div');
        particle.className = 'firework';

        const color = colors[Math.floor(Math.random() * colors.length)];
        const size = Math.random() * 4 + 2;
        const angle = (i * 360) / particles;
        const velocity = Math.random() * 100 + 50;

        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.background = color;
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.boxShadow = `0 0 10px ${color}`;

        const radians = (angle * Math.PI) / 180;
        const deltaX = Math.cos(radians) * velocity;
        const deltaY = Math.sin(radians) * velocity;

        particle.style.animation = `fireworkParticle 2s ease-out forwards`;
        particle.style.setProperty('--deltaX', deltaX + 'px');
        particle.style.setProperty('--deltaY', deltaY + 'px');

        fireworksContainer.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 2000);
    }
}

// Add firework animation
const style = document.createElement('style');
style.textContent = `
            @keyframes fireworkParticle {
                0% {
                    transform: translate(0, 0) scale(1);
                    opacity: 1;
                }
                100% {
                    transform: translate(var(--deltaX), var(--deltaY)) scale(0);
                    opacity: 0;
                }
            }
        `;
document.head.appendChild(style);

// Continuous fireworks around the card
function startFireworks() {
    const cardContainer = document.querySelector('.card-container');

    setInterval(() => {
        if (cardContainer) {
            const rect = cardContainer.getBoundingClientRect();
            const x = rect.left + rect.width / 2 + (Math.random() - 0.5) * 400;
            const y = rect.top + rect.height / 2 + (Math.random() - 0.5) * 300;

            if (x > 0 && x < window.innerWidth && y > 0 && y < window.innerHeight) {
                createFirework(x, y);
            }
        }
    }, 800);
}

// Create text firework effect
function createTextFirework() {
    setTimeout(() => {
        const text = document.querySelector('.accept-text');
        if (text) {
            const rect = text.getBoundingClientRect();
            for (let i = 0; i < 5; i++) {
                setTimeout(() => {
                    const x = rect.left + Math.random() * rect.width;
                    const y = rect.top + Math.random() * rect.height;
                    createFirework(x, y);
                }, i * 200);
            }
        }
    }, 2500);
}

function openCard() {
    const card = document.getElementById('birthdayCard');
    const modal = document.getElementById('welcomeModal');

    // Create celebration fireworks
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;
            createFirework(x, y);
        }, i * 100);
    }

    card.classList.add('opened');

    setTimeout(() => {
        modal.classList.add('show');
    }, 1500);
}

// Initialize everything
window.addEventListener('load', () => {
    createStars();
    createTextFirework();
    setTimeout(() => {
        startFireworks();
    }, 3000);
});

// Mouse trail fireworks
let mouseTrailTimer = 0;
document.addEventListener('mousemove', (e) => {
    mouseTrailTimer++;
    if (mouseTrailTimer % 20 === 0) {
        createFirework(e.clientX, e.clientY);
    }
});