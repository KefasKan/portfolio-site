document.getElementById("contact").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("form-status").innerText = "Message sent! I'll get back to you soon.";
});
