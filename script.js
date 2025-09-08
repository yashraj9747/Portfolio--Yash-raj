// Animate logo color change
const logo = document.getElementById("animated-logo");
const toggleBtn = document.getElementById("dark-toggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Change button icon
  toggleBtn.textContent = document.body.classList.contains("dark-mode") ? "+" : "-";
});

