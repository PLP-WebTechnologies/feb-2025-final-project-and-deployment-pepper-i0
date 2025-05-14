document.addEventListener('DOMContentLoaded', () => {
  alert("Welcome to My Blog!");
});

document.getElementById('contactForm').addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Thank you for contacting us! We will get back to you soon.');
      this.reset(); // Clear the form
    });

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Thank you for contacting us!');
      this.reset();
    });
  }
});