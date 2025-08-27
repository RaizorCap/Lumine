let isGiftOpened = false;
let confettiIntervalId = null; 

document.getElementById('giftContainer').addEventListener('click', function () {
    if (!isGiftOpened) {
        openGift();
        isGiftOpened = true;
    }
});

document.getElementById('closeButton').addEventListener('click', function (event) {
    event.stopPropagation();
    if (isGiftOpened) {
        closeGift();
    }
});

// Nuevo evento para el botón "Extra"
document.getElementById('extraButton').addEventListener('click', function (event) {
    event.stopPropagation();
    document.getElementById('extraMessageOverlay').style.display = 'flex';
});

// Nuevo evento para el botón de cierre del mensaje "Extra"
document.getElementById('closeExtraButton').addEventListener('click', function (event) {
    event.stopPropagation();
    document.getElementById('extraMessageOverlay').style.display = 'none';
});

function openGift() {
    const giftLid = document.getElementById('giftLid');
    const giftContent = document.getElementById('giftContent');
    const introSection = document.querySelector('.intro-section');

    introSection.style.display = 'none';

    giftLid.classList.add('open');

    setTimeout(createParticleExplosion, 800);

    setTimeout(() => {
        giftContent.classList.add('show');
        playConfettiAnimation();
    }, 1200);

    // Se eliminó el setTimeout que mostraba el mensaje final
}

function closeGift() {
    const giftLid = document.getElementById('giftLid');
    const giftContent = document.getElementById('giftContent');
    const introSection = document.querySelector('.intro-section');

    giftContent.classList.remove('show');

    setTimeout(() => {
        giftLid.classList.remove('open');
    }, 500);

    setTimeout(() => {
        introSection.style.display = 'block';
    }, 1500);

    if (confettiIntervalId) {
        clearInterval(confettiIntervalId);
        confettiIntervalId = null;
    }
    
    isGiftOpened = false;
}

function createParticleExplosion() {
    const particles = document.getElementById('particles');
    const colors = ['🎉', '🎊', '✨', '💖', '🌟', '🎈', '💫'];

    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.innerHTML = colors[Math.floor(Math.random() * colors.length)];
            particle.style.position = 'absolute';
            particle.style.left = '50%';
            particle.style.top = '40%';
            particle.style.fontSize = (Math.random() * 20 + 15) + 'px';
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '25';

            const angle = (Math.PI * 2 * i) / 50;
            const velocity = Math.random() * 200 + 100;
            const vx = Math.cos(angle) * velocity;
            const vy = Math.sin(angle) * velocity - 100;

            particle.animate([
                {
                    transform: 'translate(-50%, -50%) rotate(0deg)',
                    opacity: 1
                },
                {
                    transform: `translate(calc(-50% + ${vx}px), calc(-50% + ${vy}px)) rotate(720deg)`,
                    opacity: 0
                }
            ], {
                duration: 3000,
                easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
            });

            particles.appendChild(particle);

            setTimeout(() => {
                particle.remove();
            }, 3000);
        }, i * 50);
    }
}

function playConfettiAnimation() {
    confettiIntervalId = setInterval(() => {
        createConfettiPiece();
    }, 100);

    setTimeout(() => {
        clearInterval(confettiIntervalId);
        confettiIntervalId = null;
    }, 5000);
}

function createConfettiPiece() {
    const confetti = document.createElement('div');
    const colors = ['#ff6b9d', '#ffd700', '#ff8fa3', '#ffb3ba', '#87ceeb'];

    confetti.style.position = 'fixed';
    confetti.style.width = '10px';
    confetti.style.height = '10px';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.top = '-10px';
    confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
    confetti.style.pointerEvents = 'none';
    confetti.style.zIndex = '30';

    confetti.animate([
        {
            transform: 'translateY(0) rotate(0deg)',
            opacity: 1
        },
        {
            transform: 'translateY(100vh) rotate(720deg)',
            opacity: 0
        }
    ], {
        duration: Math.random() * 2000 + 2000,
        easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
    });

    document.body.appendChild(confetti);

    setTimeout(() => {
        confetti.remove();
    }, 4000);
}

function createGiftGlow() {
    const giftBox = document.getElementById('giftBox');
    if (!isGiftOpened) {
        giftBox.style.filter = 'drop-shadow(0 0 20px rgba(255, 107, 157, 0.6))';

        setTimeout(() => {
            giftBox.style.filter = 'drop-shadow(0 0 10px rgba(255, 107, 157, 0.3))';
        }, 1000);
    }
}

setInterval(createGiftGlow, 3000);

function playBirthdayAnimation() {
    const balloons = document.querySelectorAll('.balloon');
    balloons.forEach(balloon => {
        balloon.style.animationDuration = '2s';
    });

    setTimeout(() => {
        balloons.forEach(balloon => {
            balloon.style.animationDuration = '6s';
        });
    }, 10000);
}

window.addEventListener('load', () => {
    setTimeout(playBirthdayAnimation, 2000);
});