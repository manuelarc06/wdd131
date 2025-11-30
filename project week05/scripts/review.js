let count = Number(localStorage.getItem("reviews")) || 0;
count++;
localStorage.setItem("reviews", count);

document.getElementById("counter").textContent =
    `You have submitted ${count} reviews.`;

document.getElementById("currentyear").textContent =
    new Date().getFullYear();

document.getElementById("lastModified").textContent =
    `Last Modification: ${document.lastModified}`;
