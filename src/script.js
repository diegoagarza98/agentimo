document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('command-input');
    const morphShape = document.querySelector('.morph-shape');
    const previewContainer = document.querySelector('.preview-container');
    const featureTags = document.querySelectorAll('.tag');
    const featureCards = document.querySelectorAll('.feature-card');

    // Feature effects mapping
    const featureEffects = {
        'web': {
            text: 'Generating web application framework...',
            class: 'morph-sphere',
            color: '#4a9eff'
        },
        'mobile': {
            text: 'Compiling mobile components...',
            class: 'morph-cube',
            color: '#ff4a4a'
        },
        'api': {
            text: 'Establishing API connections...',
            class: 'morph-prism',
            color: '#ffcc00'
        },
        'ai': {
            text: 'Activating neural networks...',
            class: 'morph-energy',
            color: '#00ff9d'
        }
    };

    // Card effects mapping
    const cardEffects = {
        'Beautiful UI/UX': {
            text: 'Designing interface components...',
            class: 'morph-designer',
            color: '#ff6b9d'
        },
        'Lightning Fast': {
            text: 'Optimizing performance metrics...',
            class: 'morph-speed',
            color: '#ffcc00'
        },
        'Secure by Default': {
            text: 'Implementing security protocols...',
            class: 'morph-shield',
            color: '#4a9eff'
        },
        'Full Stack': {
            text: 'Integrating full stack architecture...',
            class: 'morph-stack',
            color: '#00ff9d'
        }
    };

    // Base states for auto-cycling
    const baseStates = [
        {
            name: 'sphere',
            text: 'Initializing quantum core...',
            class: 'morph-sphere'
        },
        {
            name: 'cube',
            text: 'Assembling neural network matrix...',
            class: 'morph-cube'
        },
        {
            name: 'prism',
            text: 'Calibrating holographic projectors...',
            class: 'morph-prism'
        },
        {
            name: 'energy',
            text: 'Stabilizing fusion reactor...',
            class: 'morph-energy'
        }
    ];

    let currentIndex = 0;
    let isAutoMorphing = true;
    let morphingTimeout;

    // Function to apply morphing effect
    function applyMorphEffect(text, className, color) {
        isAutoMorphing = false;
        clearTimeout(morphingTimeout);

        // Update input text with typing effect
        typeText(input, text);
        
        // Update shape with new class and color
        morphShape.className = 'morph-shape ' + className;
        document.documentElement.style.setProperty('--hologram-blue', color);
        document.documentElement.style.setProperty('--frame-color', color);
        
        // Add particle burst effect
        createParticleBurst(color);
        
        // Resume auto-morphing after delay
        morphingTimeout = setTimeout(() => {
            isAutoMorphing = true;
            document.documentElement.style.setProperty('--hologram-blue', '#0ff');
            document.documentElement.style.setProperty('--frame-color', '#00ffff');
            cycleMorphing();
        }, 3000);
    }

    // Create particle burst effect
    function createParticleBurst(color) {
        const particleCount = 20;
        const container = document.createElement('div');
        container.className = 'particle-burst';
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.background = color;
            particle.style.transform = `rotate(${(360 / particleCount) * i}deg) translateY(-50px)`;
            container.appendChild(particle);
        }
        
        morphShape.appendChild(container);
        setTimeout(() => container.remove(), 1000);
    }

    // Function to cycle through morphing states
    function cycleMorphing() {
        if (!isAutoMorphing) return;
        
        const state = baseStates[currentIndex];
        typeText(input, state.text);
        morphShape.className = 'morph-shape ' + state.class;
        currentIndex = (currentIndex + 1) % baseStates.length;
    }

    // Typing effect for input
    function typeText(element, text) {
        let i = 0;
        element.value = '';
        
        function type() {
            if (i < text.length) {
                element.value += text.charAt(i);
                i++;
                setTimeout(type, 50);
            }
        }
        
        type();
    }

    // Add click handlers to feature tags
    featureTags.forEach(tag => {
        tag.addEventListener('click', (e) => {
            e.preventDefault();
            const feature = tag.getAttribute('href').replace('#', '');
            const effect = featureEffects[feature];
            if (effect) {
                applyMorphEffect(effect.text, effect.class, effect.color);
            }
        });
    });

    // Add click handlers to feature cards
    featureCards.forEach(card => {
        card.addEventListener('click', () => {
            const title = card.querySelector('h3').textContent;
            const effect = cardEffects[title];
            if (effect) {
                applyMorphEffect(effect.text, effect.class, effect.color);
            }
        });
    });

    // Start the morphing cycle
    cycleMorphing();
    setInterval(() => {
        if (isAutoMorphing) {
            cycleMorphing();
        }
    }, 5000);

    // Add hover effect to preview container
    previewContainer.addEventListener('mousemove', (e) => {
        const rect = previewContainer.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        
        const rotateX = (y - 0.5) * 20;
        const rotateY = (x - 0.5) * 20;
        
        morphShape.style.transform = `
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateZ(50px)
        `;
    });

    previewContainer.addEventListener('mouseleave', () => {
        morphShape.style.transform = '';
    });
}); 