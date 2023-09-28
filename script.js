//your JS code here. If required.
// Get all buttons with the class "btn"
const buttons = document.querySelectorAll('.btn');
const stopButton = document.querySelector('.stop');
const audioElements = {};

// Load audio elements
buttons.forEach(button => {
    const soundFile = button.getAttribute('data-sound');
    const audio = new Audio(`sounds/${soundFile}`);
    audioElements[soundFile] = audio;

    // Add click event listener to each button
    button.addEventListener('click', () => {
        stopAllSounds();
        audio.play();
    });
});

// Add click event listener to the stop button
stopButton.addEventListener('click', () => {
    stopAllSounds();
});

// Function to stop all playing sounds
function stopAllSounds() {
    for (const sound in audioElements) {
        if (audioElements.hasOwnProperty(sound)) {
            audioElements[sound].pause();
            audioElements[sound].currentTime = 0;
        }
    }
}

