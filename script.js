document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggleDarkMode");

  toggleButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    const darkModeOn = document.body.classList.contains("dark-mode");

    toggleButton.textContent = darkModeOn ? "Modo Claro" : "Modo Escuro";
    toggleButton.classList.toggle("btn-outline-dark", darkModeOn);
    toggleButton.classList.toggle("btn-outline-light", !darkModeOn);
  });
});
