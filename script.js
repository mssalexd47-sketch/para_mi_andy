const startBtn = document.getElementById('start-btn');
const overlay = document.getElementById('overlay');
const music = document.getElementById('bg-music');
const mainCard = document.getElementById('main-card');

startBtn.onclick = () => {
    music.play().catch(() => console.log("Esperando interacción"));
    overlay.style.opacity = '0';
    setTimeout(() => {
        overlay.style.display = 'none';
        mainCard.classList.remove('hidden');
    }, 1000);
};

function createParticles() {
    for (let i = 0; i < 40; i++) {
        let p = document.createElement('div');
        p.className = 'particle';
        let size = Math.random() * 3 + 1 + 'px';
        p.style.width = size; p.style.height = size;
        p.style.left = Math.random() * 100 + 'vw';
        p.style.top = Math.random() * 100 + 'vh';
        
        let isGold = Math.random() > 0.7;
        p.style.backgroundColor = isGold ? '#ffcc33' : '#00d4ff';
        p.style.boxShadow = `0 0 8px ${isGold ? '#ffcc33' : '#00d4ff'}`;
        
        p.style.animationDuration = (Math.random() * 5 + 5) + 's';
        p.style.animationDelay = Math.random() * 5 + 's';
        document.body.appendChild(p);
    }
}

const configCartas = { 'btn-carta-1': 'modal-1', 'btn-carta-2': 'modal-2' };
Object.entries(configCartas).forEach(([btnId, modalId]) => {
    document.getElementById(btnId).onclick = () => document.getElementById(modalId).classList.add('show');
});

document.querySelectorAll('.close-btn').forEach(btn => {
    btn.onclick = () => document.getElementById(btn.getAttribute('data-modal')).classList.remove('show');
});

window.onclick = (e) => { if (e.target.classList.contains('modal')) e.target.classList.remove('show'); };
window.onload = createParticles;
