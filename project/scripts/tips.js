document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

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

const tips = [
    {
        tipName: "Start with easy materials",
        tip: "Use medium-weight yarn and a matching hook (around 5 mm). It's easier to see your stitches and practice",
        imageUrl: "https://images.pexels.com/photos/4792084/pexels-photo-4792084.jpeg"
    },
    {
        tipName: "Learn basic stitches first",
        tip: "Master chain, single crochet, and double crochet. With these, you can make scarves, coasters, or small amigurumi.",
        imageUrl: "https://images.pexels.com/photos/4792086/pexels-photo-4792086.jpeg"
    },
    {
        tipName: "Keep stitches even",
        tip: "Hold your yarn consistently and count your stitches each row. This keeps your work neat and prevents mistakes.",
        imageUrl: "https://images.pexels.com/photos/3945638/pexels-photo-3945638.jpeg"
    }
];

function displayTips(list) {
    const container = document.getElementById("tips-cards");
    container.innerHTML = "";

    list.forEach(t => {
        const card = document.createElement("section");
        card.classList.add("tips-card");

        card.innerHTML = `
            <h3>${t.tipName}</h3>
            <p>${t.tip}</p>
            <img src="${t.imageUrl}" alt="${t.tipName}" loading="lazy">
        `;

        container.appendChild(card);
    });
}

displayTips(tips);