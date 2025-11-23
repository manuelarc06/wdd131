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

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },

    {
        templeName: "Bogotá Colombia",
        location: "Bogotá, Colombia",
        dedicated: "1999, April, 24",
        area: 53500,
        imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/bogota-colombia-temple/bogota-colombia-temple-7741-thumb.jpg"
    },

    {
        templeName: "Manaus Brazil",
        location: "Manaus, Brazil",
        dedicated: "2012, June, 10",
        area: 32032,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/manaus-brazil-temple/manaus-brazil-temple-16199-thumb.jpg"
    },

    {
        templeName: "Paris France",
        location: "Paris, France",
        dedicated: "2017, May, 21",
        area: 44175,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple/paris-france-temple-11048-thumb.jpg"
    }
];

function displayTemples(list) {
    const container = document.getElementById("temple-cards");
    container.innerHTML = "";

    list.forEach(t => {
        const card = document.createElement("section");
        card.classList.add("temple-card");

        card.innerHTML = `
            <h3>${t.templeName}</h3>
            <p><strong>Location:</strong> ${t.location}</p>
            <p><strong>Dedicated:</strong> ${t.dedicated}</p>
            <p><strong>Area:</strong> ${t.area} sq ft</p>
            <img src="${t.imageUrl}" alt="${t.templeName}" loading="lazy" width="430" height="220">
        `;

        container.appendChild(card);
    });
}

displayTemples(temples);

const title = document.getElementById("page-title");

document.getElementById("home").addEventListener("click", () => {
    title.textContent = "Home";
    displayTemples(temples);
});

document.getElementById("old").addEventListener("click", () => {
    title.textContent = "Old Temples";
    displayTemples(temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1900));
});

document.getElementById("new").addEventListener("click", () => {
    title.textContent = "New Temples";
    displayTemples(temples.filter(t => parseInt(t.dedicated.split(",")[0]) > 2000));
});

document.getElementById("large").addEventListener("click", () => {
    title.textContent = "Large Temples";
    displayTemples(temples.filter(t => t.area > 90000));
});

document.getElementById("small").addEventListener("click", () => {
    title.textContent = "Small Temples";
    displayTemples(temples.filter(t => t.area < 10000));
});