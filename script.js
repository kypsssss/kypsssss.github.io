// Get references to HTML elements
const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('playPauseBtn');
const volumeControl = document.getElementById('volumeControl');

// Function to play the audio
function playAudio() {
    audio.play().catch(error => {
        console.error('Autoplay was prevented:', error);
    });
}

// Play audio automatically when the page loads
window.addEventListener('load', () => {
    playAudio();
});

// Toggle play/pause
playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
        playAudio();
        playPauseBtn.textContent = 'Pause';
    } else {
        audio.pause();
        playPauseBtn.textContent = 'Play';
    }
});

// Adjust volume
volumeControl.addEventListener('input', () => {
    audio.volume = volumeControl.value;
});
