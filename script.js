// Get references to HTML elements
const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('playPauseBtn');
const volumeControl = document.getElementById('volumeControl');

// Function to attempt to play audio
async function attemptPlayAudio() {
    try {
        await audio.play();
        playPauseBtn.textContent = 'Pause'; // Update button text to 'Pause' when audio is playing
    } catch (error) {
        console.error('Autoplay was prevented:', error);
        // Optionally provide a visual or interactive cue to the user
        playPauseBtn.textContent = 'Play'; // Default to 'Play'
    }
}

// Play audio automatically when the page loads
window.addEventListener('load', () => {
    attemptPlayAudio();
});

// Toggle play/pause
playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
        attemptPlayAudio();
    } else {
        audio.pause();
        playPauseBtn.textContent = 'Play';
    }
});

// Adjust volume
volumeControl.addEventListener('input', () => {
    audio.volume = volumeControl.value;
});
