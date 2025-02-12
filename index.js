const pads = document.querySelectorAll('.pad');
const sounds = {}; // Object to store the loaded sounds

// Function to load sounds using Howler.js
function loadSound(key, soundFile) {
    sounds[key] = new Howl({
        src: [`sounds/${soundFile}.wav`], // Path to your sound files
        // Optional: Add more formats for better browser compatibility
        // src: [`sounds/${soundFile}.webm`, `sounds/${soundFile}.mp3`, `sounds/${soundFile}.ogg`] 
    });
}

// Load all sounds
pads.forEach(pad => {
    const key = pad.dataset.key;
    const soundFile = pad.dataset.sound;
    loadSound(key, soundFile);
});

// Event listeners for clicks
pads.forEach(pad => {
    pad.addEventListener('click', () => {
        const key = pad.dataset.key;
        if (sounds[key]) {
            sounds[key].play();
        }
    });
});

// Optional: Keyboard support
document.addEventListener('keydown', (event) => {
    const key = event.key.toUpperCase();
    if (sounds[key]) {
        sounds[key].play();
    }
});
