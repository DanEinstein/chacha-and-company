document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default refresh

    document.getElementById("confirmation-message").style.display = "block";
});
