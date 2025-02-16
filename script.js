document.addEventListener("DOMContentLoaded", function() {
    let music = document.getElementById("music-player");
    music.volume = 0.5; // Set initial volume to 50%
    
    // Try to play music (needed for autoplay policies in some browsers)
    let playPromise = music.play();
    if (playPromise !== undefined) {
        playPromise.catch(() => {
            console.log("Autoplay prevented. User interaction needed.");
        });
    }
});
