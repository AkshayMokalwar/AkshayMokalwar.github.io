document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const targetName = urlParams.get('name') || 'JohnDoe';

    initCelebration(targetName);
});

async function initCelebration(targetName) {
    fireConfetti();
    startContinuousConfetti();
    createBalloons(15);

    const personData = await fetchCSVData(targetName);
    
    if (personData) {
        document.getElementById('greeting-name').innerText = `Happy Birthday, ${personData.Name}!`;
        document.getElementById('birthday-date').innerText = `Born on: ${personData.Birthday}`;
        startSlideshow(personData.Name);
    } else {
        document.getElementById('greeting-name').innerText = "Happy Birthday!";
        document.getElementById('birthday-date').innerText = "Wishing you a fantastic year ahead!";
        startSlideshow(targetName);
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

// Multi-extension image loader (.png, .jpg, .jpeg, .webp)
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
                // Done checking image index
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
                
                // Check the next image number (index + 1)
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

function fireConfetti() {
    confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 },
        colors: ['#ff007f', '#66fcf1', '#c5c6c7']
    });
}

function startContinuousConfetti() {
    const duration = 15 * 1000;
    const end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 2,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#ff007f', '#66fcf1']
        });
        confetti({
            particleCount: 2,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#ff007f', '#66fcf1']
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}

function createBalloons(count) {
    const container = document.getElementById('balloon-container');
    const colors = ['#ff007f', '#66fcf1', '#f1c40f', '#9b59b6', '#e74c3c'];

    for (let i = 0; i < count; i++) {
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');
        balloon.style.left = `${Math.random() * 100}vw`;
        balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        const duration = Math.random() * 5 + 5;
        balloon.style.animationDuration = `${duration}s`;
        balloon.style.animationDelay = `${Math.random() * 2}s`;
        
        container.appendChild(balloon);

        setTimeout(() => {
            balloon.remove();
        }, (duration + 2) * 1000);
    }
}