document.addEventListener("DOMContentLoaded", () => {

    /**
     * Lógica para o Menu Hamburger.
     */
    const initMobileMenu = () => {
        const hamburgerBtn = document.getElementById('hamburger-btn');
        const navLinks = document.getElementById('nav-links');
        if (!hamburgerBtn || !navLinks) return;

        hamburgerBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburgerBtn.classList.toggle('active');
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburgerBtn.classList.remove('active');
            });
        });
    };

    /**
     * Altera o fundo do Header durante o scroll.
     */
    const initHeaderScroll = () => {
        const header = document.querySelector('header');
        if (header) {
            window.addEventListener('scroll', () => {
                header.classList.toggle('scrolled', window.scrollY > 50);
            });
        }
    };

    /**
     * Inicia o efeito de partículas original (com a cor nova).
     */
    const initParticles = () => {
        if (document.getElementById('particles-container')) {
            tsParticles.load("particles-container", {
                fpsLimit: 60,
                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: "repulse"
                        },
                        onClick: {
                            enable: true,
                            mode: "push"
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4
                        },
                        repulse: {
                            distance: 150,
                            duration: 0.4
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#EB4C89"
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.2,
                        width: 1
                    },
                    collisions: {
                        enable: true
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce"
                        },
                        random: false,
                        speed: 1,
                        straight: false
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800
                        },
                        value: 80
                    },
                    opacity: {
                        value: 0.3
                    },
                    shape: {
                        type: "circle"
                    },
                    size: {
                        value: {
                            min: 1,
                            max: 3
                        }
                    },
                },
                detectRetina: true,
            });
        }
    };

    /**
     * Animação de elementos ao aparecerem na tela (scroll).
     */
    const initScrollAnimations = () => {
        const scrollObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const delay = parseInt(entry.target.getAttribute('data-delay') || '0', 10);
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, delay * 150);
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });

        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            if (el) {
                scrollObserver.observe(el);
            }
        });
    };

    // --- INICIALIZAÇÃO DE TODAS AS FUNÇÕES ---
    initMobileMenu();
    initHeaderScroll();
    initParticles();
    initScrollAnimations();
});
