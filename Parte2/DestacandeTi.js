const modalContents = {
    ingrediente: {
        title: "¿Plato favorio? 🍗",
        text: "Si algo descubrí es que te gusta comer y habran muchos platillos diferentes que te gustaran al igual que habran algunos que te disgustaran pero hay uno que admitiste que te gutsa y es el clasico "+"<br>"+"Pollito a la brasa con que cremas te serviras no tengo ni ala menor idea aun asi lo importante es disfrutar de nuestro posible plato favorito",
        image: "https://i.pinimg.com/736x/a0/b9/c3/a0b9c3b1b84f0558ed0c0d623fd43bea.jpg",
        caption: "El sabor del Nacional"
    },
    deportes: {
        title: "¿Deportes?",
        text: "El deporte está lleno de valores y pasiones. Ya sea que lo hayas practicado por diversión o por profesión, siempre has demostrado un espíritu competitivo y perseverante, combinando estrategia y habilidades motrices."+"<br>"+"En el fútbol, la energía necesaria para recorrer el campo, la agudeza visual y el control del tiempo son habilidades esenciales que has desarrollado. De la misma forma, el vóley te ha enseñado a aplicar el espíritu de equipo, la elegancia natural y una mente fría en tus estudios.en.",
        image: "https://i.pinimg.com/736x/01/f1/39/01f1392602f44a1672ff15bbf2538a79.jpg",
        caption: "Una foto tuya habria quedado mejor xd"
    },
    lugares: {
        title: "¿Descubrir nuevas cosas? o ¿Solo pasear?",
        text: "Hasta el dia de hoy debo decir que me soprende que hayas conocidos parte la sierra y conozcas el clima frio que puede haber, tambien debo mencionar que si se trata de ir a nuevas zonas estoy seguro que aceptarias e irias pero siempre acompañada. Algun día te acompañare o te invitare a dar una vuelta quiero ver esa faceta aun desconocida para mi persona.",
        image: "https://i.pinimg.com/736x/3b/ba/25/3bba25a4fa7bdc708171156575a9533e.jpg",
        caption: "Descubramos nuevos rincones del País"
    },
    fotos: {
        title: "¿Alguien se durmio? 📸",
        text: "La cámara es un instrumento para captar recuerdos, pero tú la usas para atrapar a las personas durmiendo o en situaciones vergonzosas. Tienes una técnica peculiar, pero muy efectiva."+"<br>"+"Continúa capturando esos momentos, ya que, al final del día, serán anécdotas para contar o para reírte de ellas. Cada una de tus fotografías cuenta una historia."+"<br>"+"Sé que aprecias el arte y las cosas bonitas, pero quiero que sepas que para mí no hay nada más hermoso que ver feliz a mi amiga. Recuérdalo siempre: en cada momento eres hermosa y nadie puede decir lo contrario.",
        image: "https://i.pinimg.com/736x/41/e2/8d/41e28d2b7325c2defe62b4c08e698b64.jpg",
        caption: "Anecdotas por aqui y por alla"
    },
    baile: {
        title: "Tu Creatividad en Movimiento 💃",
        text: "El baile es tu lenguaje universal, la forma en que tu alma se expresa sin necesidad de palabras. Cada movimiento tuyo es poesía en acción, cada ritmo que sigues revela la artista que llevas dentro. Tu creatividad no se limita a pasos de baile, sino que se extiende a todo lo que tocas, convirtiendo lo ordinario en arte puro.",
        image: "https://i.pinimg.com/736x/c0/38/a8/c038a82dfae7dd6e2983cf7977390bd6.jpg",
        caption: "Expresando tu esencia"
    },
    series: {
        title: "Tu Mente Detectivesca 🔍",
        text: "Las series de misterio despiertan en ti una fascinación especial porque reflejan tu mente analítica y curiosa. Tienes el don de desentrañar pistas antes que los protagonistas y disfrutas del desafío intelectual que presenta cada enigma. Tu amor por el misterio revela una personalidad profunda que siempre busca entender el 'por qué' de las cosas.",
        image: "https://i.pinimg.com/736x/33/39/9d/33399df9faacc5de9e3928f52fabbacf.jpg",
        caption: "Resolviendo misterios"
    },
    paisajes: {
        title: "Tu Conexión con la Belleza 🌸",
        text: "Los paisajes tienen un encanto que pocas personas logran percibir. ¿Acaso los pequeños detalles visuales tienen un significado? No te sabría responder, ya que solo tú puedes dar respuesta y valor a tu opinión."+"<br>"+"Las flores forman parte de los paisajes, y tú, mi buena amiga, las sabes apreciar. Esto demuestra que conoces la delicadeza, la paz, la esperanza, la perseverancia y el esfuerzo de seguir firme ante los momentos difíciles y de alegrarte por los buenos.",
        image: "https://i.pinimg.com/736x/99/e6/d1/99e6d191e4dbe673cdc74b493abd87bb.jpg",
        caption: "Belleza en cada pétalo"
    },
    social: {
        title: "Tu Don para Conectar 💬",
        text: "Tomaré el atrevimiento de dar mi opinión sobre cómo te relacionas con los demás, Srta. Selectiva."+"<br>"+"Desde hace tiempo, has conocido a muchas personas, pero pocas se han quedado. Esto no es porque hayas hecho algo malo, sino porque tu compañía es mucho más valiosa que la de otras personas, lo que causa envidia u otros sentimientos negativos."+"<br>"+"Nunca te preocupes por quién viene o por quién se va; solo concéntrate en quien se queda y te apoya, tal como tú lo harías por él o ella.",
        image: "https://i.pinimg.com/736x/3c/e2/8c/3ce28c195918bd3a66d2b179fe1e8507.jpg",
        caption: "Eres mi vinculo mas importante"
    },
    animales: {
        title: "Tu Corazón Tierno 🐶",
        text: "Los animales son una parte fundamental del crecimiento personal. Destacan por enseñarnos un profundo sentido de la responsabilidad y un amor puro."+"<br>"+"En tu caso, se nota ese amor genuino por el cuidado y el bienestar de las mascotas, tanto las tuyas como las ajenas. Es admirable que tengas presente que la vida de los animales es tan valiosa como la de los humanos; un corazón como el tuyo vale por mil."+"<br>"+"No olvidemos que estos seres nos acompañan como fieles compañeros, pero es nuestra responsabilidad educarlos para que vivan en armonía con nosotros.",
        image: "https://i.pinimg.com/1200x/5c/86/cb/5c86cbbba4993638724cebb1646f38c4.jpg",
        caption: "Amor incondicional"
    }
};

