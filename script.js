document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default refresh

    document.getElementById("confirmation-message").style.display = "block";
});
// Add this in a <script> tag or JS file
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll('.appear');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  });
  elements.forEach(el => observer.observe(el));
});