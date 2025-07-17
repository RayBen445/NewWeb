// js/main.js

// Toggle dark/light mode
function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme") || "light";
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);

  // Toggle animated gradient only in light mode
  const gradientText = document.querySelector(".gradient-text");
  if (gradientText) {
    if (next === "dark") {
      gradientText.style.animation = "none";
    } else {
      gradientText.style.animation = "gradientAnimation 2s infinite linear alternate";
    }
  }
}

// Optional: Set theme based on system preference on first load
window.addEventListener("DOMContentLoaded", () => {
  const userPref = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  if (!document.documentElement.getAttribute("data-theme")) {
    document.documentElement.setAttribute("data-theme", userPref);
  }
});
