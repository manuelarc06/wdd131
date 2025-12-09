document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

const menuButton = document.getElementById("menu");
const nav = document.querySelector("nav");

menuButton.addEventListener("click", () => {
    if (nav.style.display === "flex") {
        nav.style.display = "none";
        menuButton.innerHTML = "&#9776;"; // ☰
    } else {
        nav.style.display = "flex";
        menuButton.innerHTML = "&#x2715;"; // ✕
    }
});

const tips = [
    {
        tipName: "Start with easy materials",
        tip: "Use medium-weight yarn and basic hooks to practice your stitches.",
        imageUrl: "https://images.pexels.com/photos/4792084/pexels-photo-4792084.jpeg"
    },
    {
        tipName: "Learn basic stitches first",
        tip: "Master chain, single crochet, and double crochet before avanzing.",
        imageUrl: "https://images.pexels.com/photos/4792086/pexels-photo-4792086.jpeg"
    },
    {
        tipName: "Keep stitches even",
        tip: "Hold your yarn consistently and keep the tension uniform for a neat finish.",
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

        localStorage.setItem('lastTipViewed', JSON.stringify(t));
    });
}

const lastTip = JSON.parse(localStorage.getItem('lastTipViewed'));
if (lastTip) {
    console.log("last tip view:", lastTip.tipName);
}

displayTips(tips);

const form = document.getElementById('form-tips');
const response = document.getElementById('response');

form.addEventListener('submit', function(e) {
    e.preventDefault(); 

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const topic = document.getElementById('topic').value;
    const selectedLevel = document.querySelector('input[name="level"]:checked');
    const level = selectedLevel ? selectedLevel.value : "Not selected";
    const message = document.getElementById('message').value;
    const subscribe = document.getElementById('subscribe').checked;

    response.innerHTML = `
        Thank you, <strong>${name}</strong>!<br>
        We received your question about <em>${topic}</em>.<br>
        Experience level: ${level}.<br>
        Subscribe to updates: ${subscribe ? 'Yes' : 'No'}<br>
        Message: ${message}
    `;

    form.reset();
});
