const birthdayWishes = [
    "Wishing you a day filled with love, laughter, and your favorite things!",
    "May this new chapter bring you endless joy, success, and beautiful memories.",
    "Sending you warmest wishes for a fantastic birthday and an incredible year ahead!",
    "Cheers to another year of great achievements and unforgettable moments!"
];

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const targetName = urlParams.get('name') || 'JohnDoe';

    initCelebration(targetName);
});

async function initCelebration(targetName) {
    // 1. Start Infinite Continuous Party Poppers / Confetti Loop
    startContinuousPoppers();

    // 2. Start Infinite Continuous Balloons Spawner Loop
    startContinuousBalloons();

    // 3. Fetch and setup person data
    const personData = await fetchCSVData(targetName);

    if (personData) {
        document.getElementById('greeting-name').innerText = `Happy Birthday, ${personData.Name}!`;
        document.getElementById('birthday-date').innerText = personData.Birthday ? `Born on: ${personData.Birthday}` : '';
        startSlideshow(personData.Name);
        setupHandwrittenWish(personData.Name);
    } else {
        document.getElementById('greeting-name').innerText = "Happy Birthday!";
        document.getElementById('birthday-date').innerText = "Wishing you a fantastic year ahead!";
        startSlideshow(targetName);
        setupHandwrittenWish("Friend");
    }
}

async function fetchCSVData(targetName) {
    try {
        const response = await fetch('data.csv');
        if (!response.ok) return null;

        const csvText = await response.text();
        const lines = csvText.trim().split('\n');

        for (let i = 1; i < lines.length; i++) {
            const currentLine = lines[i].split(',');
            if (currentLine[0] && currentLine[0].trim().toLowerCase() === targetName.toLowerCase()) {
                return {
                    Name: currentLine[0].trim(),
                    Birthday: currentLine[1] ? currentLine[1].trim() : ''
                };
            }
        }
        return null;
    } catch (error) {
        console.error('Error fetching CSV:', error);
        return null;
    }
}

function startSlideshow(personName) {
    const imgElement = document.getElementById('slideshow-img');
    const fallbackElement = document.getElementById('slideshow-fallback');

    const extensions = ['png', 'jpg', 'jpeg', 'webp'];
    let validImages = [];
    let currentImageIndex = 0;

    function checkImageForNum(index) {
        let extIndex = 0;

        function tryNextExtension() {
            if (extIndex >= extensions.length) {
                if (validImages.length === 0) {
                    fallbackElement.innerHTML = "<p>No images found.</p>";
                }
                return;
            }

            const ext = extensions[extIndex];
            const testImg = new Image();
            const srcPath = `images/${personName}/${index}.${ext}`;
            testImg.src = srcPath;

            testImg.onload = () => {
                validImages.push(srcPath);

                if (validImages.length === 1) {
                    imgElement.src = validImages[0];
                    imgElement.style.display = 'block';
                    fallbackElement.style.display = 'none';

                    setInterval(() => {
                        if (validImages.length > 1) {
                            currentImageIndex = (currentImageIndex + 1) % validImages.length;
                            imgElement.src = validImages[currentImageIndex];
                        }
                    }, 4000);
                }

                checkImageForNum(index + 1);
            };

            testImg.onerror = () => {
                extIndex++;
                tryNextExtension();
            };
        }

        tryNextExtension();
    }

    checkImageForNum(1);
}

