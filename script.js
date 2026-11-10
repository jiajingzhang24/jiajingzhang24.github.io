// ===== 粒子背景 =====
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', resize);

let particles = [];

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    }

    draw() {
        ctx.fillStyle = 'rgba(0,255,255,0.7)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function initParticles() {
    particles = [];
    for (let i = 0; i < 150; i++) {
        particles.push(new Particle());
    }
}
initParticles();

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.update();
        p.draw();
    });
    requestAnimationFrame(animate);
}
animate();

// ===== 卡片点击交互 =====
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        card.style.background = `hsl(${Math.random()*360}, 70%, 50%)`;
    });
});

// ===== 魔法按钮 =====
const btn = document.getElementById('magicBtn');
const tip = document.getElementById('tip');
const messages = [
    '🎉 魔法已触发！',
    '✨ 你发现了隐藏彩蛋！',
    '🚀 网页能量 +100%',
    '🌈 炫酷值拉满！',
    '🎨 CSS + JS = 魔法'
];

btn.addEventListener('click', () => {
    tip.textContent = messages[Math.floor(Math.random() * messages.length)];
    document.body.style.animation = 'none';
    setTimeout(() => {
        document.body.style.animation = 'pulse 0.5s ease';
    }, 10);
});
