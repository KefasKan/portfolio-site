// Bible Verse API Fetch
fetch("https://bible-api.com/john 3:16")
    .then(response => response.json())
    .then(data => {
        document.getElementById("bible-verse").innerText = data.text;
    });

// Scroll Animation Trigger
document.addEventListener("DOMContentLoaded", function () {
    let sections = document.querySelectorAll("section");

    function revealSections() {
        sections.forEach(section => {
            let position = section.getBoundingClientRect().top;
            let windowHeight = window.innerHeight;
            if (position < windowHeight - 50) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener("scroll", revealSections);
    revealSections(); // Run on page load
});
