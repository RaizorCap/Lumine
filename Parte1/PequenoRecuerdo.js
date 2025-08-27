
// Funcionalidad del botón de imagen
document.getElementById('toggleImageBtn').addEventListener('click', function () {
    document.getElementById('imageModal').style.display = 'block';
});

// Cerrar modal
document.getElementById('closeModal').addEventListener('click', function () {
    document.getElementById('imageModal').style.display = 'none';
});

// Cerrar modal con ESC
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        document.getElementById('imageModal').style.display = 'none';
    }
});

// Cerrar modal haciendo clic fuera del contenido
document.getElementById('imageModal').addEventListener('click', function (e) {
    if (e.target === this) {
        this.style.display = 'none';
    }
});

// Navegación a la siguiente página
document.getElementById('nextBtn').addEventListener('click', function () {
    window.location.href = '/Parte2/DestacanDeTi.html';
});

// Efecto de partículas de corazones
function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '💖';
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '100vh';
    heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '1';
    heart.style.animation = 'heartFloat 8s linear infinite';
    heart.style.opacity = Math.random() * 0.7 + 0.3;

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}

// Crear corazones periódicamente
setInterval(createHeart, 100);

// Animación para los corazones flotantes
const heartStyle = document.createElement('style');
heartStyle.textContent = `
            @keyframes heartFloat {
                to {
                    transform: translateY(-100vh) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
document.head.appendChild(heartStyle);

// Efecto parallax suave
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.paragraph');

    parallaxElements.forEach((element, index) => {
        const rate = scrolled * -0.5;
        element.style.transform = `translateY(${rate * (index + 1) * 0.1}px)`;
    });
});
