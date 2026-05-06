const startBtn = document.getElementById('start-btn');
const overlay = document.getElementById('overlay');
const music = document.getElementById('bg-music');
const mainCard = document.getElementById('main-card');

// Iniciar Experiencia
startBtn.onclick = () => {
    // Intenta reproducir la música de Bruno Mars
    music.play().catch(e => console.log("Música esperando interacción"));
    
    overlay.style.opacity = '0';
    setTimeout(() => {
        overlay.style.display = 'none';
        mainCard.classList.remove('hidden');
    }, 1000);
};

// Control de Modales (Cartas)
const configCartas = {
    'btn-carta-1': 'modal-1',
    'btn-carta-2': 'modal-2'
};

Object.entries(configCartas).forEach(([btnId, modalId]) => {
    const btn = document.getElementById(btnId);
    const modal = document.getElementById(modalId);
    
    if(btn && modal) {
        btn.onclick = () => modal.classList.add('show');
    }
});

// Cerrar modales al hacer clic en la X
document.querySelectorAll('.close-btn').forEach(btn => {
    btn.onclick = () => {
        const id = btn.getAttribute('data-modal');
        document.getElementById(id).classList.remove('show');
    };
});

// Cerrar al hacer clic fuera del papel de la carta
window.onclick = (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.classList.remove('show');
    }
};