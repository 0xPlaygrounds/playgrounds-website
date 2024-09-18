document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Scroll indicator
    const scrollIndicator = document.createElement('div');
    scrollIndicator.className = 'scroll-indicator';
    document.body.appendChild(scrollIndicator);

    // Section visibility
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Update scroll indicator and navbar background
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        scrollIndicator.style.width = scrolled + '%';

        // Change navbar background on scroll
        const navbar = document.querySelector('nav');
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
        } else {
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        }
    });

    // Parallax effect for header
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        header.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
    });

    // Random color change for tech stack items on hover
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8'];
    const techItems = document.querySelectorAll('.tech-item');
    techItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            item.style.backgroundColor = randomColor;
        });
        item.addEventListener('mouseout', () => {
            item.style.backgroundColor = '';
        });
    });

    // Typing effect for header text
    const headerText = document.querySelector('header p.typewriter');
    const text = "Empowering AI Developers with Open-Source Tools";
    headerText.textContent = ''; // Clear the existing text
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            headerText.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        } else {
            // Remove the blinking cursor effect after typing is complete
            headerText.style.borderRight = 'none';
        }
    }

    typeWriter();

    // Dynamic background effect
    const canvas = document.getElementById('headerCanvas');
    const ctx = canvas.getContext('2d');
    let particlesArray;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Particle {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.size = Math.random() * 5 + 1;
            this.speedX = Math.random() * 3 - 1.5;
            this.speedY = Math.random() * 3 - 1.5;
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.size > 0.2) this.size -= 0.1;
        }
        draw() {
            ctx.fillStyle = 'rgba(255,255,255,0.8)';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function init() {
        particlesArray = [];
        for (let i = 0; i < 100; i++) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height;
            particlesArray.push(new Particle(x, y));
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            particlesArray[i].draw();
        }
        requestAnimationFrame(animate);
    }

    init();
    animate();

    // Run demo for multiple demo blocks
    const runDemo = (demoNumber) => {
        const outputElement = document.getElementById(`demoOutput${demoNumber}`);
        outputElement.innerHTML = 'Running demo...';

        setTimeout(() => {
            outputElement.innerHTML = `Translation: ${
                demoNumber === 1
                    ? 'Bonjour, le monde!'
                    : demoNumber === 2
                    ? 'Hello, world!'
                    : 'Hello, world!'
            }`;
        }, 2000);
    };

    // Attach event listeners to Run Demo buttons
    document.querySelectorAll('.run-demo-btn').forEach((button, index) => {
        button.addEventListener('click', () => runDemo(index + 1));
    });

    // Syntax highlighting for code
    hljs.highlightAll();

    // Accessibility: Skip to main content
    const skipLink = document.createElement('a');
    skipLink.href = '#main';
    skipLink.className = 'sr-only focus:not-sr-only';
    skipLink.textContent = 'Skip to main content';
    document.body.insertBefore(skipLink, document.body.firstChild);
});
