// Toggle dark/light mode
function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme") || "light";
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);

  // Gradient only in light mode
  const gradientText = document.querySelector(".gradient-text");
  if (gradientText) {
    gradientText.style.animation = next === "light"
      ? "gradientAnimation 2s infinite linear alternate"
      : "none";
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  document.documentElement.setAttribute("data-theme", prefersDark ? "dark" : "light");
});