function openModal(cardType) {
    const modal = document.getElementById('modalOverlay');
    const modalBody = document.getElementById('modalBody');
    const content = modalContents[cardType];

    let imageContent;
    // Comprueba si la cadena es una URL
    if (content.image.startsWith('http') || content.image.startsWith('/') || content.image.startsWith('./')) {
        imageContent = `<img src="${content.image}" alt="${content.caption}" class="modal-image">`;
    } else {
        // Asume que es un emoji o texto y lo muestra en un div
        imageContent = `<div class="modal-image-placeholder">${content.image}</div>`;
    }

    modalBody.innerHTML = `
        <h2 class="modal-title">${content.title}</h2>
        <div class="modal-text">${content.text}</div>
        <div class="modal-image-column">
            <div class="modal-image-section">
                ${imageContent}
            </div>
            <p class="image-caption">${content.caption}</p>
        </div>
    `;

    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('modalOverlay').style.display = 'none';
}

// Cerrar modal con ESC
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Cerrar modal haciendo clic fuera del contenido
document.getElementById('modalOverlay').addEventListener('click', function (e) {
    if (e.target === this) {
        closeModal();
    }
});

// Navegación a la siguiente página
document.getElementById('nextBtn').addEventListener('click', function () {
    window.location.href = '../Parte3/ParaTi.html';
});

// Efecto de partículas brillantes
function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.innerHTML = '✨';
    sparkle.style.position = 'fixed';
    sparkle.style.left = Math.random() * 100 + 'vw';
    sparkle.style.top = '100vh';
    sparkle.style.fontSize = (Math.random() * 15 + 8) + 'px';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.zIndex = '1';
    sparkle.style.animation = 'sparkleFloat 10s linear infinite';
    sparkle.style.opacity = Math.random() * 0.8 + 0.2;

    document.body.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 10000);
}

// Crear destellos periódicamente
setInterval(createSparkle, 1500);

// Animación para los destellos
const sparkleStyle = document.createElement('style');
sparkleStyle.textContent = `
    @keyframes sparkleFloat {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(720deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(sparkleStyle);

// Efecto de hover suave en las tarjetas
document.querySelectorAll('.flip-card').forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s ease';
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'scale(1)';
    });
});

// Animación de entrada escalonada para las tarjetas
document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.flip-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';

        setTimeout(() => {
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
});
