document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified

const menuButton = document.getElementById("menu");
const nav = document.querySelector("nav");

menuButton.addEventListener("click", () => {
  if (nav.style.display === "flex") {
    nav.style.display = "none";
    menuButton.innerHTML = "&#9776;";
  } else {
    nav.style.display = "flex";
    menuButton.innerHTML = "&#x2715;";
  }
});