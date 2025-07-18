
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("show");
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
}

function toggleMusic() {
  const audio = document.getElementById("bgMusic");
  const toggle = document.getElementById("musicToggle");
  if (audio.paused) {
    audio.play();
    toggle.textContent = "🔊";
  } else {
    audio.pause();
    toggle.textContent = "🔇";
  }
}
