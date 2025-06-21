document.addEventListener('DOMContentLoaded', () => {

    /**
     * Lógica para o Menu Hamburger.
     */
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navLinks = document.getElementById('nav-links');
    if (hamburgerBtn && navLinks) {
        hamburgerBtn.addEventListener('click', () => {
            const isOpened = navLinks.classList.toggle('active');
            hamburgerBtn.classList.toggle('active');
            hamburgerBtn.setAttribute('aria-expanded', isOpened);
        });
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburgerBtn.classList.remove('active');
                hamburgerBtn.setAttribute('aria-expanded', 'false');
            });
        });
    }

    /**
     * Altera o fundo do Header durante o scroll.
     */
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (header) {
            header.classList.toggle('scrolled', window.scrollY > 50);
        }
    });

    /**
     * Inicia o efeito de digitação no subtítulo da seção Hero.
     */
    const typedTarget = document.getElementById('typed-subtitle');
    if (typedTarget) {
        new Typed(typedTarget, {
            strings: ['Especialista TOTVS Fluig', 'Agentes de IA N8N', 'Desenvolvedor Front-End'],
            typeSpeed: 50, backSpeed: 30, backDelay: 1500, startDelay: 500, loop: true,
        });
    }

    /**
     * Animação de elementos ao aparecerem na tela (scroll).
     */
    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        if (el) { scrollObserver.observe(el); }
    });

    /**
     * Adiciona um atraso de animação incremental às estatísticas na seção Hero.
     */
    document.querySelectorAll('.stat').forEach((stat, index) => {
        stat.style.animationDelay = `${index * 0.2}s`;
    });

    /**
     * Inicia a animação de partículas no fundo da seção Hero.
     */
    if (document.getElementById('particles-container')) {
        tsParticles.load("particles-container", {
            fpsLimit: 60,
            interactivity: {
                events: {
                    onHover: { enable: true, mode: "repulse" },
                    onClick: { enable: true, mode: "push" },
                    resize: true,
                },
                modes: {
                    push: { quantity: 4 },
                    repulse: { distance: 150, duration: 0.4 },
                },
            },
            particles: {
                color: { value: "#64ffda" },
                links: { color: "#ffffff", distance: 150, enable: true, opacity: 0.2, width: 1 },
                collisions: { enable: true },
                move: { direction: "none", enable: true, outModes: { default: "bounce" }, random: false, speed: 1, straight: false },
                number: { density: { enable: true, area: 800 }, value: 80 },
                opacity: { value: 0.3 },
                shape: { type: "circle" },
                size: { value: { min: 1, max: 3 } },
            },
            detectRetina: true,
        });
    }

    /**
     * Efeito de brilho (Glare) que segue o mouse nos cards.
     */
    const cards = document.querySelectorAll('.service-card, .feature-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left; // Posição X do mouse dentro do card
            const y = e.clientY - rect.top;  // Posição Y do mouse dentro do card
            card.style.setProperty('--x', `${x}px`);
            card.style.setProperty('--y', `${y}px`);
        });
    });

});
