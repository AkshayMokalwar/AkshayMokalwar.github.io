const birthdayWishes = [
    "Wishing you a day filled with love, laughter, and your favorite things!",
    "May this new chapter bring you endless joy, success, and beautiful memories.",
    "Sending you warmest wishes for a fantastic birthday and an incredible year ahead!",
    "Cheers to another year of great achievements and unforgettable moments!"
];

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const targetName = urlParams.get('name'); // Dynamic name parameter from URL (or null)

    initCelebration(targetName);
});

async function initCelebration(targetName) {
    // 1. Start Continuous Confetti Poppers
    startContinuousPoppers();

    // 2. Start Continuous Balloons
    startContinuousBalloons();

    // 3. Fetch Person Data dynamically from CSV
    const personData = await fetchCSVData(targetName);
    console.log('Fetched Person Data:', personData);

    if (personData && personData.Name) {
        document.getElementById('greeting-name').innerText = `Happy Birthday, ${personData.Name}!`;
        document.getElementById('birthday-date').innerText = personData.Birthday ? `Born on: ${personData.Birthday}` : '';
        startSlideshow(personData.Name);
        setupHandwrittenWish(personData.Name);
    } else {
        document.getElementById('greeting-name').innerText = "Happy Birthday!";
        document.getElementById('birthday-date').innerText = "Wishing you a fantastic year ahead!";
        startSlideshow(targetName || 'Friend');
        setupHandwrittenWish("Friend");
    }
}

async function fetchCSVData(targetName) {
    try {
        const response = await fetch('data.csv');
        if (!response.ok) return null;

        const csvText = await response.text();
        const lines = csvText.trim().split(/\r?\n/).filter(line => line.trim() !== '');

        if (lines.length < 2) return null; // No data rows found

        // Search for specific name if provided via ?name= parameter
        if (targetName) {
            for (let i = 1; i < lines.length; i++) {
                const currentLine = lines[i].split(',');
                if (currentLine[0] && currentLine[0].trim().toLowerCase() === targetName.toLowerCase()) {
                    return {
                        Name: currentLine[0].trim(),
                        Birthday: currentLine[1] ? currentLine[1].trim() : ''
                    };
                }
            }
        }

        // Default behavior: Fetch the FIRST person entry dynamically from data.csv
        const firstRow = lines[1].split(',');
        if (firstRow[0] && firstRow[0].trim()) {
            return {
                Name: firstRow[0].trim(),
                Birthday: firstRow[1] ? firstRow[1].trim() : ''
            };
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
const popperColors = [
    '#ff007f', '#66fcf1', '#f1c40f', '#9b59b6', '#e74c3c', '#2ecc71', '#ff9f43'
];

function startContinuousPoppers() {
    fireConfetti();

    setInterval(() => {
        fireConfetti();
    }, 3500);

    function frame() {
        confetti({
            particleCount: 2,
            angle: 60,
            spread: 65,
            origin: { x: 0, y: 0.7 },
            colors: getRandomColors(3)
        });

        confetti({
            particleCount: 2,
            angle: 120,
            spread: 65,
            origin: { x: 1, y: 0.7 },
            colors: getRandomColors(3)
        });

        requestAnimationFrame(frame);
    }
    frame();
}

function fireConfetti() {
    confetti({
        particleCount: 120,
        spread: 100,
        origin: { y: 0.6 },
        colors: popperColors
    });
}

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
        balloon.style.left = `${Math.random() * 92}vw`;
        balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

        const duration = Math.random() * 4 + 6;
        balloon.style.animationDuration = `${duration}s`;

        container.appendChild(balloon);

        setTimeout(() => {
            balloon.remove();
        }, duration * 1000);
    }

    for (let i = 0; i < 6; i++) {
        setTimeout(spawnSingleBalloon, i * 300);
    }

    setInterval(spawnSingleBalloon, 700);
}