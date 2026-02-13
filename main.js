const noBtn = document.getElementById("noBtn");
const card = document.querySelector(".card");
const buttonsZone = document.querySelector(".buttons");

/* Positionnement initial */
noBtn.style.position = "absolute";

function moveButton() {
    const zoneRect = buttonsZone.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();

    const maxX = zoneRect.width - btnRect.width;
    const maxY = zoneRect.height - btnRect.height;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

/* Fuite au survol */
noBtn.addEventListener("mouseover", moveButton);

/* 🔥 BONUS : impossible de cliquer */
noBtn.addEventListener("click", (e) => {
    e.preventDefault();
    moveButton();
});
