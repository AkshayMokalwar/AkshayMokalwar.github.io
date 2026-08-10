document.addEventListener('DOMContentLoaded', () => {
    // 1. Determine who we are celebrating. 
    // You can pass a name via URL like: index.html?name=JohnDoe
    const urlParams = new URLSearchParams(window.location.search);
    const targetName = urlParams.get('name') || 'JohnDoe'; // Default fallback

    initCelebration(targetName);
});

async function initCelebration(targetName) {
    // Fire initial party popper confetti
    fireConfetti();
    
    // Start continuous graffiti/confetti effect
    startContinuousConfetti();

    // Generate floating balloons
    createBalloons(15);

    // Fetch and parse the CSV
    const personData = await fetchCSVData(targetName);
    
    if (personData) {
        document.getElementById('greeting-name').innerText = `Happy Birthday, ${personData.Name}!`;
        document.getElementById('birthday-date').innerText = `Born on: ${personData.Birthday}`;
        
        // Start Slideshow
        startSlideshow(personData.Name);
    } else {
        document.getElementById('greeting-name').innerText = "Happy Birthday!";
        document.getElementById('birthday-date').innerText = "We couldn't find your data, but let's celebrate anyway!";
    }
}

// --- CSV Parsing Logic ---
async function fetchCSVData(targetName) {
    try {
        const response = await fetch('data.csv');
        const csvText = await response.text();
        
        // Split by lines and commas
        const lines = csvText.trim().split('\n');
        const headers = lines[0].split(',');

        for (let i = 1; i < lines.length; i++) {
            const currentLine = lines[i].split(',');
            if (currentLine[0].trim() === targetName) {
                return {
                    Name: currentLine[0].trim(),
                    Birthday: currentLine[1].trim()
                };
            }
        }
        return null; // Name not found
    } catch (error) {
        console.error('Error fetching CSV:', error);
        return null;
    }
}

// --- Image Slideshow Logic ---
// Since we don't have a backend to read a directory, we attempt to load images sequentially (1.jpg, 2.jpg)
function startSlideshow(personName) {
    const imgElement = document.getElementById('slideshow-img');
    const fallbackElement = document.getElementById('slideshow-fallback');
    
    let validImages = [];
    let currentImageIndex = 0;
    
    // Function to check if an image exists
    function checkImage(index) {
        const img = new Image();
        img.src = `images/${personName}/${index}.jpg`;
        
        img.onload = () => {
            validImages.push(img.src);
            checkImage(index + 1); // Check the next image
            
            // If this is the first valid image, display it immediately
            if (validImages.length === 1) {
                imgElement.src = validImages[0];
                imgElement.style.display = 'block';
                fallbackElement.style.display = 'none';
                
                // Start the cycle interval
                setInterval(() => {
                    if (validImages.length > 1) {
                        currentImageIndex = (currentImageIndex + 1) % validImages.length;
                        imgElement.src = validImages[currentImageIndex];
                    }
                }, 4000); // Change image every 4 seconds
            }
        };
        
        img.onerror = () => {
            // Stop checking when an image fails to load
            if (validImages.length === 0) {
                fallbackElement.innerHTML = "<p>No images found.</p>";
            }
        };
    }

    checkImage(1); // Start checking at 1.jpg
}

// --- Animation Effects ---
function fireConfetti() {
    confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 },
        colors: ['#ff007f', '#66fcf1', '#c5c6c7']
    });
}

function startContinuousConfetti() {
    // Lightweight continuous snowfall-like confetti
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
        
        // Randomize position, color, and animation duration
        balloon.style.left = `${Math.random() * 100}vw`;
        balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        const duration = Math.random() * 5 + 5; // 5 to 10 seconds
        balloon.style.animationDuration = `${duration}s`;
        balloon.style.animationDelay = `${Math.random() * 2}s`;
        
        container.appendChild(balloon);

        // Remove balloon from DOM after animation completes to save memory
        setTimeout(() => {
            balloon.remove();
        }, (duration + 2) * 1000);
    }
}