// Dynamic Quill Pen Writing Animation
function setupHandwrittenWish(name) {
    const wishElement = document.getElementById('handwritten-wish');
    const quill = document.getElementById('quill-icon');
    const wishWrapper = document.querySelector('.wish-wrapper');

    const randomWish = birthdayWishes[Math.floor(Math.random() * birthdayWishes.length)];
    const fullText = `Dear ${name},\n${randomWish}`;

    wishElement.innerHTML = '';
    let index = 0;

    setTimeout(() => {
        if (quill) quill.classList.add('writing');

        function typeChar() {
            if (index < fullText.length) {
                const char = fullText.charAt(index);
                
                wishElement.innerHTML = `${escapeHTML(fullText.substring(0, index))}<span id="type-cursor">${escapeHTML(char === '\n' ? ' ' : char)}</span>`;

                const cursorSpan = document.getElementById('type-cursor');
                if (cursorSpan && quill && wishWrapper) {
                    const wrapperRect = wishWrapper.getBoundingClientRect();
                    const cursorRect = cursorSpan.getBoundingClientRect();

                    const relativeLeft = cursorRect.right - wrapperRect.left;
                    const relativeTop = cursorRect.top - wrapperRect.top;

                    quill.style.left = `${relativeLeft - 5}px`;
                    quill.style.top = `${relativeTop - 25}px`;
                }

                index++;
                setTimeout(typeChar, char === ' ' || char === '\n' ? 80 : 50);
            } else {
                wishElement.innerText = fullText;
                if (quill) {
                    quill.classList.remove('writing');
                    quill.style.left = 'calc(100% - 20px)';
                    quill.style.top = 'calc(100% - 20px)';
                }
            }
        }

        typeChar();
    }, 1000);
}

function escapeHTML(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
/* --- INFINITE MULTI-COLOR POPPERS & CONFETTI LOOP --- */

// Rich vibrant color palette for side and main poppers
const popperColors = [
    '#ff007f', // Vibrant Pink
    '#66fcf1', // Neon Cyan
    '#f1c40f', // Bright Gold
    '#9b59b6', // Royal Purple
    '#e74c3c', // Festive Red
    '#2ecc71', // Emerald Green
    '#ff9f43'  // Coral Orange
];

function startContinuousPoppers() {
    // 1. Initial Multi-Color Blast
    fireConfetti();

    // 2. Periodic Main Center Popper (Every 3.5 Seconds)
    setInterval(() => {
        fireConfetti();
    }, 3500);

    // 3. Side Continuous Multi-Color Streams (Left & Right)
    function frame() {
        // Left side popper shooting inward
        confetti({
            particleCount: 2,
            angle: 60,
            spread: 65,
            origin: { x: 0, y: 0.7 },
            colors: getRandomColors(3) // Picks 3 random dynamic colors each frame
        });

        // Right side popper shooting inward
        confetti({
            particleCount: 2,
            angle: 120,
            spread: 65,
            origin: { x: 1, y: 0.7 },
            colors: getRandomColors(3) // Picks 3 random dynamic colors each frame
        });

        requestAnimationFrame(frame);
    }
    frame();
}

// Center screen main popper burst
function fireConfetti() {
    confetti({
        particleCount: 120,
        spread: 100,
        origin: { y: 0.6 },
        colors: popperColors
    });
}

// Helper to pick random colors from the palette for every burst
function getRandomColors(count) {
    const shuffled = [...popperColors].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

/* --- INFINITE BALLOONS LOOP --- */
function startContinuousBalloons() {
    const container = document.getElementById('balloon-container');
    const colors = ['#ff007f', '#66fcf1', '#f1c40f', '#9b59b6', '#e74c3c'];

    function spawnSingleBalloon() {
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');
        balloon.style.left = `${Math.random() * 92}vw`; // Screen margin maintain karne ke liye
        balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

        const duration = Math.random() * 4 + 6; // 6 to 10 seconds float duration
        balloon.style.animationDuration = `${duration}s`;

        container.appendChild(balloon);

        // Screen ke bahar nikalte hi memory clean karne ke liye DOM se remove
        setTimeout(() => {
            balloon.remove();
        }, duration * 1000);
    }

    // Initial batch screen ko khali na dikhane ke liye
    for (let i = 0; i < 6; i++) {
        setTimeout(spawnSingleBalloon, i * 300);
    }

    // Har 700ms me continuous naya balloon generate hota rahega infinitely
    setInterval(spawnSingleBalloon, 700);
}